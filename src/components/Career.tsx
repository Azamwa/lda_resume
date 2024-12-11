const Career = () => {
  return (
    <>
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
    </>
  );
};

export default Career;
