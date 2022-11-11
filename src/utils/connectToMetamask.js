const connectToMetaMask = async () => {
    let address = false;

    if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" }).then(async (accounts) => {
            // Get network ID
            let n = parseInt(window.ethereum.chainId);

            // if (n !== 1) {
            if (n !== 5) {
                await switchNetwork();
            }

            address = accounts[0];

            window.ethereum.on('accountsChanged', function (accounts) {
                window.location.reload();
            });
        }).catch((err) => console.log(err))
    }

    return address;
};

const switchNetwork = async () => {
    try {
        console.log("switch");
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            // params: [{ chainId: "0x1" }],
            params: [{ chainId: "0x5" }],
        });
        console.log("You have switched to the right network")
    } catch (switchError) {
        // The network has not been added to MetaMask
        if (switchError.code === 4902) {
            await addNetwork();
        }
    }
};

const addNetwork = async () => {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: '0x1',
                    chainName: 'Ethereum Mainnet',
                    rpcUrls: ['https://mainnet.infura.io/v3/'],
                    blockExplorerUrls: ['https://etherscan.io/'],
                    nativeCurrency: {
                        symbol: 'ETH',
                        decimals: 18
                    }
                },
                {
                    chainId: '0x5',
                    chainName: 'Goerli Test Network',
                    rpcUrls: ['https://goerli.infura.io/v3/'],
                    blockExplorerUrls: ['https://goerli.etherscan.io/'],
                    nativeCurrency: {
                        symbol: 'ETH',
                        decimals: 18
                    }
                }
            ]
        });
    } catch (err) {
        console.log(err);
    }
};


export default connectToMetaMask