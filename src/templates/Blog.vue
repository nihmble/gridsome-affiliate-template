<page-query>
  query Blog($id: ID!, $page: Int) {
    data: blog(id: $id) {
      title
      content_section { code }
    }

    post: allPost(perPage: 6, page: $page, order: DESC, sortBy: "published_date") @paginate  {
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
    <div class="container max-w-full">
      <h1>Foo! {{ $page.data.title }}</h1>
      {{ $page.data.content }}
      <div v-html="$page.data.content_section.code" />

      <ul>
        <li v-for="edge in $page.post.edges" :key="edge.node.id">
          <article>
            <a :href="edge.node.path">{{ edge.node.title }}</a>
            <div v-html="edge.node.excerpt" />
          </article>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style></style>
