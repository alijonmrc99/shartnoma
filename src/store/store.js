import { configureStore } from "@reduxjs/toolkit";
import districtssSlice from "./reduser/distictSlice/districtSlice";
import menuReduser from "./reduser/menu/menuSlice";
import regionsSlice from "./reduser/regionSlice/regionsSlice";
import userSlice from "./reduser/user/userSlice";
import directonsTypesSlice from "./reduser/directions/directionsSlice";
import directionSlice from "./reduser/directions/directionSlice";
import usersSlice from "./reduser/user/usersSlice";
import contractsTypesSlice from "./reduser/contract/contractsSlice";

export default configureStore({
  reducer: {
    menu: menuReduser,
    regions: regionsSlice,
    district: districtssSlice,
    user: userSlice,
    users: usersSlice,
    directionTypes: directonsTypesSlice,
    direction: directionSlice,
    contracts: contractsTypesSlice,
  },
});
