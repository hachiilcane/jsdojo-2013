$(function() {

//    var graph1;
    var container = document.getElementById('editor-render-7');

//    console.log('init');
//    console.log(q1);
//    console.log(q1.d1);

    // Radar Labels
    ticks = [
        [0, "全体の満足度"],
        [1, "時間は足りましたか？"],
        [2, "会場の満足度はいかがでしたか？"],
        [3, "作ったものの完成度はいかがでした？"],
    ];

    // Draw the graph.
    graph = Flotr.draw(container, q8, {
        radar : { show : true},
        grid  : { circular : true, minorHorizontalLines : true},
        yaxis : {
            min : 0,
            max : 10,
            minorTickFreq : 2
        },
        xaxis : { ticks : ticks}
    });
});
