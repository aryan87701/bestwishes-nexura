vid = document.querySelector('.myVideo')
vidtext = document.querySelector('.section1')
beftext = document.querySelector('.section')
endtext = document.querySelector('.section2')
setTimeout(()=>{
    vid.classList.add("cumin")
    Vid.classList.remove("myVideo")
   
    
},7000)
setTimeout(()=>{
    vidtext.classList.add("section1c")
    vidtext.classList.remove("section1")   
},6000)
setTimeout(()=>{vidtext.classList.remove("section1c")
},12000)
setTimeout(()=>{beftext.classList.remove("section")
},6000)
setTimeout(()=>{endtext.classList.add("section2c")
},12000)


