import './index.css';
import './App.css'
import Cards from './Components/Cards/Cards'
import Carts from './Components/Cart/Carts';
import { useState } from 'react';

function App() {
  const [cardTitle, setCardTitle] = useState([]);
  const [residual, setResidual] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  

  const handleSelectBtn = card => {
    const isAvailable = cardTitle.find(item=>item.id == card.id);

    let totalTime = card.credit_time;
    if(isAvailable){
      alert("Already selected");
    }else{
      cardTitle.forEach((item) => {
        totalTime = totalTime + item.credit_time;
      }); 

      const totalRemaining = 20 - totalTime;
      if(totalTime > 20){
        return alert('Maximum time is not allowed')
      } else{
        setResidual(totalRemaining);
        setTotalHour(totalTime);
        setCardTitle([...cardTitle, card]);
      }
      
    }  
  };
  
  return (
    <>
      <div className='my-10'>
      <h1 className=' font-bold md:text-xl lg:text-3xl text-center'>Course Registration</h1>
       <div className='md:flex max-w-7xl mx-auto gap-5'>
       <Cards handleSelectBtn ={handleSelectBtn}></Cards>
       <Carts 
       cardTitle={cardTitle}
       residual={residual}
       totalHour={totalHour}
       ></Carts>
       </div>
      </div>
      
    
      
    </>
  )
}

export default App
