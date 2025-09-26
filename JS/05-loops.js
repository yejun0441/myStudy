//for, while, do~while, for~in, for~of 차이

//for : 반복 횟수가 정해져 있을 때
for (let i = 0; i < 5; i++) {
  console.log(i);
} //0,1,2,3,4

//while : 반복 횟수가 정해져 있지 않을 때
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
} //0,1,2,3,4

//do~while : 일단 한번은 실행하고 조건 검사
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5); //0,1,2,3,4

//for~in : 객체의 속성을 반복할 때
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
//a: 1, b: 2, c: 3

//for~of : 배열이나 반복 가능한 객체를 반복할 때
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
//10, 20, 30

// 반복문을 종료하거나 건너뛸 때
//break : 반복문을 즉시 종료
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; //i가 5일 때 반복문 종료
  }
  console.log(i); //0,1,2,3,4
}

//continue : 현재 반복을 건너뛰고 다음 반복으로 넘어감
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; //i가 짝수일 때 현재 반복 건너뜀
  }
  console.log(i); //1,3,5,7,9
}
