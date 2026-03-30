function BankAccount(accountNumber, accountHolderName, balance){
    this.accountNumber = accountNumber; 
    this.accountHolderName = accountHolderName; 
    this.balance = balance; 
}
BankAccount.prototype.getBalance = function(){
    return `${this.accountHolderName} has balance of ${this.balance}`; 
}

BankAccount.prototype.displayAccountInfo = function(){
    return `${this.accountNumber} - ${this.accountHolderName} -  ${this.balance}`;
}

BankAccount.prototype.deposit = function(amount){
   if(amount < 0) {
    return 'amount should be a positive number'
   } else {
    this.balance += amount; 
    return this.balance; 
   }
}

BankAccount.prototype.withdraw = function(amount) {
    if(amount > this.balance) {
        return 'insufficient funds'; 
    } else {
        this.balance -= amount; 
        return this.balance; 
    }
}

const c1 = new BankAccount('123456','John Doe', 1000);
console.log(c1); 
console.log(c1.getBalance()); 
console.log(c1.displayAccountInfo()); 
console.log(c1.deposit(500)); 
console.log(c1.getBalance()); 
console.log(c1.withdraw(2000)); 
console.log(c1.withdraw(200));