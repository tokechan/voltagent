# Node.js バージョン管理ガイド

## 概要

Node.js のバージョン管理には主に 2 つの方法があります：

- **Homebrew（brew）** - システム全体での統一管理
- **nvm（Node Version Manager）** - プロジェクトごとの柔軟な管理

## 各管理方法の特徴

### Homebrew（brew）

#### メリット

- シンプルで直感的な管理
- システム全体で統一されたバージョン
- 他のパッケージと一緒に管理できる
- アップデートが簡単（`brew upgrade node`）
- 初期設定が不要

#### デメリット

- プロジェクトごとに異なる Node.js バージョンを使い分けられない
- 古いバージョンに戻すのが面倒
- プロジェクトの要件に合わせた柔軟性が低い

#### 向いている場合

- 個人開発で、常に最新版を使いたい
- 複数のプロジェクトで同じ Node.js バージョンを使う
- シンプルな管理を好む
- フロントエンド開発がメイン

### nvm（Node Version Manager）

#### メリット

- プロジェクトごとに異なる Node.js バージョンを使い分け可能
- バージョン切り替えが簡単（`nvm use 16`、`nvm use 18`など）
- 複数のバージョンを並行して管理
- プロジェクトの`.nvmrc`ファイルで自動的にバージョン指定可能
- 企業での開発に適している

#### デメリット

- 初期設定が必要
- シェル設定ファイルの管理が必要
- 初回インストール時に時間がかかる
- 学習コストが若干高い

#### 向いている場合

- 複数のプロジェクトで異なる Node.js バージョンが必要
- 企業での開発（プロジェクトごとに要件が異なる）
- レガシープロジェクトの保守
- バックエンド開発（Node.js のバージョン依存が厳しい）

## 一般的な使い分け

### Homebrew を選択する場合

```bash
# インストール
brew install node

# アップデート
brew update
brew upgrade node

# バージョン確認
node --version
```

### nvm を選択する場合

```bash
# インストール
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 最新版をインストール
nvm install node

# 特定バージョンをインストール
nvm install 18.17.0

# バージョン切り替え
nvm use 18.17.0

# デフォルトバージョン設定
nvm alias default 18.17.0

# バージョン確認
node --version
```

## トラブルシューティング

### 問題：Homebrew で Node.js をアップデートしたが、バージョンが変わらない

#### 原因

- PATH の優先順位の問題
- nvm が有効になっている
- シンボリックリンクの問題

#### 解決方法

1. **現在の Node.js の場所を確認**

   ```bash
   which node
   ```

2. **PATH の確認**

   ```bash
   echo $PATH
   ```

3. **nvm の影響を確認**

   ```bash
   echo $NVM_DIR
   ```

4. **Homebrew の Node.js を優先する場合**

   ```bash
   export PATH="/opt/homebrew/bin:$PATH"
   ```

5. **nvm で管理する場合**
   ```bash
   nvm install node
   nvm use node
   ```

## 推奨事項

### 個人開発の場合

- **シンプルさを重視** → Homebrew
- **将来の柔軟性を重視** → nvm

### 企業開発の場合

- **プロジェクトの多様性** → nvm
- **チームでの統一性** → nvm + `.nvmrc`ファイル

### 学習・実験の場合

- **初期設定の手間を避けたい** → Homebrew
- **バージョン管理の学習** → nvm

## 設定ファイル例

### .nvmrc（プロジェクトルートに配置）

```
18.17.0
```

### .zshrc（nvm 設定）

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

## まとめ

- **Homebrew**: シンプルで統一された管理、個人開発向け
- **nvm**: 柔軟で強力な管理、企業開発向け

現在のプロジェクト要件と将来のニーズを考慮して選択することをお勧めします。
