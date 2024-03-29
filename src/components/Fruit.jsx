export default function Fruit({ fruitInfo, onFruitDelete}){
    //state
    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruitDelete;
    //comportement

    //render
    return (
    <li key={fruitInfo.id}>
      {fruitInfo.id} - {fruitInfo.nom}{" "}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
    );
}