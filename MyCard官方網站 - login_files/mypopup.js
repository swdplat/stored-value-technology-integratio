(function ($) {
    var
    defaults = {
        title: "系統訊息",
        btnName: "關閉",
        redirect: ""
    },
    pluginName = 'PopupBox',
    settings,
    init,
    publicMethod,
    $box,
    $content,
    $overlay,
    div = "div";

    function $tag(tag, id, css) {
        var element = document.createElement(tag);

        if (id) {
            element.id = id;
        }

        if (css) {
            element.style.cssText = css;
        }

        return $(element);
    }

    function appendHTML() {
        if (!$box && document.body) {
            init = false;
            $window = $(window);
            $box = $tag(div).attr({
                'class': 'popup-container'
            }).hide();
            $content = $tag(div).attr({
                'class': 'popup'
            }).append(
                $title = $tag("h2").text(defaults.title),
                $message = $tag(div).attr({ 'class': 'msg' }).append("<p></p>"),
                $button = $('<button class="btn">' + defaults.btnName + '</button>')
            );
            $overlay = $tag(div).attr({
                'class': 'overlay'
            });
            
            $(document.body).append($box.append($content, $overlay));
        }
    }

    function addBindings() {
        if ($box) {
            $(".popup-container .btn, .popup-container .overlay").click(function () {
                if (defaults.redirect == "") {
                    publicMethod.hide();
                }
                else {
                    console.log(defaults.redirect);
                    top.document.location.href = defaults.redirect;
                }
            });
            return true;
        }
        return false;
    }

    if ($.PopupBox) {
        return;
    }

    publicMethod = $.fn[pluginName] = $[pluginName] = function (options, callback) {
        var $this = this;

        options = options || {};
        settings = $.extend(defaults, options);

        appendHTML();
        addBindings();
        return $this;
    };

    publicMethod.show = function (msg) {
        $(".popup .msg p").text(msg);
        $(".popup-container").fadeIn();
    };

    publicMethod.hide = function () {
        $(".popup-container").fadeOut();
    };

    publicMethod.settings = defaults;
})(jQuery);

$(document).ready(function () {
    var Display = 0;
    var ApiUrl = "";
    var ErrorResult;

    let s = location.pathname;
    pathStrSplit = s.split('/');
    ApiUrl = "/" + pathStrSplit[1] + "/Error/ErrorMsgBox";

    $.ajax({
        url: ApiUrl,
        type: "Post",
        dataType: "json",
        success: function (response) {
            ErrorResult = response;
            Display = ErrorResult.Display;
        },
        error: function () {

        }
    }).done(function () {
        if (Display == "1") {
            if (ErrorResult.RedirectUrl == "") {
                $.PopupBox({
                    title: ErrorResult.BoxTitle,
                    btnName: ErrorResult.BtnName
                });
            }
            else {
                $.PopupBox({
                    title: ErrorResult.BoxTitle,
                    btnName: ErrorResult.BtnName,
                    redirect: Redirect
                });
            }
            $.PopupBox.show(decodeURI(ErrorResult.ErrorMsg));
        }
    });
});