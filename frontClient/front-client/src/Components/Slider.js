import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import clinicImg1 from '../asserts/clinic1.jpg';
import clinicImg2 from '../asserts/clinic2.jpg';
import clinicImg3 from '../asserts/clinic3.jpg';
import clinicImg4 from '../asserts/clinic4.jpg';
import styled from "styled-components";
import LeftMenu from "./LeftMenu";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav {
    color: darkblue;

    &:hover {
      color: green;
    }
  }

  .carousel-item img {
    max-width: 100%;
    height: auto;
  }
`;

const Slider = () => {
    return (
        <>
            <Styles>
                <Row>
                    <Col sm={2}>
                        <LeftMenu/>
                    </Col>
                    <Col sm={10}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={clinicImg1}
                                    alt="clinic"
                                />
                                <Carousel.Caption>
                                    <h3>Clinic image</h3>
                                    <p>Very good!!!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={clinicImg2}
                                    alt="clinic"
                                />
                                <Carousel.Caption>
                                    <h3>Clinic image2</h3>
                                    <p>Pretty good!!!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={clinicImg3}
                                    alt="clinic"
                                />
                                <Carousel.Caption>
                                    <h3>Clinic image</h3>
                                    <p>Very good!!!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={clinicImg4}
                                    alt="clinic"
                                />
                                <Carousel.Caption>
                                    <h3>Clinic image</h3>
                                    <p>Very good!!!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Styles>
        </>
    );
};

export default Slider;
