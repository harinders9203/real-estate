type P = { size?: number };

export const ArrowIcon = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const PlusIcon = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const CheckIcon = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const AwardIcon = ({ size = 40 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
  </svg>
);

const stepPaths = [
  "M3 7h18M3 12h12M3 17h8",
  "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z",
  "M15 7a4 4 0 1 1-3.9 4.9L3 20v-3h2v-2h2l2.1-2.1A4 4 0 0 1 15 7Z",
];

export const StepIcon = ({ i, size = 28 }: P & { i: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={stepPaths[i % stepPaths.length]} />
  </svg>
);

export const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="currentColor" />
    <path d="M8 23V13l8-5 8 5v10h-5v-6h-6v6z" fill="var(--accent)" />
  </svg>
);

export const SocialIcon = ({ name }: { name: "instagram" | "linkedin" | "x" | "facebook" }) => {
  const d = {
    instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
    linkedin: "M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM2 9h4v12H2zm7 0h4v1.7c.6-1 2-2 4-2 4 0 5 2.6 5 6V21h-4v-5.5c0-1.5-.3-3-2.2-3S13 14 13 15.5V21H9z",
    x: "M3 3h5l4.5 6.2L18 3h3l-7.1 8.1L21.5 21h-5l-4.9-6.7L5.7 21H2.7l7.6-8.6z",
    facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z",
  }[name];
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
};
