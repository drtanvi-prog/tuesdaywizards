export default function AvatarImg({ name, color, src, size = 46 }) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
  if (src) {
    return (
      <img src={src} alt={name} className="rounded-full object-cover block" style={{ width: size, height: size }} />
    )
  }
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold shrink-0"
      style={{ width: size, height: size, background: color, fontSize: Math.round(size * 0.28) }}
    >
      {initials}
    </div>
  )
}
