import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import { fetchSelectedMeal } from "../services/api.js"

function ItemPage() {

  const recipeId = useParams().recipeId;

  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemData = await fetchSelectedMeal(recipeId);
        if (!itemData) {
          console.log('No item found');
        }
        setItem(itemData);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchData();
  } , [recipeId]);


  return (
    <>
      <Header />
      <div>
        <h2>THIS IS THE item PAGE</h2>
        <div>
          <img /* src={item.image_url} */ alt={item.name} />
          <h3>{item.name}</h3>
          <p>
            {item.category}
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ItemPage