$(document).ready(function () {
    // 帳號輸入框
    let accountField = $(".account_textbox");
    // 國碼下拉選單
    let countryCodeSelect = $('.country_code_selectbar');
    // 國碼下拉選項
    let countryCodeSelectOption = $('.country_code_selectbar option');
    // 國碼搜尋框
    let countryCodeSearch = $('.country_code_searchbar');
    // 時實搜尋列表
    let countryList = $('#countryList');
    let countries = [];

    // 輸入帳號
    function accountFieldKeyup(){
        var account = accountField.val();
        var pattern_phone = /^[0-9]*$/;
        var pattern_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // 通用格式
        if(account.length == 0){
            accountField.removeClass("mail");
            accountField.removeClass("phone");
        // 手機格式
        }if(account.length >= 1 && account.match(pattern_phone)){
            countryCodeSelect.show();
            countryCodeSelect.addClass("active");
            accountField.removeClass("mail");
            accountField.addClass("phone");
        // 信箱格式
        }else if(account.indexOf("@") >= 0 || account.indexOf(".") >= 0 || account.match(pattern_email)){
            countryCodeSelectOption.removeAttr('selected');
            countryCodeSelect.hide();
            countryCodeSelect.removeClass("active");
            accountField.removeClass("phone");
            accountField.addClass("mail");
        // 其他
        }else{
            countryCodeSelect.hide();
            countryCodeSelect.removeClass("active");
            accountField.removeClass("phone");
        }
    }

    // 點擊國碼下拉選單
    function countryCodeSelectClick(e) {
        // 阻止下拉選單列表的開啟
        e.preventDefault(); 
        // 清除搜尋框並顯示
        countryCodeSearch.val('').show().focus();
        // 顯示國碼列表
        countryList.show().empty();
        // 生成選項
        countries.forEach(function(country) {
            countryList.append('<li data-countrycode="' + country.countrycode + '|' + country.code + '">' + country.name + ' (' + country.code + ')</li>');
        });
    }

    // 實時搜索
    function countryCodeSearchInput(){
        var searchTerm = $(this).val().toLowerCase();
        countryList.show().empty();
        // 搜尋對應國碼
        countries.forEach(function(country) {
            if (country.name.toLowerCase().includes(searchTerm) || country.countrycode.toLowerCase().includes(searchTerm) || country.code.toLowerCase().includes(searchTerm)) {
                countryList.append('<li data-countrycode="' + country.countrycode + '|' + country.code + '">' + country.name + ' (' + country.code + ')</li>');
            }
        });
    }

    // 點擊搜尋項目
    function countryListClick(){
        var countryCodeData = $(this).data('countrycode').replace("+", "");
        $('.country_code_selectbar option').removeAttr('selected');
        $('.country_code_selectbar option[value="' + countryCodeData + '"]').prop('selected', true).trigger('change');
        countryCodeSearch.hide();
        countryList.hide();
    }

    // 搜尋框失去焦點時隱藏
    function countryCodeSearchBlur(){
        setTimeout(function() {
            countryCodeSearch.val('').hide();
            countryList.hide();
        }, 300);
    }

    // 綁定事件處理函數
    accountField.on('click keyup', accountFieldKeyup);
    countryCodeSelect.on('touchstart mousedown', countryCodeSelectClick);
    countryCodeSearch.on('input', countryCodeSearchInput);
    countryList.on('click', 'li', countryListClick);
    countryCodeSearch.on('blur', countryCodeSearchBlur);
});