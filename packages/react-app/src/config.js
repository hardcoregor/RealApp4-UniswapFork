import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x67FdA06524f3e5d10157Fb09E02e1b9e8753616D"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/yQK-ulJDibe4InphBIUXCLPeGQ1E7meR",
  },
};