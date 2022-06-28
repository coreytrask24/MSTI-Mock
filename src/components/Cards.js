import React from 'react';
import CardItem from './CardItem';
import CardItems from './CardItems';
import './Cards.css';

 function Cards(s) {
    

    return (
        <div className='cards'>
            <h1>Explore MSTI</h1>
            <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                <CardItem 
                src="images/jobs.jpg"
                text="To Inquire about contracting opportunities, explore here to see what contracts we have available."
                label='Job Listings'
                path='/forum'
                /> 
                     <CardItem
              src='images/signup.jpeg'
              text='Sign Up to get exclusive access to all things Comp-U-Build to include special offers and access to our forums'
              label='Sign-Up'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/aboutus.jpg'
              text='Learn about our company history and mission statement.'
              label='About Us'
              path='/products'
            />
            <CardItem
              src='images/contract.jpg'
              text='Learn About our current and upcoming contracts.'
              label='Contracts'
              path='/buildguide'
            />
            <CardItems
              className='top'
              src='images/socialmedia.jpeg'
              text='Follow us on your favorite social media platform. '
              label='Social Media'>
              </CardItems>
                        
                </ul>
            </div>

            </div>
            
        </div>
    )
}

export default Cards