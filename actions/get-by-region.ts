import { TCountries } from "@/type/countries-type"

export const getByRegion = async (region:string):Promise<TCountries[]> => {
  try {
    const resp = await fetch(`https://restcountries.com/v3.1/region/${region}`)

    if(!resp.ok){
      // throw new Error(`Failed to fetch country data. Status: ${resp.status}`)
      return []
    }

    const data:TCountries[] = await resp.json()
    return data

  } catch (error) {
    console.error('Error reading file: ', error)
    throw error
  }
}