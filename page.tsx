import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Sale from "./components/Sale"

function HomePage () {
  return (
    <div>
      <Header />
      <Hero />
      <Sale />
      <Products />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default HomePage