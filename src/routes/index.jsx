import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import all components
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from '../components';
import Award from '../components/Award';
import Footer from '../components/Footer';

export default function RoutesPath() {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Award />
                <Tech />
                <Works />
                <Feedbacks />
                <div className='relative z-0'>
                    <Contact />
                    <StarsCanvas />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
