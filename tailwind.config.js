module.exports = {
	important: true,
	purge: {
		// Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'../common/components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js'
		]
	},
	variants: {},
	plugins: []
}