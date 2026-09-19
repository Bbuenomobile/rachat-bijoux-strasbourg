import React from 'react';

export function Section({
  children,
  className = '',
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  description,
  subtitle,
  align = 'left',
  center,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  description?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  center?: boolean;
}) {
  const text = intro || description || subtitle;
  const isCenter = Boolean(center) || align === 'center';
  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="label text-gold-700">{eyebrow}</p>}
      <h2 className="h2 mt-3 text-ink-900">{title}</h2>
      {text && <p className="lead mt-4 text-ink-600">{text}</p>}
    </div>
  );
}
