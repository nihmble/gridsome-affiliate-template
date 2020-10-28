<page-query>
  query Home($id: ID!) {
    data: home(id: $id) {
      getting_started { code }
      hero_image
      hero_text { code }
      content_section1 { code }
      content_section2 { code }
      content_section3 { code }
      content_section4 { code }
      content_section5 { code }
    }

    post: allPost(perPage: 5, order: DESC, sortBy: "published_date") @paginate  {
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
        }
      }
    }
  }
</page-query>

<template>
  <Layout>
    <div id="getting-started" v-html="$page.data.getting_started ? $page.data.getting_started.code : ''" />

    <!-- <section class="max-w-7xl py-4 bg-gray-400">
      <div class="max-w-6xl mx-auto">
        <div class="flex">
          <div class="md:w-2/3 md:pr-2 text-center md:text-left">
            <h1 class="text-base uppercase leading-none font-semibold text-4xl lg:text-5xl">
              Turn your daily {Industry} into cold hard cash!
            </h1>
            <h4 class="mt-2 text-base text-2xl lg:text-3xl">
              Learn what it takes to start and run a successful {BusinessType} from day one!
            </h4>

            <a href="/" class="inline-block mx-auto mt-8 py-4 px-6 bg-green-500 hover:bg-green-400 border-b-4 border-green-700 hover:border-green-500 rounded">
              <span class="text-2xl font-bold uppercase text-white">Get started today</span>
            </a>
          </div>
          <div class="md:w-1/3 bg-gray-800 hidden md:block"></div>
        </div>
      </div>
    </section> -->

    <!-- <img id="hero_image" :src="$page.data.hero_image" alt="" />
    <div id="hero_text" v-html="$page.data.hero_text ? $page.data.hero_text.code : ''" /> -->

    <section class="max-w-7xl" v-if="$page.post.edges">
      <div class="max-w-6xl mx-auto">
        <ul id="latest-blog-posts" class="flex flex-col flex-wrap">
          <li v-for="(edge, index) in $page.post.edges" :key="edge.node.id" :class="`post-${index} p-4 sm:p-0`">
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
                <img v-if="edge.node.featured_image" :src="`/uploads/${edge.node.featured_image}`" :alt="`Featured image for ${edge.node.title}`" />
              </a>

              <div v-if="index === 0">
                <div v-html="edge.node.excerpt" class="post-excerpt text-lg sm:text-md" />

                <div class="post-footer">
                  <a
                    :href="edge.node.path"
                    class="inline-block mx-auto sm:mr-0 py-2 px-4 bg-gray-500 hover:bg-gray-400 border-b-4 border-gray-700 hover:border-gray-500 rounded"
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

    <div id="content_section1" v-if="$page.data.content_section1" v-html="$page.data.content_section1.code" />
    <div id="content_section2" v-if="$page.data.content_section2" v-html="$page.data.content_section2.code" />
    <div id="content_section3" v-if="$page.data.content_section3" v-html="$page.data.content_section3.code" />
    <div id="content_section4" v-if="$page.data.content_section4" v-html="$page.data.content_section4.code" />
    <div id="content_section5" v-if="$page.data.content_section5" v-html="$page.data.content_section5.code" />
  </Layout>
</template>

<script>
import dayjs from 'dayjs'

export default {
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

    .post-excerpt {
      padding: 1rem 0;
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
    height: 850px;

    .post-0 {
      border: solid 1px #999;
      width: 72%;
      height: 800px;
      margin-right: 2rem;

      .post-excerpt {
        padding: 1rem;
      }
    }

    .post-1,
    .post-2,
    .post-3,
    .post-4 {
      width: 25%;
      padding-bottom: 0.75rem;

      .post-title-bar {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
}
</style>
