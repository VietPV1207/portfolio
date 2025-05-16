import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4">Contact Me</h2>
          <Form action="https://formspree.io/f/moqzjqgv" method="POST">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" name="_replyto" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={5} placeholder="Write your message..." required />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Send
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
