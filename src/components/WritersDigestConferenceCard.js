import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import conference from './writersdigestconference.png'
import './WebsiteCards.css'

const NaunaHomeSchoolCard = () => {
    return (
         <div className='card'>
        <Card sx={{ maxWidth: 400, height: 450  }}>
      <CardMedia
        component="img"
        alt="conference.com"
        height="225"
        image={conference}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          writersdigestconference.com
        </Typography>
        <Typography  className='cardBody' variant="body2" color="text.secondary">
           This is a website I built for work, during work. I did not design it but because I built it I would hope it is
             ok for me to display it in my portfolio as one of my accomplishments. This site was built using python, django,
            tinymce, bootstrap along with a host of other required dependencies. This was assigned to me to complete where
            90% or more was completed by me.
        </Typography>
      </CardContent>

    </Card>
         </div>
    );
};


export default NaunaHomeSchoolCard;