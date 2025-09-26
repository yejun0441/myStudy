public class Exam08 {
    public static void main(String[] args) {
        // 이중 for문 사용하기 (구구단 예제)
        for(int i=2; i<=9; i++) { // 바깥쪽 for문 (단수)
            System.out.println(i + "단"); // 단 출력
            for(int j=1; j<=9; j++) { // 안쪽 for문 (곱하는 수)
                System.out.println(i + " x " + j + " = " + (i*j)); // 구구단 출력
            }
            System.out.println(); // 단이 바뀔 때마다 한 줄 띄우기
        }
    }
}
