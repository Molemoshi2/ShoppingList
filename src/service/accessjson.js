import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const listApi = createApi(
    {
        reducerPath: 'listApi',
        baseQuery: fetchBaseQuery(
            {
                baseUrl: 'https://localhost:3000',
            }
        ),
        endpoints: (builder) => ({
            getList : builder.query({
                query: () => '/list',
            })

        })
    }
)    

export const {useGetListQuery} = listApi