import { ethers } from "hardhat";

async function main() {

 
  
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log(`Your contrat address is ${nft.address}`);

  const address = "0x85f20a6924A61904AB44243C7e2c771B3bE46734"
  

  const mint = await nft.safeMint(address, "ipfs://QmTHFw6WUdpzxbBVjK124WWAG67Vdn1HsxHAKuNBphh9v3");
  console.log("you mint", mint);


  //This is my contact address for rinkeby network 0xdD6551e9e4b6a20B14A06F5CD4980De816b37E6f
  // This is the opensea url https://testnets.opensea.io/assets/rinkeby/0xdd6551e9e4b6a20b14a06f5cd4980de816b37e6f/0
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
