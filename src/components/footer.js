// src/components/footer.js
export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-200';

  footer.innerHTML = `
        <div class="mx-auto max-w-7xl overflow-hidden px-1 py-1 sm:py-12 lg:px-8">
            <p class="mt-1 text-center text-xs leading-5 text-gray-500">&copy; 2024 Aurora Capital Management, Inc. All rights reserved.</p>
        </div>
    `;
  return footer;
}