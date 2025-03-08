
const logos = [
  { id: 1, src: '/logos/logo1.svg', alt: 'Logo 1' },
  { id: 2, src: '/logos/logo2.png', alt: 'Logo 2' },
  { id: 3, src: '/logos/logo3.png', alt: 'Logo 3' },
  { id: 4, src: '/logos/logo4.png', alt: 'Logo 4' },
  { id: 5, src: '/logos/logo5.png', alt: 'Logo 5' },
  { id: 6, src: '/logos/logo6.png', alt: 'Logo 6' },
  { id: 7, src: '/logos/logo7.png', alt: 'Logo 7' },
  { id: 8, src: '/logos/logo8.png', alt: 'Logo 8' },
  { id: 9, src: '/logos/logo9.png', alt: 'Logo 9' },
  { id: 10, src: '/logos/logo10.png', alt: 'Logo 10' },
  { id: 11, src: '/logos/logo11.svg', alt: 'Logo 11' },
];


export default function FloatingLogos() {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full my-8">
      <div className="animate-scroll inline-block">
        {logos.map((partner) => (
          <img
            key={partner.id}
            src={partner.src}
            alt={partner.alt}
            className="h-12 w-12 mx-4 inline-block"
          />
        ))}
        {logos.map((partner) => (
          <img
            key={`${partner.id}-copy`}
            src={partner.src}
            alt={partner.alt}
            className="h-12 w-12 mx-4 inline-block"
          />
        ))}
      </div>
    </div>
  );
}
