public class Exam04 {
    public static void main(String[] args) {
        // 조건문 if ~ else if ~ else 알아보기
        int score = 85; // 점수를 저장하는 변수 score 선언 및 초기화
        if(score >= 90) { // score가 90 이상이면
            System.out.println("A학점"); // A학점 출력
        } else if(score >= 80) { // score가 80 이상이면
            System.out.println("B학점"); // B학점 출력
        } else if(score >= 70) { // score가 70 이상이면
            System.out.println("C학점"); // C학점 출력
        } else { // 그 외의 경우
            System.out.println("F학점"); // F학점 출력
        }
    }
}
