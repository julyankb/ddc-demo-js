import {web3Accounts, web3Enable} from "@polkadot/extension-dapp";

export const extensionSetup = async () => {
    const extensions = await web3Enable('wallet-connect-tutorial');
    if (extensions.length > 0) {
        try {
            const accounts = await web3Accounts();
            return { status: "Wallets read.", accounts: accounts}

        } catch (err) { return { status: err.message, accounts: [] } }
    }
    else { return { status: "Please install Polkadot.js extension.", accounts: [] } }
}


export const uploadToDDC = async(data, bucketId) => {};
export const downloadFromDDC = async(bucketId, contentId) => {};