import { ProductCardModel } from './product-card';

export class OrderItem {
    id: string;
    product: ProductCardModel;
    quantity: number;

    constructor(){
        this.id = "";
        this.product = new ProductCardModel();
        this.quantity = 0
    }
}