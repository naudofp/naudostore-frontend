export class ProductCardModel {

    id: string
    name: string
    description: string
    imageBase64: string
    price: number

    public build(id: string, name: string, description: string, imageBase64: string, price: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageBase64 = imageBase64;
        this.price = price;
    }

    constructor(){
        this.id = "";
        this.name = "";
        this.description = "";
        this.imageBase64 = "";
        this.price = 0
    }

}