import React from 'react';
import ProductListItem from './product_list_item'


class Products extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      prodList: [],
    }
  }

  componentDidMount(){
    return this.props.fetchProducts().then( data => {
      let podArr = Object.values(data.products.products)
      return this.setState({prodList: podArr})
    });
  }

  render() {
    return(
      <div className="product-list-content-box">
        <h2 className="product-list-day" >What's New</h2>
        <ul className="product-list-repeater-container">
          {
            this.state.prodList.map( (product, idx) =>{
              return(
                <ProductListItem key={idx} product={product} openModal={this.props.openModal}/>
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default Products;
