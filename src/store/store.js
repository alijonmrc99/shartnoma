import { configureStore } from "@reduxjs/toolkit";
import menuReduser from "./reduser/menu/menuSlice";
export default configureStore({
  reducer: {
    menu: menuReduser,
  },
});
