import { format } from "date-fns";

export function formatMonth(date: Date): string {
  return format(date, "yyyy-MM");
}

// 桁数を3桁ごとに表示する関数
export function formatNumber(amount: number): string {
  return amount.toLocaleString("ja-jp");
}
