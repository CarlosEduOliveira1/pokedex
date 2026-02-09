import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PokedexItem from "../PokedexItem/PokedexItem";

const PokedexGrid = () => {
  return (
    <Container>
      <Row className="justify-content-evenly">
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
        <Col>
          <PokedexItem />
        </Col>
      </Row>
    </Container>
  );
};

export default PokedexGrid;
