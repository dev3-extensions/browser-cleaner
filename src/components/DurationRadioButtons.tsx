import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
import { useState } from 'react'

const durations = [
  { id: '30min', title: 'Last 30 minutes' },
  { id: '24hrs', title: 'Last 24 hours' },
  { id: 'alltime', title: 'All time' },
]

const RadioGroup = () => {
  const [value, setValue] = useState(durations[0].title)

  return (
    <form>
      <legend className="font-medium text-gray-900 dark:text-gray-100">
        Select duration to clear:
      </legend>
      <RadioGroupPrimitive.Root
        aria-label="Pokemon starters"
        defaultValue={'Bulbasaur'}
        onValueChange={setValue}
      >
        <div className="mt-3 space-y-3">
          {durations.map((duration) => (
            <div key={duration.id} className="flex items-center">
              <RadioGroupPrimitive.Item
                id={duration.id}
                value={duration.title}
                className={clsx(
                  'peer relative w-4 h-4 rounded-full',
                  // Setting the background in dark properly requires a workaround (see css/tailwind.css)
                  'border border-transparent text-white',
                  'radix-state-checked:bg-blue-500',
                  'radix-state-unchecked:bg-gray-300 dark:radix-state-unchecked:bg-neutral-900',
                  'focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800'
                )}
              >
                <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </RadioGroupPrimitive.Indicator>
              </RadioGroupPrimitive.Item>
              <label
                htmlFor={duration.id}
                className="ml-3 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                {duration.title}
              </label>
            </div>
          ))}
        </div>
      </RadioGroupPrimitive.Root>
    </form>
  )
}

export default RadioGroup
