import BrandCard from "../cards/brandCard";
import { BrandProps } from "./brandInterfaces";

export default function Brand({features}: BrandProps){


    return <section className='brands'>
    <h2>Choose By Brand</h2>
    <section className='brandCards'>  
      {features.map(({title, image, subtitle}, index) => {
          return (<BrandCard features={{title, image, subtitle}} type="brand"
          key={index}/>
          
  )
          })}
    </section>
  </section>;
}