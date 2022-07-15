import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Details } from "./components/Products/Details";
import "./App.scss";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/product/:productId" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
