import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { CardProps } from './cardInterfaces';

export default function MyCard({features, styling, type}: CardProps){

    return (<Card 
    sx={{ width: styling.cardWidth }}>
    <CardActionArea>
        <CardMedia
            sx={{ height: styling.mediaHeight }}
            image={features.image}
            title={features.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {features.title}
            </Typography>
            {type==='product' && 
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>}
        </CardContent>
        </CardActionArea>
        {type === 'product' && 
        <CardActions>
            <Button size="small" color="primary">
                Add To Cart
            </Button>
        </CardActions>
            }
    </Card>)
}