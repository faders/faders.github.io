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
});
