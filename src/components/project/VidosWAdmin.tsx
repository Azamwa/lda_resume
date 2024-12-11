const VidosW_Admin = () => {
  return (
    <>
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
    </>
  );
};

export default VidosW_Admin;
