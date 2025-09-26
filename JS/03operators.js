// js 비교 연산자
console.log(10 == "10"); // true : 값만 비교 (느슨한 동등 비교)
console.log(10 === "10"); // false : 값과 타입 모두 비교 (엄격한 동등 비교)
console.log(10 != "10"); // false : 값만 비교 (느슨한 부등 비교)
console.log(10 !== "10"); // true : 값과 타입 모두 비교 (엄격한 부등 비교)
console.log(10 > 5); // true : 왼쪽이 크다
console.log(10 < 5); // false : 왼쪽이 작다
console.log(10 >= 10); // true : 왼쪽이 크거나 같다
console.log(10 <= 5); // false : 왼쪽이 작거나 같다
console.log(null == undefined); // true : 값만 비교
console.log(null === undefined); // false : 값과 타입 모두 비교
console.log(NaN == NaN); // false : NaN은 자기 자신과도 같지 않음
console.log(NaN === NaN); // false : NaN은 자기 자신과도 같지 않음

// js 논리 연산자
console.log(true && false); // false : 둘 다 true여야 true
console.log(true || false); // true : 둘 중 하나만 true여도 true
console.log(!true); // false : true는 false로, false는 true로 반전
console.log(!false); // true : true는 false로, false는 true로 반전

// js 삼항 연산자
const age = 20;
const canVote = age >= 18 ? "Yes" : "No"; // 조건 ? 참일 때 값 : 거짓일 때 값
console.log(canVote); // "Yes"
const access = age < 18 ? "Denied" : age >= 65 ? "Senior Access" : "Granted"; // 중첩 삼항 연산자
console.log(access); // "Granted"

// js null 병합 연산자
const userInput = null;
const defaultValue = "Default";
const finalValue = userInput ?? defaultValue; // userInput이 null 또는 undefined이면 defaultValue 사용
console.log(finalValue); // "Default"
const anotherInput = "User Value";
const anotherFinalValue = anotherInput ?? defaultValue; // anotherInput이 null 또는 undefined가 아니므로 anotherInput 사용
console.log(anotherFinalValue); // "User Value"

// js 연산자 우선순위
const result = 10 + 5 * 2; // 곱셈(*)이 덧셈(+)보다 우선순위가 높음
console.log(result); // 20
const complexResult = (10 + 5) * 2; // 괄호로 우선순위 변경
console.log(complexResult); // 30
const mixedResult = 10 + 5 > 12 && 3 * 2 === 6; // 연산자 우선순위에 따라 평가
console.log(mixedResult); // true
const finalCheck = !(10 + 5 > 12) || 3 * 2 === 6; // 괄호로 명확히 우선순위 지정
console.log(finalCheck); // true
