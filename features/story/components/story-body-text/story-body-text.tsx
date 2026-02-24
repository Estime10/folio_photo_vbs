export function StoryBodyText({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  return (
    <div className="flex flex-col gap-3 text-sm leading-relaxed text-foreground/90 md:text-base">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="text-left">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
