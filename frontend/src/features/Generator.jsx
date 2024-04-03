import { useState, useEffect } from 'react';
import { fetchCategories, fetchMealsWithinCategories } from '../services/api.js';
import { Link } from 'react-router-dom';

function Generator() {

    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [numberOfMeals, setNumberOfMeals] = useState(3);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesData = await fetchCategories();
                if (!categoriesData || categoriesData.length === 0) {
                    console.log('No categories found');
                }
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchData();
    }, []);

    function selectItem(category) {
      if (selectedCategories.includes(category)) {
          setSelectedCategories(selectedCategories.filter((item) => item !== category));
      } else {
          setSelectedCategories([...selectedCategories, category]);
      }
  }

    function changeNumberOfMeals(number) {
        setNumberOfMeals(number);
    }

  // fetch data from backend
  const getMeal = async (numberOfMeals, selectedCategories, categories) => {
    try {
      // if no number of meals is selected, default to 3
      if (!numberOfMeals || numberOfMeals === "") {
        numberOfMeals = 3;
      }
      // if no categories are selected, default to all categories
      if (!selectedCategories || selectedCategories.length === 0) {
        selectedCategories = categories;
      }
      const responseMealsWithinCategories = await fetchMealsWithinCategories(numberOfMeals, selectedCategories);
      if (!responseMealsWithinCategories || responseMealsWithinCategories === "") {
        console.error("Failed to fetch meals");
      }
      setMeals(responseMealsWithinCategories);
      setSelectedCategories(['']);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="shadow-2xl rounded-[20px] p-4 mx-6 mb-10 min-w-fit">
      <div className="p-4">
      <p className="text-gray-600 mb-4">Select the desired categories</p>
      <ul className="flex flex-wrap gap-2 m-4">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <li
            className={`px-2 py-1 rounded-full cursor-pointer ${selectedCategories.includes(category) ? 'bg-orange-200 text-default-orange' : 'text-orange-300 hover:bg-orange-200 hover:text-default-orange'}`}
              key={index}
              onClick={() => selectItem(category)}
            >
              {category}
            </li>
          ))
        ) : (
          <p className="text-gray-400">No categories found</p>
        )}
      </ul>
      <p className="text-gray-600 mb-4">Select the number of meals</p>
      <select
        className="bg-orange-300 text-white py-2 px-4 ml-8 rounded-2xl border-r hover:bg-hover-orange mr-10"
        onChange={(e) => changeNumberOfMeals(e.target.value)}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button
        className="flex m-10 ml-auto bg-orange-300 text-white py-2 px-4 rounded-2xl border-r hover:bg-hover-orange"
        onClick={() => getMeal(numberOfMeals, selectedCategories, categories)}
      >
        Generate
      </button>
      </div>
      <hr className="my-6 border-orange-200" />
      <div className="my-10">
        <h2 className="text-2xl font-semibold text-orange-300 flex justify-center">
          Meals
        </h2>
        <ul className="list-none p-0 mt-4">
          {meals.length === 0 ? (
            <li className="text-gray-400 flex justify-center">
              No meals found
            </li>
          ) : (
            meals.map((meal) => (
                <Link key={meal._id}
                    to={`/recipes/${meal._id}`}
                    className="flex justify-center text-base text-hover-orange font-medium py-2 px-4  hover:bg-orange-200 hover:text-default-orange rounded-2xl cursor-pointer"
                  >
                    {meal.name}
                  </Link>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Generator;
