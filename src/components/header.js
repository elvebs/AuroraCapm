// src/components/header.js
export function createHeader() {
  const header = document.createElement('header');
  header.className = 'bg-gray-200';
  header.innerHTML = `
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Aurora Capital Management</span>
          <img class="h-8 w-auto" src="./../public/images/Alogo.png" alt="">
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
            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
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
              <a href="./main" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
              <a href="./Strategy" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Strategy</a>
              <a href="./Portfolio" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Portfolio</a>
              <a href="./Contacts" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  // Event listeners for mobile menu toggle
  const mobileMenuButton = header.querySelector('#mobile-menu-button');
  const mobileMenu = header.querySelector('#mobile-menu');
  const closeMenuButton = header.querySelector('#close-menu-button');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
  });
  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
  return header;
}