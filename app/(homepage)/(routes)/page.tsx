import { getCountry } from "@/actions/get-country"
import { getDashboardCountries } from "@/actions/get-dashboard-countries"
import CountryItem from "@/components/country-item"
import Filter from "@/components/filter"
import { TCountries } from "@/type/countries-type"

interface SearchHomePageProps {
  searchParams: {
    region: string,
    countryname: string
  }
}

const HomePage = async ({
  searchParams: { countryname }
}: SearchHomePageProps) => {

  // let countries:TCountries[] = await getDashboardCountries()
  let countries:TCountries[] = []

  if(countryname){
    // handle search by name of country
    countries = await getCountry(countryname)
  } else {
    countries = await getDashboardCountries()
  }

  return (
    <>
      <Filter />
      <article 
        className="px-16 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 dark:bg-dark-blue-bg min-h-[calc(100vh-192px)]"
      >
        {countries.length > 0 && countries.map((country, id) => (
          <CountryItem
            key={id}
            {...country}
          />
        ))}

        {countries.length === 0 && (
          <div 
            className="sm:col-span-2 lg:col-span-3 2xl:col-span-4 text-light-color dark:text-light-elem text-4xl text-center mt-36"
          >
            No countries found
          </div>
        )}
      </article>
    </>
  )
}

export default HomePage