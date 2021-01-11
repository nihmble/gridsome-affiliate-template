<page-query>
  query Contact($id: ID!) {
    data: contact(id: $id) {
      title
      content_section { code }
    }
  }
</page-query>

<template>
  <Layout>
    <section class="w-full py-4 mt-4">
      <div class="max-w-6xl mx-auto">
        <div class="border border-gray-400">
          <div class="bg-gray-600 px-4 py-2 text-center">
            <h1 class="text-white text-4xl font-semibold">
              {{ $page.data.title }}
            </h1>
          </div>

          <section class="bg-white px-4 py-6 max-w-4xl mx-auto" v-html="$page.data.content_section ? $page.data.content_section.code : ''" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {}
</script>

<style></style>
