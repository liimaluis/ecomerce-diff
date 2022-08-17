import React from "react";

export default function Item({ nome, preco }) {
  return (
    <div>
      <p>{nome}</p>
      <p>{preco}</p>
    </div>
  );
}
