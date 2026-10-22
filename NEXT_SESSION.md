# chugaku-math 引き継ぎ

## 進捗
- 2026-10-22 作成・公開。中1〜中3の22単元88項目。各項目は「番号つき見出し → 要点(公式) → ひとこと説明 → ミニ例題(答えは details で隠す)」。
- 構成: index.html(本文を直書き) / style.css / app.js(目次の自動生成・KaTeX描画・答えの一括開閉)。ビルドなし。
- 公開: GitHub Pages (repo kaitoinoue0921/chugaku-math, main ブランチのルート) → https://kaitoinoue0921.github.io/chugaku-math/
- 更新手順: index.html を編集して commit → git push。数分で反映。
- ローカル確認: ~/.claude/launch.json の "chugaku-math"（python3 -m http.server 8765）。

## 決定事項と理由
- 置き場所は新サイト（本人選択）。とちます！の /formulas は5ブロックの簡易版、juken-notes の chu3-math は中3範囲・オフライン用で、どちらも中1〜中3網羅ではなかった。
- 参考にした atarimae.biz/archives/24613 は「円に内接する四角形」の1記事。1項目の書き方(番号見出し→要点→図→導き方)だけ参考にし、文面・例題はすべてオリジナル。
- 数式の図は SVG を currentColor で直書き（ダークモード対応）。

## 次のタスク
- とちます！のトップや /juken/ 入口からこのページへリンクを張るか決める。
- 例題を各項目2〜3問に増やす、または単元末に確認テストを付ける。

## 未確認事項
- スマホ実機での表示（エミュレーション375pxでは横はみ出しなし）。
