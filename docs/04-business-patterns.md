# 業務活用パターン集

## パターン1: コードレビュー自動化

### 概要
PRが作成されたら自動的にコードレビューを実行し、フィードバックをコメントとして投稿。

### 設定方法
1. GitHub Appをインストール
2. `.github/workflows/claude.yml` を作成

```yaml
name: Claude Code Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@v1
        with:
          prompt: |
            このPRの変更をレビューしてください。
            セキュリティ、パフォーマンス、コード品質の観点でフィードバックをお願いします。
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

---

## パターン2: バグ修正の自動化

### 概要
Issueに `@claude` でメンションすると、自動的にバグを調査・修正するPRを作成。

### 使い方
```
# GitHub Issueのコメントで
@claude このバグを調査して修正PRを作成してください
```

---

## パターン3: テスト生成

### 概要
既存コードに対するテストを自動生成。

### 使い方
```bash
claude "src/services/auth.ts のユニットテストを作成して。
       エッジケースも含めてカバレッジ90%以上を目指して"
```

---

## パターン4: ドキュメント自動生成

### 概要
コードベースからAPI仕様書やREADMEを自動生成・更新。

### 使い方
```bash
claude "doc-writerエージェントを使って、
       src/api/ 配下のエンドポイントのAPI仕様書を作成して"
```

---

## パターン5: リファクタリング支援

### 概要
大規模なリファクタリングを計画的に実行。

### 使い方
```bash
# まず計画を立てる
claude "task-plannerエージェントを使って、
       認証モジュールのリファクタリング計画を立てて"

# 計画に基づいて実行
claude "計画に従って、Phase 1のタスクを実行して"
```

---

## パターン6: 障害対応支援

### 概要
エラーログを分析し、原因特定と修正案を提示。

### 使い方
```bash
# ログを分析
cat error.log | claude -p "このエラーの原因を特定して修正案を提示して"

# データベースも確認
claude "PostgreSQLサーバーで関連テーブルを確認し、
       データ不整合がないか調査して"
```

---

## パターン7: 定期タスクの自動化

### 概要
依存関係の更新チェック、セキュリティスキャンなどを定期実行。

### GitHub Actionsでの設定
```yaml
name: Weekly Maintenance
on:
  schedule:
    - cron: '0 9 * * 1'  # 毎週月曜9時

jobs:
  maintenance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@v1
        with:
          prompt: |
            以下のメンテナンスタスクを実行してください：
            1. 依存関係のセキュリティ脆弱性チェック
            2. 非推奨APIの使用箇所の確認
            3. TODO/FIXMEコメントの一覧化
            結果をIssueとして作成してください。
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

---

## パターン8: マルチエージェント連携

### 概要
複数のエージェントを組み合わせて複雑なワークフローを実行。

### 使い方
```bash
claude "以下の手順で新機能を実装してください：
       1. task-plannerで実装計画を立てる
       2. 計画に基づいてコードを実装する
       3. code-reviewerでセルフレビューする
       4. doc-writerでドキュメントを更新する"
```

---

## コスト最適化のヒント

| タスク | 推奨モデル | 理由 |
|-------|-----------|------|
| コードフォーマット | haiku | 単純な変換タスク |
| コードレビュー | sonnet | バランスが良い |
| アーキテクチャ設計 | opus | 高度な推論が必要 |
| テスト生成 | sonnet | パターン認識が重要 |
| バグ修正 | sonnet/opus | 複雑さに応じて選択 |
