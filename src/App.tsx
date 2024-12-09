import "./global.css";

function App() {
  return (
    <div className="flex justify-center px-6 py-6 w-full flex-col">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold mb-1 text-slate-700">이동아</h1>
        <p className="text-xl font-semibold mb-4 text-slate-700">프론트엔드 엔지니어</p>

        <p className="mb-1 text-slate-600">이메일: christar99@naver.com</p>
        <p className="mb-1 text-slate-600">연락처: 010-2509-8547</p>
        <p className="mb-1 text-slate-600">
          깃허브:{" "}
          <a href="https://github.com/azamwa" target="_blank">
            https://github.com/azamwa
          </a>
        </p>
      </div>
      <p>
        몰입하는 것을 즐기는 3년차 프론트엔드 엔지니어 이동아입니다.
        <ul>
          <li>
            • 신뢰받는 동료가 되기 위해 스터디와 교육프로그램에 참여하며 생산성 및 기술적 역량을
            성장시켰습니다.
          </li>
          <li>
            • 더 나은 사용자 경험을 주기 위해 UX 개선을 위한 아이디어를 제안하며 팀과 협업했습니다.
          </li>
        </ul>
      </p>
      <hr className="my-6" />
      <h2 className="text-2xl font-semibold mb-2 text-slate-700">기술스택</h2>
      <p className="font-semibold">TypeScript, React, Next.js, Vue2, AWS(S3, CloudFront, EC2)</p>
      <hr className="my-6" />
      <h2 className="text-2xl font-semibold mb-2 text-slate-700">경력</h2>
      <div className="flex">
        <h3 className="flex-[1_1_0] text-lg font-semibold text-slate-700 items-center">
          (주) 데이터봇
        </h3>
        <div className="flex-[3_1_0] flex justify-end text-slate-500">
          <p>2023.12 ~ 2024.09 (10개월)</p>
        </div>
      </div>
      <div className="pl-6">
        <p className="mb-1">오픈마켓 주문정보 크롤링 및 통합 조회, 주문 솔루션 제공 회사</p>
        <ul className="mb-5 pl-2">
          <li>• 유저, Admin 프로젝트를 처음부터 구축 및 배포</li>
          <li>• Admin 페이지에서 React와 TypeScript도입</li>
          <li>• 코드 컨벤션, 공통 컴포넌트/유틸함수, 전역변수 등을 문서화</li>
        </ul>
      </div>
      <div className="flex mb-2">
        <h3 className="flex-[1_1_0] text-lg font-semibold text-slate-700 items-center">
          (주) 이음
        </h3>
        <div className="flex-[3_1_0] flex justify-end text-slate-500">
          <p>2021.08 ~ 2022.09 (1년 1개월)</p>
        </div>
      </div>
      <div className="pl-6">
        <p className="mb-1">
          아파트 입주 전/후의 하자를 점검하고 각 행사(사전점검, 입주점검 등)를 예약, 관리할 수 있게
          도와주는 B2B 회사
        </p>
        <ul className="pl-2">
          <li>• 건설사가 사용할 수 있는 입주민, 행사관리 Admin 페이지 유지보수</li>
          <li>• 입주민 전용 웹앱 신규 프로젝트 설계 및 개발</li>
        </ul>
      </div>
      <hr className="my-6" />
      <h2 className="text-2xl font-semibold mb-2 text-slate-700">프로젝트</h2>
      <div className="flex mb-2 items-end justify-between">
        <h3 className="flex items-end gap-4 text-xl font-semibold text-slate-600">
          VidosW(비도스웹)<p className="text-base font-semibold text-slate-400">(주) 데이터봇</p>
        </h3>
        <div className="text-slate-500 gap-4">
          <p>2023.12 ~ 2024.09 (10개월)</p>
        </div>
      </div>
      <div className="pl-6 mb-8">
        <p className="mb-1 font-semibold">
          다양한 오픈마켓에서 크롤링 한 정보를 수집/가공하여, 새로 업로드할 수 있게 도와주는
          프로그램
        </p>
        <ul className="pl-2 mb-5">
          <li>• 결제 페이지 구현, PG사 연동작업</li>
          <li>• 이미지 에디터 직접 구현 - crop, zoom, 텍스트 번역, 텍스트 입력 등을 처리</li>
          <li>• 라이브러리를 사용하지 않고 dialog, dropdown, card 등의 다양한 UI 컴포넌트 제작</li>
        </ul>

        <h4 className="font-semibold">Tech Stack</h4>
        <p className="pl-4">Vue2, Pinia</p>
      </div>
      <div className="flex mb-2 items-end justify-between">
        <h3 className="flex items-end gap-4 text-xl font-semibold text-slate-600">
          VidosW Admin
          <p className="text-base font-semibold text-slate-400">(주) 데이터봇</p>
        </h3>
        <div className="text-slate-500 gap-4">
          <p>2024.06 ~ 2024.09 (4개월)</p>
        </div>
      </div>
      <div className="pl-6 mb-12">
        <p className="mb-1 font-semibold">
          VidosW에서 유저가 등록한 정보들을{" "}
          <strong className="text-slate-700">데이터 시각화</strong>하고, 조작할 수 있게 함
        </p>
        <ul className="pl-2 mb-5">
          <li>• 사용자의 권한별로 읽고 수정할 수 있는 기능 구현</li>
          <li>
            • 커스텀훅을 사용하고, 데이터를 기반으로 컴포넌트를 적절히 나누어{" "}
            <strong className="text-slate-700">불필요한 렌더링 방지</strong>
          </li>
          <li>
            • TypeScript 도입. tsconfig와 eslint의 설정으로 프로젝트에서 타입 안정성과 유지보수성을
            개선
          </li>
          <li>
            • Tailwind와 shadcn 도입. HTML과 CSS 그리고 JavaScript를 한 파일에서 모두 볼 수 있게
            구성. shadcn을 통한 UI컴포넌트를 제작하여{" "}
            <strong className="text-slate-700">재사용성 확대</strong>
          </li>
        </ul>

        <h4 className="font-semibold">Tech Stack</h4>
        <p className="pl-4">React18, TypeScript, Zustand, Tailwind, shadcn</p>
      </div>
      <div className="flex mb-2 items-end justify-between">
        <h3 className="flex items-end gap-4 text-xl font-semibold text-slate-600">
          Admin
          <p className="text-base font-semibold text-slate-400">(주) 이음</p>
        </h3>
        <div className="text-slate-500 gap-4">
          <p>2021.08 ~ 2022.09 (1년 1개월)</p>
        </div>
      </div>
      <div className="pl-6 mb-8">
        <p className="mb-1 font-semibold">
          입주민이 등록한 아파트 하자를 건설사 관리자가 볼 수 있게 만들어진 서비스. 등록된 하자를
          표, 그래프 등으로 알아보기 쉽게 제작
        </p>
        <ul className="pl-2 mb-5">
          <li>• 기능은 유지한 채로 디자인만 변경하여 웹사이트 리뉴얼.</li>
          <li>• 리뉴얼 중, 데이터를 기반으로 단일책임에 맞게 컴포넌트를 분리하여 가독성 개선</li>
          <li>
            • Chart.js 라이브러리를 활용하여 표, 그래프 등을 커스터마이징. 요구사항에 맞춰 데이터
            시각화
          </li>
          <li>
            • <strong className="text-slate-700">Sentry 설정으로 에러 트래킹 방식개선</strong>. 유사
            에러를 Issue Grouping으로 통합하고, 필요한 알람만 울리도록 설정하여 효율성 향상
          </li>
        </ul>

        <h4 className="font-semibold">Tech Stack</h4>
        <p className="pl-4">Vue2, Vuetify, Vuex</p>
      </div>

      <div className="flex mb-2 items-end justify-between">
        <h3 className="flex items-end gap-4 text-xl font-semibold text-slate-600">
          Chaedle(채들)
          <p className="text-base font-semibold text-slate-400">(주) 이음</p>
        </h3>
        <div className="text-slate-500 gap-4">
          <p>2022.02 ~ 2022.06 (4개월)</p>
        </div>
      </div>
      <div className="pl-6">
        <p className="mb-1 font-semibold">아파트의 행사예약, 하자 등록이 가능한 입주민 전용 웹앱</p>
        <ul className="pl-2 mb-5">
          <li>• 웹사이트의 전체 설계 및 개발</li>
          <li>
            • 상태관리, API요청 모듈화, 컴포넌트 구성 등의{" "}
            <strong className="text-slate-700">아키텍쳐 설계</strong>
          </li>
          <li>
            • <strong className="text-slate-700">Socket.IO</strong>를 활용한{" "}
            <strong className="text-slate-700">실시간 예약 서비스 구축</strong>. 서버와 클라이언트
            간 실시간 데이터 통신을 구현해 사용자 경험 향상
          </li>
          <li>• 직접 촬영한 사진/동영상을 업로드할 수 있는 기능 구현</li>
        </ul>

        <h4 className="font-semibold">Tech Stack</h4>
        <p className="pl-4">Vue2, Vuetify, Vuex</p>
      </div>
      <hr className="my-6" />
      <h2 className="text-2xl font-semibold mb-2 text-slate-700">대외활동</h2>
      <div className="flex mb-2 items-end justify-between">
        <h3 className="flex items-end gap-4 text-xl font-semibold text-slate-600">
          향해플러스 프론트엔드 3기
          <p className="text-base font-semibold text-slate-400">팀스파르타</p>
        </h3>
        <div className="text-slate-500 gap-4">
          <p>2024.09 ~ 2024.11.30 (예정)</p>
        </div>
      </div>
      <div className="pl-6 mb-16">
        <p className="mb-1">현재 과제 17/18 패스. 패스한 17개의 과제 중 13개 우수 평가 획득</p>
        <ul className="pl-2">
          <li>• 팀장으로 활동하여 팀원 의견 조율 및 문서화(코드 컨벤션, 멘토일지)</li>
          <li>• 과제가 끝난 후에도 더 좋은 방향을 공유하기 위해 팀원끼리 코드리뷰 진행</li>
          <li>
            • <strong className="text-slate-700">React의 원리와 구조를 파악</strong>하고 이를
            이용하여 <strong className="text-slate-700">렌더링 성능</strong> 향상 가능
          </li>
          <li>
            • 클린코드를 적용하여{" "}
            <strong className="text-slate-700">가독성 높은 코드를 작성</strong>
            하고, <strong className="text-slate-700">생산성</strong> 향상 가능
          </li>
          <li>
            • 상황에 맞게 유닛테스트, 통합테스트, e2e테스트 등을 적용(
            <strong className="text-slate-700">테스트 전략 수립</strong>)
          </li>
          <li>• CDN 도입을 통한 콘텐츠 전달 속도 최적화</li>
          <li>• React Query에서 캐싱 및 에러 처리 전략 도입</li>
        </ul>
      </div>
      <div className="flex items-center flex-col">
        <span className="italic text-slate-500">감사합니다.</span>
        <p>Frontend Engineer 이동아</p>
      </div>
    </div>
  );
}

export default App;
