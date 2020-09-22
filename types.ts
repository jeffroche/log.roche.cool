export enum ItemTypes {
  Article = "article",
  Book = "book",
  Music = "music",
  Movie = "movie",
}

export interface Item {
  id: string;
  name: string;
  type: ItemTypes;
  comment: string;
  created: string;
  link: string;
}

export interface AirtableItem {
  id: string;
  fields: {
    Name: string;
    Type: ItemTypes;
    Comment: string;
    Created: string;
    Link: string;
    "Created (Override)": string;
  };
}
