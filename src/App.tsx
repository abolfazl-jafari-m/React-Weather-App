import Router from "./Router/Router.tsx";
import {LoadingProvider} from "./Context/LoadingContext.tsx";


function App() {


    return (
        <>
            <LoadingProvider>
                <Router/>
            </LoadingProvider>
        </>
    )
}

export default App
