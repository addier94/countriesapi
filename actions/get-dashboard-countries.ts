import { TCountries } from "@/type/countries-type"

export const getDashboardCountries = async ():Promise<TCountries[]> => {
  try {
    const resp = await fetch('https://restcountries.com/v3.1/all')

    if(!resp.ok){
      throw new Error(`Failed to fetch country data. Status: ${resp.status}`)
    }

    const data:TCountries[] = await resp.json()
    return data

  } catch (error) {
    console.error('Error reading file: ', error)
    throw error
  }
}