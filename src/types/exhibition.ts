export interface ExhibitionItemType {
  id: number;
  title: string;
  imageUrl: string;
  place: string;
  price: number;
  date: ExhibitionDate;
}
interface ExhibitionDate {
  started: string;
  ended: string;
}
