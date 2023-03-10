import MyCard from '../cards/catCard';
import { CatProps } from './categoryInterfaces';
import './Categories.css';
import { ReactElement } from 'react';



export default function Categories({features}:CatProps): ReactElement<CatProps> {



  return (<section className='categories'>
    <h2>Shop Our Top Categories</h2>
    <section className='catCards'>  
      {features.map(({title, image}, index) => {
          return (<MyCard features={{title, image}} type="categories"
          key={index}/>
          
  )
          })}
    </section>
  </section>
  );
}


