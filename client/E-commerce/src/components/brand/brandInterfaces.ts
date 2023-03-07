import { brandDescription } from "../cards/brandCardInterface";
import { CatProps } from "../categories/categoryInterfaces";

export interface BrandProps extends CatProps{
    features: brandDescription[],
}
