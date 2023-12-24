function loadDynamicContent() {
    const dynamicContent = `
        <em>Зацените нереальный рисунок карандашом   
        <a href="https://monke-master.github.io/Project21KR/html/main.html">по ссылке</a>
         или перейдите на мой github <a href="https://github.com/monke-master/Project21KR"><i>🔍</i></a></em>
    `;
    document.getElementById('contents').innerHTML = dynamicContent;
}

document.addEventListener('DOMContentLoaded', function() {
    loadDynamicContent();
});

document.getElementById('contents').addEventListener('click', function(event) {
    let targetElement = event.target;

    while (targetElement && targetElement !== this) {
        if (targetElement.tagName === 'A') {
            const confirmation = confirm('Вы уверены, что хотите покинуть страницу?');
            if (!confirmation) {
                event.preventDefault();
            }
            return;
        }
        targetElement = targetElement.parentNode;
    }
});
