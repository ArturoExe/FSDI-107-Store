import './navBar.css';
import { gsap } from 'gsap';
import { useEffect } from 'react';

const NavBar = () => {
    
        const timeline=gsap.timeline();

        useEffect(()=>{
            const nav=document.querySelectorAll(".animation");
            timeline.from(nav,{

                opacity:0,
                duration:1,
                stagger:0.5,
            });


        },[]);
    


    return(
        <div className='navBar animation'>

                <a href="#" className='logo'>Youngster</a>

                <ul >
                    <li className='animation'><a href="#">Home</a></li>
                    <li className='animation'><a href="#">About Us</a></li>
                    <li className='animation'><a href="#">Catalog</a></li>
                    <li className='animation'><a href="#">Social</a></li>
                </ul>
        
        </div>
    );

}

export default NavBar;