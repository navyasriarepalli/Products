import {Component} from 'react'


import ProductItem from '../ProductItem'



import './index.css'



const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Products extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    
    

    
    productsList: [],

  }

  componentDidMount() {
    this.getAllProducts()
  }

  onSubmitSuccess = data => {
    const updatedProductList = data.map(each => ({
      id: each.id,
      
      title: each.title,
      price:each.price,
      category:each.category,
        description:each.description,
        image:each.image,

    }))

    this.setState({
      productsList: updatedProductList,
      apiStatus: apiStatusConstants.success,
    
      
    })

    const {booksList} = this.state
    console.log(booksList)
  }

  getAllProducts = async () => {
    
    

    const apiUrl = `https://fakestoreapi.com/products`
    const options = {
      method: 'GET',
      
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data)
      console.log(data)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure })
    }
  }

  

  

  onClickTryAgain = () => {
    this.getAllBooks()
  }

  

  renderProductList = () => {
    const {productsList} = this.state

    return (
      <ul className="products-list-cont">
        {productsList.map(eachItem => (
          <ProductItem productDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  

  

  renderBooksFailureView = () => (
    <div className="no-match">
      <img
        src="https://res.cloudinary.com/dujs7naih/image/upload/v1707488635/Group_7522_dgxhma.png"
        alt="failure view"
      />
      <p className="no-match-para">Something went wrong. Please try again.</p>
      <button type="button" className="btn" onClick={this.onClickTryAgain}>
        Try Again
      </button>
    </div>
  )

  

  renderBooks = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return <>{this.renderProductList()}</>
      case apiStatusConstants.failure:
        return <>{this.renderBooksFailureView()}</>
      

      default:
        return null
    }
  }

  render() {
    

    return (
      
        
        <div className="bg-prodct">
          
            
            
              <div className="book">{this.renderBooks()}</div>
            
          </div>
          
        
    )
  }
}

export default Products