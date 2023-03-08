import BrandCard from "../cards/brandCard";
import { BrandProps } from "./brandInterfaces";
import "./Brand.css";
import { ReactElement } from "react";

export default function Brand({features}: BrandProps): ReactElement<BrandProps>{


    return <section className='brand'>
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