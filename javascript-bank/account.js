/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit', amount);
  if (amount > 0) {
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var transaction = new Transaction('withdrawl', amount);
  if (amount > 0) {
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var funds = 0;
  if (this.transactions.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        funds += this.transactions[i].amount;
      } else {
        funds -= this.transactions[i].amount;
      }
    }
  }
  return funds;
};
