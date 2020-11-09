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
    <!-- <div class="container max-w-full">
      <h1>Foo! {{ $page.data.title }}</h1>
      {{ $page.data.content }}
      <div v-html="$page.data.content_section ? $page.data.content_section.code : ''" />

      <ul>
        <li v-for="edge in $page.post.edges" :key="edge.node.id">
          <article>
            <a :href="edge.node.path">{{ edge.node.title }}</a>
            <div v-html="edge.node.excerpt" />
          </article>
        </li>
      </ul>
    </div> -->
    <section class="max-w-7xl mt-4 sm:mt-12">
      <div class="max-w-6xl mx-auto clearfix">
        <!-- <h1>{{ $page.data.title }}</h1>
        {{ $page.data.content }}
        <div v-html="$page.data.content_section ? $page.data.content_section.code : ''" /> -->

        <ul id="blog-posts">
          <li v-for="edge in $page.posts.edges" :key="edge.node.id" class="mb-8">
            <article>
              <header>
                <h2 class="post-title-bar text-xl sm:text-5xl font-semibold">
                  <a :href="edge.node.path" class="block h-full">
                    {{ edge.node.title }}
                  </a>
                </h2>
                <h4 class="post-subtitle-bar text-lg">
                  {{ edge.node.published_date | prettyDate }}
                </h4>
              </header>

              <a :href="edge.node.path">
                <g-image v-if="edge.node.featured_image" :src="`/uploads/${edge.node.featured_image}`" :alt="`Featured image for ${edge.node.title}`" />
              </a>

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
            </article>
          </li>
        </ul>

        <!-- totalCount: {{ $page.totalCount }}<br />
        pageInfo: {{ $page.pageInfo }}<br /> -->
        <!-- totalPages: {{ $page.pageInfo.totalPages }}<br /> -->
        <!-- currentPage: {{ $page.pageInfo.currentPage }} -->

        <Pager class="pagination" :info="$page.posts.pageInfo" />
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

#blog-posts {
  li {
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
}

@media (min-width: 640px) {
  #blog-posts {
    li {
      max-width: 72%;
      margin-right: 2rem;
    }
  }
}
</style>
