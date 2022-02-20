Naevis Calling Project

주제

- 에스파의 세계관을 이어가는 프로젝트
- 사용 기술 : React, Nodejs, MongoDB 사용

구성

1. 메인 화면
   - (로그인이 되어있지 않으면 로그인or회원가입 화면)
   - (게임선택, 랭킹보기, 마이페이지보기, About보기)
2. 게임 선택 화면 (Black Mamba, Next Level, Savage)
3. 게임 화면 (Black Mamba, Next Level, Savage)
4. 랭킹 화면 (Total랭킹, 각 게임별 랭킹)
5. 마이 페이지 (내 정보, 나의 게임별 랭킹)
6. About (각 게임별 설명 등 정보)

게임 방식

- BLACK MAMBA

  - 처음 시작할 때 유저, 뱀 1마리, 보석 1개 등장
  - 유저가 보석을 먹으면 뱀이 1마리 늘어남
  - 뱀은 8마리가 최대
  - 점수는 시간이 흐르면 같이 오른다
  - 보석을 먹으면 더 많은 점수가 오른다
  - 보석은 뱀이 8마리가 채워지고 나서도 계속 나옴
  - 뱀에 닿으면 종료

- NEXT LEVEL, SAVAGE

  - 미정

---

- 할일

  - 게임 구현하기
  - 서버 구현하기
  - 로그인/회원가입 구현하기 (kakao OAuth 등)
  - DB 연결하기
  - MyPage, About 만들기

- Client

  - Pages
    - Sign In
    - Sign Up
    - Game Select
    - Rank Select
    - Ranking
    - MyPage
    - About
    - Play Game
  - Components
    - navigation(menu)
    - Game Box
    - 게임 구성 요소
      - Score
      - Arrow Keys
      - Game Screen

- Server-Client

  - GET
    - 로그인
    - 마이페이지 보기
    - 랭킹 보기
  - POST
    - 회원가입
  - PUT
    - 마이페이지 수정
    - 게임 후 점수 반영

- DB
  - ID, Password
  - MyPage Info
  - 각 게임 점수

---

commit type

- feat : 새로운 기능
- fix : 버그 수정
- perf : 성능 개선
- refactor : 코드 리팩토링
- style : 코드 의미에 영향을 주지 않는 변경사항
- build : 시스템 또는 외부 종속성에 영향을 미치는 변경사항 (npm 레벨)

README 미리보기 : command + shift + v

client 실행 : client 폴더에서 npm start (or npm run start)

server 미구현
