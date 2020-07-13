function MiniBank(balance) {
  this.balance = balance;
  this.statement = [0];
  this.getStatement = function () {
    return this.statement;
  }
  this.printStatement = function () {
    for (var i = 0; i < this.statement.length; i++) {
      console.log(this.statement[i]);
    }
    return this.statement;
  }
  this.setBalance = function (val) {
    this.statement.push(val);
  }
  this.getBalance = function () {
    return this.balance;
  },
    this.printBalance = function () {
      console.log(`Balance: ${this.getBalance()}`);
      return this.balance;
    };
  this.deposit = function (num) {
    this.setBalance(this.balance + num);
    
  }
  this.withdrawl = function (num) {
    this.setBalance(this.balance - num);
  }
  
}


var createMinibank = new MiniBank(0);
createMinibank.printBalance;
createMinibank.printStatement;
createMinibank.deposit(5);
createMinibank.withdrawl(10);


function updateStatement(obj, num) {
  obj.statement.push(num);

}

