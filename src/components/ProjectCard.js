import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, link }) => {
  return (
    <Card className="h-100 d-flex flex-column shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <Button
          variant="primary"
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-auto"
        >
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
