import React from "react";
import { useParams, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import data from "../assets/dummyData";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Services = () => {
  const { id } = useParams();
  const singleData = data.treatments.find((el) => el.id === Number(id));

  return (
    <div>
      <Header title={singleData.title} currentStep="2/2" />
      <div className="treatments">
        <img src={singleData.thumbnail} alt={singleData.title} />
        <h1>{singleData.title}</h1>
        <p>{singleData.description}</p>

        <Link to="/">
          <Button variant="outlined">Back</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
