import React,{useState} from 'react'

export default function Search(props) {
    const getQuery=props.getQuery
    const [text,setText]= useState('')
    const onChange=(q) => {
          setText(q)
          getQuery(q)
    }
    
    return (
      <section className='search'>
         <div className="row">
          <input
            type='text'
            className='form-control'
            placeholder='Search any characters'
            value={text}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
           {/* <button class="btn btn-outline-secondary" type="button">Button</button> */}
         
        </div> 
      </section>
    )
}
