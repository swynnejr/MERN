import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [allCoins, setAllCoins] = useState([])

  const clickHandler = ()=> {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(response =>{
      return response.json()
    }) // this is what we do after the fetch call is responded to
    .then(response=>{
      console.log("the response looks like this")
      console.log(response)
      
      setAllCoins(response)
    })
    .catch(err=>{
      console.log(err)
    }) // "catches" our errors, and this is what we do with them
  }

  return (
    <div className="App">
      <h1>Top Cryptos Today!</h1>
      <button onClick={clickHandler} className="btn btn-success">Show me the Money</button>
      {
        allCoins.map((coin, index)=>{
          return (
          <>
            <div className="card" key = {index}>
              <div className="card-body">
                <img src={coin.image}></img>
                <h4 className="card-title">{coin.name}</h4>
                <h1 className="card-title">{coin.symbol.toUpperCase()}</h1>
                <h2 className="card-title">{Math.round(coin.price_change_percentage_24h)}%</h2>
                <p className="card-text">Current Price: ${coin.current_price}</p>
              </div>
            </div>
          </>
          )
        })
      }
    </div>
  );
}

export default App;
