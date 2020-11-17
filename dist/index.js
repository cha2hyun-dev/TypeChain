"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrtpyoJs = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CrtpyoJs.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "120202020", "", "Hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
const getBlockchain = () => blockchain;
const getLatestBlcok = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
//# sourceMappingURL=index.js.map