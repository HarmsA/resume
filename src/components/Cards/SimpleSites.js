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
            <Card sx={{ maxWidth: 400, height: 500 }}>
                <CardMedia
                    component="img"
                    alt="simplesiteshq.com"
                    height="225"
                    image={SimpleSitehq}
                    sx={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        SimpleSitesHq.com
                    </Typography>
                    <Typography className='cardBody pt-3' variant="body2" color="text.secondary">
                        I am building this website as a challenge to my self to copy the WIX idea as WIX is also made in Reactjs. I plan on allowing friends and family to build their own websites and I am making it as professional as possible for my own entertainment. Its a fun challenge that serves a real purpose however small it may be. It is currently underdevelopment and I am hoping to get it to a working point within the next 6 months.
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
};

export default SimpleSites;