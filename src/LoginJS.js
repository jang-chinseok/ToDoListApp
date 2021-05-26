//import "./toDoList.js";

const loginForm = document.querySelector('#login-formID');
const user = document.querySelector('.user');
const PW = document.querySelector('.passWord');

const title = document.querySelector('.title');
const submit = document.querySelector('.submitjs');

//문자.    string  ajsnfjhnxkfnalns arry[2314,123124,24142,124,112,24444,44441,24155]
//                                      [1233, ddajfn, "asjdhnjn" ,{},[]]

//                                  object {ID}

let list =[];
const fakeDB = [];




const sample = {
                
                userData:   { 
                            fe :"dd" , //샘플용 ID/PW   
                            fU :"dI" 
                            },

                body : {                    // todolist에 내보낼 내용들에 대한 컨테이너, ID별로 분류되어 있음.
                            fe :[ 
                                    {      //인덱스 번호를 색인의 
                                        title:"project service recompose", 
                                        deta : "need to recompose service of porject, there is kind of problum sorting",
                                        date : [2024, 11, 23  ,23,33],
                                        composeDate: [2022,1,22, 2,55]         
                                    },

                                    {
                                        title:"kill the boss", 
                                        deta : "get som bombs to explosion th boss if it not works get som gun for it",
                                        date : [2024, 12, 23  ,13,33],
                                        composeDate: [2022,1,24, 2,25]

                                    },
                                    
                                    {
                                        title:"fie calculate", 
                                        deta : "you need to calculate pie for chocolate. the main topik is space of pie",
                                        date : [2024, 7, 23  ,3,33],
                                        composeDate: [2022,6,22, 2,11]

                                    },
                                    
                                    {
                                        title:"gte fie", 
                                        deta : "",
                                        date : [2024, 2, 23  ,1,33],
                                        composeDate: [2022,3,3, 2,6]

                                    },

                                    {
                                        title:"fualll", 
                                        deta : "fuall it but not it",
                                        date : [2024, 3, 23  ,2,33],
                                        composeDate: [2022,12,19, 2,0]

                                    },

                                    {
                                        title:"fire geek", 
                                        deta : "get fuck it's so geek, get more larger place to do it",
                                        date : [2024, 1, 23  ,22,43],
                                        composeDate: [2022,10,12, 12,2]

                                    },
                                    {
                                        title:"fire krekers", 
                                        deta : "불꽃놀이를 즐기기 위한 폭죽을 구해라.",
                                        date : [2024, 4, 23  ,1,60],
                                        composeDate: [2022,1,29, 7,50]

                                    },
                                ],
                                   

                            fu :    {
                                    title:["ASSe"], 
                                    detail:["sadzxaafssssasdddddddddddddddddd"], 
                                    date :[2,30,2022, 2,30 ], composeDate:[2022,1,22, 2,50]}

                                    }
                };






let sampleID = NaN;
let samplePW = NaN;

function getKey(event){       //ID와 PW에 대해서매칭하는 과정을 헨들하는 함수.
    
    event.preventDefault();
    
    console.log("geting KEY");
    sampleID = user.value;
    samplePW = PW.value;
    console.log(sampleID,samplePW);
    chackYouserDB(sampleID,samplePW);   //실질적으로 체크하는 함수
    ToDolistPainter();      
               //화면에 DOM요소를 출력해주는 함수.
}

function ToDolistPainter(textS){
    console.log(list); 
    paintToDo(textS);     //디버깅용
    
}
const listViewer = document.querySelector(".imFo_list");
const listview = document.querySelector("#container");

function chackYouserDB(IDc,PWc){

    console.log("검사중",IDc,PWc);
    if( IDc in sample.userData && PWc==sample.userData[IDc] ){  //로그인 성공시의 IF
        console.log("로그인 성공");
        list = sample.body[IDc];

        const li = document.querySelectorAll("li");
        loginForm.className = "login-form-finished";
        listview.classList.remove("before-login");
        //listViewer.removeChild(li);
        for(let i=1;i!=list.length;i++){
            ToDolistPainter(list[i].title);
        }
        //db에서 내용을 가져와 list 에 저장함.
    }   
    else{                           //ID와 PW가 매칭이 안되는 경우
        
        //있는 경우 해당 키의 value불러오기.(리스트)
        //js로 화면 변화.
    }
    //inerhtml의 youser를 name으로 변경.
    //title을 wellcome ${name} 으로 변경
  
}


let listContanerNum =[];
//일단 사용자가 등록되는 동시에 해당 사용자가 있는지 없는지를 체크
function paintToDo(text){
    console.log("paint text");
    const li = document.createElement("li");
    const moreMenuBtn = document.createElement("button");
    const span = document.createElement("span");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const detailBtn = document.createElement("button");
    const menuContaner = document.createElement("div");
    
    const newId = listContanerNum.length +1;
    moreMenuBtn.innerText = "···";
    //moreMenuBtn.addEventListener("click",moreMenu); -> moreMenu가 활성화 되어있는 동안에만,하위 버튼들의 eventLidtener를 활성화 시킬 것.
    //editBtn,delBtn,detailBtn 에 대한 이모지 추가.
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(moreMenuBtn);
    menuContaner.appendChild(editBtn,delBtn,detailBtn);// 세개의 버튼은, MenuContaner에 귀속되어 있을 것, 기본적인 디스플레이 타입은 NAN
    moreMenuBtn.appendChild(menuContaner); //menueContaner 를 moreMenuBtn에 귀속, 클릭시의 생성-삭제를 이 div태그를 활용해 할것. class기준
    li.id = newId;                                     
    li.className = "indexList";
    listViewer.appendChild(li);
    listContanerNum.push(text);
}
let menustatus = false;
function moreMenu(){

}

function init(){

    console.log("init 입장")
    submit.addEventListener('click',getKey);


}
init();
//export default login;