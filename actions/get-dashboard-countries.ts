import { readFile } from "fs/promises"

export const getDashboardCountries = async () => {
  try {
    const data = await readFile('public/data.json', 'utf8');
    return JSON.parse(data)

  } catch (error) {
    console.error('Error reading file: ', error)
    throw error
  }
}