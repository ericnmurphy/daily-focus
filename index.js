const inputs = document.querySelectorAll('input')

// Make inputs auto-size
document.querySelectorAll('.task-text').forEach(task => {
  autosizeInput(task)
})

const clearTasks = () => {
  inputs.forEach(input =>
    input.type === 'checkbox' ? (input.checked = false) : (input.value = '')
  )

  document.querySelector('.message').innerHTML = getMessage(0)
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

      return `
      <h1>${heading}</h1>
      <p>What are your most important tasks for today?</p>
      `
    case 6:
      return `
    <h1>Finished for today! 🏁</h1>
    <p>You've finished with your most important tasks<br>for today. Take a rest!</p>
    <button class="button" onClick="clearTasks()">Start fresh 🧹</button>
    `
    default:
      return ''
  }
}

// Check how many tasks have been completed to update the message
inputs.forEach(input => {
  input.addEventListener('input', () => {
    const tasksCompleted = Array.from(inputs).filter(input => {
      return input.type === 'checkbox' ? input.checked : input.value
    }).length

    document.querySelector('.message').innerHTML = getMessage(tasksCompleted)
  })
})

const saveTasks = () => {
  const tasks = []

  // Save all tasks as an array
  inputs.forEach(input => {
    tasks.push(input.type === 'checkbox' ? input.checked : input.value)
  })

  // Set stringified tasks array to localstorage
  browser.storage.local.set({ tasks }).then(
    () => {
      console.log('saved')
    },
    error => console.log(error)
  )
}

const loadTasks = () => {
  // Convert localStorage string into array
  browser.storage.local.get().then(
    ({ tasks }) => {
      // Check to make sure there are tasks and it isn't undefined
      if (tasks) {
        // Set greeting message
        document.querySelector('.message').innerHTML = getMessage(
          tasks.filter(task => task).length
        )

        // Set all persisted tasks to inputs
        inputs.forEach((input, index) => {
          input.type === 'checkbox'
            ? (input.checked = tasks[index])
            : (input.value = tasks[index])
        })
      } else {
        document.querySelector('.message').innerHTML = getMessage(0)
      }
    },
    error => {
      console.log(error)
    }
  )
}

// Load values on page load
// Save values on refresh or window close
window.onbeforeunload = saveTasks
// window.addEventListener('load', saveTasks())
window.addEventListener('load', loadTasks())
