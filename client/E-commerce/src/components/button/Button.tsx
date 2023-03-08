import { ReactElement } from "react";
import { ButtonProps } from "./buttonInterfaces";


export default function Button ({text, link}: ButtonProps): ReactElement<ButtonProps>{


    return  <button className='button'>
        {text}
    </button>
} 