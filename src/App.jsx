import { useState } from 'react'
import icon from './assets/icon.png'
import './App.css'
import {Placeholder} from './assets/Placeholder.jsx'


function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [price, setPrice] = useState(0)
  const [deviation, setDeviation] = useState(0)
  function GetData(coin){
    console.log(coin)
    coin = coin.toLowerCase()
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`)
    
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPrice(data[coin].usd)
    })
  
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <>
      <div className='bg-gray-700 flex justify-center font-bold text-3xl md:text-5xl p-10 bg-blend-overlay'>
        <div className='pr-2 md:p-2 mt-2 md:mt-0'>
          <img src={icon} alt='icon' className='h-7 w-8  md:h-10  md:w-15' />
        </div>
        <div>Crypto Currency Tracker </div>
      </div>
      <div className='grid grid-cols-1 text-center p-4 md:p-10 md:flex justify-center font-bold text-sm  md:text-2xl'>
        <div>🚀📊 Stay ahead of the market—track, </div>
        <div>analyze crypto in real time! 🚀📊 </div>
      </div>
      <div className='flex justify-center'>
        <Placeholder selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Placeholder>
      </div>
      <div>
        <div className='flex justify-center p-10 '>
          <button onClick={() => GetData(selectedOption)} className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full mt-5'>
            Get Data
          </button>
          
        </div>
      </div>
      <div>
        <div className='flex justify-center  '>
          <div className='bg-gray-700 text-white font-bold py-2 px-4 rounded-full mt-5'>
            {price ? ` Price: $${price}` : "Select a coin"}
            {}
          </div>
        </div>
      </div>
    </>
  )
}


export default App
