export function CheckIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg className="check" aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M4.5 11.5l4.2 4.2L17.5 6.5"
        stroke={dark ? '#7C93FF' : '#3A57F5'}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
