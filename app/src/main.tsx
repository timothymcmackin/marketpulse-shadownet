import { createRoot } from "react-dom/client";
import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider } from "thirdweb/react";
import App from "./App.tsx";
import "./index.css";

const client = createThirdwebClient({
clientId: "c8ec551f5ec3c306b70891f28838ea81",
});

createRoot(document.getElementById("root")!).render(
<ThirdwebProvider>
    <App thirdwebClient={client} />
</ThirdwebProvider>
);