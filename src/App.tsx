import { Layout } from "./components/Layout"
import { AboutUs } from "./components/sections/AboutUs"
import { Brands } from "./components/sections/Brands"
import { Hero } from "./components/sections/Hero"
import { Services } from "./components/sections/Services"

function App() {


  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
    </Layout>
  )
}

export default App
