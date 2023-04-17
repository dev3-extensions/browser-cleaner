import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-chrome-extension-router'

import { Checkbox } from '../components/Checkbox'

import { deleteAdvancedOptions } from '../utils/ChromeUtilities'
import { MainPage } from './MainPage'

/**
 * The type of the selected options state
 */
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

/**
 * Data for rendering all of the checkboxes
 */
const checkboxData = [
  { id: 1, name: 'appcache', text: 'App Cache' },
  { id: 2, name: 'cache', text: 'Browser Cache' },
  { id: 3, name: 'cookies', text: 'Cookies' },
  { id: 4, name: 'downloads', text: 'Downloads List' },
  { id: 5, name: 'fileSystems', text: 'File Systems' },
  { id: 6, name: 'formData', text: 'Form Data' },
  { id: 7, name: 'history', text: 'History' },
  { id: 8, name: 'indexedDB', text: 'IndexedDB Database' },
  { id: 9, name: 'localStorage', text: 'LocalStorage Data' },
  { id: 10, name: 'passwords', text: 'Passwords' },
  { id: 11, name: 'webSQL', text: 'WebSQL Database' },
]

export const SettingsPage = () => {
  // Sets the default state of the history, cookies, and cache checkboxes to true
  const [selectedOptions, setSelectedOptions] = useState({
    history: true,
    cookies: true,
    cache: true,
  } as SelectedOptions)

  /**
   * Updates the state of the checkboxes when they are clicked
   * @param optionName The name of the option that was clicked
   * @param isChecked Whether or not the checkbox is checked
   */
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
        {checkboxData.map(({ name, text }) => (
          <Checkbox
            key={name}
            text={text}
            onChange={(isChecked) => handleOptionChange(name, isChecked)}
            defaultState={selectedOptions[name as keyof SelectedOptions]}
          />
        ))}

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
