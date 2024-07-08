google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Bolivia', 'Ecuador'],
    ['2004/05',  365,      338, ],
    ['2005/06',  235,      120,],
    ['2006/07',  357,      167,],
    ['2007/08',  239,      110,],
    ['2008/09',  436,      191, ]
  ]);

  var options = {
    title : 'Word Genertation',
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}