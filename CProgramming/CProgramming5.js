// CProgramming5.js
// C프로그래밍 5주차: switch문, break/default, 조건(삼항)연산자, while문, do-while문, 난수 생성 (총 25문항)
const CProgramming5Questions = [
  {
    category: "5주차 • 개념 문답형 (switch 문의 특징)",
    question: "C 언어의 switch 문법과 동작 규칙에 대한 설명으로 옳은 것은?",
    options: [
      "case 절 뒤에는 변수나 조건식(x > 10 등)이 올 수 없고 반드시 정수형 상수나 문자 상수만 올 수 있다.",
      "실수형 변수(float, double)도 switch 문의 조건 변수로 자유롭게 사용할 수 있다.",
      "각 case 절의 끝에는 반드시 break 문을 적어야 하며 생략하면 컴파일 에러가 발생한다.",
      "default 절은 반드시 switch 블록의 가장 첫 번째 줄에 선언해야 한다."
    ],
    answer: "case 절 뒤에는 변수나 조건식(x > 10 등)이 올 수 없고 반드시 정수형 상수나 문자 상수만 올 수 있다.",
    rationale: "switch 문의 조건 제어 변수와 case 라벨에는 정수형(int, char 등) 상수만 올 수 있으며, 실수나 범위 조건식은 사용할 수 없습니다[cite: 37]."
  },
  {
    category: "5주차 • 실행 결과 예측 (break 문 누락 ⭐)",
    question: "다음 코드에 number = 1 을 입력했을 때 화면에 출력되는 올바른 결과는?\n\n#include <stdio.h>\nint main(void)\n{\n    int number = 1;\n    switch(number)\n    {\n        case 0:\n            printf(\"없음\\n\");\n            break;\n        case 1:\n            printf(\"하나\\n\");\n        case 2:\n            printf(\"둘\\n\");\n            break;\n        default:\n            printf(\"많음\\n\");\n            break;\n    }\n    return 0;\n}",
    options: [
      "하나\n둘",
      "하나",
      "둘",
      "하나\n둘\n많음"
    ],
    answer: "하나\n둘",
    rationale: "case 1에 break 문이 없으므로 다음 라벨인 case 2의 코드가 조건 비교 없이 연달아 실행(Fall-through)된 후 break를 만나 탈출하므로 '하나\\n둘'이 출력됩니다[cite: 37]."
  },
  {
    category: "5주차 • 코드 빈칸 채우기 (의도적 break 생략)",
    question: "변수 month가 4, 6, 9, 11월일 때 일수 30일을 할당하려고 한다. [ 빈칸 ]에 들어갈 case 문 구조로 가장 적절한 것은?\n\nswitch(month)\n{\n    case 2:\n        days = 28;\n        break;\n    [ 빈칸 ]\n        days = 30;\n        break;\n    default:\n        days = 31;\n        break;\n}",
    options: [
      "case 4: case 6: case 9: case 11:",
      "case 4, 6, 9, 11:",
      "case 4 || 6 || 9 || 11:",
      "case 4 ~ 11:"
    ],
    answer: "case 4: case 6: case 9: case 11:",
    rationale: "C 언어 switch 문에서 여러 조건에 동일한 처리를 할 때는 case 문들을 콤마나 OR 기호 없이 break를 생략하여 연달아 나열해야 합니다[cite: 37]."
  },
  {
    category: "5주차 • 개념 문답형 (default 절)",
    question: "switch 문에서 'default' 절이 수행되는 시점에 대한 설명으로 옳은 것은?",
    options: [
      "스위치 변수의 값이 앞에 열거된 그 어떤 case 상수와도 일치하지 않을 때 실행된다.",
      "프로그램이 시작될 때 무조건 첫 번째로 실행되는 초기화 블록이다.",
      "모든 case 절의 실행이 완료된 후 항상 마지막에 추가로 실행된다.",
      "break 문을 만나지 못해 오류가 발생했을 때 예외를 처리하는 구문이다."
    ],
    answer: "스위치 변수의 값이 앞에 열거된 그 어떤 case 상수와도 일치하지 않을 때 실행된다.",
    rationale: "default 절은 일치하는 case가 하나도 없을 때 실행되는 일종의 if-else 구조의 else에 해당하는 예외 처리 블록입니다[cite: 37]."
  },
  {
    category: "5주차 • 실행 결과 예측 (문자 case 매칭 ⭐)",
    question: "다음 코드에 소문자 'a'를 입력했을 때 화면에 출력되는 문자열은?\n\n#include <stdio.h>\nint main(void)\n{\n    char grade = 'a';\n    switch(grade)\n    {\n        case 'A':\n            printf(\"Excellent!\\n\");\n            break;\n        case 'B':\n            printf(\"Good\\n\");\n            break;\n        default:\n            printf(\"잘못된 입력입니다.\\n\");\n            break;\n    }\n    return 0;\n}",
    options: [
      "잘못된 입력입니다.",
      "Excellent!",
      "Good",
      "a"
    ],
    answer: "잘못된 입력입니다.",
    rationale: "C 언어는 대소문자를 엄격히 구분하므로 소문자 'a'(ASCII 97)는 대문자 'A'(ASCII 65)와 일치하지 않아 default 절이 실행됩니다[cite: 37]."
  },
  {
    category: "5주차 • 개념 문답형 (조건 연산자)",
    question: "C 언어에서 유일하게 3개의 피연산자를 가지는 '삼항 연산자(Ternary Operator)'는?",
    options: [
      "조건 연산자 ( ? : )",
      "논리곱 연산자 ( && )",
      "대입 연산자 ( = )",
      "관계 연산자 ( == )"
    ],
    answer: "조건 연산자 ( ? : )",
    rationale: "조건 연산자 '(조건식) ? 참값 : 거짓값' 은 C 언어에서 유일하게 3개의 항을 취하는 삼항 연산자입니다[cite: 37]."
  },
  {
    category: "5주차 • 실행 결과 예측 (조건 연산자 최댓값)",
    question: "다음 코드의 실행 결과로 화면에 출력되는 max의 값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int x = 15, y = 25;\n    int max = (x > y) ? x : y;\n    printf(\"%d\\n\", max);\n    return 0;\n}",
    options: [
      "25",
      "15",
      "1",
      "0"
    ],
    answer: "25",
    rationale: "조건식 (15 > 25)가 거짓(0)이므로 콜론(:) 뒤의 y 값인 25가 선택되어 max에 저장됩니다[cite: 37]."
  },
  {
    category: "5주차 • 코드 변환 (if-else를 조건 연산자로)",
    question: "다음 if-else 문을 조건 연산자(삼항 연산자)를 사용하여 한 줄로 올바르게 변환한 것은?\n\nif (x > 0)\n    abs = x;\nelse\n    abs = -x;",
    options: [
      "abs = (x > 0) ? x : -x;",
      "abs = (x > 0) : x ? -x;",
      "abs = (x > 0) ? -x : x;",
      "abs = if (x > 0) ? x : -x;"
    ],
    answer: "abs = (x > 0) ? x : -x;",
    rationale: "조건 연산자의 기본 문법은 '(조건식) ? 참일_때_값 : 거짓일_때_값;' 이므로 'abs = (x > 0) ? x : -x;' 가 올바릅니다[cite: 37]."
  },
  {
    category: "5주차 • 실행 결과 예측 (나이 판별 삼항식 ⭐)",
    question: "다음 코드에 age = 20 을 대입했을 때 출력되는 문자열은?\n\nint age = 20;\n(age > 20) ? printf(\"성인\\n\") : printf(\"청소년\\n\");",
    options: [
      "청소년",
      "성인",
      "성인\n청소년",
      "오류 발생"
    ],
    answer: "청소년",
    rationale: "조건식이 'age >= 20'이 아니라 'age > 20'(초과)이므로, 20은 거짓(0)이 되어 콜론 뒤의 '청소년'이 출력됩니다[cite: 37]."
  },
  {
    category: "5주차 • 개념 문답형 (while vs do-while 차이 ⭐)",
    question: "while 문과 do-while 문의 구조적 차이점에 대한 설명으로 가장 옳은 것은?",
    options: [
      "while 문은 진입 전 조건을 먼저 검사하지만, do-while 문은 문장을 먼저 실행한 후 루프 끝에서 조건을 검사한다.",
      "while 문은 조건이 거짓이어도 최소 1번은 실행되지만, do-while 문은 절대 실행되지 않는다.",
      "do-while 문은 끝에 세미콜론(;)을 붙이지 않지만, while 문은 조건 괄호 뒤에 반드시 세미콜론을 붙여야 한다.",
      "while 문은 무한 루프를 만들 수 있지만, do-while 문은 최대 10번까지만 반복할 수 있다."
    ],
    answer: "while 문은 진입 전 조건을 먼저 검사하지만, do-while 문은 문장을 먼저 실행한 후 루프 끝에서 조건을 검사한다.",
    rationale: "while문은 '선 조건 검사'로 조건이 처음부터 거짓이면 0회 실행되지만, do-while문은 '후 조건 검사'로 무조건 최소 1회는 실행됩니다[cite: 37]."
  },
  {
    category: "5주차 • 실행 결과 예측 (while 카운터 추적)",
    question: "다음 코드의 반복문이 종료된 직후 출력되는 변수 i의 최종 값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int i = 0;\n    while (i < 5)\n    {\n        i++;\n    }\n    printf(\"%d\\n\", i);\n    return 0;\n}",
    options: [
      "5",
      "4",
      "6",
      "0"
    ],
    answer: "5",
    rationale: "i가 0, 1, 2, 3, 4일 때 루프를 돌며 i++되어 5가 되는 순간 (5 < 5) 조건이 거짓이 되어 루프를 빠져나오므로 최종 i는 5입니다[cite: 37]."
  },
  {
    category: "5주차 • 실행 결과 예측 (1부터 10까지의 합)",
    question: "다음 누적 합계 코드의 실행 결과로 올바른 출력은?\n\n#include <stdio.h>\nint main(void)\n{\n    int i = 1, sum = 0;\n    while (i <= 10)\n    {\n        sum += i;\n        i++;\n    }\n    printf(\"합계=%d\\n\", sum);\n    return 0;\n}",
    options: [
      "합계=55",
      "합계=45",
      "합계=50",
      "합계=10"
    ],
    answer: "합계=55",
    rationale: "i가 1부터 10까지 1씩 증가하며 누적되므로 1+2+...+10 = 55가 계산되어 출력됩니다 (루프 종료 후 i는 11)[cite: 37]."
  },
  {
    category: "5주차 • 에러 분석 및 디버깅 (팩토리얼 초기화 ⭐)",
    question: "다음 팩토리얼 계산 프로그램에서 결과가 항상 '0'으로 출력되는 치명적인 버그의 원인은?\n\n#include <stdio.h>\nint main(void)\n{\n    int i = 1;\n    int factorial = 0;\n    while (i <= 5) {\n        factorial = factorial * i;\n        i++;\n    }\n    printf(\"%d\\n\", factorial);\n    return 0;\n}",
    options: [
      "누적 곱셈 변수인 factorial의 초기값을 0으로 설정했기 때문",
      "반복 조건식이 (i <= 5)로 잘못 설정되었기 때문",
      "i++ 증감식이 반복문 안에 작성되었기 때문",
      "printf에서 %d 포맷을 사용했기 때문"
    ],
    answer: "누적 곱셈 변수인 factorial의 초기값을 0으로 설정했기 때문",
    rationale: "곱셈의 항등원은 1이므로 factorial 변수를 0으로 초기화하면 어떤 수를 곱해도 결과가 0이 됩니다. 반드시 1로 초기화해야 합니다[cite: 37]."
  },
  {
    category: "5주차 • 실행 결과 예측 (카운트다운 반복문)",
    question: "다음 프로그램의 실행 결과로 올바른 화면 출력은?\n\n#include <stdio.h>\nint main(void)\n{\n    int count = 3;\n    while (count > 0) {\n        printf(\"%d \", count);\n        count--;\n    }\n    printf(\"발사!\");\n    return 0;\n}",
    options: [
      "3 2 1 발사!",
      "3 2 1 0 발사!",
      "2 1 0 발사!",
      "3 2 1 \n발사!"
    ],
    answer: "3 2 1 발사!",
    rationale: "count가 3, 2, 1일 때 출력되고, count가 0이 되면 (0 > 0)이 거짓이 되어 루프를 탈출한 뒤 '발사!'가 출력됩니다[cite: 37]."
  },
  {
    category: "5주차 • 처리 조건 실행결과 (3의 배수의 합)",
    question: "1부터 100 사이의 모든 3의 배수의 합을 구하는 코드의 실행 결과로 출력되는 정수값은?\n\nint number = 1, sum = 0;\nwhile (number <= 100) {\n    if (number % 3 == 0)\n        sum += number;\n    number++;\n}\nprintf(\"%d\\n\", sum);",
    options: [
      "1683",
      "1650",
      "1716",
      "2550"
    ],
    answer: "1683",
    rationale: "1부터 100 사이의 3의 배수(3, 6, 9, ..., 99) 33개의 합을 계산하면 3 × (1 + 2 + ... + 33) = 3 × 561 = 1683이 됩니다[cite: 37]."
  },
  {
    category: "5주차 • 개념 문답형 (do-while 문의 문법적 특징 ⭐)",
    question: "do-while 반복문 작성 시 문법적으로 반드시 지켜야 하는 필수 규칙은?",
    options: [
      "루프 맨 끝의 'while(조건);' 뒤에 반드시 세미콜론(;)을 붙여야 한다.",
      "do 키워드 바로 뒤 괄호 안에 초기 조건을 작성해야 한다.",
      "반복할 문장이 1개일 때는 do-while 문을 절대로 사용할 수 없다.",
      "조건식의 결과가 참일 때만 최소 1회 실행된다."
    ],
    answer: "루프 맨 끝의 'while(조건);' 뒤에 반드시 세미콜론(;)을 붙여야 한다.",
    rationale: "일반 while문과 달리 do-while문은 'do { ... } while(조건);' 처럼 문장 끝에 반드시 세미콜론(;)을 마침표로 찍어주어야 합니다[cite: 37]."
  },
  {
    category: "5주차 • 실행 결과 예측 (do-while 1회 강제 실행)",
    question: "다음 코드의 실행 결과로 화면에 출력되는 숫자는?\n\n#include <stdio.h>\nint main(void)\n{\n    int x = 10;\n    do {\n        printf(\"%d \", x);\n    } while (x < 5);\n    return 0;\n}",
    options: [
      "10 ",
      "아무것도 출력되지 않는다.",
      "10 10 10 ... 무한 루프",
      "5 "
    ],
    answer: "10 ",
    rationale: "do-while 문은 조건을 나중에 검사하므로, 조건식 (10 < 5)가 처음부터 거짓이더라도 본문이 먼저 1회 실행되어 '10 '이 출력됩니다[cite: 37]."
  },
  {
    category: "5주차 • 개념 문답형 (난수 생성 함수 라이브러리 ⭐)",
    question: "C 언어에서 실행할 때마다 매번 달라지는 난수를 생성하기 위해 필요한 함수와 헤더 파일의 연결이 옳은 것은?",
    options: [
      "srand(), rand() — <stdlib.h>,  time() — <time.h>",
      "random() — <math.h>,  clock() — <stdio.h>",
      "srand() — <stdio.h>,  time() — <stdlib.h>",
      "rand() — <string.h>,  seed() — <time.h>"
    ],
    answer: "srand(), rand() — <stdlib.h>,  time() — <time.h>",
    rationale: "난수 발생 및 시드 설정 함수(rand, srand)는 <stdlib.h>에, 현재 시간을 시드값으로 주기 위한 time() 함수는 <time.h>에 정의되어 있습니다[cite: 37]."
  },
  {
    category: "5주차 • 코드 빈칸 채우기 (특정 범위 난수 공식 ⭐)",
    question: "1부터 100 사이의 임의의 정수 난수(1~100)를 생성하여 변수에 저장하는 올바른 C 수식은?",
    options: [
      "rand() % 100 + 1",
      "rand() % 100",
      "rand() % 101",
      "(rand() + 1) % 100"
    ],
    answer: "rand() % 100 + 1",
    rationale: "rand() % 100 은 0부터 99까지의 정수를 만들므로, 여기에 1을 더해주어야 1부터 100까지의 난수가 생성됩니다[cite: 37]."
  },
  {
    category: "5주차 • 실행 결과 예측 (while(n) 조건문)",
    question: "다음 코드에 20, 30, 0 을 차례대로 입력했을 때 sum에 저장되어 출력되는 값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int n = 1, sum = 0;\n    while(n) {\n        scanf(\"%d\", &n);\n        sum += n;\n    }\n    printf(\"%d\\n\", sum);\n    return 0;\n}",
    options: [
      "50",
      "0",
      "20",
      "30"
    ],
    answer: "50",
    rationale: "while(n)은 n이 0이 아니면 참이므로 계속 반복됩니다. 20과 30이 더해져 50이 되고, 0이 입력되면 sum에 0이 더해진 후 while(0)이 거짓이 되어 종료하므로 50입니다[cite: 37]."
  },
  {
    category: "5주차 • 개념 문답형 (C 언어의 논리 판정 기준 ⭐)",
    question: "C 언어에서 조건식의 참(True)과 거짓(False)을 판별하는 정수값의 규칙으로 옳은 것은?",
    options: [
      "0만 거짓(False)이고, 0이 아닌 모든 정수(-1, 1, 100 등)는 참(True)으로 취급된다.",
      "1만 참이고, 0과 음수는 모두 거짓으로 판정된다.",
      "양수만 참이고, 0 이하의 수는 모두 거짓이다.",
      "C 언어는 논리 판정에 정수를 사용할 수 없다."
    ],
    answer: "0만 거짓(False)이고, 0이 아닌 모든 정수(-1, 1, 100 등)는 참(True)으로 취급된다.",
    rationale: "C 언어의 제어문에서 거짓은 오직 정수 0뿐이며, 1을 포함하여 0이 아닌 모든 정수값은 전부 참(True)으로 처리됩니다[cite: 37]."
  },
  {
    category: "5주차 • 코드 빈칸 채우기 (do-while 입력 검증)",
    question: "신호등 색상으로 문자 'r', 'y', 'g' 중 하나가 들어올 때까지 입력을 계속 반복시키는 do-while 조건식으로 옳은 것은?\n\ndo {\n    printf(\"신호등 색상(r, y, g): \");\n    scanf(\" %c\", &color);\n} while ([ 빈칸 ]);",
    options: [
      "color != 'r' && color != 'y' && color != 'g'",
      "color != 'r' || color != 'y' || color != 'g'",
      "color == 'r' || color == 'y' || color == 'g'",
      "color == 'r' && color == 'y' && color == 'g'"
    ],
    answer: "color != 'r' && color != 'y' && color != 'g'",
    rationale: "'r도 아니고 y도 아니고 g도 아닐 때' 계속 반복해야 하므로 세 부정 조건을 모두 AND(&&)로 연결해야 합니다[cite: 37]."
  },
  {
    category: "5주차 • 풀코딩 구조 (달의 일수 계산기 ⭐)",
    question: "switch 문을 이용하여 월(month)을 입력받아 2월이면 28, 4/6/9/11월이면 30, 나머지는 31일을 변수 days에 저장하는 올바른 코드는?",
    options: [
      "switch(month) {\n    case 2: days = 28; break;\n    case 4: case 6: case 9: case 11: days = 30; break;\n    default: days = 31; break;\n}",
      "switch(month) {\n    case 2: days = 28;\n    case 4, 6, 9, 11: days = 30;\n    default: days = 31;\n}",
      "switch(month) {\n    case 2: days = 28; break;\n    case 4-11: days = 30; break;\n    case 12: days = 31; break;\n}",
      "switch(month) {\n    default: days = 31;\n    case 2: days = 28;\n}"
    ],
    answer: "switch(month) {\n    case 2: days = 28; break;\n    case 4: case 6: case 9: case 11: days = 30; break;\n    default: days = 31; break;\n}",
    rationale: "case 2에 break를 두고, 30일인 달들을 break 없이 연달아 나열한 후 30을 대입하고 break, 나머지는 default로 31을 주는 구조가 정답입니다[cite: 37]."
  },
  {
    category: "5주차 • 풀코딩 구조 (0 입력 시 종료 합계 계산기)",
    question: "do-while 문을 사용하여 0이 입력될 때까지 정수를 계속 입력받아 합계를 누적하고 종료 후 출력하는 올바른 소스 코드는?",
    options: [
      "#include <stdio.h>\nint main(void)\n{\n    int x, sum = 0;\n    do {\n        scanf(\"%d\", &x);\n        sum += x;\n    } while (x != 0);\n    printf(\"%d\\n\", sum);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int x, sum = 0;\n    while (x == 0) {\n        scanf(\"%d\", &x);\n        sum += x;\n    };\n    printf(\"%d\\n\", sum);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int x = 0, sum = 0;\n    do {\n        sum += x;\n    } while (x == 0);\n    return 0;\n}",
      "int main(void)\n{\n    int x, sum = 0;\n    do scanf(\"%d\", &x); while (x = 0);\n}"
    ],
    answer: "#include <stdio.h>\nint main(void)\n{\n    int x, sum = 0;\n    do {\n        scanf(\"%d\", &x);\n        sum += x;\n    } while (x != 0);\n    printf(\"%d\\n\", sum);\n    return 0;\n}",
    rationale: "do-while 본문 안에서 정수를 입력받아 sum에 더하고, 탈출 조건식으로 (x != 0)을 주며 끝에 세미콜론을 정확히 찍은 완성 코드입니다[cite: 37]."
  },
  {
    category: "5주차 • 함수 작성 (두 수 중 큰 값 반환 삼항식)",
    question: "두 정수 a, b를 매개변수로 받아 삼항(조건) 연산자만을 사용하여 더 큰 값을 즉시 반환(return)하는 한 줄 함수는?",
    options: [
      "int get_max(int a, int b)\n{\n    return (a > b) ? a : b;\n}",
      "int get_max(int a, int b)\n{\n    return (a > b) : a ? b;\n}",
      "void get_max(int a, int b)\n{\n    return (a > b) ? a : b;\n}",
      "int get_max(int a, int b)\n{\n    (a > b) ? return a : return b;\n}"
    ],
    answer: "int get_max(int a, int b)\n{\n    return (a > b) ? a : b;\n}",
    rationale: "조건 연산자 '(a > b) ? a : b' 자체가 연산 결과값을 생성하므로 return 뒤에 수식으로 바로 전달할 수 있습니다[cite: 37]."
  }
];