import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found-page'>
        <h2>Page Not Found</h2>
        <p>Go back to <Link to='/'>Home</Link></p>
    </div>
  )
}

export default NotFound