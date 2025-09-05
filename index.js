const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        if(contents[index]) {
            contents.forEach(c => c.classList.remove('active'));
            contents[index].classList.add('active');
        }
    });
});
