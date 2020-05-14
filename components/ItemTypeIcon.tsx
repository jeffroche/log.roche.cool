interface ItemTypeIconProps {
  postType: string;
}

export default function ItemTypeIcon({ postType }: ItemTypeIconProps) {
  return (
    <svg className="m-1 h-4 w-4 fill-current" viewBox="0 0 20 20" version="1.1">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <Icon postType={postType} />
      </g>
    </svg>
  );
}

function Icon({ postType }: ItemTypeIconProps) {
  switch (postType) {
    case "music":
      return <MusicNote />
    case "article":
      return <Document />
    case "book":
      return <Newspaper />
    case "movie":
      return <FilmReel />
  }
  return null;
}

function MusicNote() {
  return (
    <g>
      <path d="M18,4.28571429 L8,5.71428571 L8,17 C8,18.6568542 6.65685425,20 5,20 L3,20 C1.34314575,20 0,18.6568542 0,17 C0,15.3431458 1.34314575,14 3,14 L5,14 C5.35063542,14 5.68722107,14.0601542 6,14.1707057 L6,4 L6,2 L20,0 L20,2.5 L20,15 C20,16.6568542 18.6568542,18 17,18 L15,18 C13.3431458,18 12,16.6568542 12,15 C12,13.3431458 13.3431458,12 15,12 L17,12 C17.3506354,12 17.6872211,12.0601542 18,12.1707057 L18,4.28571429 Z" id="Combined-Shape"></path>
    </g>
  )
}

function Newspaper() {
  return (
    <g>
      <path d="M4,10 L12,10 L12,12 L4,12 L4,10 L4,10 Z M4,14 L12,14 L12,16 L4,16 L4,14 L4,14 Z M4,4 L12,4 L12,8 L4,8 L4,4 L4,4 Z M16,2 L16,1 L16,0 L0,0 L0,1 L0,1 L0,17.0057979 C0,18.656688 1.34320226,20 3.00012623,20 L17,20 C18.6534829,20 20,18.6601943 20,17.0074602 L20,3 L20,2 L16,2 L16,2 L16,2 Z M16,4 L16,17.0066023 C16,17.5552407 16.4438648,18 17,18 C17.5522847,18 18,17.5553691 18,16.9991283 L18,4 L16,4 L16,4 L16,4 Z M2,2 L14,2 L14,17.0057979 C14,17.3541355 14.0597981,17.6887794 14.1697239,18 L3.00748397,18 C2.44892021,18 2,17.5552407 2,17.0066023 L2,2 L2,2 L2,2 L2,2 Z" id="Combined-Shape"></path>
    </g>
  )
}

function FilmReel() {
  return (
    <g>
      <path d="M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M6,4 L14,4 L14,16 L6,16 L6,4 Z M2,5 L4,5 L4,7 L2,7 L2,5 Z M2,9 L4,9 L4,11 L2,11 L2,9 Z M2,13 L4,13 L4,15 L2,15 L2,13 Z M16,5 L18,5 L18,7 L16,7 L16,5 Z M16,9 L18,9 L18,11 L16,11 L16,9 Z M16,13 L18,13 L18,15 L16,15 L16,13 Z M8,7 L13,10 L8,13 L8,7 Z" id="Combined-Shape"></path>
    </g>
  )
}

function Document() {
  return (
    <g>
      <path d="M4,18 L4,2 L12,2 L12,6 L16,6 L16,18 L4,18 Z M2,19 L2,0 L3,0 L12,0 L14,0 L18,4 L18,6 L18,20 L17,20 L2,20 L2,19 Z" id="Combined-Shape"></path>
    </g>
  )
}