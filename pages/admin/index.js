import React from 'react'
import Categories from '../../components/home/categories'
import Closet from '../../components/layout/Closet'

const Home = () => {
  return (
    <Closet active="Home">
      <div className="">
     
        <div>
        
          <Categories />
        </div>
      </div>
    </Closet>
  )
}

export default Home
