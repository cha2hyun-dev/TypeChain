import { time } from "console";
import * as CrtpyoJs from "crypto-js";

class Block{
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string): string => CrtpyoJs.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "120202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock]

console.log(blockchain);

const getBlockchain = () : Block[] => blockchain;

const getLatestBlcok = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

export {};
