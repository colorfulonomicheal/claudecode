# MCP（Model Context Protocol）連携ガイド

## 1. MCPとは

MCPは、Claude Codeを外部ツール・サービスと接続するためのプロトコルです。
データベース、Slack、GitHub、ブラウザなど様々なサービスと連携できます。

## 2. MCPサーバーの追加

### コマンドラインから
```bash
# HTTPサーバー
claude mcp add slack https://example.com/mcp/slack

# ローカルstdioサーバー
claude mcp add playwright --stdio npx @playwright/mcp@latest
```

### 設定ファイル（.mcp.json）
```json
{
  "mcpServers": {
    "postgres": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-postgres",
        "--connection-string",
        "${DATABASE_URL}"
      ]
    },
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    },
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "auth": "oauth"
    }
  }
}
```

## 3. よく使うMCPサーバー

| サーバー | 用途 | パッケージ |
|---------|------|-----------|
| PostgreSQL | DBクエリ実行 | `@modelcontextprotocol/server-postgres` |
| Playwright | ブラウザ操作 | `@playwright/mcp` |
| GitHub | PR・Issue管理 | 公式GitHub App |
| Slack | メッセージ送受信 | Slack MCP |
| Notion | ドキュメント管理 | Notion MCP |

## 4. 活用例

### データベース分析
```
PostgreSQLサーバーを使って、先月のユーザー登録数を集計して
```

### ブラウザテスト
```
Playwrightを使って、ログインページの動作確認をして
```

### チーム通知
```
Slackの#devチャンネルにデプロイ完了を通知して
```

## 5. セキュリティ上の注意

- 本番DBへの接続は**読み取り専用ユーザー**を使用
- 環境変数で認証情報を管理（`.env`ファイル）
- MCPサーバーの権限は最小限に設定
