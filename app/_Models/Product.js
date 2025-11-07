class Product {
    constructor(id, name, price, quantity, image ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }

   getTotalValue(){
    return this.price * this.quantity;
   }
    
}
export default Product;