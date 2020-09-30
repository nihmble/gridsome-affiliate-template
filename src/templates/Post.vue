<page-query>
  query post($id: ID!) {
    data: post(id: $id) {
      title
      content_section { code }
    }
  }
</page-query>

<template>
  <Layout>
    <div class="container max-w-full">
      {{ $page.data.title }}
      <br />
      <article v-html="$page.data.content_section.code" />
    </div>
  </Layout>
</template>

<script>
export default {

}
</script>

<style>

</style>