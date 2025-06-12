import p1_img from '../asset/first.jpg'
import p2_img from '../asset/second.jpg'
import p3_img from '../asset/third.jpg'
import p4_img from '../asset/fourth.jpg'

let data_product = [
  {
    id: 1,
    // name: "Kurti",
    category: "casual",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5
  },

  {
      id: 2,
      // name: "Jeans",
      category: "summer", 
      image: p2_img,
      new_price: 60.0, 
      old_price: 90.5 
  },
  { 
    id: 3,
    // name: "Saree",  
    category: "winter",
    image: p3_img,
    new_price: 75.0,
    old_price: 120.0 
  },
  { 
    id: 4,
    // name: "Jacket",
    category: "western",
    image: p4_img,
    new_price: 90.0,
    old_price: 140.0
  }
]

export default data_product;