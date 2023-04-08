import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-chrome-extension-router'
import App from './App'
import { Checkbox } from './components/ui/Checkbox'

const Options = () => {
  return (
    <div className="min-h-[300px] w-[280px] bg-neutral-100 dark:bg-neutral-800">
      <header className="p-6 pb-0 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Advanced Options</h1>
      </header>

      <div className="p-6 flex flex-col gap-4">
        <Checkbox text="App Cache" defaultState={true} />
        <Checkbox text="Browser Cache" defaultState={true} />
        <Checkbox text="Cookies" defaultState={true} />
        <Checkbox text="Downloads List" defaultState={true} />
        <Checkbox text="File Systems" defaultState={false} />
        <Checkbox text="Form Data" defaultState={false} />
        <Checkbox text="History" defaultState={true} />
        <Checkbox text="IndexedDB Database" defaultState={false} />
        <Checkbox text="LocalStorage Data" defaultState={false} />
        <Checkbox text="Passwords" defaultState={false} />
        <Checkbox text="Plugin Data" defaultState={false} />
        <Checkbox text="WebSQL Database" defaultState={false} />
        <div className="pt-4 flex justify-evenly gap-4">
          <Link component={App} href="/" className="px-4 py-2 bg-neutral-700 rounded font-semibold">
            <ArrowLeft />
          </Link>
          <button className="px-4 py-2 bg-blue-500 rounded font-semibold w-full">
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Options
