import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Quotes(props) {
    const [quotes, setQuotes] = useState([])
    console.log(props.query)
    useEffect(() => {
        const fetchQuotes = async () => {
            console.log("in useeffect")

            const result = await axios(`https://www.breakingbadapi.com/api/quote?author=${props.query.trim()}`)
            console.log(result.data)
            setQuotes(result.data)

        }
        fetchQuotes()
    }, [props.query]
    )
    console.log(quotes)
      
    return ( 
          <section class="cards">
         
            {   
                quotes.map((quote) => (
                    <div className="card"style={{width:'300px'}}>
                        <div className="card-header">
                            Quote
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>{quote.quote}</p>
                                <footer className="blockquote-footer">{quote.author}</footer>
                            </blockquote>
                        </div>
                    </div>
                ))
            }
            </section>
    )
}
