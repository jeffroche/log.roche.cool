interface ItemTimestampProps {
  ts: string;
}

export default function ItemTimestamp({ ts }: ItemTimestampProps) {
  const d = new Date(ts);
  const year = d.getFullYear();
  const monthNum = d.getMonth() + 1;
  let month = monthNum.toString();
  if (monthNum < 10) {
    month = "0" + month;
  }
  const dayNum = d.getDate();
  let day = dayNum.toString();
  if (dayNum < 10) {
    day = "0" + day;
  }

  const dateStr = `${year}-${month}-${day}`;
  return <time dateTime={ts}>{dateStr}</time>;
}