
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl = process.env.NODE_ENV === "production" ? "https://backend-portfolio-proxy.herokuapp.com/api/v1/bingnewssearch" : "http://localhost:5000/api/v1/bingnewssearch";

const createRequest = (url) => ({ url });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;