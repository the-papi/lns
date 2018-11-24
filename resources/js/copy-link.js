import AWN from "awesome-notifications"

var options = {
    position: 'top-right'
}
let notifier = new AWN(options);

function copyToClipboard(elementId) {
    let element = document.createElement('textarea');
    element.value = document.getElementById(elementId).innerText;
    element.setAttribute('readonly', '');
    element.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
};

document.getElementById('copy-to-clipboard')
        .addEventListener('click', () => {
            notifier.success('Copied!');
            copyToClipboard('link');
        });
