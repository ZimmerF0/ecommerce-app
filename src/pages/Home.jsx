import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Helmet title={"Home"}></Helmet>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__cubtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern </h2>
                <p>
                  Officia tempore recusandae quaerat error explicabo tenetur
                  minus saepe est quibusdam blanditiis fuga laborum inventore
                  rerum perspiciatis vitae voluptates, facere exercitationem!
                  Provident.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
