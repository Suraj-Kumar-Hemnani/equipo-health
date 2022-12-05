type IconProps = {
  children: React.ReactNode
}

export default function Icon({children}: IconProps) {
  return(
    <i>{children}</i>
  )
}