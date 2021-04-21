//일단 사용자가 등록되는 동시에 해당 사용자가 있는지 없는지를 체크

const user = document.querySelector("#user");
const passWord = document.querySelector("#passWord");
const submit = document.querySelector("#submit");

function print(){
    const userID = user.value;
    const passWordPW = passWord.Value;
    console.log(userID);
    console.log(passWordPW);

} 
function init(){
    
    window.addEventListener("click",print)
    
}


init();