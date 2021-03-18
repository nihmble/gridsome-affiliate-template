<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<template>
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="relative bg-white w-full border-b-2 border-gray-200">
    <div class="flex justify-between items-center px-2 py-6 md:justify-start md:space-x-10 max-w-6xl mx-auto">
      <a href="/" class="flex" :title="$static.metadata.siteDescription">
        <img class="h-12 w-auto sm:h-10" src="/uploads/logo.svg" alt="Workflow" />
      </a>

      <div class="-mr-2 -my-2 md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          @click="toggleMobileMenu = !toggleMobileMenu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:space-x-12 justify-end">
        <nav class="flex space-x-10">
          <a
            href="/"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Home
          </a>

          <a
            href="/about"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            About
          </a>

          <a
            href="/blog"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Blog
          </a>

          <!-- <a
            href="/contact"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Contact
          </a> -->

          <a
            href="/resources"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Resources
          </a>
        </nav>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <!-- Mobile menu, show/hide based on menu state -->
      <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" v-show="toggleMobileMenu">
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="/uploads/logo.svg" alt="Workflow" />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    @click="toggleMobileMenu = !toggleMobileMenu"
                  >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav class="grid gap-6">
                  <a href="/" class="font-medium text-gray-900 -m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      Home
                  </a>
                  <a href="/about" class="font-medium text-gray-900 -m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      About
                  </a>
                  <a href="/blog" class="font-medium text-gray-900 -m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      Blog
                  </a>
                  <!-- <a href="/contact" class="font-medium text-gray-900 -m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      Contact
                  </a> -->
                  <a href="/resources" class="font-medium text-gray-900 -m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      Resources
                  </a>
                </nav>
              </div>
            </div>
            <!-- <div class="py-6 px-5 space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                  Pricing
                </a>
                <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                  Docs
                </a>
                <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                  Enterprise
                </a>
                <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                  Blog
                </a>
                <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                  Help Center
                </a>
                <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                  Guides
                </a>
                <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                  Security
                </a>
                <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                  Events
                </a>
              </div>
              <div class="space-y-6">
                <span class="w-full flex rounded-md shadow-sm">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    Sign up
                  </a>
                </span>
                <p class="text-center text-base leading-6 font-medium text-gray-500">
                  Existing customer?
                  <a href="#" class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                    Sign in
                  </a>
                </p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      toggleMenuOne: false,
      toggleMenuTwo: false,
      toggleMobileMenu: false,
      hoverTimeout: 250
    }
  }
}
</script>

<style></style>
