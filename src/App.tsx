import clsx from 'clsx'
import DurationRadioButtons from './components/DurationRadioButtons'

const App = () => {
  return (
    <div className="min-h-[300px] w-[280px] bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
      <div className="p-6 flex flex-col gap-4">
        <p className="text-3xl font-bold">Clear History</p>
        <DurationRadioButtons />
      </div>
      <div className="p-6 flex flex-col gap-4 bg-neutral-200 dark:bg-neutral-900">
        <p className="font-semibold text-sm italic">
          Warning! This will permanently clear your browser history
        </p>
        <button
          className={clsx(
            'bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded',
            'focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800'
          )}
        >
          Begone history
        </button>
      </div>
    </div>
  )
}

export default App
