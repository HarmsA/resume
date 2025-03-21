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

            <Card sx={{ maxWidth: 400, height: 600 }}>
                <CardMedia
                    component="img"
                    alt="Emmre.com"
                    height="225"
                    image={emmre}
                    sx={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <a href="https://www.emmre.com/" target="_blank" rel="noopener noreferrer">
                            emmre.com
                        </a>
                        
                    </Typography>
                    <Typography className='cardBody' variant="body2" color="text.secondary">
                        I originally built this site in Django, then later recreated it as a React.js demo. While I didn’t develop the live version, I played a key role in assisting with its build. My brother, the owner of Emmre, hired a social media marketer with some programming knowledge to develop the site in WordPress. When that developer struggled with features or styling, I stepped in, despite not specializing in WordPress, to successfully implement every requested functionality.
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
};

export default Emmre;