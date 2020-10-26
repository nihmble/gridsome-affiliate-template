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
          featured_image(width:800)
        }
      }
    }
  }
</page-query>

<template>
  <Layout>
    <div id="getting_started" v-html="$page.data.getting_started ? $page.data.getting_started.code : ''" />

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

    <ul id="latest_5_blog_posts">
      <li v-for="(edge, index) in $page.post.edges" :key="edge.node.id">
        <article :class="`post-${index}`">
          
          <a :href="edge.node.path">{{ edge.node.title }}</a>
          <a :href="edge.node.path">
            <img v-if="edge.node.featured_image" :src="edge.node.featured_image" :alt="`Featured image for ${edge.node.title}`" />
          </a>
          <div v-html="edge.node.excerpt" />
        </article>
      </li>
    </ul>

    <div id="content_section1" v-html="$page.data.content_section1 ? $page.data.content_section1.code : ''" />
    <div id="content_section2" v-html="$page.data.content_section2 ? $page.data.content_section2.code : ''" />
    <div id="content_section3" v-html="$page.data.content_section3 ? $page.data.content_section3.code : ''" />
    <div id="content_section4" v-html="$page.data.content_section4 ? $page.data.content_section4.code : ''" />
    <div id="content_section5" v-html="$page.data.content_section5 ? $page.data.content_section5.code : ''" />
  </Layout>
</template>

<script>
export default {}
</script>

<style lang="less">
#latest_5_blog_posts {
  .post-0 {
  }

  .post-1 {
  }
}
</style>
