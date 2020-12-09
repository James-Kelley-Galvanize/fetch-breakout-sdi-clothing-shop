// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import productList from './components/ProductList'
import ProductList from './components/ProductList';

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      products: [],
      activeProduct: null,
    }
    this.setActiveProduct = this.setActiveProduct.bind(this);
  }

  async componentDidMount(){
    let response = await fetch(`http://3.21.164.220/products/?count=50`)
    let productList = await response.json()

    this.setState({ products: productList })
  }

  setActiveProduct(prod){
    this.setState({activeProduct: prod})
  }


  render(){
    let {products}= this.state;
    let {setActiveProduct} = this;

    return (
      <div className="App">
        <div className="nav-header">I'm the header</div>
        <div className="main-area">
          <h1>SDI Clothing Shop</h1>
          <ProductList list={products} setActiveProduct={setActiveProduct}/>
        </div>
      
      </div>
    )
  ;}
}

export default App;
