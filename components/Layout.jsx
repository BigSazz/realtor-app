import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from './Navbar';
import Footer from "./Footer";

export default function Component ({children}) {
    return (
        <>
            <Head>
                <title>App: Real Estate</title>
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    )
}