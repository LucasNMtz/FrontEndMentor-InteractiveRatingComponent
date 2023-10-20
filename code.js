const buttonOptions = document.querySelectorAll(".option-buttons");

const submit = document.querySelector("#submit-button");

let thankYouSection = document.querySelector(".thank-you-section");

let userRating = document.querySelector("#user-rating");

const closeButton = document.querySelector("#close-thank-you-section")

buttonOptions.forEach((option)=>{
    option.addEventListener('click', ()=>{

        userRating.textContent = option.textContent;
    })
})

submit.addEventListener('click', ()=>
{
    if(thankYouSection.style.display === "none" || thankYouSection.style.display === "") 
    {
        thankYouSection.style.display = "flex";
        closeButton.style.display = "inline-block";
    }
})

closeButton.addEventListener('click', ()=>
{
    if(thankYouSection.style.display === "flex") 
    {
        thankYouSection.style.display = "none";
        closeButton.style.display = "none";
    }
})