import { useParams } from "react-router-dom"
import products from "../data/products" // 추가 useState 장바구니 + 완성도80% 구간

// function ProductDetail() { 
function ProductDetail({ cart, setCart }) { //핵심 상태관리 만들기 _03.19(목)

  const { id } = useParams()

  // 추가 useState 장바구니 + 완성도80% 구간
  const product = products.find(p => p.id === Number(id))

  // 중요한 에러방지코드
  if (!product) {
    return <div>상품 없음</div>
  }

  //핵심 상태관리 만들기 _03.19(목)
  const addToCart = () => {
    setCart([...cart, product]) //⬅️React상태관리 핵심패턴
    alert("장바구니에 추가됨!")
  }   // 끝, 여기까지.

  return (
    <div className="detail">

      <img src={product.image} alt={product.name} />

      <div className="info">
        <h1>{product.name}</h1>
        <p>{product.price.toLocaleString()}원</p>

        <button onClick={addToCart}>장바구니 담기</button> {/* //핵심 상태관리 만들기 _03.19(목) */}
      </div>

    </div>
    // <div>
    //   <h1>Product Detail</h1>
    //   <p>Product ID : {id}</p>
    // </div>
  )

}

export default ProductDetail