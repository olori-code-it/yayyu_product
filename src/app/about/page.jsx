import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import frame23 from '../public/Frame 23.png';
import frame46 from '../public/Frame 46.png';

const about = () => {
  return (
    <div className='bg-white'>
        <nav>
            <Navbar />
        </nav>
        <main>
            <div>
                <Image 
                    src={frame23}
                    alt='About Image 1'
                />
            </div>

            <div>
                <div className='flex justify-center my-9'>
                    <Image 
                        src={frame46}
                        alt='About Image 2'
                    />
                </div>
            </div>

            <div className='text-black font-dmSans text-xl font-normal leading-8'>
                <p>
                    At YAYYU, we believe that every woman deserves to feel both comfortable and stylish, no matter the occasion.
                    Our mission is to provide sustainable clothing options that blend elegance with modern design, suitable for 
                    both formal and informal settings.
                </p>

                <p>
                    We are committed to using only the finest materials and delivering exceptional designs that reflect our dedication to quality. Our collections feature modest yet fashionable styles with clean cuts, ensuring that each piece enhances your wardrobe.
                </p>

                <p>
                    As a socially empowered team, we strive to make shopping easy and enjoyable through our thoughtfully crafted
                    designs and fase, seamless delivery. We aim to inspire women across the globe to embrace their unique style and wear pieces that make them feel their best, always.
                </p>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default about