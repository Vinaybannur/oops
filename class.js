class account{
    constructor(name,accno,balance){
        this.name=name;
        this.accno=accno;
        this.balance=balance;
    }

getBalance(){
    return "The balance is " + this.balance;
}
withdraw(amount){
    console.log(amount,this.balance);
    if(this.balance>=amount){
        this.balance = this.balance-amount;
        return this.getBalance();
    }else{
        return "Insufficient funds";
    }
}

deposite(money){
    console.log(money,this.balance);
    this.balance=money+this.balance;
    return this.getBalance();
}

}



const vinay = new account("vinay",123,5000000);
const avinash=new account("avinash",124,3000000);
console.log(vinay.deposite(1000000));
console.log(vinay.deposite(1000000));
