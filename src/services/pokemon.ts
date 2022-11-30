import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQueryWithRetry } from "@lib/fetch"
import { PaginatedList } from "@type/global"

export type Pokemon = {
  name: string
  url: string
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    getPokemons: builder.query<PaginatedList<Pokemon>, void>({
      query: () => `pokemon/`,
    }),
  }),
})

export const { useGetPokemonsQuery } = pokemonApi
