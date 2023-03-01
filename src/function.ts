// Variable declartions
const Hour = 1000 * 60 * 60; //1000 milliseconds (1sec) * 60 (60sec) * 60 (60min) - hour calculation

const OneHour = new Date().getTime() - Hour; // 1 hour - used in chrome.history.deleteRange method
const OneDay = new Date().getTime() - Hour * 24; // 1 day - used in chrome.history.deleteRange method

// let $ = document.getElementById.bind(document); //create new function ($) which finds a HTML element on popup using "id" attribute.

// Confirms that the history has been sucessfully deleted
function successfulDelete() {
  console.log("Task Successful");
}

// Utilizes the chrome.history API and deleteRange method to delete search history from past hour
function deleteOneHour() {
  chrome.history.deleteRange(
    {
      startTime: OneHour,
      endTime: Date.now(),
    },
    successfulDelete
  );
};

// Utilizes the chrome.history API and deleteRange method to delete search history from past day
function deleteOneDay() {
  chrome.history.deleteRange(
    {
      startTime: OneDay,
      endTime: Date.now(),
    },
    successfulDelete
  );
};

// Utilizes the chrome.history API and deleteAll method to delete all search history
function deleteAllTime() {
  chrome.history.deleteAll(successfulDelete);
};

export { deleteOneHour, deleteOneDay, deleteAllTime, successfulDelete }