//Type for the Description of the category cards
export interface Description  {
    title: string,
    image: string,
}


export interface CardProps {
    features: Description,
    type: 'product' | 'categories' | 'brand',
}

