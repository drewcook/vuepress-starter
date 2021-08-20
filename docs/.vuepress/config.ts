import type { DefaultThemeOptions } from 'vuepress'
import { defineUserConfig } from 'vuepress'

const config: DefaultThemeOptions = defineUserConfig({
	lang: 'en-US',
	title: 'VuePress Playground',
	description: 'A playground for learning VuePress v2',

	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png',
	},
})

export default config
