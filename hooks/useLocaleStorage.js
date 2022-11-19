import { isSSR } from 'utils/helpers'

export function useLocaleStorage(key) {
	const storageRef = !isSSR && localStorage.getItem(key)

	const storage = !isSSR && JSON.parse(storageRef ?? null)
	const setStorage = (payload) => localStorage.setItem(key, JSON.stringify(payload))
	const clearStorage = () => localStorage.clear()

	return { storage, setStorage, clearStorage }
}
