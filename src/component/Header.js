import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <nav>
            <ul>
                <Link to="/">Home </Link>
                <Link to="/Cart">my Cart</Link>

            </ul>
        </nav>
    </div>
  )
}
