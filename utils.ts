import * as types from "./types";

export const emojiForItemType = (itemType: types.ItemTypes): string => {
  switch (itemType) {
    case types.ItemTypes.Article:
      return "📰";
    case types.ItemTypes.Book:
      return "📖";
    case types.ItemTypes.Music:
      return "🎶";
    case types.ItemTypes.Movie:
      return "🍿";
    default:
      return "";
  }
} 