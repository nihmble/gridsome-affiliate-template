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
    <section class="max-w-7xl py-4 mt-4 bg-gray-400">
      <div class="max-w-6xl mx-auto">
        {{ $page.data.title }}
        <div v-html="$page.data.content_section ? $page.data.content_section.code : ''" />
      </div>
    </section>
  </Layout>
</template>

<script>
export default {}
</script>

<style></style>
