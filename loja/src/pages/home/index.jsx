import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Pesquisa from "../../atomos/barra-de-pesquisa/pesquisa";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Pagproduto from "../../components/pagproduto";
import "./style.css";

import gerente from "../../assets/img/gerente.png";

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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../" alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <Pagproduto />
      </div>

      <Footer />
    </div>
  );
}
