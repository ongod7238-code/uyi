export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[var(--sand)] px-5">
      <div className="flex flex-col items-center gap-6">
        <span className="flex h-12 w-12 items-center justify-center border border-[var(--ink)] font-editorial text-2xl text-[var(--ink)] reveal-up">U</span>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--red)] [animation-delay:0ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--red)] [animation-delay:200ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--red)] [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}
