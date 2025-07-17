# voltagent

## これは、JISOU の渡邉さんのコンテンツレビューです

## 手を動かしてアウトプットを意識しましょう

### 誤字脱字など違和感がある箇所を見つけたら記録すること

brew で最新の Node.js（v24.4.1）がインストールされているにもかかわらず、`node --version` で古いバージョン（v22.11.0）が表示される理由は、  
**実際に使われている Node.js のパスが Homebrew のものではない**ためです。

- Homebrew の Node.js: `/opt/homebrew/bin/node`（v24.4.1）
- 実際に使われている Node.js: `/usr/local/bin/node`（v22.11.0）

このように、PATH の優先順位で `/usr/local/bin` が先に来ているため、brew でインストールした新しい Node.js が使われていません。

---

### 解決方法

#### 1. Homebrew の Node.js を優先的に使う

ターミナルで下記コマンドを実行してみてください：

```bash
<code_block_to_apply_changes_from>
```

もし `/opt/homebrew/bin/node` が存在する場合、下記コマンドで一時的に新しい Node.js を使えます：

```bash
/opt/homebrew/bin/node --version
```

#### 2. PATH の順序を修正

`~/.zshrc` などの設定ファイルで、`/opt/homebrew/bin` を `/usr/local/bin` より前に書くことで、brew の Node.js が優先されます。

例：

```bash
export PATH="/opt/homebrew/bin:$PATH"
```

設定後、ターミナルを再起動してください。

---

#### 3. 古い Node.js をアンインストール

不要な場合は、古い Node.js をアンインストールしても OK です。

```bash
sudo rm /usr/local/bin/node
sudo rm /usr/local/bin/npm
```

---

**まとめ**  
brew upgrade で新しい Node.js はインストールされていますが、PATH の優先順位の問題で古い Node.js が使われている状態です。PATH を修正するか、古い Node.js を削除すれば解決します。
