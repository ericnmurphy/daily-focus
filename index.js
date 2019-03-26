// Define all our input elements
const inputs = document.querySelectorAll('input')

// Make inputs auto-size
document.querySelectorAll('.task-text').forEach(task => {
  autosizeInput(task)
})

const clearTasks = () => {
  inputs.forEach(input =>
    input.type === 'checkbox' ? (input.checked = false) : (input.value = '')
  )

  getMessage(0)
}

// Get greeting message
const getMessage = complete => {
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

      document.querySelector('.message').innerHTML = `
      <h1>${heading}</h1>
      <p>What are your most important tasks for today?</p>
      `
      return
    case 6:
      document.querySelector('.message').innerHTML = `
      <h1>Finished for today! 🏁</h1>
      <p>You've finished with your most important tasks<br>for today. Take a rest!</p>
      <button class="reset-button">Start fresh 🧹</button>
      `
      document
        .querySelector('.reset-button')
        .addEventListener('click', clearTasks)
      return
    default:
      document.querySelector('.message').innerHTML = ''
      return
  }
}

// Check how many tasks have been completed to update the message
inputs.forEach(input => {
  input.addEventListener('input', () => {
    const tasksCompleted = Array.from(inputs).filter(input => {
      return input.type === 'checkbox' ? input.checked : input.value
    }).length

    getMessage(tasksCompleted)
  })
})

// Save and load items in localstorage
const saveTasks = () => {
  const tasks = []

  // Save all tasks as an array
  inputs.forEach(input => {
    tasks.push(input.type === 'checkbox' ? input.checked : input.value)
  })

  // Set stringified tasks array to localstorage
  chrome.storage.local.set({ tasks })
}

const loadTasks = () => {
  // Convert localStorage string into array
  chrome.storage.local.get(null, ({ tasks }) => {
    // Check to make sure there are tasks and it isn't undefined
    if (tasks) {
      // Set greeting message
      getMessage(tasks.filter(task => task).length)

      // Set all persisted tasks to inputs
      inputs.forEach((input, index) => {
        input.type === 'checkbox'
          ? (input.checked = tasks[index])
          : (input.value = tasks[index])
      })
    } else {
      getMessage(0)
    }
  })
}

// Night mode toggle
document.querySelector('.dark-mode').addEventListener('click', () => {
  const root = document.querySelector('html')
  const theme = root.getAttribute('data-theme')
  theme === 'dark'
    ? root.setAttribute('data-theme', 'light')
    : root.setAttribute('data-theme', 'dark')
})

// Save values on refresh, tab change, or window close
window.onbeforeunload = saveTasks
window.addEventListener('focus', saveTasks)
window.addEventListener('blur', saveTasks)
document.addEventListener('visibilitychange', saveTasks)
// Load values on page load
window.addEventListener('load', loadTasks)
