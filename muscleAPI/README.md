## 筋トレ種目を教えてくれるAPI

鍛えたい体の部位を指定しAPIにリクエストを送信すると、指定した部位のトレーニング種目が返ってくる。

## リクエスト方法

```
curl -X POST -H "Content-Type: application/json" -d "{\"bodyParts\":\"xxxxxxxxxx\"}" localhost:3001/muscle
```

`xxxxxxxxxx` を下記項目のいずれかに書き換えリクエストを送信する。

- 胸
- 背中
- 肩
- 力こぶ
- 二の腕
- 脚
- お腹

## レスポンス

### 成功時

```
{"status":200,"result":{"bodyParts":"xxxxxxxxxx","training":"yyyyyyyyyy"}}%
```

- `xxxxxxxxxx` 指定した体の部位が入ります
- `yyyyyyyyyy` 指定した体の部位を鍛えるトレーニング種目が返ってきます

### 失敗時

```
{"status":200,"result":{"message":"Invalid Training..."}}%
```