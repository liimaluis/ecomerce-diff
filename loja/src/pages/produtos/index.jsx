import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Item from "../../components/item";

export default function Produto() {
  let Produtos = [
    {
      nome: "Camisa",
      preco: "R$70,00",
    },

    {
      nome: "Camisa 2",
      preco: "R$75,00",
    },
  ];
  return (
    <div className="h-100">
      <Header />
      <h1>Produto</h1>
      {Produtos.map((p) => (
        <Item nome={p.nome} preco={p.preco} />
      ))}
      <Footer />
    </div>
  );
}
