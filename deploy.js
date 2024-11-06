import {ethers} from "ethers";
const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/vBbNRCYgqpzpPowdCQDzjQrBgenfzUpQ");
const eth= 5;
const priceFeedAddress="0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419";
const PriceFeedABI=[
    "function latestRoundData() view returns (uint80, int256, uint256, uint256, uint80)"
];
async function getConv(){
    const priceFeed= new ethers.Contract(priceFeedAddress,PriceFeedABI,provider);
    const roundData= await  priceFeed.latestRoundData();
 const price = roundData[1];
 const usd= Number(price)/(10**8);
 console.log(`$${usd}`);
 const newM= usd*Number(eth);
 console.log(`$${newM}`);
}
getConv();