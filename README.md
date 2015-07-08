## 웹 접근성을 고려한 jQuery 플러그인 제작 과정

- [01일차 내용 요약](DOC/DAY01.md)
- [02일차 내용 요약](DOC/DAY02.md)
- [03일차 내용 요약](DOC/DAY03.md)
- [04일차 내용 요약](DOC/DAY04.md)
- [05일차 내용 요약](DOC/DAY05.md)
- [06일차 내용 요약](DOC/DAY06.md)
- [07일차 내용 요약](DOC/DAY07.md)
- [08일차 내용 요약](DOC/DAY08.md)
- [09일차 내용 요약](DOC/DAY09.md)
- [10일차 내용 요약](DOC/DAY10.md)
- [11일차 내용 요약](DOC/DAY11.md)
- [12일차 내용 요약](DOC/DAY12.md)

---

## 과정 복습

1. **프로젝트 폴더 생성**
	```sh
	.
	├── css
	│   └── style.css
	├── images
	├── index.html
	└── js
	    └── index.js
	```

2. **라이브러리 폴더 생성 및 다운로드**
	- `js/libs/` 폴더 생성
	- [Modernizr](http://modernizr.com/)
	- [Detectizr](https://github.com/barisaydinoglu/Detectizr/)
	- [RequireJS](http://requirejs.org/)
	- [jQuery](https://jquery.com/)

3. **RequireJS 활용 준비**
	- `require.js` 호출
	- `data-main` 속성에 메인 자바스크립트(`main.js`) 설정

4. **RequireJS 환경 설정**
	- `baseUrl`
	- `paths`
	- `shim`
	- `waitSeconds`
	- `urlArgs`

5. **사용자정의 플러그인/라이브러리 추가**
	- [`jquery.utils.js`](src/js/utils/jquery.utils.js) 등

6. **플러그인 폴더/파일 생성**
	- `js/plugins/`
	- `js/plugins/jquery.{{plugin}}.js`
	- `js/plugins/jquery.{{plugin}}.css` (플러그인 테마 파일: 옵션)

7. **플러그인 코드 준비**
	- AMD `define()` 코드 작성 및 의존성 관리 (jQuery UI 팀 ─ RequireJs/AMD 사용 [#](http://learn.jquery.com/jquery-ui/environments/amd/))
	- 플러그인 존재 유무 조건문 작성 `!jquery.{{plugin}}`
	- `jQuery.prototype` 인스턴스 메소드 확장 플러그인 코드 작성
	- 플러그인 함수 내, this 객체 참조 (this === jQuery 인스턴스 객체)
	- jQuery 구문 체이닝을 위한 `return` 처리 (복수 적용일 경우, `$.each()` 활용)
	- 플러그인 기본 옵션 및 사용자 정의 설정 덮어쓰기 설정 (`$.extend()` 활용)

8. **플러그인 코드 디자인**
	- 구현하고자 하는 플러그인 기능 목록 정리
	- `접근성`/`사용성`/`성능`을 고려하여 플러그인 코드 작성

9. **플러그인 코드 리팩토링**
	- 절차지향 방식 코드로 작성한 경우, 객체지향 코드로 전환 (객체지향을 선호한다면: 옵션)
	- 작성된 코드에서 수정되거나, 정리될 구문을 찾아 변경

10. **플러그인 테스트**
	- `test/` 폴더 및 `test/test.js` 파일 생성
	- TDD 방식의 QUnit 도구 호출
		- `test/qunit/qunit.js`
		- `test/qunit/qunit.css`
	- 테스트 코드 작성
	```js
	// 테스트 모듈 정의
	QUnit.module();
	// 테스트
	QUnit.test('테스트 메시지', function(assert){
		assert.ok(); // equal(), strictEqual();
	});
	```

11. **플러그인 빌드**
	- 개발용 플러그인 코드로부터 배포용 플러그인 코드로 빌드

12. **플러그인 배포**
	- [gitHub](http://github.com/) 본인 계정에 `Publish` 또는 `Sync`
	- 버전 관리 및 버그 수정
	- 기능 추가

---

### 내비게이션바 jQuery 플러그인 제작

#### 참고 URL

###### 국내
- [OCN](http://ch.interest.me/ocn)
- [daumkakao](http://www.daumkakao.com/main)
- [privacy.daumkakao](http://privacy.daumkakao.com/main)
- [KIPFA](http://www.kipfa.or.kr/)
- [홈플러스](http://direct.homeplus.co.kr/)
- [위메프](http://www.wemakeprice.com/)
- [콘텐츠코리아랩](https://www.ckl.or.kr:446/www/main/userMain/main.do)

###### 국외
- [jquery](http://jquery.com/)
- [phonegap](http://phonegap.com/)
- [cordova](https://cordova.apache.org/)
- [angularjs](https://www.angularjs.org/)
- [goal.com](http://www.goal.com/en/)
- [forbes](http://www.forbes.com/)

#### 내비게이션 제작을 위한 고려사항
[접근성/사용성 높은 내비게이션 제작 방법](/DOC/DAY11.md#내비게이션-위젯에-접근성-향상을-위한-wai-aria-적용)