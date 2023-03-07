import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { brandDescription } from './brandCardInterface';
import { brandCardProps } from './brandCardInterface';
import { Theme } from '@emotion/react';
import { SxProps, Typography } from '@mui/material';


const mediaStyle: SxProps<Theme> = {
  width: "23%",
  backgroundSize: 'contain',
  borderRadius: "50%",
  // border: "1px solid red",
  backgroundColor: "white"
};

const cardStyle: SxProps<Theme> = {
  padding: "1%",
  margin: "1%",
  width: 400,
  height: 90,
  backgroundColor: "lightgray",
  borderRadius: "10px",
  ":hover": {
    border: "1px solid black"
  },
  display: "flex"
};

const contentStyle: SxProps<Theme> = {
}


export default function BrandCard({features, type} : brandCardProps) {

    const {title, image, subtitle} : brandDescription = features;

    return (
      <Card sx={cardStyle}>
        <CardMedia
          sx={mediaStyle}
          image={image}
          title={title}
        />
        <CardContent sx={contentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    );
}