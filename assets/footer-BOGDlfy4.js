(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();function i(){const t=document.createElement("header");t.className="bg-gray-200",t.innerHTML=`
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="./" class="-m-1.5 p-1.5">
          <span class="sr-only">Aurora Capital Management</span>
          <img class="h-8 w-auto" src="./images/Alogo.png" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" id="mobile-menu-button">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="./"class="text-sm font-semibold leading-6 text-gray-900">ABOUT</a>
        <a href="./strategy" class="text-sm font-semibold leading-6 text-gray-900">STRATEGY</a>
        <a href="./portfolio" class="text-sm font-semibold leading-6 text-gray-900">PORTFOLIO</a>
        <a href="./contacts" class="text-sm font-semibold leading-6 text-gray-900">CONTACT</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="hidden lg:hidden" id="mobile-menu" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="./images/Alogo.png" alt="">
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" id="close-menu-button">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="./" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
              <a href="./strategy" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Strategy</a>
              <a href="./portfolio" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Portfolio</a>
              <a href="./contacts" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  `;const s=t.querySelector("#mobile-menu-button"),l=t.querySelector("#mobile-menu"),o=t.querySelector("#close-menu-button");return s.addEventListener("click",()=>{l.classList.remove("hidden")}),o.addEventListener("click",()=>{l.classList.add("hidden")}),t}function n(){const t=document.createElement("footer");return t.className="bg-gray-100 text-gray-800",t.innerHTML=`
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
      <!-- Footer Content Wrapper -->
      <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        
        <!-- Logo Section -->
        <div class="flex-shrink-0 mb-6 lg:mb-0">
          <img src="./images/AlogoN.png" alt="Aurora Capital Logo" class="w-32 h-32 object-contain mx-auto lg:mx-0" />
        </div>

        <!-- Links Section -->
        <div class="flex flex-col lg:flex-row lg:gap-16 text-center lg:text-left">
          <div class="mb-6 lg:mb-0">
            <h3 class="text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-2">
              <li><a href="./main" class="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="./team" class="text-gray-600 hover:text-gray-800">Team</a></li>
              <li><a href="./contacts" class="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div class="mb-6 lg:mb-0">
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2">
              <li><a href="./strategy" class="text-gray-600 hover:text-gray-800">Strategy</a></li>
              <li><a href="./portfolio" class="text-gray-600 hover:text-gray-800">Portfolio</a></li>
            </ul>
          </div>
          <div class="mb-6 lg:mb-0">
            <h3 class="text-lg font-semibold mb-4">Support</h3>
            <ul class="space-y-2">
              <li><a href="/faq" class="text-gray-600 hover:text-gray-800">FAQ</a></li>
              <li><a href="/terms" class="text-gray-600 hover:text-gray-800">Terms of Service</a></li>
              <li><a href="/privacy" class="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Social Media Links (optional) -->
        <div class="flex gap-4 mt-6 lg:mt-0">
        </div>
      </div>
      
      <!-- Footer Bottom Text -->
      <div class="mt-8 border-t border-gray-300 pt-6 text-center">
        <p class="text-sm text-gray-500">&copy; 2024 Aurora Capital Management, Inc. All rights reserved.</p>
      </div>
    </div>
  `,t}export{n as a,i as c};
