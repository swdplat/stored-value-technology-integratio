function getNoteDialog(id, lang, url) {
    let data = [];

    data.push({
        BlockID: id,
        Lang: lang
    });

    return getData(url, "POST", data);
}

function getData(iUrl, iType, iData) {
    let result = [];
    let dataJson = "";
    if (iData.length > 0) {
        dataJson = JSON.stringify(iData);
    }

    $.ajax({
        url: iUrl,
        type: iType,
        data: dataJson,
        async: false,
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        success: function (data, single) {
            result = data;
        },
        error: function (xhr) {
            console.log("Url : " + iUrl + " , msg : " + xhr.responseText);
        }
    });

    return result;
}

function getDataNew(token, iUrl, iType, iData = []) {
    let result = [];
    let dataJson = "";

    if (iData.length > 0) {
        dataJson = JSON.stringify(iData);
    }

    $.ajax({
        url: iUrl,
        type: iType,
        data: { __RequestVerificationToken: token, data: dataJson },
        async: false,
        dataType: "json",
    }).done(function (data) {
        result = data;
    }).fail(function (er) {
        console.log("Url : " + iUrl + " , msg : " + er.responseText);
    });

    return result;
}

//#region padLR 左/右邊補0
function padLR(type, str, slenght) {
    //先將str轉成文字，再算length才不會出錯
    str = str.toString();
    if (str.length >= slenght) {
        return str;
    }
    else {
        if (type.toLowerCase() == "left") {
            return padLR(type, "0" + str, slenght);
        }
        else {
            return padLR(type, str + "0", slenght);
        }
    }
}
//#endregion

//#region formatDate 時間格式轉換
function formatDate(str) {
    let n_date = new Date(str);
    return n_date.getFullYear() + "/" + padLR("left", (n_date.getMonth() + 1), 2) + "/" + padLR("left", n_date.getDate(), 2) + " " + padLR("left", n_date.getHours(), 2) + ":" + padLR("left", n_date.getMinutes(), 2) + ":" + padLR("left", n_date.getSeconds(), 2);
}
//#endregion

//#region localStorage相關
function readLocalStorage(k) {
    return window.localStorage[k];
}

function setLocalStorage(k, v) {
    window.localStorage.setItem(k, v);
}

function delLocalStorage(k) {
    localStorage.removeItem(k);
}
//#endregion