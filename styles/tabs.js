const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const mainTabs = document.getElementById('main-tabs');
const mainContents = document.querySelectorAll('.main-contents');


const tab = () => {
    const changeClass = el => {
        for (let i = 0; i < tabs.children.length; i++) {
            tabs.children[i].classList.remove('active');
        }
        el.classList.add('active');
    }

    tabs.addEventListener('click', e => {
        const currTab = e.target.dataset.btn;
        changeClass(e.target);
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('active');
            if (content[i].dataset.content === currTab) {
                content[i].classList.add('active');
            }
        }
    });

    const changeMainClass = el => {
        for (let i = 0; i < mainTabs.children.length; i++) {
            mainTabs.children[i].classList.remove('active');
        }
        el.classList.add('active');
    }

    mainTabs.addEventListener('click', event => {
        const currMainTab = event.target.dataset.mainbtn;
        changeMainClass(event.target);
        for (let i = 0; i < mainContents.length; i++) {
            mainContents[i].classList.remove('active');
            if (mainContents[i].dataset.maincontent === currMainTab) {
                mainContents[i].classList.add('active');
            }
        }
    });
}

tab();