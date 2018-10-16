import React from 'react'

class ProductForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product_name: '',
      description: '',
      details: '',
      website: '',
      social: '',
      list_photo: '',
      photos: '',
      video_link: '',
      around_the_web: '',
    }

    this.handleFile = this.handleFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    if ((this.state.photos === '') && (this.state.list_photo === '')) {
      return this.props.sendError(['You need to upload a picture logo', 'You need to upload at least one display picture']);
    } else if (this.state.list_photo === '') {
      return this.props.sendError(['You need to upload a picture logo']);
    } else if (this.state.photos === '')  {
      return this.props.sendError(['You need to upload at least one display picture']);
    }
    const formData = new FormData();
    formData.append('products[product_name]', this.state.product_name)
    formData.append('products[description]', this.state.description)
    formData.append('products[details]', this.state.details)
    formData.append('products[website]', this.state.website)
    formData.append('products[social]', this.state.social)
    formData.append('products[list_photo]', this.state.list_photo)
    formData.append('products[photos]', this.state.photos)
    formData.append('products[video_link]', this.state.video_link)
    formData.append('products[around_the_web]', this.state.around_the_web)
    this.props.sendForm(formData, this.props.currentUserId)
    // this.props.createProduct(formData, this.props.currentUserId)
    // .then((response) => console.log(response.message));
  }

  handleFile(type) {

    return (event) => {
      event.preventDefault();
      return this.setState({[type]: event.currentTarget.files[0]})
    }
  }

  handleChange(type){
    return (event) => {
      event.preventDefault()
      return this.setState({[type]: event.currentTarget.value})
    }
  }
  // componentDidMount(){
  //
  // }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Product Form</h1>
          <h4>Find a product you like? ESCAPE with it</h4>
          <div>
            <h4>Product Name</h4>
            <input type="text" placeholder="Enter Product Name" onChange={this.handleChange('product_name')} value={this.state.product_name} />
          </div>
          <div>
            <h4>Product Description</h4>
            <input type="text" placeholder="Enter a brief description" onChange={this.handleChange('description')} value={this.state.description} />
          </div>
          <div>
            <h4>Product Details </h4>
            <input type="textarea" placeholder="Enter additional essential details" onChange={this.handleChange('details')} value={this.state.details}/>
          </div>
          <div>
            <h4>Product website</h4>
            <input type="url" placeholder="Must be full url ie. www.product-esc.com" onChange={this.handleChange('website')} value={this.state.website}/>
          </div>
          <div>
            <h4>Product around the web</h4>
            <input type="text" placeholder="Must be full url ie. www.newyorktimes.com/product-esc" onChange={this.handleChange('around_the_web')} value={this.state.around_the_web}/>
          </div>
          <div>
            <h4>Product Socials</h4>
            <input type="text" placeholder="Must be full url ie. www.facebook.com/product-esc" onChange={this.handleChange('social')} value={this.state.social}/>
          </div>
          <div>
            <h4>Product Logo</h4>
            <input type="file" onChange={this.handleFile('list_photo')} />
          </div>
          <div>
            <h4>Product Display Pictures</h4>
            <input type="file" onChange={this.handleFile('photos')} />
          </div>
          <div>
            <h4>Video Dispaly</h4>
            <input type="url" placeholder="Must be full url ie. www.youtube.com/product-esc" onChange={this.handleChange('video_link')} value={this.state.video_link} />
          </div>
          <button onClick={this.handleSubmit}>ESCAPE IT</button>
        </form>
      </div>
    )
  }
}

export default ProductForm;
