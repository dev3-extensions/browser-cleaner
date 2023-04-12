import type { SelectedOptionsFull } from '../pages/AdvancedOptions'

// Variable declartions
const Hour = 1000 * 60 * 60 //1000 milliseconds (1sec) * 60 (60sec) * 60 (60min) - hour calculation

const OneHour = new Date().getTime() - Hour // 1 hour - used in chrome.history.deleteRange method
const OneDay = new Date().getTime() - Hour * 24 // 1 day - used in chrome.history.deleteRange method

// Confirms that the history has been sucessfully deleted
const successfulDelete = () => {
  console.log('Task Successful')
}

// Utilizes the chrome.history API and deleteRange method to delete search history from past hour
const deleteOneHour = () => {
  chrome.history.deleteRange(
    {
      startTime: OneHour,
      endTime: Date.now(),
    },
    successfulDelete
  )
}

// Utilizes the chrome.history API and deleteRange method to delete search history from past day
const deleteOneDay = () => {
  chrome.history.deleteRange(
    {
      startTime: OneDay,
      endTime: Date.now(),
    },
    successfulDelete
  )
}

// Utilizes the chrome.history API and deleteAll method to delete all search history
const deleteAllTime = () => {
  chrome.history.deleteAll(successfulDelete)
}

const deleteAdvancedOptions = (selectedOptions: SelectedOptionsFull) => {
  chrome.browsingData.remove(
    {
      since: OneHour,
    },
    selectedOptions
  )
}

export { deleteOneHour, deleteOneDay, deleteAllTime, successfulDelete, deleteAdvancedOptions }

