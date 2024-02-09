import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import projectpic from '../media/projectimg.png';

const ProjectCard = ({ project }) => {
  // Hardcoded project data (replace with data fetched from backend)
  const projectData = {
    picture: projectpic, // URL of the project picture
    name: 'Project Name', // Name of the project
    description: 'A small description of the project goes here.', // Description of the project
  };

  return (
    <Card variant="outlined" sx={{ border: 'none' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={projectData.picture} alt="Project" style={{ Height:'400px' ,width:'70%'}} />
              </CardContent>
      <CardContent>
        <Typography variant="h6" component="div">
          {projectData.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {projectData.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
