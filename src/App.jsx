import { useRef, useState } from "react";

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

  const [nouveauFruit, setNouveauFruit] = useState("");

  const [idCounter, setIdCounter] = useState(4); // Initialisé à 4 car on a déjà trois fruits dans le tableau initial

  // useRef est un hook (function de la lib React) permettant de faire référance à un composant (comme un #id)
  // const inputRef = useRef();

  // COMPORTEMENT REACT ---------------------
  const handleDelete = (id) => {
    //1. copie du state
    const fruitsCopy = [...fruits];
    //2. manipuler la copie du state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //3. mise à jour du state AVEC LE SETTER
    setFruits(fruitsCopyUpdated);
  };

  const handleSubmit = (e) => {
    // empêche le rechargement de la page
    e.preventDefault();
    // compteur d'id pour incrémenter
    const id = idCounter;
    setIdCounter(idCounter+1);
    const nom = nouveauFruit;
    //1. copie du state
    const fruitsCopy = [...fruits];
    //2. manipuler la copie du state
    fruitsCopy.push({ id, nom});

    //3. mise à jour du state AVEC LE SETTER
    setFruits(fruitsCopy);

    //4. vider le champ
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // AFFICHAGE REACT (render) ----------------
  return (
    <div>
      <h1>Ma liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.id} - {fruit.nom}{" "}
              <button onClick={() => handleDelete(fruit.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit"
          onChange={handleChange}
        />
        <button>Ajouter le fruit</button>
      </form>
    </div>
  );
}

export default App;

// Etapes de la gestion du formulaire
// 1. Création du formulaire et des champs
// 2. soumission du formulaire
// 3. collecte des donnée du formulaire