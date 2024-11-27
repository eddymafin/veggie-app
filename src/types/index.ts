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
