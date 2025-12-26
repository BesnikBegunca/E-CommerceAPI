import type { Brand } from "./Brand";
import type { Category } from "./Caregory";

export interface Product {
    id: number;
    name: string;
    imagePath: string;
    description: string;
    additionalDescription: string;
    brandId: number;
    brand: Brand;
    categoryId: number;
    category: Category;
}