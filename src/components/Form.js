import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";

const schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório").matches(/^[a-zA-Z\s]+$/, "Nome não pode ter números"),
  endereco: yup.string().required("Endereço é obrigatório"),
  telefone: yup.string().required("Telefone é obrigatório").matches(/^\d+$/, "Telefone deve conter apenas números"),
  email: yup.string().required("E-mail é obrigatório").email("Formato de e-mail inválido"),
  dataNascimento: yup.date().transform((originalValue, originalObject) => {
    const formattedDate = moment(originalValue, "DD/MM/YYYY", true);
    return formattedDate.isValid() ? formattedDate.toDate() : null;
  }).nullable().required("Data de nascimento é obrigatória").default(null),
});

function FormTest({ setData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <Container className="my-5 border border-3 rounded-3 px-4 py-5 rounded-3">
      <Row>
        <h2 className="h2 text-secondary mb-4 text-center">Preencha o formulários</h2>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" name="nome" {...register("nome")} isInvalid={!!errors?.nome} />
            <Form.Control.Feedback type="invalid">{errors?.nome?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu telefone"
              name="telefone"
              {...register("telefone")}
              isInvalid={!!errors?.telefone}
            />
            <Form.Control.Feedback type="invalid">{errors?.telefone?.message}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="text" placeholder="Digite seu e-mail" name="email" {...register("email")} isInvalid={!!errors?.email} />
            <Form.Control.Feedback type="invalid">{errors?.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formDataNascimento">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              placeholder="DD/MM/AAAA"
              name="dataNascimento"
              {...register("dataNascimento")}
              isInvalid={!!errors?.dataNascimento}
            />
            <Form.Control.Feedback type="invalid">{errors?.dataNascimento?.message}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu endereço"
              name="endereco"
              {...register("endereco")}
              isInvalid={!!errors?.endereco}
            />
            <Form.Control.Feedback type="invalid">{errors?.endereco?.message}</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
          <Button className="px-5" variant="primary" size="lg" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormTest;
