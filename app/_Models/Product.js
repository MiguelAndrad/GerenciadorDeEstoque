class Product {
    constructor(id, name, price, quantity, minStock, date, editDate = null, salePrice, image = null) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.minStock = minStock;
        this.date = new Date();
        this.editDate = null;
        this.salePrice = salePrice;
        this.image = image;
       
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

}
export default Product;