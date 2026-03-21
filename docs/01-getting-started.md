# Claude Code AIエージェント環境 - はじめに

## 1. Claude Codeとは

Claude Codeは、Anthropicが提供するAIエージェントコーディングツールです。
ターミナル、VS Code、デスクトップアプリなど複数の形式で利用でき、
ソフトウェア開発タスクを自律的に実行できます。

## 2. インストール

```bash
# macOS / Linux / WSL
curl -fsSL https://claude.ai/install.sh | bash

# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```

## 3. 基本的な使い方

### インタラクティブモード（対話形式）
```bash
cd your-project
claude
```

### ワンショットモード（単発実行）
```bash
claude "バグを修正して"
claude -p "APIエンドポイントを一覧化して" --output-format json
```

### セッション管理
```bash
claude --continue          # 前回のセッションを再開
claude --resume            # セッション一覧から選択
```

## 4. 主要なスラッシュコマンド

| コマンド | 説明 |
|---------|------|
| `/help` | ヘルプ表示 |
| `/init` | CLAUDE.mdを自動生成 |
| `/clear` | コンテキストをリセット |
| `/compact` | 会話を要約して圧縮 |
| `/cost` | トークン使用量・コスト確認 |
| `/permissions` | ツールのアクセス権限設定 |
| `/mcp` | MCPサーバー管理 |
| `/agents` | サブエージェント管理 |
| `/memory` | 永続的な指示を管理 |

## 5. キーボードショートカット

| キー | 動作 |
|------|------|
| `Ctrl+C` / `Esc` | 実行中の処理を停止 |
| `?` | ショートカット一覧表示 |

## 6. モデル選択

```bash
claude --model sonnet    # 高速・コスト効率重視
claude --model opus      # 最高精度（複雑なタスク向け）
claude --model haiku     # 最速・低コスト（簡単なタスク向け）
```

## 7. 次のステップ

- [エージェント設定ガイド](./02-agent-setup.md)
- [MCP連携ガイド](./03-mcp-integration.md)
- [業務活用パターン](./04-business-patterns.md)
