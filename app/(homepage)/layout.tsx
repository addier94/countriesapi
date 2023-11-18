import Filter from "@/components/filter"

const CountryLayout = ({
  children
}: {
  children: React.ReactNode
}) => {


  return <>
    <Filter />
    {children}
  </>
}

export default CountryLayout