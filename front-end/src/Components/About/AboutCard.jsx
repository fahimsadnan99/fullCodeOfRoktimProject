import React from "react";
import Card from "./Card";

const AboutCart = () => {
  const personData = [
    {
      img: "./img/person1.jpeg",
      name: "S M Kishor",
      designations: "Chairman",
      Email: "smkishorsmk@gmail.com",
      Mobile: "01871387176",
    },
    {
      img: "./img/person2.jpeg",
      name: "Polash Bhuiyan",
      designations: "Co-chairman ",
      Email: "bappy7912@gmail.com",
      Mobile: "01837553761",
    },
    {
      img: "./img/person3.jpeg",
      name: "Ruhul Amin",
      designations: "Managing Director",
      Email: "ruhulamin.ap@gmail.com",
      Mobile: "01881406975",
    },
    {
      img: "./img/person4.jpeg",
      name: "Zahangir Alam",
      designations: "Manager",
      Email: "Chanchaljahangir@gmail.com",
      Mobile: "01643432379",
    },
  ];

  return (
    <div className="row">
        {personData.map((person) => {
            return (
                <div className="col-md-6 col-lg-3">
                    <Card person={person}></Card>
                    </div>
            );
        })}
   
    </div>
  );
};

export default AboutCart;
