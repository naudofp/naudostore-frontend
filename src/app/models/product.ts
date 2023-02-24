export class ProductSavedModel {

    id: string
    name: string
    description: string
    price: any

    public build(id: string, name: string, description: string, price: number, image: any){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    constructor(){
        this.id = "";
        this.name = "";
        this.description = "";
        this.price = "";
    }

}