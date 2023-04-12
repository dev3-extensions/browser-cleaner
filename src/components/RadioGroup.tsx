import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
import { useState } from 'react'

type RadioGroupProps = {
  setDurationOption: React.Dispatch<React.SetStateAction<string>>
  durations: {
    id: string
    title: string
  }[]
}

const RadioGroup = ({ setDurationOption, durations }: RadioGroupProps) => {
  return (
    <form>
      <legend className="font-medium">Select duration to clear:</legend>
      <RadioGroupPrimitive.Root
        aria-label="Duration"
        defaultValue={'Last 60 minutes'}
        onValueChange={setDurationOption}
      >
        <div className="mt-3 space-y-3">
          {durations.map((duration) => (
            <div key={duration.id} className="flex items-center">
              <RadioGroupPrimitive.Item
                id={duration.id}
                value={duration.title}
                className={clsx(
                  'peer relative w-4 h-4 rounded-full',
                  'border border-transparent text-white',
                  'radix-state-checked:bg-blue-500 radix-state-unchecked:bg-gray-300 dark:radix-state-unchecked:bg-neutral-900',
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
