import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import AnalyzeProduct from './AnalyzeProduct';

function App() {
  const [link, setLink] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    setClick(true);
    const payload = {
      "key": link
    };
    const res = await axios.post('http://localhost:3001/api/product', payload);
    if (res.data) {
      setData(res.data);
    } else {
      setError('Something gone wrong, Please try again.')
    }
  }
  return (
    <div className="App">
      <div>
        <h1>Put the Amazon Product Link Here 👇👇</h1>
        <form onSubmit={onSubmit}>
          {error && <h2>{error}</h2>}
          <input type='text' name='Link_box' placeholder='Link..' onChange={(e) => setLink(e.target.value)} />
          <input type='submit' value='Analyze Product' />
        </form>
      </div>
      {click && <AnalyzeProduct data={data} />}
    </div>
  );
}

// https://www.amazon.in/Apple-iPhone-13-Mini-256GB/dp/B09G9BJK4X/ref=sr_1_1_sspa?dchild=1&keywords=iphone+12&qid=1633870158&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE2UEFaSEc4TTY3SVImZW5jcnlwdGVkSWQ9QTAyNjkxMzEyTk40R1YzTEE3SUhKJmVuY3J5cHRlZEFkSWQ9QTA4Njg2NjBRTlhVOVNCR0MwU0kmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl
// https://www.amazon.in/dp/B08L5WHFT9

// search on these links

export default App;
