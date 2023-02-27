import { useState, useEffect } from "react";
import './App.css';
import Header from '../Header/Header';
import DataContext from '../../Context/Data';
import JsonData from "../../assets/json/data.json";

const App = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState([]);
  useEffect(() => {
    try {
      setData(JsonData);
    } catch(err) {
      let errors = [...error, err];
      setError(errors);
    }
  }, []);
  return (
    <DataContext.Provider value={data}>
      <div className="App">
        <Header />
      </div>
    </DataContext.Provider>
  );
}

export default App;
