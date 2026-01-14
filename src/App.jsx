import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./pages/Home/Home"
import CompanyForm from "./pages/CompanyForm/CompanyForm"
import DoneComponents from "./pages/DoneComponents/DoneComponents"
import InWorkComponents from './pages/InWorkComponents/InWorkComponents'
import CorporateClients from "./pages/CorporateClients/CorporateClients"
import TravelAgents from "./pages/TravelAgents/TravelAgents"
import Educators from "./pages/Educators/Educators"
import ServiceProviders from "./pages/ServiceProviders/ServiceProviders"
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/company-form" element={<CompanyForm/>}/>
          <Route path="/done-components" element={<DoneComponents/>}/>
          <Route path="/in-work" element={<InWorkComponents/>}/>
          <Route path="/corporate-clients" element={<CorporateClients/>}/>
          <Route path="/travel-agents" element={<TravelAgents/>}/>
          <Route path="/educators" element={<Educators/>}/>
          <Route path="/service-providers" element={<ServiceProviders/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
