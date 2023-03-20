import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL
  }),
  endpoints: (builder) => ({})
})
