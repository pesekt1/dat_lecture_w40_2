//bank acounts

// Parent class for all bank accounts
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
    }
  }
}

// Child class for checking accounts
class CheckingAccount extends BankAccount {
  constructor(owner, balance, overdraftLimit) {
    super(owner, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount > this.balance + this.overdraftLimit) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
    }
  }
}

// Child class for savings accounts
class SavingsAccount extends BankAccount {
  constructor(owner, balance, interestRate) {
    super(owner, balance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
  }
}

// Example usage
const checkingAccount = new CheckingAccount("John Doe", 1000, 500);
checkingAccount.withdraw(1500); // Should log "Insufficient funds"
checkingAccount.withdraw(1200); // Should deduct 1200 from balance and leave -200

const savingsAccount = new SavingsAccount("Jane Doe", 5000, 0.05);
savingsAccount.addInterest(); // Should add 250 to balance (5% of 5000)
