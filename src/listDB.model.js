
function addDB(texts){

    //db의 currentYouser 키에 해당하는 value에 삽입.
}
function moveDB(){
    let temp=null;
    //마우스 드레그에 따라  혹은 버튼에 따라 리스트의 순서를 임의로 변경.
    //arry형식으로 불러온다는 가정 하에, 이는 arry의 순서에 기반 할 것.
    //따라서 클릭 시 해당하는 item의 번호를 기억하고. 원래 번호와 교환. temp를 활용.
    //수정된 list를 db에 반환.
}
function dleDB(){
    list.dle();
    //list 의 해당 주소의 텍스트를 삭제
    //수정된 list로 db재정의
}
function update(texts){
    //선택된 텍스트 줄의 변경, innerHTML을 통해 해당 텍스트부분에 input을 추가.
    //input의 홀더를 기존의 텍스트로 변경. 바로 수정이 가능하도록.
    //수정이 끝났을 경우 list의 해당하는 주소의 value를 변경.
    //수정된 list를 db에 반영.
}
function read(name){
    //DB읽어오기
    //가장 초기에 수행됨, 리스트로 불러와 list변수에 저장.
    //userName관련 함수가 실행되었을 때 호출.
    //해당되는 유저명을 key로 하는 value를 반환.
}   

function cilckHendler(event){
   //클릭된 아이콘이 해당하는 value의 주소를 확보.
   //해당 주소를 콜백 함수에 참조.
   //아이콘을 클릭 했을 경우 아이콘의 형성과  각각의 아이콘을 클릭 했을 때의 핸들링 
   //if문 활용. 
}