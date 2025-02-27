// Sample chart data (replace with real data)
const chartData = {
    KJFK: {
      GEN: [{ name: "GEN Chart 1", pdf: "gen1.pdf" }, { name: "GEN Chart 2", pdf: "gen2.pdf" }],
      GND: [{ name: "GND Chart 1", pdf: "gnd1.pdf" }, { name: "GND Chart 2", pdf: "gnd2.pdf" }],
      SID: [{ name: "SID Chart 1", pdf: "sid1.pdf" }, { name: "SID Chart 2", pdf: "sid2.pdf" }],
      STAR: [{ name: "STAR Chart 1", pdf: "star1.pdf" }, { name: "STAR Chart 2", pdf: "star2.pdf" }],
      APP: [{ name: "APP Chart 1", pdf: "app1.pdf" }, { name: "APP Chart 2", pdf: "app2.pdf" }],
    },
    KLAX: {
      GEN: [{ name: "GEN Chart A", pdf: "genA.pdf" }, { name: "GEN Chart B", pdf: "genB.pdf" }],
      GND: [{ name: "GND Chart A", pdf: "gndA.pdf" }, { name: "GND Chart B", pdf: "gndB.pdf" }],
      SID: [{ name: "SID Chart A", pdf: "sidA.pdf" }, { name: "SID Chart B", pdf: "sidB.pdf" }],
      STAR: [{ name: "STAR Chart A", pdf: "starA.pdf" }, { name: "STAR Chart B", pdf: "starB.pdf" }],
      APP: [{ name: "APP Chart A", pdf: "appA.pdf" }, { name: "APP Chart B", pdf: "appB.pdf" }],
    },
  };
  
  // Load charts when airport is entered
  function loadCharts() {
    const airport = document.getElementById("airport-input").value.toUpperCase();
    if (chartData[airport]) {
      document.getElementById("sidebar").style.display = "flex";
      document.getElementById("chart-display").innerHTML = ""; // Clear previous charts
      minimizeSearch();
    } else {
      alert("Invalid airport code. Please try again.");
    }
  }
  
  // Minimize search bar
  function minimizeSearch() {
    const searchBar = document.getElementById("search-bar");
    searchBar.classList.add("minimized");
    document.getElementById("open-search-button").style.display = "block";
  }
  
  // Open search bar
  function openSearch() {
    const searchBar = document.getElementById("search-bar");
    searchBar.classList.remove("minimized");
    document.getElementById("open-search-button").style.display = "none";
  }
  
  // Select button and display charts
  function selectButton(buttonType) {
    const airport = document.getElementById("airport-input").value.toUpperCase();
    const charts = chartData[airport][buttonType];
  
    // Update button styles
    const allButtons = document.querySelectorAll('.nav-button');
    allButtons.forEach(button => {
      button.classList.remove('selected');
      button.style.backgroundColor = '#34495e';
    });
    const selectedButton = document.querySelector(`[onclick="selectButton('${buttonType}')"]`);
    const selectedColor = selectedButton.getAttribute('data-color');
    selectedButton.classList.add('selected');
    selectedButton.style.backgroundColor = selectedColor;
  
    // Display charts
    const chartDisplay = document.getElementById("chart-display");
    chartDisplay.innerHTML = charts.map(chart => `
      <div class="chart-item">
        <h3>${chart.name}</h3>
        <button onclick="openPdf('${chart.pdf}')"><i class="fas fa-file-pdf"></i> Open PDF</button>
      </div>
    `).join("");
  }
  
  // Open PDF in viewer
  function openPdf(pdfUrl) {
    const pdfViewer = document.getElementById("pdf-viewer");
    const pdfIframe = document.getElementById("pdf-iframe");
    pdfIframe.src = pdfUrl;
    pdfViewer.style.display = "block";
  }
  
  // Close PDF viewer
  function closePdfViewer() {
    document.getElementById("pdf-viewer").style.display = "none";
  }