export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 sm:mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">{eyebrow}</p> : null}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-slate-900">{title}</h2>
      {description ? <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600">{description}</p> : null}
    </div>
  );
}
