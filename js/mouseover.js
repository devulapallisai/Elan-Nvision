let d=document.getElementById('logo');
let nav=document.getElementById('navigation')
d.addEventListener("mouseover",()=>
{
    nav.style.display="block";
})
nav.addEventListener("mouseleave",()=>
{
    nav.style.display="none";
})