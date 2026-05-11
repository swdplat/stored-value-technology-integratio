document.addEventListener("DOMContentLoaded", function() {
    function setupTabSwitching(card) {
        // 判斷li數量 ul動態新增class list-tab (沒問題後可以刪除)
        // var titleTabs = card.querySelectorAll('.module-imgtext-title ul');
    
        // titleTabs.forEach(function(ul) {
        //     var liElements = ul.querySelectorAll('li');
        //     if (liElements.length > 1) {
        //         ul.classList.add('list-tab');
        //         liElements[0].classList.add('active');
        //     }
    
        //     liElements.forEach(function(li) {
        //         li.addEventListener('click', function() {
        //             liElements.forEach(function(otherLi) {
        //                 otherLi.classList.remove('active');
        //             });
        //             li.classList.add('active');
    
        //             // 找到相對應的標籤內容並切換其可見性
        //             var index = Array.from(li.parentElement.children).indexOf(li);
        //             var tabContents = card.querySelectorAll('.module-title-tab-content');
        //             tabContents.forEach(function(content, contentIndex) {
        //                 if (index === contentIndex) {
        //                     content.classList.add('active');
        //                     // 切換時確保第一個 module-tab-content 有 active，其他移除
        //                     var moduleTabContents = content.querySelectorAll('.module-tab-content');
        //                     moduleTabContents.forEach(function(tabContent, tabIndex) {
        //                         if (tabIndex === 0) {
        //                             tabContent.classList.add('active');
        //                         } else {
        //                             tabContent.classList.remove('active');
        //                         }
        //                     });
        //                 } else {
        //                     content.classList.remove('active');
        //                 }
        //             });
        //         });
        //     });
        // });

        // 判斷li數量 ul動態新增class list-tab
        var titleTabs = card.querySelectorAll('.module-imgtext-title ul');

        titleTabs.forEach(function(ul) {
            var liElements = ul.querySelectorAll('li');
            var moreItems = card.querySelectorAll('.my-font-module-title-moreitem');

            // 檢查 moreItems 的數量
            if (moreItems.length === 1) {
                // 如果只有一個 moreItem，直接加上 active
                moreItems[0].classList.add('active');
            } else if (moreItems.length > 1) {
                // 如果有多個 moreItem，初始化時設置第一個為 active
                moreItems.forEach(function(item, index) {
                    if (index === 0) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }

            // 處理 tab 邏輯
            if (liElements.length > 1) {
                ul.classList.add('list-tab');
                liElements[0].classList.add('active');
            }

            liElements.forEach(function(li) {
                li.addEventListener('click', function() {
                    // 移除所有 li 的 active class
                    liElements.forEach(function(otherLi) {
                        otherLi.classList.remove('active');
                    });
                    li.classList.add('active');

                    // 找到相對應的標籤內容並切換其可見性
                    var index = Array.from(li.parentElement.children).indexOf(li);
                    
                    // 切換 tab 內容
                    var tabContents = card.querySelectorAll('.module-title-tab-content');
                    tabContents.forEach(function(content, contentIndex) {
                        if (index === contentIndex) {
                            content.classList.add('active');
                            // 切換時確保第一個 module-tab-content 有 active，其他移除
                            var moduleTabContents = content.querySelectorAll('.module-tab-content');
                            moduleTabContents.forEach(function(tabContent, tabIndex) {
                                if (tabIndex === 0) {
                                    tabContent.classList.add('active');
                                } else {
                                    tabContent.classList.remove('active');
                                }
                            });
                        } else {
                            content.classList.remove('active');
                        }
                    });

                    // 只有當 moreItems 數量大於 1 時才進行切換
                    if (moreItems.length > 1) {
                        moreItems.forEach(function(item, itemIndex) {
                            if (index === itemIndex) {
                                item.classList.add('active');
                            } else {
                                item.classList.remove('active');
                            }
                        });
                    }
                });
            });
        });
    
        // 如果 module-imgtextbox 中有兩個內容，則將類別 'content' 替換為 'module-title-tab-content'
        var cardBoxes = card.querySelectorAll('.module-imgtextbox');
        cardBoxes.forEach(function(cardBox) {
            var cardBoxContents = cardBox.querySelectorAll('.content');
            if (cardBoxContents.length > 1) {
                cardBoxContents.forEach(function(content) {
                    content.classList.replace('content', 'module-title-tab-content');
                });
                cardBoxContents[0].classList.add('active');
            }
        });
    
        // 點擊 .my-tabs .my-tabs-box li 切換 .module-tab-content
        var myTabs = card.querySelectorAll('.module-title-tab-content .my-tabs .my-tabs-box');
        myTabs.forEach(function(tabsBox) {
            var tabs = tabsBox.querySelectorAll('li');
            tabs.forEach(function(tab) {
                tab.addEventListener('click', function() {
                    // 移除所有 tab 的 active 狀態
                    tabs.forEach(function(otherTab) {
                        otherTab.classList.remove('active');
                    });
                    // 當前 tab 加上 active 狀態
                    tab.classList.add('active');
    
                    // 切換對應的 .module-tab-content
                    var tabIndex = Array.from(tabsBox.children).indexOf(tab);
                    var moduleTabContents = tabsBox.closest('.module-title-tab-content').querySelectorAll('.module-tab-content');
                    moduleTabContents.forEach(function(moduleTabContent, index) {
                        if (index === tabIndex) {
                            moduleTabContent.classList.add('active');
                        } else {
                            moduleTabContent.classList.remove('active');
                        }
                    });
                });
            });
        });
    }
    
    // 找到所有 card 並對它們設置 tab 切換功能
    var cards = document.querySelectorAll('.module-imgtext');
    cards.forEach(function(card) {
        setupTabSwitching(card);
    });

    // 頁籤-超過範圍可滑動
    var curXPosTab = 0,
    curDownTab = false;

    var cardTabList = $(".module-imgtext-title h3 .list-tab");
    var isMouseOverTab = false;

    cardTabList.on("mouseenter", function() {
    isMouseOverTab = true;
    });

    cardTabList.on("mouseleave", function() {
    isMouseOverTab = false;
    });

    cardTabList.on("mousedown", function(e) {
    curDownTab = true;
    curXPosTab = e.pageX;
    });

    cardTabList.on("mouseup", function() {
    curDownTab = false;
    });

    cardTabList.on("mousemove", function(e) {
    if (isMouseOverTab === true && curDownTab === true) {
        cardTabList.scrollLeft(cardTabList.scrollLeft() + (curXPosTab - e.pageX));
        curXPosTab = e.pageX;
    }
    });

    // 藍色頁籤-超過範圍可滑動
    var curXPosBlueTab = 0,
    curDownBlueTab = false;

    var blueTabList = $(".tabs .my-tabs-box");
    var isMouseOverBlueTab = false;

    blueTabList.on("mouseenter", function() {
    isMouseOverBlueTab = true;
    });

    blueTabList.on("mouseleave", function() {
    isMouseOverBlueTab = false;
    });

    blueTabList.on("mousedown", function(e) {
    curDownBlueTab = true;
    curXPosBlueTab = e.pageX;
    });

    blueTabList.on("mouseup", function() {
    curDownBlueTab = false;
    });

    blueTabList.on("mousemove", function(e) {
    if (isMouseOverBlueTab === true && curDownBlueTab === true) {
        blueTabList.scrollLeft(blueTabList.scrollLeft() + (curXPosBlueTab - e.pageX));
        curXPosBlueTab = e.pageX;
    }
    });
});
/**/