class Store {
  constructor(name, stock, revenue) {
    this.name = name;
    this.stock = stock;
    this.revenue = revenue;
  }

  processProductSale() {
    if (this.stock === 0) {
      console.log('no more in stock');
    }
    else {
      // this.revenue += name.price;
      // this.stock--;
      // name.count--;
      Store.
    }

  }

  replenishStock(name, count) {
    name.count+= count;
    this.stock+= count;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
