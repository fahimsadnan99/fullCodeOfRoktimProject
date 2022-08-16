import React from 'react'

const Card = ({person}) => {
    return (
      <div>
        
          <div className="card aboutPerson">
            <img src={person.img} className="card-img-top" alt="img" />
            <div className="card-body">
              <p>{person.name}</p>
              <p> {person.designations} </p>
              <p style={{ fontSize: "15px" }}> {person.Email} </p>
              <p> {person.Mobile}</p>
          </div>
        </div>
      </div>
    );
}

export default Card
