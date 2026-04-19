// 이미지경로 1️⃣ import 방식 ---- (React 권장방식)
import iphoneImg from "../assets/iphone.jpg" // 👉🏼React에서 가장 안전한 방식
import macbook from "../assets/macbook.jfif"
import airpods from "../assets/airpods.jfif"


const products = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    price: 2000000,
    image : iphoneImg, //👉🏼1️⃣ import 방식
    // image: "/images/iphone.jpg",  // 👉🏼2️⃣ public 방식(정적 사이트)
    description: "Next generation smartphone"
  },
  {
    id: 2,
    // name: "iPad Pro",
    name: "MacBook Air",
    price: 1800000,
    image : macbook,
    // image: "/images/macbook.jpg",
    // description: "Light and powerful laptop"
    description: "가볍고 파워풀한 랩탑"
  },
  {
    id: 3,
    // name: "camera fix",
    name: "AirPods Pro",
    price: 350000,
    image : airpods,
    // image: "/images/airpods.jpg",
    // description: "Wireless earbuds"
    description: "선이 없는 이어버드, 몰입감 넘치는 사운드"
  }
];

export default products;