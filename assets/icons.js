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


  // ---- イラストアイコン（塗り＋線のデュオトーン, 48×48） ----
  const K = "#121212", Y = "#FFC700", W = "#fff", STEEL = "#C9CED6", WOOD = "#C68B59",
        RED = "#D9553F", BLUE = "#4FA3E0", BRICK = "#D9774B", GREEN = "#6FAE6A";
  const D = d => `<svg viewBox="0 0 48 48" fill="none" stroke="${K}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const gear = (cx, cy, r1, r2, n) => {
    let d = "";
    for (let i = 0; i < n * 2; i++) {
      const r = i % 2 ? r2 : r1, a0 = (i / (n * 2)) * Math.PI * 2, a1 = ((i + 1) / (n * 2)) * Math.PI * 2;
      const p = a => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
      d += (i ? "L" : "M") + p(a0) + "L" + p(a1);
    }
    return d + "z";
  };
  const ILLUS = {
    // 業種
    "内装仕上工事": D(`<rect x="5" y="7" width="30" height="13" rx="4" fill="${Y}"/><path d="M9 11h12" stroke="${W}" stroke-width="2.5"/><path d="M35 13.5h5v10H22v6"/><rect x="18.5" y="29" width="7" height="14" rx="2.5" fill="${K}"/>`),
    "電気工事": D(`<circle cx="24" cy="24" r="20" fill="#FFF0B3" stroke="none"/><path d="M27 4 11 27h11l-3 17 18-24H25z" fill="${Y}"/>`),
    "管工事": D(`<path d="M4 10h18a10 10 0 0 1 10 10v6h-8v-6a2 2 0 0 0-2-2H4z" fill="${STEEL}"/><rect x="2" y="8" width="4" height="12" rx="1.5" fill="${Y}"/><rect x="21" y="24" width="14" height="5" rx="1.5" fill="${Y}"/><path d="M28 33c0 0-5 5.5-5 8.5a5 5 0 0 0 10 0c0-3-5-8.5-5-8.5z" fill="${BLUE}"/>`),
    "大工工事": D(`<g transform="rotate(-35 24 24)"><rect x="20.5" y="16" width="7" height="30" rx="2.5" fill="${WOOD}"/><path d="M9 6h22a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" fill="${Y}"/><path d="M34 8c4 0 7 2 9 6-3-1-6-1-9 1" fill="${STEEL}"/><path d="M10 10h8" stroke="${W}" stroke-width="2.5"/></g>`),
    "左官工事": D(`<path d="M4 42c4-3 8 1 12-2s8 1 12-2 8 1 12-2v6H4z" fill="#E8E2D6"/><path d="M6 32h32l-3 5H9z" fill="${STEEL}"/><path d="M22 32v-8"/><rect x="13" y="8" width="20" height="16" rx="7" fill="${Y}"/>`),
    "とび・土工・コンクリート工事": D(`<path d="M19 5h10l10 34H9z" fill="#F28C28"/><path d="M16 17h16l2 7H14zM12.5 30h23" fill="${W}"/><rect x="5" y="39" width="38" height="5" rx="1.5" fill="${K}"/>`),
    "屋根工事": D(`<rect x="10" y="22" width="28" height="21" fill="${W}"/><rect x="20" y="30" width="8" height="13" fill="${Y}"/><path d="M31 9h5v9l-5-4z" fill="${BRICK}"/><path d="M3 25 24 7l21 18-3 4L24 14 6 29z" fill="${RED}"/>`),
    "タイル・れんが・ブロック工事": D(`<g fill="${BRICK}"><rect x="4" y="8" width="19" height="9" rx="1"/><rect x="25" y="8" width="19" height="9" rx="1"/><rect x="4" y="19" width="9" height="9" rx="1"/><rect x="15" y="19" width="19" height="9" rx="1"/><rect x="36" y="19" width="8" height="9" rx="1"/><rect x="4" y="30" width="19" height="9" rx="1"/><rect x="25" y="30" width="19" height="9" rx="1"/></g><path d="M7 11h6M28 22h6" stroke="#F3B08F" stroke-width="2"/>`),
    "鋼構造物工事": D(`<rect x="6" y="6" width="36" height="7" rx="1.5" fill="#8A94A6"/><rect x="20.5" y="13" width="7" height="22" fill="${STEEL}"/><rect x="6" y="35" width="36" height="7" rx="1.5" fill="#8A94A6"/><g fill="${Y}"><circle cx="11" cy="9.5" r="1.8"/><circle cx="37" cy="9.5" r="1.8"/><circle cx="11" cy="38.5" r="1.8"/><circle cx="37" cy="38.5" r="1.8"/></g>`),
    "板金工事": D(`<path d="M4 14q4-6 8 0t8 0 8 0 8 0 8 0v20q-4-6-8 0t-8 0-8 0-8 0-8 0z" fill="${STEEL}"/><path d="M8 13v19M16 15v19M24 13v19M32 15v19M40 13v19" stroke="${W}" stroke-width="1.8"/><path d="M33 4l9 3-3 3" fill="${Y}"/>`),
    "ガラス工事": D(`<rect x="7" y="5" width="34" height="38" rx="2" fill="#CFE6F5"/><path d="M24 5v38M7 24h34" stroke-width="3"/><path d="M11 15l5-5M11 20l9-9M28 34l5-5" stroke="${W}" stroke-width="2.5"/>`),
    "塗装工事": D(`<rect x="5" y="20" width="22" height="22" rx="3" fill="${Y}"/><path d="M5 25h22" /><path d="M9 20v4a2 2 0 0 0 4 0v-4" fill="${BLUE}" stroke="none"/><path d="M5 20h22"/><rect x="34" y="4" width="5" height="14" rx="2" fill="${WOOD}"/><rect x="31" y="18" width="11" height="6" rx="1" fill="${STEEL}"/><path d="M31 24h11v10a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3z" fill="${BLUE}"/>`),
    "防水工事": D(`<path d="M11 6s-3 3.5-3 5.5a3 3 0 0 0 6 0C14 9.5 11 6 11 6zM37 4s-3 3.5-3 5.5a3 3 0 0 0 6 0C40 7.5 37 4 37 4z" fill="${BLUE}"/><path d="M24 12a18 18 0 0 1 18 18H6a18 18 0 0 1 18-18z" fill="${Y}"/><path d="M24 30v9a3.5 3.5 0 0 1-7 0" stroke-width="2.5"/>`),
    "建具工事": D(`<rect x="10" y="4" width="28" height="40" rx="1.5" fill="${WOOD}"/><rect x="15" y="9" width="18" height="12" rx="1" fill="#E3B48A"/><rect x="15" y="25" width="18" height="14" rx="1" fill="#E3B48A"/><circle cx="31" cy="23" r="2.2" fill="${Y}"/><path d="M4 44h40"/>`),
    "機械器具設置工事": D(`<path d="${gear(20, 26, 15, 11.5, 8)}" fill="${STEEL}"/><circle cx="20" cy="26" r="5" fill="${Y}"/><path d="${gear(37, 12, 8.5, 6.5, 6)}" fill="${Y}"/><circle cx="37" cy="12" r="2.5" fill="${W}"/>`),
    "熱絶縁工事": D(`<path d="M14 30V8a5 5 0 0 1 10 0v22a8 8 0 1 1-10 0z" fill="${W}"/><circle cx="19" cy="36" r="4.5" fill="${RED}" stroke="none"/><rect x="17.5" y="16" width="3" height="18" rx="1.5" fill="${RED}" stroke="none"/><path d="M31 8l5 4-5 4 5 4-5 4 5 4-5 4 5 4" stroke="${Y}" stroke-width="3.5"/><path d="M41 8v32" stroke-width="2"/>`),
    "電気通信工事": D(`<path d="M10 17a20 20 0 0 1 28 0M15 22a13 13 0 0 1 18 0" stroke="${BLUE}" stroke-width="3"/><rect x="6" y="30" width="36" height="12" rx="3" fill="#4A4F57"/><circle cx="13" cy="36" r="2" fill="${Y}" stroke="none"/><circle cx="20" cy="36" r="2" fill="${GREEN}" stroke="none"/><path d="M24 30v-4"/><circle cx="24" cy="25" r="2" fill="${Y}"/>`),
    "消防施設工事": D(`<path d="M18 7h8v6h-8z" fill="${K}"/><path d="M26 9h6l5 5v8" /><rect x="14" y="13" width="16" height="31" rx="6" fill="${RED}"/><rect x="14" y="23" width="16" height="9" fill="${W}"/><path d="M14 4h12"/>`),
    "解体工事": D(`<path d="M6 4h20M10 4v4" stroke-width="3"/><path d="M10 8l4 14" stroke-dasharray="2 2.5"/><circle cx="15" cy="26" r="8" fill="${K}"/><circle cx="12.5" cy="23.5" r="2" fill="#555" stroke="none"/><g fill="${BRICK}"><path d="M28 24h7v7h-7z"/><path d="M36 24h8v7h-8z"/><path d="M26 32h9v6h-9z"/><path d="M36 32h8v6h-8z"/><path d="M26 39h18v5H26z"/></g><path d="M28 20l3-3M34 18l1-4M24 22l-2-2" stroke="${Y}" stroke-width="2.5"/>`),

    // 特長
    "f-jobs": D(`<path d="M18 13V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><rect x="5" y="13" width="38" height="28" rx="5" fill="${Y}"/><path d="M5 25h38"/><rect x="20" y="21" width="8" height="8" rx="2" fill="${K}"/><circle cx="39" cy="9" r="6" fill="${RED}"/><path d="M39 6v3.5M39 12h.01" stroke="${W}" stroke-width="2.2"/>`),
    "f-megaphone": D(`<path d="M6 19h7l20-10v30L13 29H6z" fill="${Y}"/><rect x="4" y="18" width="9" height="12" rx="2" fill="${W}"/><path d="M12 29l3 12h6l-3-11" fill="${W}"/><path d="M39 17a8 8 0 0 1 0 14M42 12a14 14 0 0 1 0 24" stroke-width="2.5"/>`),
    "f-network": D(`<path d="M24 14v8M24 22 11 32M24 22l13 10" stroke-width="2.5"/><circle cx="24" cy="10" r="6" fill="${Y}"/><circle cx="10" cy="36" r="6" fill="${W}"/><circle cx="38" cy="36" r="6" fill="${W}"/><circle cx="24" cy="22" r="2.5" fill="${K}"/>`),
    "f-medal": D(`<path d="M14 4h8l4 14h-8zM34 4h-8l-4 14h8z" fill="${BLUE}"/><path d="M26 4h8l-4 14h-8z" fill="${RED}"/><circle cx="24" cy="30" r="13" fill="${Y}"/><path d="m24 22.5 2.3 4.7 5.2.8-3.8 3.6.9 5.1-4.6-2.4-4.6 2.4.9-5.1-3.8-3.6 5.2-.8z" fill="${W}"/>`),
    "f-profile": D(`<rect x="5" y="9" width="38" height="30" rx="4" fill="${W}"/><path d="M5 15h38" /><circle cx="17" cy="25" r="5" fill="${Y}"/><path d="M10 35c1-3.5 3.8-5 7-5s6 1.5 7 5" fill="${Y}"/><path d="M28 23h10M28 28h10M28 33h6"/><circle cx="9.5" cy="12" r="1" fill="${K}"/>`),
    "f-free": D(`<rect x="7" y="20" width="34" height="22" rx="2" fill="${W}"/><rect x="5" y="13" width="38" height="8" rx="2" fill="${W}"/><path d="M21 13h6v29h-6z" fill="${RED}"/><path d="M24 13c-3-7-12-8-12-3 0 3 6 3 12 3zM24 13c3-7 12-8 12-3 0 3-6 3-12 3z" fill="${RED}"/>`),
    "f-chat": D(`<path d="M4 8h26v18H14l-7 6v-6H4z" fill="${Y}"/><path d="M10 14h14M10 19h9"/><path d="M44 20H34v-0 M20 30v10h14l6 5v-5h4V20H34" fill="${W}"/><circle cx="27" cy="35" r="1.3" fill="${K}"/><circle cx="32" cy="35" r="1.3" fill="${K}"/><circle cx="37" cy="35" r="1.3" fill="${K}"/>`),
    "f-compare": D(`<rect x="4" y="8" width="18" height="30" rx="3" fill="${W}"/><rect x="26" y="8" width="18" height="30" rx="3" fill="${W}"/><path d="M8 32v-6M13 32V20M18 32v-9" stroke-width="3"/><path d="M30 32v-4M35 32v-8M40 32v-5" stroke-width="3" stroke="${STEEL}"/><circle cx="35" cy="38" r="7" fill="${Y}"/><path d="m31.8 38 2.2 2.2 4.2-4.2" stroke-width="2.2"/>`),
    "f-shield": D(`<path d="M24 4 7 10v11c0 10.5 7 19.5 17 23 10-3.5 17-12.5 17-23V10z" fill="${Y}"/><path d="M24 4v40c10-3.5 17-12.5 17-23V10z" fill="#FFDA4D" stroke="none"/><path d="M24 4 7 10v11c0 10.5 7 19.5 17 23 10-3.5 17-12.5 17-23V10z"/><path d="m16 23 6 6 11-11" stroke-width="3.2"/>`)
  };

  // ---- お店のタイプ（シーン付きイラストアイコン, 120×120） ----
  const SHOPIC = {
    restaurant: { bg: "#FCE6DF", art: `
      <rect x="18" y="16" width="84" height="5" rx="2.5" fill="${WOOD}"/>
      <g fill="${RED}"><path d="M22 21h24v18l-12 4-12-4z"/><path d="M48 21h24v18l-12 4-12-4z"/><path d="M74 21h24v18l-12 4-12-4z"/></g>
      <circle cx="60" cy="31" r="5" fill="${W}" stroke="none"/>
      <path d="M48 58c-3-4 3-6 0-10M60 58c-3-4 3-6 0-10M72 58c-3-4 3-6 0-10" stroke-width="3"/>
      <rect x="47" y="96" width="26" height="7" rx="2" fill="${K}"/>
      <path d="M22 66h76a38 32 0 0 1-76 0z" fill="${W}"/>
      <path d="M26 80h68" stroke="${RED}" stroke-width="3" stroke-dasharray="6 5"/>
      <ellipse cx="60" cy="66" rx="38" ry="6" fill="#F3C78A"/>
      <path d="M40 66c4-3 8 3 12 0s8 3 12 0 8 3 12 0" stroke="#C99550" stroke-width="2"/>
      <circle cx="78" cy="64" r="5" fill="${Y}"/>
      <path d="M70 62 104 44M74 64l33-16" stroke="${K}" stroke-width="3.5"/>` },
    cafe: { bg: "#E2F0E7", art: `
      <path d="M46 46c-4-6 4-9 0-16M58 44c-4-6 4-9 0-16M70 46c-4-6 4-9 0-16" stroke-width="3"/>
      <ellipse cx="56" cy="98" rx="40" ry="8" fill="${W}"/>
      <path d="M86 64h5a10 10 0 0 1 0 20h-7" stroke-width="5" stroke="${K}"/>
      <path d="M86 64h5a10 10 0 0 1 0 20h-7" stroke-width="2" stroke="#2F6B4F"/>
      <path d="M26 58h60v16a22 22 0 0 1-22 22H48a22 22 0 0 1-22-22z" fill="#2F6B4F"/>
      <path d="M32 82h48" stroke="${W}" stroke-width="2.5" stroke-dasharray="1 6"/>
      <ellipse cx="56" cy="58" rx="30" ry="6" fill="#8B5A3C"/>
      <path d="M56 61c-5-3-6-6-3-7 1.5-.4 2.5.6 3 1.5.5-.9 1.5-1.9 3-1.5 3 1 2 4-3 7z" fill="${W}" stroke="none"/>
      <g transform="rotate(30 98 26)"><ellipse cx="98" cy="26" rx="8" ry="11" fill="#8B5A3C"/><path d="M98 16c-3 6 3 14 0 20" stroke="#5E3A24" stroke-width="2"/></g>` },
    salon: { bg: "#F8E7E2", art: `
      <path d="M44 86v14M30 102h28" stroke-width="3.5"/>
      <ellipse cx="44" cy="52" rx="26" ry="34" fill="#B9867A"/>
      <ellipse cx="44" cy="52" rx="19" ry="27" fill="#DCEBF2"/>
      <path d="M33 44l12-12M35 54l16-16" stroke="${W}" stroke-width="3"/>
      <g transform="rotate(-20 90 74)">
        <path d="M86 40h8l-2 32h-4z" fill="${STEEL}"/><path d="M88 40l2 32" stroke="none"/>
        <circle cx="82" cy="86" r="8" fill="${Y}"/><circle cx="98" cy="86" r="8" fill="${Y}"/>
        <circle cx="82" cy="86" r="3.5" fill="#F8E7E2"/><circle cx="98" cy="86" r="3.5" fill="#F8E7E2"/>
        <path d="M84 79l6-7 6 7" stroke-width="3"/><circle cx="90" cy="72" r="2" fill="${K}"/>
      </g>
      <path d="M96 22v10M91 27h10M104 40v6M101 43h6" stroke="${Y}" stroke-width="3"/>` },
    clinic: { bg: "#E2EDF8", art: `
      <rect x="18" y="22" width="56" height="70" rx="8" fill="${W}"/>
      <rect x="34" y="16" width="24" height="12" rx="4" fill="#3E7CB1"/>
      <path d="M40 42h12v10h10v12H52v10H40V64H30V52h10z" fill="${RED}"/>
      <path d="M30 84h32" stroke="${STEEL}" stroke-width="3"/>
      <path d="M86 20v14a12 12 0 0 0 24 0V20" stroke-width="3.5"/>
      <circle cx="86" cy="19" r="2.5" fill="${K}"/><circle cx="110" cy="19" r="2.5" fill="${K}"/>
      <path d="M98 46v24a14 14 0 0 1-14 14" stroke-width="3.5"/>
      <circle cx="80" cy="90" r="10" fill="${Y}"/><circle cx="80" cy="90" r="4" fill="${W}"/>` },
    retail: { bg: "#ECE7F7", art: `
      <path d="M40 46v-8a14 14 0 0 1 28 0v8" stroke-width="4"/>
      <path d="M24 46h60l5 56H19z" fill="#6B5BA8"/>
      <path d="M24 46h60l2 12H22z" fill="#8576C4"/>
      <circle cx="40" cy="52" r="2.5" fill="${K}"/><circle cx="68" cy="52" r="2.5" fill="${K}"/>
      <path d="M38 78l16-8 16 8" stroke="${W}" stroke-width="3"/><path d="M54 70v-4a3 3 0 1 0-3-3" stroke="${W}" stroke-width="2.5"/>
      <g transform="rotate(25 92 32)"><path d="M82 18h18l8 14-8 14H82z" fill="${Y}"/><circle cx="100" cy="32" r="3" fill="${W}"/><path d="M87 28h6M87 36h8"/></g>
      <path d="M102 56l3 3M102 59l3-3M14 30l3 3M14 33l3-3" stroke="${K}" stroke-width="2"/>` },
    office: { bg: "#EAEBEE", art: `
      <path d="M92 66c-10-4-12-18-4-24 2 8 6 12 4 24zM94 66c8-6 18-4 20-14-8 0-16 4-20 14zM93 66c-2-12 6-22 14-24-2 10-6 16-14 24z" fill="${GREEN}"/>
      <path d="M84 66h20l-3 20H87z" fill="${W}"/>
      <rect x="22" y="30" width="60" height="42" rx="4" fill="#4A4F57"/>
      <rect x="28" y="36" width="48" height="30" rx="2" fill="#DCEBF2"/>
      <path d="M36 60V50M46 60V44M56 60v-8M66 60V40" stroke="${Y}" stroke-width="5"/>
      <path d="M46 72l-4 14h20l-4-14" fill="${STEEL}"/>
      <rect x="10" y="86" width="100" height="7" rx="2" fill="${WOOD}"/>
      <path d="M18 93v14M102 93v14" stroke-width="3.5"/>
      <rect x="20" y="76" width="12" height="10" rx="2" fill="${Y}"/><path d="M32 78h3v5h-3"/>` }
  };
  function shopIcon(type) {
    const s = SHOPIC[type] || SHOPIC.cafe;
    return `<svg viewBox="0 0 120 120" fill="none" stroke="${K}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="120" height="120" rx="28" fill="${s.bg}" stroke="none"/>${s.art}</svg>`;
  }

  function hydrate(root = document) {
    root.querySelectorAll("[data-ic]").forEach(el => { if (!el.firstChild) el.innerHTML = ICONS[el.dataset.ic] || ""; });
    root.querySelectorAll("[data-shop]").forEach(el => { if (!el.firstChild) el.innerHTML = shop(el.dataset.shop); });
    root.querySelectorAll("[data-il]").forEach(el => { if (!el.firstChild) el.innerHTML = ILLUS[el.dataset.il] || ICONS[el.dataset.il] || ""; });
    root.querySelectorAll("[data-shopic]").forEach(el => { if (!el.firstChild) el.innerHTML = shopIcon(el.dataset.shopic); });
    root.querySelectorAll("[data-person]").forEach(el => { if (!el.firstChild) el.innerHTML = person(el.dataset.person); });
  }
  window.MT = { icon: n => ICONS[n] || "", illus: n => ILLUS[n] || "", shop, shopIcon, person, hydrate };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => hydrate());
  else hydrate();
})();
