import "./RecipeDetaild.css";

export default function RecipeDetails({ recipe }) {
  return (
    <div className="recipe-card">
      <h2 className="recipe-title">{recipe.title}</h2>
      <img
        src={`/${recipe.image}`}
        alt={recipe.title}
        className="recipe-image"
      />

      <div className="recipe-info">
        <span className="recipe-type">Тип: {recipe.type}</span> <br />
        <span className="recipe-time">Время: ~{recipe.time}</span>
      </div>

      <div className="recipe-section">
        <h3>Ингредиенты:</h3>
        <ul className="ingredients-list">
          {recipe.ingredients.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-instruction">
        <h3>Инструкции:</h3>
        <ol className="instruction-list">{recipe.instructions}</ol>
      </div>
    </div>
  );
}
