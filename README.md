# PDFデータをGoogleスプレッドシートに整形して記載する

PDF形式のデータをCSVに変換し、Googleスプレッドシート上に自動で整形して記載する方法を説明します。

---

## 手順概要

1. **PDFをCSVに変換**
2. **CSVをスプレッドシートにインポート**
3. **Google Apps Script (GAS) にスクリプトを記載**
4. **スクリプトを順に実行して整形完了**

---

## 詳細手順

### ① PDFをCSVに変換

以下のオンラインツールを使用して、PDFファイルをCSV形式に変換します。  
[Convertio - PDF to CSV](https://convertio.co/ja/)

---

### ② CSVをスプレッドシートにインポート

1. Googleスプレッドシートを開きます。
2. メニューから「ファイル > インポート」を選択。
3. 「アップロード」タブから変換済みのCSVを選び、「現在のシートを置き換える」形式でインポートします。

---

### ③ `DataFormat_first.gs` をGASに記載し、実行ボタンを押す

1. スプレッドシート上部メニュー「拡張機能 > Apps Script」をクリック。
2. スクリプトエディタに `DataFormat_first.gs` のコードを貼り付けます。
3. 保存してから実行ボタン ▶ をクリック。

---

### ④ `DataFormat_second.gs` をGASに記載し、実行ボタンを押す

1. 同じくApps Scriptで新しいファイルを追加し、`DataFormat_second.gs` のコードを記載します。
2. 保存してから実行ボタン ▶ をクリック。

---


## ファイル構成
```
project/
├── README.md
├── DataFormat_first.gs
└── DataFormat_second.gs
```

## 結果

スプレッドシート内のデータが自動的に整形され、最終的な形式に仕上がります。

---

## 補足

- GASの実行には権限の承認が必要です。初回実行時に許可を与えてください。


---




