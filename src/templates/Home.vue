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
    <div v-html="$page.data.getting_started ? $page.data.getting_started.code : ''" />
    <img :src="$page.data.hero_image" alt="" />
    <div v-html="$page.data.hero_text ? $page.data.hero_text.code : ''" />
    <div v-html="$page.data.content_section1 ? $page.data.content_section1.code : ''" />
    <div v-html="$page.data.content_section2 ? $page.data.content_section2.code : ''" />
    <div v-html="$page.data.content_section3 ? $page.data.content_section3.code : ''" />
    <div v-html="$page.data.content_section4 ? $page.data.content_section4.code : ''" />
    <div v-html="$page.data.content_section5 ? $page.data.content_section5.code : ''" />
  </Layout>
</template>

<script>
export default {}
</script>

<style></style>
