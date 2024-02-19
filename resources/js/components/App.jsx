import Header from "./common/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./common/Layout.";
import Homepage from "./pages/Homepage";
import Story from "./pages/Story";
import Practical from "./pages/Practical";
import Registration from "./pages/Registration";


export default function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={ <Layout /> }>

                    <Route path="/"  element={ <Homepage /> } />
                    <Route path="/pribeh"  element={ <Story /> } />
                    <Route path="/prakticke"  element={ <Practical /> } />
                    <Route path="/registrace"  element={ <Registration /> } />

                </Route>
            </Routes>

        </BrowserRouter>
    )

}