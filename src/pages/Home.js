import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import Left from '../components/Left';
import Body from './Body';

const { Header, Content, Footer } = Layout;



function Home() {
  return (
   <div>
    <Left className="container">
    </Left>    
    <Body className="rbody">
    </Body> 
    </div>
  );
}

export default Home;
