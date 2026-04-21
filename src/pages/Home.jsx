import products from "../data/products"
import ProductCard from "../components/ProductCard"

import { Link } from "react-router-dom" // 이동버튼추가(Home or Header) _03.19(목)

function Home() {

  return (
    <main className="home-page">
      <section className="hero-section">
        <h1>Apple Style Store</h1>
        <p>미니멀한 제품 경험을 React로 구현한 쇼핑 UI 프로젝트</p>
        <Link to="/cart" className="primary-btn cartBtn">
          {/* <div className="cartBtn">장바구니 보기</div> */}
          장바구니 보기
        </Link>
      </section>

      <section className="product-section">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>

    // 설명 : 파란버튼이 너무 크게 떠 보이니까
    //        상단 오른쪽 카트 링크만으로도 충분하지만,
    //        홈에도 버튼을 둘 거면 이렇게 간단히 배치하는 게 좋다.

    // <Link></Link>
    // <> {/*부모태그 역할*/}
    //   <Link to="/cart" className="btnBlock">
    //     <div className="cartBtn">장바구니 보기</div>
    //   </Link>   {/* 에러코드 : JSX 식에는 부모 요소가 하나 있어야 합니다. */}
    //                                           {/* 👉🏻 JSX는 무조건 하나의 부모 태그로 감싸야 한다 */}
    //   <div className="product-grid"> 
    //     {products.map(product => (<ProductCard key={product.id} product={product} />))}
    //   </div>
    // </>
  )

}

export default Home