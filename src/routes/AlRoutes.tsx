import { Route,Routes } from "react-router-dom"
import { Home,Cart } from "../Pages"
import CreateCard from "../Pages/CreateCard"
import ProtectedRoute from "./ProtectedRoute"
export const AlRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/create" element={<ProtectedRoute><CreateCard/></ProtectedRoute> }/>
      </Routes>
    </>
  )
}
