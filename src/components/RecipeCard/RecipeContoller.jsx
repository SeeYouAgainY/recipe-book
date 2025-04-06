import recipes from "../../data/recipes.json";
import { useState } from "react";
import RecipeDetails from "../RecipeDetails/RecipeDetaild.jsx";
import "./RecipeCard.css";

export default function RecipeController() {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [mealType, setMealType] = useState("all");
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getRandomRecipe = () => {
    const filtered = recipes.filter((recipe) =>
      mealType === "all" ? true : recipe.type === mealType
    );

    if (filtered.length === 0) {
      alert("Нет рецептов выбранного типа!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    const selectedRecipe = filtered[randomIndex];

    const newHistory = [...history.slice(0, currentIndex), selectedRecipe];
    setHistory(newHistory);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setCurrentRecipe(selectedRecipe);
  };

  const goBackRecipe = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrentRecipe(history[newIndex]);
    }
  };

  return (
    <div className="controller-container">
      <div className="controls">
        <select
          className="type-selector"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
        >
          <option value="all">Все типы</option>
          <option value="breakfast">Завтрак</option>
          <option value="lunch">Обед</option>
          <option value="dinner">Ужин</option>
          <option value="snack">Снэк</option>
          <option value="dessert">Десерт</option>
          <option value="appetizer">Закуска</option>
          <option value="non-existent">Нет рецепта</option>{" "}
          {/* для проверки условия с отсутсвием рецепта*/}
        </select>

        <button className="random-button" onClick={getRandomRecipe}>
          Случайный рецепт
        </button>
        <button
          className="back-button"
          onClick={goBackRecipe}
          disabled={currentIndex <= 0}
        >
          Показать прошлый рецепт
        </button>
      </div>

      {currentRecipe && <RecipeDetails recipe={currentRecipe} />}
    </div>
  );
}
