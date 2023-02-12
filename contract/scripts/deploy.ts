import { ethers } from "hardhat";

async function deploy() {
  // コントラクトをデプロイするアカウントのアドレスを取得
  const [deployer] = await ethers.getSigners();

  // USDCトークンのコントラクトをデプロイ
  const USDCToken = await ethers.getContractFactory("USDCToken");
  const usdc = await USDCToken.deploy();
  await usdc.deployed();

  // JOEトークンのコントラクトをデプロイ
  const JOEToken = await ethers.getContractFactory("JOEToken");
  const joe = await JOEToken.deploy();
  await joe.deployed();

  // AMMコントラクトをデプロイ
  const AMM = await ethers.getContractFactory("AMM");
  const amm = await AMM.deploy(usdc.address, joe.address);
  await amm.deployed();

  console.log("usdc address:", usdc.address);
  console.log("joe address:", joe.address);
  console.log("amm address:", amm.address);
  console.log("account address that deploy contract:", deployer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
