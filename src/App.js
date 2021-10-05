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



function App() {
  return (
    <Router >
      <Header />
      <main className="py-3">
        <Container>
        <Route path='/' component={HomeSrceen} exact />
        <Route path='/product/:id' component={ProductScreen}  />
        <Route path='/cart/:id?' component={CartScreen}  />
       
        </Container>
  </main>     
      <Footer/>
    </Router>
  );
}

export default App;
