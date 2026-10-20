// CProgramming4.js
// C프로그래밍 4주차: 자료형 심화, 연산자(산술·관계·증감·논리), 형변환, if-else문, 복합문 (총 25문항)
const CProgramming4Questions = [
  {
    category: "4주차 • 개념 문답형 (관계 연산자 vs 대입 연산자 ⭐)",
    question: "C 언어에서 조건식을 작성할 때 사용하는 '==' 연산자와 '=' 연산자의 차이점으로 올바른 것은?",
    options: [
      "'=='는 두 피연산자의 값이 같은지 비교하는 관계 연산자이고, '='는 오른쪽 값을 왼쪽 변수에 대입하는 대입 연산자이다.",
      "'=='는 오른쪽 값을 왼쪽에 대입하는 연산자이고, '='는 두 값이 같은지 비교하는 관계 연산자이다.",
      "두 연산자는 표기만 다를 뿐 문법적으로 완전히 동일한 기능을 수행한다.",
      "C 언어의 조건문 if문 안에서는 '=' 연산자를 사용하면 무조건 컴파일 에러(Syntax Error)가 발생한다."
    ],
    answer: "'=='는 두 피연산자의 값이 같은지 비교하는 관계 연산자이고, '='는 오른쪽 값을 왼쪽 변수에 대입하는 대입 연산자이다.",
    rationale: "'=='는 상등을 비교하여 참(1) 또는 거짓(0)을 반환하는 관계 연산자이며, '='는 값을 변수에 할당하는 대입 연산자입니다. if (x = y)로 잘못 쓰면 대입된 값이 조건식의 참/거짓으로 평가되는 논리 에러가 발생합니다[cite: 36]."
  },
  {
    category: "4주차 • 실행 결과 예측 (관계 연산자의 반환값)",
    question: "다음 코드의 실행 결과로 화면에 출력되는 올바른 값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int a = 10, b = 20;\n    printf(\"%d %d\", a > b, a < b);\n    return 0;\n}",
    options: [
      "0 1",
      "1 0",
      "false true",
      "10 20"
    ],
    answer: "0 1",
    rationale: "C 언어에서 관계 연산자의 결과는 거짓이면 0, 참이면 1이라는 int형 정수값으로 반환됩니다. 10 > 20은 거짓이므로 0, 10 < 20은 참이므로 1입니다[cite: 36]."
  },
  {
    category: "4주차 • 실행 결과 예측 (전위 vs 후위 증감 연산자 ⭐)",
    question: "다음 코드의 실행 결과로 출력되는 a와 b의 값으로 올바른 것은?\n\n#include <stdio.h>\nint main(void)\n{\n    int a = 5;\n    int b = a++;\n    printf(\"a=%d, b=%d\\n\", a, b);\n    return 0;\n}",
    options: [
      "a=6, b=5",
      "a=6, b=6",
      "a=5, b=5",
      "a=5, b=6"
    ],
    answer: "a=6, b=5",
    rationale: "후위 증감 연산자(a++)는 현재 변수 a의 값(5)을 먼저 식에 평가(b에 대입)한 후, a의 값을 1 증가시켜 6으로 만듭니다. 따라서 b=5, a=6이 됩니다[cite: 36]."
  },
  {
    category: "4주차 • 실행 결과 예측 (전위 증감 연산자)",
    question: "다음 코드의 실행 결과로 출력되는 x와 y의 값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int x = 5;\n    int y = ++x;\n    printf(\"x=%d, y=%d\\n\", x, y);\n    return 0;\n}",
    options: [
      "x=6, y=6",
      "x=6, y=5",
      "x=5, y=6",
      "x=7, y=6"
    ],
    answer: "x=6, y=6",
    rationale: "전위 증감 연산자(++x)는 x의 값을 먼저 1 증가시켜 6으로 만든 뒤 그 결과값을 y에 대입하므로 x와 y 모두 6이 됩니다[cite: 36]."
  },
  {
    category: "4주차 • 개념 문답형 (참과 거짓의 조건 판단 기준 ⭐)",
    question: "C 언어에서 if문의 조건식을 평가할 때 '참(True)'과 '거짓(False)'을 판단하는 기준으로 옳은 것은?",
    options: [
      "0은 거짓(False)으로 평가되고, 0이 아닌 모든 숫자(음수 포함)는 참(True)으로 평가된다.",
      "오직 숫자 1만 참(True)이고, 1이 아닌 모든 숫자는 거짓(False)이다.",
      "양수만 참(True)이고, 0과 음수는 모두 거짓(False)이다.",
      "C 언어는 불리언(True/False) 문자열만 조건식에 사용할 수 있다."
    ],
    answer: "0은 거짓(False)으로 평가되고, 0이 아닌 모든 숫자(음수 포함)는 참(True)으로 평가된다.",
    rationale: "논리 연산의 결과값 자체는 0 또는 1이지만, 조건문에서 조건식을 판별할 때는 0만 거짓이고 -1, 2, 100 등 0이 아닌 모든 값은 참으로 취급됩니다[cite: 36]."
  },
  {
    category: "4주차 • 개념 문답형 (논리 연산자 단축 평가)",
    question: "논리 연산자 AND(&&)와 OR(||)의 연산 특성에 관한 설명으로 옳지 않은 것은?",
    options: [
      "OR(||) 연산자는 첫 번째 조건이 거짓(0)이면 뒤의 조건을 확인하지 않고 바로 거짓으로 결론짓는다.",
      "AND(&&) 연산자는 양쪽 피연산자가 모두 참(1)일 때만 결과가 참이 된다.",
      "AND(&&) 연산자는 첫 번째 조건이 거짓(0)이면 뒤의 조건을 계산하지 않고 바로 거짓(0)을 낸다.",
      "OR(||) 연산자는 첫 번째 조건이 참(1)이면 뒤의 조건을 계산하지 않고 바로 참(1)을 낸다."
    ],
    answer: "OR(||) 연산자는 첫 번째 조건이 거짓(0)이면 뒤의 조건을 확인하지 않고 바로 거짓으로 결론짓는다.",
    rationale: "OR(||) 연산자는 둘 중 하나라도 참이면 참이 되므로, 첫 번째 조건이 거짓이더라도 뒤의 조건이 참일 수 있어 반드시 뒤의 조건을 끝까지 평가해야 합니다[cite: 36]."
  },
  {
    category: "4주차 • 코드 빈칸 채우기 (범위 판별 조건식)",
    question: "정수 변수 score의 값이 80 이상 90 미만인 범위를 검사하기 위한 올바른 C 언어 논리식은?\n\nif ([ 빈칸 ]) {\n    printf(\"학점 B\\n\");\n}",
    options: [
      "score >= 80 && score < 90",
      "80 <= score < 90",
      "score >= 80 || score < 90",
      "score >= 80 & score < 90"
    ],
    answer: "score >= 80 && score < 90",
    rationale: "수학적 표현 '80 <= score < 90'은 C 언어에서 의도대로 동작하지 않으며, 각각의 관계식을 논리곱(&&)으로 묶은 'score >= 80 && score < 90'으로 작성해야 합니다[cite: 36]."
  },
  {
    category: "4주차 • 실행 결과 예측 (NOT 연산자)",
    question: "다음 코드의 실행 결과로 변수 result1과 result2에 저장되는 값은?\n\nint result1 = !1;\nint result2 = !(2 == 3);",
    options: [
      "result1 = 0, result2 = 1",
      "result1 = 1, result2 = 0",
      "result1 = 0, result2 = 0",
      "result1 = -1, result2 = 1"
    ],
    answer: "result1 = 0, result2 = 1",
    rationale: "!1은 참(1)의 부정이므로 0(거짓)이며, (2 == 3)은 거짓(0)이므로 !(0)은 1(참)이 됩니다[cite: 36]."
  },
  {
    category: "4주차 • 실행 결과 예측 (명시적 형변환 나눗셈 ⭐)",
    question: "다음 코드의 실행 결과로 화면에 출력되는 값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int a = 10, b = 4;\n    double result = (double)a / b;\n    printf(\"%.2f\\n\", result);\n    return 0;\n}",
    options: [
      "2.50",
      "2.00",
      "2.500000",
      "2"
    ],
    answer: "2.50",
    rationale: "(double)a에 의해 10이 10.0으로 명시적 형변환되고, 실수/정수 연산에서 4가 4.0으로 자동 형변환되어 10.0 / 4.0 = 2.5가 계산됩니다. %.2f 포맷이므로 '2.50'입니다[cite: 36]."
  },
  {
    category: "4주차 • 실행 결과 예측 (정수 나눗셈 함정)",
    question: "다음 코드의 실행 결과로 화면에 출력되는 값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int a = 10, b = 4;\n    double result = a / b;\n    printf(\"%.2f\\n\", result);\n    return 0;\n}",
    options: [
      "2.00",
      "2.50",
      "2.0",
      "2.5"
    ],
    answer: "2.00",
    rationale: "a와 b가 둘 다 정수이므로 a / b는 정수 나눗셈이 수행되어 소수점이 버려진 몫 2가 됩니다. 이 2가 double 변수에 대입되면서 2.0이 되므로 '2.00'이 출력됩니다[cite: 36]."
  },
  {
    category: "4주차 • 연산자 우선순위와 결합 규칙 ⭐",
    question: "수식 '20 / 5 * 2' 를 C 언어 컴파일러가 계산할 때의 올바른 결합 방향과 최종 결과값은?",
    options: [
      "결합 방향: 좌→우 (왼쪽에서 오른쪽), 결과값: 8",
      "결합 방향: 우→좌 (오른쪽에서 왼쪽), 결과값: 2",
      "결합 방향: 좌→우 (왼쪽에서 오른쪽), 결과값: 2",
      "곱셈이 나눗셈보다 우선순위가 항상 높으므로 결과값: 2"
    ],
    answer: "결합 방향: 좌→우 (왼쪽에서 오른쪽), 결과값: 8",
    rationale: "나눗셈(/)과 곱셈(*)은 우선순위가 동일하므로 왼쪽에서 오른쪽으로 진행하는 결합 규칙(→)에 따라 (20 / 5) * 2 = 4 * 2 = 8이 됩니다[cite: 36]."
  },
  {
    category: "4주차 • 개념 문답형 (복합문 / 블록 ⭐)",
    question: "C 언어의 '복합문(Compound Statement, 블록)'에 대한 설명으로 옳은 것은?",
    options: [
      "여러 개의 실행문을 중괄호 '{ }'로 묶어 하나의 단일문처럼 취급하는 문장이다.",
      "반드시 if문 바로 뒤에만 올 수 있으며 다른 제어문에서는 쓸 수 없다.",
      "복합문 안에서는 새로운 변수를 선언할 수 없다.",
      "실행할 문장이 하나뿐일 때도 생략할 수 없으며 무조건 필수로 작성해야 한다."
    ],
    answer: "여러 개의 실행문을 중괄호 '{ }'로 묶어 하나의 단일문처럼 취급하는 문장이다.",
    rationale: "복합문은 중괄호 { }를 사용하여 여러 문장을 묶은 것으로, 단일문이 들어갈 수 있는 모든 제어문 자리에 대신 들어갈 수 있습니다[cite: 36]."
  },
  {
    category: "4주차 • 실행 결과 예측 (복합문 누락 함정 ⭐)",
    question: "다음 코드에 score = 50 을 입력했을 때 화면에 출력되는 결과는?\n\n#include <stdio.h>\nint main(void)\n{\n    int score = 50;\n    if (score >= 60)\n        printf(\"합격입니다.\\n\");\n        printf(\"장학금 대상입니다.\\n\");\n    return 0;\n}",
    options: [
      "장학금 대상입니다.",
      "합격입니다.\n장학금 대상입니다.",
      "아무것도 출력되지 않는다.",
      "합격입니다."
    ],
    answer: "장학금 대상입니다.",
    rationale: "중괄호가 없으므로 if문에는 바로 다음 줄의 printf('합격입니다.')만 포함됩니다. 들여쓰기와 상관없이 두 번째 printf는 if문 밖의 문장이므로 무조건 실행되어 '장학금 대상입니다.'가 출력됩니다[cite: 36]."
  },
  {
    category: "4주차 • 개념 문답형 (if와 else의 매칭 규칙 ⭐⭐)",
    question: "중괄호가 없는 중첩 if-else 구조에서 'else' 절은 어떤 'if' 절과 짝지어지는가?",
    options: [
      "자신보다 앞서 나온 것 중 아직 짝이 맞지 않은 '가장 가까운 위치의 if' 절",
      "들여쓰기(Indent)가 같은 열에 맞춰져 있는 if 절",
      "가장 바깥쪽에 선언되어 있는 첫 번째 if 절",
      "컴파일러가 임의로 조건식의 길이가 가장 짧은 if 절을 선택한다."
    ],
    answer: "자신보다 앞서 나온 것 중 아직 짝이 맞지 않은 '가장 가까운 위치의 if' 절",
    rationale: "C 언어 문법상 else는 중괄호 블록으로 명시적 제한을 두지 않는 한 자신과 가장 인접한(가장 가까운) if와 결합합니다[cite: 36]."
  },
  {
    category: "4주차 • 실행 결과 예측 (if-else 매칭)",
    question: "다음 코드에 score = 85 를 대입하여 실행했을 때 화면에 출력되는 문자열은?\n\nint score = 85;\nif (score >= 80)\n    if (score >= 90)\n        printf(\"A학점\\n\");\n    else\n        printf(\"B학점\\n\");",
    options: [
      "B학점",
      "A학점",
      "아무것도 출력되지 않는다.",
      "A학점\nB학점"
    ],
    answer: "B학점",
    rationale: "85는 80 이상이므로 첫 if를 통과하고, 안쪽 if(85 >= 90)는 거짓이므로 이와 가장 가까운 else 절로 넘어가 'B학점'이 출력됩니다[cite: 36]."
  },
  {
    category: "4주차 • 실행 결과 예측 (중괄호로 강제 매칭 변경)",
    question: "다음 코드에 score = 75 를 대입하여 실행했을 때 화면에 출력되는 문자열은?\n\nint score = 75;\nif (score >= 80) {\n    if (score >= 90)\n        printf(\"A학점\\n\");\n}\nelse {\n    printf(\"80점 미만\\n\");\n}",
    options: [
      "80점 미만",
      "A학점",
      "아무것도 출력되지 않는다.",
      "A학점\n80점 미만"
    ],
    answer: "80점 미만",
    rationale: "중괄호로 안쪽 if를 묶어주었으므로, 바깥의 else는 첫 번째 if(score >= 80)와 매칭됩니다. 75는 80 미만이므로 else 블록이 실행되어 '80점 미만'이 출력됩니다[cite: 36]."
  },
  {
    category: "4주차 • 코드 빈칸 채우기 (윤년 판단 공식 ⭐)",
    question: "연도(year)가 윤년인지 판별하는 조건으로 옳은 것은? (조건: 4의 배수이면서 100의 배수가 아니거나, 400의 배수인 연도)\n\nif ([ 빈칸 ])\n    printf(\"윤년입니다.\\n\");",
    options: [
      "(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)",
      "(year % 4 == 0 || year % 100 != 0) && (year % 400 == 0)",
      "year % 4 == 0 && year % 100 == 0 && year % 400 == 0",
      "(year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)"
    ],
    answer: "(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)",
    rationale: "4로 나누어 떨어지고 100으로는 나누어 떨어지지 않는 조건(&&)이 한 묶음이며, 이것이 400으로 나누어 떨어지는 조건과 OR(||)로 묶여야 합니다[cite: 36]."
  },
  {
    category: "4주차 • 처리 조건 실행결과 (홀짝 판별)",
    question: "다음 코드에 정수 23을 입력했을 때의 최종 출력 내용은?\n\n#include <stdio.h>\nint main(void)\n{\n    int num;\n    scanf(\"%d\", &num);\n    if (num % 2 == 0)\n        printf(\"짝수입니다.\\n\");\n    else\n        printf(\"홀수입니다.\\n\");\n    return 0;\n}",
    options: [
      "홀수입니다.",
      "짝수입니다.",
      "23",
      "1"
    ],
    answer: "홀수입니다.",
    rationale: "23 % 2 의 연산 결과는 1(나머지)입니다. 조건식 (1 == 0)이 거짓(0)이므로 else 절이 실행되어 '홀수입니다.'가 출력됩니다[cite: 36]."
  },
  {
    category: "4주차 • 처리 조건 실행결과 (다중 else if 학점)",
    question: "점수 score가 89점일 때, 다음 다중 if-else 코드가 출력하는 문장은?\n\nif (score >= 90)\n    printf(\"학점A\\n\");\nelse if (score >= 80)\n    printf(\"학점B\\n\");\nelse if (score >= 70)\n    printf(\"학점C\\n\");\nelse\n    printf(\"학점F\\n\");",
    options: [
      "학점B",
      "학점A",
      "학점C",
      "학점B\n학점C"
    ],
    answer: "학점B",
    rationale: "첫 번째 조건(89 >= 90)은 거짓이므로 건너뛰고, 두 번째 else if(89 >= 80)가 참이 되어 '학점B'를 출력한 후 전체 if 구조를 탈출합니다[cite: 36]."
  },
  {
    category: "4주차 • 개념 문답형 (다중 if문에서 else의 역할)",
    question: "if ~ else if ~ else 문 구조에서 가장 마지막에 위치하는 'else' 절이 실행되는 시점은?",
    options: [
      "앞서 제시된 모든 if 및 else if 조건식들이 전부 거짓(False)으로 판명되었을 때",
      "조건식의 결과가 0이 아닌 양수가 나왔을 때",
      "사용자가 입력을 취소하고 프로그램을 강제 종료했을 때",
      "가장 첫 번째 if문이 참으로 실행된 직후 항상 추가로 실행된다."
    ],
    answer: "앞서 제시된 모든 if 및 else if 조건식들이 전부 거짓(False)으로 판명되었을 때",
    rationale: "다중 조건문에서 마지막 else는 앞선 모든 선행 조건들이 만족하지 않았을 때 처리되는 기본(디폴트) 실행 블록입니다[cite: 36]."
  },
  {
    category: "4주차 • 코드 빈칸 채우기 (배수 및 홀수 복합 조건 ⭐)",
    question: "실습 과제 조건: '입력받은 정수 n이 3의 배수 또는 5의 배수이면서 홀수'인지를 검사하는 올바른 조건식은?",
    options: [
      "(n % 3 == 0 || n % 5 == 0) && n % 2 != 0",
      "n % 3 == 0 || n % 5 == 0 && n % 2 == 1",
      "(n % 3 == 0 && n % 5 == 0) || n % 2 != 0",
      "(n / 3 == 0 || n / 5 == 0) && n % 2 == 0"
    ],
    answer: "(n % 3 == 0 || n % 5 == 0) && n % 2 != 0",
    rationale: "3 또는 5의 배수는 (n % 3 == 0 || n % 5 == 0)로 묶어주고, 홀수 조건(n % 2 != 0)과 AND(&&)로 결합해야 연산자 우선순위 왜곡 없이 정확히 판별됩니다[cite: 36]."
  },
  {
    category: "4주차 • 에러 분석 및 디버깅 (중첩 if의 논리합 변환)",
    question: "다음 중첩 if 문과 완벽히 동일하게 동작하도록 단일 if 문으로 변환한 코드는?\n\nif (age >= 10)\n    if (height >= 165)\n        printf(\"탑승 가능\\n\");",
    options: [
      "if (age >= 10 && height >= 165) printf(\"탑승 가능\\n\");",
      "if (age >= 10 || height >= 165) printf(\"탑승 가능\\n\");",
      "if (age >= 10, height >= 165) printf(\"탑승 가능\\n\");",
      "if (!(age >= 10 && height >= 165)) printf(\"탑승 가능\\n\");"
    ],
    answer: "if (age >= 10 && height >= 165) printf(\"탑승 가능\\n\");",
    rationale: "첫 번째 조건과 두 번째 조건을 모두 연속으로 만족해야 실행문이 동작하므로 논리곱(&&) 연산자로 결합할 수 있습니다[cite: 36]."
  },
  {
    category: "4주차 • 풀코딩 구조 (두 수 중 큰 수 찾기)",
    question: "사용자로부터 두 정수 x, y를 입력받아 더 큰 수를 변수 max에 저장한 뒤 출력하는 올바른 소스 코드는?",
    options: [
      "#include <stdio.h>\nint main(void)\n{\n    int x, y, max;\n    scanf(\"%d %d\", &x, &y);\n    if (x > y)\n        max = x;\n    else\n        max = y;\n    printf(\"큰 수는 %d\\n\", max);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int x, y, max;\n    scanf(\"%d %d\", &x, &y);\n    if (x > y) max = y; else max = x;\n    printf(\"큰 수는 %d\\n\", max);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int x, y;\n    if (x > y) printf(\"%d\", &x);\n    return 0;\n}",
      "int main(void)\n{\n    int x = 10, y = 20, max;\n    max = (x == y);\n    return 0;\n}"
    ],
    answer: "#include <stdio.h>\nint main(void)\n{\n    int x, y, max;\n    scanf(\"%d %d\", &x, &y);\n    if (x > y)\n        max = x;\n    else\n        max = y;\n    printf(\"큰 수는 %d\\n\", max);\n    return 0;\n}",
    rationale: "입력받은 두 값을 관계 연산자(x > y)로 비교하여 참이면 max에 x를, 거짓이면 y를 대입하고 max를 출력하는 표준 코드입니다[cite: 36]."
  },
  {
    category: "4주차 • 함수 작성 (절댓값 반환 함수)",
    question: "정수 n을 매개변수로 전달받아 음수이면 양수로 바꾸어 절댓값을 반환(return)하는 함수의 올바른 구현은?",
    options: [
      "int get_abs(int n)\n{\n    if (n < 0)\n        return -n;\n    else\n        return n;\n}",
      "void get_abs(int n)\n{\n    if (n < 0)\n        return -n;\n}",
      "int get_abs(void)\n{\n    int n;\n    return n;\n}",
      "double get_abs(int n)\n{\n    if (n > 0)\n        return -n;\n}"
    ],
    answer: "int get_abs(int n)\n{\n    if (n < 0)\n        return -n;\n    else\n        return n;\n}",
    rationale: "정수를 반환하므로 반환형은 int이고, n < 0일 때 부호를 반전한 -n을, 0 이상일 때는 n 자신을 반환하도록 조건 분기해야 합니다[cite: 35, 36]."
  },
  {
    category: "4주차 • 복합문 및 조건 누적 (실습 과제 핵심)",
    question: "정수 a가 3의 배수이거나 5의 배수이면서 홀수일 때, 변수 sum에 a의 값을 누적하는 올바른 복합문 코드는?",
    options: [
      "if ((a % 3 == 0 || a % 5 == 0) && a % 2 != 0) {\n    sum += a;\n}",
      "if (a % 3 == 0 && a % 5 == 0 || a % 2 == 0) {\n    sum = a;\n}",
      "if (a / 3 == 0 || a / 5 == 0) {\n    sum += a;\n}",
      "if ((a % 3 == 0 || a % 5 == 0) && a % 2 != 0);\n{\n    sum += a;\n}"
    ],
    answer: "if ((a % 3 == 0 || a % 5 == 0) && a % 2 != 0) {\n    sum += a;\n}",
    rationale: "정확한 괄호 우선순위로 조건식을 구성하고, 중괄호 블록 안에서 복합 대입 연산자(sum += a;)를 사용하여 누적해야 합니다. if문 괄호 뒤에 세미콜론(;)을 붙이면 빈 문장이 되므로 주의해야 합니다[cite: 36]."
  }
];