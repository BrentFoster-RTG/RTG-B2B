import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/done-components">Done Components</Link>
      <br />
      <br />
      <Link to="/in-work">In work Components</Link>
    </div>
  )
}

export default Home