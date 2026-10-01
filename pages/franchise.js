const tabs = document.querySelectorAll('.franchise-tab-list button');
const panels = document.querySelectorAll('.franchise-panel');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });

        panels.forEach((panel) => {
            panel.classList.remove('active')
        });

        tab.classList.add('active');
        panels[index].classList.add('active');
    })
})