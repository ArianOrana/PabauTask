import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import data from "../assets/dummyData";
import "./style.scss";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header title="Choose service" currentStep="1/2" />
      <div className="services">
        {data.treatments.map((el) => (
          <Link to={`/Services/${el.id}`} key={el.id} className="service">
            <img src={el.thumbnail} alt={el.title} />
            <h4>{el.title}</h4>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
