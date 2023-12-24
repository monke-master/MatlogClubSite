
function isPageBottom() {
    const body = document.body;
    const html = document.documentElement;

   
    const windowHeight = window.innerHeight || html.clientHeight || body.clientHeight;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const scrollTop = window.pageYOffset || (html || body.parentNode || body).scrollTop;

   
    return docHeight - windowHeight - scrollTop <= 50; 
}


function fetchMoreContent() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block'; 

    
    setTimeout(function() {
        const content = document.querySelector('.content');

        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = '<p>Новое сообщение</p>'; 

        
        content.insertBefore(newPost, loader);

        loader.style.display = 'none'; 
    }, 0); 
}

function onScroll() {
    if (isPageBottom()) {
        fetchMoreContent();
    }
}

window.addEventListener('scroll', onScroll);
