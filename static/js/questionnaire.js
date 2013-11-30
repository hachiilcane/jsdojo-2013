jQuery(function ($) {
  $('#submit').on('click', function() {
    $.post("/send", $("#questionnaire").serialize())
      .done(function() {
	alert("OK!");
      })
      .fail(function() {
	alert("アンケート結果送信に失敗しました。");
      });
  });
});

