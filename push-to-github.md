# GitHub へプッシュする手順

## 1. リポジトリを GitHub で作成（まだの場合）

- ブラウザで開く: https://github.com/new?name=calc-tool
- リポジトリ名: **calc-tool** のまま
- 「Add a README file」は**チェックしない**
- **Create repository** をクリック

## 2. GitHub のユーザー名が「zebradance71」でない場合

次のコマンドでリモートURLを自分のユーザー名に変更してください（USERNAME を実際のユーザー名に置き換え）:

```
git remote set-url origin https://github.com/USERNAME/calc-tool.git
```

## 3. プッシュ

```
cd C:\Users\strea\Develop\calc-tool
git push -u origin main
```

初回でログインを求められたら、GitHub のユーザー名とパスワード（または Personal Access Token）を入力してください。
