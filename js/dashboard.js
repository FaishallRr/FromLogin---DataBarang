/************ SUMMARY DATA ************/
const summary = {
  totalProducts: 120,
  totalSales: 85,
  totalRevenue: 12500000,
};

document.getElementById("totalProducts").textContent = summary.totalProducts;
document.getElementById("totalSales").textContent = summary.totalSales;
document.getElementById("totalRevenue").textContent =
  "Rp " + summary.totalRevenue.toLocaleString("id-ID");

/************ DATA SALES ************/
const salesData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [30, 50, 40, 45, 50, 45, 50, 50, 70, 60, 70, 85],
      fill: false,
      borderColor: "#393939",
      backgroundColor: "rgba(57, 57, 57, 0.5)",
      tension: 0.1,
    },
  ],
};

/************ SALES CHART ************/
const salesCtx = document.getElementById("salesTableChart").getContext("2d");
const salesChart = new Chart(salesCtx, {
  type: "bar",
  data: salesData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

/************ DATA REVENUE ************/
const revenueData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [
        1000000, 6000000, 4000000, 7000000, 6500000, 9000000, 7000000, 10000000,
        9000000, 12000000, 12500000, 12500000,
      ],
      fill: true,
      borderColor: "#B0B0B0FF",
      backgroundColor: "rgba(123, 123, 123, 0.4)",
      tension: 0.1,
    },
  ],
};

/************ REVENUE CHART ************/
const revenueCtx = document.getElementById("revenueChart").getContext("2d");
const revenueChart = new Chart(revenueCtx, {
  type: "line",
  data: revenueData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
