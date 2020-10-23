import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

export const Sheet = () => {
  return (
    <>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>生年月日*</Form.Label>
            <Row className="mb-4">
              <Col sm={3}>
                <Form.Control as="select" custom></Form.Control>
              </Col>
              <Col sm={1}>
                <Form.Label className="mt-2">年</Form.Label>
              </Col>
              <Col sm={3}>
                <Form.Control as="select" custom></Form.Control>
              </Col>
              <Col sm={1}>
                <Form.Label className="mt-2">月</Form.Label>
              </Col>
              <Col sm={3}>
                <Form.Control as="select" custom id="inputDay"></Form.Control>
              </Col>
              <Col sm={1}>
                <Form.Label className="mt-2">日</Form.Label>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm={4}>
                <InputGroup>
                  <Form.Control as="select" custom></Form.Control>
                  <InputGroup.Text>年</InputGroup.Text>
                </InputGroup>
              </Col>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control as="select" custom></Form.Control>
                  <InputGroup.Text>月</InputGroup.Text>
                </InputGroup>
              </Col>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control as="select" custom></Form.Control>
                  <InputGroup.Text>日</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Row>
                  <Col sm={11}>
                    <Form.Control as="select" custom></Form.Control>
                  </Col>
                  <Col sm={1} className="px-0">
                    <Form.Label className="mt-2">年</Form.Label>
                  </Col>
                </Row>
              </Col>
              <Col sm={4}>
                <Row>
                  <Col sm={11}>
                    <Form.Control as="select" custom></Form.Control>
                  </Col>
                  <Col sm={1} className="px=0">
                    <Form.Label className="mt-2">月</Form.Label>
                  </Col>
                </Row>
              </Col>
              <Col sm={4}>
                <Row>
                  <Col sm={11}>
                    <Form.Control as="select" custom></Form.Control>
                  </Col>
                  <Col sm={1} className="px-0">
                    <Form.Label className="mt-2">日</Form.Label>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
