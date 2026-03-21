# colorful coffee 市場調査チーム

Claude Code上に構築された、colorful coffeeの経営戦略立案を支援する5つの専門エージェントチームです。

## チーム構成

| エージェント | 役割 | 専門領域 |
|-------------|------|---------|
| **market-analyst** | 市場分析 | 市場規模、成長率、市場構造、PEST/5Forces分析 |
| **consumer-researcher** | 消費者調査 | 顧客セグメント、ペルソナ、購買行動、嗜好トレンド |
| **competitor-analyst** | 競合分析 | 競合マッピング、ポジショニング、差別化機会 |
| **trend-forecaster** | トレンド予測 | メガトレンド、テクノロジー、新興ビジネスモデル |
| **strategy-synthesizer** | 戦略統合 | 全調査の統合、戦略オプション策定、実行計画 |

## 使い方

### 個別エージェントの起動

各エージェントは `@エージェント名` で呼び出せます：

```
@market-analyst 日本のコーヒー市場の規模と成長率を調査してください
@consumer-researcher Z世代のコーヒー消費行動を分析してください
@competitor-analyst スターバックスとブルーボトルの戦略を比較分析してください
@trend-forecaster 2026-2030年のコーヒー業界トレンドを予測してください
@strategy-synthesizer 各チームの調査結果を統合して戦略提言をまとめてください
```

### 推奨ワークフロー

1. **Phase 1: 並行調査** — market-analyst、consumer-researcher、competitor-analyst、trend-forecasterを並行して起動
2. **Phase 2: 統合分析** — 各レポートが揃ったら strategy-synthesizer で統合・戦略策定
3. **Phase 3: 深掘り** — 必要に応じて特定エージェントで追加調査

### 調査テーマ例

- 新規出店エリアの選定
- メニュー戦略（スペシャルティ vs デイリー）
- 価格戦略の最適化
- デジタル戦略（アプリ、モバイルオーダー、サブスク）
- ブランディング戦略（"colorful"のブランド価値最大化）
- サステナビリティ戦略
