export const getMuscle = async (query) => {
  try {
    const trainingList = [
      ["ベンチプレス", "ダンベルフライ", "ケーブルクロス", "インクラインプレス"],
      ["デッドリフト", "ラットプルダウン", "ベントオーバーロウ", "ケーブルロウ"],
      ["ショルダープレス", "サイドレイズ", "アーノルドプレス", "フロントレイズ"],
      ["ダンベルカール", "ハンマーカール", "インクラインカール"],
      ["プレスダウン", "キックバック", "ナローベンチプレス", "ディップス"],
      ["スクワット", "レッグエクステンション", "ブルガリアンスクワット", "ランジ", "レッグプレス"],
      ["クランチ", "アプローラー", "ドラゴンフラッグ"],
    ];
    let partsIndex = -1;
    switch (query.bodyParts) {
      case "胸":
        partsIndex = 0;
        break;
      case "背中":
        partsIndex = 1;
        break;
      case "肩":
        partsIndex = 2;
        break;
      case "力こぶ":
        partsIndex = 3;
        break;
      case "二の腕":
        partsIndex = 4;
        break;
      case "脚":
        partsIndex = 5;
        break;
      case "お腹":
        partsIndex = 6;
        break;
      default:
        return { message: "Invalid Training..." };
    }
    return {
      bodyParts: query.bodyParts,
      training: trainingList[partsIndex][Math.floor(Math.random() * trainingList[partsIndex].length)]
    };
  } catch (e) {
    throw Error("Error while getting Posing");
  }
};