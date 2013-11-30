$(function() {

//    var graph1;
    var container = document.getElementById('editor-render-4');

//    console.log('init');
//    console.log(q1);
//    console.log(q1.d1);

    graph1 = Flotr.draw(container, [{
        data: q1.d1,
        label: '1回目'
    }, {
        data: q1.d2,
        label: '2回目'
    }], {
        HtmlText: true,
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
            relative : true,
            track: true
        },
        legend: {
            position: 'se',
            backgroundColor: '#D2E8FF'
        }
    });
});
