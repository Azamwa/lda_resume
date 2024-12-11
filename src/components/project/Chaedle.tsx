const Chaedle = () => {
  return (
    <>
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
    </>
  );
};

export default Chaedle;
