'use client';

import React, { useState } from 'react';

export default function Home() {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [sttResult, setSttResult] = useState<string>('');
  const [llmResult, setLlmResult] = useState<string>('');

  // ボタンがクリックされたときの仮の処理（今は何もしない）
  const handleButtonClick = () => {
    // ここに後でボタンが押されたときの処理を書きます
    console.log('ボタンがクリックされました！');
    // 仮に録音状態を切り替えてみる (次のステップでちゃんと実装)
    setIsRecording(!isRecording);
  };

  return (
    <main style={{ padding: '2rem' }}> {/* 簡単な余白をつける */}
      <h1>和むすび 超・簡易プロトタイプ</h1>

      <button onClick={handleButtonClick} style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '1rem' }}>
        {isRecording ? '録音停止' : '録音開始'}
      </button>

      {/* 2. リアルタイム文字起こし表示エリア */}
      <div>
        <h3>文字起こし結果 (STT):</h3>
        {/* readOnly をつけて編集不可にする */}
        <textarea
          value={sttResult}
          readOnly
          placeholder="ここに音声認識の結果が表示されます..."
          style={{ width: '100%', height: '100px', marginBottom: '1rem', border: '1px solid #ccc', padding: '8px' }}
        />
        {/* または単純な表示なら <p> や <div> でもOK */}
        {/* <div style={{ border: '1px solid #ccc', minHeight: '50px', padding: '8px', marginBottom: '1rem' }}>
          {sttResult || 'ここに音声認識の結果が表示されます...'}
        </div> */}
      </div>

      {/* 3. LLM処理結果表示エリア */}
      <div>
        <h3>LLM 処理結果:</h3>
        <textarea
          value={llmResult}
          readOnly
          placeholder="ここにLLMの処理結果が表示されます..."
          style={{ width: '100%', height: '100px', border: '1px solid #ccc', padding: '8px' }}
        />
        {/* <div style={{ border: '1px solid #ccc', minHeight: '50px', padding: '8px' }}>
          {llmResult || 'ここにLLMの処理結果が表示されます...'}
        </div> */}
      </div>

      {/* 4. デバッグ情報表示エリア（オプション） - 今は空 */}
      {/* <div style={{ marginTop: '2rem', borderTop: '1px dashed #eee', paddingTop: '1rem' }}>
        <h4>デバッグ情報:</h4>
        <pre>
          録音状態: {isRecording ? '録音中' : '停止中'}
        </pre>
      </div> */}
    </main>
  );
}