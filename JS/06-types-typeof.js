// 타입 & 변환
console.log("----- 1. 타입 -----");
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (역사적 이유로 null은 object로 나옴)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (배열도 객체의 한 종류)
console.log(typeof function () {}); // "function"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof BigInt(9007199254740991)); // "bigint" // BigInt 타입

console.log("----- 2. 타입 변환 -----");
// 숫자형으로 변환
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("")); // 0
console.log(Number(" ")); // 0 (공백 문자열도 0으로 변환)
console.log(Number([])); // 0 (빈 배열은 0으로 변환)
console.log(Number([1, 2, 3])); // NaN (비어있지 않은 배열은 NaN으로 변환)
console.log(Number({})); // NaN (객체는 NaN으로 변환)
console.log(Number("0x11")); // 17 (16진수 문자열은 10진수로 변환)
console.log(Number("0b11")); // 3 (2진수 문자열은 10진수로 변환)
console.log(Number("0o11")); // 9 (8진수 문자열은 10진수로 변환)
console.log(Number("  123  ")); // 123 (앞뒤 공백 무시)
console.log(Number("123.45")); // 123.45 (소수점 포함 문자열도 변환)
console.log(Number("Infinity")); // Infinity (무한대 문자열도 변환)
console.log(Number("-Infinity")); // -Infinity (음의 무한대 문자열도 변환)
console.log(Number("NaN")); // NaN (NaN 문자열은 NaN으로 변환)
console.log(Number(new Date("2023-01-01"))); // 1672531200000 (날짜 객체는 타임스탬프로 변환)
console.log(Number(function () {})); // NaN (함수는 NaN으로 변환)
console.log(Number(Symbol("id"))); // TypeError: Cannot convert a Symbol value to a number (심볼은 변환 불가)

// 문자열형으로 변환
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String({ a: 1 })); // "[object Object]"
console.log(String([1, 2, 3])); // "1,2,3"
console.log(String(function () {})); // "function () {}"
console.log(String(Symbol("id"))); // "Symbol(id)"
console.log(String(BigInt(12345678901234567890n))); // "12345678901234567890"
console.log(String(new Date("2023-01-01"))); // "Sun Jan 01 2023 ..."

// 불리언형으로 변환
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-1)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true (공백 문자열은 true)
console.log(Boolean([])); // true (빈 배열은 true)
console.log(Boolean({})); // true (빈 객체도 true)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(function () {})); // true
console.log(Boolean(Symbol("id"))); // true
console.log(Boolean(BigInt(0n))); // false
console.log(Boolean(BigInt(12345678901234567890n))); // true (BigInt 0만 false, 나머지는 true)

// 명시적 타입 변환 vs 암묵적 타입 변환
console.log("----- 3. 명시적 vs 암묵적 타입 변환 -----");
// 명시적 타입 변환
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(1)); // true
// 암묵적 타입 변환
console.log("5" - 2); // 3 (문자열이 숫자로 변환되어 뺄셈 수행)
console.log("5" + 2); // "52" (숫자가 문자열로 변환되어 문자열 연결)
console.log("5" * "2"); // 10 (문자열이 숫자로 변환되어 곱셈 수행)
console.log("5" / "2"); // 2.5 (문자열이 숫자로 변환되어 나눗셈 수행)
console.log("5" > "2"); // true (문자열이 숫자로 변환되어 비교 수행)
console.log("5" > 2); // true (문자열이 숫자로 변환되어 비교 수행)
console.log(null == undefined); // true (null과 undefined는 느슨한 동등 비교에서 같음)
console.log(null === undefined); // false (엄격한 동등 비교에서는 다름)
console.log([] == ""); // true (빈 배열과 빈 문자열은 느슨한 동등 비교에서 같음)
console.log([] === ""); // false (엄격한 동등 비교에서는 다름)
console.log([] == 0); // true (빈 배열과 0은 느슨한 동등 비교에서 같음)
console.log([] === 0); // false (엄격한 동등 비교에서는 다름)
console.log([1, 2] == "1,2"); // true (배열이 문자열로 변환되어 비교 수행)
console.log([1, 2] === "1,2"); // false (엄격한 동등 비교에서는 다름)
console.log({} == "[object Object]"); // false (객체는 문자열로 변환되지 않음)
console.log({} === "[object Object]"); // false (엄격한 동등 비교에서는 다름)
console.log(true + 1); // 2 (true가 1로 변환되어 덧셈 수행)
console.log(false + 1); // 1 (false가 0으로 변환되어 덧셈 수행)
console.log(true + true); // 2 (각각 true가 1로 변환되어 덧셈 수행)
console.log(false + false); // 0 (각각 false가 0으로 변환되어 덧셈 수행)
console.log("5" - "2" + 1); // 4 (문자열이 숫자로 변환되어 연산 수행)
console.log("5" + "2" + 1); // "521" (숫자가 문자열로 변환되어 문자열 연결)
console.log("5" * "2" + 1); // 11 (문자열이 숫자로 변환되어 연산 수행)
console.log("5" / "2" + 1); // 3.5 (문자열이 숫자로 변환되어 연산 수행)
console.log("5" + 2 + 1); // "521" (숫자가 문자열로 변환되어 문자열 연결)
console.log(5 + "2" + 1); // "521" (숫자가 문자열로 변환되어 문자열 연결)
console.log(5 + 2 + "1"); // "71" (숫자가 문자열로 변환되어 문자열 연결)
console.log("5" - 2 + "1"); // "31" (숫자가 문자열로 변환되어 문자열 연결)
console.log("5" + (2 - 1)); // "51" (괄호 안이 먼저 계산되어 1이 되고, 숫자가 문자열로 변환되어 문자열 연결)
console.log("5" * "2" + "1"); // "101" (곱셈이 먼저 계산되어 10이 되고, 숫자가 문자열로 변환되어 문자열 연결)
console.log("5" / "2" + "1"); // "3.51" (나눗셈이 먼저 계산되어 2.5가 되고, 숫자가 문자열로 변환되어 문자열 연결)
console.log("5" - "2" + "1"); // "31" (뺄셈이 먼저 계산되어 3이 되고, 숫자가 문자열로 변환되어 문자열 연결)
console.log(null + 1); // 1 (null이 0으로 변환되어 덧셈 수행)
console.log(undefined + 1); // NaN (undefined는 숫자로 변환되지 않음)
console.log(null + "1"); // "null1" (null이 문자열로 변환되어 문자열 연결)
console.log(undefined + "1"); // "undefined1" (undefined가 문자열로 변환되어 문자열 연결)
console.log(null == 0); // false (null은 0과 같지 않음)
console.log(undefined == 0); // false (undefined는 0과 같지 않음)
console.log(null >= 0); // true (null이 0으로 변환되어 비교 수행)
console.log(undefined >= 0); // false (undefined는 숫자로 변환되지 않음)
console.log(null > 0); // false (null이 0으로 변환되어 비교 수행)
console.log(undefined > 0); // false (undefined는 숫자로 변환되지 않음)

console.log("----- 4. 기타 타입 관련 메서드 -----");
// parseInt, parseFloat
console.log(parseInt("123")); // 123
console.log(parseInt("123abc")); // 123 (숫자 부분만 변환)
console.log(parseInt("abc123")); // NaN (처음부터 숫자가 아니면 NaN)
console.log(parseFloat("123.45")); // 123.45
console.log(parseFloat("123.45abc")); // 123.45 (숫자 부분만 변환)
console.log(parseFloat("abc123.45")); // NaN (처음부터 숫자가 아니면 NaN)
console.log(parseInt("0x11")); // 17 (16진수 문자열은 10진수로 변환)
console.log(parseInt("0b11")); // NaN (parseInt는 2진수 접두사 인식 못함)
console.log(parseInt("0o11")); // NaN (parseInt는 8진수 접두사 인식 못함)
console.log(parseInt("  123  ")); // 123 (앞뒤 공백 무시)
console.log(parseFloat("  123.45  ")); // 123.45 (앞뒤 공백 무시)
console.log(parseInt("Infinity")); // NaN (Infinity는 변환 불가)
console.log(parseFloat("Infinity")); // NaN (Infinity는 변환 불가)
console.log(parseInt("-123")); // -123 (음수도 변환 가능)
console.log(parseFloat("-123.45")); // -123.45 (음수도 변환 가능)
console.log(parseInt("+123")); // 123 (양수도 변환 가능)
console.log(parseFloat("+123.45")); // 123.45 (양수도 변환 가능)
console.log(parseInt("")); // NaN (빈 문자열은 변환 불가)
console.log(parseFloat("")); // NaN (빈 문자열은 변환 불가)
console.log(parseInt(" ")); // NaN (공백 문자열은 변환 불가)
console.log(parseFloat(" ")); // NaN (공백 문자열은 변환 불가)
console.log(parseInt([])); // NaN (빈 배열은 변환 불가)
console.log(parseFloat([])); // NaN (빈 배열은 변환 불가)
console.log(parseInt([123])); // 123 (배열에 숫자 하나만 있으면 변환 가능)
console.log(parseFloat([123.45])); // 123.45 (배열에 숫자 하나만 있으면 변환 가능)
console.log(parseInt([1, 2, 3])); // NaN (배열에 숫자 여러 개 있으면 변환 불가)
console.log(parseFloat([1.2, 3.4])); // NaN (배열에 숫자 여러 개 있으면 변환 불가)
console.log(parseInt({})); // NaN (객체는 변환 불가)
console.log(parseFloat({})); // NaN (객체는 변환 불가)
console.log(parseInt(function () {})); // NaN (함수는 변환 불가)
console.log(parseFloat(function () {})); // NaN (함수는 변환 불가)
console.log(parseInt(Symbol("id"))); // TypeError: Cannot convert a Symbol value to a number (심볼은 변환 불가)
console.log(parseFloat(Symbol("id"))); // TypeError: Cannot convert a Symbol value to a number (심볼은 변환 불가)
console.log(parseInt(new Date("2023-01-01"))); // NaN (날짜 객체는 변환 불가)
console.log(parseFloat(new Date("2023-01-01"))); // NaN (날짜 객체는 변환 불가)
console.log(parseInt("0b11", 2)); // 3 (2진수 문자열을 2진수로 변환)
console.log(parseInt("0o11", 8)); // 9 (8진수 문자열을 8진수로 변환)
console.log(parseInt("0x11", 16)); // 17 (16진수 문자열을 16진수로 변환)
console.log(parseInt("11", 2)); // 3 (2진수 문자열을 2진수로 변환)
console.log(parseInt("11", 8)); // 9 (8진수 문자열을 8진수로 변환)
console.log(parseInt("11", 16)); // 17 (16진수 문자열을 16진수로 변환)
console.log(parseInt("11", 10)); // 11 (10진수 문자열을 10진수로 변환)
console.log(parseInt("11", 36)); // 37 (36진수 문자열을 36진수로 변환)
console.log("----- End -----");
