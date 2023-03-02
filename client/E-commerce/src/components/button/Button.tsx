import { ButtonProps } from "./buttonInterfaces";


export default function Button ({text, link}: ButtonProps){


    return  <button className='button'>
        {text}
    </button>
} 