export interface Item {
  id: string;
  name: string;
  type: "book" | "article" | "music" | "movie";
  comment: string;
  created: string;
  link: string;
}

export interface AirtableItem {
  id: string;
  fields: {
    Name: string;
    Type: "book" | "article" | "music" | "movie";
    Comment: string;
    Created: string;
    Link: string;
    "Created (Override)": string;
  };
}
