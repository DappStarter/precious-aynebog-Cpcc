require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea nasty flee spot warrior ridge remain connect hover climb orange soldier'; 
let testAccounts = [
"0x920524e1b4825062615e9b528f3c8cad7c2b6e3219d92c4bb19b3c4e9911aa9d",
"0x6f31d8b07d28bb7651fe3ad7e4956f4dce9af2b4270c6ec8a148b27f25f06322",
"0xc98ca3cd2d34fa3654eee9a9cd9e43c30f5c690a012c1f595ce0dd9bef6dfe4a",
"0xb41e1ad71f145c0c67ba1d1ebd563baaae2f352713661f5a0b07e7e4e6973908",
"0xccfae98846d76033b2a61fdc6921c5408e1ff53be57701bb7d0a02e580cfb10b",
"0xff392243646eacf810b35bdb7b6d4440722f62d09ec7ea8e7a980ec3d2aa29dc",
"0xd0bc507b1899c8cdc79125cfd1044d2fe993bf9743cc3431aeee1f566f3df478",
"0x9c5e1137bade763896a17a9b7e3e18643beb3bcfcf146160b1e7acb789921303",
"0x6e4446bf03a3019464291f51131a041a0983dd32981c3623070dda18b83e5590",
"0xa65444eb895d8fd3b1f376b8b5c06adf9971a915ad024da1b20bd807a86a5e4c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


