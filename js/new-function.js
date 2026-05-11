$track.css("transform", "none");
          cardWidth = $cards.first().outerWidth(true);

         $(document).ready(function () {
        const $container = $(".carousel-container");
        const $track = $(".carousel-track");
        const $cards = $(".card");
        const $dotsTrack = $(".carousel-dots-track");
        const $arrows = $(".arrow");

        let currentIndex = 0;
        let maxIndex = 0;
        let cardWidth = 0;

        // 觸控變數
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        function initCarousel() {
          // 1. 取得精確的容器與卡片寬度
          const containerWidth = $container.width();

          // 暫時移除位移，確保抓到的寬度是原始狀態
           // 2. 計算目前畫面上「完整」能看到幾張卡片
          // 使用 Math.round 處理 calc 產生的微小浮點數誤差 (例如 2.0001)
          const visibleCards = Math.round(containerWidth / cardWidth);

          // 3. 計算最大索引：總數 - 畫面顯示數
          // 假設 6 張圖，一次看 2 張，最大索引就是 4 (可以滑 4 次)
          maxIndex = Math.max(0, $cards.length - visibleCards);

          // 4. 校正索引：如果縮放後 currentIndex 跑出去了，拉回來
          if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
          }

          // 5. 判斷箭頭顯示
          if (window.innerWidth < 576) {
            $arrows.hide();
          } else {
            $arrows.show();
          }

          renderDots();
          updateCarousel();
        }

        // --- 觸控邏輯優化 ---
        $track.on("touchstart", function (e) {
          if (window.innerWidth >= 576) return;

          isDragging = true;
          startX = e.originalEvent.touches[0].clientX;
          $track.css("transition", "none"); // 關閉動畫，手指跟隨
        });

        $(document).on("touchmove", function (e) {
          // 監聽 document 避免手指滑出範圍失效
          if (!isDragging) return;

          currentX = e.originalEvent.touches[0].clientX;
          const diff = currentX - startX;

          // 邊界阻力效果（可選）：滑到頭尾時滑動變慢
          let move = -currentIndex * cardWidth + diff;
          $track.css("transform", `translateX(${move}px)`);
        });

        $(document).on("touchend", function (e) {
          if (!isDragging) return;
          isDragging = false;

          $track.css("transition", "transform 0.5s ease-in-out");

          const diff = currentX - startX;

          // 判斷滑動位移
          if (diff < -50 && currentIndex < maxIndex) {
            currentIndex++;
          } else if (diff > 50 && currentIndex > 0) {
            currentIndex--;
          }

          updateCarousel();
          startX = 0; // 重置
          currentX = 0;
        });

        // --- 其他功能函數 (與先前邏輯一致) ---
        function renderDots() {
          $dotsTrack.empty();
          for (let i = 0; i <= maxIndex; i++) {
            $dotsTrack.append('<span class="dot"></span>');
          }
          $(".dot")
            .off("click")
            .on("click", function () {
              currentIndex = $(this).index();
              updateCarousel();
            });
        }

        function updateCarousel() {
          const offset = -currentIndex * cardWidth;
          $track.css("transform", `translateX(${offset}px)`);

          $(".dot").removeClass("active").eq(currentIndex).addClass("active");

          // 更新滾動點點位置
          const dotWidth = 16;
          let dotOffset = 0;
          if (currentIndex >= 2) {
            const moveIndex = Math.min(
              currentIndex - 2,
              Math.max(0, maxIndex + 1 - 5),
            );
            dotOffset = -moveIndex * dotWidth;
          }
          $dotsTrack.css("transform", `translateX(${dotOffset}px)`);

          $(".prev").css("opacity", currentIndex === 0 ? "0.3" : "1");
          $(".next").css("opacity", currentIndex >= maxIndex ? "0.3" : "1");
        }

        // 按鈕點擊
        $(".next").click(function () {
          if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
          }
        });

        $(".prev").click(function () {
          if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
          }
        });

        $(window).on("resize", initCarousel);
        initCarousel();
      });