import {Description, CardProps} from "./catCardInterfaces";



export interface brandDescription extends Description{
    subtitle: string
}


export interface brandCardProps extends CardProps{
    features: brandDescription
}