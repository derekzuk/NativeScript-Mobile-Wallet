// type = mail indicates a receive transaction. this displays a mail icon on home page.
export class Transaction {
    type: String;
    amount: number;
    toAddress: String;
    fromAddress: String;
    transactionHash: String;

    constructor({ type, amount, toAddress, fromAddress, transactionHash }: { 
        type?: String, 
        amount?: number, 
        toAddress?: String,
        fromAddress?: String,
        transactionHash?: String
    } = {}) 
    {
        this.type = type;
        this.amount = amount;
        this.toAddress = toAddress;
        this.fromAddress = fromAddress;
        this.transactionHash = transactionHash;
      }
}