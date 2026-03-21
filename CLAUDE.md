# Claude Code AIエージェント環境

## プロジェクト概要
Claude Codeを活用したAIエージェント業務自動化環境のテンプレートプロジェクト。

## コーディング規約
- TypeScriptを使用（新規ファイル）
- ESModules（import/export）を使用
- Prettierでフォーマット
- テストは `*.test.ts` に記述

## よく使うコマンド
- `npm install` - 依存関係のインストール
- `npm test` - テスト実行
- `npm run lint` - コードチェック
- `npm run build` - ビルド

## ワークフロー
- コミット前にテストを実行すること
- Conventional Commitsに従うこと
- PRを作成してコードレビューを受けること

## ディレクトリ構成
- `docs/` - ドキュメント
- `.claude/agents/` - カスタムサブエージェント定義
- `.claude/settings.json` - プロジェクト設定
- `scripts/` - 自動化スクリプト
- `examples/` - Agent SDK使用例
