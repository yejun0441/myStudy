public class Exam06 {
    public static void main(String[] args) {
        // 1. 1~100까지의 합을 구하시오.
        int sum = 0;
        for(int i=1; i<=100; i++) { // i가 1부터 100까지 반복
            sum += i; // sum = sum + i (sum에 i를 계속 더함)
        }
        System.out.println("1~100까지의 합: " + sum);
    }
}
