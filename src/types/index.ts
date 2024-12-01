export type ContentType = "veggie" | "fruit";
export type VeggieCategory = "ネギ科" | "マメ科";
export type FruitCategory = "バラ科" | "ああ";

export interface Contents {
  id: string;
  date: string;
  amount: number;
  content: string;
  type: ContentType;
  category: VeggieCategory | FruitCategory;
}

export interface Total {
  veggieCount: number;
  fruitCount: number;
  total: number;
}

export interface CalenderContent {
  start: string;
  veggieCount: string;
  fruitCount: string;
  total: string;
}
