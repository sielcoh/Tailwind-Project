import React from 'react'
import pic1 from '../../public/site_images/pic1.jpg'
import pic2 from '../../public/site_images/pic2.jpg'
import pic3 from '../../public/site_images/pic3.jpg'
import pic4 from '../../public/site_images/pic4.jpg'
import refelct from '../../public/site_images/refelct.jpg'
import refelct2 from '../../public/site_images/refelct2.jpg'

export default function Landing() {
    return (
        <>
            <header className='min-h-[100px] bg-white'>
                <nav className='container center min-h-[inherit]'>
                    <ul className='flex space-x-4'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Gallery</a></li>
                        <li><a href='#'>Map</a></li>
                    </ul>
                </nav>
            </header>
            <div className='min-h-[300px] center bg-gray-500 bg-center bg-cover]' style={{ backgroundImage: 'url(/../public/site_images/cover.jpg)' }}>
                <div className='container'>
                    <h1 className='text-7xl text-white center font-thin'>Welcome to my site</h1>
                </div>
            </div>
            <div className='min-h-[300px] bg-white center'>
                <div className='max-w-[500px] text-center'>
                    <h2 className='text-6xl font-thin mb-4'>about</h2>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. In maiores suscipit quae commodi ratione cumque doloremque porro! Repudiandae veritatis minus dolorem incidunt minima recusandae doloremque eligendi, aliquid atque unde maxime suscipit, dignissimos dolores. Ipsa laborum veritatis magnam eum illum temporibus repellat quod, suscipit ea
                    </p>
                </div>
            </div>

            <div className='min-h-[300px] bg-gray-300'>
                <div className='contaier text-center pt-5'>
                    <h2 className='mb-4 font-thin text-5xl'>LeaderShip <strong>Team</strong></h2>
                    <div className='grid sm:grid-cols-2 md:grid-cols-4 justify-center space-x-14'>

                        <div className='p-2 mx-auto'>
                            <img src={pic1} alt='pic1' className='w-[130px] h-[130px] rounded-full' />
                            <h3>John Doe</h3>
                            <p>CEO</p>
                        </div>
                        <div className='p-2 mx-auto'>
                            <img src={pic2} alt='pic2' className='w-[130px] h-[130px] rounded-full' />
                            <h3>David Ron</h3>
                            <p>CTO</p>
                        </div>
                        <div className='p-2 mx-auto'>
                            <img src={pic3} alt='pic3' className='w-[130px] h-[130px] rounded-full' />
                            <h3>Maron Sin</h3>
                            <p>Data Scientist</p>
                        </div>
                        <div className='p-2 mx-auto'>
                            <img src={pic4} alt='pic4' className='w-[130px] h-[130px] rounded-full' />
                            <h3>Eyal Ben</h3>
                            <p>Data Analyst</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='min-h-[300px] bg-center bg-cover' style={{ backgroundImage: 'url(/../public/site_images/cover2.jpg)' }}>
                <div className='container text-white text-center'>
                    <h2 className='text-5xl font-thin text-center py-3'>Let's Program Together</h2>
                    <p className='max-w-[500px] text-center mx-auto py-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt laudantium sapiente eveniet? Sunt tempore eum maiores id officiis suscipit maxime animi placeat expedita laborum, rem, aspernatur magni quasi magnam.</p>
                    <button className='bg-white text-black px-4 py-2 rounded-lg cursor-pointer'>Join Us</button>
                </div>

            </div>

            <main className='bg-white min-h-[500px]'>
                <div className="container py-12">
                    <div className='flex flex-wrap justify-between items-center p-2'>

                        <div className='md:w-5/12 mb-4 mx-auto'>
                            <img src={refelct} alt='smartphone' className=' h-[300px]' />
                        </div>
                        <div className='md:w-6/12 mb-4 text-center'>
                            <h2 className='font-thin text-5xl'>The best site</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corrupti voluptatem dicta iure dolores optio, cupiditate quod saepe esse maxime officia fuga velit temporibus ipsum laboriosam alias sapiente assumenda explicabo magnam libero in expedita! Laborum numquam saepe necessitatibus praesentium dolor!</p>
                        </div>

                        <div className='md:w-6/12 mb-4 order-1'>
                            <h2 className='font-thin text-5xl'>Subscribe today!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corrupti voluptatem dicta iure dolores optio, cupiditate quod saepe esse maxime officia fuga velit temporibus ipsum laboriosam alias sapiente assumenda explicabo magnam libero in expedita! Laborum numquam saepe necessitatibus praesentium dolor!</p>
                        </div>

                        <div className='md:w-5/12 mb-4 order-0 md:order-2 mt-6 mx-auto'> 
                            <img src={refelct2} alt='smartphone2' className='w-full h-[300px] '/>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
