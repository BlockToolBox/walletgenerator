
async function generateWallet() {
    if (typeof window.ethereum !== 'undefined') {
        // Use the injected window.ethereum object
        await window.ethereum.enable(); // Request access to accounts

        // Create a new web3 instance
        const web3 = new Web3(window.ethereum);

        // Generate a new account
        const acc = await web3.eth.accounts.create();

        // Set private key and address values on the page
        document.getElementById('privateKey').value = acc.privateKey;
        document.getElementById('address').value = acc.address;

        // Log the generated wallet in the console
        console.log("Generated Wallet:", {
            privateKey: acc.privateKey,
            address: acc.address
        });
    } else {
        // Web3 provider not found, display an error message or handle the situation accordingly
        console.error("No Web3 provider found");
    }
}
  window.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('genWallet');
        button.addEventListener('click', generateWallet);
    });
