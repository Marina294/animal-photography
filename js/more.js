const defaultDispCnt = 6; // 初期表示件数
const addDispCnt = 6;     // 追加表示件数

(function ($) {
	$(function () {
		let maxDispCnt = 0;     // 最大表示件数
		let currentDispCnt = 0; // 現在の表示件数
		let productList = $('#productList').children('li'); // 一覧のli子要素をすべて取得

		setTimeout(function () {
			$('#section-center').stop().animate({
				opacity: 1
			}, {
				delay: 300,
				duration: 250
			});
		}, 150);

		// 一覧の初期表示
		$(productList).each(function (i, elem) {
			// 初期表示件数のみ表示
			if (i < defaultDispCnt) {
				$(this).show().css("display", "inline-block");
				currentDispCnt++;
			}
			maxDispCnt++;

			// もっと見るボタンを表示
			if (maxDispCnt > currentDispCnt) {
				$('.readMoreBtn').show().css("display", "table");
			}
		});

		// もっと見るボタンクリックイベント
		$('.readMoreBtn').click(function () {
			var newCount = currentDispCnt + addDispCnt; // 新しく表示する件数

			// 新しく表示する件数のみ表示
			$(productList).each(function (i, elem) {
				if (currentDispCnt <= i && i < newCount) {
					$(this).show().css("display", "inline-block");
					currentDispCnt++;
				}
			});

			// もっと見るボタンを非表示
			if (maxDispCnt <= newCount) {
				$(this).hide();
			}

			return false;
		});
	});
}(jQuery));
