import { useState, useCallback,useEffect,useRef } from 'react'



function App() {
  const [length, setlenght] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")
  //useRef HOOK
  const passwordRef =useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*-_+=[]{}~`"
    for (let i = 0; i <= length; i++) {
      let chare = Math.floor(Math.random() * str.length + 1)
      
    
    pass += str.charAt(chare)
    }
    setpassword(pass)



  }, [length, number, char, setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
   
   
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])
  
  return (
    <>

      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-6 my-8 text-orange-500 bg-gray-700 py-4">
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <br />
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef} />
          <button onClick={copyPasswordToClipboard } className='outline-none bg-blue-700 text-white'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type='range'
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlenght(e.target.value) }} />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type='checkbox'
              defaultChecked={number}
              id='numberInput'
              onChange={() => { setNumber((prev) => !prev); }}
            />
            <label className='ml-1' htmlFor='numberInput'>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type='checkbox'
              defaultChecked={char}
              id='numberInput'
              onChange={() => { setchar((prev) => !prev); }}
            />
            <label className='ml-1' htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
