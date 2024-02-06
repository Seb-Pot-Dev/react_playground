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

  // useRef est un hook (function de la lib React) permettant de faire référance à un composant (comme un #id)
  // const inputRef = useRef();

  // COMPORTEMENT REACT ---------------------
  const handleDelete = (id) => {
    console.log(id);

    //1. copie du state
    const fruitsCopy = [...fruits];

    console.log(fruitsCopy);

    //2. manipuler la copie du state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3. mise à jour du state AVEC LE SETTER
    setFruits(fruitsCopyUpdated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler la copie du state
    const timestamp = new Date().getTime();

    const date = new Date(timestamp);
    const jour = date.getDate().toString().padStart(2, "0");
    const mois = (date.getMonth() + 1).toString().padStart(2, "0"); // Les mois commencent à 0, donc on ajoute 1
    const annee = date.getFullYear().toString();
    const heure = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const seconde = date.getSeconds().toString().padStart(2, "0");
    const dateFormatee = `${jour}/${mois}/${annee} ${heure}:${minute}:${seconde}`;

    const id = dateFormatee;
    const nom = nouveauFruit;

    fruitsCopy.push({ id: id, nom: nom });

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