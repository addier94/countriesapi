import { Search } from "lucide-react"

const Filter = () => {
  return (
    <div className="flex flex-col gap-y-10 px-16 py-7 dark:bg-dark-blue-bg md:flex-row md:justify-between">
      <form>
        <div className="dark:bg-dark-blue pl-7 h-14 flex items-center gap-x-4 shadow-xl rounded-md bg-light-elem md:w-96">
          <Search className="w-4 h-4 dark:text-light-elem text-light-mode-input"/>
          <input 
            type="text" 
            placeholder="Search for a country..." 
            className="h-full w-full pr-6 bg-transparent dark:text-light-elem outline-none dark:placeholder-white"
          />
        </div>
      </form>
      <select
        defaultValue="option"
        className="w-56 h-14 px-4 dark:bg-dark-blue dark:text-light-elem shadow-2xl bg-light-elem rounded-md outline-none"
      >
        <option value="option">Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter