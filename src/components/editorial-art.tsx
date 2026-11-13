export function CactusArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 310" className={className} fill="none" aria-hidden="true">
      <path d="M0 300C32 274 83 283 111 272C138 263 156 275 180 284V310H0Z" fill="var(--apricot)" />
      <g fill="currentColor" stroke="var(--paper)" strokeWidth="1.2">
        <path d="M77 298V38C77 12 104 12 104 38V298Z" />
        <path d="M78 149H63C38 149 34 137 34 116V79C34 62 53 62 53 79V115C53 125 58 128 78 128Z" />
        <path d="M103 199H123C145 199 151 186 151 164V124C151 106 131 106 131 124V161C131 173 125 177 103 177Z" />
        <path d="M25 304V187C25 165 46 165 46 187V304Z" />
        <path d="M45 249H56C70 249 72 240 72 225V210C72 196 60 196 60 210V226C60 235 54 236 45 236Z" />
      </g>
      <g stroke="var(--shell)" opacity=".65" strokeWidth="1">
        <path d="M86 34V299M94 33V299M41 78V116C41 136 52 139 76 139M140 122V166C140 185 126 188 105 188M33 185V300M39 183V300" />
        <path d="m73 63 7-2m21 25 7 2m-35 22 7-2m21 37 7 2m-35 34 7-2m21 50 7 2m-35 19 7-2m21 41 7 2" />
      </g>
    </svg>
  );
}

export function DesertArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 150" className={className} fill="none" aria-hidden="true">
      <path d="M0 138 40 112 69 119 115 72 139 78 154 62 184 94 210 103 243 80 275 102 307 67 342 81 371 117 400 112V150H0Z" fill="var(--shell)" />
      <path d="m0 143 58-19 36 10 63-37 40 27 46-24 32 24 32-39 28 12 35 36 30-4v21H0Z" fill="var(--apricot)" />
      <path d="m75 150 57-29 28 5 27 24m34 0 26-20 25 3 29-26 34 43" fill="var(--cinnabar)" />
      <g stroke="var(--jalapeno)" opacity=".5"><path d="m112 79 16 24 25 7m92-25 14 19m49-31 9 24 13 10M38 125l23 11m104-38 18 12" /></g>
    </svg>
  );
}

export function FooterWave() {
  return <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="footer-wave" aria-hidden="true"><path d="M0 29C160-12 287 1 450 35S742 64 912 38 1190 2 1440 31V70H0Z" fill="currentColor" /></svg>;
}
