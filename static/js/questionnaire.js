jQuery(function ($) {
  $('#questionnaire').on('submit', function(e) {
    e.preventDefault();

    $.post("/send", $("#questionnaire").serialize())
      .done(function() {
        alert("ご協力ありがとうございました！");
      })
      .fail(function() {
        alert("アンケート結果送信に失敗しました。");
      });
  });

  $( "#slider_total_satisfaction" ).slider({
    range: "min",
    min: 1,
    max: 5,
    value: 3,
    slide: function( event, ui ) {
      $( "#total_satisfaction" ).val( ui.value );
    }
  });
  $( "#total_satisfaction" ).val( $( "#slider_total_satisfaction" ).slider( "value" ) );
});

