import { useState } from 'react'
import  Inputbox from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] =useState("usd")
  const [to,setTo] =useState("inr")
  const [converted,setConverted] =useState(0)

const CurrencyInfo = useCurrencyInfo(from)

 const options =Object.keys(CurrencyInfo)
 const swap = ()=>{
  setFrom(to)
  setTo(from)
  setConverted(amount)
  setAmount(converted)
 }


 const convert = ()=>{
  setConverted(amount*CurrencyOptions[to])
 }
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                   convert()
                }}
            >
                <div className="w-full mb-1">
                    <Inputbox
                        label="From"
                        amount={amount}
                        CurrencyOptions={options}
                        onCurrencyChange={(currency)=>setAmount(currency)}
                        selectCurrency={from}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <Inputbox
                        label="To"
                        amount={converted}
                        CurrencyOptions={options}
                        onCurrencyChange={(currency)=>setTo(currency)}
                        selectCurrency={to}
                        amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} To {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
