import clsx from 'clsx'
import { useState } from 'react'
import RadioGroup from './components/ui/RadioGroup'
import { deleteAllTime, deleteOneDay, deleteOneHour } from './function'

const durations = [
  { id: '1hr', title: 'Last 60 minutes' },
  { id: '24hrs', title: 'Last 24 hours' },
  { id: 'alltime', title: 'All time' },
]

function App() {
  // State for the duration option
  const [durationOption, setDurationOption] = useState(durations[0].title)

  // Function to handle the duration option change
  function handleDurationChange() {
    switch (durationOption) {
      case durations[0].title:
        deleteOneHour()
        break
      case durations[1].title:
        deleteOneDay()
        break
      case durations[2].title:
        deleteAllTime()
        break
      default:
        break
    }
  }

  return (
    <main className="min-h-[300px] w-[280px] bg-neutral-100 dark:bg-neutral-800">
      <header className="p-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Clear History</h1>
        <RadioGroup durations={durations} setDurationOption={setDurationOption} />
      </header>
      <div className="p-6 flex flex-col gap-4 bg-neutral-200 dark:bg-neutral-900">
        <p className="font-semibold text-sm italic">
          Warning! This will permanently clear your browser history
        </p>
        <button
          type="button"
          onClick={() => handleDurationChange}
          className={clsx(
            'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2 px-4 rounded',
            'focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-200 dark:focus-visible:ring-offset-gray-800'
          )}
        >
          Begone history
        </button>
      </div>
    </main>
  )
}

export default App
