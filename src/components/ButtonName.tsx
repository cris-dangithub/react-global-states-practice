import { useContext } from "react";
import AppContext from "../app/contexts/AppContext";

export default function ButtonName() {
  const { user, setUser } = useContext(AppContext);
  let newUser: any;
  if (user) {
    newUser = { ...user };
    newUser.username = "fatiii";
  }
  return (
    <div>
      <p>Current username: {user?.username}</p>
      <button onClick={() => setUser(newUser)}>Change user to "fatiii"</button>
    </div>
  );
}
