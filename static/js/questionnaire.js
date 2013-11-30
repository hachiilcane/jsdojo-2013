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
});

