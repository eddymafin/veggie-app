import { Total, Contents } from "../types";

// 日付ごとの合計を計算する関数
export function calculateDailyTotals(
  contents: Contents[]
): Record<string, Total> {
  // 取得するデータの例
  // {
  //   "2024-12-04": {veggie: 0, fruit:0, total:0 },
  // }

  return contents.reduce<Record<string, Total>>((acc, content) => {
    const day = content.date;
    console.log(content);

    if (!acc[day]) {
      acc[day] = { veggieCount: 0, fruitCount: 0, total: 0 };
    }

    if (content.type === "veggie") {
      acc[day].veggieCount += content.amount;
    } else {
      acc[day].fruitCount += content.amount;
    }

    acc[day].total = acc[day].veggieCount + acc[day].fruitCount;
    return acc;
  }, {});
}
