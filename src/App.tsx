import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import CodeOfConduct from "./pages/CodeOfConduct.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import License from "./pages/License.tsx";
import Funding from "./pages/Funding.tsx";


const App = () => {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen/license" element={<License />} />
        <Route path="/gen/code_of_conduct" element={<CodeOfConduct />} />
        <Route path="/gen/funding" element={<Funding />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
