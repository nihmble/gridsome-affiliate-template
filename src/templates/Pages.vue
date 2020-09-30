<page-query>
  query Pages($id: ID!) {
    data: pages(id: $id) {
      title
      content_section { code }
    }
  }
</page-query>

<template>
  <Layout>
    <div class="container max-w-full">
      {{ $page.data.title }}
      <div v-html="$page.data.content_section.code" />
    </div>
  </Layout>
</template>

<script>
export default {

}
</script>

<style>

</style>