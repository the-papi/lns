import {initCopyToClipboard} from "./copy_link";
import {selectText} from "./autoselect-link";

let form = document.getElementById('short-link-form');

if (form) {
    form.addEventListener('submit', (e) => {
        let xhr = new XMLHttpRequest();
        let url = document.getElementById("url").value
        e.preventDefault();

        xhr.open('POST', '/');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText)

                if (data.status == 'ok') {
                    let shortenedLink = document.getElementById('shortened-link-template')
                                                .firstElementChild.cloneNode(true);
                    shortenedLink.firstElementChild.innerHTML = data.data.url;
                    shortenedLink.firstElementChild.id = 'link';
                    shortenedLink.lastElementChild.id = 'copy-to-clipboard';

                    document.getElementById("short-link-form-wrapper").parentNode.appendChild(shortenedLink);
                    document.getElementById("short-link-form-wrapper").classList.add('hidden');

                    initCopyToClipboard();
                    selectText('link')

                    window.history.pushState(null, document.title, data.data.address_bar);
                }
            }
        };
        xhr.send(encodeURI('url=' + url));
    });
}

window.addEventListener('popstate', function(e) {
    console.log(e)
    if (!e.state) {
        location.reload();
    }
});
