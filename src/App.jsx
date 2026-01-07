import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./pages/Home/Home"
import CompanyForm from "./pages/CompanyForm/CompanyForm"
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/company-form" element={<CompanyForm/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
