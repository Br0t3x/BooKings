import { createContext } from "react";

export let settings = {
  ui: {
    addbookbuttonisvisible: true
  }
};

export const Settings = createContext(settings);