import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-chrome-extension-router'
import { deleteAdvancedOptions } from '../backend/Functions'
import { Checkbox } from '../components/Checkbox'
import App from './Homepage'

export type SelectedOptions = {
  [key: string]: boolean
}

export type SelectedOptionsFull = {
  appcache: boolean
  cache: boolean
  cookies: boolean
  downloads: boolean
  fileSystems: boolean
  formData: boolean
  history: boolean
  indexedDB: boolean
  localStorage: boolean
  passwords: boolean
  serviceWorkers: boolean
  webSQL: boolean
}

const Options = () => {
  const [selectedOptions, setSelectedOptions] = useState({} as SelectedOptionsFull)

  const handleOptionChange = (optionName: string, isChecked: boolean): void => {
    setSelectedOptions({
      ...selectedOptions,
      [optionName]: isChecked,
    })
  }

  const handleDeletingData = (): void => {
    deleteAdvancedOptions(selectedOptions)
  }

  return (
    <div className="min-h-[300px] w-[280px] bg-neutral-100 dark:bg-neutral-800">
      <header className="p-6 pb-0 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Advanced Options</h1>
      </header>

      <div className="p-6 flex flex-col gap-4">
        <Checkbox
          text="App Cache"
          onChange={(isChecked) => handleOptionChange('appcache', isChecked)}
        />
        <Checkbox
          text="Browser Cache"
          onChange={(isChecked) => handleOptionChange('cache', isChecked)}
        />
        <Checkbox text="Cookies" />
        <Checkbox text="Downloads List" />
        <Checkbox text="File Systems" />
        <Checkbox text="Form Data" />
        <Checkbox
          text="History"
          onChange={(isChecked) => handleOptionChange('history', isChecked)}
        />
        <Checkbox text="IndexedDB Database" />
        <Checkbox text="LocalStorage Data" />
        <Checkbox text="Passwords" />
        <Checkbox text="Plugin Data" />
        <Checkbox text="WebSQL Database" />
        <div className="pt-4 flex justify-evenly gap-4">
          <Link component={App} href="/" className="px-4 py-2 bg-neutral-700 rounded font-semibold">
            <ArrowLeft />
          </Link>
          <button
            className="px-4 py-2 bg-blue-500 rounded font-semibold w-full"
            onClick={() => handleDeletingData()}
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Options
