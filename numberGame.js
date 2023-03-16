//랜덤번호 지정

//유저가 번호를 입력 > go라는 버튼을 누름

//유저가 번호 맞추면 맞췄다는 화면 보여주기

//입력한 번호가 결과번호보다 ↑이면 다운

//반대로 ↓이면 업

//리셋버튼 누르면 게임이 리셋됨

//기회는 5번(시도 불가 및 버튼이 disable)

//1~100 까지만 입력하라는 알림창 띄우기(남은 기회는 그대로~)

//입력한 값을 한 번더 입력하면 중복이라는 알림창 띄우기(남은 기회는 그대로~)


let randomNum = 0;
let PlayBtn = document.getElementById("Play_Btn");
let UserNum = document.getElementById("User_Num");
let ResultArea = document.getElementById("Result_Area");

PlayBtn.addEventListener("click", play)

function pickRandomNum() {
    // Math.random() = 랜덤한 숫자를 뽑을 수 있게 도와주는 함수 단, 0~1까지 숫자만 반환시킴
    // 나는 1~100까지 구현하고 싶으니 100을 곱해서 1을 100으로 바꾸고 
    // 그래도 나오는 뒤에 소수점 아래놈들 없애버리고 싶으니 Math.floor()라는 함수를 사용
    // 뒤에 +1은 함수 Math.random()가 0~1까지 숫자를 뽑는데 1을 포함하지않는 다시말해 1과 근접한 숫자까지만 뽑는다.
    // 한마디로 0~99까지(99는 *100했으니까..)만 나오니깐.. 100까지 원하는 나는 +1해서 1~100까지 맞춰준다.
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", randomNum);
}

function play() {
    let UserValue = UserNum.value
    if(UserValue < randomNum) {
        ResultArea.textContent = "Up!"
    } else if(UserValue > randomNum) {
        ResultArea.textContent = "Down!"
    } else {
        ResultArea.textContent = "Good!"
    }
}

pickRandomNum()