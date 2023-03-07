import { dealCardProps, dealDescription } from './cardInterfaces';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button from '../../button/Button';
import { SxProps, Theme } from '@mui/material';



const titleStyling: SxProps<Theme> = {
 fontWeight: 'bold',
 fontSize: 'medium'
};

const priceStyling: SxProps<Theme> = {

};

const mediaStyling: SxProps<Theme> = {
  mediaHeight: 150
};

const cardStyling: SxProps<Theme> = {
  cardWidth: 250,
  mediaHeight: 200,
  borderRadius: '20px',
  borderColor: 'error.main',
  maxWidth: 345,
  maxHeight: 450
}


export default function MediaCard({features, type}:dealCardProps) {

    const {title, image, price, subtitle}:dealDescription = features;




  return (
    <Card sx={cardStyling}>
      <CardMedia
        sx={mediaStyling}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography sx={titleStyling} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={priceStyling} gutterBottom variant="h5" component="div">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
       <Button text='Add to Cart' link={image}/>
      </CardActions>
    </Card>
  );
}