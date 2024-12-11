const ChaedleAdmin = () => {
  return (
    <>
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
    </>
  );
};

export default ChaedleAdmin;
