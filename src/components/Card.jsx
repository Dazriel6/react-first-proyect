import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Card1 = (data) => {
    return <Card sx={{ minWidth: 270 }}>
        <CardContent>
            <Typography sx={{fontSize: 22}} >{data.name}</Typography>
            <Typography sx={{fontSize: 14}} > Tienes {data.age} años</Typography>
        </CardContent>
    </Card>;
}