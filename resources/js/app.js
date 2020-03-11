require("./bootstrap");
import App from "./components/App.svelte";

const app = new App({
    target: document.querySelector("#svelte-app"),
    props: {
        //name: "withSvelte"
    }
});

export default app;
