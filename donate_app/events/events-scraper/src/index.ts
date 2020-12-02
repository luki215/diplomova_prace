import { handleScheduled } from './handler'

addEventListener('scheduled', (event) => {
  event.waitUntil(handleScheduled(event))
})

addEventListener('fetch', (event) => {
  event.waitUntil(
    handleScheduled({ scheduledTime: 1, type: 'asd', waitUntil: () => {} }),
  )
})
