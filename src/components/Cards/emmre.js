import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import emmre from './emmre.png'
import './WebsiteCards.css'

const Emmre = () => {
    return (
        <div className='card'>

            <Card sx={{ maxWidth: 400, height: 500 }}>
                <CardMedia
                    component="img"
                    alt="naunahomeschool.com"
                    height="225"
                    image={emmre}
                    sx={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        emmre.com
                    </Typography>
                    <Typography className='cardBody' variant="body2" color="text.secondary">
                        I built this site once in Django years ago, then once as a single page site in ReactJs as a demo. The live site was not built by me but I assisted in the building of it. The owner of emmre is my brother who hired a social media marketer who knew a little programming to build the site in wordpress. Many times that employee struggled to add features or specific styling to the site. This is where I assisted. Even though I don't work in wordpress, I was able to figure out how to add every feature and styling they wanted in order to complete the site.
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
};

export default Emmre;