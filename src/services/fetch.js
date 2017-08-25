export function customFetch() {
  return fetch(...arguments)
    .then(response => new Promise(res => {
      setTimeout(() => {
        res(response.json())
      }, 2000)
    }))
}