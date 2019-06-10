function Phone(_brand, _modelName, _balance, _chargeBalance) {

    this.brand = _brand;
    this.modelName = _modelName;
    this.balance = _balance;
    this.chargeBalance = _chargeBalance;
    this.getinfo = function () {
        return "Phone: " + this.brand + " " + this.modelName + " | "
            + "Balance: " + this.getBalance() + " | "
            + "Charge: " + this.getChargeBalance();
    };
    this.getBalance = function () {
        return this.balance
    };
    this.getChargeBalance = function () {
        return this.chargeBalance
    }
}


var samsung = new Phone("Samsung", "a6", "24azn", "20%");
var nokia = new Phone("Nokia", "Lumia", "10azn", "89%");
var mi = new Phone("Xiomi", "mi7", "1.5azn", "76%");


console.log(samsung.getinfo())
console.log(nokia.getinfo())
console.log(mi.getinfo())

