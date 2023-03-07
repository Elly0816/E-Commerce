import { CardProps, Description } from "./catCardInterfaces"

export interface dealDescription extends Description{
    price: string,
    subtitle: string
}

export interface dealCardProps extends CardProps{
    features: dealDescription,
}

