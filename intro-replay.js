/**
 * 隐藏入口：重播首页开场
 * · 连续三次点击 .scroll-watermark（左侧竖排小字）
 * · 或按住 Shift 再点击卷轴主标题 h1
 */
(function () {
    function replayIntro() {
        window.location.href = 'index.html?intro=1';
    }

    function bindTripleClick(el) {
        var count = 0;
        var timer = null;
        el.addEventListener('click', function () {
            count += 1;
            clearTimeout(timer);
            timer = setTimeout(function () {
                count = 0;
            }, 700);
            if (count >= 3) {
                count = 0;
                replayIntro();
            }
        });
    }

    document.querySelectorAll('.scroll-watermark').forEach(bindTripleClick);

    var title = document.querySelector('.scroll-container h1, .scroll-paper h1, .viewer-top h1');
    if (title && /姚鼐/.test(title.textContent)) {
        title.style.cursor = 'default';
        title.addEventListener('click', function (e) {
            if (e.shiftKey) {
                e.preventDefault();
                replayIntro();
            }
        });
    }
})();
