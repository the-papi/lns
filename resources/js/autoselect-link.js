function selectText(containerId) {
    let range;
    if (document.selection) { // IE
        range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerId));
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(document.getElementById(containerId));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

selectText('link');
