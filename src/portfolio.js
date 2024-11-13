// src/portfolio.js
import './main.css';
import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inject the header at the top of the body
  const header = createHeader();
  document.body.insertBefore(header, document.body.firstChild);

  // Sample stock data
  const CurrentStockData = {
    '002311.ch': { name: '002311 CH', description: 'Guangdong Haid Group Co., Limited', ownership: '0.211' },
    '2170.jt': { name: '2170 JT', description: 'Link and Motivation Inc.', ownership: '0.117' },
    '300218.ch': { name: '300218 CH', description: 'Anhui Anli Material Technology Co., Ltd..', ownership: '0.661' },
    '300628.ch': { name: '300628 CH', description: 'Yealink Network Technology Co., Ltd', ownership: '0.264' },
    '4203.jt': { name: '4203 JT', description: 'Sumitomo Bakelite Company Limited', ownership: '0.289' },
    '4766.tt': { name: '4766 TT', description: 'Nan Pao Resins Chemical Co., Ltd.', ownership: '0.538' },
    '5904.tt': { name: '5904 TT', description: 'POYA International Co., Ltd.', ownership: '0.544' },
    '600566.c1': { name: '600566 C1', description: 'Hubei Jumpcan Pharmaceutical Co., Ltd.', ownership: '0.336' },
    '603040.ch': { name: '603040 CH', description: 'Hangzhou XZB Tech Co., Ltd', ownership: '0.215' },
    '6113.jt': { name: '6113 JT', description: 'Amada Co., Ltd.', ownership: '0.489' },
    '6498.jp': { name: '6498 JP', description: 'KITZ Corporation.', ownership: '0.899' },
    '6503.jt': { name: '6503 JT', description: 'Mitsubishi Electric Corporation.', ownership: '0.149' },
    '7367.jp': { name: '7367 JP', description: 'CELM,Inc.', ownership: '0.292' },
    '9739.jt': { name: '9739 JT', description: 'NSW Inc.', ownership: '0.612' },
    'alsn.us': { name: 'ALSN US', description: 'Allison Transmission Holdings, Inc.', ownership: '0.083' },
    'alv.us': { name: 'ALV US', description: 'Autoliv, Inc.', ownership: '0.106' },
    'atea.no': { name: 'ATEA NO', description: 'Atea ASA.', ownership: '0.137' },
    'bby.us': { name: 'BBY US', description: 'Best Buy Co., Inc.', ownership: '0.103' },
    'ctra.us': { name: 'CTRA US', description: 'Coterra Energy Inc.', ownership: '0.116' },
    'g.us': { name: 'G US', description: 'Genpact Limited.', ownership: '0.191' },
    'hal.us': { name: 'HAL US', description: 'Halliburton Company.', ownership: '0.046' },
    'imi.ln': { name: 'IMI LN', description: 'IMI plc.', ownership: '0.199' },
    'jnj.us': { name: 'JNJ US', description: 'Johnson & Johnson.', ownership: '0.285' },
    'loup.fp': { name: 'LOUP FP', description: 'L.D.C. S.A.', ownership: '0.885' },
    'mplx.us': { name: 'MPLX US', description: 'MPLX LP.', ownership: '0.265' },
    'mrk.us': { name: 'MRK US', description: 'Merck & Co., Inc.', ownership: '0.324' },
    'mtx.us': { name: 'MTX US', description: 'Minerals Technologies Inc.', ownership: '0.135' },
    'nvg.pl': { name: 'NVG PL', description: 'The Navigator Company, S.A.', ownership: '0.653' },
    'nxt.us': { name: 'NXT US', description: 'NEXT plc.', ownership: '0.145' },
    'omc.us': { name: 'OMC US', description: 'Omnicom Group Inc.', ownership: '0.171' },
    'smin.ln': { name: 'SMIN LN', description: 'Smiths Group plc.', ownership: '0.237' },
    'tgt.us': { name: 'TGT US', description: 'Target Corporation.', ownership: '0.084' },
    'tnc.us': { name: 'TNC US', description: 'Tennant Company.', ownership: '0.154' },
    'sgld.ln': { name: 'SGLD LN', description: 'Invesco Physical Gold ETC.', ownership: '14.952' },
    'xzmu.ln': { name: 'XZMU LN', description: 'Xtrackers MSCI USA ESG UCITS ETF 1C.', ownership: '10.429' },
    'qdve.gr': { name: 'QDVE GR', description: 'iShares S&P 500 Information Technology Sector UCITS ETF USD.', ownership: '3.608' },
    'lvhi.us': { name: 'LVHI US', description: 'Franklin International Low Volatility High Dividend Index ETF.', ownership: '9.739' },
    'mlpx.us': { name: 'MLPX US', description: 'Global X MLP & Energy Infrastructure ETF.', ownership: '1.708' },
    'dgrw.us': { name: 'DGRW US', description: 'WisdomTree U.S. Quality Dividend Growth Fund.', ownership: '14.976' },
    'dxj.us': { name: 'DXJ US', description: 'WisdomTree Japan Hedged Equity Fund', ownership: '0.728' },
    'dynf.us': { name: 'DYNF US', description: 'iShares U.S. Equity Factor Rotation Active ETF.', ownership: '13.816' },
    'fndx.us': { name: 'FNDX US', description: 'Schwab Fundamental U.S. Large Company ETF.', ownership: '10.296' },
    'argt.us': { name: 'ARGT US', description: 'Global X MSCI Argentina ETF.', ownership: '4.788' },
    '006208.tt': { name: '006208 TT', description: 'Fubon FTSE TWSE Taiwan 50 ETF.', ownership: '5.026' },
  };

  const historicalStockData = {
    'inr.pa': { name: 'INR', description: 'INR PA., formly part of the portfolio.', ownership: '2.43' }
  };

  // Function to open modal with stock info
  function openModal(stockId, stockType) {
    const stock = stockType ? CurrentStockData[stockId] : historicalStockData[stockId];
    const modal = document.getElementById('modal');
    const stockInfo = document.getElementById('modal-content');
  
    // Add "%" symbol after the ownership value
    const ownershipWithPercentage = stock.ownership + '%';
  
    stockInfo.innerHTML = `
      <h2 class="text-2xl font-bold text-gray-900">${stock.name}</h2>
      <p class="text-gray-600 mt-2">${stock.description}</p>
      <p class="text-gray-600 mt-2">Ownership: ${ownershipWithPercentage}</p>
    `;
    modal.style.display = 'flex';
  }
  

  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src="./images/DSCF4004.JPG" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" style="opacity: 0.5;">
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="mt-2 text-6xl font-bold tracking-tight text-white sm:text-7xl">PORTFOLIO</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">We have invested approximately $100 million in equity capital.</p>
        </div>
      </div>
    </div>

    <!-- Current Equities and ETFs Section -->
    <div class="bg-white relative mt-5">
      <div class="relative px-6 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mt-4">Current</h2>
          <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            
            ${Object.keys(CurrentStockData).map(stockId => `
              <div data-stock-id="${stockId}" class="current-stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                <h3 class="text-2xl font-bold text-gray-900">${CurrentStockData[stockId].name}</h3>
                <p class="text-gray-600 text-center mt-2">${CurrentStockData[stockId].description}</p>
              </div>
            `).join('')}
  
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for displaying stock information -->
    <div id="modal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" style="display: none;">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div id="modal-content"></div>
        <button id="close-modal" class="mt-6 px-4 py-2 bg-red-600 text-white rounded">Close</button>
      </div>
    </div>

    <!-- Historical Equities Section -->
    <div class="bg-white relative mt-5">
      <div class="relative px-6 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mt-4">Historical</h2>
          <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            
            ${Object.keys(historicalStockData).map(stockId => `
              <div data-stock-id="${stockId}" class="historical-stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                <h3 class="text-2xl font-bold text-gray-900">${historicalStockData[stockId].name}</h3>
                <p class="text-gray-600 text-center mt-2">${historicalStockData[stockId].description}</p>
              </div>
            `).join('')}
  
          </div>
        </div>
      </div>
    </div>

 <!-- Horizontal Line -->
    <div class="my-10">
    <hr class="border-t-2 border-gray-300 w-5/6 mx-auto"/>
    </div>

<!-- Appendix Section -->
  <div class="bg-white relative ">
  <!-- Decorative Background -->
  <div class="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-50 pointer-events-none"></div>

  <div class="relative px-6 py-12 sm:px-6 sm:py-16 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mt-4 text-center">
        Appendix
      </h2>

      <!-- Flexbox container for the appendix sections -->
      <div class="flex flex-wrap justify-center gap-8 mt-8">
        
        <!-- October 2024 Section -->
        <div class="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-gray-50">
          <h3 class="text-xl font-semibold text-gray-800" data-aos="fade-up">October 2024</h3>
          <ul class="mt-4 flex space-x-4">
            <li>
              <a href="./downloads/Aurora_Capital_Oct_2024.pdf" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-red-500 hover:to-orange-500 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m5-4h4m-4-4h4m-4-4h4m-6 8v-8l4 4-4 4z" />
                </svg>
                Download PDF
              </a>
              <li>
              <a href="./downloads/Composition_AuroraCapm.xlsx" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-green-400 hover:to-green-300 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m-4-4h8" />
                </svg>
                Download Excel
              </a>
            </li>
            <li>
              <a href="./downloads/Aurora_Capital_Oct_2024.pptx" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-blue-400 hover:to-blue-300 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
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
          <ul class="mt-4 flex space-x-4">
            <li>
              <a href="./downloads/Aurora_Capital_Nov_2024.pdf" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-red-500 hover:to-orange-500 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m5-4h4m-4-4h4m-4-4h4m-6 8v-8l4 4-4 4z" />
                </svg>
                Download PDF
              </a>
              <li>
              <a href="./downloads/Aurora_Capital_Selection_Process.xlsx" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-green-400 hover:to-green-300 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m-4-4h8" />
                </svg>
                Download Excel
              </a>
            </li>
            <li>
              <a href="./downloads/Aurora_Capital_Nov_2024.pptx" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-blue-400 hover:to-blue-300 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m8-6H8m8 12H8m0 0h8m-8 0H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2h-4" />
                </svg>
                Download PPT
              </a>
            </li>
          </ul>
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

 // Attach event listeners to current portfolio items
 document.querySelectorAll('.current-stock-item').forEach(item => {
  item.addEventListener('click', () => {
    const stockId = item.getAttribute('data-stock-id');
    openModal(stockId, true);
  });
});

// Attach event listeners to historical portfolio items
document.querySelectorAll('.historical-stock-item').forEach(item => {
  item.addEventListener('click', () => {
    const stockId = item.getAttribute('data-stock-id');
    openModal(stockId, false);
  });
});

  // Attach event listener to close the modal
  document.getElementById('close-modal').addEventListener('click', closeModal);

  // Close modal if clicking outside of modal content
  document.getElementById('modal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('modal')) {
      closeModal();
    }
  });
});
