interface Props {
  comment: string | null;
}

export default function ItemComment({ comment }: Props) {
  if (comment === "" || comment === null) return null;
  return (
    <div className="pt-2 text-gray-800 text-sm">{comment}</div>
  )
}