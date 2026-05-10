import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import CodeOfConduct from "./pages/CodeOfConduct.tsx";
import RightBar from "./components/RightBar.tsx";
import Footer from "./components/Footer.tsx";
import License from "./pages/License.tsx";
import Funding from "./pages/Funding.tsx";
import Contributing from "./pages/Contributing.tsx";
import Security from "./pages/Security.tsx";
import PullRequestTemplate from "./pages/PullRequestTemplate.tsx";


const App = () => {

  return (
    <>
      <RightBar></RightBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen/license" element={<License />} />
        <Route path="/gen/code_of_conduct" element={<CodeOfConduct />} />
        <Route path="/gen/funding" element={<Funding />} />
        <Route path="/gen/contributing" element={<Contributing />} />
        <Route path="/gen/security" element={<Security />} />
        <Route path="/gen/pull_request_template" element={<PullRequestTemplate />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
