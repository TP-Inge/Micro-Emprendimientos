import Login from "../components/Login";
import { useState } from "react";
import { PantallaPrincipal } from "../components/PantallaPrincipal";

function App() {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(!submit);
  };

  return (
    <>
      {!submit 
          ? 
        <Login handleSubmit={handleSubmit} />
          :
        <PantallaPrincipal/>}
    </>
  );
}

export default App;
