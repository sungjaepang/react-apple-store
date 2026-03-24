import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (

    <Link to={`/product/${product.id}`}>

      <div className="product-card">

        <img src={product.image} />

        <h3>{product.name}</h3>

        <p>{product.price.toLocaleString()}원</p>

      </div>

    </Link>

  )

}

export default ProductCard