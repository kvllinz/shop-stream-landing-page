import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            light: "#6F7FFF",
            main: "#5565FD",
            dark: "#3C4CE4",
        },
    },
    breakpoints: {
        values: {
            xs: 360,
            sm: 768,
            md: 1024,
            lg: 1200,
            xl: 1440,
        },
    },
    typography: {
        fontFamily: [
            "Inter",
            "sans-serif",
        ].join(","),
    }
});

export default theme;