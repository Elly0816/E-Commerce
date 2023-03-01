import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardProps } from './cardInterfaces';

export default function MyCard(props: CardProps){

    const {features, styling} = props;


    return (<Card 
    sx={{ width: styling.cardWidth }}
    // key={title}
    >
    <CardMedia
        sx={{ height: styling.mediaHeight }}
        image={features.image}
        title={features.title}
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {features.title}
        </Typography>
    </CardContent>
    </Card>)
}