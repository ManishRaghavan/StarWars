import React from "react";
import logo from "./star-wars-logo.png";
import "./index.css";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { SuggestionCard } from "../../Components/SuggestionCard/SuggestionCard";

const data = [
  {name:"name1",birth_year:"5454",gender:"Male"},
  {name:"name2",birth_year:"5454",gender:"Female"},
  {name:"name2",birth_year:"5454",gender:"Female"}
]

function HomePage() {
  const [word, Setword] = React.useState("s");
  const [loader, setLoader] = React.useState(false);

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Star Wars Logo" />
      </div>
      {/* search bar made with input logo and cancel button */}
      <div className="search-box">
        <input className="search-box--input" placeholder="search by name" />
        {word !== "" ? 
          <React.Fragment>
            <div className="search-box--cancelBtn">X</div>
            <div className="search-box--splitLine"></div>
            {!loader ? (
              <div className="search-box--searchBtn">
                <p className="search-box--searchBtn--logo">
                  <BiSearch />
                </p>
              </div>
            ) : (
              <div className="search-box--loader"></div>
            )}
          </React.Fragment>
         : null}
      </div>
        <div className="suggestion-box">
          <div className="suggestion-box--splitLine"></div>
            {data?.map((item)=>(
              <SuggestionCard {...item}/>
            ))}
        </div>

    </div>
  );
}

export default HomePage;
