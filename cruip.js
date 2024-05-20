let clickMenu = document.querySelector('.header_resBox');
let headerMenu = document.querySelector('.header_resBox_menu_container');
let input=document.querySelector('.pageLoginBox_formBox_input')
let inputBtn=document.querySelector('.pageLoginBox_formBox_btn')
let notification=document.querySelector('.notification')
let accordionTitles = document.querySelectorAll('.pageInformationParagrapsBox_card_main_accardion_card_title');
let signUpCloseIcon=document.querySelector('.signUp_closeIcon')
let signInCloseIcon=document.querySelector('.signIn_closeIcon')
let signUpBtn=document.querySelector('.header_right_singUp')
let signInBtn=document.querySelector('.header_right_singIn')
let sighUpCard=document.querySelector('.signIn_container')
let sighInCard=document.querySelector('.signUp_container')
let signUpInput=document.querySelectorAll('.signUp_formBox_input')
let signUpSubmitBtn=document.querySelector('.signUp_Btn')

signUpBtn.addEventListener('click',function(){
     sighUpCard.style.marginTop="0px"
})

signInBtn.addEventListener('click',function(){
     sighUpCard.style.marginTop="0px"
})
signUpCloseIcon.addEventListener('click',function(){
     sighUpCard.style.marginTop="-650px"
})
signInCloseIcon.addEventListener('click',function(){
     sighUpCard.style.marginTop="-650px"
})

clickMenu.addEventListener('click',function(){
    if (headerMenu.style.marginTop === "-250px") {
        headerMenu.style.marginTop = "0px";
   } else {
        headerMenu.style.marginTop = "-250px";
   }
})

signUpSubmitBtn.addEventListener('click',function(){
     if(signUpInput.value==0){
          alert('Please login')  
     }
     else{
          SingUpInputValue=signUpInput.value
          console.log(SingUpInputValue);
          signUpInput.value=''
               notification.style.display="block"  
          setTimeout(() => {
               notification.style.display="none"  
          }, 1500);
     }
})

inputBtn.addEventListener('click',function(e){
     if(input.value==0){
          alert('Please login')  
     }
     else{
          e.preventDefault()
          inputValue=input.value
          console.log(inputValue);
          input.value=''
               notification.style.display="block"  
          setTimeout(() => {
               notification.style.display="none"  
          }, 1500);
     }
})

accordionTitles.forEach(title => {
     title.addEventListener('click', function() {
         const accardionIcon = this.querySelector('.pageInformationParagrapsBox_card_main_accardion_card_title_icon');
        const content = this.nextElementSibling;
        if(content.style.display==='none'){
          content.style.display='block'
          accardionIcon.style.transform = `rotate(180deg)`;
          }
          else{
               content.style.display='none' 
               accardionIcon.style.transform = `rotate(0deg)`;
          }
     });
});