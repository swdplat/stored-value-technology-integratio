$(document).ready(function(){
    $('.my-member-quick-otherFunctions-btn').click(function(){
        $('.my-member-quick-otherFunctions-list').toggleClass('my-flex-column');
        $('.my-member-quick-otherFunctions').toggleClass('list-fourCardType');
        $('.btn-fourCardType').toggleClass('show');
        $('.btn-itemizedType').toggleClass('show');
    });
    /*quick*/
    $('#btn-quick-electAvatar').click(function(){
        $('#quick-electAvatar').toggleClass("show-b");
    });
    function hidden(str, fronLen, endLen){
        var leg = str.length - frontLen - endLen;
        var xing = "";
        for(var i=0; i<len;i++){
            xing += "*";
        }
        return(
            str.substring(0,fronLen) + xing + str.substring(str.length - endLen)
        );
    }
    /*整理到設計系統*/
    //彈窗-更換頭像-選取
    $('.my-modal-body .faceImg-item').click(function(){
        $('.my-modal-body .faceImg-item').not(this).removeClass('click');
        $(this).addClass('click');
        $('.my-modal-footer .my-btn-main').removeClass('my-btn-disabled');
    });
    //Quick-眼睛隱碼
    $('.my-member-quick-points .iconBox').click(function(){
        var $parentContainer = $(this).closest('.swiper-slide');
        $parentContainer.find('.btn-eyeOn').toggleClass('show');
        $parentContainer.find('.btn-eyeOff').toggleClass('show');
    });
});