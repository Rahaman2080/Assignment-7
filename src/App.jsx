import './index.css';
import './App.css'
import Cards from './Components/Cards/Cards'
import Carts from './Components/Cart/Carts';
import { useState } from 'react';

function App() {
  const [cardTitle, setCardTitle] = useState([]);
  const [residual, setResidual] = useState(20);
  const [totalHour, setTotalHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const handleSelectBtn = card => {
    const isAvailable = cardTitle.find(item=>item.id == card.id);

    let totalTime = card.credit_time;
    let price = card.price;
    
    if(isAvailable){
      alert("Already selected");
    }else{
      cardTitle.forEach((item) => {
        totalTime = totalTime + item.credit_time;
        price = price + item.price;
      });

      const totalRemaining = 20 - totalTime;
      if(totalTime > 20){
        return alert('Maximum time is not allowed')
      } else{
        setResidual(totalRemaining);
        setTotalHour(totalTime);
        setTotalPrice(price);
        setCardTitle([...cardTitle, card]);
      }  
    }  
  };
  
  return (
    <>
      <div className='my-10'>
      <h1 className=' font-bold md:text-xl lg:text-3xl text-center py-8'>Course Registration</h1>
       <div className='md:flex max-w-7xl mx-auto gap-5'>
       <Cards handleSelectBtn ={handleSelectBtn}></Cards>
       <Carts 
       cardTitle={cardTitle}
       residual={residual}
       totalHour={totalHour}
       totalPrice={totalPrice}
       ></Carts>
       </div>
      </div>
    </>
  )
}
export default App
