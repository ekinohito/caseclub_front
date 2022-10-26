import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../src/settings";
import { useEffect } from "react";
import { OpenAPI } from "../src/client";
import { useAuthStore } from "../src/state";

function MyApp({ Component, pageProps }: AppProps) {
    const token = useAuthStore(store => store.token)
    useEffect(() => {
        OpenAPI.TOKEN = token
        console.log(OpenAPI.TOKEN)
    }, [token]);
    return <Component {...pageProps} />;
}

export default MyApp;
