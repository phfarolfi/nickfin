import "./styles.ts"
import MainPage from "./main-page/index.tsx"
import { appContextWrapper, useAppContext } from "./AppContext.tsx"
import { Tab } from "./constants.ts"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"

function App() {
    const { tab, setTab } = useAppContext()

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <header>
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => setTab(Tab.HOME)}>Home</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <MainPage />
        </LocalizationProvider>
    )
}

export default appContextWrapper(App)
