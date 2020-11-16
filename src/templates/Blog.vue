<page-query>
  query Blog($id: ID!, $page: Int) {
    data: blog(id: $id) {
      title
      content_section { code }
    }

    posts: allPost(perPage: 6, page: $page, order: DESC, sortBy: "published_date") @paginate  {
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
          category { category }
          featured_image(width:800)
          image_caption
        }
      }
    }
  }
</page-query>

<template>
  <Layout>
    <section class="max-w-7xl mt-4 sm:mt-12">
      <div class="max-w-6xl mx-auto flex flex-wrap">
        <div class="w-full sm:w-3/4 sm:pr-8">
          <ul id="blog-posts">
            <li v-for="edge in $page.posts.edges" :key="edge.node.id" class="mb-12">
              <article>
                <header>
                  <a :href="edge.node.path">
                    <g-image v-if="edge.node.featured_image" :src="`/uploads/${edge.node.featured_image}`" :alt="`Featured image for ${edge.node.title}`" />
                  </a>

                  <h1 class="post-title-bar text-xl sm:text-2xl font-semibold mt-4 px-4">
                    <a :href="edge.node.path" class="block h-full">
                      {{ edge.node.title }}
                    </a>
                  </h1>
                  <h4 class="post-subtitle-bar text-md px-4">
                    {{ edge.node.published_date | prettyDate }}
                  </h4>
                </header>

                <div v-html="edge.node.excerpt" class="post-excerpt text-lg sm:text-md p-4 sm:px-4 sm:py-6" />

                <footer>
                  <a
                    :href="edge.node.path"
                    class="inline-block mx-auto sm:mr-0 py-2 px-4"
                  >
                    <span class="text-md font-bold uppercase">
                      Read more...
                    </span>
                  </a>
                </footer>
              </article>
            </li>
          </ul>

          <Pager class="pagination" :info="$page.posts.pageInfo" />
        </div>
        <div class="w-full sm:w-1/4 pr-8 bg-gray-400">asdf</div>
      </div>
    </section>
  </Layout>
</template>

<script>
// Gridsome
import { Pager } from 'gridsome'

// Packages
import dayjs from 'dayjs'

export default {
  name: 'Blog',

  components: {
    Pager
  }
}
</script>

<style lang="less">
.pagination {
  @apply my-4;

  a {
    @apply mx-2 w-12 h-12 text-center items-center justify-center border border-gray-400 inline-block rounded-full font-semibold inline-flex;

    &.active {
      @apply bg-gray-600 text-white;
    }

    &:hover {
      @apply bg-gray-200;
    }
  }
}

// #blog-posts {
//   li {
//     border: solid 1px #999;

//     .post-title-bar {
//       background-color: #777;
//       border-bottom: solid 4px #555;
//       color: #fff;
//       padding: 0.25rem 1rem;

//       a {
//         display: block;
//         height: 100%;
//       }
//     }

//     .post-subtitle-bar {
//       background-color: #666;
//       color: #fff;
//       padding: 0.25rem 1rem;
//     }
//   }
// }

// @media (min-width: 640px) {
//   #blog-posts {
//     li {
//       max-width: 72%;
//       margin-right: 2rem;
//     }
//   }
// }
</style>
