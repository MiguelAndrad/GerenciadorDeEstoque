class Product {
    constructor(id, name, unitValue, quantity, minStock, salePrice, image = null, descript, date, editDate = null, ) {
        this.id = id;
        this.name = name;
        this.unitValue = unitValue;
        this.quantity = quantity;
        this.minStock = minStock;
        this.salePrice = salePrice;
        this.image = image;
        this.descript = descript;
        this.date = new Date();
        this.editDate = null;
       
    }

    getTotalValue() {
        return this.unitValue * this.quantity;
    }

}
export default Product;