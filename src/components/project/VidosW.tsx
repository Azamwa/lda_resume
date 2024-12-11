const VidosW = () => {
  return (
    <>
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
    </>
  );
};

export default VidosW;
