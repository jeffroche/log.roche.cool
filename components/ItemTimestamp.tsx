interface ItemTimestampProps {
  ts: string;
}

export default function ItemTimestamp({ ts }: ItemTimestampProps) {
  const d = new Date(ts);
  return <time dateTime={ts}>{d.toDateString()}</time>;
}