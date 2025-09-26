// if/else 문 switch 문
let day = 3;
if (day === 1) {
  console.log("월요일입니다.");
} else if (day === 2) {
  console.log("화요일입니다.");
} else if (day === 3) {
  console.log("수요일입니다.");
} else {
  console.log("주중의 다른 날입니다.");
}
// switch 문
switch (day) {
  case 1: // day가 1일 때
    console.log("월요일입니다.");
    break;
  case 2: // day가 2일 때
    console.log("화요일입니다.");
    break;
  case 3: // day가 3일 때
    console.log("수요일입니다.");
    break;
  default: // 위의 case에 해당하지 않을 때
    console.log("주중의 다른 날입니다.");
    break;
}
