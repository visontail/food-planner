import { useState, useEffect } from 'react';
import { fetchCategories, /* fetchMeals,  */ fetchMealsWithinCategories } from '../services/api';

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
            return;
        }
        setSelectedCategories([...selectedCategories, category]);
    }

    function changeNumberOfMeals(number) {
        setNumberOfMeals(number);
    }

  // fetch data from backend
  const getMeal = async (selectedCategories) => {
    try {
      const responseMealsWithinCategories = await fetchMealsWithinCategories(numberOfMeals, selectedCategories);
      if (!responseMealsWithinCategories || responseMealsWithinCategories === "") {
        console.error("Failed to fetch meals");
        //const responseMeals = await fetchMeals(numberOfMeals);
      }
      setMeals(responseMealsWithinCategories);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="shadow-2xl rounded-[20px] p-4 mx-6 mb-10">
      <h2 className="text-2xl font-semibold text-default-orange">Categories</h2>
      <p>Select the desired categories</p>
      <ul className="flex flex-wrap gap-2 m-4">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <li
              className="text-default-orange hover:bg-orange-200 hover:text-hover-orange px-2 py-1 rounded-full cursor-pointer"
              key={index}
              onClick={() => selectItem(category)}
            >
              {category}
            </li>
          ))
        ) : (
          <li className="text-gray-400">No categories found</li>
        )}
      </ul>
      <hr className="my-6 border-orange-200" />
      <p>Select the number of meals</p>
      <select
        className="bg-default-orange text-white py-2 px-4 rounded-2xl border-r hover:bg-hover-orange mr-10"
        onChange={(e) => changeNumberOfMeals(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3" selected>3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <hr className="my-6 border-orange-200" />
      <button
        className="bg-default-orange text-white py-2 px-4 rounded-2xl border-r hover:bg-hover-orange"
        onClick={() => getMeal(selectedCategories)}
      >
        Generate
      </button>
      <div className="my-10">
        <h2 className="text-2xl font-semibold text-default-orange flex justify-center">
          Meals
        </h2>
        <ul className="list-none p-0 mt-4">
          {meals.length === 0 ? (
            <li className="text-gray-400 flex justify-center">
              No meals found
            </li>
          ) : (
            meals.map((meal) => (
              <li
                key={meal._id}
                className="flex justify-center text-base text-hover-orange font-medium py-2 px-4  hover:bg-orange-200 rounded-2xl cursor-pointer"
              >
                {meal.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Generator;
