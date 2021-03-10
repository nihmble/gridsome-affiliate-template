// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Adding Tailwind CSS manually since the plugin stopped working
// Source: https://gridsome.org/docs/assets-css/#tailwind
// Plugin: https://gridsome.org/plugins/gridsome-plugin-tailwindcss - Broken: 03/09/2021
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Nihmble Affiliate Template',
  siteDescription: "You're going to be an interesting companion, Mr. Data.",

  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },

  plugins: [
    /**
     * Pages and Posts
     */
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_content/home/index.md',
        typeName: 'Home'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_content/contact/*.md',
        typeName: 'Contact'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_content/blog/*.md',
        typeName: 'Blog'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_content/blog/posts/**/**/*.md',
        typeName: 'Post'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_content/pages/*.md',
        typeName: 'Pages'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_content/pages/**/*.md',
        typeName: 'SubPages'
      }
    },

    /**
     * Plugins
     */
    // {
    //   use: 'gridsome-plugin-tailwindcss'
    //   /**
    //   * These are the default options. You don't need to set any options to get
    //   * going. Seriously, you don't need to declare tailwind.config.js.

    //   options: {
    //     tailwindConfig: './tailwind.config.js',
    //     presetEnvConfig: {},
    //     shouldImport: true,
    //     shouldTimeTravel: true
    //   }
    //   */
    // },
    {
      use: 'gridsome-plugin-typescript'
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
      // plugins: [
      //   // ...global plugins
      //   'remark-html'
      // ]
    }
  },

  templates: {
    Home: '/',
    Blog: '/blog',
    Post: '/post/:title',
    Pages: '/:title',
    SubPages: '/:parent/:title',
    Contact: '/contact'
  }
}
