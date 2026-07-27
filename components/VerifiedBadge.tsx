export default function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Verificado">
      <path
        d="M12 2l2.4 1.2 2.6-.6 1.4 2.3 2.3 1.4-.6 2.6L21.3 11l-1.2 2.4.6 2.6-2.3 1.4-1.4 2.3-2.6-.6L12 20.5l-2.4-1.2-2.6.6-1.4-2.3-2.3-1.4.6-2.6L2.7 11l1.2-2.4-.6-2.6 2.3-1.4L7 2.3l2.6.6L12 2z"
        fill="currentColor"
      />
      <path
        d="M8.5 12.2l2.2 2.2 4.3-4.6"
        stroke="#0B0B0C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}