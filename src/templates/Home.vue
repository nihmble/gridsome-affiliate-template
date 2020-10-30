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

    <LatestBlogPosts />

    <div id="content_section1" v-if="$page.data.content_section1" v-html="$page.data.content_section1.code" />
    <div id="content_section2" v-if="$page.data.content_section2" v-html="$page.data.content_section2.code" />
    <div id="content_section3" v-if="$page.data.content_section3" v-html="$page.data.content_section3.code" />
    <div id="content_section4" v-if="$page.data.content_section4" v-html="$page.data.content_section4.code" />
    <div id="content_section5" v-if="$page.data.content_section5" v-html="$page.data.content_section5.code" />
  </Layout>
</template>

<script>
// Packages
import dayjs from 'dayjs'

// Components
import LatestBlogPosts from '@/components/LatestBlogPosts'

export default {
  components: {
    LatestBlogPosts
  }
}
</script>

<style lang="less"></style>
