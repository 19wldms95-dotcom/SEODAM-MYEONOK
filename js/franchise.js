/* ========================================
   창업안내 탭
======================================== */

const tabList = document.querySelector('.franchise-tab-list');
const tabs = document.querySelectorAll('.franchise-tab-list button');
const panels = document.querySelectorAll('.franchise-panel');

const franchiseProcess = document.querySelector('.franchise-process');
const franchisePanels = document.querySelector('.franchise-panels');


// 원래 창업절차 위치 기억
const processParent = franchiseProcess.parentElement;
const processNextSibling = franchiseProcess.nextElementSibling;


// 모바일용 창업절차 패널 생성
let processPanel = null;
let processTab = null;


/* ========================================
   모바일 창업절차 탭 생성
======================================== */

function mobileFranchise() {

    if (window.innerWidth <= 430) {

        // 이미 만들어져 있으면 실행하지 않음
        if (processPanel) return;


        /* --------------------------------
           창업절차 탭 생성
        -------------------------------- */

        processTab = document.createElement('button');

        processTab.type = 'button';
        processTab.textContent = '창업절차';
        processTab.classList.add('active');


        // 기존 탭의 맨 앞에 추가
        tabList.prepend(processTab);


        /* --------------------------------
           창업절차 패널 생성
        -------------------------------- */

        processPanel = document.createElement('div');

        processPanel.classList.add(
            'franchise-panel',
            'franchise-process-panel',
            'active'
        );


        // 기존 창업절차 영역을 패널 안으로 이동
        processPanel.appendChild(franchiseProcess);


        // 기존 패널보다 앞에 추가
        franchisePanels.prepend(processPanel);


        /* --------------------------------
           기존 탭 상태 초기화
        -------------------------------- */

        document
            .querySelectorAll('.franchise-tab-list button')
            .forEach((tab) => {
                tab.classList.remove('active');
            });

        processTab.classList.add('active');


        /* --------------------------------
           기존 패널 상태 초기화
        -------------------------------- */

        document
            .querySelectorAll('.franchise-panel')
            .forEach((panel) => {
                panel.classList.remove('active');
            });

        processPanel.classList.add('active');


        /* --------------------------------
           새로 생긴 탭 이벤트
        -------------------------------- */

        processTab.addEventListener('click', () => {

            document
                .querySelectorAll('.franchise-tab-list button')
                .forEach((tab) => {
                    tab.classList.remove('active');
                });

            document
                .querySelectorAll('.franchise-panel')
                .forEach((panel) => {
                    panel.classList.remove('active');
                });

            processTab.classList.add('active');
            processPanel.classList.add('active');

        });


        /* --------------------------------
           기존 4개 탭 이벤트
        -------------------------------- */

        document
            .querySelectorAll('.franchise-tab-list button:not(:first-child)')
            .forEach((tab, index) => {

                tab.addEventListener('click', () => {

                    document
                        .querySelectorAll('.franchise-tab-list button')
                        .forEach((tab) => {
                            tab.classList.remove('active');
                        });

                    document
                        .querySelectorAll('.franchise-panel')
                        .forEach((panel) => {
                            panel.classList.remove('active');
                        });


                    tab.classList.add('active');


                    // 기존 패널은 0번부터 시작
                    const targetPanel =
                        document.querySelectorAll('.franchise-panel')[index + 1];

                    targetPanel.classList.add('active');

                });

            });

    }
}


/* ========================================
   모바일 → PC 복귀
======================================== */

function desktopFranchise() {

    if (window.innerWidth > 430 && processPanel) {

        // 창업절차를 원래 위치로 돌림
        processParent.insertBefore(
            franchiseProcess,
            processNextSibling
        );


        // 생성했던 패널 삭제
        processPanel.remove();

        processPanel = null;


        // 생성했던 탭 삭제
        if (processTab) {
            processTab.remove();
            processTab = null;
        }


        // 기존 4개 탭 상태
        const originalTabs =
            document.querySelectorAll('.franchise-tab-list button');

        originalTabs.forEach((tab) => {
            tab.classList.remove('active');
        });

        originalTabs[0].classList.add('active');


        // 기존 패널 상태
        const originalPanels =
            document.querySelectorAll('.franchise-panel');

        originalPanels.forEach((panel) => {
            panel.classList.remove('active');
        });

        originalPanels[0].classList.add('active');
    }
}


/* ========================================
   실행
======================================== */

mobileFranchise();

window.addEventListener('resize', () => {

    if (window.innerWidth <= 430) {
        mobileFranchise();
    } else {
        desktopFranchise();
    }

});


/* ========================================
   모바일 메뉴
======================================== */

const mobileMenuBtn =
    document.querySelector('.mobile-menu-btn');

const mobileMenu =
    document.querySelector('.mobile-menu');

const mobileMenuClose =
    document.querySelector('.mobile-menu-close');


// 햄버거 버튼 → 메뉴 열기
mobileMenuBtn.addEventListener('click', () => {

    mobileMenu.classList.add('active');

    document.body.style.overflow = 'hidden';

});


// X 버튼 → 메뉴 닫기
mobileMenuClose.addEventListener('click', () => {

    mobileMenu.classList.remove('active');

    document.body.style.overflow = '';

});