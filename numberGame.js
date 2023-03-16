//랜덤번호 지정 ㅇ

//유저가 번호를 입력 > go라는 버튼을 누름 ㅇ

//유저가 번호 맞추면 맞췄다는 화면 보여주기 ㅇ

//입력한 번호가 결과번호보다 ↑이면 다운 ㅇ

//반대로 ↓이면 업 ㅇ

//리셋버튼 누르면 게임이 리셋됨 ㅇ

//기회는 5번(시도 불가 및 버튼이 disable)

//1~100 까지만 입력하라는 알림창 띄우기(남은 기회는 그대로~)

//입력한 값을 한 번더 입력하면 중복이라는 알림창 띄우기(남은 기회는 그대로~)


let randomNum = 0;
let playBtn = document.getElementById("Play_Btn");
let userNum = document.getElementById("User_Num");
let resultArea = document.getElementById("Result_Area");
let resetBtn = document.getElementById("Reset_Btn");
//기회를 바꾸고 싶으면 여기!
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("Chance_Area");
let history = []

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userNum.addEventListener("focus", function() {
    userNum.value = "";
});

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
    let userValue = userNum.value

    if(userValue< 1 || userValue > 100) {
        resultArea.textContent = "1부터 100사이 값만 입력하세요!"
        return;
    }

    //유저가 플레이 할수록 찬스횟수가 --됨
    chances --;

    // 큰 따옴표는 정적인 값만 사용
    // 정적 동적 같이 사용하고 싶음 ``(백틱)이걸 사용해야 함
    chanceArea.textContent = `남은 기회 : ${chances}번`;

    if(userValue < randomNum) {
        resultArea.textContent = "Up!"
    } else if(userValue > randomNum) {
        resultArea.textContent = "Down!"
    } else {
        resultArea.textContent = "Good!"
        // gameOver = true;  여기에 적어도 disable됨
    }

    history.push(userValue)

    // 기회가 1보다 작을때 또는 정답을 맞출때 버튼 disable효과 주기
    if(chances < 1 || userValue == randomNum)  {
        gameOver = true;
    }

    if(gameOver == true) {
        playBtn.disabled = true;
    }
}

function reset() {
    // 리셋버튼을 누르면 유저가 입력한 숫자가 초기화됨
    userNum.value = "";
    // 새로운 랜덤번호 부르기
    pickRandomNum();
    // 리셋버튼 누르면 리셋되었다는 멘트 띄우기
    resultArea.textContent = "리셋이 되었습니다."
}

pickRandomNum();