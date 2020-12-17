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
    <section class="w-full py-4 mt-4">
      <div class="max-w-6xl mx-auto">
        <div class="border border-gray-400">
          <div class="bg-gray-600 px-4 py-2 text-center">
            <h1 class="text-white text-4xl font-semibold">
              {{ $page.data.title }}
            </h1>
          </div>

          <section class="bg-white px-4 py-6 max-w-4xl mx-auto" v-html="$page.data.content_section ? $page.data.content_section.code : ''" />

          <!-- <section class="bg-gray-400 mt-4">
            <div class="max-w-4xl mx-auto content-center pt-8 pb-12 px-4 text-center">
              <h4 class="text-base text-4xl mb-4 leading-10">
                Should you be using Twitter? Facebook? Pinterest?
              </h4>
              <p class="text-xl">
                Social media doesn’t have to be confusing. Let FoodTruckr show you how. Sign up to receive the FoodTruckr Bulletin and we’ll throw in our free
                guide:
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
                      class="formkit-input inline-block py-2 px-4 w-7/12 rounded-l focus:outline-none -mr-1"
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
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {}
</script>

<style></style>
