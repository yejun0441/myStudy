public class Exam07 {
    public static void main(String[] args) {
        // for 문과 if 문을 사용하여 1~100 숫자중 짝수만 더해서 출력하기
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 2 == 0) { // i 를 2로 나누었을 때 나머지가 0이면 (짝수이면)
                sum += i; // sum = sum + i
            }
        }
        System.out.println("1~100까지의 짝수 합: " + sum); // 1~100까지의 짝수 합: 2550
    }
}
