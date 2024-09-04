import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listApi = createApi(
    {
        reducerPath: 'listApi',
        baseQuery: fetchBaseQuery(
            {
                baseUrl: 'http://localhost:3000',
            }
        ),
        endpoints: (builder) => ({
            getAllItems : builder.query({
            query: () => '/list',
            }),

        }),
    }
)    

export const  { useGetAllItemsQuery } = listApi
