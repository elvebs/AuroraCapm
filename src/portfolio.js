// src/portfolio.js
import './main.css';
import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inject the header at the top of the body
  const header = createHeader();
  document.body.insertBefore(header, document.body.firstChild);

  // Sample stock data
  const stockData = {
    'lvhi': { name: 'LVHI US', description: 'This ETF focuses on high-dividend, low-volatility equities in developed markets outside the U.S. By investing primarily in profitable companies with high dividend yields, LVHI aligns with our portfolio’s goal of minimizing volatility while providing steady income', ownership: '18.2'},
    'sgld': { name: 'SGLD LN', description: 'SGLD.L provides direct exposure to gold, acting as a hedge against inflation and market downturns. With gold’s historical role as a safe-haven asset, this investment plays a critical part in reducing overall portfolio risk during market turbulence.', ownership: '15.2' },
    'dgrw': { name: 'DGRW US', description: 'DGRW targets U.S. dividend-paying stocks with strong growth potential. This fundamentally weighted index focuses on companies with robust earnings and dividend growth characteristics, enhancing the portfolio with both income and growth opportunities', ownership: '14.9' },
    'dynf': { name: 'DYNF US', description: 'DYNF employs a multi-factor approach to capture returns from various equity factors such as value, momentum, and quality. This diversified strategy offers a balanced way to enhance returns across different market conditions.', ownership: '13.6' },
    'fndx': { name: 'FNDX US', description: 'NDX provides exposure to large-cap developed market companies outside the U.S., focusing on fundamental metrics rather than market capitalization. This value-oriented approach prioritizes firms with strong financials, ensuring long-term stability', ownership: '10.2' },
    'xzmu.l': { name: 'XZMU LN', description: 'XZMU.L tracks the MSCI USA Low Carbon SRI Leaders Index, offering exposure to U.S. large- and mid-cap companies with low carbon emissions and high ESG ratings. This responsible investing strategy aligns with sustainable trends in the market', ownership: '10.1' },
    '006208.tw': { name: '006208 TT', description: 'This ETF offers exposure to the top 50 companies listed on the Taiwan Stock Exchange, providing a gateway to the growing Taiwanese market. The focus on established firms enhances stability while capturing potential growth opportunities', ownership: '5.56' },
    'argt': { name: 'ARGT US', description: 'ARGT invests in companies listed in Argentina, providing diversification through exposure to this emerging market. This investment aims to capitalize on Argentina’s unique economic landscape while balancing overall portfolio risk', ownership: '4.65' },
    'qdve.de': { name: 'QDVE GR', description: 'QDVE.DE focuses on the technology sector within the S&P 500, investing in companies at the forefront of innovation and growth. This sector-specific strategy enhances exposure to technological advancements and growth potentia', ownership: '2.84' },
    'inr.pa': { name: 'INR FP', description: 'This ETF provides exposure to large- and mid-cap companies in India, tapping into one of the fastest-growing economies globally. INR.PA offers diversification and potential growth through India’s robust market opportunities', ownership: '2.43' },
    'mlpx': { name: 'MLPX US', description: 'Global X MLP & Energy Infrastructure ETF offers investors exposure to the energy sector with a focus on master limited partnerships (MLPs). This investment provides diversification and income potential through energy infrastructure assets.', ownership: '1.63' },
    'DXJ': { name: 'DXJ US', description: 'DXJ provides a hedge against currency fluctuations while investing in Japanese equities. This investment offers exposure to Japans market opportunities while mitigating currency risk.', ownership: '0.728' },
  };

  // Function to open modal with stock info
  function openModal(stockId) {
    const modal = document.getElementById('modal');
    const stockInfo = document.getElementById('modal-content');
    const stock = stockData[stockId];

    if (stock) {
      stockInfo.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">${stock.name}</h2>
        <p class="text-gray-700 text-lg mb-4">${stock.description}</p>
        <p class="text-gray-800 text-2xl font-semibold">Ownership: ${stock.ownership}%</p>
      `;
      modal.style.display = 'block';
    }
  }

  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  // Inject the portfolio
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

    <div class="bg-white relative mt-12">
      <div class="relative px-6 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl text-center">Current Portfolio Breakdown</h2>
          <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            
      
          <div data-stock-id="lvhi" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">LVHI</h3>
              <p class="text-gray-600 text-center mt-2">Franklin International Low Volatility High Dividend Index ETF</p>
            </div>

      
            <div data-stock-id="sgld" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">SGLD.L</h3>
              <p class="text-gray-600 text-center mt-2">Invesco Physical Gold ETC</p>
            </div>

         
            <div data-stock-id="dgrw" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">DGRW</h3>
              <p class="text-gray-600 text-center mt-2">WisdomTree US Quality Dividend Growth Fund</p>
            </div>

         
            <div data-stock-id="dynf" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">DYNF</h3>
              <p class="text-gray-600 text-center mt-2">iShares US Equity Factor Rotation Active ETF</p>
            </div>

        
            <div data-stock-id="fndx" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">FNDX</h3>
              <p class="text-gray-600 text-center mt-2">Schwab Fundamental US Large Company E</p>
            </div>

        
            <div data-stock-id="xzmu.l" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">XZMU.L</h3>
              <p class="text-gray-600 text-center mt-2">Xtrackers MSCI USA ESG UCITS ETF 1C</p>
            </div>

            
            <div data-stock-id="006208.tw" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">006208.TW</h3>
              <p class="text-gray-600 text-center mt-2">Fubon FTSE TWSE Taiwan 50 ETF</p>
            </div>

            
            <div data-stock-id="argt" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">ARGT</h3>
              <p class="text-gray-600 text-center mt-2">Global X MSCI Argentina ETF</p>
            </div>

            
            <div data-stock-id="qdve.de" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">QDVE.DE</h3>
              <p class="text-gray-600 text-center mt-2">iShares S&P 500 Information Technology Sector UCITS ETF USD (Acc)</p>
            </div>

            
            <div data-stock-id="inr.pa" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">INR.PA</h3>
              <p class="text-gray-600 text-center mt-2">Amundi MSCI India II UCITS ETF EUR Acc</p>
            </div>

            
            <div data-stock-id="mlpx" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">MLPX</h3>
              <p class="text-gray-600 text-center mt-2">Global X MLP & Energy Infrastructure ETF</p>
            </div>

         
            <div data-stock-id="DXJ" class="stock-item flex flex-col items-center p-8 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <h3 class="text-2xl font-bold text-gray-900">DXJ</h3>
              <p class="text-gray-600 text-center mt-2">WisdomTree Japan Hedged Equity Fund</p>
            </div>

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
              <a href="./downloads/Aurora Capital Management Group 7 OCT 2024.pdf" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-red-500 hover:to-orange-500 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
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
              <a href="./downloads/Aurora Capital Management Group 7 OCT 2024.pptx" download class="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-base font-semibold text-white shadow-lg hover:from-blue-400 hover:to-blue-300 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2">
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

  // Attach event listeners to stock items
  document.querySelectorAll('.stock-item').forEach(item => {
    item.addEventListener('click', () => {
      const stockId = item.getAttribute('data-stock-id');
      openModal(stockId);
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
