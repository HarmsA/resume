import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
                        I built this site once in Django years ago, then once as a single page site in ReactJs as a demo. The live site I did not build but I assisted in the building of it. The owner is my brother who hired someone to build it in wordpress. Many times the employee struggled to add features or specific styling to the site, this is where I assisted. Eventhough I dont work in wordpress I was able to figure out how to add every feature they wanted.
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
};

export default Emmre;