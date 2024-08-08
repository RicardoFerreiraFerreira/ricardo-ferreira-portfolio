import App from "./components/App";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <GlobalStyles />
        <App />    
    </>
);