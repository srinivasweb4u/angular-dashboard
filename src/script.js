window.onload=function(){
    var pieData = [
    {
    value: 8,
    color: "hotpink",
    highlight: "#5AD3D1",
    label: "java"
    },
    {
    value: 13,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
    },
    {
    value: 21,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
    },
    {
    value: 16,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
    }
    ]
    var distributionChartData = [
    8,
    13,
    21,
    16,
    58
    ]
    Chart.types.Doughnut.extend({
    name: "DoughnutAlt",
    draw: function () {
    Chart.types.Doughnut.prototype.draw.apply(this, arguments);
    this.chart.ctx.textBaseline = "middle";
    this.chart.ctx.fillStyle = 'black'
    this.chart.ctx.font = "15px Roboto";
    this.chart.ctx.textAlign = "center";
    this.chart.ctx.fillText("Total Employees", 105, 80);
    this.chart.ctx.font = "40px Roboto";
    this.chart.ctx.fillText((distributionChartData[0] +
    distributionChartData[1] + distributionChartData[2]+
    distributionChartData[3]) + " ", 105, 120);
    }
    });
    var pieChart = document.getElementById("pieChart").getContext("2d");
    new Chart(pieChart).DoughnutAlt(pieData, {
    percentageInnerCutout: 80, animationEasing: "easeOutQuart"
    });
    }
   
    function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    tr[i].style.display = "";
    } else {
    tr[i].style.display = "none";
    }
    }
    }
    }