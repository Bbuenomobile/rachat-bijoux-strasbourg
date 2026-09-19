const items = [
  { k: '40+ Ans', v: 'Tradition & Expertise Joaillière' },
  { k: 'GIA · HRD · SSEF', v: 'Laboratoires de Référence' },
  { k: 'Immédiat', v: 'Virement Bancaire CHF ou EUR' },
  { k: '100%', v: 'Discrétion & Sécurité Suisse' },
];

export function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-[#050f1d]">
      <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((it) => (
          <div key={it.k}>
            <div className="font-display text-2xl md:text-3xl text-white font-semibold">{it.k}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-[#d4af37] font-medium">{it.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
