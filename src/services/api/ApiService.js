/* Here is where we could create our Api service, currently a mocked one */
const DELAY = 500

const delayedResolvePromise = (delay = DELAY) => new Promise(resolve => setTimeout(() => resolve(), delay))

const axiosInstance = {
  get: () => delayedResolvePromise(),
  post: () => delayedResolvePromise(),
  put: () => delayedResolvePromise(),
  delete: () => delayedResolvePromise()
}

export const ApiService = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete
}
