import "./Display.css";
import Button from "../button/Button";
import { displayProps } from "./displayInterfaces";

export default function Display({classN, source, alt, h1, h4}:displayProps){


    return <section className={classN}>
        <img src={source}
         alt={alt} />
         <div className="banner">
            <h1>{h1}</h1>
            <h4>{h4}</h4>
         </div>
         <Button text="Learn More" link=""/>
    </section>
}