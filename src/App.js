import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import HomeSrceen from './components/HomeScreen';
import Footer from './components/Footer';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import ProductScreen from './components/ProductScreen';
import { CartScreen } from './components/CartScreen';
import ShipppingScreen from './components/ShipppingScreen'



function App() {
  return (
    <Router >
      <Header />
      <main className="py-3">
        <Container>
        <Route path='/' component={HomeSrceen} exact />
        <Route path='/product/:id' component={ProductScreen}  />
        <Route path='/cart/:id?' component={CartScreen}  />
             <Footer/>

        </Container>
  </main>     
    </Router>
  );
}

export default App;
