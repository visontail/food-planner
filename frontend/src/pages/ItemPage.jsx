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
  <div className="p-4">
    <div className="bg-orange-100 rounded-lg p-6 mt-4">
      <h2 className="flex justify-center text-2xl font-semibold my-4 text-orange-800">{item?.name}</h2>
      <div className="mb-4">
        <p className="font-semibold text-orange-800">Category:</p>
        <div className="flex flex-wrap pl-10">
          {item?.category?.map((category, index) => (
            <span key={index} className="bg-orange-200 mt-4 px-3 py-1 mr-2 mb-2 rounded-full text-orange-800">{category}</span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="font-semibold text-orange-800">Ingredients:</p>
        <ul className="list-disc pl-12">
          {item?.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-orange-800">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-orange-800">Steps:</p>
        {item?.steps?.map((step, index) => (
          <div key={index} className="border-t border-orange-300 pl-4 pt-4 mt-4">
            <p className="text-sm font-semibold text-orange-800">Step {index + 1}</p>
            <p className="text-lg font-semibold mb-2 text-orange-800">{step?.title}</p>
            <p className="mb-2 text-orange-800">{step?.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  <Footer />
</>

  
  )
}

export default ItemPage