import React from 'react';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import './smallEvent.css';
import '../components/Layout/App.css'


function SmallEvents() {
        
  return (
    
    <>
    <Header></Header>
        <section className='slide-form'>
            <div className='container'>
                <div className='headings'>
                <h2>Plan your Event</h2>
                <span>Search and Book our Services</span>
                </div>
        <form action='./SmallEvents'>
            <div className='flex_space'>
            <label >
            <select className='event'  >
                <option selected value="placeholder" >Choose Event scale i.e, small, big or corporate</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            </div>

            <div className='flex_space'>
            <label >
            <select>
                <option selected value="placeholder">Select venue..</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            </div>
            <div className='flex_space'>
                <input type='date' placeholder='Event date'></input>
            </div>
            <div className='flex_spaces'>
            <input type='text' placeholder='Search services...' name='' id=''></input>
            </div>
            <div className='flex_spaces'>
                <input type='number' placeholder='Enter your budget range...'></input>
            </div>      
                <input type='submit' value='Search' className='submit'></input>
            
        </form>
        </div>
        </section>
        <Footer></Footer>
        </>
  )
}

export default SmallEvents;