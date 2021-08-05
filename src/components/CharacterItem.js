import React from 'react'

export default function CharacterItem(props) {
    const item= props.item
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {item.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {item.birthday}
              </li>
              <li>
                <strong>Occupation:</strong> {item.occupation.join(',')}
              </li>
              {/* <li>
                <strong>Status:</strong> {item.status}
              </li> */}
              {
              item.status==="Alive"? (<li>
                <strong>Status:</strong> <span style={{color:'green'}}>{item.status}</span>
              </li>):
                <li>
                <strong>Status:</strong> <span style={{color:'red'}}>{item.status}</span>
              </li>
            }
            </ul>
          </div>
        </div>
      </div>
    )
}
