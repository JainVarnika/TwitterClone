
//addimage
function showImage(src, target) {
  var fr = new FileReader();

   fr.onload = function(){
target.src = fr.result;
}
 fr.readAsDataURL(src.files[0]);

}
function putImage() {
  var src = document.getElementById("select_image");
  var target = document.getElementById("target");
  showImage(src, target);
}



//add post
let form=document.querySelector(".myForm");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log(ev);
    let input=document.querySelector("#inp");
    console.log(input.value);
    let value=input.value;
    addItem(value);
    input.value="";
})
function addItem(value){
    let ul=document.querySelector(".main-tweets");
    let li=document.createElement("div");
    li.classList.add("tweets");
    li.innerText=`${value}`;
    li.innerHTML=` <div class="tweets">
    <div class="user-pics"><img src="./img/profile.jpg" alt="user3"></div>
    <div class="user-content-box">
      <div class="user-names">
        <div class="user">
        <hi class="full-name">Vatsal Singh</hi>
        <p class="user-name">@vatsal.singh</p>
        <p class="time"> . 1min ago</p>
        </div>
        <button class="delete">X</i></button>
      
      </div>
      
      <div class="user-content">
        <p>${value}</p>
        <img id="target" />
      </div>

      <div class="content-icons">
        <i class="far fa-comment blue"> 0</i>
        <i class="fas fa-retweet green"> 0</i>
        <i class="far fa-heart red">1</i>
        <i class="fas fa-chevron-up blue"></i>
      </div>

    </div>
  </div>`;
  ul.insertBefore(li, ul.children[0]);
    
}



//delete post

let taskList=document.querySelector(".main-tweets");
taskList.addEventListener("click",function(ev){
    console.log(ev.target);
    console.log(ev);
    let currentElement=ev.target;
    let className=ev.target.className;
    console.log(className);
    if(className=='delete'){
        let item=currentElement.parentElement.parentElement.parentElement;
        console.log(item);
        item.remove();
    }
})

//followbtn
const btn = document.querySelector('.follow-btn');
btn.addEventListener('click', function handleClick() {
    btn.textContent = 'following';
  });
  const btn1 = document.querySelector('.follow-btn1');
  btn1.addEventListener('click', function handleClick() {
      btn1.textContent = 'following';
    });
    const btn2 = document.querySelector('.follow-btn2');
btn2.addEventListener('click', function handleClick() {
    btn2.textContent = 'following';
  });