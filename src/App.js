import './App.css';
import Axios from 'axios';
import {useState} from 'react';

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState('');

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
      setGeneratedExcuse(res.data[0].excuse);
    });
  };
  
  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <button onClick={() => fetchExcuse("children")}>Children</button>
      <button onClick={() => fetchExcuse("college")}>College</button>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("funny")}>Funny</button>
      <button onClick={() => fetchExcuse("unbelievable")}>Unbelievable</button>
      <button onClick={() => fetchExcuse("developers")}>Developers</button>
      <button onClick={() => fetchExcuse("gaming")}>Gaming</button>
      <p>{generatedExcuse}</p>
    </div>
  );
}

export default App;
