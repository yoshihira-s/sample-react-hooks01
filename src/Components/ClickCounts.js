import React, { useState, useEffect } from "react";

function ClickCounts() {
  //ステートフック
  const [count, setCount] = useState(0);
  let [name, setName] = useState("佐藤");

  //副作用フック
  useEffect(() => {
    document.title = `${name}さんは${count}回クリックしました`;
  });

  return (
    <>
      <div className="text-center mx-5 my-5">
        <p>あなたは{count}回クリックしました</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          カウントアップ
        </button>
      </div>
      <div className="text-center mx-5 my-5">
        <p>あなたの名前は{name}さん</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setName((name = "鈴木"));
          }}
        >
          名前を変更
        </button>
      </div>
    </>
  );
}

export default ClickCounts;
