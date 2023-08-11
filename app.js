const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controle');
const sectbtn = document.querySelectorAll('.control');
const all = document.querySelector('.main-content')

function pageTrans() {
    for(let i = 0; i < sectbtn.length; i++){
        sectbtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }

    //section active class
    all.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            // hide section
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        document.body.classList.toggle('light-mode')
    }
    )
}

pageTrans();