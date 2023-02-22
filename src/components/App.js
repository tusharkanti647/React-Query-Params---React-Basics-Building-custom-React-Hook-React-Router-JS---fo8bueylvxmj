import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import '../styles/App.css';

const App = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  //Write your code here http://localhost:3000/?id=1&name=Robin&designation=scientist.

  //useEffect(() => {
  //setSearchParams({ id: 1, name: "Robin", designation: "scientist" })
  //}, [])
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const designation = searchParams.get("designation");
  return (
    <>
      <div className='details'>{`Employee ${id} named ${name} works as ${designation}`}</div>
    </>
  )
}

export default App;
