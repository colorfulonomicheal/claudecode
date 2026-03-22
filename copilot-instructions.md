---
name: init-project-setup-workspace
description: Colorful Coffee プロジェクト初期設定テンプレート - Claude Code AI エージェント業務自動化環境
applyTo: "**"
---

# Colorful Coffee - プロジェクト初期設定テンプレート

Claude CodeのAIエージェント自動化環境を構築するためのプロジェクトテンプレートです。

## プロジェクト概要

- **プロジェクト名**: Colorful Coffee プロジェクト初期設定
- **Repository**: https://github.com/colorfulonomicheal/colorfu-Agent.git
- **ブランチ**: claude/init-project-setup-oTod0
- **目的**: プロジェクト初期化、環境構築、テンプレート設定

## このテンプレートについて

このブランチは、新しいプロジェクトを開始する際のテンプレートとして機能します。以下の機能を提供：

- コア3つのエージェント定義（Code Reviewer、Doc Writer、Task Planner）
- VS Code統合のための設定ファイル
- プロジェクト初期化の手順

## 利用可能なエージェント

このプロジェクトには、基本的な3つのエージェントが定義されています：

| エージェント | 役割 | 用途 |
|-----------|------|------|
| **Code Reviewer** | コード品質・セキュリティレビュー | 実装後のコード品質確認 |
| **Doc Writer** | ドキュメント・仕様書作成 | API仕様書、設計書の自動生成 |
| **Task Planner** | タスク分解・実装計画立案 | 要件の具体化、実装計画展開 |

## クイックスタート

### 1. リポジトリのクローン
```bash
git clone https://github.com/colorfulonomicheal/colorfu-Agent.git
cd colorfu-Agent
```

### 2. ブランチ切り替え
```bash
# 既存テンプレートの確認
git branch -a | grep claude/

# プロジェクト初期設定ブランチへ
git checkout claude/init-project-setup-oTod0
```

### 3. 環境構築
```bash
npm install
npm run build
npx bash scripts/setup.sh
```

### 4. VS Code エージェントの確認
- `/` コマンドでエージェント一覧表示
- チャットで`@code-reviewer` などでメンション

## プロジェクトテンプレート構造

```
project-root/
├── .claude/                    # VS Code Agent設定
│   ├── agents/                 # エージェント定義
│   │   ├── code-reviewer.md
│   │   ├── doc-writer.md
│   │   └── task-planner.md
│   └── settings.json          # VS Code統合設定
├── .github/                    # GitHub設定
├── docs/                       # ドキュメント
├── examples/                   # サンプルコード
├── scripts/                    # 自動化スクリプト
├── src/                        # ソースコード
├── test/                       # テスト
├── package.json
├── tsconfig.json
├── CLAUDE.md                   # プロジェクト説明
├── copilot-instructions.md     # ワークスペース指示
└── AGENTS.md                   # エージェント説明
```

## 推奨ワークフロー

### Phase 1: プロジェクト企画・計画
```
@task-planner 
→ 要件をタスク化、実装計画を立案
```

### Phase 2: 開発・実装
```
// コードを実装
// テストを作成
```

### Phase 3: コードレビュー
```
@code-reviewer
→ コード品質・セキュリティをレビュー
```

### Phase 4: ドキュメント作成
```
@doc-writer
→ API仕様書、設計書を生成
```

## 権限設定

`.claude/settings.json`で以下の権限が設定されています：

### 許可コマンド
- **ビルド・テスト**: npm install, npm test, npm run lint, npm run build
- **Git操作**: git status, git diff, git fetch, git log
- **ファイル操作**: Read, Write, Edit
- **検索**: Glob, Grep, FileSearch

### 制限コマンド（セキュリティ）
- `rm -rf` - 破壊的削除
- `sudo` - 管理者権限昇格
- `git push --force` - 強制プッシュ

## VS Code統合設定

`.claude/settings.json` でプロジェクト固有の設定が管理されます：

### エージェント自動検出
```json
"agents": {
  "enabled": true,
  "autoDiscovery": true
}
```

### ヘルパー・ツール
- **PostToolUse**: ファイル変更時に確認メッセージ
- **PreToolUse**: コマンド実行前の通知

## ドキュメンテーション

- **[CLAUDE.md](CLAUDE.md)** - プロジェクト概要・規約
- **[AGENTS.md](AGENTS.md)** - 利用可能なエージェント説明
- **[copilot-instructions.md](copilot-instructions.md)** - ワークスペース指示
- **[docs/](docs/)** - 詳細ドキュメント

## カスタマイズ

### 新しいエージェント定義の追加

1. `.claude/agents/xxxx.md` を作成
   ```yaml
   ---
   name: xxxx
   description: "説明文. Use when: 使用時の条件"
   tools: Read, Write, Grep
   model: claude-3-5-sonnet-20241022
   ---
   ```

2. VS Codeをリロード

### プロジェクト固有の権限設定

`.claude/settings.json` の `permissions` セクションを編集

## 関連リソース

- **GitHub**: https://github.com/colorfulonomicheal/colorfu-Agent
- **Claude Code Documentation**: 新しいブラウザタブで確認
- **ブランチ一覧**:
  - `claude/ai-agent-claude-code-QUUwj` - 基本エージェント実装
  - `claude/coffee-market-research-team-VvEdn` - 市場調査チーム
  - `claude/colorful-coffee-marketing-strategy-JWdUF` - マーケティング戦略
  - `claude/colorful-coffee-planning-khvXx` - 商品企画
  - `claude/init-project-setup-oTod0` - プロジェクト初期設定（このブランチ）

## ベストプラクティス

1. **各ブランチの用途**: ブランチごとに異なるプロジェクトコンテキスト
2. **エージェント連携**: 複数エージェントを効果的に組み合わせる
3. **権限最小化**: セキュリティを考慮した権限設定
4. **定期的な更新**: エージェント定義と設定を定期的に見直す

---

**更新日**: 2026年3月22日  
**テンプレート版**: v1.0  
**ステータス**: ✅ 本番利用可能
