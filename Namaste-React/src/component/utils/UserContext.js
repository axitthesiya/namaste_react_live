import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Admin",
    email: "admin@instafood.com",
  }
});

export default UserContext;