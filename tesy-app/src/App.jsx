import "bootstrap/dist/css/bootstrap.min.css";
import RescueForm from "./components/RescueForm";
import { useState } from "react";
import AnimalTable from "./components/AnimalTable";
// import apiClient from './services/api-client';

function App() {
  const [animals, setAnimals] = useState([]);

  return (
    <>
      <RescueForm
        onSubmit={(newAnimal) => {
          setAnimals([...animals, { ...newAnimal, id: animals.length + 1 }]);
        }}
      />
      <AnimalTable animals={animals} />
    </>
  );
}

export default App;
