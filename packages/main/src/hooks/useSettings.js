import { StoreContext } from "../context";
import { useContext } from "react";

export const useSettings = () => {
  const settings = useContext(StoreContext).settingsStore;
  return settings;
};
