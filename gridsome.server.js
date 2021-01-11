// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type Code {
        id: ID!
        code: String
      }

      type Category {
        id: ID!
        category: String
      }

      type Tags {
        id: ID!
        tags: String
      }

      type Home implements Node {
        id: ID!
        title: String
        getting_started: Code
        hero_image: Image
        hero_text: Code
        content_section1: Code
        content_section2: Code
        content_section3: Code
        content_section4: Code
        content_section5: Code
      }

      type Blog implements Node {
        id: ID!
        title: String
        hero_image: Image
        content_section: Code
      }

      type Post implements Node {
        id: ID!
        title: String
        slug: String
        created_date: Date
        published_date: Date
        category: [Category]!
        tags: [Tags]!
        featured_image: Image
        image_caption: String
        excerpt: String
        content_section: Code
      }

      type Pages implements Node {
        id: ID!
        title: String
        parent: String
        slug: String
        hero_image: Image
        content_section: Code
      }

      type SubPages implements Node {
        id: ID!
        title: String
        parent: String
        slug: String
        hero_image: Image
        content_section: Code
      }

      type Contact implements Node {
        id: ID!
        title: String
        hero_image: Image
        content_section: Code
      }
    `)
  })
}
