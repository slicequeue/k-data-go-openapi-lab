## 개요

공공 데이터 오픈API 실험실입니다. [공공데이터포털](https://www.data.go.kr) 에서 제공하는 공공 데이터 OpenAPI 에서 활용하고자 하는 것들을 신청하여 사용합니다.
공공 데이터 OpenAPI를 실험하는 공간이며, 활용이 용이하다고 판단되면 다른 프로젝트에서 쉽게 사용할 수 있도록 모듈로 만드는 작업을 진행합니다. 

## 처리 단계

1. 공공 데이터 OpenAPI 사용 대상 활용 신청
2. API 호출 테스트
3. 요청 & 응답 데이터 분석
4. 맵퍼 및 서비스 구현
5. 모듈화

이 단계를 반복적으로 수행하여 여러 OpenAPI를 사용을 경험해보고 필요한 프로젝트에서 구현한 모듈을 활용하는데 의의가 있습니다.

지금까지 진행한 공공데이터 OpenAPI 목록
* `국토교통부_(TAGO)_지하철정보`: https://www.data.go.kr/data/15098554/openapi.do
  * 작업 경로: /src/gov/tago-subway
* `서울특별시_위치정보조회서비스`: https://www.data.go.kr/data/15000332/openapi.do
  * 작업 경로: /src/gov/bus.js
* `식품의약품안전처_식품영양성분DB정보`: https://www.data.go.kr/data/15127578/openapi.do
  * 작업 경로: /src/gov/food

## 설치 방법

실행을 위한 노드 모듈들을 설치합니다.

```bash
$ npm install
```

핵심 모듈 설명
* `axios`: 공공데이터 API 호출용
* `express`: 테스트 API 호출을 위한 노드 서버 프레임워크
* `dotenv` : 환경 변수 설정

그외 어떤 노드 모듈들을 사용하는지 자세한 내역은 `package.json` 을 참고하시기 바랍니다. (불필요한 의존성 제거 예정)

## 환경 변수 설정

환경 설정 파일을 build 한 경로 내부에 설정해야함
`/config` 경로에 아래 파일을 생성한다.
.<NODE_ENV환경변수값>.env 
설정 내용은 다음과 같다.

```dotnetcli
GOV_API_KEY=<공공데이터OpenAPI발급키값>
```

- 위 설정을 사용은 config 이용하여 처리함
    
## 애플리케이션 실행

호출 테스트를 위한 API Express 서버를 실행합니다.

```bash
$ npm start
```

## 연락처

- Author - slicequeue@gmail.com



## 라이센스
MIT 라이센스를 따릅니다. 자세한 내용은 LICENSE 파일을 참조하세요.