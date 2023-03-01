import MyCard from '../card/Card';
import { CatProps, CatStyling } from './categoryInterfaces';
import './Categories.css';

const cardStyle: CatStyling = {
    cardWidth: 200,
    mediaHeight: 150
}


export default function Categories({features}:CatProps) {



  return (<section className='categories'>
    {features.map(({title, image}) => {
        return (<MyCard features={{title, image}} styling={cardStyle}/>
        
)
        })}
  </section>
  );
}


