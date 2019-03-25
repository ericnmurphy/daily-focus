// Make inputs auto-size
document.querySelectorAll('.task-text').forEach(task => {
  autosizeInput(task)
})

// Get greeting message
const getMessage = complete => {
  console.log(complete)
  switch (complete) {
    case 0:
      const date = new Date()
      const hour = date.getHours()
      let heading = ''

      if (hour < 11) {
        heading = 'Good morning! ☀️'
      } else {
        heading = "Let's go! 💪"
      }

      return `
      <h1>${heading}</h1>
      <p>What are your most important tasks for today?</p>
      `
    case 6:
      return `
    <h1>Finished for today! 🏁</h1>
    <p>You've finished with your most important tasks for today. Take a rest!</p>
    <button>Start fresh 🧹</button>
    `
    default:
      return ''
  }
}

// Check how many tasks have been completed to update the message
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
  input.addEventListener('input', () => {
    const tasksCompleted = Array.from(
      document.querySelectorAll('input')
    ).filter(input => {
      return input.type === 'checkbox' ? input.checked : input.value
    }).length

    document.querySelector('.message').innerHTML = getMessage(tasksCompleted)
  })
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

  // Set greeting message
  document.querySelector('.message').innerHTML = getMessage(
    persistedTasks.filter(task => task).length
  )

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
