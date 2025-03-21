import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import homeschool from './naunahomeschool.png'
import './WebsiteCards.css'


const NaunaHomeSchoolCard = () => {
    return (
        <div className='card'>

        <Card sx={{ maxWidth: 400, height: 600 }}>
      <CardMedia
        component="img"
        alt="naunahomeschool.com"
        height="225"
        image={homeschool}
        sx = {{objectFit: "contain"}}
      />
      <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <a href="https://naunahomeschool.com" target="_blank" rel="noopener noreferrer">
                            naunahomeschool.com
                        </a>
          
        </Typography>
        <Typography className='cardBody' variant="body2" color="text.secondary">
            I created a homeschooling records website for my daughter, providing a streamlined way for her and her teachers to track assignments, completed work, and grades at a glance. Built with React.js, Material-UI, and Firebase, it also features automated text notifications for homework questions and efficient data management, ensuring organization and accessibility for her education.
        </Typography>
      </CardContent>

    </Card>
        </div>
    );
};


export default NaunaHomeSchoolCard;
