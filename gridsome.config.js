// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Nihmble Affiliate Template',
  siteDescription: "You're going to be an interesting companion, Mr. Data.",
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
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
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_content/contact/*.md',
        typeName: 'Contact'
      }
    },

    /**
     * Plugins
     */
    {
      use: 'gridsome-plugin-tailwindcss'
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use: 'gridsome-plugin-typescript'
    }
  ],

  templates: {
    Home: '/',
    Blog: '/blog',
    Post: '/post/:title',
    Pages: '/:title',
    SubPages: '/:parent/:title',
    Contact: '/contact'
  }
}
