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
      let podArr = Object.values(data.products)
      return this.setState({prodList: podArr})
    });
  }

  render() {
    debugger
    return(
      <div className="product-list-content-box">
        <ul>
          <h2 className="product-list-day" >Today</h2>
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
