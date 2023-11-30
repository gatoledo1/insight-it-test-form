import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PrintData = ({ data }) => {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <Container className="p-4 bg-light rounded-3 text-center">
      <Row>
        <h2 className="h2 text-secondary mb-3 text-center">Dados obtidos</h2>
      </Row>
      <Row>
        <Col sm={6} lg={3}>
          <p>Nome: {data.nome}</p>
        </Col>
        <Col sm={6} lg={3}>
          <p>Telefone: {data.telefone}</p>
        </Col>
        <Col sm={6} lg={3}>
          <p>E-mail: {data.email}</p>
        </Col>
        <Col sm={6} lg={3}>
          <p>Data de nascimento: {data.dataNascimento && formatDate(data.dataNascimento)}</p>
        </Col>
      </Row>
      <Row col={12}>
        <p>Endereço: {data.endereco}</p>
      </Row>
    </Container>
  );
};

export default PrintData;
