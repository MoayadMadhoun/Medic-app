let learnBtn= document.querySelector('.btn')

learnBtn.addEventListener('mouseover',function(){
    learnBtn.classList.replace('btn-info','btn-dark')
})
learnBtn.addEventListener('mouseout',function(){
    learnBtn.classList.replace('btn-dark','btn-info')
})
