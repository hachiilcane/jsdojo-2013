$(function() {

//    var graph1;
    var container = document.getElementById('editor-render-2');

//    console.log('init');
//    console.log(q3);
//    console.log(q3.d1);

    graph1 = Flotr.draw(container, [{
        data: q3.d1,
        label: 'Comedy'
    }, {
        data: q3.d2,
        label: 'Action'
    }, {
        data: q3.d3,
        label: 'Romance',
        pie: {
            explode: 50
        }
    }, {
        data: q3.d4,
        label: 'Drama'
    }], {
        HtmlText: false,
        grid: {
            verticalLines: false,
            horizontalLines: false
        },
        xaxis: {
            showLabels: false
        },
        yaxis: {
            showLabels: false
        },
        pie: {
            show: true,
            explode: 6
        },
        mouse: {
            track: true
        },
        legend: {
            position: 'se',
            backgroundColor: '#D2E8FF'
        }
    });
});
