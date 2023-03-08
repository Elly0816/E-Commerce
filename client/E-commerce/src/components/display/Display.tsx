import "./Display.css";
import Button from "../button/Button";
import { displayProps } from "./displayInterfaces";
import { ReactElement } from "react";

export default function Display({classN, source, alt, h1, h4}:displayProps): ReactElement<displayProps>{


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