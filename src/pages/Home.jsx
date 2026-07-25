import React from 'react'
import './Home.css' 
import Footer from './Footer';
import Login from './Login';


const Home = () => {
  return (<>
    <div className="App">
     <header className="navbar">
       <input type="text" placeholder="Search..." className="search-bar" />
       <nav className="nav-links">
          
       </nav>
     </header>

     <main className="content">
       <section className="gallery">
         <img src="/home11..jpg" alt="Interior 11" />
        
       </section>
       <div className="company">
       <p>Our term of expert interior design designers brings your vision to life,
        Creating stunning and functional spaces that reflect your personality.</p>
        </div>

       <section className="branding">
         <div className="colors">
           <div className="color" style={{ background: '#c2b7aa' }}></div>
           <div className="color" style={{ background: '#b89c8b' }}></div>
           <div className="color" style={{ background: '#99856f' }}></div>
           <div className="color" style={{ background: '#676349' }}></div>
         </div>
         <h1 >FLUXA INTERIOR DESIGN</h1>
         <p>www.fluxa interior.com</p>
       </section>
     </main>
     <Footer/>
   </div>
 
   </>
 )
}

export default Home;
