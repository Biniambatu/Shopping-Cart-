
import {ProductCard} from "../component/ProductCard"
import { useTitle } from "../hooks/useTitle"
export const Home = () => {
  useTitle("Home")
  const products = [
    {"id":1,  name: "Sony", "price": 135, 'image': 'asset/sony.jpg'},
    {"id":2,  name: "Samsung", "price": 123, "image": 'asset/samsung.jpg'},
    {"id":3,  name: "Apple", "price": 895, "image":'asset/apple.jpg'},
    {"id":4,  name: "Toshiba", "price": 105, "image": 'asset/toshiba.jpg'},
    {"id":5,  name: "LG", "price": 95, "image": 'asset/lg.jpg'},
    {"id":6,  name: "DELL", "price": 335, "image":'asset/dell.jpg'},
  ] 

  return (
    <main>
      <section className="products">
        {products.map((product)=>(
           <ProductCard key={product.id} product={product} />
        ))}
         
         
      </section>
    </main>
  )
}
