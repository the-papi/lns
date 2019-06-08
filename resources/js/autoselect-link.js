export function selectText(containerId) {
    let range;
    let element = document.getElementById(containerId);

    if (element) {
        if (document.selection) { // IE
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            range = document.createRange();
            range.selectNode(element);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
    }
}

selectText('link');
