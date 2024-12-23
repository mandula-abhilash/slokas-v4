'use client';

export default function SlokaDetails({ sloka, language, isMobile = false }) {
  const containerClass = isMobile 
    ? "space-y-4 animate-in slide-in-from-top duration-300"
    : "space-y-6 h-full flex flex-col";

  const sectionClass = isMobile
    ? "space-y-2 bg-white/30 dark:bg-white/5 p-4 rounded-lg backdrop-blur-md"
    : "space-y-4 bg-white/30 dark:bg-white/5 p-6 rounded-lg backdrop-blur-md shadow-inner flex-1";

  const headingClass = isMobile
    ? "text-md tracking-wide font-semibold text-primary"
    : "text-md tracking-wide font-semibold text-primary border-b border-primary/10 pb-2";

  const textClass = isMobile
    ? "text-sm text-muted-foreground leading-relaxed"
    : "text-base text-muted-foreground leading-relaxed";

  return (
    <div className={containerClass}>
      <div className={sectionClass}>
        <h4 className={headingClass}>Meaning</h4>
        <p className={`${textClass} whitespace-pre-line`}>
          {sloka.meaning[language]}
        </p>
      </div>

      {sloka.context && (
        <div className={sectionClass}>
          <h4 className={headingClass}>When to Recite</h4>
          <p className={textClass}>
            {sloka.context[language]}
          </p>
        </div>
      )}
    </div>
  );
}