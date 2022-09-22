import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import instagram from "../../assets/icons/instagram.svg";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Fale conosco em nossas redes sociais</span>
        </div>

        <div>
          <Link to="" className="me-4 text-reset">
            <i
              className="whatsapp"
              src="./assets/whatsapp.svg"
              alt="whatsapp"
            ></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i
              className="facebook"
              src="./assets/facebook.svg"
              alt="facebook"
            ></i>
          </Link>

          <Link to="" className="me-4 text-reset">
            <i
              className="instagram"
              src="./assets/icon/instagram.svg"
              alt="instagram"
            ></i>
          </Link>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Quem somos nós
              </h6>
              <p>
                Somos uma loja aonde vendemos camisetas de diversos tipos e
                jeitos com estampas dos melhores desenhos e animmes do mundo
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Ajude Modercay e Rigby
              </h6>
              <p>
                Juntando-se a nós vc concorre a promoções incriveis e ajuda ao
                mordecai e ao rigby a sairem do parque, rum rum rum
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <i className="fas fa-envelope me-3"></i>
              <p>diffstytle@gmail.com</p>
              <p>
                <i className="fas fa-phone me-3"></i> 11 99999-9999
              </p>
              <p>
                <i className="fas fa-print me-3"></i> 11 8888-8888
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05);"
      >
        ©️ Copyright:
      </div>
    </footer>
  );
}
