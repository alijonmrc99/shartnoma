import { configureStore } from "@reduxjs/toolkit";
import districtssSlice from "./reduser/distictSlice/districtSlice";
import menuReduser from "./reduser/menu/menuSlice";
import regionsSlice from "./reduser/regionSlice/regionsSlice";
import userSlice from "./reduser/user/userSlice";
import contractsTypesSlice from "./reduser/contracts/contractsSlice";
import contractSlice from "./reduser/contracts/contractSlice";
import usersSlice from "./reduser/user/usersSlice";

export default configureStore({
  reducer: {
    menu: menuReduser,
    regions: regionsSlice,
    district: districtssSlice,
    user: userSlice,
    users: usersSlice,
    contractTypes: contractsTypesSlice,
    contract: contractSlice,
  },
});
