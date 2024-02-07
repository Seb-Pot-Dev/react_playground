import { useState } from "react";

export default function FruitForm({handleAdd}){
//state
const [nouveauFruit, setNouveauFruit] = useState("");
const [idCounter, setIdCounter] = useState(4); // Initialisé à 4 car on a déjà trois fruits dans le tableau initial
const [placeholder, setPlaceholder] = useState("Ajouter un fruit"); // Nouvel état pour gérer le placeholder

// comportement
const handleSubmit = (e) => {
    //empêche le rechargement de la page
    e.preventDefault();
    // Empêche l'ajout de fruits vides
    if (!nouveauFruit){
      setPlaceholder("Indiquez un nom de fruit svp"); //change le placeholder
      inputRef.current?.focus();
      return
    }; 

    //2. manipuler la copie du state
    const id = idCounter;
    const nom = nouveauFruit;
    const fruitAAjouter = {id, nom};

    handleAdd(fruitAAjouter);
    
    //3. mise à jour du state AVEC LE SETTER
    setIdCounter(idCounter+1);
    
    //4. vider le champ
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
    if (event.target.value) {
      setPlaceholder("Ajouter un fruit"); // Réinitialise le placeholder lors de la saisie de l'utilisateur
    }
  };
// rennder
return (
<form action="submit" onSubmit={handleSubmit}>
    <input
        value={nouveauFruit}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
    />
    <button>Ajouter le fruit</button>
</form>
)
}