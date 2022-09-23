import React from "react";

export default function Produto({ nome, preco }) {
  return (
    <div>
      <p>{nome}</p>
      <p>{preco}</p>
    </div>
  );
}
