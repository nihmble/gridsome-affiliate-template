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

    <section id="content_section1" class="max-w-7xl bg-gray-400 mt-4 sm:mt-12" v-if="$page.data.content_section1" v-html="$page.data.content_section1.code" />

    <!-- <section class="max-w-7xl bg-red-400 mt-4 sm:mt-12">
      <div class="max-w-6xl mx-auto content-center pt-8 pb-12 px-4 text-center">
        <h4 class="text-base text-4xl mb-4 leading-10">
          Should you be using Twitter? Facebook? Pinterest?
        </h4>
        <p class="text-xl">
          Social media doesn’t have to be confusing. Let FoodTruckr show you how. Sign up to receive the FoodTruckr Bulletin and we’ll throw in our free guide:
          <span class="font-bold">6 Free Social Media Tools to Get People Talking About Your Food Truck.</span>
        </p>

        <form
          action="https://app.convertkit.com/forms/1784850/subscriptions"
          class="seva-form formkit-form"
          method="post"
          data-sv-form="1784850"
          data-uid="438969d748"
          data-format="inline"
          data-version="5"
          data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
          min-width="400 500 600 700 800"
        >
          <div data-style="clean">
            <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields mt-8">
              <input
                class="formkit-input inline-block py-2 px-4 w-7/12 sm:w-4/12 rounded-l focus:outline-none -mr-1"
                name="email_address"
                aria-label="Your email address"
                placeholder="Your email address"
                required=""
                type="email"
              />
              <button
                data-element="submit"
                class="formkit-submit formkit-submit inline-block bg-green-500 hover:bg-green-400 border-b-2 border-green-700 hover:border-green-500 py-1 px-4 rounded-r focus:outline-none"
              >
                <span class="text-xl font-bold uppercase text-white focus:outline-none">Subscribe</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section> -->

    <section id="content_section2" class="max-w-7xl mt-4 sm:mt-12" v-if="$page.data.content_section2" v-html="$page.data.content_section2.code" />

    <!-- <section class="max-w-7xl mt-4 sm:mt-12">
      <div class="max-w-6xl mx-auto pt-8 pb-12 px-4 flex flex-wrap">
        <div class="w-full sm:w-1/2 p-4 bg-white border border-gray-600 text-base text-lg">
          <h1 class="text-base text-4xl mb-4">
            This should be interesting.
          </h1>
          <p class="mb-4">
            This should be interesting. Damage report! What? We're not at all alike! Fate protects fools, little children and ships named Enterprise. Computer,
            lights up! Well, that's certainly good to know.
          </p>
          <p class="mb-4">
            The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen
            kiloquad interface modules. Did you come here for something in particular or just general Riker-bashing?
          </p>
          <p class="mb-4">
            We know you're dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. I can't. As much as I care about you, my
            first duty is to the ship. Congratulations - you just destroyed the Enterprise. Now we know what they mean by 'advanced' tactical training. You did
            exactly what you had to do.
          </p>
          <p>
            Now, how the hell do we defeat an enemy that knows us better than we know ourselves?
          </p>
        </div>
        <div class="w-full sm:w-1/2 py-4 px-4 sm:pl-8">
          <p class="mb-4">
            We know you're dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. I can't. As much as I care about you, my
            first duty is to the ship. Congratulations - you just destroyed the Enterprise. Now we know what they mean by 'advanced' tactical training. You did
            exactly what you had to do.
          </p>
        </div>
      </div>
    </section> -->

    <section id="content_section3" class="max-w-7xl bg-yellow-400 mt-4 sm:mt-12" v-if="$page.data.content_section3" v-html="$page.data.content_section3.code" />
    <section id="content_section4" class="max-w-7xl bg-green-400 mt-4 sm:mt-12" v-if="$page.data.content_section4" v-html="$page.data.content_section4.code" />
    <section id="content_section5" class="max-w-7xl bg-teal-400 mt-4 sm:mt-12" v-if="$page.data.content_section5" v-html="$page.data.content_section5.code" />
  </Layout>
</template>

<script src="https://f.convertkit.com/ckjs/ck.5.js" />
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
