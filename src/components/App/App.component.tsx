import React, {useEffect} from 'react';
import './App.scss';
import ContentComponent from "../Content";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBarComponent from "../NavigationBar";
import {Provider} from "react-redux";
import store from "../../store";
import {fetchProducts} from "../../store/app/store";

const App: React.FC = () => {
    useEffect(() => {
        store.dispatch(fetchProducts());
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <div className='App theme-green'>
                    <NavigationBarComponent/>
                    <ContentComponent/>
                </div>
            </Router>
        </Provider>
    )
};

export default App;
