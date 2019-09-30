import React, {useEffect} from 'react';
import './App.scss';
import ContentComponent from "../Content";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBarComponent from "../NavigationBar";
import {Provider} from "react-redux";
import store from "../../store";
import {fetchProducts} from "../../store/app/store";
import {Switch, Route} from "react-router-dom";
import FormComponent from "../Form";

const App: React.FC = () => {
    useEffect(() => {
        store.dispatch(fetchProducts());
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <div className='App theme-green'>
                    <NavigationBarComponent/>
                    <Switch>
                        <Route exact path="/" component={ContentComponent}/>
                        <Route path="/form" component={FormComponent}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
};

export default App;
