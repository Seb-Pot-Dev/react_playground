import { useRef, useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";
function App() {
  //STATE REACT (état, donnée) ------------------
  const [fruits, setFruits] = useState([
    {
      id: 1,
      nom: "Abricot",
    },
    {
      id: 2,
      nom: "Banane",
    },
    {
      id: 3,
      nom: "Cerise",
    },
  ]);


  // useRef est un hook (function de la lib React) permettant de faire référance à un composant (comme un #id)
  const inputRef = useRef();

  // COMPORTEMENT REACT ---------------------
  const handleDelete = (id) => {
    //1. copie du state
    const fruitsCopy = [...fruits];
    //2. manipuler la copie du state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //3. mise à jour du state AVEC LE SETTER
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
     //1. copie du state
     const fruitsCopy = [...fruits];
     //2. manipulation de la copie
     fruitsCopy.push(fruitAAjouter);
     //3. modifier le state avec le setter en lui passant la copie
     setFruits(fruitsCopy);
  }

  

  // AFFICHAGE REACT (render) ----------------
  return (
    <div>
      <h1>Ma liste de fruits</h1>
      <ul>
        {
        fruits.map((fruit) => (
            <Fruit fruitInfo={fruit} onFruitDelete={handleDelete}/>
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />

    </div>
  );
}

export default App;

// Etapes de la gestion du formulaire
// 1. Création du formulaire et des champs
// 2. soumission du formulaire
// 3. collecte des donnée du formulaire