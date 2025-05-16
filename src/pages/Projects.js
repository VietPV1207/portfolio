import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'A personal website built with React and Bootstrap.',
      link: 'https://your-portfolio-link.com',
    },
    {
      title: 'E-commerce App',
      description: 'A mock e-commerce app with product listings and cart.',
      link: 'https://your-ecommerce-app.com',
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projectList.map((project, index) => (
          <Col md={6} lg={4} key={index}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
