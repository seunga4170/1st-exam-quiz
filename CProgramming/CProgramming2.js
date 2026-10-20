// CProgramming2.js
// C프로그래밍 2주차: 화면 출력, 형식 지정자, 이스케이프 시퀀스, 변수와 자료형, scanf (총 25문항)
const CProgramming2Questions = [
  {
    category: "2주차 • 개념 문답형 (형식 지정자)",
    question: "C 언어에서 각 자료형에 대응하는 출력 형식 지정자의 연결로 옳지 않은 것은?",
    options: [
      "10진수 정수(int) — %d",
      "단정밀도 실수(float) — %f",
      "배정밀도 실수(double) — %lf",
      "단일 문자(char) — %s"
    ],
    answer: "단일 문자(char) — %s",
    rationale: "단일 문자(char)는 '%c'를 사용하며, '%s'는 여러 문자가 나열된 문자열(string)을 출력할 때 사용합니다[cite: 34]."
  },
  {
    category: "2주차 • 실행 결과 예측 (기본 %f 소수점)",
    question: "다음 코드의 실행 결과로 화면에 출력되는 올바른 값은?\n\n#include <stdio.h>\n\nint main(void)\n{\n    printf(\"%f\", 3.14);\n    return 0;\n}",
    options: [
      "3.140000",
      "3.14",
      "3.140",
      "3.1"
    ],
    answer: "3.140000",
    rationale: "%f 형식 지정자는 기본적으로 소수점 이하 6자리까지 출력하므로, 모자란 뒷자리는 0으로 채워져 '3.140000'이 됩니다[cite: 34]."
  },
  {
    category: "2주차 • 실행 결과 예측 (소수점 자릿수 지정)",
    question: "다음 코드의 실행 결과로 화면에 출력되는 문자열은?\n\n#include <stdio.h>\n\nint main(void)\n{\n    printf(\"평점: %.1f점\", 9.55);\n    return 0;\n}",
    options: [
      "평점: 9.6점",
      "평점: 9.5점",
      "평점: 9.55점",
      "평점: 9.550000점"
    ],
    answer: "평점: 9.6점",
    rationale: "%.1f는 소수점 이하 첫째 자리까지 출력하도록 지정하며, 둘째 자리에서 반올림되어 '9.6'으로 출력됩니다[cite: 34]."
  },
  {
    category: "2주차 • 개념 문답형 (문자와 ASCII 코드 ⭐)",
    question: "C 언어에서 'char' 자료형이 정수형(Integer Types) 범주에 포함될 수 있는 이유로 옳은 것은?",
    options: [
      "문자를 컴퓨터 내부에 저장할 때 대응되는 고유한 정수 형태의 ASCII 코드값으로 저장하기 때문이다.",
      "문자형 변수는 오직 0부터 9까지의 숫자 글자만 저장할 수 있기 때문이다.",
      "char형 변수의 메모리 크기가 int형과 동일하게 4바이트이기 때문이다.",
      "작은따옴표 안에 여러 자리의 정수를 한꺼번에 넣을 수 있기 때문이다."
    ],
    answer: "문자를 컴퓨터 내부에 저장할 때 대응되는 고유한 정수 형태의 ASCII 코드값으로 저장하기 때문이다.",
    rationale: "C 언어는 문자를 처리할 때 ASCII 코드 체계를 사용하므로, 문자 'A'는 내부적으로 정수 65로 저장됩니다[cite: 34]."
  },
  {
    category: "2주차 • 실행 결과 예측 (문자 및 ASCII 출력)",
    question: "다음 프로그램의 실행 결과로 올바른 것은?\n\n#include <stdio.h>\n\nint main(void)\n{\n    char ch = 'A';\n    printf(\"%c %d\", ch, ch);\n    return 0;\n}",
    options: [
      "A 65",
      "A A",
      "65 65",
      "A 97"
    ],
    answer: "A 65",
    rationale: "문자 'A'를 %c로 출력하면 문자 'A'가 나오고, %d로 출력하면 그에 해당하는 ASCII 코드 정수값인 '65'가 출력됩니다[cite: 34]."
  },
  {
    category: "2주차 • 개념 문답형 (이스케이프 시퀀스)",
    question: "컴퓨터를 제어하기 위한 특수 문자인 이스케이프 시퀀스(Escape Sequence)의 설명 중 잘못된 것은?",
    options: [
      "\\a — 화면에 'a'라는 문자를 백스페이스하여 지운다.",
      "\\n — 커서를 다음 줄의 시작 위치로 이동시킨다.",
      "\\t — 탭(tab) 키를 누른 것처럼 일정한 간격을 띄운다.",
      "\\\\ — 백슬래시(\\) 문자 자체를 화면에 출력한다."
    ],
    answer: "\\a — 화면에 'a'라는 문자를 백스페이스하여 지운다.",
    rationale: "\\a는 경고(alert)를 의미하는 제어문자로 컴퓨터 스피커에서 비프음(벨소리)을 발생시키는 명령입니다[cite: 34]."
  },
  {
    category: "2주차 • 2진수와 10진수 계산 (원리 확인)",
    question: "컴퓨터 메모리에 1바이트 2진수 '01000101₂'로 저장된 데이터의 10진수 계산 결과는?",
    options: [
      "69",
      "65",
      "71",
      "133"
    ],
    answer: "69",
    rationale: "각 자릿값은 0×2⁷ + 1×2⁶(64) + 0×2⁵ + 0×2⁴ + 0×2³ + 1×2²(4) + 0×2¹ + 1×2⁰(1) = 64 + 4 + 1 = 69 입니다[cite: 34]."
  },
  {
    category: "2주차 • 개념 문답형 (변수의 정의)",
    question: "C 언어에서 '변수(Variable)'의 본질적인 정의로 가장 올바른 것은?",
    options: [
      "데이터를 저장하기 위해 컴퓨터의 메모리(RAM) 안에 만들어지는 이름이 붙은 공간",
      "컴파일러가 프로그램을 번역할 때 참조하는 고정된 예약어",
      "프로그램 실행 도중 절대로 값을 변경할 수 없는 데이터",
      "헤더 파일 안에 선언된 함수의 원형(Prototype) 모음"
    ],
    answer: "데이터를 저장하기 위해 컴퓨터의 메모리(RAM) 안에 만들어지는 이름이 붙은 공간",
    rationale: "변수는 사용자가 입력하거나 계산한 데이터를 임시로 보관하기 위해 메모리에 이름을 붙여 할당받는 저장 공간입니다[cite: 34]."
  },
  {
    category: "2주차 • 개념 문답형 (변수 명명 규칙)",
    question: "C 언어의 변수 이름(식별자) 작성 규칙에 대한 설명으로 올바르지 않은 것은?",
    options: [
      "변수 이름의 첫 글자는 숫자로 시작할 수 있다.",
      "영문자(대소문자), 숫자, 밑줄 문자(_)를 조합하여 만들 수 있다.",
      "대소문자를 엄격히 구분하므로 'score'와 'Score'는 서로 다른 변수이다.",
      "int, return, double 같은 C 언어의 예약어는 변수 이름으로 사용할 수 없다."
    ],
    answer: "변수 이름의 첫 글자는 숫자로 시작할 수 있다.",
    rationale: "변수 이름의 첫 글자는 반드시 영문자이거나 밑줄(_)이어야 하며, 숫자로 시작할 수 없습니다 (예: 2nd_base는 불가)[cite: 34]."
  },
  {
    category: "2주차 • 개념 문답형 (유효한 변수명 식별)",
    question: "다음 중 C 언어에서 문법적으로 사용할 수 있는 올바른 변수 이름은?",
    options: [
      "_total_sum",
      "2nd_number",
      "money#",
      "double"
    ],
    answer: "_total_sum",
    rationale: "2nd_number는 숫자로 시작했고, money#은 특수문자(#)를 썼으며, double은 예약어이므로 불가능하지만, _total_sum은 유효합니다[cite: 34]."
  },
  {
    category: "2주차 • 에러 분석 및 디버깅 (쓰레기값)",
    question: "다음 코드를 Visual Studio에서 디버그 모드로 컴파일 및 실행할 때 'Run-Time Check Failure #3' 런타임 오류가 발생하는 원인은?\n\n#include <stdio.h>\n\nint main(void)\n{\n    int value;\n    printf(\"%d\\n\", value);\n    return 0;\n}",
    options: [
      "변수 value에 초기값을 할당하지 않은 상태에서 출력(사용)했기 때문",
      "int형 변수의 출력에 %d 형식 지정자를 사용했기 때문",
      "main 함수의 반환형이 int인데 return 0;을 작성했기 때문",
      "변수 선언문 뒤에 세미콜론이 누락되었기 때문"
    ],
    answer: "변수 value에 초기값을 할당하지 않은 상태에서 출력(사용)했기 때문",
    rationale: "초기화되지 않은 지역 변수에는 메모리에 남아있던 무작위 데이터인 '쓰레기값'이 들어있어 컴파일러가 런타임 오류를 냅니다[cite: 34]."
  },
  {
    category: "2주차 • 개념 문답형 (기본 자료형 크기)",
    question: "32/64비트 일반 시스템에서 C 언어 기본 자료형 4가지의 일반적인 메모리 크기 연결이 옳은 것은?",
    options: [
      "char(1byte), int(4byte), float(4byte), double(8byte)",
      "char(2byte), int(4byte), float(8byte), double(16byte)",
      "char(1byte), int(2byte), float(4byte), double(8byte)",
      "char(1byte), int(8byte), float(4byte), double(8byte)"
    ],
    answer: "char(1byte), int(4byte), float(4byte), double(8byte)",
    rationale: "일반적인 C 시스템에서 char는 1바이트, int와 float는 4바이트, double은 8바이트를 차지합니다[cite: 34]."
  },
  {
    category: "2주차 • 실행 결과 예측 (변수 값 갱신)",
    question: "다음 코드의 최종 실행 결과로 화면에 출력되는 내용은?\n\n#include <stdio.h>\n\nint main(void)\n{\n    int x = 10;\n    int y = 20;\n    x = y;\n    printf(\"%d %d\", x, y);\n    return 0;\n}",
    options: [
      "20 20",
      "10 20",
      "20 10",
      "10 10"
    ],
    answer: "20 20",
    rationale: "'x = y;' 문장은 y의 값(20)을 x에 대입하라는 뜻이므로 x의 기존 값(10)은 사라지고 20이 됩니다[cite: 34]."
  },
  {
    category: "2주차 • 산술 연산자 (% 나머지 연산자)",
    question: "C 언어의 산술 연산자 중 나머지 연산자(%)를 활용한 판별 조건에 대한 설명으로 옳지 않은 것은?",
    options: [
      "실수형 데이터(3.14 % 2.0)에도 나머지 연산자를 자유롭게 사용할 수 있다.",
      "어떤 정수를 2로 나눈 나머지가 0이면(num % 2 == 0) 짝수이다.",
      "어떤 정수를 2로 나눈 나머지가 1이면(num % 2 == 1) 홀수이다.",
      "어떤 정수를 3으로 나눈 나머지가 0이면(num % 3 == 0) 3의 배수이다."
    ],
    answer: "실수형 데이터(3.14 % 2.0)에도 나머지 연산자를 자유롭게 사용할 수 있다.",
    rationale: "나머지 연산자(%)는 오직 정수형(int, char 등) 피연산자끼리만 연산이 가능하며 실수형에는 적용할 수 없습니다[cite: 34]."
  },
  {
    category: "2주차 • 개념 문답형 (기호 상수)",
    question: "전처리기 지시어를 사용하여 정의하는 기호 상수(매크로 상수)에 대한 설명으로 올바르지 않은 것은?",
    options: [
      "#define PI 3.141592; 처럼 문장의 끝에 반드시 세미콜론(;)을 붙여야 한다.",
      "기호 상수의 이름은 가독성과 관례상 전체 대문자로 표기한다.",
      "상수 값을 한곳에서만 수정하면 프로그램 전체에 자동으로 반영되므로 유지보수가 편리하다.",
      "#define 키워드를 사용하며 리터럴 상수에 이름을 부여하는 역할을 한다."
    ],
    answer: "#define PI 3.141592; 처럼 문장의 끝에 반드시 세미콜론(;)을 붙여야 한다.",
    rationale: "#define 문은 컴파일 전 소스코드를 단순 치환하는 전처리기 지시문이므로 끝에 세미콜론(;)을 붙이지 않습니다[cite: 34]."
  },
  {
    category: "2주차 • 코드 빈칸 채우기 (기호 상수)",
    question: "환율 상수를 정의하여 프로그램 내에서 일괄 계산하려 한다. [ 빈칸 ]에 들어갈 전처리기 선언으로 옳은 것은?\n\n#include <stdio.h>\n[ 빈칸 ]\n\nint main(void)\n{\n    int dollar = 10;\n    int won = EXCHANGE_RATE * dollar;\n    printf(\"%d원\\n\", won);\n    return 0;\n}",
    options: [
      "#define EXCHANGE_RATE 1120",
      "#define EXCHANGE_RATE = 1120;",
      "const int EXCHANGE_RATE = 1120",
      "#include EXCHANGE_RATE 1120"
    ],
    answer: "#define EXCHANGE_RATE 1120",
    rationale: "#define 문은 '#define 이름 값' 형태로 작성하며 등호(=)나 세미콜론(;)을 쓰지 않습니다[cite: 34]."
  },
  {
    category: "2주차 • 개념 문답형 (scanf 함수와 & 연산자)",
    question: "표준 입력 함수 scanf()를 사용하여 키보드로부터 변수에 값을 입력받을 때, 변수명 앞에 주소 연산자(&)를 붙여야 하는 이유는?",
    options: [
      "scanf() 함수가 입력받은 데이터를 직접 저장할 해당 변수의 '메모리 주소'를 알아야 하기 때문이다.",
      "입력받은 정수 데이터를 자동으로 실수형으로 변환하기 위해서이다.",
      "해당 변수가 지역 변수가 아니라 전역 변수임을 컴파일러에 알리기 위해서이다.",
      "Visual Studio의 C4996 보안 경고를 해제하기 위해서이다."
    ],
    answer: "scanf() 함수가 입력받은 데이터를 직접 저장할 해당 변수의 '메모리 주소'를 알아야 하기 때문이다.",
    rationale: "scanf는 외부에서 전달받은 주소 공간을 직접 찾아가 데이터를 쓰기 때문에 변수의 주소를 나타내는 & 연산자가 필수입니다[cite: 34]."
  },
  {
    category: "2주차 • 에러 분석 및 디버깅 (scanf 예외)",
    question: "다음 scanf() 입력 코드 중 주소 연산자(&) 사용과 관련하여 잘못된 코드는?",
    options: [
      "scanf(\"%s\", &name);   (단, char name[20];)",
      "scanf(\"%d\", &age);    (단, int age;)",
      "scanf(\"%f\", &height); (단, float height;)",
      "scanf(\"%lf\", &weight); (단, double weight;)"
    ],
    answer: "scanf(\"%s\", &name);   (단, char name[20];)",
    rationale: "문자열을 입력받는 문자 배열(name)의 이름 자체는 이미 메모리의 시작 주소를 의미하므로 앞에 &를 붙이지 않습니다[cite: 34]."
  },
  {
    category: "2주차 • 에러 분석 및 디버깅 (C4996 해결)",
    question: "Visual Studio에서 표준 scanf()를 사용할 때 발생하는 'C4996' 경고를 무시하고 컴파일하기 위해 소스 코드 맨 첫 줄에 선언해야 하는 매크로는?",
    options: [
      "#define _CRT_SECURE_NO_WARNINGS",
      "#define _DISABLE_SCANF_ERROR",
      "#pragma warning(disable: ALL)",
      "#include <scanf_safe.h>"
    ],
    answer: "#define _CRT_SECURE_NO_WARNINGS",
    rationale: "Microsoft CRT 환경에서 구형 입출력 함수의 사용 중단 경고(C4996)를 끄기 위해 '#define _CRT_SECURE_NO_WARNINGS'를 첫 줄에 정의합니다[cite: 34]."
  },
  {
    category: "2주차 • 코드 빈칸 채우기 (scanf 다중 입력)",
    question: "키보드로부터 두 정수를 공백으로 구분하여 입력받으려 한다. [ 빈칸 ]에 들어갈 코드로 가장 적절한 것은?\n\nint num1, num2;\n[ 빈칸 ];",
    options: [
      "scanf(\"%d %d\", &num1, &num2)",
      "scanf(\"%d %d\", num1, num2)",
      "scanf(\"%f %f\", &num1, &num2)",
      "scanf(\"%d, %d\", num1, &num2)"
    ],
    answer: "scanf(\"%d %d\", &num1, &num2)",
    rationale: "정수 입력을 위해 %d를 두 번 사용하고, 각 변수의 주소(&num1, &num2)를 콤마로 연결하여 넘겨주어야 합니다[cite: 34]."
  },
  {
    category: "2주차 • 실행 결과 예측 (다중 형식 지정자)",
    question: "다음 프로그램의 실행 결과로 화면에 출력되는 내용은?\n\n#include <stdio.h>\n\nint main(void)\n{\n    printf(\"%d 더하기 %d은 %d입니다.\\n\", 2, 3, 5);\n    return 0;\n}",
    options: [
      "2 더하기 3은 5입니다.",
      "2 더하기 3은 6입니다.",
      "%d 더하기 %d은 %d입니다.",
      "5 더하기 3은 2입니다."
    ],
    answer: "2 더하기 3은 5입니다.",
    rationale: "형식 지정자 3개(%d)에 뒤이어 전달된 상수 값(2, 3, 5)이 순서대로 1:1 매칭되어 출력됩니다[cite: 34]."
  },
  {
    category: "2주차 • 처리 조건 실행결과 (원의 면적)",
    question: "반지름(radius)이 10.0인 원의 면적을 구하기 위해 공식 '3.14 * radius * radius'를 계산하고 printf(\"%.2f\", area)로 출력했을 때의 결과는?",
    options: [
      "314.00",
      "314.159200",
      "31.40",
      "314"
    ],
    answer: "314.00",
    rationale: "3.14 * 10.0 * 10.0 = 314.0 이며, %.2f 포맷으로 소수점 2자리까지 출력하면 '314.00'이 됩니다[cite: 34]."
  },
  {
    category: "2주차 • 풀코딩 구조 (두 정수의 합 계산)",
    question: "두 개의 정수 변수를 선언하여 각각 100과 200으로 초기화한 뒤, 합계를 계산하여 '두 수의 합: 300'을 출력하는 올바른 소스 코드는?",
    options: [
      "#include <stdio.h>\nint main(void)\n{\n    int x = 100, y = 200, sum;\n    sum = x + y;\n    printf(\"두 수의 합: %d\\n\", sum);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int x = 100, y = 200;\n    printf(\"두 수의 합: %d\\n\", x + y + sum);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int x, y;\n    x = 100;\n    y = 200;\n    printf(\"두 수의 합: %f\\n\", x + y);\n    return 0;\n}",
      "#include <stdio.h>\nvoid main(void)\n{\n    int x = 100; y = 200;\n    int sum = x * y;\n    print(\"두 수의 합: %d\", sum);\n}"
    ],
    answer: "#include <stdio.h>\nint main(void)\n{\n    int x = 100, y = 200, sum;\n    sum = x + y;\n    printf(\"두 수의 합: %d\\n\", sum);\n    return 0;\n}",
    rationale: "정수 변수 선언과 초기화, 덧셈 산술 연산, %d 포맷을 이용한 정상 출력까지 문법적으로 완벽한 프로그램입니다[cite: 34]."
  },
  {
    category: "2주차 • 풀코딩 구조 (문자/실수/정수 동시 출력)",
    question: "다음 처리 조건을 만족하는 C 프로그램 코드로 옳은 것은?\n\n[조건]\n- 점수(95), 평균(88.75), 학점('A')을 각각 적절한 자료형의 변수에 저장\n- 점수는 %d, 평균은 소수점 둘째 자리(%.2f), 학점은 %c로 출력",
    options: [
      "#include <stdio.h>\nint main(void)\n{\n    int score = 95;\n    float avg = 88.75f;\n    char grade = 'A';\n    printf(\"%d %.2f %c\\n\", score, avg, grade);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    char score = 95;\n    int avg = 88.75;\n    float grade = \"A\";\n    printf(\"%d %f %s\\n\", score, avg, grade);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int score = 95;\n    double avg = 88.75;\n    char grade = \"A\";\n    printf(\"%d %.2f %c\\n\", &score, &avg, &grade);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int score = 95, avg = 88.75;\n    char grade = 'A';\n    printf(\"%f %d %c\\n\", score, avg, grade);\n    return 0;\n}"
    ],
    answer: "#include <stdio.h>\nint main(void)\n{\n    int score = 95;\n    float avg = 88.75f;\n    char grade = 'A';\n    printf(\"%d %.2f %c\\n\", score, avg, grade);\n    return 0;\n}",
    rationale: "자료형에 맞게 int, float, char를 지정하고 printf의 형식 지정자(%d, %.2f, %c)와 값을 정확히 대응시킨 완전한 코드입니다[cite: 34]."
  },
  {
    category: "2주차 • 함수 작성 및 인자 전달",
    question: "두 정수(a, b)를 매개변수로 전달받아 덧셈 결과를 콘솔에 '합: X' 형태로 출력하는 함수의 올바른 구현체는?",
    options: [
      "void print_sum(int a, int b)\n{\n    printf(\"합: %d\\n\", a + b);\n}",
      "int print_sum(int a, int b)\n{\n    printf(\"합: %d\\n\", a + b);\n}",
      "void print_sum(a, b)\n{\n    printf(\"합: %d\\n\", a + b);\n    return a + b;\n}",
      "void print_sum(void)\n{\n    printf(\"합: %d\\n\", a + b);\n}"
    ],
    answer: "void print_sum(int a, int b)\n{\n    printf(\"합: %d\\n\", a + b);\n}",
    rationale: "두 정수를 매개변수로 받으므로 (int a, int b)로 선언하고, 반환값이 없으므로 반환형은 void로 정의하는 것이 타당합니다[cite: 33, 34]."
  }
];