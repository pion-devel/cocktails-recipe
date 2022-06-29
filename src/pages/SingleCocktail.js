import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
          console.log(drinks[0]);
        } else {
          setCocktail(null);
        }
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No cocktail to display</h2>;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{name} </h2>
      <div className="drink">
        <img src={image} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data"> name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data"> category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data"> info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data"> glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data"> instructions :</span>
            {instructions}
          </p>
          <p><span className="drink-data"> ingredients :</span>
   
          {ingredients.map((ingredient, index) =>{
            return ingredient && <li key={index}> {ingredient}</li>
          })}
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
