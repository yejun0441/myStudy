// js 함수 선언
function add(x, y) {
  // 함수 선언문 (Function Declaration)
  return x + y; // return : 함수 종료 및 값 반환
}
// 함수 표현식 (Function Expression)
const multiply = function (x, y) {
  return x * y;
};
// 화살표 함수 (Arrow Function)
const divide = (x, y) => x / y; // 간단한 표현식은 중괄호와 return 생략 가능

// 화살표 함수 (Arrow Function) - 여러 줄 표현식
const subtract = (x, y) => {
  const result = x - y;
  return result;
};
// 함수 호출
console.log(add(10, 20)); // 30
console.log(multiply(10, 20)); // 200
console.log(divide(10, 2)); // 5
console.log(subtract(20, 10)); // 10

// 익명 함수 (Anonymous Function) - 이름이 없는 함수
setTimeout(function () {
  console.log("Hello after 1 second");
}, 1000); // 1초 후에 실행

// 즉시 실행 함수 (Immediately Invoked Function Expression, IIFE)
(function () {
  console.log("This function runs immediately");
})(); // 즉시 실행
