/*===========show hide menu======*/
        const navMenu=document.getElementById('nav-menu'),
            navToggle=document.getElementById('nav-toggle'),
            navClose= document.getElementById('nav-close');

        /*======Menu Show=========*/
        if(navToggle){
            navToggle.addEventListener('click', ()=>{
                navMenu.classList.add('show-menu')
            })
        }
        /*======Menu hide=========*/
        if(navClose){
            navClose.addEventListener('click', ()=>{
                navMenu.classList.remove('show-menu')
            })
        }
        /*======Remove Menu Mobile==========/*/
        const navLink= document.querySelectorAll('.nav_link')

        function linkAction()
        {
            const navMenu=document.getElementById('nav-menu')
            //when click on nav_link, remove show menu class
            navMenu.classList.remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction));

// ACORDION SKILLS

const skillsContent=document.getElementsByClassName('skills_content'),
      skillsHeader=document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass=this.parentNode.className

    for(i=0; i<skillsContent.length;i++)
    {
        skillsContent[i].className='skills_content skills_close'
    }
    if(itemClass==='skills_content skills_close'){
        this.parentNode.className='skills_content skills_open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

// QUALIFICATIONS TABS
const tabs=document.querySelectorAll('[data-target]'),
      tabContents=document.querySelectorAll('[data-content]');

      tabs.forEach(tab =>{
        tab.addEventListener('click',()=>{
            const target=document.querySelector(tab.dataset.target)
            
            tabContents.forEach(tabContents =>{
                tabContents.classList.remove('qualification_active')
            })
            target.classList.add('qualification_active')

            tab.forEach(tab=>{
                tab.classList.remove('qualification_active')
            })
            tab.classList.add('qualification_active')
        })
      })

    //SERVICES MODAL

    const modalViews=document.querySelectorAll('.services_modal'),
          modalBtns=document.querySelectorAll('.services_button'),
          modalClose=document.querySelectorAll('.services_modal-close');

    let modal=function(modalClick){
        modalViews[modalClick].classList.add('active-modal')
    }

    // open modal
    modalBtns.forEach((modalBtn,i)=>{
        modalBtn.addEventListener('click', ()=>{
            modal(i)
        })
    })

    modalClose.forEach((modalClose) =>{
        modalClose.addEventListener('click', ()=>{
            modalViews.forEach((modalView)=>{
                modalView.classList.remove('active-modal')
            })
        })
    })


    // PORTFOLIO SWIPPER
      var swiper = new Swiper(".portfolio_container", {
        cssMode: true,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },  
      }); 

// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//SHOW SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
    