// CProgramming3.js
// C프로그래밍 3주차: scanf 입력 심화, 자료형(정수·실수·문자), ASCII, sizeof, 형변환 (총 25문항)
const CProgramming3Questions = [
  {
    category: "3주차 • 개념 문답형 (scanf vs scanf_s ⭐)",
    question: "표준 입력 함수 scanf()와 C11 표준에서 도입된 scanf_s()의 차이점에 대한 설명으로 옳지 않은 것은?",
    options: [
      "scanf_s()는 gcc, clang 등 모든 C 컴파일러에서 완벽하게 호환되어 scanf()보다 이식성이 훨씬 뛰어나다.",
      "scanf()는 문자열 입력 시 입력 크기를 검사하지 않아 버퍼 오버플로우(Buffer Overflow)가 발생할 수 있다.",
      "scanf_s()는 문자열이나 배열을 다룰 때 메모리 크기를 함께 전달받아 버퍼 오버플로우를 방지한다.",
      "Visual Studio에서 scanf() 오류가 발생할 경우 프로젝트 속성에서 [SDL 검사]를 '아니오'로 설정하여 해결할 수 있다."
    ],
    answer: "scanf_s()는 gcc, clang 등 모든 C 컴파일러에서 완벽하게 호환되어 scanf()보다 이식성이 훨씬 뛰어나다.",
    rationale: "scanf_s()는 MS Visual Studio에서 강력히 권장하지만 gcc, clang 등 타 컴파일러에서는 미지원할 수 있어 이식성이 떨어집니다[cite: 35]."
  },
  {
    category: "3주차 • 개념 문답형 (입력 안내 메시지)",
    question: "scanf() 함수를 호출하기 바로 전 행에 printf()로 '입력 안내 메시지'를 반드시 출력해야 하는 이유는?",
    options: [
      "프로그램이 scanf()에 도달하면 실행을 멈추고 입력을 대기하는데, 안내문이 없으면 사용자가 무엇을 입력해야 할지 알 수 없기 때문이다.",
      "안내 메시지가 없으면 운영체제가 scanf()의 실행 권한을 자동으로 차단하기 때문이다.",
      "scanf() 함수 자체는 화면에 커서를 표시하는 기능이 전혀 없기 때문이다.",
      "입력 안내 메시지를 출력해야만 변수의 메모리 주소가 비로소 할당되기 때문이다."
    ],
    answer: "프로그램이 scanf()에 도달하면 실행을 멈추고 입력을 대기하는데, 안내문이 없으면 사용자가 무엇을 입력해야 할지 알 수 없기 때문이다.",
    rationale: "scanf()가 실행되면 콘솔 창에 커서만 깜빡이므로, 나이나 성적 등 어떤 데이터를 넣어야 하는지 알려주는 안내 메시지가 필수적입니다[cite: 35]."
  },
  {
    category: "3주차 • 코드 빈칸 채우기 (double형 입력 ⭐)",
    question: "키보드로부터 double형 실수 변수 grade의 값을 입력받으려 한다. [ 빈칸 ]에 들어갈 올바른 형식 지정자는?\n\ndouble grade;\nprintf(\"학점을 입력하시오: \");\nscanf(\"[ 빈칸 ]\", &grade);",
    options: [
      "%lf",
      "%f",
      "%d",
      "%c"
    ],
    answer: "%lf",
    rationale: "printf에서는 double도 %f로 출력이 가능하지만, scanf에서 double형 변수를 입력받을 때는 반드시 '%lf'(long float)를 명시해야 합니다[cite: 34, 35]."
  },
  {
    category: "3주차 • 실행 결과 예측 (정수 나눗셈 연산 ⭐)",
    question: "다음 코드에 세 정수 10, 20, 30을 차례로 입력했을 때, 화면에 출력되는 평균값은?\n\n#include <stdio.h>\nint main(void)\n{\n    int x, y, z, sum, avg;\n    scanf(\"%d %d %d\", &x, &y, &z);\n    sum = x + y + z;\n    avg = sum / 3;\n    printf(\"평균: %d\\n\", avg);\n    return 0;\n}",
    options: [
      "평균: 20",
      "평균: 20.000000",
      "평균: 20.0",
      "평균: 60"
    ],
    answer: "평균: 20",
    rationale: "int형 변수끼리의 나눗셈(60 / 3) 결과는 정수(몫) 20이 되며, %d로 출력되므로 '평균: 20'이 됩니다[cite: 35]."
  },
  {
    category: "3주차 • 에러 분석 및 디버깅 (char 입력 앞 공백 ⭐)",
    question: "나이(정수)를 입력받은 직후 성별(문자 1개)을 입력받으려고 할 때, 두 번째 scanf의 '%c' 앞에 공백을 두는 'scanf(\" %c\", &gender);' 형태로 작성하는 이유는?",
    options: [
      "직전 숫자 입력 후 누른 엔터(Enter) 줄바꿈 문자('\\n')가 버퍼에 남아 다음 문자 입력으로 오인되는 것을 건너뛰기 위해",
      "성별 문자를 반드시 대문자로 자동 변환하여 저장하기 위해",
      "char형 변수의 메모리 주소 할당을 강제로 초기화하기 위해",
      "Visual Studio 컴파일러에서 한글 입력을 방지하기 위해"
    ],
    answer: "직전 숫자 입력 후 누른 엔터(Enter) 줄바꿈 문자('\\n')가 버퍼에 남아 다음 문자 입력으로 오인되는 것을 건너뛰기 위해",
    rationale: "%c 앞에 공백을 두면 표준 입력 버퍼에 남아 있는 공백 문자나 개행 문자(\\n)를 무시하고 실제 문자 입력을 정상적으로 받을 수 있습니다[cite: 34, 35]."
  },
  {
    category: "3주차 • 처리 조건 실행결과 (원 계산)",
    question: "반지름 r이 5.0(double)일 때, 둘레 공식(peri = 2.0 * 3.14 * r)을 계산하여 printf(\"둘레: %lf\", peri); 로 출력한 결과는?",
    options: [
      "둘레: 31.400000",
      "둘레: 31.4",
      "둘레: 31.40",
      "둘레: 78.500000"
    ],
    answer: "둘레: 31.400000",
    rationale: "2.0 * 3.14 * 5.0 = 31.4 이며, %lf는 기본적으로 소수점 이하 6자리까지 0을 채워 '31.400000'으로 출력합니다[cite: 35]."
  },
  {
    category: "3주차 • 개념 문답형 (기본 자료형 분류)",
    question: "C 언어의 기본 자료형 중 '정수형'과 '실수형'의 기본형(Default Type)이 올바르게 짝지어진 것은?",
    options: [
      "정수형 기본: int, 실수형 기본: double",
      "정수형 기본: short, 실수형 기본: float",
      "정수형 기본: long, 실수형 기본: double",
      "정수형 기본: int, 실수형 기본: float"
    ],
    answer: "정수형 기본: int, 실수형 기본: double",
    rationale: "C 언어에서 정수 계산의 기본형은 int(4바이트)이며, 실수의 기본형은 충분한 정밀도를 가진 double(8바이트)입니다[cite: 34, 35]."
  },
  {
    category: "3주차 • 개념 문답형 (정수형 크기 대소 관계)",
    question: "정수형 자료형들의 메모리 크기(바이트) 대소 관계로 올바른 것은?",
    options: [
      "short (2B) ≤ int (4B) ≤ long (4B) ≤ long long (8B)",
      "char (1B) ≤ short (4B) ≤ int (4B) ≤ long (8B)",
      "int (2B) ≤ short (4B) ≤ long (8B) ≤ long long (16B)",
      "short (2B) ≤ long (4B) ≤ int (8B) ≤ long long (8B)"
    ],
    answer: "short (2B) ≤ int (4B) ≤ long (4B) ≤ long long (8B)",
    rationale: "일반적인 32/64비트 Windows(VS 2022) 기준 크기는 short가 2바이트, int와 long이 4바이트, long long이 8바이트입니다[cite: 35]."
  },
  {
    category: "3주차 • 개념 문답형 (short형의 표현 범위)",
    question: "16비트(2바이트) 크기를 갖는 'signed short' 정수형 변수가 저장할 수 있는 올바른 값의 범위는?",
    options: [
      "-32,768 ~ 32,767",
      "0 ~ 65,535",
      "-2,147,483,648 ~ 2,147,483,647",
      "-128 ~ 127"
    ],
    answer: "-32,768 ~ 32,767",
    rationale: "2바이트(16비트) 부호 있는 정수는 -2¹⁵ ~ 2¹⁵ - 1 이므로 -32768부터 32767까지의 범위를 갖습니다[cite: 35]."
  },
  {
    category: "3주차 • 실행 결과 예측 (sizeof 연산자)",
    question: "Visual Studio 2022(x64 환경)에서 다음 코드의 실행 결과로 올바른 출력은?\n\n#include <stdio.h>\nint main(void)\n{\n    printf(\"%d %d %d\", sizeof(char), sizeof(int), sizeof(double));\n    return 0;\n}",
    options: [
      "1 4 8",
      "1 2 4",
      "1 4 4",
      "2 4 8"
    ],
    answer: "1 4 8",
    rationale: "char는 1바이트, int는 4바이트, double은 8바이트이므로 '1 4 8'이 출력됩니다[cite: 35]."
  },
  {
    category: "3주차 • 개념 문답형 (unsigned 키워드 ⭐)",
    question: "정수형 자료형 앞에 붙이는 'unsigned' 키워드의 성질에 관한 설명으로 옳지 않은 것은?",
    options: [
      "음수와 양수를 모두 넓게 표현하기 위해 부호 비트를 최하위로 이동시킨다.",
      "음수를 저장할 수 없으며, 0 이상의 양의 정수만을 저장할 수 있다.",
      "음수를 표현하던 최상위 부호 비트를 크기 표현에 사용하므로 양수 표현 범위가 2배로 늘어난다.",
      "unsigned 정수를 화면에 출력할 때는 '%u' 형식 지정자를 사용한다."
    ],
    answer: "음수와 양수를 모두 넓게 표현하기 위해 부호 비트를 최하위로 이동시킨다.",
    rationale: "unsigned는 음수를 아예 다루지 않고 0 이상의 양수만 표현하는 키워드이며, 부호 비트가 존재하지 않습니다[cite: 35]."
  },
  {
    category: "3주차 • 개념 문답형 (unsigned short의 범위)",
    question: "2바이트 크기의 부호 없는 정수형 'unsigned short' 변수의 값 표현 범위는?",
    options: [
      "0 ~ 65,535",
      "-32,768 ~ 32,767",
      "0 ~ 32,767",
      "-65,536 ~ 65,535"
    ],
    answer: "0 ~ 65,535",
    rationale: "16비트 전체를 양수로 사용하므로 0부터 2¹⁶ - 1 인 65535까지 표현할 수 있습니다[cite: 35]."
  },
  {
    category: "3주차 • 개념 문답형 (부동소수점 표준 구조 ⭐)",
    question: "IEEE 754 표준에 따른 32비트 float 실수형의 비트 분할 구조가 올바른 것은?",
    options: [
      "부호 비트 1비트 + 가수 부분 23비트 + 지수 부분 8비트",
      "부호 비트 1비트 + 가수 부분 31비트",
      "부호 비트 2비트 + 가수 부분 20비트 + 지수 부분 10비트",
      "가수 부분 16비트 + 지수 부분 16비트"
    ],
    answer: "부호 비트 1비트 + 가수 부분 23비트 + 지수 부분 8비트",
    rationale: "단정밀도 float(32비트)는 부호 1비트, 가수 23비트, 지수 8비트로 구성되어 실수를 부동소수점 방식으로 표현합니다[cite: 35]."
  },
  {
    category: "3주차 • 개념 문답형 (실수 정밀도 비교)",
    question: "float와 double 자료형의 유효 자릿수(정밀도) 비교로 올바른 것은?",
    options: [
      "float는 약 7자리, double은 약 15~16자리의 정밀도를 갖는다.",
      "float와 double 둘 다 소수점 이하 25자리까지 오차 없이 정확하다.",
      "float는 약 15자리, double은 약 7자리의 정밀도를 갖는다.",
      "float는 정밀도가 무한대이며, double은 8바이트 고정 소수점이다."
    ],
    answer: "float는 약 7자리, double은 약 15~16자리의 정밀도를 갖는다.",
    rationale: "float는 4바이트로 약 7자리 유효숫자를 보장하며, double은 8바이트로 약 15~16자리의 정밀도를 보장합니다[cite: 35]."
  },
  {
    category: "3주차 • 개념 문답형 (ASCII 코드 개념)",
    question: "컴퓨터에서 문자를 표현하기 위해 널리 사용되는 'ASCII 코드'에 대한 설명으로 옳은 것은?",
    options: [
      "7비트 코드로 영문 대소문자, 숫자, 특수문자, 제어문자 등 총 128개의 문자를 표현한다.",
      "한글과 한자만을 표현하기 위해 한국 표준원에서 제정한 16비트 코드이다.",
      "대문자 'A'의 아스키 코드값은 97이다.",
      "문자 상수는 큰따옴표(\" \")로 감싸서 표기해야 한다."
    ],
    answer: "7비트 코드로 영문 대소문자, 숫자, 특수문자, 제어문자 등 총 128개의 문자를 표현한다.",
    rationale: "ASCII 코드는 7비트(0~127, 총 128개) 체계로 영문자, 숫자, 특수문자, 제어문자 4가지를 표현합니다[cite: 35]."
  },
  {
    category: "3주차 • 개념 문답형 (ASCII 핵심 값 암기 ⭐)",
    question: "시험에 자주 출제되는 아스키 코드의 10진수 값이 올바르게 연결되지 않은 것은?",
    options: [
      "문자 '0' — 32",
      "대문자 'A' — 65",
      "대문자 'B' — 66",
      "소문자 'a' — 97"
    ],
    answer: "문자 '0' — 32",
    rationale: "문자 '0'의 아스키 코드값은 48(Hex 30)이며, 32는 공백(space) 문자입니다[cite: 35]."
  },
  {
    category: "3주차 • 실행 결과 예측 (아스키 연산)",
    question: "다음 코드의 실행 결과로 출력되는 문자는?\n\n#include <stdio.h>\nint main(void)\n{\n    char ch = 'A';\n    printf(\"%c\", ch + 32);\n    return 0;\n}",
    options: [
      "a",
      "A",
      "B",
      "97"
    ],
    answer: "a",
    rationale: "대문자 'A'(65)에 32를 더하면 97이 되며, 이를 %c로 출력하면 소문자 'a'가 나옵니다[cite: 35]."
  },
  {
    category: "3주차 • 실행 결과 예측 (char형 정수 대입)",
    question: "다음 두 문장을 실행했을 때 출력되는 값은?\n\nchar code = 65;\nprintf(\"%c\", code);",
    options: [
      "A",
      "65",
      "a",
      "오류 발생"
    ],
    answer: "A",
    rationale: "char형 변수에 정수 65를 직접 대입해도 내부적으로 아스키 코드 65가 저장되므로, %c 출력 시 'A'가 출력됩니다[cite: 35]."
  },
  {
    category: "3주차 • 실행 결과 예측 (대입 시 자동 형변환 ⭐)",
    question: "다음 코드의 실행 결과로 변수 i에 최종 저장되는 값은?\n\nint i;\ni = 3.141592;",
    options: [
      "3",
      "3.14",
      "3.141592",
      "4 (반올림)"
    ],
    answer: "3",
    rationale: "실수형 데이터를 정수형 변수에 대입할 때 컴파일러가 자동 형변환을 수행하며, 반올림 없이 소수점 이하가 버려져 3이 됩니다[cite: 35]."
  },
  {
    category: "3주차 • 에러 분석 및 디버깅 (warning C4244)",
    question: "float형 변수 f의 값(183.5)을 int형 변수 i에 대입(i = f;)할 때 컴파일러가 'warning C4244' 경고를 띄우는 이유는?",
    options: [
      "더 큰 표현 범위를 가진 실수(float)에서 정수(int)로 변환되면서 소수점 이하의 데이터 손실이 발생하기 때문",
      "int형 변수 이름에는 알파벳 한 글자를 쓸 수 없기 때문",
      "float 변수를 int에 대입하려면 링커를 다시 실행해야 하기 때문",
      "세미콜론이 누락되어 구문 오류가 발생했기 때문"
    ],
    answer: "더 큰 표현 범위를 가진 실수(float)에서 정수(int)로 변환되면서 소수점 이하의 데이터 손실이 발생하기 때문",
    rationale: "실수에서 정수로 대입되면 소수부(.5)가 잘려나가는 데이터 손실(Truncation)이 발생하므로 컴파일러가 경고를 발생시킵니다[cite: 35]."
  },
  {
    category: "3주차 • 코드 빈칸 채우기 (퍼센트 기호 출력)",
    question: "화면에 '할인율: 20.00%' 처럼 퍼센트 기호(%) 자체를 온전히 출력하기 위해 [ 빈칸 ]에 들어갈 printf 문장 형태는?\n\nfloat discount = 20.0f;\nprintf(\"할인율: %.2f[ 빈칸 ]\\n\", discount);",
    options: [
      "%%",
      "\\%",
      "%",
      "%c"
    ],
    answer: "%%",
    rationale: "printf 서식 문자열 안에서 '%'는 형식 지정자의 시작 기호이므로, 문자 '%' 자체를 출력하려면 '%%'를 두 번 연속 써야 합니다[cite: 35]."
  },
  {
    category: "3주차 • 풀코딩 구조 (설문조사 3가지 입력 ⭐)",
    question: "다음 처리 조건을 만족하는 C 프로그램 코드로 옳은 것은?\n\n[조건]\n- 나이(int), 키(float), 성별(char)을 차례로 입력받을 것\n- 성별 입력 시 이전 엔터 방지를 위해 공백(\" %c\")을 둘 것\n- 키는 소수점 둘째 자리(%.2f)까지 출력할 것",
    options: [
      "#include <stdio.h>\nint main(void)\n{\n    int age;\n    float height;\n    char gender;\n    scanf(\"%d\", &age);\n    scanf(\"%f\", &height);\n    scanf(\" %c\", &gender);\n    printf(\"%d %.2f %c\\n\", age, height, gender);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int age;\n    double height;\n    char gender;\n    scanf(\"%d\", age);\n    scanf(\"%f\", height);\n    scanf(\"%c\", gender);\n    printf(\"%d %f %c\\n\", age, height, gender);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int age, height, gender;\n    scanf(\"%d %d %d\", &age, &height, &gender);\n    printf(\"%d %d %d\\n\", age, height, gender);\n    return 0;\n}",
      "#include <stdio.h>\nvoid main(void)\n{\n    char age, height, gender;\n    scanf(\"%s %s %s\", &age, &height, &gender);\n}"
    ],
    answer: "#include <stdio.h>\nint main(void)\n{\n    int age;\n    float height;\n    char gender;\n    scanf(\"%d\", &age);\n    scanf(\"%f\", &height);\n    scanf(\" %c\", &gender);\n    printf(\"%d %.2f %c\\n\", age, height, gender);\n    return 0;\n}",
    rationale: "변수 자료형(int, float, char), scanf의 & 주소 연산자, 문자 입력 시 공백(\" %c\"), %.2f 포맷 출력까지 처리 조건을 완벽히 만족합니다[cite: 35]."
  },
  {
    category: "3주차 • 풀코딩 구조 (두 정수 덧셈기 실습2 ⭐)",
    question: "키보드로 첫 번째 정수와 두 번째 정수를 입력받아 합을 계산한 뒤, '10 + 20 = 30' 형태로 화면에 출력하는 올바른 소스 코드는?",
    options: [
      "#define _CRT_SECURE_NO_WARNINGS\n#include <stdio.h>\nint main(void)\n{\n    int num1, num2, sum;\n    scanf(\"%d %d\", &num1, &num2);\n    sum = num1 + num2;\n    printf(\"%d + %d = %d\\n\", num1, num2, sum);\n    return 0;\n}",
      "#define _CRT_SECURE_NO_WARNINGS\n#include <stdio.h>\nint main(void)\n{\n    int num1, num2;\n    scanf(\"%d %d\", num1, num2);\n    printf(\"%d + %d = %d\\n\", num1, num2, num1 + num2);\n    return 0;\n}",
      "#include <stdio.h>\nint main(void)\n{\n    int num1, num2, sum;\n    scanf(\"%f %f\", &num1, &num2);\n    sum = num1 + num2;\n    printf(\"%f + %f = %f\\n\", num1, num2, sum);\n    return 0;\n}",
      "int main(void)\n{\n    int num1 = 10, num2 = 20;\n    printf(\"%d + %d = %d\\n\", num1, num2, 30);\n}"
    ],
    answer: "#define _CRT_SECURE_NO_WARNINGS\n#include <stdio.h>\nint main(void)\n{\n    int num1, num2, sum;\n    scanf(\"%d %d\", &num1, &num2);\n    sum = num1 + num2;\n    printf(\"%d + %d = %d\\n\", num1, num2, sum);\n    return 0;\n}",
    rationale: "C4996 경고 방지 매크로 선언, scanf에 & 전달, %d 형식 지정자와 변수 덧셈 연산까지 모든 문법이 일치합니다[cite: 34, 35]."
  },
  {
    category: "3주차 • 함수 작성 및 인자 반환",
    question: "반지름 r(double)을 매개변수로 전달받아 원의 면적(3.14 * r * r)을 계산하여 결과값을 반환(return)하는 함수의 올바른 코드는?",
    options: [
      "double get_circle_area(double r)\n{\n    return 3.14 * r * r;\n}",
      "void get_circle_area(double r)\n{\n    return 3.14 * r * r;\n}",
      "int get_circle_area(double r)\n{\n    return 3.14 * r * r;\n}",
      "double get_circle_area(void)\n{\n    return 3.14 * r * r;\n}"
    ],
    answer: "double get_circle_area(double r)\n{\n    return 3.14 * r * r;\n}",
    rationale: "반지름 r이 double이고 계산 결과 면적도 실수이므로, 반환형과 매개변수를 모두 double로 정의하는 것이 정확합니다[cite: 33, 35]."
  },
  {
    category: "3주차 • 처리 조건 실행결과 (자료형 범위 초과)",
    question: "short형 변수(최대 32767)에 40000을 대입하여 계산을 수행할 때 발생하는 현상에 대한 설명으로 옳은 것은?",
    options: [
      "저장 가능한 표현 범위를 초과하여 오버플로우가 발생하므로 엉뚱한 값(음수 등)이 저장된다.",
      "컴파일러가 자동으로 메모리를 4바이트 int형으로 확장하여 정상 저장한다.",
      "프로그램이 컴파일되지 않고 C2143 구문 에러가 발생한다.",
      "초과된 7233만큼의 데이터가 버퍼에 저장되어 자동으로 반올림된다."
    ],
    answer: "저장 가능한 표현 범위를 초과하여 오버플로우가 발생하므로 엉뚱한 값(음수 등)이 저장된다.",
    rationale: "자료형이 허용하는 비트 범위를 넘는 값을 대입하면 오버플로우가 발생하여 부호 비트가 침범당해 비정상적인 값으로 왜곡됩니다[cite: 35]."
  }
];