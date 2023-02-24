export class ProductCardModel {

    id: string
    name: string
    description: string
    imageBase64: string

    public build(id: string, name: string, description: string, imageBase64: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageBase64 = imageBase64;
    }

    constructor(){
        this.id = "";
        this.name = "";
        this.description = "";
        this.imageBase64 = "";
    }

}