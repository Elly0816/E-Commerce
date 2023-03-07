import { CardProps, Description } from "../../categories/card/cardInterfaces"

export interface dealDescription extends Description{
    price: string,
    subtitle: string
}

export interface dealCardProps extends CardProps{
    features: dealDescription,
}

