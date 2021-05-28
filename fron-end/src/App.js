import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';
import Products from './pages/Products';
import PrivetRoute from './components/shared/PrivetRoute';
import { ThemeProvider } from './components/context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <PrivetRoute path="/" exact component={Dashboard} />
          <PrivetRoute path="/products" exact component={Products} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
