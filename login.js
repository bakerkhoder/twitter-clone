addEventListener("load",()=>{
 const popupbtn=document.getElementById("popupbtn")
 const popup=document.getElementById("popup")
 const darkenmask=document.getElementById("page-mask")

 
 popupbtn.addEventListener("click",()=>{
    console.log("hi")
    popup.classList.add("display")
    darkenmask.classList.add("page-mask")
 }) 
    
 
    

})



