const table = document.getElementById('dataTable');
const ctx = document.getElementById('dataChart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Текущий день', 'Вчера', 'Этот день недели'],
    datasets: [{
      label: 'Данные',
      data: [],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

table.addEventListener('click', (e) => {
  const row = e.target.closest('tr');
  if (row && row.dataset.values) {
    const values = row.dataset.values.split(',').map(Number);
    chart.data.datasets[0].data = values;
    chart.update();
  }
});