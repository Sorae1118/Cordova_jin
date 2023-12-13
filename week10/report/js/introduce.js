// 페이지가 로드될 때 실행되는 함수
$(document).ready(function() {
    // 앱 다운로드 버튼에 클릭 이벤트를 연결
    $(".header-download").click(function() {
        // 앱 다운로드 드롭다운을 토글
        $(".download-dropdown").toggle();
    });

    $(".header-menu img").click(function() {
        // 메뉴 드롭다운을 토글
        // 여기에 메뉴 아이콘을 클릭했을 때의 동작을 추가
        // 예를 들어, 메뉴가 열려있으면 닫고, 닫혀있으면 열기
        $(".menu-dropdown").stop().slideDown();
    });

    // 페이지 어느 곳이든 클릭했을 때 드롭다운이 열려있으면 닫기
    $(document).click(function(event) {
        if (!$(event.target).closest('.header-download').length && !$(event.target).closest('.download-dropdown').length) {
            $(".download-dropdown").hide();
        }
        // 메뉴가 열려있으면 닫기
        if (!$(event.target).closest('.header-menu').length && !$(event.target).closest('.menu-dropdown').length) {
            $(".menu-dropdown").hide();
        }
    });
});

// 다운로드 버튼 클릭 시 호출되는 함수 (이 예제에서는 더미 함수)
function downloadOption(option) {
    // 여기에 선택된 옵션에 따른 동작 추가
    console.log("다운로드 옵션: " + option);
}

// 페이지 이동
function applePage() {
    window.location.href = 'https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328';
}

function googleplayPage() {
    window.location.href = 'https://play.google.com/store/apps/details?id=viva.republica.toss&pli=1';
}

function mainPage() {
    window.location.href = "../index.html";
}

function introPage() {
    window.location.href = "introduce.html";
}

function chanPage() {
    window.location.href = "channel.html";
}

function mapPage() {
    window.location.href = "map.html";
}
