//Type for the Description of the category cards
export interface Description  {
    title: string,
    image: string,
}

export interface CardStyling  {
    cardWidth: number,
    mediaHeight: number
}

export interface CardProps {
    features: Description,
    styling: CardStyling,
    type: 'product' | 'categories' | 'brand',
    description?: string
}