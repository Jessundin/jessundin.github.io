import React, { useEffect, useState } from "react"; //USE s för spara värdet & 
// USE e "När den här sidan laddas, gör detta en gång."
import "./ThankYou.css";

const ThankYou = () => {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Skapar ett ordernummer som har typ : FF-1234
    const generateOrderNumber = () => {
      const randomNumber = Math.floor(1000 + Math.random() * 9000); //Math.floor rundar ner till ett heltal
      return "FF-" + randomNumber;
    };

    setOrderNumber(generateOrderNumber());
  }, []); //hakparanteserna = kör bara EN gång när komponenten visas

  return (
    <div className="thankyou-wrapper">
      <div className="thankyou-box">
        <h1>Tack för ditt köp!</h1>
        <p>Din beställning är mottagen och vi börjar packa direkt.</p>
        <p className="order-number">Ordernummer: <span>{orderNumber}</span></p>
        <a href="/" className="thankyou-btn">Till startsidan</a>
      </div>
    </div>
  );
};

export default ThankYou;