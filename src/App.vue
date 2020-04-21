<template lang="pug">
    main.app(:class="$mq")
      router-view
      utils
</template>

<script>
	import { Vue, Component } from 'vue-property-decorator'
	import config from '@root/hydre.toml'

	@Component({
		components: {
			utils: () => import('@cmp/utils/index.vue')
		},

		metas() {
			const configLang = config[this.$i18n.locale]

			const og = [
				{ property: 'og:description', content: configLang.description },
				{ property: 'og:image', content: config.ogImage }
			]

			const tw = [
				{ property: 'twitter:description', content: configLang.description },
				{ property: 'twitter:image', content: config.ogImage }
			]

			config.og.forEach(meta => og.push(meta))
			config.tw.forEach(meta => tw.push(meta))

			return {
				title: configLang.title,
				titleTemplate: eval(configLang.titleTemplate),
				meta: [
					{ name: 'description', content: configLang.description },
					{ property: 'og:title', content: configLang.ogTitle, template: eval(configLang.ogTemplate) },
					{ name: 'msapplication-TileColor', content: config.tileColor },
					{ name: 'theme-color', content: config.themeColor },
					...og,
					...tw
				],
				link: [
					{ rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Barlow:300,500,700,900' },
					{ rel: 'apple-touch-icon', sizes: config.touchIconSize, href: `${process.env.BASE_URL}img/icons/apple-touch-icon.png` },
					{ rel: 'mask-icon', href: `${process.env.BASE_URL}img/icons/safari-pinned-tab.svg`, color: config.maskIconColor }
				],
			}
		}
	})
	export default class App extends Vue {
	}
</script>

<style lang="stylus">
@require '~@stl/utils'

</style>
