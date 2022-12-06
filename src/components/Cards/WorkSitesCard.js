import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import conference from './writersdigestconference.png'
import './WebsiteCards.css'
import question from './question.jpg'

const WorkSitesCard = () => {
    return (
         <div className='card'>
        <Card sx={{ maxWidth: 400, height: 450  }}>
      <CardMedia
        component="img"
        alt="Work Examples"
        height="225"
        image={question}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Contact me for examples
        </Typography>
        <Typography  className='cardBody' variant="body2" color="text.secondary">
            I have many examples of websites refaced and build by me, however these are work related. If you are interested
            in seeing these additional sites please contact me and I will speak to my manager for permission to share.
            Thanks for your understanding.
            <a href="https://www.freepik.com/free-vector/question-mark-template-with-text-space-design_10125237.htm#query=ask&position=5&from_view=search">Image by starline on Freepik</a>
        </Typography>
      </CardContent>

    </Card>
         </div>
    );
};


export default WorkSitesCard;