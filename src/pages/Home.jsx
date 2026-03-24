import products from "../data/products"
import ProductCard from "../components/ProductCard"

import { Link } from "react-router-dom" // 이동버튼추가(Home or Header) _03.19(목)

function Home() {

  return (

    // <Link></Link>
    <> {/*부모태그 역할*/}
      <Link to="/cart">장바구니 보기</Link>   {/* 에러코드 : JSX 식에는 부모 요소가 하나 있어야 합니다. */}
                                              {/* 👉🏻 JSX는 무조건 하나의 부모 태그로 감싸야 한다 */}
      <div className="product-grid"> 
        {products.map(product => (<ProductCard key={product.id} product={product} />))}
      </div>
    </>
  )

}

export default Home