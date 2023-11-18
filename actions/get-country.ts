import { TCountry } from "@/type/country-type";

export const getCountry = async (country: string): Promise<TCountry[]> => {
  try{
    const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`)

    if(!resp.ok) {
      throw new Error(`Failed to fetch country data. Status: ${resp.status}`)
    }

    const data:TCountry[] = await resp.json()
    return data;
  } catch (error) {
    console.log('Error fetching country data: ', error)
    throw error
  }
}