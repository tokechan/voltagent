# Portfolio Generator

**Qiita と GitHub のデータを統合してポートフォリオを自動生成する AI アプリケーション**

VoltAgent を使用して Qiita と GitHub の API からユーザー情報を取得し、美しい Markdown 形式のポートフォリオを生成します。

## 🚀 特徴

- **Qiita と GitHub 連携**: ユーザー ID を入力するだけで両プラットフォームの情報を自動取得
- **AI による統合**: VoltAgent のマルチエージェント機能で情報を統合・整理
- **美しい UI**: React + TailwindCSS によるモダンなユーザーインターフェース
- **リアルタイム生成**: TypeWriter エフェクトとアニメーションで動的な表示

## 📁 プロジェクト構成

```
AIagent/
├── portforio-agent/           # メインプロジェクト
│   ├── agent/                 # VoltAgent バックエンド
│   │   ├── src/
│   │   │   ├── index.ts       # メインエージェント設定
│   │   │   └── tools/         # API連携ツール
│   │   │       ├── qiita.ts   # Qiita API ツール
│   │   │       └── github.ts  # GitHub API ツール
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   └── client/                # React フロントエンド
│       ├── src/
│       │   ├── App.tsx        # メインアプリケーション
│       │   ├── components/    # UIコンポーネント
│       │   └── lib/           # ユーティリティ
│       ├── package.json
│       └── README.md
├── docs/                      # ドキュメント
│   └── nodejs-version-management.md  # Node.js管理ガイド
└── README.md                  # このファイル
```

## 🛠️ 技術スタック

### バックエンド (Agent)

- **VoltAgent**: AI エージェントフレームワーク
- **TypeScript**: 型安全な JavaScript
- **Node.js**: ランタイム環境
- **Qiita API**: Qiita ユーザー情報・記事取得
- **GitHub API**: GitHub ユーザー情報・リポジトリ取得

### フロントエンド (Client)

- **React 18**: ユーザーインターフェース
- **TypeScript**: 型安全性
- **Vite**: 高速ビルドツール
- **TailwindCSS**: ユーティリティファースト CSS
- **Shadcn/ui**: モダン UI コンポーネント
- **React Markdown**: Markdown 表示
- **Lucide React**: アイコン
- **React Simple Typewriter**: タイプライターエフェクト

## 🚀 セットアップ

### 前提条件

- Node.js 18 以上
- npm または yarn または pnpm

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd AIagent
```

### 2. バックエンド (Agent) のセットアップ

```bash
cd portforio-agent/agent
npm install

# 環境変数の設定
cp .env.example .env
# .envファイルでOpenAI APIキーを設定
```

### 3. フロントエンド (Client) のセットアップ

```bash
cd ../client
npm install
```

## 🔧 使用方法

### 1. バックエンドの起動

```bash
cd portforio-agent/agent
npm run dev
```

サーバーが `http://localhost:3141` で起動します。

### 2. フロントエンドの起動

```bash
cd portforio-agent/client
npm run dev
```

アプリケーションが `http://localhost:5173` で起動します。

### 3. ポートフォリオ生成

1. ブラウザで `http://localhost:5173` を開く
2. Qiita ユーザー ID と GitHub ユーザー名を入力
3. 「ポートフォリオ生成」ボタンをクリック
4. AI が自動でデータを取得・統合してポートフォリオを生成

## 📊 出力内容

生成されるポートフォリオには以下の情報が含まれます：

- **基本情報**: ユーザー名、プロフィール、フォロワー数など
- **技術スタック**: 使用言語・技術の分析
- **Qiita 記事一覧**: 最新記事とエンゲージメント統計
- **GitHub リポジトリ一覧**: スター・フォーク数付き
- **人気コンテンツランキング**: いいね・スター順
- **定量評価**: 総合的な活動指標

## 🎨 カスタマイズ

### UI のカスタマイズ

`client/src/App.tsx` でスタイリングとレイアウトを変更できます。

### エージェントの設定

`agent/src/index.ts` で AI エージェントの動作を調整できます。

### API ツールの追加

`agent/src/tools/` ディレクトリに新しい API 連携ツールを追加できます。

## 📝 ドキュメント

- [Node.js バージョン管理ガイド](./docs/nodejs-version-management.md)
- [VoltAgent 公式ドキュメント](https://voltagent.dev/docs/)

## 🤝 貢献

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 👥 作成者

**JISOU 渡邉さんのコンテンツレビュープロジェクト**

技術学習とアウトプットを意識した実践的な AI アプリケーション開発プロジェクトです。
