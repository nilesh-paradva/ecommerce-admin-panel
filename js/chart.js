$(document).ready(function () {
    const ctx = document.getElementById('chart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            datasets: [{
                label: 'Fully Rounded',
                data: [12, 19, 15, 5, 4, 8, 10],
                borderRadius: 30,
                borderSkipped: false,
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    },
                    border: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
            },
        },
    });

    const ctx1 = document.getElementById('chart-3');

    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Apr', 'Jul', 'Oct'],
            datasets: [{
                label: 'Fully Rounded',
                data: [12, 7, 15, 20],
                backgroundColor: "#86e255",
                borderWidth: 0,
                borderRadius: 30,
                borderSkipped: false,
            }, {
                label: 'Fully Rounded',
                data: [10, 4, 13, 15],
                backgroundColor: "#e9faf4",
                borderWidth: 0,
                borderRadius: 30,
                borderSkipped: false,
            }],
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    },
                    border: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
            },
        },
    });

    const ctx2 = document.getElementById('chart-5');

    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [10, 12, 10, 15, 8, 3, 19, 23, 18, 17, 22, 0],
                    borderColor: "#7679ff",
                    backgroundColor: "#c6c6ff",
                    fill: true,
                    stepped: true,
                },
            ],
        },
        options: {
            aspectRatio: 1/0.6,
            plugins: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
            },
        },
    });

    const ctx4 = document.getElementById('chart-6');

    new Chart(ctx4, {
        type: 'radar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Skip first dataset',
                    data: [0, 70, 70, 100, 70, 70],
                    backgroundColor: 'rgba(100, 149, 237, 0.9)',
                },
                {
                    label: 'Skip mid dataset',
                    data: [80, 80, 80, 80, 80, 100],
                    backgroundColor: 'rgba(45, 16, 178, 0.7)',
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: false,
                    text: 'Chart.js Radar Skip Points Chart'
                },
                legend: {
                    display: false,
                    position: 'top',
                },
            },
        },
    });

    const ctx3 = document.getElementById('chart-8');

    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [10, 12, 10, 15, 8, 3, 19, 23, 18, 17, 22, 0],
                    borderColor: "red",
                    backgroundColor: 'yellow',
                    borderRadius: 20,
                },
                {
                    label: 'Dataset 2',
                    data: [-10, -12, -10, -15, -8, -3, -19, -23, -18, -17, -22, -0],
                    borderColor: 'blue',
                    backgroundColor: 'green',
                    borderRadius: 20,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    },
                    border: {
                        display: false,
                    },
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                    position: 'top',
                },
                tooltips: {
                    enabled: false
                },
            },
        },
    });



    var options = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        yaxis: {
            show: false,
            lines: {
                show: false,
            },
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        chart: {
            height: '100%',
            type: 'area',
            toolbar: {
                show: false
            }
        },

        dataLabels: {
            enabled: false,
        },
        xaxis: {
            display: true,
            // type: 'datetime',
            categories: ["A1", "A2", "A3", "A4", "A5", "A6", "A7"],
            show: true,
            lines: {
                show: false,
                display: false,
            },
            labels: {
                show: true,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
            },
            tooltip: {
                enabled: false,
            },
        },

        grid: {
            xaxis: {
                lines: {
                    show: false,
                    display: false,
                },

            },

            yaxis: {
                show: false,
                labels: {
                    show: false,
                },
                lines: {
                    show: false
                }
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#apex-1"), options);
    chart.render();




    var options1 = {
        series: [76],
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['Average Results'],
    };

    var chart1 = new ApexCharts(document.querySelector("#apex-2"), options1);
    chart1.render();





    var options2 = {
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        yaxis: {
            show: false,
            lines: {
                show: false,
            },
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        chart: {
            height: 250,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            show: false,
            lines: {
                show: false,
                display: false,
            },
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
            },
            tooltip: {
                enabled: false,
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false,
                    display: false,
                },

            },

            yaxis: {
                show: false,
                labels: {
                    show: false,
                },
                lines: {
                    show: false
                }
            },
        },

    };

    var chart2 = new ApexCharts(document.querySelector("#apex-3"), options2);
    chart2.render();



    var options3 = {
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        yaxis: {
            show: false,
            lines: {
                show: false,
            },
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        chart: {
            height: 250,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            align: 'left'
        },
        colors: ['#ffb726', '#ffb726'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            show: false,
            lines: {
                show: false,
                display: false,
            },
            labels: {
                show: true,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
            },
            tooltip: {
                enabled: false,
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false,
                    display: false,
                },

            },

            yaxis: {
                show: false,
                labels: {
                    show: false,
                },
                lines: {
                    show: false
                }
            },
        },

    };

    var chart3 = new ApexCharts(document.querySelector("#apex-4"), options3);
    chart3.render();

});