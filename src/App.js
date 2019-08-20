import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Form from './components/Form';
class App extends React.Component {
   render(){

    var products=[
      {
        id:1,
        name:"Iphone XS MAX 512GB",
        price:2000,
        status:true
      },
      {
        id:2,
        name:"Iphone XS MAX 256GB",
        price:1800,
        status:true
      },
      {
        id:3,
        name:"Iphone XS MAX 128GB",
        price:1600,
        status:true  
      },
      {
        id:4,
        name:"Iphone XS MAX 64GB",
        price:1400,
        status:true
      },
    ];
    var listProduct= products.map((product,index)=>{
      let result='';
      if(product.status){
        result=
        <div key={product.id}><li>
        <Product 
            id={product.id}
            name={product.name}
            price={product.price}
            status={product.status}
          />
          </li>
        </div> 
      }
      return result;
    });
  return (
    <div >
      <Header/>
      <div className="container">
      <ul>
      {listProduct}
      </ul>
      <Form/>
      </div>

      
    </div>
  );
   }
}

export default App;
