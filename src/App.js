import './assets/styles/main.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import Header from "./containers/Header";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/About";


const App = () => {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Redirect from='/home'  to='/' />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/product/:id' component={ProductPage} />
                    <Route path='*' component={ErrorPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
