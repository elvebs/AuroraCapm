// src/components/footer.js
export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-100 text-gray-800';

  footer.innerHTML = `
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
              <li><a href="./" class="text-gray-600 hover:text-gray-800">About Us</a></li>
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
  `;

  return footer;
}
