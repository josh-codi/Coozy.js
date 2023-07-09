const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
            // entry.target.classList.remove('coozy')
        }else{
            entry.target.classList.remove('animate')
            // entry.target.classList.add('coozy')
        }
    })
})

const hiddenElement = document.querySelectorAll('.coozy')
hiddenElement.forEach(el=>{
    console.log(el)
    observer.observe(el)
})