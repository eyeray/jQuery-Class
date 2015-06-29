define(['jquery'], function() {
	'use strict';

	// 플러그인 이름 설정
	var plugin = 'skipNav';

	// 플러그인 존재 유무 확인
	if( !$.fn[plugin] ) {

		// 플러그인 정의
		$.fn[plugin] = function(options) {

			// 플러그인 기본 + 사용자정의 옵션 병합
			var settings = $.extend({}, $.fn[plugin].defaults, options);

			// 플러그인이 적용된 $() 인스턴스 집합
			var $this = this;

			// 플러그인 적용 대상이 하나일 때, 체이닝 설정
			// return this;

			// 플러그인 적용 대상이 하나 이상일 때, 체이닝 설정
			return $.each($this, function(index, el) {
				// 플러그인이 적용될 개별 $() 인스턴스 객체(DOM 객체 참조)
				var $el = $this.eq(index);

			});
		}


		// 플러그인 기본 옵션 설정
		$.fn[plugin].defaults = {

		};
	}

});