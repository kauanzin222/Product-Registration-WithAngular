import { CategoryInterface } from "./CategoryInterface";

export interface ProductInterface {
    id ?: number;
    name ?: string;
    desc ?: string;
    price ?: number;
    category ?: CategoryInterface;
    promotion ?: boolean;
    newProduct ?: boolean;
}