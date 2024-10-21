(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function l(){const t=document.createElement("header");t.className="bg-gray-200",t.innerHTML=`
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
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
  `;const o=t.querySelector("#mobile-menu-button"),a=t.querySelector("#mobile-menu"),r=t.querySelector("#close-menu-button");return o.addEventListener("click",()=>{a.classList.remove("hidden")}),r.addEventListener("click",()=>{a.classList.add("hidden")}),t}function i(){const t=document.createElement("footer");return t.className="bg-gray-200",t.innerHTML=`
        <div class="mx-auto max-w-7xl overflow-hidden px-1 py-1 sm:py-12 lg:px-8">
            <p class="mt-1 text-center text-xs leading-5 text-gray-500">&copy; 2024 Aurora Capital Management, Inc. All rights reserved.</p>
        </div>
    `,t}export{i as a,l as c};
