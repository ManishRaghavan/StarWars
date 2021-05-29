import axios from "axios";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./index.css";
import logo from "./star-wars-logo.png";

function Person() {
  const [person_data, setPersonData] = React.useState([]);
  const history = useHistory();
  const location = useLocation();

  /*
  parsing the url to get the person id such that we can get 
  data of the person by sending the get request
  */
  React.useEffect(() => {
    let id = +location.pathname.split("/")[2];
    axios
      .get(`http://swapi.dev/api/people/${id}/`)
      .then((res) => setPersonData(res.data))
      .catch((err) => err);
  }, [location.pathname]);

  const handleRedirect = () => {
    history.push("/");
  };

  return (
    <div className="person-card">
      {/* svg taken from getwave.io */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffd700"
          
          d="M0,0L34.3,16C68.6,32,137,64,206,117.3C274.3,171,343,245,411,
          250.7C480,256,549,192,617,154.7C685.7,117,754,107,823,117.3C891.4,128,
          960,160,1029,192C1097.1,224,1166,256,1234,261.3C1302.9,267,1371,245,1406,
          234.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,
          891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,
          34,0L0,0Z"
        ></path>
      </svg>
      <img src={logo} alt="Star Wars Logo" className="person-card--logo" />
      <div className="person-card--contentBox">
        <p className="person-card--contentBox--p">Name : {person_data?.name}</p>
      </div>
      <div className="person-card--contentBox">
        <p className="person-card--contentBox--p">
          Birth Year : {person_data?.birth_year}
        </p>
      </div>
      <div className="person-card--contentBox">
        <p className="person-card--contentBox--p">
          Gender : {person_data?.gender}
        </p>
      </div>
      <div className="person-card--contentBox">
        <p className="person-card--contentBox--p">
          Height : {person_data?.height}
        </p>
      </div>
      <div className="person-card--contentBox">
        <p className="person-card--contentBox--p">
          Hair Color : {person_data?.hair_color}
        </p>
      </div>
      <div className="person-card--contentBox">
        <p className="person-card--contentBox--p">
          Hair Color : {person_data?.eye_color}
        </p>
      </div>
      <div className="person-card--redirectBtn" onClick={handleRedirect}>
        <p className="person-card--redirectBtn--p">Go back to search..</p>
      </div>
    </div>
  );
}

export default Person;
