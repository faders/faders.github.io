(function() {
  'use strict';

  /* ===== 日期 ===== */
  function updateDate() {
    var now = new Date();
    var week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    var s = now.getFullYear() + '年' + (now.getMonth()+1) + '月' + now.getDate() + '日 ' + week[now.getDay()];
    var el = document.getElementById('currentDate');
    if (el) el.textContent = s;
  }
  updateDate();

  /* ===== Banner 轮播 ===== */
  var slides = document.querySelectorAll('.slick-slide');
  var dotsContainer = document.getElementById('bannerDots');
  var current = 0;
  var timer = null;

  if (slides.length > 1 && dotsContainer) {
    for (var i = 0; i < slides.length; i++) {
      var li = document.createElement('li');
      if (i === 0) li.className = 'slick-active';
      li.addEventListener('click', (function(idx) {
        return function() { goTo(idx); };
      })(i));
      dotsContainer.appendChild(li);
    }

    function goTo(idx) {
      slides[current].classList.remove('active');
      dotsContainer.children[current].classList.remove('slick-active');
      current = idx;
      slides[current].classList.add('active');
      dotsContainer.children[current].classList.add('slick-active');
    }

    function next() {
      goTo((current + 1) % slides.length);
    }

    timer = setInterval(next, 4000);

    var banner = document.querySelector('.banner');
    if (banner) {
      banner.addEventListener('mouseenter', function() { clearInterval(timer); });
      banner.addEventListener('mouseleave', function() { timer = setInterval(next, 4000); });
    }
  }

  /* ===== 搜索 ===== */
  window.doSearch = function() {
    var kw = document.getElementById('keyword');
    if (kw && kw.value.trim()) {
      alert('搜索功能正在建设中，关键词：' + kw.value.trim());
    }
  };
  var kwInput = document.getElementById('keyword');
  if (kwInput) {
    kwInput.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) doSearch();
    });
  }

  /* ===== 移动端菜单 ===== */
  var navMod = document.querySelector('.nav-mod');
  var navToggle = document.getElementById('navToggle');

  if (navMod && navToggle) {
    navToggle.addEventListener('click', function() {
      var open = navMod.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? '收起导航' : '展开导航');
    });

    // 点击导航以外区域收起
    document.addEventListener('click', function(e) {
      if (window.innerWidth > 750) return;
      if (navMod.classList.contains('open') && !navMod.contains(e.target)) {
        navMod.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // 回到桌面尺寸时复位
    window.addEventListener('resize', function() {
      if (window.innerWidth > 750 && navMod.classList.contains('open')) {
        navMod.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 移动端二级菜单：手风琴展开
  var navItems = document.querySelectorAll('.wp_nav > .has-sub');
  Array.prototype.forEach.call(navItems, function(item) {
    var link = item.querySelector('a');
    if (!link) return;
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 750) {
        e.preventDefault();
        e.stopPropagation();
        var wasOpen = item.classList.contains('open');
        Array.prototype.forEach.call(navItems, function(other) {
          if (other !== item) other.classList.remove('open');
        });
        item.classList.toggle('open', !wasOpen);
      }
    });
  });

})();
