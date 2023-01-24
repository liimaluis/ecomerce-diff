import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Pesquisa from "../../atomos/barra-de-pesquisa/pesquisa";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Pagproduto from "../../components/pagproduto";
import "./style.css";

import promo from "../../assets/img/diffstyle_promo_da_semana.png";
import gerente from "../../assets/img/gerente.png";
import promo2 from "../../assets/img/todos_os_estilos.png";

export default function Home() {
  return (
    <div>
      <nav>
        <Pesquisa />
      </nav>

      <Header />

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={gerente} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={promo} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={promo2} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <Pagproduto />
      </div>

      <Footer />
    </div>
  );
}
