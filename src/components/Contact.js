// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";
const Contact = ({ data }) => {
  return (
    <div className="contact">
      <div className="foto">
        <img src={data.photo} alt={data.name} />
      </div>
      <div className="data">
        <h2>{data.name}</h2>
        <h3>{data.phone}</h3>
        <h4>{data.email}</h4>
      </div>
    </div>
  );
};

export default Contact;
