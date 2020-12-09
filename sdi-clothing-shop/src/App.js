// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      products: [],

      activeProduct: null,
      activeProductPhoto:'',
    }
    this.setActiveProduct = this.setActiveProduct.bind(this);

    this.setActiveProductPhotos = this.setActiveProductPhotos.bind(this);
    this.resetActiveProduct = this.resetActiveProduct.bind(this);
  }


// Make async because we need to do a fetch
  async componentDidMount(){

    // make a request and wait
    let response = await fetch(`http://3.21.164.220/products/?count=50`)

    // parse out the response json
    let productList = await response.json()

    // ONCE we have the info, set into the state
    this.setState({ products: productList })
  }

  // STARTED AFTER LUNCH
  // make async bc/ we're doing another fetch
  async setActiveProductPhotos(){
    //need to know active product
    let {activeProduct} = this.state;

    // make the request and wait (using a template literal to insert the id)
    let response = await fetch(`http://3.21.164.220/products/${activeProduct.id}/styles`)


    // parse out the response json
    let responseObj = await response.json();
 
    // grab the first photo from the first style in the response
    let photo = await responseObj.results[0].photos[0].url

    // set the photo in the state
    this.setState({activeProductPhoto:photo})

  }

  setActiveProduct(prod){
    this.setState({activeProduct: prod}, this.setActiveProductPhotos);
  }

  resetActiveProduct(){
    this.setState({activeProduct:null, activeProductPhoto:''})
  }


  render(){
    let {products, activeProduct, activeProductPhoto}= this.state;
    let {setActiveProduct, resetActiveProduct} = this;


    // WITH TERNARY CONDITIONAL RENDERING
    let theCorrectView = activeProduct===null?
    <ProductList list={products} setActiveProduct={setActiveProduct}/>:
    <ProductDetail product={activeProduct} photo={activeProductPhoto}/>



    // WITHOUT TERNARY CONDITIONAL RENDERING
    // let theCorrectView = <ProductList list={products} setActiveProduct={setActiveProduct}/>

    // if( activeProduct!==null){
    //   theCorrectView = <ProductDetail product={activeProduct} photo={activeProductPhoto}/>
    // }


    return (
      <div className="App">
        <div className="nav-header">
          <button className='product-list-button' onClick={resetActiveProduct}>PRODUCT LIST</button>
        </div>
        <div className="main-area">
          <h1>SDI Clothing Shop</h1>

          {theCorrectView}

          
        </div>
      
      </div>
    )
  ;}
}

export default App;
