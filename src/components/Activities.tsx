const Activities = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-2 text-slate-700">대외활동</h2>
      <div className="flex mb-2 items-end justify-between">
        <h3 className="flex items-end gap-4 text-xl font-semibold text-slate-600">
          향해플러스 프론트엔드 3기
          <p className="text-base font-semibold text-slate-400">팀스파르타</p>
        </h3>
        <div className="text-slate-500 gap-4">
          <p>2024.09 ~ 2024.11 (10주)</p>
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
    </>
  );
};

export default Activities;
