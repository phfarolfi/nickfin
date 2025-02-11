import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"

import "./styles.ts"
import { Tab } from "./constants.ts"
import MainPage from "./homepage/index.tsx"
import NewExpense from "./expense/NewExpense.tsx"
import { appContextWrapper, useAppContext } from "./AppContext.tsx"
import NewRevenue from "./revenue/NewRevenue.tsx"

const Page = {
    [Tab.HOME]: <MainPage />,
    [Tab.NEW_EXPENSE]: <NewExpense />,
    [Tab.NEW_REVENUE]: <NewRevenue />,
}

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
                        <li>
                            <button onClick={() => setTab(Tab.NEW_EXPENSE)}>Nova despesa</button>
                        </li>
                        <li>
                            <button onClick={() => setTab(Tab.NEW_REVENUE)}>Nova receita</button>
                        </li>
                    </ul>
                </nav>
            </header>
            {Page[tab]}
        </LocalizationProvider>
    )
}

export default appContextWrapper(App)
