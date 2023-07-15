import React from 'react'
import Cards from '../Components/Cards';
import Data from '../backend/Data';
import './Home.css'
import { NavItem } from 'react-bootstrap';

export const Home = () => {
  return (
    <section id='home'>
    <div className='container-fluid'>
        <p className='text-center mt-5 text-uppercase'>Shop Page</p>
        <div className="container py-4">
            <div className="row">
                {Data.products.map((item,index) => {
                    return(
                        <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />

                    )
                })}
            </div>

        </div>
    </div>
    </section>
  )
}
export default Home;