window.addEventListener('DOMContentLoaded', () => {

const deliveryBtn = document.querySelectorAll('.form-delivery__btn-delivery');
const deliveryContent = document.querySelectorAll('.delivery__tabs');
const btnParent = document.querySelector('.form-delivery__btn');


     function hideDeliveryContent() {
          deliveryContent.forEach(elem => {
               elem.style.display = 'none';
          });
          deliveryBtn.forEach(elem => {
               elem.addEventListener('click', (e) => {
                    e.preventDefault();
               })
               elem.classList.remove('active-btn');
          });
     }    
     hideDeliveryContent();

     function showDeliveryContent(i = 0) {
          deliveryContent[i].style.display = "block";
          deliveryBtn[i].classList.add('active-btn');
     }
     showDeliveryContent();

     
     btnParent.addEventListener('click', (event) => {
     const target = event.target;
          if (target && target.classList.contains('form-delivery__btn-delivery')) {
               deliveryBtn.forEach((item, i) => {
                    if (target == item) {
                         hideDeliveryContent();
                         showDeliveryContent(i);
                    }
               });
          }
     })

const payBtn = document.querySelectorAll('.form-pay__btn');
const payContent = document.querySelectorAll('.form-pay__btn-content');
const payBtnParent = document.querySelector('.form-pay__service-pay');



function hideContentBtn() {
     payContent.forEach(elem => {
          elem.style.display = 'none';
     });
     payBtn.forEach(elem => {
          elem.addEventListener('click', (e) => {
               e.preventDefault();
          })
          elem.classList.remove('active-btn');
     });
}
hideContentBtn();

function showContentBtn(i = 0) {
     payContent[i].style.display = 'block';
     payBtn[i].classList.add('active-btn');
}
showContentBtn();

payBtnParent.addEventListener('click', (event) => {
     const target = event.target;
     if (target && target.classList.contains('form-pay__btn')) {
          payBtn.forEach((elem, i) => {
               if (elem == target) {
                    hideContentBtn();
                    showContentBtn(i);
               }
          });
     }
} )

const orderBtn = document.querySelectorAll('.form-time__btn');
const orderContent = document.querySelectorAll('.form-time__content');
const orderParentBtn = document.querySelector('.form-time__service-del');

     function hideTimeContent() {
          orderContent.forEach(item => {
               item.style.display = 'none';
          });
          orderBtn.forEach(item => {
               item.addEventListener('click', (e) => {
                    e.preventDefault();
               })
               item.classList.remove('active-btn');
          })
     }
     hideTimeContent();

     function showTimeContent(i = 0) {
          orderContent[i].style.display = 'block';
          orderBtn[i].classList.add('active-btn');
     }
     showTimeContent();

     orderParentBtn.addEventListener('click', (even) => {
          const target = even.target;
          if (target && target.classList.contains('form-time__btn')) {
               orderBtn.forEach((item, i) => {
                    if (item == target) {
                         hideTimeContent();   
                         showTimeContent(i);
                    }
               })
          }
     })
});