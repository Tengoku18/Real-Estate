import Navbar from "./components/Layout/Navbar";
import Index from "./components/filter-section/Index";
import CardGrid from "./components/cards/CardGrid";
import { createContext, useState } from "react";

export const FormContext = createContext();

function App() {
  const [formValues, setFormValues] = useState(null);

  return (
    <div>
      {" "}
      <FormContext.Provider value={{ formValues, setFormValues }}>
        <Navbar />
        <Index />
        <CardGrid />
      </FormContext.Provider>
    </div>
  );
}

export default App;
