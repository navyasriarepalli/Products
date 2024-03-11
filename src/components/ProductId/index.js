import { useParams } from "react-router-dom";
import ProductDetails from "../ProductDetails";

const ProductId=()=>{
    const params=useParams()
    console.log(params)
    return(
        <ProductDetails parameters={params} key={params.id}/>
        
    )
    

}

export default ProductId