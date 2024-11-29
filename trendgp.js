
        const apiKey = "aUCY7QB7Qj5BCf6tVTy5s4v8";
        const baseApiUrl = "https://fcsapi.com/api-v3/forex/latest?symbol=USD/EUR,USD/JPY,USD/INR,USD/AED&access_key=" + apiKey;
        const ctx = document.getElementById('trendChart').getContext('2d');
        let trendChart;

        // Mock data for different periods
        const mockData = {
            today: { labels: ["USD/JPY", "USD/AED", "USD/INR", "USD/EUR"], data: [151.545, 3.67303, 84.4731, 0.94731] },
            yesterday: { labels: ["USD/JPY", "USD/AED", "USD/INR", "USD/EUR"], data: [151.200, 3.67000, 84.3000, 0.95000] },
            '7D': { labels: ["USD/JPY", "USD/AED", "USD/INR", "USD/EUR"], data: [151.200, 3.6720, 84.4000, 0.95050] },
            '30D': { labels: ["USD/JPY", "USD/AED", "USD/INR", "USD/EUR"], data: [150.900, 3.67000, 84.0000, 0.94500] },
            '3M': { labels: ["USD/JPY", "USD/AED", "USD/INR", "USD/EUR"], data: [149.800, 3.66300, 83.0000, 0.94000] },
            '6M': { labels: ["USD/JPY", "USD/AED", "USD/INR", "USD/EUR"], data: [149.600, 3.65800, 82.5000, 0.93800] },
            '12M': { labels: ["USD/JPY", "USD/AED", "USD/INR", "USD/EUR"], data: [148.500, 3.65000, 82.0000, 0.93000] },
        };

        // Initialize the chart
        function initChart(labels, data) {
            if (trendChart) {
                trendChart.destroy(); // Destroy old chart if it exists
            }

            trendChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Currency Rates',
                            data: data,
                            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'],
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }

        // Fetch data based on the selected time range (mock data for simplicity)
        function fetchData(range = '7D') {
            const selectedData = mockData[range] || mockData['7D'];  // Default to '7D' if no range matches
            initChart(selectedData.labels, selectedData.data);
        }

        // Initial data fetch for "7D"
        fetchData('7D');
   




// URL for fetching the latest forex rates
const baseURL = 'https://api.forexratesapi.io/latest';
const queryParams = '?base=USD&symbols=EUR,GBP';
const url = baseURL + queryParams;

// Fetch the forex rates
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Process and display the forex data
    console.log('Forex Rates:', data.rates);

    // Example: Display rates on a webpage
    const output = `
      <h3>Forex Rates (Base: ${data.base})</h3>
      <ul>
        <li>EUR: ${data.rates.EUR}</li>
        <li>GBP: ${data.rates.GBP}</li>
      </ul>
    `;
    document.getElementById('forex-rates').innerHTML = output;
  })
  .catch(error => console.error('Error fetching forex rates:', error));




// Data Simulation for Trends Analysis
const trendData = {
    Today: { profit: "$5,000", overview: ["$152k", "$82k", "2,140"], graph: "chart-today.png" },
    Yesterday: { profit: "$6,500", overview: ["$148k", "$85k", "2,300"], graph: "chart-yesterday.png" },
    "7 D": { profit: "$92,405", overview: ["$152k", "$82k", "2,140"], graph: "chart-7d.png" },
    "30 D": { profit: "$98,000", overview: ["$170k", "$90k", "2,500"], graph: "chart-30d.png" },
    "3 M": { profit: "$280,000", overview: ["$520k", "$300k", "10,200"], graph: "chart-3m.png" },
    "6 M": { profit: "$520,000", overview: ["$980k", "$520k", "22,400"], graph: "chart-6m.png" },
    "12 M": { profit: "$1,050,000", overview: ["$1.8M", "$1M", "50,000"], graph: "chart-12m.png" },
  };
  
  // Select DOM elements
  const balanceAmount = document.querySelector(".balance-amount");
  const statItems = document.querySelectorAll(".stat-item .stat-value");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const chartImage = document.querySelector(".chart-image");
  
  // Event Listener for Time Filter Buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from other buttons
      filterButtons.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
  
      // Fetch Data for Selected Timeframe
      const timeframe = btn.textContent.trim();
      const data = trendData[timeframe];
  
      // Update UI with New Data
      balanceAmount.textContent = data.profit;
      statItems.forEach((item, index) => {
        item.textContent = data.overview[index];
      });
      chartImage.src = `assets/${data.graph}`;
      chartImage.alt = `Statistics chart for ${timeframe}`;
    });
  });
  
  // Add Tooltip Functionality for Insights
  document.querySelectorAll(".stat-item").forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      const insight = [
        "Net Profit increased due to higher volume.",
        "Drop in profit from trading EUR/USD pairs.",
        "Volatility in cryptocurrency trends affected stats.",
      ][index];
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = insight;
      item.appendChild(tooltip);
    });
  
    item.addEventListener("mouseleave", () => {
      const tooltip = item.querySelector(".tooltip");
      if (tooltip) tooltip.remove();
    });
  });
  
  // Generate Trend Summary Report
  function generateTrendReport() {
    const selectedTimeframe = document.querySelector(".filter-btn.active").textContent.trim();
    const summary = `
      Trend Report for ${selectedTimeframe}:
      - Profit: ${trendData[selectedTimeframe].profit}
      - Overview Stats: ${trendData[selectedTimeframe].overview.join(", ")}
    `;
    alert(summary);
  }
  
  // Add "Generate Report" Button
  const reportButton = document.createElement("button");
  reportButton.textContent = "Generate Trend Report";
  reportButton.className = "report-btn";
  reportButton.addEventListener("click", generateTrendReport);
  
  document.querySelector(".statistics-card").appendChild(reportButton);

  

  // Fetch data from the API or local file
async function fetchCurrencyTrends() {
    try {
      // Replace './trends.json' with your API URL if needed
      const response = await fetch(trendgp.json);
      if (!response.ok) throw new Error('Failed to fetch data');
  
      const trends = await response.json();
      renderChart(trends);
    } catch (error) {
      console.error('Error fetching trends:', error);
    }
  }
  
  // Function to render the chart
  function renderChart(trends) {
    // Extract data for the chart
    const labels = trends.map(trend => trend.time); // x-axis (Today, Yesterday, 7D)
    const dataValues = trends.map(trend => parseFloat(trend.value.replace('%', '')) || 0); // y-axis values
  
    // Get the chart context
    const ctx = document.getElementById('currencyChart').getContext('2d');
  
    // Create the chart
    new Chart(ctx, {
      type: 'bar', // You can also use 'line', 'pie', etc.
      data: {
        labels: labels, // X-axis labels
        datasets: [
          {
            label: 'Currency Trend (%)',
            data: dataValues, // Y-axis values
            backgroundColor: dataValues.map(value => value > 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'), // Positive: green, Negative: red
            borderColor: dataValues.map(value => value > 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Start y-axis from zero
          },
        },
      },
    });
  }
  
  // Fetch and render the chart on page load
  fetchCurrencyTrends();
  