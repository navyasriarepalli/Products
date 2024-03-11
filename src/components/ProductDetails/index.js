import {Component} from 'react'


import './index.css'





const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  
}

class ProductDetails extends Component {
  state = {productData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getProductApi()
  }

  getProductApi = async () => {
    
    const {match} = this.props
    const {params} = match
    const {id} = params
    
    
    
    console.log(id)
    

    const apiUrl = `https://fakestoreapi.com/products/${id}`
    const options = {
      method: 'GET',
      
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = {
        id:data.id,
      
      title: data.title,
      price:data.price,
      category:data.category,
        description:data.description,
        image:data.image,
        
      }
      this.setState({
        productData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  

  

  renderBookDetailsFailureView = () => (
    <div className="no-match">
      <img
        src="https://res.cloudinary.com/dujs7naih/image/upload/v1707488635/Group_7522_dgxhma.png"
        alt="failure view"
      />
      <p className="no-match-para">Something went wrong. Please try again</p>
      <button type="button" onClick={this.onClickRetry} className="btn">
        Try Again
      </button>
    </div>
  )
  onClickBackBtn=()=>{
    const {history}=this.props 
    history.push('/')

  }

  renderBookDetailsSuccessView = () => {
    const {productData} = this.state
    // const {bookDetails} = bookData
    const {
        
      
      title,
      price,
      category,
        description,
        image,
      
    } = productData

    return (
      
        <div className="product-details-container">
          <img className="product-details-image" alt={title} src={image} />
          
            <h1 className="title" key={title}>
            <span className='spaning-1'>Product Name: </span>Product Name:{title}
            </h1>
            <p className='para'><span className='spaning-1'>Category: </span> {category}</p>
            <p className='para'><span className='spaning-1'>Price: </span>{price} /-</p>
            
            
          
        
         
          
            
            <p className="about-paragraph"><span className='spaning'>About: </span>{description}</p>
            <button type="button" className='btn' onClick={this.onClickBackBtn}>back</button>

          
        </div>
      
    )
  }

  renderProductDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return <>{this.renderBookDetailsSuccessView()}</>
      case apiStatusConstants.failure:
        return <>{this.renderBookDetailsFailureView()}</>
      

      default:
        return null
    }
  }

  render() {
    return (
      <>
        
        <div className="bg">
          <div>{this.renderProductDetails()}</div>
          
        </div>
      </>
    )
  }
}

export default ProductDetails