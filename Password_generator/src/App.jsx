import { useState, useCallback, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed]=useState(false)
  const [charAllowed, setCharallowed] = useState(false)
  const [PassWord, setPassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str +="1234567890"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for (let i=1;i<=length ;i++) {
      let char = Math.floor(Math.random() *str.length +1 )
      pass += str.charAt(char)
    }
    setPassword(pass)
  }
      , [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    window.navigator.clipboard.writeText(PassWord)
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, PassWord.length);
  }, [PassWord])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-xl text-white text-center my-3'>Generate Password</h1>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={PassWord}
        className='outline-none w-full py-1 px-3'
        placeholder='Your generated password'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-red-700 text-white px-3 py-0.5 my-2 '
        onClick={copyPasswordToClipboard}
        >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex align-items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked ={numberAllowed}
          id='numberInput'
          onChange={() => {setNumberAllowed((prev)=> !prev);
          }}
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked ={charAllowed}
          id='charcterInput'
          onChange={() => {setCharallowed((prev)=> !prev);
          }}
           />
           <label htmlFor="numberInput">Charcters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
