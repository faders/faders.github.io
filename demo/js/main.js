// Banner轮播
document.addEventListener('DOMContentLoaded', function() {
    var banners = document.querySelectorAll('.banner-img');
    var dots = document.querySelectorAll('.dot');
    var prevBtn = document.querySelector('.banner-prev');
    var nextBtn = document.querySelector('.banner-next');
    var currentIndex = 0;
    var intervalId;
    
    // 显示指定索引的Banner
    function showBanner(index) {
        // 隐藏所有Banner
        banners.forEach(function(banner) {
            banner.classList.remove('active');
        });
        dots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        
        // 显示指定Banner
        banners[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    // 下一个Banner
    function nextBanner() {
        var nextIndex = (currentIndex + 1) % banners.length;
        showBanner(nextIndex);
    }
    
    // 上一个Banner
    function prevBanner() {
        var prevIndex = (currentIndex - 1 + banners.length) % banners.length;
        showBanner(prevIndex);
    }
    
    // 开始自动轮播
    function startAutoPlay() {
        intervalId = setInterval(nextBanner, 4000);
    }
    
    // 停止自动轮播
    function stopAutoPlay() {
        clearInterval(intervalId);
    }
    
    // 为圆点添加点击事件
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            stopAutoPlay();
            showBanner(index);
            startAutoPlay();
        });
    });
    
    // 为翻页按钮添加点击事件
    prevBtn.addEventListener('click', function() {
        stopAutoPlay();
        prevBanner();
        startAutoPlay();
    });
    
    nextBtn.addEventListener('click', function() {
        stopAutoPlay();
        nextBanner();
        startAutoPlay();
    });
    
    // 开始自动轮播
    startAutoPlay();
    
    // 汉堡菜单功能
    var navToggle = document.querySelector('.nav-toggle');
    var navList = document.querySelector('.nav-list.mobile-nav');
    var navOverlay = document.querySelector('.nav-overlay');
    
    if (navToggle && navList && navOverlay) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            navOverlay.classList.toggle('active');
        });
        
        navOverlay.addEventListener('click', function() {
            navList.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    }
    
    // 移动端二级菜单功能
    var mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            var parentLi = this.closest('.nav-item.has-dropdown');
            var dropdownMenu = parentLi.querySelector('.dropdown-menu');
            
            // 先关闭其他所有展开的菜单
            document.querySelectorAll('.nav-item.has-dropdown.active').forEach(function(item) {
                if (item !== parentLi) {
                    item.classList.remove('active');
                    item.querySelector('.dropdown-menu').classList.remove('active');
                }
            });
            
            parentLi.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
            
            // 确保样式生效
            if (dropdownMenu.classList.contains('active')) {
                dropdownMenu.style.display = 'block';
            } else {
                dropdownMenu.style.display = 'none';
            }
        });
    });
});
