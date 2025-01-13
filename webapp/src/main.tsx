import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"

import App from "./components/App"

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <App />
            </LocalizationProvider>
        </ThemeProvider>
    </StrictMode>
)
