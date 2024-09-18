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

        <Card sx={{ maxWidth: 400, height: 500 }}>
      <CardMedia
        component="img"
        alt="naunahomeschool.com"
        height="225"
        image={homeschool}
        sx = {{objectFit: "contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          naunahomeschool.com
        </Typography>
        <Typography className='cardBody' variant="body2" color="text.secondary">
            I built a website for my daughter for her homeschooling records. This keeps her
            organized and allows those who are teaching her to see at a glance her homework, completed
            work, and grades all in one place.
            This site was built using React.JS, Material-UI, Firebase, as well as several other smaller dependency packages that
            allow for automated texting for any homework questions and easy data manipulation.
        </Typography>
      </CardContent>

    </Card>
        </div>
    );
};


export default NaunaHomeSchoolCard;
