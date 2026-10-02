/* ミセタテ アイコン＆イラスト
   - <i data-ic="名前"></i> を線アイコンに置き換える
   - <div data-shop="cafe"></div> を店舗イラストに置き換える
   - <div data-person="worker|owner|staff"></div> を人物イラストに置き換える */
(function () {
  const S = (d, vb = "0 0 24 24") =>
    `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

  const ICONS = {
    // ---- 業種 ----
    "内装仕上工事": S('<rect x="3" y="3" width="14" height="6" rx="1.5"/><path d="M17 6h3v5h-8v3"/><rect x="10.5" y="14" width="3" height="7" rx="1"/>'),
    "電気工事": S('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
    "管工事": S('<path d="M4 8h7a3 3 0 0 1 3 3v2"/><path d="M4 5v6M14 13h-2v3h6v-3h-2"/><path d="M15 19.5c0 .8-.7 1.5-1.5 1.5S12 20.3 12 19.5 13.5 17 13.5 17s1.5 1.7 1.5 2.5z"/>'),
    "大工工事": S('<path d="M14 4l6 6-3 3-6-6z"/><path d="m11 7-8 8 3 3 8-8M12.5 5.5 15 3"/>'),
    "左官工事": S('<path d="M3 15 15 3l6 6-12 12z"/><path d="M9 21h12"/><path d="M15 3l-2 6 6-2"/>'),
    "とび・土工・コンクリート工事": S('<path d="M10 3h4l5 17H5z"/><path d="M7.5 12h9M6.2 16.5h11.6M3 20.5h18"/>'),
    "屋根工事": S('<path d="M2 12 12 4l10 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-5h6v5"/>'),
    "タイル・れんが・ブロック工事": S('<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9.3h18M3 14.6h18M9 4v5.3M15 4v5.3M6 9.3v5.3M12 9.3v5.3M18 9.3v5.3M9 14.6V20M15 14.6V20"/>'),
    "鋼構造物工事": S('<path d="M5 4h14M5 20h14M12 4v16M8 4v2M16 4v2M8 18v2M16 18v2"/>'),
    "板金工事": S('<path d="M3 8c3 0 3-3 6-3s3 3 6 3 3-3 6-3M3 14c3 0 3-3 6-3s3 3 6 3 3-3 6-3"/><path d="M3 8v11h18V5"/>'),
    "ガラス工事": S('<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18M4 12h16"/><path d="m7 9 2-2M15 17l2-2"/>'),
    "塗装工事": S('<path d="M8 3h8l1 6H7z"/><path d="M12 9v4"/><path d="M10 13h4l-.5 8h-3z"/>'),
    "防水工事": S('<path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9z"/><path d="M12 12v6a2 2 0 0 1-4 0"/>'),
    "建具工事": S('<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M15 12h.01"/><path d="M3 21h18"/>'),
    "機械器具設置工事": S('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>'),
    "熱絶縁工事": S('<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/><path d="M12 9v7"/><path d="M18 5h3M18 9h3"/>'),
    "電気通信工事": S('<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>'),
    "消防施設工事": S('<rect x="7" y="8" width="8" height="13" rx="2"/><path d="M9 8V5h4v3M13 5h3l3 3M9 3h4"/>'),
    "解体工事": S('<path d="M3 21h18"/><rect x="4" y="13" width="6" height="8"/><rect x="10" y="16" width="5" height="5"/><path d="m14 4 6 6M17 7l-5 5"/><path d="M16 11l2 2"/>'),

    // ---- 汎用 ----
    shield: S('<path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/>'),
    heart: S('<path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/>'),
    health: S('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 9v6M9 12h6"/>'),
    pension: S('<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4"/>'),
    helmet: S('<path d="M3 17h18M5 17a7 7 0 0 1 14 0"/><path d="M10 10V6.5a2 2 0 0 1 4 0V10"/>'),
    license: S('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="11" r="2.5"/><path d="M5.5 17c.6-1.8 2-2.8 3.5-2.8s2.9 1 3.5 2.8M15 9h3M15 12h3"/>'),
    umbrella: S('<path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9z"/><path d="M12 12v6a2 2 0 0 1-4 0"/>'),
    building: S('<rect x="4" y="3" width="11" height="18"/><path d="M15 9h5v12h-5M8 7h3M8 11h3M8 15h3M3 21h18"/>'),
    team: S('<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M3 20c.6-3.4 3-5.5 6-5.5s5.4 2.1 6 5.5M15.5 14.4c2.7-.2 4.9 1.5 5.5 4.6"/>'),
    person: S('<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.8 3.6-6 7-6s6.2 2.2 7 6"/>'),
    chat: S('<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>'),
    send: S('<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>'),
    doc: S('<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h5"/>'),
    yen: S('<path d="M6 4l6 8 6-8M12 12v8M8 13h8M8 16.5h8"/>'),
    compare: S('<rect x="3" y="4" width="7" height="16" rx="1.5"/><rect x="14" y="8" width="7" height="12" rx="1.5"/><path d="M5.5 9h2M5.5 12h2M16.5 12h2M16.5 15h2"/>'),
    handshake: S('<path d="m11 17 2 2a1.4 1.4 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3-3"/><path d="M21 8 17 4l-4 3-2-1-4 4 1.5 1.5L11 9l5.5 5.5"/><path d="M3 8l4-4 3 2M3 8l6 6 2 2a1.4 1.4 0 0 0 2-2"/>'),
    form: S('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/><path d="m14 17 1.5 1.5L19 15"/>'),
    search: S('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    megaphone: S('<path d="M3 11v2l13 5V6zM16 9a3 3 0 0 1 0 6M6 13l1 6h3l-1-5"/>'),
    network: S('<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M12 7.5v4M12 11.5l-5.5 4.5M12 11.5l5.5 4.5"/>'),
    store: S('<path d="M3 9l1.5-5h15L21 9v1a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM5 13v8h14v-8M10 21v-5h4v5"/>'),
    star: S('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),
    pin: S('<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>'),
    chart: S('<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>'),
    tool: S('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>'),
    clock: S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    free: S('<path d="M20 12v8H4v-8M2 7h20v5H2zM12 22V7"/><path d="M12 7H8a2.5 2.5 0 0 1 0-5c3 0 4 5 4 5zM12 7h4a2.5 2.5 0 0 0 0-5c-3 0-4 5-4 5z"/>'),
    check: S('<path d="M20 6 9 17l-5-5"/>'),
    arrow: S('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    question: S('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01"/>')
  };

  // ---- 人物（顔なしのフラットイラスト） ----
  function person(kind) {
    const skin = "#F1D3B5";
    const body = { worker: "#2B2F36", owner: "#E9E6DD", staff: "#4E5B6A" }[kind] || "#2B2F36";
    const hat =
      kind === "worker"
        ? `<path d="M36 34a24 24 0 0 1 48 0z" fill="#FFC700"/><rect x="30" y="32" width="60" height="6" rx="3" fill="#FFC700"/><rect x="57" y="12" width="6" height="18" rx="3" fill="#E5B200"/>`
        : kind === "owner"
        ? `<path d="M38 40c0-16 9-24 22-24s22 8 22 24c-6-6-14-9-22-9s-16 3-22 9z" fill="#3A2E28"/>`
        : `<path d="M38 40c0-15 9-22 22-22s22 7 22 22c-4-4-12-6-22-6s-18 2-22 6z" fill="#2A2A2A"/>`;
    const apron = kind === "owner" ? `<path d="M46 86h28v40H46z" fill="#121212"/><path d="M50 86v-8M70 86v-8" stroke="#121212" stroke-width="3"/>` : "";
    const badge = kind === "worker" ? `<rect x="66" y="92" width="12" height="8" rx="2" fill="#FFC700"/>` : "";
    return `<svg viewBox="0 0 120 130" aria-hidden="true">
      <path d="M20 130c2-30 18-48 40-48s38 18 40 48z" fill="${body}"/>${apron}${badge}
      <rect x="52" y="64" width="16" height="20" rx="6" fill="${skin}"/>
      <circle cx="60" cy="46" r="20" fill="${skin}"/>${hat}</svg>`;
  }

  // ---- 店舗ファサード ----
  const SHOPS = {
    restaurant: { sign: "定食", aw: "#C8452F", prop: `<path d="M86 108h28a14 14 0 0 1-28 0z" fill="#fff"/><path d="M92 100c0-4 4-4 4-8M100 100c0-4 4-4 4-8M108 100c0-4 4-4 4-8" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>` },
    cafe: { sign: "CAFE", aw: "#2F6B4F", prop: `<path d="M88 96h22v12a11 11 0 0 1-22 0z" fill="#fff"/><path d="M110 100h4a4 4 0 0 1 0 8h-4" stroke="#fff" stroke-width="3" fill="none"/><path d="M94 90c0-3 3-3 3-6M102 90c0-3 3-3 3-6" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>` },
    salon: { sign: "HAIR", aw: "#B9867A", prop: `<circle cx="92" cy="112" r="6" stroke="#fff" stroke-width="3" fill="none"/><circle cx="108" cy="112" r="6" stroke="#fff" stroke-width="3" fill="none"/><path d="m96 107 16-20M104 107 88 87" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` },
    clinic: { sign: "CLINIC", aw: "#3E7CB1", prop: `<rect x="93" y="88" width="14" height="36" rx="2" fill="#fff"/><rect x="82" y="99" width="36" height="14" rx="2" fill="#fff"/>` },
    retail: { sign: "SHOP", aw: "#6B5BA8", prop: `<path d="M100 88a5 5 0 1 1 5 5l-5 3-22 12h44l-22-12" stroke="#fff" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"/>` },
    office: { sign: "OFFICE", aw: "#4A4F57", prop: `<rect x="84" y="96" width="32" height="22" rx="3" fill="#fff"/><path d="M94 96v-5h12v5" stroke="#fff" stroke-width="3" fill="none"/>` }
  };
  function shop(type) {
    const s = SHOPS[type] || SHOPS.cafe;
    const stripes = Array.from({ length: 8 }, (_, i) =>
      `<path d="M${20 + i * 20} 54h20v14a10 10 0 0 1-20 0z" fill="${i % 2 ? "#fff" : s.aw}"/>`).join("");
    return `<svg viewBox="0 0 200 170" aria-hidden="true">
      <rect x="0" y="152" width="200" height="18" fill="#E7E6E0"/>
      <rect x="20" y="20" width="160" height="134" rx="4" fill="#F6F5F1" stroke="#121212" stroke-width="3"/>
      <rect x="40" y="28" width="120" height="22" rx="4" fill="#121212"/>
      <text x="100" y="44" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="13" letter-spacing="2" fill="#FFC700">${s.sign}</text>
      ${stripes}
      <rect x="32" y="84" width="34" height="68" rx="2" fill="#2B2B2B"/><circle cx="60" cy="120" r="2.5" fill="#FFC700"/>
      <rect x="76" y="82" width="92" height="50" rx="3" fill="${s.aw}"/>
      ${s.prop}
      <rect x="140" y="132" width="24" height="20" rx="3" fill="#7BAA6B"/><circle cx="152" cy="126" r="11" fill="#7BAA6B"/>
    </svg>`;
  }

  function hydrate(root = document) {
    root.querySelectorAll("[data-ic]").forEach(el => { if (!el.firstChild) el.innerHTML = ICONS[el.dataset.ic] || ""; });
    root.querySelectorAll("[data-shop]").forEach(el => { if (!el.firstChild) el.innerHTML = shop(el.dataset.shop); });
    root.querySelectorAll("[data-person]").forEach(el => { if (!el.firstChild) el.innerHTML = person(el.dataset.person); });
  }
  window.MT = { icon: n => ICONS[n] || "", shop, person, hydrate };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => hydrate());
  else hydrate();
})();
