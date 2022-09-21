google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Opinion', 'Percentage'],
          ['A lot',     35],
          ['A little',      59],
          ['Nothing at all',  6]
        ]);

        var options = {
          title: 'Percentage of US adults who say they have seen or heard ___ about the effort to develop driverless vehicles'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }