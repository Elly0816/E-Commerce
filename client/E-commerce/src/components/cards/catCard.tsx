import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardProps } from './catCardInterfaces';
import {SxProps, Theme} from '@mui/material';

const cardStyling: SxProps<Theme> = {
    minWidth: 200,
    margin: '2%',
}

const mediaStyling: SxProps<Theme> = {
    minHeight: 150,
    transition: "transform 0.3s ease-in-out",
    ":hover": {
        transform: "scale(1.2)",
    }
}

const typoStyling: SxProps<Theme> = {
    fontWeight: "Bold",
    color: 'white',
    padding: 0,
    textAlign: 'left'
}

const typoText = (title: string) => {
    return  <CardContent sx={typoStyling}>
    <Typography gutterBottom variant="h5" component="div">
    {title}
    </Typography>
</CardContent> 
}


export default function catCard({features, type}: CardProps){

    return (<Card 
    sx={cardStyling}>
        <CardMedia
            sx={mediaStyling}
            image={features.image}
            title={features.title}
            children={typoText(features.title)}
        />
    </Card>)
}