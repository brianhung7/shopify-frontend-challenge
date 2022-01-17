import React from "react";
import { AppBar } from "@mui/material";

const Navbar = () => {

    return (
        <AppBar position="fixed" sx={{py: 1, textAlign:"center"}}>
            Spacestagram: Image-sharing from the final frontier
        </AppBar>
    )
}

export default Navbar;