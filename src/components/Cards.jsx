import React from "react";

const Cards = ({img, nombre, roles, correo}) => {

  return (
    <>
      <div className="conta">
        <img src={img} alt="logo" className="logo"/>
        <h2>Nombre: {nombre}</h2>
        <h4>Roles: {roles}</h4>
        <h4>Correo: {correo}</h4>
      </div>
    </>
  );
};

export default Cards;