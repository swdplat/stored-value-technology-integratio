// loadWelcome.js
(function() {
    /**
     * 動態載入歡迎載入畫面結構和其相關 CSS 到頁面中，
     * 並在指定時間後隱藏，同時顯示頁面內容。
     * @param {string} targetSelector - 載入畫面要插入的目標選擇器，例如 'body'。
     * @param {number} delay - 載入畫面隱藏的延遲時間（毫秒），預設為 500ms。
     * @param {string} cssUrl - loading-welcome.css 檔案的路徑。
     */
    window.initWelcomeScreen = function(targetSelector = 'body', delay = 500, cssUrl = 'https://image.mycard520.com/globalmycard/member/mycardweb-test/947-59693957/ver3/css/loading-welcome.css') {
        const loadingHtml = `
            <div class="loading-welcome">
                <div class="loading-welcome-container">
                    <div class="content">
                        <h1>Welcome to MyCard</h1>
                        <div class="shape"></div>
                    </div>
                </div>
            </div>
            `;

        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            // 1. 動態載入 CSS 檔案
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssUrl;
            document.head.appendChild(link);

            // 2. 立即插入載入畫面 HTML
            targetElement.insertAdjacentHTML('afterbegin', loadingHtml); // 使用 afterbegin 確保在目標元素內部最前面

            // 3. 隱藏頁面主要內容，防止閃爍
            // 您可能需要在您的主 CSS 中為 #webpage 添加 opacity: 0; 或 visibility: hidden;
            const mainContent = document.querySelector('#index.webpage'); 
            if (mainContent && mainContent.style.opacity === '') { // 避免重複設定
                mainContent.style.opacity = '0';
                mainContent.style.transition = 'opacity 0.5s ease-in-out'; // 為內容顯示添加過渡
            }

            // 4. 使用 jQuery 或原生 JS 處理載入畫面隱藏和內容顯示
            if (typeof jQuery !== 'undefined') {
                jQuery(window).on('load', function() { // 確保所有頁面資源（包括圖片、新載入的 CSS）載入完成
                    setTimeout(function() {
                        jQuery('.loading-welcome').fadeOut(function() {
                            jQuery(this).remove(); // 移除載入畫面元素

                            // 顯示頁面主要內容
                            if (mainContent) {
                                jQuery(mainContent).animate({ opacity: 1 }, 500); // jQuery 淡入
                            }
                        });
                    }, delay);
                });
            } else {
                window.addEventListener('load', function() { // 確保所有資源載入完成
                    setTimeout(function() {
                        const loadingElement = document.querySelector('.loading-welcome');
                        if (loadingElement) {
                            // 淡出載入畫面
                            loadingElement.style.opacity = '0';
                            loadingElement.style.transition = 'opacity 0.5s ease-out';
                            loadingElement.addEventListener('transitionend', function() {
                                loadingElement.style.display = 'none';
                                loadingElement.remove(); // 移除元素

                                // 顯示頁面主要內容
                                if (mainContent) {
                                    mainContent.style.opacity = '1'; // 原生 JS 淡入，依賴 CSS transition
                                }
                            }, { once: true });
                        }
                    }, delay);
                });
            }
        } else {
            console.warn(`目標元素 '${targetSelector}' 未找到，無法載入歡迎畫面。`);
        }
    };
})();