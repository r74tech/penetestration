---
name: "SQL Injection Vulnerability"
severity: "High"
location: "Login Form"
cvss: "9.0"
issues:
    description:
        SQL Injection.
    location:
        - /login
        - /api/login
        - /register

---

## 危険度
High

## 検出箇所
Login Form

## 解説
SQLインジェクションは、悪意のあるSQLコードがデータベースに注入されることによって発生します。

## 確認方法
以下のURLとリクエスト、レスポンスを参照してください。

| URL          | リクエスト   | レスポンス    |
|--------------|-------------|-------------|
| /login       | `{ "user": "test' --" }` | 500 Internal Server Error |

## 対処方法
プリペアドステートメントを使用する、入力値を適切に検証するなど。
