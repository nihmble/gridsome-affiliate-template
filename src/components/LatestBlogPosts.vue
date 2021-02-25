<static-query>
  query {
    posts: allPost(perPage: 5, order: DESC, sort: [{ by: "published_date" }]) @paginate  {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          title
          excerpt
          path
          published_date
          featured_image(width:800)
          thumbnail
        }
      }
    }
  }
</static-query>

<template>
  <section class="w-full mt-4 sm:mt-12" v-if="$static.posts.edges">
    <div class="max-w-6xl mx-auto flow-root">
      <ul id="latest-blog-posts">
        <li v-for="(edge, index) in $static.posts.edges" :key="edge.node.id" :class="`post-${index} mx-4 my-2 sm:m-0 sm:p-0 float-left`">
          <article>
            <header>
              <h2 class="post-title-bar text-xl sm:text-5xl font-semibold">
                <a :href="edge.node.path" class="block h-full">
                  {{ edge.node.title }}
                </a>
              </h2>
              <h4 v-if="index === 0" class="post-subtitle-bar text-lg">
                {{ prettyDate(edge.node.published_date) }}
              </h4>
            </header>

            <a :href="edge.node.path">
              <g-image v-if="edge.node.thumbnail" :src="edge.node.thumbnail.replace('/static', '')" :alt="`Featured image for ${edge.node.title}`" />
            </a>

            <div v-if="index === 0">
              <div v-html="edge.node.excerpt" class="post-excerpt text-lg sm:text-md p-4 sm:px-4 sm:py-6" />

              <div class="post-footer bg-gray-200 p-4 border-t-2 border-gray-400 flex">
                <a
                  :href="edge.node.path"
                  class="inline-block mx-auto sm:mr-0 py-2 px-4 bg-gray-500 hover:bg-gray-400 border-b-4 border-gray-700 hover:border-gray-500 rounded flex-end"
                >
                  <span class="text-xl font-bold text-white">
                    Read more...
                  </span>
                </a>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
// Packages
import dayjs from 'dayjs'

export default {
  name: 'LatestBlogPost',

  methods: {
    prettyDate(date) {
      return dayjs(date).format('MMMM DD, YYYY')
    }
  }
}
</script>

<style lang="less">
#latest-blog-posts {
  .post-0 {
    border: solid 1px #999;

    .post-title-bar {
      background-color: #777;
      border-bottom: solid 4px #555;
      color: #fff;
      padding: 0.25rem 1rem;

      a {
        display: block;
        height: 100%;
      }
    }

    .post-subtitle-bar {
      background-color: #666;
      color: #fff;
      padding: 0.25rem 1rem;
    }
  }

  .post-1,
  .post-2,
  .post-3,
  .post-4 {
    .post-title-bar {
      background-color: #333;
      color: #fff;
      padding: 0.5rem;
      font-size: 1.1rem;
      font-weight: normal;

      a {
        display: block;
        height: 100%;
      }
    }
  }
}

@media (min-width: 640px) {
  #latest-blog-posts {
    .post-0 {
      max-width: 72%;
      margin-right: 2rem;
    }

    .post-1,
    .post-2,
    .post-3,
    .post-4 {
      max-width: 25%;
      padding-bottom: 0.75rem;

      .post-title-bar {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
}
</style>
