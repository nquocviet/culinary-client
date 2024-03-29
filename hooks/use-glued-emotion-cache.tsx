import { useState } from 'react'
import createCache from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'

const useGluedEmotionCache = (key = 'emotion') => {
	const [cache] = useState(() => {
		const cache = createCache({ key })
		cache.compat = true
		return cache
	})

	useServerInsertedHTML(() => {
		const entries = Object.entries(cache.inserted)
		if (entries.length === 0) return null
		const names = entries
			.map(([n]) => n)
			.filter((n) => typeof n === 'string')
			.join(' ')
		const styles = entries.map(([, s]) => s).join('\n')
		const emotionKey = `${key} ${names}`
		return (
			<style
				dangerouslySetInnerHTML={{ __html: styles }}
				data-emotion={emotionKey}
			/>
		)
	})

	return cache
}

export default useGluedEmotionCache
