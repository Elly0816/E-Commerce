import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { CardProps } from './cardInterfaces';
import {SxProps, Theme} from '@mui/material';

const cardStyling: SxProps<Theme> = {
    minWidth: 200,
    margin: '5%'
}

const mediaStyling: SxProps<Theme> = {
    minHeight: 150
}

const typoStyling: SxProps<Theme> = {
    fontWeight: "Bolder",
    color: 'white',
    position: 'relative',
    right: 70,
    bottom: 10
}

const typoText = (title: string) => {
    return  <CardContent sx={typoStyling}>
    <Typography gutterBottom variant="h5" component="div">
    {title}
    </Typography>
</CardContent> 
}


export default function MyCard({features, type}: CardProps){

    return (<Card 
    sx={cardStyling}>
    <CardActionArea>
        <CardMedia
            sx={mediaStyling}
            image={features.image}
            title={features.title}
            children={typoText(features.title)}
        />
        {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {features.title}
            </Typography>
        </CardContent> */}
        </CardActionArea>
    </Card>)
}