import { useParams } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

function ItemPage() {

  const params = useParams();
  console.log(params);

  return (
    <>
      <Header />
      <div>
        <h2>THIS IS THE item PAGE</h2>
      </div>
      <Footer />
    </>
  )
}

export default ItemPage