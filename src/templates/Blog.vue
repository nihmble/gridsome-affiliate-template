<page-query>
  query Blog($id: ID!, $page: Int) {
    data: blog(id: $id) {
      title
      html { code }
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
    <section class="w-full py-4 mt-4 sm:mt-12">
      <div class="max-w-6xl mx-auto flex flex-wrap">
        <!-- <div class="w-full sm:w-3/4 sm:pr-8"> -->
        <div class="w-full sm:w-3/4 sm:px-0 m-auto px-4">
          <ul id="blog-posts">
            <li v-for="edge in $page.posts.edges" :key="edge.node.id" class="mb-12">
              <article>
                <header>
                  <a :href="edge.node.path">
                    <g-image v-if="edge.node.featured_image" :src="edge.node.featured_image.replace('/static', '')" :alt="`Featured image for ${edge.node.title}`" />
                  </a>

                  <h1 class="post-title-bar text-xl sm:text-2xl font-semibold mt-4 px-4 sm:px-0 hover:text-gray-600">
                    <a :href="edge.node.path" class="block h-full">
                      {{ edge.node.title }}
                    </a>
                  </h1>
                  <h4 class="post-subtitle-bar text-md px-4 sm:px-0">
                    {{ edge.node.published_date | prettyDate }}
                  </h4>
                </header>

                <div v-html="edge.node.excerpt" class="post-excerpt text-lg sm:text-md p-4 sm:px-0 sm:py-6" />

                <footer>
                  <a :href="edge.node.path" class="inline-block mx-auto sm:mr-0 py-2 px-4 sm:px-0">
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
        <!-- <div class="w-full sm:w-1/4 pr-8 bg-gray-400"></div> -->
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

// .pagination {
//   margin-top: 1rem;
//   margin-bottom: 1rem;

//   a {
//     color: #4B5563;
//     width: 3rem;
//     text-align: center;
//     margin-left: 0.5rem;
//     margin-right: 0.5rem;
//     height: 3rem;
//     font-weight: 600;
//     justify-content: center;
//     align-items: center;
//     display: inline-flex;
//     border-width: 1px;
//     border-radius: 9999px;
//     --tw-border-opacity: 1;
//     border-color: rgba(156, 163, 175, var(--tw-border-opacity));

//     &.active {
//       --tw-bg-opacity: 1;
//       background-color: rgba(75, 85, 99, var(--tw-bg-opacity));
//       color: white;
//     }

//     &:hover {
//       color: #4B5563;
//       --tw-bg-opacity: 1;
//       background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
//     }
//   }
// }

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
