import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import bills from './envelope_budget_screenshot.png'

const BillsCard = () => {
    return (
         <div className='card'>
                <Card sx={{ maxWidth: 400, height: 600 }}>
      <CardMedia
        component="img"
        alt="https://fold-budget-tracker-harms2a.replit.app/"
        height="225"
        image={bills}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <a href="https://fold-budget-tracker-harms2a.replit.app/" target="_blank" rel="noopener noreferrer">
                Budget with Folders Website
            </a>
        </Typography>
        <Typography className='cardBody' variant="body2" color="text.secondary">
            I am developing this website to help my wife and me track expenses electronically, replacing our traditional "Envelope System." Since cash is used less often, we wanted a digital alternative, with the possibility of integrating Stripe for public use. The site is built using Flask, Jinja2, JavaScript, and several other dependency packages that enable efficient data management and automation.
        </Typography>
      </CardContent>

    </Card>
         </div>
    );
};

export default BillsCard;