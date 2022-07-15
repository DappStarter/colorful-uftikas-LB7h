require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remind proud inner ensure success toward'; 
let testAccounts = [
"0x55aa60485e274a87ca896b1e92776024490336ae0b520bb2310ef6012f28acce",
"0xa4c75167e3006dbc2976dbca307838aec5b142ca546b329fa66acb6814f9dfaf",
"0x4e6ade6d74ee9d521376dbda2c6594f4fc37980ef6a582a4185bc4ff5bdac7c6",
"0xf67f9bf4a7cef5e2f0004504533471e13ca0639eeb90a5d72ad5a3c2cdabd3e3",
"0x19bba4e6f09f257ea7a027762089bf7a4a50fab2d232405c2db3590432b3d3e4",
"0x25e08ab7f2daa4eaf47d4f8987de0723ac81f2dc90da06dcae00c7c3b1b0426a",
"0xcbecd9ee66a29c6ea52213b5605a87e72a4cf4cb2c263162d7de174ed1992d1d",
"0x2164197b3d14e2e57b12aafb418ad911784f024c1033ae70cb8bea980446e84d",
"0x494a9b9a62a967f3f66d9f0475322556dc0475af999d63964e601e666605fd23",
"0x31ef4e1dd5c85e0f4c93194e4b12a0b5e4e155e7282cbd73789ecca05219cabf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


