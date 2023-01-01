
import { useState } from 'react';
import './App.css';
import ItemCard from './components/ItemCard';


function App() {

  const [items, setItems] = useState([
    {},


  ]);

  const [pastProducts, setPastProducts] = useState([
    { name : 'Holiday Tranquility',
      imgUrl : 'https://i.ibb.co/QPCZYc3/holidaytranquility.jpg'},

      { name : 'Violet Flower Bed',
      imgUrl : 'https://i.ibb.co/thVX23B/shadowblanket.jpg'},

      { name : 'Smiling Nutella',
      imgUrl : 'https://i.ibb.co/tJhCXd9/nutella.jpg'},

      { name : 'Kissing Bears',
      imgUrl : 'https://i.ibb.co/VQLfcPV/bearkiss.jpg'},

    { name : 'Loving Kitten',
      imgUrl : 'https://i.ibb.co/zSgKwZ3/kitten.jpg'}


  ]);
  return (
    <div className='flex flex-col h-screen bg-gray-100 font-serif overflow-hidden'>

      <header className='py-2 text-center w-full border-b border-grey'>
        <div>
          <p className='text-4xl'>Softable</p>
        </div>
      
        <div className='flex space-x-2 text-center place-content-center'>
        <p className='text-color-black hover:text-sky-400'>About Us</p>
        <p className='text-color-black hover:text-sky-400'>Catalogue</p>
        <p className='text-color-black hover:text-sky-400'>Contact Us</p>
        </div>

      </header>

      <main className='flex-1 overflow-y-scroll'>
          <div className='flex flex-row py-8 items-center'>

            <div className='basis-1/2 text-center'>
              <p className='text-2xl'>A bit about us!</p>
                <p className='text-lg px-6'>
                  Our blankets are made by hand, which means that there will never be 2 exactly alike.
                   All blankets are made with Chenille yarn. There are many colors available.
                   If you see a color that you like we will do our best to source it for you. We do custom
                   sizing, designs and even pet beds. We don't just make throw blankets in the usual sizes, 
                   we also make bed spreads.
                  </p>

                  <p className='text-2xl pt-8'>Intrested in a Custom Order?</p>
                  <p className='text-lg px-6'>
                    Custom orders is what we do! If you are intrested in getting your own blanket tailored
                    to your likes and desires that's no problem! Everything is customizable from shape, size,
                    form, color, and design. If you have a design already in mind or a color scheme, send us
                    an email at the address below and we'll make sure to get back to you to get you a fairly
                    priced quote!
                  </p>

            </div>

            <div className='basis-1/2'>        
                <img src='https://i.ibb.co/NFxY7YG/IMG-20221002-215750-224.webp' className='w-1/2 rounded-tl-3xl rounded-br-3xl
                 rounded-bl-lg rounded-tr-lg'></img>
            </div>
            
          </div>

          <p className='text-center text-3xl p-4'>Past Products</p>



          <div className='border m-12 bg-gray-200 flex flex-wrap gap-4 p-4 place-content-center'>
             
              

              {
                pastProducts.map((item)=>
                <ItemCard
                  item={item}/>
                )
              }
          </div>  



            <p className='text-center text-3xl p-4'>Available Products!</p>

          <div className='justify-center border m-12 bg-gray-200'>


          </div>  
        
          <div className='flex flex-row py-8 text-center'>

            <div className='basis-1/2 '>
            <p className='text-2xl'>Got any questions or intrested in something?</p>
                  <p className='text-lg'>If you have any questions or are intrested in a product shown
                  above, feel free to contact us through any of the provided information
                   and we'll get back to you to as soon as possible! If you are searching for a custom blanket,
                   shoot us an email and we can discuss pricing, colors, designs and more. We look foward
                   to hearing from you!</p>
            </div>

            <div className='basis-1/2'>        
                <p className='text-lg'>Email: example@gmail.com</p>
                <p className='text-lg'>Phone Number: 555-555-5555</p>
                <p className='text-lg'>Facebook Page:<a className='px-2 border rounded-full text-color-black hover:text-sky-400'
                 href='https://www.facebook.com/SoftableBlankets'>Click me!</a></p>
                 <p className='text-lg'>Instagram Page:<a className='px-2 border rounded-full text-color-black hover:text-sky-400'
                 href='https://www.instagram.com/softableofficial/'>Click me!</a></p>
            </div>
          </div>
          


      </main>

    </div>
  );
}

export default App;
