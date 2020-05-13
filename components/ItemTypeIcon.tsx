interface ItemTypeIconProps {
  postType: string;
}

export default function ItemTypeIcon({ postType }: ItemTypeIconProps) {
  switch (postType) {
    case "music":
      return <MusicNote />
    case "article":
      return <Newspaper />
  }
  return null;
}

function MusicNote() {
  return (
    <svg viewBox="0 0 20 20" version="1.1">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g>
          <path d="M18,4.28571429 L8,5.71428571 L8,17 C8,18.6568542 6.65685425,20 5,20 L3,20 C1.34314575,20 0,18.6568542 0,17 C0,15.3431458 1.34314575,14 3,14 L5,14 C5.35063542,14 5.68722107,14.0601542 6,14.1707057 L6,4 L6,2 L20,0 L20,2.5 L20,15 C20,16.6568542 18.6568542,18 17,18 L15,18 C13.3431458,18 12,16.6568542 12,15 C12,13.3431458 13.3431458,12 15,12 L17,12 C17.3506354,12 17.6872211,12.0601542 18,12.1707057 L18,4.28571429 Z" id="Combined-Shape"></path>
        </g>
      </g>
    </svg>
  )
}

function Newspaper() {
  return (
    <svg viewBox="0 0 20 20" version="1.1">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g id="icon-shape">
          <path d="M4,10 L12,10 L12,12 L4,12 L4,10 L4,10 Z M4,14 L12,14 L12,16 L4,16 L4,14 L4,14 Z M4,4 L12,4 L12,8 L4,8 L4,4 L4,4 Z M16,2 L16,1 L16,0 L0,0 L0,1 L0,1 L0,17.0057979 C0,18.656688 1.34320226,20 3.00012623,20 L17,20 C18.6534829,20 20,18.6601943 20,17.0074602 L20,3 L20,2 L16,2 L16,2 L16,2 Z M16,4 L16,17.0066023 C16,17.5552407 16.4438648,18 17,18 C17.5522847,18 18,17.5553691 18,16.9991283 L18,4 L16,4 L16,4 L16,4 Z M2,2 L14,2 L14,17.0057979 C14,17.3541355 14.0597981,17.6887794 14.1697239,18 L3.00748397,18 C2.44892021,18 2,17.5552407 2,17.0066023 L2,2 L2,2 L2,2 L2,2 Z" id="Combined-Shape"></path>
        </g>
      </g>
    </svg>
  )
}