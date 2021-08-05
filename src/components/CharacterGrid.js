import React from 'react'
import Spinner from './Spinner.js'
import CharacterItem from './CharacterItem'
export default function CharacterGrid(props) {
    const items=props.items
    const isLoading=props.isLoading
     
    return (
          
        isLoading ? (<Spinner/>) : (
            <section className="cards">
                {   
                   items.length==0 ? (<div className="card" style={{ left:'600px',text:'center',height:'100px'}}> Not Found</div>):items.map((item,index) => (
                        <CharacterItem  key={index} item={item}/>
                    ))
                }
            </section>
        )
            
          
    )
}
