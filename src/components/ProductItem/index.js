
import './index.css'

import { withRouter,useHistory  } from "react-router-dom";


const ProductItem = props => {
  // eslint-disable-next-line react/no-this-in-sfc
  
  const history = useHistory()
  const onClickProduct = () => {
    const {productDetails} = props
    const {id} = productDetails

    history.push(`/products/${id}`)
  }
  
  
  const {productDetails} = props
  const {title,price,category,description,image} = productDetails
  return (
    
    
    
      <li className="productItem-cont" onClick={onClickProduct}>
      <img
        src={image}
        alt={title}
        
        className="product-item-img"
      />
      <div className="productItem-mini">
        <h1 className="product-item-head">{title}</h1>
        <div className='product-mini'>
            <p><span className='spaning'>Category:</span>{category} </p>
        <p><span className='spaning'>Price:</span>Rs. {price}/-</p>
        </div>
        
        <p className='description'><span className='spaning'>Product Details:</span>{description}</p>
        
      </div>
    </li>
    

    
    
  )
}

export default withRouter(ProductItem)