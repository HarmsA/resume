import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import underConstruction from "./under-construction.jpg";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { spacing } from '@mui/system';
import SimpleSitehq from './simplesiteshq.png'
// import SimpleSites from './SimpleSites';

const SimpleSites = () => {
    return (
        <div className='card'>
            <Card sx={{ maxWidth: 400, height: 450 }}>
                <CardMedia
                    component="img"
                    alt="simplesiteshq.com"
                    height="215"
                    image={SimpleSitehq}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        SimpleSitesHq.com
                    </Typography>
                    <Typography className='cardBody pt-3' variant="body2" color="text.secondary">
                        I am building this website as a challenge for friends and family to build their own websites, but I am making it as professional as possible for my own entertainment.It is my Reactjs version of wordpress.Its a fun challenge that serves a real purpose however small it may be. It is currently underdevelopment and I am hoping to get it completed within the next 6 months.
                       
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
};

export default SimpleSites;