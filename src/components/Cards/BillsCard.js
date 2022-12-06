import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import underConstruction from "./under-construction.jpg";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BillsCard = () => {
    return (
         <div className='card'>
                <Card sx={{ maxWidth: 400, height: 450 }}>
      <CardMedia
        component="img"
        alt="naunahomeschool.com"
        height="225"
        image={underConstruction}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Bills Website
        </Typography>
        <Typography className='cardBody' variant="body2" color="text.secondary">
            I am building this website to allow my wife and I to keep track of expenses. We have traditionally used the
            "Envelope System", however cash is used less and less so we decided to do an  “Envelope System” electronically.
            This site is being built with React.JS, Material-UI, Firebase, as well as several other smaller dependency packages that
            allow for easy data manipulation.
<a href="https://www.freepik.com/free-vector/coming-soon-design_951588.htm#query=website%20under%20construction&position=3&from_view=keyword">Image by rwdd_studios on Freepik</a>
        </Typography>
      </CardContent>

    </Card>
         </div>
    );
};

export default BillsCard;