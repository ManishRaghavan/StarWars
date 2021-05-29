import React from 'react';
import logo from './star-wars-logo.png';
import './index.css';
import {BiSearch} from "@react-icons/all-files/bi/BiSearch"

function HomePage() {
  const[word,Setword] = React.useState("")
  const[loader,setLoader] = React.useState(false)
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <div className="search-box">
          <input className="search-box--input" placeholder="search by name"/>
          <div className="search-box--cancelBtn">X</div>
          <div className="search-box--splitLine"></div>
          {!loader?<div className="search-box--searchBtn"><p className="search-box--searchBtn--logo"><BiSearch/></p></div>:
        <div className="loader"></div>
    }
      </div>
    </div>
  );
} 

export default HomePage;
