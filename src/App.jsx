import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./pages/Home/Home"
import CompanyForm from "./pages/CompanyForm/CompanyForm"
import DoneComponents from "./pages/DoneComponents/DoneComponents"
import InWorkComponents from './pages/InWorkComponents/InWorkComponents'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/company-form" element={<CompanyForm/>}/>
          <Route path="/done-components" element={<DoneComponents/>}/>
          <Route path="/in-work" element={<InWorkComponents/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
