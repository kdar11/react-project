import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to={"/"}>Characters</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/quotes"}>Quotes</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/quotes"}>Alive</Link>
            </li>
            
            
            
            </ul>
        </div>
    )
}

