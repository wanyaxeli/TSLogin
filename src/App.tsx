import React,{useState,ChangeEvent,FormEvent} from 'react';
import logo from './logo.svg';
import './App.css';
interface Value {
  first:string;
  last:string;
  password:string;
  email:string;
  phone:number
}
function App() {
  const initialState:Value={
   first:'',
   last:'',
   password:'',
   email:'',
   phone:2
  }
  const[value,setValue]=useState<Value>(initialState)
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
   const inputValue = e.target.value
    const name = e.target.name
    setValue({...value,[name]:inputValue})
  }
  const handleSubmit=(e:FormEvent)=>{
   e.preventDefault()
   alert ('submitted!')
  }
  console.log(value)
  return (
    <div className="App">
    <form>
       <input name='first' onChange={handleChange} type='text' placeholder='First name'/>
      <input name='last' onChange={handleChange} type='text' placeholder='Last name'/>
      <input name='password' onChange={handleChange} type='password' placeholder='Password'/>
      <input name='email' onChange={handleChange} type='email' placeholder='Email'/>
      <input name='phone' pattern='[0-9]*' onChange={handleChange} type='text' placeholder='Phone number'/>
      <button onClick={handleSubmit} type='submit'>Submit</button>
    </form>
    </div>
  );
}

export default App;
