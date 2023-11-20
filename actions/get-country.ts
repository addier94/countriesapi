import { TCountries } from "@/type/countries-type";

export const getCountry = async (country: string): Promise<TCountries[]> => {
  try{
    const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`)

    if(!resp.ok) {
      // throw new Error(`Failed to fetch country data. Status: ${resp.status}`)
      return []
    }

    const data:TCountries[] = await resp.json()
    return data;
  } catch (error) {
    console.log('Error fetching country data: ', error)
    throw error
  }
}