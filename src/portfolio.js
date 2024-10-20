// src/team.js
import './main.css';
import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inject the header at the top of the body
  const header = createHeader();
  document.body.insertBefore(header, document.body.firstChild);

  // Inject the portfolio
  const app = document.getElementById('app');
  app.innerHTML = `
<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <!-- Background Image -->
  <img src="./../public/images/DSCF4004.JPG" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" style="opacity: 0.5;">

  <!-- Title and Description Container -->
  <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <!-- Big Title -->
      <h1 class="mt-2 text-6xl font-bold tracking-tight text-white sm:text-7xl">PORTFOLIO</h1>
      <!-- Description -->
      <p class="mt-6 text-lg leading-8 text-gray-300">
      We have invested approximately $100 million in equity capital.
      </p>
    </div>
  </div>
</div>

<!-- Current Companies Section -->
<div class="bg-white relative mt-12">
  <div class="relative px-6 py-12 sm:px-6 sm:py-16 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl text-center" data-aos="fade-up">
        Current Companies
      </h2>

      <!-- Companies Grid -->
      <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Company 1 -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <a href="/Portfolio/genserve">
            <img src="/Files/files/GenServe%20Full%20Color%20Logo%20Stacked.png" alt="GenServe" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">GenServe</h3>
          <p class="text-gray-600 text-center">Leading provider of energy solutions.</p>
        </div>

        <!-- Company 2 -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <a href="/Portfolio/first-legal">
            <img src="/Files/files/FLN%20logo-Corp-cmyk.png" alt="First Legal" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">First Legal</h3>
          <p class="text-gray-600 text-center">Innovative legal solutions and services.</p>
        </div>

        <!-- Company 3 -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <a href="/Portfolio/lubrication-engineers">
            <img src="/Files/files/LE.png" alt="Lubrication Engineers" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">Lubrication Engineers</h3>
          <p class="text-gray-600 text-center">Specialists in lubrication solutions.</p>
        </div>

        <!-- Additional Company Entries -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <a href="/Portfolio/company4">
            <img src="path/to/company4-logo.png" alt="Company 4" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">Company 4</h3>
          <p class="text-gray-600 text-center">Description of Company 4.</p>
        </div>

        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <a href="/Portfolio/company5">
            <img src="path/to/company5-logo.png" alt="Company 5" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">Company 5</h3>
          <p class="text-gray-600 text-center">Description of Company 5.</p>
        </div>

        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <a href="/Portfolio/company6">
            <img src="path/to/company6-logo.png" alt="Company 6" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">Company 6</h3>
          <p class="text-gray-600 text-center">Description of Company 6.</p>
        </div>

      </div>
    </div>
  </div>
</div>


<!-- Historical companies -->
<!-- Historical Companies Section -->
<div class="bg-gray-50 relative mt-12">
  <div class="relative px-6 py-12 sm:px-6 sm:py-16 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl text-center" data-aos="fade-up">
        Historical Companies
      </h2>

      <!-- Companies Grid -->
      <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Company 1 -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <a href="/Portfolio/national-technical-systems">
            <img src="/Files/images/Portfolio/NTSLOGO.png" alt="National Technical Systems" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">National Technical Systems</h3>
          <p class="text-gray-600 text-center">Provider of advanced engineering services.</p>
        </div>

        <!-- Company 2 -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <a href="/Portfolio/vls-environmental-solutions">
            <img src="/Files/images/Portfolio/VLSES_Logo_Full-Color-Transparent.png" alt="VLS Environmental Solutions" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">VLS Environmental Solutions</h3>
          <p class="text-gray-600 text-center">Expertise in environmental services and solutions.</p>
        </div>

        <!-- Additional Company Entries -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <a href="/Portfolio/company3">
            <img src="path/to/company3-logo.png" alt="Company 3" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">Company 3</h3>
          <p class="text-gray-600 text-center">Description of Company 3.</p>
        </div>

        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <a href="/Portfolio/company4">
            <img src="path/to/company4-logo.png" alt="Company 4" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">Company 4</h3>
          <p class="text-gray-600 text-center">Description of Company 4.</p>
        </div>

        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <a href="/Portfolio/company5">
            <img src="path/to/company5-logo.png" alt="Company 5" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">Company 5</h3>
          <p class="text-gray-600 text-center">Description of Company 5.</p>
        </div>

        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <a href="/Portfolio/company6">
            <img src="path/to/company6-logo.png" alt="Company 6" class="h-16 w-auto mb-4" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800">Company 6</h3>
          <p class="text-gray-600 text-center">Description of Company 6.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Horizontal Line -->
<div class="my-12">
  <hr class="border-t-2 border-gray-300 w-1/3 mx-auto" />
</div>

<!-- Appendix Section -->
<div class="bg-white relative mt-12">
  <!-- Decorative Background -->
  <div class="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-50 pointer-events-none"></div>

  <div class="relative px-6 py-12 sm:px-6 sm:py-16 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl text-center" data-aos="fade-up">
        Appendix
      </h2>

      <!-- Flexbox container for the appendix sections -->
      <div class="flex flex-wrap justify-center gap-8 mt-8">
        
        <!-- October 2024 Section -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <h3 class="text-xl font-semibold text-gray-800" data-aos="fade-up">October 2024</h3>
          <ul class="mt-4 flex space-x-4">
            <li>
              <a href="../public/downloads/Rotation_matrix.pdf" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-red-500 hover:to-orange-500 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m5-4h4m-4-4h4m-4-4h4m-6 8v-8l4 4-4 4z" />
                </svg>
                Download PDF
              </a>
            </li>
            <li>
              <a href="../public/downloads/Strategy_Report_October_2024.xlsx" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-green-400 hover:to-green-300 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m-4-4h8" />
                </svg>
                Download Excel
              </a>
            </li>
            <li>
              <a href="../public/downloads/Presentation_October_2024.pptx" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-blue-400 hover:to-blue-300 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m8-6H8m8 12H8m0 0h8m-8 0H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2h-4" />
                </svg>
                Download PPT
              </a>
            </li>
          </ul>
        </div>

        <!-- November 2024 Section -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <h3 class="text-xl font-semibold text-gray-800" data-aos="fade-up">November 2024</h3>
          <p class="text-gray-600 mt-4">Content for November appendix will be added here.</p>
        </div>

        <!-- December 2024 Section -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <h3 class="text-xl font-semibold text-gray-800" data-aos="fade-up">December 2024</h3>
          <p class="text-gray-600 mt-4">Content for December appendix will be added here.</p>
        </div>

      </div>
    </div>
  </div>
</div>
  `;

  // Inject the footer at the bottom of the body
  const footer = createFooter();
  document.body.appendChild(footer);
});
