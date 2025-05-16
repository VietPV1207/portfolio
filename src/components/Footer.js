import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#222', color: '#fff', padding: '20px 0' }}>
      <Container>
        <Row className="text-center">
          <Col>
            <p>© {new Date().getFullYear()} Viet Portfolio. All rights reserved.</p>
            <div>
              <a href="https://github.com/VietPV1207" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                LinkedIn
              </a>
              <a href="mailto:phungvanviett1@example.com" style={linkStyle}>
                Email
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const linkStyle = {
  margin: '0 10px',
  color: '#aaa',
  textDecoration: 'none',
  fontSize: '1rem',
};

export default Footer;
