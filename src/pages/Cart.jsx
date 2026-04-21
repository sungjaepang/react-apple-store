function Cart({ cart, setCart }) {
    const removeItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index)
        setCart(newCart)
    }
    return (
        <div className="cart-page">
            <h1>장바구니</h1>

            {cart.length === 0 ? (
                <p className="cart-empty">장바구니가 비어있습니다.</p>
            ) : (
                cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.image} alt={item.name}/>

                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <p>{item.price.toLocaleString()}원</p>
                        </div>
                        
                        <button onClick={() => removeItem(index)}>삭제</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Cart