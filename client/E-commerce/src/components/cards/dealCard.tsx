import { dealCardProps, dealDescription } from './dealCardInterfaces';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button from '../button/Button';
import { SxProps, Theme } from '@mui/material';
import { ReactElement, ReactNode } from 'react';



const contentStyling: SxProps<Theme> = {
//  fontWeight: 'bold',
//  fontSize: 'medium',
 display: 'flex',
 justifyContent: 'space-between',
};

const priceStyling: SxProps<Theme> = {
  fontSize: "medium",
  fontWeight: 'bold',

};

const mediaStyling: SxProps<Theme> = {
  minHeight: 300,
  backgroundSize: "cover"
};

const cardStyling: SxProps<Theme> = {
  // cardWidth: 250,
  borderRadius: '20px',
  borderColor: 'error.main',
  maxWidth: 500,
  maxHeight: 600
}

const titleStyling: SxProps<Theme> = {
  fontWeight: 'bold',
}

function showPrice(title: string, price: string, showPriceClass: string){
  const toReturn: ReactNode = 
        <div className={showPriceClass}>
          <Typography sx={titleStyling} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={priceStyling} gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
        </div>

  return toReturn;
}


export default function DealCard({features, type}:dealCardProps): ReactElement<dealCardProps> {

    const {title, image, price, subtitle}:dealDescription = features;




  return (
    <Card sx={cardStyling}>
      <CardMedia
        sx={mediaStyling}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography sx={contentStyling} gutterBottom variant="h5" component="div"
        children={showPrice(title, price, type)}/>
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