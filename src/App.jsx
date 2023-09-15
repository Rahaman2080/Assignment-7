import './index.css';
import './App.css'
import Cards from './Components/Cards/Cards'
import Carts from './Components/Cart/Carts';
import { useState } from 'react';

function App() {
  const [cardTitle, setCardTitle] = useState([]);


  const handleSelectBtn = card => {
    setCardTitle([...cardTitle, card]);
  };
  // console.log(cardTitle);

  return (
    <>
      <div className='my-10'>
      <h1 className=' font-bold md:text-xl lg:text-3xl text-center'>Course Registration</h1>
       <div className='md:flex max-w-7xl mx-auto gap-5'>
       <Cards handleSelectBtn ={handleSelectBtn}></Cards>
       <Carts cardTitle={cardTitle}></Carts>
       </div>
      </div>
      
    
      
    </>
  )
}

export default App
