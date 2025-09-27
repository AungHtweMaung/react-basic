
import React from 'react';
import './Navbar.css';

export default function Navbar({setModal}) {
  return (
    <nav>
        <div className='container modal'>
            <h3>Logo</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li onClick={()=>setModal(true)}>Create Post</li>
            </ul>
        </div>
    </nav>
  )
}
