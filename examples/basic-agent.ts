/**
 * Claude Agent SDK 基本的な使用例
 *
 * Agent SDKを使ってプログラムからClaude Codeの機能を呼び出す例です。
 */

// import { query, ClaudeAgentOptions } from "@anthropic-ai/claude-agent-sdk";

// --- 例1: 基本的なクエリ ---
async function basicQuery(): Promise<void> {
  console.log("=== 基本的なクエリ ===");

  // Agent SDKを使った基本的な呼び出し
  // const result = await query({
  //   prompt: "src/ディレクトリの構成を説明してください",
  //   options: {
  //     allowedTools: ["Read", "Glob", "Grep"],
  //     model: "sonnet",
  //   },
  // });
  // console.log(result);

  console.log(
    "Agent SDKをインストール後、コメントアウトを解除して実行してください"
  );
}

// --- 例2: ストリーミング出力 ---
async function streamingQuery(): Promise<void> {
  console.log("=== ストリーミング出力 ===");

  // for await (const message of query({
  //   prompt: "パフォーマンスに問題がある箇所を特定してください",
  //   options: {
  //     allowedTools: ["Read", "Grep", "Glob", "Bash"],
  //     model: "sonnet",
  //   },
  // })) {
  //   if (message.type === "text") {
  //     process.stdout.write(message.content);
  //   }
  // }

  console.log(
    "Agent SDKをインストール後、コメントアウトを解除して実行してください"
  );
}

// --- 例3: カスタムツール制限付きクエリ ---
async function restrictedQuery(): Promise<void> {
  console.log("=== 読み取り専用クエリ ===");

  // 読み取り専用ツールのみ許可（安全な分析用）
  // const result = await query({
  //   prompt: "セキュリティ上の問題がないかコードを分析してください",
  //   options: {
  //     allowedTools: ["Read", "Glob", "Grep"], // 書き込み不可
  //     model: "opus",
  //   },
  // });
  // console.log(result);

  console.log(
    "Agent SDKをインストール後、コメントアウトを解除して実行してください"
  );
}

// メイン実行
async function main(): Promise<void> {
  console.log("Claude Agent SDK 使用例\n");
  await basicQuery();
  console.log("");
  await streamingQuery();
  console.log("");
  await restrictedQuery();
}

main().catch(console.error);
