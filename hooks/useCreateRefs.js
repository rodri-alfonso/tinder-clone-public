import { useMemo, createRef } from 'react'

export const useCreateRefs = (countOfRefs) => {
	const createdRefs = useMemo(
		() =>
			Array(countOfRefs)
				.fill(0)
				.map(() => createRef()),
		[countOfRefs]
	)

	return createdRefs
}
