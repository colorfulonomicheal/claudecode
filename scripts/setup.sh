#!/bin/bash
# Claude Code AIエージェント環境セットアップスクリプト

set -e

echo "=== Claude Code AIエージェント環境セットアップ ==="
echo ""

# Node.jsバージョン確認
if ! command -v node &> /dev/null; then
    echo "❌ Node.js がインストールされていません"
    echo "   https://nodejs.org/ からインストールしてください"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js v18以上が必要です（現在: $(node -v)）"
    exit 1
fi
echo "✓ Node.js $(node -v)"

# Claude Code確認
if command -v claude &> /dev/null; then
    echo "✓ Claude Code インストール済み"
else
    echo "⚠ Claude Codeが見つかりません"
    echo "  インストール: curl -fsSL https://claude.ai/install.sh | bash"
fi

# 依存関係インストール
echo ""
echo "依存関係をインストール中..."
npm install
echo "✓ 依存関係インストール完了"

# 環境変数ファイル作成
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✓ .env ファイルを作成しました（APIキーを設定してください）"
else
    echo "✓ .env ファイルは既に存在します"
fi

echo ""
echo "=== セットアップ完了 ==="
echo ""
echo "次のステップ:"
echo "  1. .env ファイルにAPIキーを設定"
echo "  2. claude コマンドでClaude Codeを起動"
echo "  3. docs/ 配下のガイドを参照"
