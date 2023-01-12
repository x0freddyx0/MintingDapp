import React from "react";
import {ethers } from "ethers";
import RetroCart from './RetroCart.json';
import WalletBalance from "./WalletBalance";
import MintButton from "./MintButton";
import {useWeb3React} from "@web3-react/core";
import {connectors} from "../connectors"
function Home() {

    const {activate, deactivate, active} = useWeb3React();
    return (
        <WalletBalance/>
    )
}

export default Home;