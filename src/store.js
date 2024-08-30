import { configureStore } from "@reduxjs/toolkit";
import { listApi } from "./service/accessjson";
import { setupListeners } from "@reduxjs/toolkit/query";

 const store = configureStore(
    {
        reducer:{
            [listApi.reducerPath] : listApi.reducer
        },
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(listApi.middleware),
    }
)
setupListeners(store.dispatch)
export default store