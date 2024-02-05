import Header from "./common/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./common/Layout.";
import Homepage from "./pages/Homepage";
import Story from "./pages/Story";


export default function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={ <Layout /> }>

                    <Route path="/"  element={ <Homepage /> } />
                    <Route path="/pribeh"  element={ <Story /> } />

                </Route>
            </Routes>

        </BrowserRouter>
    )

}