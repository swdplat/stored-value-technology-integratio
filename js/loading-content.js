// loading-content.js
(function() {
    /**
     * 動態載入載入內容畫面結構和其相關 CSS 到頁面中。
     * @param {string} targetSelector - 載入畫面要插入的目標選擇器，例如 'body'。
     * @param {string} cssUrl - loading-content.css 檔案的路徑。
     */
    window.initLoadingContent = function(targetSelector = 'body', cssUrl = 'css/loading-content.css') {
        const loadingHtml = `
            <div class="my-overlay overlay-content">
                <div class="loading-content">
                    <div class="snippet" data-title="dot-pulse">
                        <div class="stage">
                            <div class="dot-pulse"></div>
                        </div>
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

            // 2. 插入載入畫面 HTML
            targetElement.insertAdjacentHTML('afterbegin', loadingHtml);

            // The original HTML included scripts for clipboard functionality and tooltips.
            // These are generally not part of a "loading" animation's core functionality
            // and might depend on external libraries (like ClipboardJS).
            // If they are strictly needed with the loading animation, they should be
            // handled carefully, perhaps by ensuring ClipboardJS is loaded before calling
            // this function, or by re-evaluating if they truly belong with the loading content.
            // For a simple loading animation, they are typically omitted.

            // If you need the tooltip and clipboard functionality to be associated
            // with the loading spinner itself (which is unusual), you would
            // re-include and ensure ClipboardJS is available.
            // For now, these are omitted as they seem unrelated to just displaying a loading animation.

        } else {
            console.warn(`目標元素 '${targetSelector}' 未找到，無法載入載入內容畫面。`);
        }
    };

    /**
     * 隱藏並移除載入內容畫面。
     */
    window.hideLoadingContent = function() {
        const loadingElement = document.querySelector('.my-overlay.overlay-content');
        if (loadingElement) {
            loadingElement.style.opacity = '0';
            loadingElement.style.transition = 'opacity 0.5s ease-out';
            loadingElement.addEventListener('transitionend', function() {
                loadingElement.style.display = 'none';
                loadingElement.remove();
            }, { once: true });
        }
    };

})();