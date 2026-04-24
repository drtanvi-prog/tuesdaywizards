export default function CertificationCard({ src, alt }) {
  return (
    <div
      className="cert-card shrink-0 flex items-center justify-center mx-3 rounded-2xl overflow-hidden"
      style={{ width: 164, height: 164, padding: 18 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  )
}
