class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
        console.log(`Account created: ${this.accountNumber} | ${this.accountHolderName} | Balance: $${this.balance}`);
    }
    deposit(amount) {
        if (amount > 0) {
            console.log(`Depositing $${amount}`);
            this.balance += amount;
            console.log(`New Balance: $${this.balance}`);
        } else {
            console.log("Amount must be positive");
        }
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            console.log(`Withdrawing $${amount}`);
            this.balance -= amount;
            console.log(`New Balance: $${this.balance}`);
        } else {
            console.log("Insufficient balance");
        }
    }
    getBalance() {
        return this.balance;
    }
    displayAccountInfo() {
        console.log(`Account: ${this.accountNumber} | Name: ${this.accountHolderName} | Balance: $${this.balance}`);
    }
}
const b = new BankAccount('123456', 'John Doe', 1000);
console.log(b.deposit(500));
console.log(b.withdraw(200));