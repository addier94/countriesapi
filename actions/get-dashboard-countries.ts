
export const getDashboardCountries = async () => {
  try{
    const resp = await fetch('/resources/data.json')
    return resp.json()
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}