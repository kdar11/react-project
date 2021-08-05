 
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import CharacterGrid from './components/CharacterGrid';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';
import { Link,BrowserRouter, Route,Switch } from 'react-router-dom';
import Quotes from './components/Quotes';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  
  const onChange=(q) => {
        setQuery(q)
         
  }

  useEffect(() => {
    const fetchItems = async () => {
       
      setIsLoading(true)
      const result= await axios(`https://www.breakingbadapi.com/api/characters?name=${query.trim()}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
      fetchItems()
  }, [query]
  )
  // const fetchData = async () =>{
     
  //   setIsLoading(true)
  //   const result= await axios(`https://www.breakingbadapi.com/api/characters?name=${query.trim()}`)
  //   console.log(result.data)
  //   setItems(result.data)
  //   setIsLoading(false)
  // }
  
  // const fetchQuotes = async () => {
  //           console.log("in useeffect")

  //           const result = await axios(`https://www.breakingbadapi.com/api/quote?author=${query}`)
  //           console.log(result.data)
  //           setQuotes(result.data)

  //       }
  //   console.log(props.query)
    // useEffect(() => {
    //     const fetchQuotes = async () => {
    //         console.log("in useeffect")

    //         const result = await axios(`https://www.breakingbadapi.com/api/quote?author=${props.query}`)
    //         console.log(result.data)
    //         setQuotes(result.data)

    //     }
    //     fetchQuotes()
    // }, [props.query]
    // )
  console.log(items)
  return (
    <div className="App">
       
        <>
        <BrowserRouter>
         
       <div>
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to={"/"}>Characters</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/quotes"}>Quotes</Link>
            </li>
            
            
            
            </ul>
        </div>
         <Header/>
         
          {/* <section className='search'>
            <div className="row">
              <input
                type='text'
                className='form-control'
                placeholder='Search any characters'
                value={query}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
              />
              <button class="btn btn-outline-secondary" onClick={fetchData} type="button">Button</button>

            </div>
          </section>
           */}
         <Switch>
            <Route exact path="/">
               <Search getQuery={(q)=> setQuery(q)} />
               <CharacterGrid isLoading={isLoading} items={items} />
            </Route>
            <Route path="/quotes">
               <Search getQuery={(q)=> setQuery(q)} />
               <Quotes query={query}/>
            </Route>

         </Switch>
         </BrowserRouter>  
        </>


         {/* <Header/>
         <Search getQuery={(q)=> setQuery(q)}/> */}
        
    </div>
  );
}

export default App;
