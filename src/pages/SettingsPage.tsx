import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-chrome-extension-router'
import { Checkbox } from '../components/Checkbox'
import { deleteAdvancedOptions } from '../utils/ChromeUtilities'
import { MainPage } from './MainPage'

type SelectedOptionsSimplified = {
  [key: string]: boolean
}

export type SelectedOptions = {
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

export const SettingsPage = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    history: true,
    cookies: true,
    cache: true,
  } as SelectedOptions)

  const handleOptionChange = (optionName: string, isChecked: boolean): void => {
    setSelectedOptions({
      ...selectedOptions,
      [optionName]: isChecked,
    })
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
          defaultState={selectedOptions.appcache}
        />
        <Checkbox
          text="Browser Cache"
          onChange={(isChecked) => handleOptionChange('cache', isChecked)}
          defaultState={selectedOptions.cache}
        />
        <Checkbox
          text="Cookies"
          onChange={(isChecked) => handleOptionChange('cookies', isChecked)}
          defaultState={selectedOptions.cookies}
        />
        <Checkbox
          text="Downloads List"
          onChange={(isChecked) => handleOptionChange('downloads', isChecked)}
          defaultState={selectedOptions.downloads}
        />
        <Checkbox
          text="File Systems"
          onChange={(isChecked) => handleOptionChange('fileSystems', isChecked)}
          defaultState={selectedOptions.fileSystems}
        />
        <Checkbox
          text="Form Data"
          onChange={(isChecked) => handleOptionChange('formData', isChecked)}
          defaultState={selectedOptions.formData}
        />
        <Checkbox
          text="History"
          onChange={(isChecked) => handleOptionChange('history', isChecked)}
          defaultState={selectedOptions.history}
        />
        <Checkbox
          text="IndexedDB Database"
          onChange={(isChecked) => handleOptionChange('indexedDB', isChecked)}
          defaultState={selectedOptions.indexedDB}
        />
        <Checkbox
          text="LocalStorage Data"
          onChange={(isChecked) => handleOptionChange('localStorage', isChecked)}
          defaultState={selectedOptions.localStorage}
        />
        <Checkbox
          text="Passwords"
          onChange={(isChecked) => handleOptionChange('passwords', isChecked)}
          defaultState={selectedOptions.passwords}
        />
        <Checkbox
          text="WebSQL Database"
          onChange={(isChecked) => handleOptionChange('webSQL', isChecked)}
          defaultState={selectedOptions.webSQL}
        />
        <div className="pt-4 flex justify-evenly gap-4">
          <Link
            component={MainPage}
            href="/"
            className="px-4 py-2 bg-neutral-700 rounded font-semibold"
          >
            <ArrowLeft />
          </Link>
          <button
            className="px-4 py-2 bg-blue-500 rounded font-semibold w-full"
            onClick={() => deleteAdvancedOptions(selectedOptions)}
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  )
}
