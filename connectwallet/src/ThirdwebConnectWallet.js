import { ConnectWallet } from "@thirdweb-dev/react";
 
function Example() {
  return (
    <div>
      <ConnectWallet 
      />
    </div>
  );
}

export default Example;



// import { createThirdwebClient } from "thirdweb";
// import { ConnectButton } from "thirdweb/react";
// import { darkTheme } from "thirdweb/react";
// import {
//   inAppWallet,
//   createWallet,
// } from "thirdweb/wallets";

// const client = createThirdwebClient({
//   clientId: "ce521f32ef1a105fe188ac136ca95a84",
// });

// const wallets = [
//   inAppWallet({
//     auth: {
//       options: ["google", "telegram", "x"],
//     },
//   }),
//   createWallet("io.metamask"),
//   createWallet("com.binance"),
//   createWallet("com.coinbase.wallet"),
//   createWallet("com.bitget.web3"),
//   createWallet("com.trustwallet.app"),
//   createWallet("me.rainbow"),
// ];

// function Example() {
//   return (
//     <ConnectButton
//       client={client}
//       wallets={wallets}
//       theme={darkTheme({
//         colors: {
//           separatorLine: "hsl(97, 88%, 12%)",
//           tertiaryBg: "hsl(231, 11%, 12%)",
//         },
//       })}
//       connectModal={{
//         size: "compact",
//         title: "Connect Wallet",
//         titleIcon:
//           "https://res.cloudinary.com/ddk2rs31p/image/upload/v1737462101/tesegnx1cj4cp8vvje8k.png",
//         showThirdwebBranding: false,
//       }}
//     />
//   );
// }

// export default Example
