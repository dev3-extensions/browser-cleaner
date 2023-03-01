import DurationRadioButtons from './components/DurationRadioButtons'

const App = () => {
  return (
    <div className="min-h-[300px] w-[250px] bg-[#262626] text-white">
      <div className="m-4 flex flex-col gap-4">
        <p className="text-2xl font-bold">Clear History</p>
        <DurationRadioButtons />
        <p className="mt-4 font-semibold text-xs italic">
          Warning! This will permanently clear your browser history
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Begone history
        </button>
        {/* ahahsdahsdhasdha */}
        {/* asdajsdnjnabsd */}
        {/* asdjnasidnain */}
      </div>
    </div>
  )
}

export default App
