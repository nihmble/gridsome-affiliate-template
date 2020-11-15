<page-query>
  query Post($id: ID!) {
    post(id: $id) {
      title
      published_date
      category { category }
      featured_image(width:800)
      image_caption
      content_section { code }
    }
  }
</page-query>

<template>
  <Layout>
    <div class="max-w-7xl mt-4 sm:mt-12">
      <div class="max-w-6xl mx-auto flex">
        <article class="w-full sm:w-3/4 sm:pr-8">
          <header>
            <h1 class="post-title-bar text-xl sm:text-4xl font-semibold">
              {{ $page.post.title }}
            </h1>
            <h4 class="post-subtitle-bar text-lg">
              {{ $page.post.published_date | prettyDate }}
            </h4>
          </header>

          <g-image v-if="$page.post.featured_image" :src="`/uploads/${$page.post.featured_image}`" :alt="`Featured image for ${$page.post.title}`" />

          <div v-html="$page.post.content_section ? $page.post.content_section.code : ''" />
        </article>
        <div class="w-full h-full sm:w-1/4 bg-gray-200">
          <p class="mb-4">
            And blowing into maximum warp speed, you appeared for an instant to be in two places at once. Shields up! Rrrrred alert! Your shields were failing,
            sir. Some days you get the bear, and some days the bear gets you.
          </p>
          <p class="mb-4">
            Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Commander William Riker of
            the Starship Enterprise. Our neural pathways have become accustomed to your sensory input patterns.
          </p>
          <p class="mb-4">
            This should be interesting. This is not about revenge. This is about justice. Ensign Babyface! Damage report! When has justice ever been as simple
            as a rule book?
          </p>
          <p class="mb-4">
            You enjoyed that. Mr. Crusher, ready a collision course with the Borg ship. You did exactly what you had to do. You considered all your options, you
            tried every alternative and then you made the hard choice. The Enterprise computer system is controlled by three primary main processor cores,
            cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules.
          </p>
          <p class="mb-4">Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation.</p>
          <p class="mb-4">
            I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not
            break my oath of loyalty to Starfleet. The unexpected is our normal routine. Sure. You'd be surprised how far a hug goes with Geordi, or Worf. I
            recommend you don't fire until you're within 40,000 kilometers. Wait a minute - you've been declared dead. You can't give orders around here.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style></style>
