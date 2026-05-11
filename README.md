# Todo App（React × MUI × Vitest）

## 概要

Todo アプリを作成しました。
機能としては、_追加・削除・完了切り替え・フィルター機能_ を実装しており、状態管理を意識して設計しています。

また、ローカルストレージを使った _データ永続化_ や、_Vitest + React Testing Library_ を用いた単体テストも実装しました。
現在も改善を続けており、より実務に近い構成にアップデートしています。

---

## 機能

- タスク追加
- タスク削除
- 完了状態の切り替え
- フィルター機能（すべて / 未完了 / 完了済み）
- リロードしても消えない
- チェックが 1 つも無い → 削除ボタン無効
- チェックがある → 削除可能
- 削除後に Snackbar 表示

---

## 技術スタック

- React（Vite）
- TypeScript
- Material UI（MUI）
- Vitest

---

## セットアップ

bash

`npm install`
`npm run dev`

---
https://github.com/yuringo738/todolist-mui/issues/1

## 今後の改善

- UI の改善（アニメーションなど）
- より実務に近いディレクトリ構成へのアップデート
