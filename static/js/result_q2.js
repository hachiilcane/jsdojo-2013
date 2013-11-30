$(function() {

//    var graph1;
    var container = document.getElementById('editor-render-1');

//    console.log('init');
//    console.log(q2);
//    console.log(q2.d1);

    graph1 = Flotr.draw(container, [{
        data: q2.d1,
        label: 'Yes'
    }, {
        data: q2.d2,
        label: 'No'
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
