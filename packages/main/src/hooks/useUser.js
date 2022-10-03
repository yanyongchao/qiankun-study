import { StoreContext } from "../context";
import { useContext } from "react";

export const useUser = () => {
  const user = useContext(StoreContext).userStore;
  return user;
};
