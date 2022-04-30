import type { Navigation, Config } from 'storybook21'

const navigation: Array<Navigation> = [
    {
        link: '/',
        title: 'Main page',
        mdx: './index.mdx',
        hidden: true
    },
    {
        link: '/components',
        title: 'Компоненты',
        mdx: './components.mdx',
        showMenu: true,
        children: [
            {
                link: 'demo-button',
                title: 'Demo button'
            }
        ]
    },
    {
        link: '/preview',
        title: 'Preview',
        mdx: './preview.mdx'
    },
]

const config: Config = {
    /** document.title */
    title: '🌈 Your nice title 🌈',

    /** You may to include css file or link to css resource */
    globalStyle: '',

    /** Directory where storybook will find you components */
    componentsDir: './src',

    /** Theme provider */
    themeProvider: '',

    /** Entry point in your app. Use in webpack */
    entry: '',

    /** Demo file for provide to demo custom utils.
     * 
     * ℹ️ Use only default export
    */
    playground: './playground/index.tsx',

    /** Array of polyfills which include for demo page */
    polyfills: [],

    /** */ //TODO
    theme: '',

    /** */
    output: 'target/temp',

    /** Context for provide mdx navigation */
    storybookContext: './storybook',

    /** Array of navigation config for demo pages */
    navigation,

    /** Custom webpack config which merge with webpack.config in storybook */
    webpackConfig: {}
}

export default config
