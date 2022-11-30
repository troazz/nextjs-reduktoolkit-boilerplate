import { useGetPokemonsQuery, Pokemon as PokemonType } from "@services/pokemon"
import { ReactElement } from "react"

export default function Pokemon(): ReactElement {
  const { data, isLoading } = useGetPokemonsQuery()

  return (
    <>
      <h4 className="text-3xl mb-2 font-bold mt-10">My Pokemons</h4>
      <h4 className="text-base mb-2">This pokemons loaded by RTK Query</h4>
      {isLoading ? (
        <div>Loading Pokedex...</div>
      ) : (
        <ul className="mb-4">
          {data?.results?.map((item: PokemonType, index: number) => (
            <li key={index}>
              <a className="text-blue-600" href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
