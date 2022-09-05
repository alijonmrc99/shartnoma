import { configureStore } from "@reduxjs/toolkit";
import districtssSlice from "./reduser/distictSlice/districtSlice";
import menuReduser from "./reduser/menu/menuSlice";
import regionsSlice from "./reduser/regionSlice/regionsSlice";
import userSlice from "./reduser/user/userSlice";
export default configureStore({
  reducer: {
    menu: menuReduser,
    regions: regionsSlice,
    district: districtssSlice,
    user: userSlice,
  },
});
