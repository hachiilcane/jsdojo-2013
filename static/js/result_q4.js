$(function() {

//    var graph1;
    var container = document.getElementById('editor-render-3');
    var data = [];

    console.log(result.total_satisfaction);

    Object.keys(result.total_satisfaction).map(function(key){
        var i = key - 1;
        data[i] = [i, result.total_satisfaction[key]];
    });


    Flotr.draw(container, [{
        data: [[0, result.total_satisfaction[1]]],
        label: '1'
    }, {
        data: [[0, result.total_satisfaction[2]]],
        label: '2'
    }, {
        data: [[0, result.total_satisfaction[3]]],
        label: '3'
    }, {
        data: [[0, result.total_satisfaction[4]]],
        label: '4'
    }, {
        data: [[1, result.total_satisfaction[5]]],
        label: '5'
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
