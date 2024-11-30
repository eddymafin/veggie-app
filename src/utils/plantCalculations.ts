import { Total, Contents } from "../types";

export function plantCalculations(contents: Contents[]): Total {
  return contents.reduce(
    // こちらにもtypeを指定する必要がある
    (acc: Total, content: Contents) => {
      if (content.type === "veggie") {
        acc.veggieCount += content.amount;
      } else {
        acc.fruitCount += content.amount;
      }

      acc.total = acc.veggieCount + acc.fruitCount;
      return acc;
    },
    {
      veggieCount: 0,
      fruitCount: 0,
      total: 0,
    }
  );
}
