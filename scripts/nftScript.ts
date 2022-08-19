import { ethers } from "hardhat";

async function main() {

  const toke_name = "AyomideNFT";
  const symbol = "AYO";
  const ipfs_link = "https://ipfs.filebase.io/ipfs/QmNtXPxSLbj5JpSHA2W9s3HTS1D3A2pfg1vm55bKuufpMs";
  
  const NFT = await ethers.getContractFactory("MyTestNFT");
  const nft = await NFT.deploy(toke_name, symbol, ipfs_link);

  await nft.deployed();

  console.log(`Your contrat address is ${nft.address}`);

  const address = "0x85f20a6924A61904AB44243C7e2c771B3bE46734"

  const mint = await nft.mint(address);
  console.log("you mint", mint);

  //This is my contact address for ropsten network 0x89692B2C5024482284E18E2Ec657235c7d538eE7
  //This is my contact address for goerli network 0xdD6551e9e4b6a20B14A06F5CD4980De816b37E6f
  //This is my contact address for rinkeby network 0xc39BB8c60eAC33C107448E6041BC9dADb8e947C3
  // This is the opensea url https://testnets.opensea.io/account?tab=created&search%5BresultModel%5D=ASSETS&search%5BsortBy%5D=CREATED_DATE&search%5BsortAscending%5D=false
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
