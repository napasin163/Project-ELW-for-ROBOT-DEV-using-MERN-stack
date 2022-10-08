import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <footer
        style = {{
            width: "100%",
            position: "relative",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
        }}
    >
        <Container>
            <Row>
                <Col className ='text-center py-3'>
                Copyright &copy; Napasin Singburi, Bancha Phuangphikul, Sarunchana Srichanta
                </Col>
            </Row>
        </Container>
    </footer>
  );
};

export default Footer