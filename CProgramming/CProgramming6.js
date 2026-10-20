// CProgramming6.js
// C프로그래밍 6주차: for문, 중첩 반복문, break/continue, 1차원 배열(선언·초기화·메모리 구조) (총 25문항)
const CProgramming6Questions = [
  {
    category: "6주차 • 개념 문답형 (for 문의 실행 순서 ⭐)",
    question: "for 문의 3대 구성 요소(초기식, 조건식, 증감식)가 반복문 실행 중 동작하는 올바른 순서는?",
    options: [
      "① 초기식(1회만) → ② 조건식 검사 → ③ 반복 문장 실행 → ④ 증감식 수행 → ② 조건식으로 복귀",
      "① 초기식 → ② 증감식 수행 → ③ 조건식 검사 → ④ 반복 문장 실행",
      "① 조건식 검사 → ② 초기식 → ③ 반복 문장 실행 → ④ 증감식 수행",
      "매 반복 회차마다 초기식, 조건식, 증감식이 동시에 순차적으로 재실행된다."
    ],
    answer: "① 초기식(1회만) → ② 조건식 검사 → ③ 반복 문장 실행 → ④ 증감식 수행 → ② 조건식으로 복귀",
    rationale: "for 문은 시작 시 초기식을 단 1회만 실행한 후, '조건식 검사 → 문장 실행 → 증감식 수행' 단계를 조건식이 거짓이 될 때까지 반복합니다[cite: 38]."
  },
  {
    category: "6주차 • 실행 결과 예측 (for 제어 변수 최종값 ⭐)",
    question: "다음 반복문이 종료된 직후 콘솔 화면에 출력되는 변수 i의 최종 값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int i;\n    for (i = 0; i < 5; i++)\n    {\n        // 반복 본문\n    }\n    printf(\"%d\\n\", i);\n    return 0;\n}",
    options: [
      "5",
      "4",
      "6",
      "0"
    ],
    answer: "5",
    rationale: "i가 0부터 4까지 5번 루프를 수행한 후 증감식 i++에 의해 5가 되는 순간 조건식 (5 < 5)가 거짓(0)이 되어 탈출하므로, 종료 직후 i는 5입니다[cite: 38]."
  },
  {
    category: "6주차 • 코드 빈칸 채우기 (팩토리얼과 long long 포맷)",
    question: "20!과 같이 큰 정수 결과를 저장하고 출력하기 위해 선언한 long long 자료형의 출력 형식 지정자로 [ 빈칸 ]에 들어갈 기호는?\n\nlong long fact = 1;\n// 팩토리얼 연산 수행...\nprintf(\"20!은 [ 빈칸 ]이다.\\n\", fact);",
    options: [
      "%lld",
      "%d",
      "%ld",
      "%lf"
    ],
    answer: "%lld",
    rationale: "64비트 정수형인 long long 자료형을 10진수로 출력할 때 사용하는 표준 형식 지정자는 '%lld'입니다[cite: 38]."
  },
  {
    category: "6주차 • 에러 분석 및 디버깅 (정수 나눗셈 방지)",
    question: "화씨온도 t를 섭씨온도로 변환하는 수식 'c = (t - 32.0) * 5 / 9;' 에서 결과가 항상 0으로 계산되는 논리 에러를 막기 위한 올바른 수정 방식은?",
    options: [
      "5 / 9 대신 5.0 / 9.0 처럼 실수형 상수를 사용하여 실수 나눗셈이 되도록 수정한다.",
      "변수 t의 자료형을 int형으로 강제 선언한다.",
      "수식 맨 끝에 세미콜론(;)을 두 번 붙인다.",
      "대입 연산자 '=' 대신 관계 연산자 '=='를 사용한다."
    ],
    answer: "5 / 9 대신 5.0 / 9.0 처럼 실수형 상수를 사용하여 실수 나눗셈이 되도록 수정한다.",
    rationale: "정수끼리의 나눗셈 5 / 9 는 몫이 0이 되므로 전체 수식이 0이 됩니다[cite: 38]. 따라서 '5.0 / 9.0' 처럼 실수 연산으로 유도해야 합니다[cite: 38]."
  },
  {
    category: "6주차 • 실행 결과 예측 (무한 루프와 for 문 문법)",
    question: "C 언어에서 'for ( ; ; )' 형태의 문장이 갖는 문법적 의미는?",
    options: [
      "조건식이 생략되어 항상 참으로 간주되는 무한 반복 루프",
      "문법 에러(Syntax Error)로 컴파일이 거부되는 잘못된 식",
      "반복 본문을 단 0회만 실행하고 즉시 건너뛰는 문장",
      "변수의 선언 없이 메모리를 자동 해제하는 명령"
    ],
    answer: "조건식이 생략되어 항상 참으로 간주되는 무한 반복 루프",
    rationale: "for 문의 초기식, 조건식, 증감식을 모두 비워둔 'for(;;)'는 while(1)과 동일하게 무한 루프를 생성합니다[cite: 38]."
  },
  {
    category: "6주차 • 실행 결과 예측 (중첩 반복문 총 회차 ⭐)",
    question: "다음 중첩 for 문에서 가장 안쪽에 있는 printf('*'); 문장이 총 실행되는 횟수는?\n\nint i, j;\nfor (i = 0; i < 7; i++)\n{\n    for (j = 0; j < 3; j++)\n    {\n        printf(\"*\");\n    }\n}",
    options: [
      "21번",
      "10번",
      "7번",
      "14번"
    ],
    answer: "21번",
    rationale: "바깥쪽 루프가 7번(0~6) 돌고, 바깥 루프가 1번 돌 때마다 안쪽 루프가 3번(0~2)씩 수행되므로 총 실행 횟수는 7 × 3 = 21번입니다[cite: 38]."
  },
  {
    category: "6주차 • 처리 조건 실행결과 (별 사각형 중첩 for문)",
    question: "다음 중첩 for 문의 실행 결과로 화면에 출력되는 모습은?\n\nint x, y;\nfor (y = 0; y < 5; y++) {\n    for (x = 0; x < 10; x++)\n        printf(\"*\");\n    printf(\"\\n\");\n}",
    options: [
      "한 줄에 별 10개씩 총 5줄의 사각형 형태",
      "한 줄에 별 5개씩 총 10줄의 사각형 형태",
      "별이 50개 한 줄로 길게 출력된 형태",
      "계단식으로 1개부터 5개까지 늘어나는 삼각형 형태"
    ],
    answer: "한 줄에 별 10개씩 총 5줄의 사각형 형태",
    rationale: "바깥쪽 y 루프가 줄 수(5줄)를 제어하고, 안쪽 x 루프가 한 줄에 찍힐 별의 개수(10개)를 제어합니다[cite: 38]."
  },
  {
    category: "6주차 • 개념 문답형 (break 문 vs continue 문 ⭐⭐)",
    question: "반복문 내에서 사용되는 'break 문'과 'continue 문'의 핵심 동작 차이점으로 옳은 것은?",
    options: [
      "break는 반복문을 즉시 완전히 탈출하고, continue는 현재 회차의 남은 코드만 건너뛰고 다음 반복(증감식)으로 넘어간다.",
      "break는 다음 반복으로 건너뛰고, continue는 프로그램 전체를 강제 종료한다.",
      "break는 for 문에서만 사용 가능하고, continue는 switch 문에서만 사용 가능하다.",
      "두 명령어 모두 반복문 전체를 영구히 종료하는 동일한 동작을 수행한다."
    ],
    answer: "break는 반복문을 즉시 완전히 탈출하고, continue는 현재 회차의 남은 코드만 건너뛰고 다음 반복(증감식)으로 넘어간다.",
    rationale: "break는 루프를 완전히 빠져나오는 명령문이고[cite: 38], continue는 루프를 종료하지 않고 현재 반복만 중단한 뒤 증감식으로 이동하여 다음 반복을 이어갑니다[cite: 38]."
  },
  {
    category: "6주차 • 실행 결과 예측 (continue 문의 동작 ⭐)",
    question: "다음 코드의 실행 결과로 화면에 출력되는 숫자들은?\n\n#include <stdio.h>\nint main(void)\n{\n    int i;\n    for (i = 0; i < 10; i++) {\n        if (i % 3 == 0)\n            continue;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    options: [
      "1 2 4 5 7 8",
      "0 3 6 9",
      "1 2 3 4 5 6 7 8 9",
      "0 1 2 4 5 7 8"
    ],
    answer: "1 2 4 5 7 8",
    rationale: "i가 3의 배수(0, 3, 6, 9)일 때는 if 조건이 참이 되어 continue를 만나 출력을 건너뛰므로, 3의 배수를 제외한 '1 2 4 5 7 8'이 출력됩니다[cite: 38]."
  },
  {
    category: "6주차 • 실행 결과 예측 (1000 돌파 누적 n값)",
    question: "다음 프로그램의 실행 결과로 출력되는 n의 값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int n = 0, sum = 0;\n    while (1) {\n        n++;\n        sum += n;\n        if (sum > 1000)\n            break;\n    }\n    printf(\"%d\\n\", n);\n    return 0;\n}",
    options: [
      "45",
      "44",
      "50",
      "1000"
    ],
    answer: "45",
    rationale: "1부터 44까지의 합은 990이고, n=45가 더해질 때 합이 1035가 되어 처음으로 1000을 넘기므로 break를 만나 탈출하여 '45'가 출력됩니다[cite: 38]."
  },
  {
    category: "6주차 • 개념 문답형 (배열의 정의와 성질 ⭐)",
    question: "C 언어에서 '배열(Array)'의 핵심 개념에 관한 설명으로 가장 올바른 것은?",
    options: [
      "동일한 자료형의 데이터들을 하나의 이름으로 연속된 메모리 공간에 저장하는 자료구조",
      "서로 다른 데이터 타입을 한꺼번에 묶어서 저장할 수 있는 동적 메모리 구조",
      "인덱스(첨자) 번호가 항상 1번부터 시작하는 링크드 리스트",
      "배열의 크기를 실행 도중에 마음대로 늘리거나 줄일 수 있는 가변형 컨테이너"
    ],
    answer: "동일한 자료형의 데이터들을 하나의 이름으로 연속된 메모리 공간에 저장하는 자료구조",
    rationale: "배열은 같은 타입의 원소들을 연속적인 물리 메모리에 할당하여 인덱스를 통해 접근하는 고정 크기 자료구조입니다[cite: 38]."
  },
  {
    category: "6주차 • 개념 문답형 (배열 인덱스 범위 규칙 ⭐)",
    question: "크기가 10인 정수형 배열 'int s[10];' 을 선언했을 때 접근 가능한 유효한 인덱스(첨자) 번호의 범위는?",
    options: [
      "0부터 9까지",
      "1부터 10까지",
      "0부터 10까지",
      "1부터 9까지"
    ],
    answer: "0부터 9까지",
    rationale: "C 언어의 배열 인덱스는 무조건 0부터 시작하므로, 크기가 N인 배열의 마지막 인덱스는 N-1인 9가 됩니다[cite: 38]."
  },
  {
    category: "6주차 • 개념 문답형 (배열의 메모리 크기 계산)",
    question: "int형이 4바이트인 시스템에서 'int score[10];' 배열이 메모리상에서 차지하는 총 바이트 수는?",
    options: [
      "40바이트",
      "10바이트",
      "20바이트",
      "4바이트"
    ],
    answer: "40바이트",
    rationale: "원소 1개의 크기(4바이트) × 원소 개수(10개) = 총 40바이트가 연속적으로 할당됩니다[cite: 38]."
  },
  {
    category: "6주차 • 에러 분석 및 디버깅 (잘못된 인덱스 침범 ⭐)",
    question: "다음 코드에서 프로그램에 치명적인 메모리 오류(Buffer Overflow 등)를 유발하는 잘못된 문장은?\n\nint score[5];\nscore[0] = 10; // (1)\nscore[2] = 30; // (2)\nscore[4] = 50; // (3)\nscore[5] = 60; // (4)",
    options: [
      "(4) score[5] = 60;",
      "(1) score[0] = 10;",
      "(3) score[4] = 50;",
      "(2) score[2] = 30;"
    ],
    answer: "(4) score[5] = 60;",
    rationale: "크기 5인 배열의 인덱스는 0부터 4까지입니다[cite: 38]. score[5]는 6번째 요소를 가리키므로 배열 범위를 벗어난 잘못된 메모리 접근입니다[cite: 38]."
  },
  {
    category: "6주차 • 실행 결과 예측 (배열의 부분 초기화 ⭐)",
    question: "다음과 같이 일부만 초기화된 배열에서 score[3]과 score[4]에 자동으로 저장되는 값은?\n\nint score[5] = { 10, 20, 30 };",
    options: [
      "둘 다 0",
      "알 수 없는 쓰레기값",
      "각각 40과 50",
      "컴파일 에러 발생"
    ],
    answer: "둘 다 0",
    rationale: "배열을 초기화할 때 원소 개수보다 적은 수의 초기값을 제공하면, 지정되지 않은 나머지 원소들은 컴파일러에 의해 자동으로 0으로 채워집니다[cite: 38]."
  },
  {
    category: "6주차 • 코드 빈칸 채우기 (전체 0 초기화)",
    question: "크기가 10인 정수형 배열의 모든 요소를 간편하게 전부 0으로 초기화하는 올바른 문장은?",
    options: [
      "int arr[10] = { 0 };",
      "int arr[10] = 0;",
      "int arr[10] = { };",
      "int arr[10] = [ 0 ];"
    ],
    answer: "int arr[10] = { 0 };",
    rationale: "첫 번째 원소를 0으로 명시하면 나머지 9개 원소도 규칙에 따라 모두 0으로 채워지므로, '{ 0 }'은 전체를 0으로 초기화하는 표준 기법입니다[cite: 38]."
  },
  {
    category: "6주차 • 개념 문답형 (크기 생략 초기화)",
    question: "선언문 'int grade[] = { 10, 20, 30, 40, 50, 60 };' 과 같이 배열 크기를 생략했을 때 결정되는 배열의 크기는?",
    options: [
      "초기화 리스트에 나열된 값의 개수인 6",
      "컴파일러 기본값인 10",
      "int 크기인 4",
      "크기가 생략되었으므로 컴파일 에러 발생"
    ],
    answer: "초기화 리스트에 나열된 값의 개수인 6",
    rationale: "배열 선언과 동시에 초기화할 때 대괄호 안의 크기를 생략하면, 컴파일러가 초기값의 개수(6개)를 자동으로 세어 크기를 6으로 확정합니다[cite: 38]."
  },
  {
    category: "6주차 • 코드 빈칸 채우기 (sizeof 배열 원소 개수 계산 ⭐)",
    question: "배열의 크기가 변경되더라도 원소 개수를 자동으로 계산하여 size 변수에 구하는 올바른 식은?\n\nint score[] = { 1, 2, 3, 4, 5, 6 };\nint size = [ 빈칸 ];",
    options: [
      "sizeof(score) / sizeof(score[0])",
      "sizeof(score) * sizeof(score[0])",
      "sizeof(score) / sizeof(int*)",
      "sizeof(score[0]) / sizeof(score)"
    ],
    answer: "sizeof(score) / sizeof(score[0])",
    rationale: "배열 전체가 차지하는 메모리 크기 sizeof(score)를 원소 1개의 크기 sizeof(score[0])로 나누면 원소의 총 개수를 정확히 얻을 수 있습니다[cite: 38]."
  },
  {
    category: "6주차 • 개념 문답형 (배열 이름의 메모리 주소 의미 ⭐⭐)",
    question: "C 언어에서 인덱스 없이 단독으로 사용된 '배열 이름(예: score)'이 갖는 값의 의미는?",
    options: [
      "배열의 첫 번째 요소의 시작 메모리 주소 (&score[0])",
      "배열에 저장된 모든 데이터들의 총합",
      "배열의 전체 요소 개수 (길이)",
      "배열의 마지막 원소 값"
    ],
    answer: "배열의 첫 번째 요소의 시작 메모리 주소 (&score[0])",
    rationale: "배열의 이름은 배열의 첫 번째 원소가 시작하는 메모리 시작 주소를 가리키는 상수 포인터 역할을 합니다 (score == &score[0])[cite: 38]."
  },
  {
    category: "6주차 • 개념 문답형 (배열 요소 주소 간격)",
    question: "int형(4바이트) 배열 'int score[5];' 에서 첫 번째 요소 score[0]의 주소가 1000번지라면, score[2]의 메모리 주소는?",
    options: [
      "1008번지",
      "1002번지",
      "1004번지",
      "1016번지"
    ],
    answer: "1008번지",
    rationale: "배열은 연속된 메모리 공간에 할당되므로, int형 4바이트씩 증가하여 score[0]=1000, score[1]=1004, score[2]=1008번지가 됩니다[cite: 38]."
  },
  {
    category: "6주차 • 코드 빈칸 채우기 (배열 원소 scanf 입력 ⭐)",
    question: "반복 제어 변수 i를 사용하여 배열의 i번째 원소에 키보드로 정수를 입력받는 올바른 scanf 문장은?\n\nint score[5];\nfor (int i = 0; i < 5; i++) {\n    [ 빈칸 ];\n}",
    options: [
      "scanf(\"%d\", &score[i]);",
      "scanf(\"%d\", score[i]);",
      "scanf(\"%d\", &score);",
      "scanf(\"%d\", score);"
    ],
    answer: "scanf(\"%d\", &score[i]);",
    rationale: "배열의 각 개별 요소(score[i])는 일반 변수와 같으므로, scanf로 값을 입력받을 때는 요소 앞에 주소 연산자(&)를 붙여야 합니다[cite: 38]."
  },
  {
    category: "6주차 • 처리 조건 실행결과 (주사위 빈도 누적)",
    question: "주사위의 각 면(1~6)의 빈도를 세기 위한 배열 freq에서, 난수 r(0~5)이 나왔을 때 해당 면의 빈도를 1 증가시키는 올바른 문장은?",
    options: [
      "++freq[rand() % 6];",
      "freq[rand() % 6] = 1;",
      "freq[rand() % 6]++; freq++;",
      "++freq[rand() % 6 + 1];"
    ],
    answer: "++freq[rand() % 6];",
    rationale: "0~5 인덱스를 주사위 6개 면에 대응시키므로, rand() % 6 위치의 배열 요소를 전위/후위 증감 연산자로 1 증가시켜야 합니다[cite: 38]."
  },
  {
    category: "6주차 • 에러 분석 및 디버깅 (극장 좌석 인덱스 보정 ⭐)",
    question: "사용자가 좌석 번호(seat_number)로 1번부터 10번을 입력할 때, 크기 10인 배열 seats에 올바르게 접근하기 위해 인덱스를 보정하는 식은?",
    options: [
      "seats[seat_number - 1]",
      "seats[seat_number]",
      "seats[seat_number + 1]",
      "seats[&seat_number]"
    ],
    answer: "seats[seat_number - 1]",
    rationale: "사용자는 1~10을 입력하지만 배열의 인덱스는 0~9이므로, 사용자가 입력한 번호에서 1을 뺀 값으로 인덱스를 지정해야 합니다[cite: 38]."
  },
  {
    category: "6주차 • 풀코딩 구조 (배열 요소의 평균 계산 ⭐)",
    question: "크기 5인 정수형 배열의 합을 누적하고 평균을 실수(double)로 정확히 계산하여 출력하는 올바른 소스 코드는?",
    options: [
      "#include <stdio.h>\nint main(void)\n{\n    int score[5] = {10, 20, 30, 40, 50}, sum = 0;\n    for (int i = 0; i < 5; i++) sum += score[i];\n    double avg = (double)sum / 5;\n    printf(\"평균: %f\\n\", avg);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int score[5] = {10, 20, 30, 40, 50}, sum = 0;\n    for (int i = 1; i <= 5; i++) sum += score[i];\n    double avg = sum / 5;\n    printf(\"평균: %d\\n\", avg);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int score[5];\n    double avg = score / 5;\n    printf(\"%f\\n\", avg);\n    return 0;\n}",
      "int main(void)\n{\n    int score[5] = {10, 20, 30, 40, 50};\n    printf(\"평균: %f\\n\", (double)(score[0]+score[4])/2);\n}"
    ],
    answer: "#include <stdio.h>\nint main(void)\n{\n    int score[5] = {10, 20, 30, 40, 50}, sum = 0;\n    for (int i = 0; i < 5; i++) sum += score[i];\n    double avg = (double)sum / 5;\n    printf(\"평균: %f\\n\", avg);\n    return 0;\n}",
    rationale: "배열 0~4 인덱스 누적 합계, 정수 나눗셈 방지를 위한 (double) 명시적 형변환, %f 출력 포맷까지 문법적으로 완벽한 코드입니다[cite: 38]."
  },
  {
    category: "6주차 • 함수 작성 (구구단 출력 함수)",
    question: "출력할 단(dan)을 정수로 전달받아 해당 단의 1부터 9까지 곱셈 결과를 출력하는 함수의 올바른 구현체는?",
    options: [
      "void print_dan(int dan)\n{\n    for (int i = 1; i <= 9; i++)\n        printf(\"%d*%d=%2d\\n\", dan, i, dan * i);\n}",
      "int print_dan(int dan)\n{\n    for (int i = 1; i <= 9; i++)\n        return dan * i;\n}",
      "void print_dan(void)\n{\n    for (int i = 1; i <= 9; i++)\n        printf(\"%d*%d=%d\\n\", 3, i, 3 * i);\n}",
      "void print_dan(int dan)\n{\n    dan * 9;\n}"
    ],
    answer: "void print_dan(int dan)\n{\n    for (int i = 1; i <= 9; i++)\n        printf(\"%d*%d=%2d\\n\", dan, i, dan * i);\n}",
    rationale: "반환값 없이 화면에 바로 출력하므로 반환형은 void이며, 매개변수로 받은 dan을 이용해 1부터 9까지 루프를 돌며 서식에 맞게 출력해야 합니다[cite: 33, 38]."
  }
];