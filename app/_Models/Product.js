class Product {
    constructor(id, name, price, quantity, minStock, salePrice, image = null, descript, date, editDate = null, ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.minStock = minStock;
        this.salePrice = salePrice;
        this.image = image;
        this.descript = descript;
        this.date = new Date();
        this.editDate = null;
       
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

}
export default Product;