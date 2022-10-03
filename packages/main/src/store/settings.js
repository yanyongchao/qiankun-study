import { makeAutoObservable } from "mobx";

class SettingsStore {
  theme = "#1890ff";
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setTheme(color) {
    this.theme = color;
  }
}

const settingsStore = new SettingsStore();

export default settingsStore;
