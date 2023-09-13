import { useContext, useEffect } from "react";
import "./App.css";
import AppContext from "./app/contexts/AppContext";
import ButtonName from "./components/ButtonName";

function App() {
  const { user, setUser } = useContext(AppContext);
  console.log(user);
  useEffect(() => {
    setUser({ email: "cristian@gmail", username: "cristian" });
  }, []);
  return (
    <>
      <h1>
        {user?.username}
        <ButtonName />
      </h1>
    </>
  );
}

export default App;
