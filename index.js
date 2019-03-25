// Make inputs auto-size
document.querySelectorAll('.task-text').forEach(task => {
  autosizeInput(task)
})

const saveValues = () => {
  const values = []

  // Save all values as an array
  document.querySelectorAll('input').forEach(input => {
    values.push(input.type === 'checkbox' ? input.checked : input.value)
  })

  // Set stringified tasks array to localstorage
  window.localStorage.tasks = JSON.stringify(values)
}

const loadValues = () => {
  // Convert localStorage string into array
  const persistedTasks = JSON.parse(window.localStorage.tasks)

  // Set all persisted tasks to inputs
  document.querySelectorAll('input').forEach((input, index) => {
    input.type === 'checkbox'
      ? (input.checked = persistedTasks[index])
      : (input.value = persistedTasks[index])
  })
}

// Load values on page load
loadValues()
// Save values on refresh or window close
window.onbeforeunload = saveValues
