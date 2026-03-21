/**
 * ワークフロー自動化の例
 *
 * 複数のエージェントを組み合わせた業務自動化パターンです。
 */

// --- 例1: PR作成ワークフロー ---
// Issueの内容を分析 → 実装 → テスト → PR作成
async function prWorkflow(issueNumber: number): Promise<void> {
  console.log(`=== Issue #${issueNumber} のPR作成ワークフロー ===`);

  // Step 1: Issueの分析と計画
  console.log("Step 1: Issueを分析し、実装計画を策定...");
  // const plan = await query({
  //   prompt: `GitHub Issue #${issueNumber} の内容を分析し、実装計画を立ててください`,
  //   options: { allowedTools: ["Read", "Glob", "Grep", "Bash"], model: "sonnet" },
  // });

  // Step 2: 実装
  console.log("Step 2: コードを実装...");
  // const impl = await query({
  //   prompt: `計画に基づいてコードを実装してください: ${plan}`,
  //   options: { allowedTools: ["Read", "Edit", "Write", "Bash"], model: "sonnet" },
  // });

  // Step 3: テスト
  console.log("Step 3: テストを実行...");
  // const test = await query({
  //   prompt: "実装したコードのテストを作成し、実行してください",
  //   options: { allowedTools: ["Read", "Edit", "Write", "Bash"], model: "sonnet" },
  // });

  // Step 4: PR作成
  console.log("Step 4: PRを作成...");
  // const pr = await query({
  //   prompt: "変更内容をコミットし、PRを作成してください",
  //   options: { allowedTools: ["Bash"], model: "haiku" },
  // });

  console.log("ワークフロー完了");
}

// --- 例2: 日次レポート生成 ---
async function dailyReport(): Promise<void> {
  console.log("=== 日次レポート生成 ===");

  // const report = await query({
  //   prompt: `以下の日次レポートを生成してください：
  //     1. 本日のコミット一覧とその概要
  //     2. オープン中のPRの状況
  //     3. 未対応のIssueの優先度整理
  //     4. コードカバレッジの変化
  //     結果をMarkdown形式でまとめてください。`,
  //   options: {
  //     allowedTools: ["Bash", "Read", "Grep", "Glob"],
  //     model: "sonnet",
  //   },
  // });

  console.log("レポート生成完了");
}

// --- 例3: セキュリティスキャン ---
async function securityScan(): Promise<void> {
  console.log("=== セキュリティスキャン ===");

  // const result = await query({
  //   prompt: `コードベース全体のセキュリティスキャンを実行してください：
  //     1. ハードコードされた認証情報の検出
  //     2. SQLインジェクションの可能性
  //     3. XSS脆弱性の検出
  //     4. 依存パッケージの脆弱性チェック
  //     各問題にCritical/High/Medium/Lowの重要度を付けてください。`,
  //   options: {
  //     allowedTools: ["Read", "Grep", "Glob", "Bash"],
  //     model: "opus",
  //   },
  // });

  console.log("スキャン完了");
}

// メイン実行
async function main(): Promise<void> {
  console.log("ワークフロー自動化の例\n");
  await prWorkflow(42);
  console.log("");
  await dailyReport();
  console.log("");
  await securityScan();
}

main().catch(console.error);
