import { Route,Routes } from "react-router-dom"
import { Home,Cart } from "../Pages"
export const AlRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}
