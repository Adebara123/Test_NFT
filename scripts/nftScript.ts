import { ethers } from "hardhat";

async function main() {

  const toke_name = "AyomideNFT";
  const symbol = "AYO";
  const ipfs_link = "ipfs://QmTHFw6WUdpzxbBVjK124WWAG67Vdn1HsxHAKuNBphh9v3";
  
  const NFT = await ethers.getContractFactory("MyTestNFT");
  const nft = await NFT.deploy(toke_name, symbol, ipfs_link);

  await nft.deployed();

  console.log(`Your contrat address is ${nft.address}`);

  const address = "0x85f20a6924A61904AB44243C7e2c771B3bE46734"

  const mint = await nft.mint(address);
  console.log("you mint", mint);


  //This is my contact address for rinkeby network 0x3Add56D1197163286731B40f0f91690ECb9dE204
  // This is the opensea url https://testnets.opensea.io/account?tab=created&search%5BresultModel%5D=ASSETS&search%5BsortBy%5D=CREATED_DATE&search%5BsortAscending%5D=false
  // This ismy ipfs 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
