<page-query>
  query Home($id: ID!) {
    data: home(id: $id) {
      hero_image
      hero_text { code }
      section1 { code }
    }
  }
</page-query>

<template>
  <Layout>
    <img :src="$page.data.hero_image" alt="">
    <div v-html="$page.data.hero_text.code" />
    <div v-html="$page.data.section1.code" />
  </Layout>
</template>

<script>
export default {}
</script>

<style></style>
