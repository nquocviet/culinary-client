export const formatDate = (
	date: Date | number,
	opts?: Intl.DateTimeFormatOptions,
	locales: string | string[] = 'en-US'
): string => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}
	const options = opts || defaultOptions

	return new Intl.DateTimeFormat(locales, options).format(date)
}

export const timeSince = (date: Date | number): string => {
	const SECONDS_PER_MINUTE = 60
	const SECONDS_PER_HOUR = 3600
	const SECONDS_PER_DAY = 86400
	const SECONDS_PER_MONTH = 2592000
	const SECONDS_PER_YEAR = 31536000
	const seconds = Math.floor((+new Date() - +new Date(date)) / 1000)
	let interval = seconds / SECONDS_PER_YEAR

	if (interval > 1) {
		const time = Math.floor(interval)
		return time + ` ${time > 1 ? 'years' : 'year'} ago`
	}

	interval = seconds / SECONDS_PER_MONTH
	if (interval > 1) {
		const time = Math.floor(interval)
		return time + ` ${time > 1 ? 'months' : 'month'} ago`
	}

	interval = seconds / SECONDS_PER_DAY
	if (interval > 1) {
		const time = Math.floor(interval)
		return time + ` ${time > 1 ? 'days' : 'day'} ago`
	}

	interval = seconds / SECONDS_PER_HOUR
	if (interval > 1) {
		const time = Math.floor(interval)
		return time + ` ${time > 1 ? 'hours' : 'hour'} ago`
	}

	interval = seconds / SECONDS_PER_MINUTE
	if (interval > 1) {
		const time = Math.floor(interval)
		return time + ` ${time > 1 ? 'minutes' : 'minute'} ago`
	}

	const time = Math.floor(seconds)
	return time + ` ${time > 1 ? 'seconds' : 'second'} ago`
}
