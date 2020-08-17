export function sendRequest({
    url,
    method = 'GET', 
    body = null, 
    headers
}) {
    return new Promise((resolve, reject) => {
        // AJAX  
        const xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.responseType = 'json';

        for (const key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }

        xhr.addEventListener('load', () => {
            resolve(xhr.response);
        });

        xhr.addEventListener('error', e => {
            reject(e)
        });

        xhr.send(body);
    });
}