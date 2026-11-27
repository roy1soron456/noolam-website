(() => {
  "use strict";

  /* -------------------------------------------------------------
   * Catalog & Section Data
   * ----------------------------------------------------------- */
  const LOOKS = [
    {
      id: "look-crimson",
      name: "Kumkum Temple Crimson",
      origin: "KANCHIPURAM KORVAI",
      desc: "Pure mulberry body woven with antique gold temple gopuram border.",
      price: 28500,
      img: "assets/look-crimson.jpg",
      badge: "Signature Korvai",
    },
    {
      id: "look-peacock",
      name: "Mayura Peacock Teal",
      origin: "ARNI SILK LOOM",
      desc: "Iridescent peacock-blue warp interwoven with hand-beaten zari.",
      price: 26800,
      img: "assets/look-peacock.jpg",
      badge: "Royal Blue Zari",
    },
    {
      id: "look-mustard",
      name: "Haldi & Rani Korvai",
      origin: "MADURAI SHOT SILK",
      desc: "Sun-warmed mustard silk framed by a contrasting rani-magenta border.",
      price: 24900,
      img: "assets/look-mustard.jpg",
      badge: "Festive Drape",
    },
    {
      id: "look-emerald",
      name: "Maragatham Temple Green",
      origin: "KANCHIPURAM PURE SILK",
      desc: "Lush emerald weave highlighted with classic rudraksha gold motifs.",
      price: 31200,
      img: "assets/look-emerald.jpg",
      badge: "Heritage Loom",
    },
    {
      id: "look-magenta",
      name: "Rani Sandstone Zari",
      origin: "BANARASI KADWA",
      desc: "Luminous magenta silk paired with delicate floral jaal brocade.",
      price: 29400,
      img: "assets/mood-magenta.jpg",
      badge: "Courtyard Edit",
    },
    {
      id: "look-ivory",
      name: "Chandan Tissue Gold",
      origin: "CHANDERI & ZARI",
      desc: "Featherlight ivory tissue infused with antique gold shimmer threads.",
      price: 22900,
      img: "assets/mood-ivory.jpg",
      badge: "Daylight Tissue",
    },
    {
      id: "look-cobalt",
      name: "Neela Midnight Kanjivaram",
      origin: "KANCHIPURAM ATELIER",
      desc: "Deep sapphire silk finished with silver-gold temple checks.",
      price: 33500,
      img: "assets/mood-cobalt.jpg",
      badge: "Evening Soirée",
    },
  ];

  const PICK_SILKS = [
    {
      id: "silk-koodai",
      title: "KOODAI CHECK",
      sub: "MADRAS CHECKS",
      color: "#0077CC",
      tilt: -4,
      price: 21500,
      img: "assets/look-peacock.jpg",
    },
    {
      id: "silk-murshidabad",
      title: "MURSHIDABAD GOLD",
      sub: "HAND BLOCK SILK",
      color: "#D62828",
      tilt: 3,
      price: 25900,
      img: "assets/look-crimson.jpg",
    },
    {
      id: "silk-monsoon",
      title: "MONSOON",
      sub: "TEAL KORVAI",
      color: "#0096C7",
      tilt: -2.5,
      price: 23400,
      img: "assets/mood-cobalt.jpg",
    },
    {
      id: "silk-madurai",
      title: "MADURAI SHOT SILK",
      sub: "DUAL-TONE WEAVE",
      color: "#E5A01D",
      tilt: 3.5,
      price: 24200,
      img: "assets/look-mustard.jpg",
    },
    {
      id: "silk-palace",
      title: "PALACE DUSK",
      sub: "BRIDAL CRIMSON",
      color: "#B51745",
      tilt: -3,
      price: 34800,
      img: "assets/mood-maroon.jpg",
    },
    {
      id: "silk-bengal",
      title: "BENGAL GARDEN",
      sub: "EMERALD MULBERRY",
      color: "#228B7E",
      tilt: 2.5,
      price: 27600,
      img: "assets/look-emerald.jpg",
    },
    {
      id: "silk-benaras",
      title: "BENARAS GOLD",
      sub: "KATAN BROCADE",
      color: "#DF6246",
      tilt: -3.5,
      price: 32500,
      img: "assets/mood-ivory.jpg",
    },
  ];

  const RACK_ITEMS = {
    sarees: [
      {
        id: "rack-saree-1",
        title: "Kanjivaram Gold Checks",
        weave: "PURE MULBERRY SILK",
        price: 24900,
        body: "#C62828",
        accent: "#E8B954",
        border: "#6A0F1B",
      },
      {
        id: "rack-saree-2",
        title: "Mayura Teal Temple",
        weave: "KORVAI HANDLOOM",
        price: 27400,
        body: "#0F6C8C",
        accent: "#F2C96B",
        border: "#083D52",
      },
      {
        id: "rack-saree-3",
        title: "Haldi Saffron Korvai",
        weave: "MADURAI SHOT SILK",
        price: 23800,
        body: "#E29B1E",
        accent: "#FFF1C1",
        border: "#9E1B32",
      },
      {
        id: "rack-saree-4",
        title: "Maragatham Emerald Zari",
        weave: "BANARASI KATAN",
        price: 31500,
        body: "#166E57",
        accent: "#E8B954",
        border: "#0B3D30",
      },
      {
        id: "rack-saree-5",
        title: "Rani Gulab Patola",
        weave: "DOUBLE IKAT SILK",
        price: 29200,
        body: "#C2185B",
        accent: "#F7D37E",
        border: "#6D0E34",
      },
      {
        id: "rack-saree-6",
        title: "Chandan Ivory Tissue",
        weave: "ZARI ORGANZA SILK",
        price: 26100,
        body: "#EFE3CF",
        accent: "#C89535",
        border: "#9E1B32",
      },
    ],
    blouses: [
      {
        id: "rack-blouse-1",
        title: "Crimson Maggam Zari Blouse",
        weave: "HAND-EMBROIDERED SILK",
        price: 6800,
        body: "#9E1B32",
        accent: "#ECC268",
        border: "#5B0C1A",
      },
      {
        id: "rack-blouse-2",
        title: "Peacock Brocade Elbow-Sleeve",
        weave: "BANARASI BROCADE",
        price: 7200,
        body: "#0E6B8A",
        accent: "#F2CD77",
        border: "#073E52",
      },
      {
        id: "rack-blouse-3",
        title: "Antique Gold Tissue Blouse",
        weave: "PURE ZARI TISSUE",
        price: 6400,
        body: "#D9A94E",
        accent: "#FFF3D1",
        border: "#8E6319",
      },
      {
        id: "rack-blouse-4",
        title: "Emerald Temple Border Blouse",
        weave: "KANCHIPURAM SILK",
        price: 6900,
        body: "#176C54",
        accent: "#ECC268",
        border: "#0A3C2E",
      },
      {
        id: "rack-blouse-5",
        title: "Rani Pink Jacquard Blouse",
        weave: "WOVEN MULBERRY",
        price: 6200,
        body: "#C41E5A",
        accent: "#F8D788",
        border: "#730E33",
      },
    ],
  };

  const DEVOTION_PRODUCTS = [
    {
      id: "dev-1",
      name: "Swarna Kanjivaram",
      weave: "TEMPLE GOLD ZARI",
      desc: "Handspun saffron-mustard mulberry silk anchored by an antique temple zari border.",
      price: 28900,
      img: "assets/mood-mustard.jpg",
    },
    {
      id: "dev-2",
      name: "Meenakshi Emerald",
      weave: "BANARASI KADWA",
      desc: "Rich sanctuary green silk woven with floral kadwa zari motifs along the pallu.",
      price: 32500,
      img: "assets/mood-emerald.jpg",
    },
    {
      id: "dev-3",
      name: "Kaveri Cobalt Drape",
      weave: "SILVER-GOLD KORVAI",
      desc: "Deep sapphire silk accented with luminous silver-gold temple checks.",
      price: 27400,
      img: "assets/mood-cobalt.jpg",
    },
    {
      id: "dev-4",
      name: "Vastra Ivory Tissue",
      weave: "HANDSPUN TISSUE",
      desc: "Featherlight ivory silk tissue with a subtle golden sheen for sunlit rituals.",
      price: 24900,
      img: "assets/mood-ivory.jpg",
    },
  ];

  const DRAPE_STUDIES = [
    {
      id: "drape-1",
      label: "Rani Sundown",
      badge: "TEMPLE ZARI FALL",
      title: "Rani Sundown Kanjivaram",
      price: 26400,
      img: "assets/mood-magenta.jpg",
    },
    {
      id: "drape-2",
      label: "Emerald Mandap",
      badge: "KADWA BROCADE",
      title: "Emerald Mandap Banarasi",
      price: 32500,
      img: "assets/mood-emerald.jpg",
    },
    {
      id: "drape-3",
      label: "Deepam Gold",
      badge: "FESTIVE HANDLOOM",
      title: "Deepam Mustard Korvai",
      price: 24800,
      img: "assets/mood-mustard.jpg",
    },
    {
      id: "drape-4",
      label: "Sindoor Bridal",
      badge: "HEIRLOOM PALLU",
      title: "Sindoor Maroon Bridal",
      price: 42000,
      img: "assets/mood-maroon.jpg",
    },
  ];

  const BRIDAL_ARCHES = [
    { id: "bridal-1", name: "Rani Pattu", price: 36500, img: "assets/mood-magenta.jpg", size: "" },
    { id: "bridal-2", name: "Kalyana Emerald", price: 39800, img: "assets/mood-emerald.jpg", size: "is-mid" },
    { id: "bridal-3", name: "Sindoor Royale", price: 48500, img: "assets/mood-maroon.jpg", size: "is-tall" },
    { id: "bridal-4", name: "Kumkum Temple", price: 41200, img: "assets/look-crimson.jpg", size: "is-mid" },
    { id: "bridal-5", name: "Chandan Muhurtham", price: 34900, img: "assets/mood-ivory.jpg", size: "" },
  ];

  const REELS = [
    {
      id: "reel-marina",
      title: "Marina Morning",
      tag: "LIGHTWEIGHT KORVAI",
      desc: "Breezy mustard and crimson border weave caught in morning courtyard light.",
      price: 24500,
      img: "assets/mood-mustard.jpg",
    },
    {
      id: "reel-kaali",
      title: "Kaali Banarasi",
      tag: "MIDNIGHT SAPPHIRE",
      desc: "Deep cobalt silk shimmering with handwoven silver-gold zari buttis.",
      price: 33200,
      img: "assets/mood-cobalt.jpg",
    },
    {
      id: "reel-ponni",
      title: "Ponni Kanjivaram",
      tag: "BRIDAL HEIRLOOM",
      desc: "Deep wine maroon bridal weave with temple gopuram borders and rich pallu.",
      price: 44900,
      img: "assets/mood-maroon.jpg",
    },
    {
      id: "reel-pachai",
      title: "Pachai Pattu",
      tag: "TEMPLE EMERALD",
      desc: "Sanctuary green Banarasi silk draped with antique temple gold.",
      price: 31800,
      img: "assets/mood-emerald.jpg",
    },
    {
      id: "reel-nila",
      title: "Nila Tissue",
      tag: "DAYLIGHT SILK",
      desc: "Sun-kissed ivory and gold tissue silk that moves like liquid light.",
      price: 25600,
      img: "assets/mood-ivory.jpg",
    },
  ];

  const WEAVE_SWATCHES = [
    { id: "sw-koorai", name: "Koorai Madras Checks", origin: "Kanchipuram", color: "#D62828", price: 22140 },
    { id: "sw-rani", name: "Rani Pink Temple Border", origin: "Arni", color: "#D81B60", price: 21500 },
    { id: "sw-gold", name: "Kanchipuram Gold Zari", origin: "Temple Loom", color: "#E0A82E", price: 24800 },
    { id: "sw-peacock", name: "Peacock Korvai Teal", origin: "Coimbatore", color: "#0077B6", price: 20170 },
    { id: "sw-emerald", name: "Maragatham Emerald", origin: "Banaras", color: "#1B8A6B", price: 23400 },
    { id: "sw-ivory", name: "Chandan Ivory Tissue", origin: "Chanderi", color: "#E6D2B5", price: 19800 },
    { id: "sw-saffron", name: "Haldi Saffron Brocade", origin: "Madurai", color: "#F48C06", price: 21200 },
    { id: "sw-maroon", name: "Sindoor Wine Maroon", origin: "Kanchipuram", color: "#7A1026", price: 25600 },
  ];

  /* -------------------------------------------------------------
   * State & Utilities
   * ----------------------------------------------------------- */
  const formatINR = (num) => "₹" + Number(num).toLocaleString("en-IN");
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smoothstep = (edge0, edge1, x) => {
    const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  };

  const state = {
    lookIndex: 3,
    lookSolo: false,
    rackCategory: "sarees",
    rackIndex: 2,
    rackSpread: false,
    activeDrapeIndex: 0,
    activeReelIndex: 0,
    reelPaused: false,
    selectedSwatches: ["sw-koorai", "sw-rani", "sw-peacock"],
    bag: [],
    wishlist: [],
    activeProduct: null,
    selectedVariant: "Antique Temple Zari",
    revealProgress: 0,
  };

  const $ = (sel, parent = document) => parent.querySelector(sel);
  const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

  let toastTimer = null;
  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("is-shown");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-shown"), 2600);
  }

  /* -------------------------------------------------------------
   * Scene 1: WebGL Red Silk Saree Cloth Shader (Three.js)
   * ----------------------------------------------------------- */
  async function initWebGLSilkCurtain() {
    const canvas = $("#silkCurtainCanvas");
    const fallback = $("#silkFallbackLayer");
    if (!canvas) return null;

    try {
      const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js");

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight, false);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 20);
      camera.position.z = 2.4;

      const textureSrc = window.__HERO_WEAVE_DATA_URI__ || "assets/hero-weave.jpg";
      const loader = new THREE.TextureLoader();
      const texture = await new Promise((resolve, reject) => {
        loader.load(textureSrc, resolve, undefined, reject);
      });
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.colorSpace = THREE.SRGBColorSpace;

      const uniforms = {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uReveal: { value: 0 },
        uAspect: { value: window.innerWidth / window.innerHeight },
      };

      const vertexShader = /* glsl */ `
        uniform float uTime;
        uniform float uReveal;
        varying vec2 vUv;
        varying float vFold;
        varying float vShading;

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Organic living silk ripples across the full-bleed drape
          float wave1 = sin(pos.x * 3.8 + uTime * 1.15 + pos.y * 1.6) * 0.045;
          float wave2 = cos(pos.y * 5.2 - uTime * 0.95 + pos.x * 2.4) * 0.028;
          float microRipple = sin(pos.x * 10.0 - pos.y * 7.5 + uTime * 1.6) * 0.009;

          // Scroll-controlled downward drop + curtain pleating & center parting
          float drop = uReveal * 2.55;
          float archFactor = pow(1.0 - abs(pos.x), 1.35);
          float pleatWave = sin(pos.x * 16.0) * (0.04 + uReveal * 0.14);

          // Gather cloth sideways like drawn heavy silk drapes while descending
          pos.x += sign(pos.x) * uReveal * 0.42 * (1.0 - uv.y * 0.35);
          pos.y -= drop * (0.85 + 0.35 * archFactor);
          pos.z += wave1 + wave2 + microRipple + pleatWave - uReveal * 0.28;

          vFold = wave1 + wave2 + pleatWave;
          vShading = clamp(0.75 + (wave1 + wave2) * 5.2 + pleatWave * 2.4, 0.35, 1.35);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `;

      const fragmentShader = /* glsl */ `
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform float uReveal;
        varying vec2 vUv;
        varying float vFold;
        varying float vShading;

        void main() {
          // Subtle UV warp following fabric deformation
          vec2 warpedUv = vUv + vec2(vFold * 0.14, vFold * 0.08);
          vec4 tex = texture2D(uTexture, clamp(warpedUv, 0.002, 0.998));

          // Traveling warm golden zari specular highlight across silk crests
          float lightSweep = smoothstep(0.02, 0.09, vFold + sin(vUv.x * 3.0 + uTime * 0.7) * 0.025);
          vec3 zariGlow = vec3(1.0, 0.84, 0.48) * lightSweep * 0.24;

          vec3 finalColor = tex.rgb * vShading + zariGlow;

          // Keep edge-to-edge solid silk initially, dissolve cleanly only at end of drop
          float alpha = 1.0 - smoothstep(0.84, 1.0, uReveal);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `;

      const geometry = new THREE.PlaneGeometry(3.4, 2.35, 48, 48);
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        side: THREE.DoubleSide,
      });

      const clothMesh = new THREE.Mesh(geometry, material);
      scene.add(clothMesh);

      const updateSize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        uniforms.uAspect.value = w / h;
        const scaleX = Math.max(1, (w / h) * 0.78);
        clothMesh.scale.set(scaleX, 1.06, 1);
      };
      updateSize();
      window.addEventListener("resize", updateSize);

      const clock = new THREE.Clock();
      let webglRafId = null;

      const renderLoop = () => {
        webglRafId = null;
        if (document.hidden || state.revealProgress >= 0.995) {
          canvas.style.opacity = state.revealProgress >= 0.995 ? "0" : "1";
          return;
        }
        uniforms.uTime.value = clock.getElapsedTime();
        uniforms.uReveal.value = state.revealProgress;
        canvas.style.opacity = "1";
        renderer.render(scene, camera);
        webglRafId = requestAnimationFrame(renderLoop);
      };

      const wake = () => {
        if (!webglRafId && !document.hidden && state.revealProgress < 0.995) {
          webglRafId = requestAnimationFrame(renderLoop);
        }
      };

      document.addEventListener("visibilitychange", wake);
      wake();

      return { uniforms, wake };
    } catch {
      // Graceful fallback if Three.js CDN or WebGL context is unavailable
      canvas.style.display = "none";
      if (fallback) fallback.style.opacity = "1";
      return null;
    }
  }

  /* -------------------------------------------------------------
   * Scenes 1–3: Scroll-Controlled Timeline (GSAP + Lenis + Fallback)
   * ----------------------------------------------------------- */
  function initCinematicScrollTimeline(webglCtrl) {
    const opening = $("#cinematic-opening");
    const overlay = $("#openingSilkOverlay");
    const fallback = $("#silkFallbackLayer");
    const layerFar = $("#layerFar");
    const layerMid = $("#layerMidDisplays");
    const layerFore = $("#layerForeFrame");
    const layerInner = $("#layerInnerHall");
    const showroomCopy = $("#showroomCopy");
    const innerCopy = $("#innerHallCopy");

    const applyCinematicProgress = (p) => {
      // Fast, responsive scroll mapping across 175vh runway:
      // 0.00–0.36: Red silk cloth immediately folds downward & parts to unveil showroom
      // 0.20–0.60: Showroom hero ("Woven for the Divine")
      // 0.30–0.92: Forward camera dolly into palace hall ("An heirloom from the first fold")
      const clothReveal = smoothstep(0.0, 0.36, p);
      state.revealProgress = clothReveal;
      if (webglCtrl && clothReveal < 0.995) webglCtrl.wake();

      if (!webglCtrl && fallback) {
        fallback.style.transform = `translate3d(0, ${clothReveal * 105}%, 0) scale(${1 + clothReveal * 0.08})`;
        fallback.style.opacity = String(1 - smoothstep(0.3, 0.42, p));
      }

      if (overlay) {
        const overlayAlpha = 1 - smoothstep(0.0, 0.16, p);
        overlay.style.opacity = String(overlayAlpha);
        overlay.style.transform = `translate3d(0, ${-p * 90}px, 0) scale(${1 - p * 0.08})`;
      }

      // Camera forward dolly progress (0 -> 1 from 22% to 92%)
      const dolly = smoothstep(0.22, 0.92, p);
      const hallBlend = smoothstep(0.52, 0.84, p);

      if (layerFar) {
        const farScale = lerp(1.02, 1.38, dolly);
        layerFar.style.transform = `translate3d(0, ${-dolly * 22}px, 0) scale(${farScale})`;
        layerFar.style.opacity = String(1 - hallBlend * 0.9);
      }

      if (layerMid) {
        const midScale = lerp(0.95, 1.55, dolly);
        const midSpread = dolly * 140;
        const leftRack = $(".left-rack", layerMid);
        const rightRack = $(".right-rack", layerMid);
        if (leftRack) leftRack.style.transform = `translate3d(${-midSpread}px, ${dolly * 20}px, 0) scale(${midScale})`;
        if (rightRack) rightRack.style.transform = `translate3d(${midSpread}px, ${dolly * 20}px, 0) scale(${midScale})`;
        layerMid.style.opacity = String(smoothstep(0.18, 0.34, p) * (1 - smoothstep(0.55, 0.78, p)));
      }

      if (layerFore) {
        const foreScale = lerp(1.0, 2.35, dolly);
        const forePush = dolly * 220;
        const leftSwath = $(".fore-silk-swath.left", layerFore);
        const rightSwath = $(".fore-silk-swath.right", layerFore);
        const leftPillar = $(".fore-pillar.left", layerFore);
        const rightPillar = $(".fore-pillar.right", layerFore);
        if (leftSwath) leftSwath.style.transform = `translate3d(${-forePush}px, 0, 0) scale(${foreScale})`;
        if (rightSwath) rightSwath.style.transform = `translate3d(${forePush}px, 0, 0) scale(${foreScale})`;
        if (leftPillar) leftPillar.style.transform = `translate3d(${-forePush * 0.75}px, 0, 0) scale(${foreScale * 0.92})`;
        if (rightPillar) rightPillar.style.transform = `translate3d(${forePush * 0.75}px, 0, 0) scale(${foreScale * 0.92})`;
        layerFore.style.opacity = String(1 - smoothstep(0.45, 0.72, p));
      }

      if (layerInner) {
        layerInner.style.opacity = String(hallBlend);
        layerInner.style.transform = `scale(${lerp(0.88, 1.08, hallBlend)})`;
      }

      if (showroomCopy) {
        const showIn = smoothstep(0.2, 0.34, p);
        const showOut = 1 - smoothstep(0.52, 0.68, p);
        const alpha = showIn * showOut;
        showroomCopy.style.opacity = String(alpha);
        showroomCopy.style.transform = `translate3d(0, ${(1 - showIn) * 28 - (1 - showOut) * 32}px, 0)`;
      }

      if (innerCopy) {
        const inAlpha = smoothstep(0.66, 0.82, p);
        innerCopy.style.opacity = String(inAlpha);
        innerCopy.style.transform = `translate3d(0, ${(1 - inAlpha) * 32}px, 0)`;
      }
    };

    let lenisInstance = null;

    // Connect Lenis smooth scrolling + GSAP ScrollTrigger when available
    if (window.Lenis && window.gsap && window.ScrollTrigger) {
      const lenis = new window.Lenis({
        duration: 0.55,
        wheelMultiplier: 1.35,
        smoothWheel: true,
        touchMultiplier: 1.8,
      });
      lenisInstance = lenis;

      window.gsap.registerPlugin(window.ScrollTrigger);
      lenis.on("scroll", window.ScrollTrigger.update);

      window.gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);

      window.ScrollTrigger.create({
        trigger: opening,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => applyCinematicProgress(self.progress),
      });

      // Smooth anchor links via Lenis
      $$('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const targetId = anchor.getAttribute("href");
          const target = targetId && targetId.length > 1 ? $(targetId) : null;
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -76 });
          }
        });
      });
    } else {
      // Deterministic reversible fallback bound directly to scrollY
      const onScrollFallback = () => {
        const maxSpan = Math.max(1, opening.offsetHeight - window.innerHeight);
        const p = clamp(window.scrollY / maxSpan, 0, 1);
        applyCinematicProgress(p);
      };
      window.addEventListener("scroll", onScrollFallback, { passive: true });
      onScrollFallback();
    }

    const scrollCue = $("#scrollCue");
    if (scrollCue) {
      scrollCue.addEventListener("click", () => {
        const targetY = Math.round((opening.offsetHeight - window.innerHeight) * 0.42);
        if (lenisInstance) lenisInstance.scrollTo(targetY);
        else window.scrollTo({ top: targetY, behavior: "smooth" });
      });
    }

    applyCinematicProgress(0);
  }

  /* -------------------------------------------------------------
   * Header Scroll, Progress Bar & Scroll Reveals
   * ----------------------------------------------------------- */
  function initScrollChoreography() {
    const header = $("#siteHeader");
    const progress = $("#scrollProgress");
    const navLinks = $$(".nav-link");

    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle("is-scrolled", y > window.innerHeight * 0.45);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (y / docHeight) * 100) : 0;
      progress.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const sectionIds = navLinks.map((a) => a.dataset.section);
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.dataset.section === entry.target.id);
            });
          }
        });
      },
      { rootMargin: "-42% 0px -48% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.delay || 0);
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    $$(".reveal").forEach((el) => revealObserver.observe(el));

    // Pause CSS animations on offscreen sections
    const offscreenObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
        });
      },
      { rootMargin: "120px 0px 120px 0px" }
    );
    $$(".section, .marquee-band, .cinematic-opening").forEach((el) => {
      el.classList.add("is-offscreen");
      offscreenObserver.observe(el);
    });
  }

  /* -------------------------------------------------------------
   * 6. Six Moods — Collection Filtering & Navigation
   * ----------------------------------------------------------- */
  function initMoods() {
    const filterButtons = $$("#moodFilters .filter-pill");
    const cards = $$("#moodsGrid .mood-card");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        filterButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
        cards.forEach((card) => {
          const match = filter === "all" || card.dataset.category === filter;
          card.classList.toggle("is-filtered-out", !match);
        });
      });
    });

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const idx = Number(card.dataset.look || 0);
        state.lookIndex = clamp(idx, 0, LOOKS.length - 1);
        state.lookSolo = true;
        renderLookStage();
        $("#try-the-look").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* -------------------------------------------------------------
   * 7. Try the Look — Interactive Center-Focus Studio Stage
   * ----------------------------------------------------------- */
  function renderLookStage() {
    const stage = $("#lookStage");
    if (!stage.children.length) {
      LOOKS.forEach((look, idx) => {
        const el = document.createElement("div");
        el.className = "look-model";
        el.setAttribute("role", "option");
        el.innerHTML = `
          <img src="${look.img}" alt="${look.name}" />
          <span class="look-model-badge">${look.badge}</span>
        `;
        el.addEventListener("click", () => {
          if (state.lookSolo && state.lookIndex === idx) {
            state.lookSolo = false;
          } else {
            state.lookIndex = idx;
            state.lookSolo = true;
          }
          renderLookStage();
        });
        stage.appendChild(el);
      });
    }

    const cards = $$(".look-model", stage);
    const total = LOOKS.length;
    const active = state.lookIndex;
    const compact = window.innerWidth < 820;
    const stepX = compact ? 110 : state.lookSolo ? 240 : 158;

    cards.forEach((card, i) => {
      let offset = i - active;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const abs = Math.abs(offset);
      const isActive = offset === 0;
      const translateX = state.lookSolo
        ? isActive
          ? 0
          : offset * stepX + Math.sign(offset) * 160
        : offset * stepX;
      const translateY = isActive ? (state.lookSolo ? -12 : -6) : abs * 12;
      const scale = state.lookSolo
        ? isActive
          ? 1.2
          : 0.72
        : isActive
          ? 1.08
          : Math.max(0.76, 0.94 - abs * 0.06);
      const zIndex = 20 - abs;
      const opacity = state.lookSolo
        ? isActive
          ? 1
          : abs === 1
            ? 0.16
            : 0
        : abs > 3
          ? 0
          : isActive
            ? 1
            : Math.max(0.55, 0.94 - abs * 0.12);

      card.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
      card.style.zIndex = zIndex;
      card.style.opacity = opacity;
      card.style.pointerEvents = opacity === 0 ? "none" : "auto";
      card.style.filter = isActive ? "saturate(1.06)" : `saturate(0.88) brightness(${1 - abs * 0.03})`;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-selected", String(isActive));
    });

    const toggleBtn = $("#lookToggleMode");
    if (toggleBtn) {
      toggleBtn.textContent = state.lookSolo ? "Show Lineup" : "Solo Focus";
    }

    const current = LOOKS[active];
    $("#lookOrigin").textContent = current.origin;
    $("#lookName").textContent = current.name;
    $("#lookDesc").textContent = current.desc;
    $("#lookPrice").textContent = formatINR(current.price);
  }

  function initTryTheLook() {
    renderLookStage();
    $("#lookPrev").addEventListener("click", () => {
      state.lookIndex = (state.lookIndex - 1 + LOOKS.length) % LOOKS.length;
      state.lookSolo = true;
      renderLookStage();
    });
    $("#lookNext").addEventListener("click", () => {
      state.lookIndex = (state.lookIndex + 1) % LOOKS.length;
      state.lookSolo = true;
      renderLookStage();
    });
    $("#lookToggleMode").addEventListener("click", () => {
      state.lookSolo = !state.lookSolo;
      renderLookStage();
    });
    $("#lookInspectBtn").addEventListener("click", () => {
      const look = LOOKS[state.lookIndex];
      openProductModal({
        id: look.id,
        name: look.name,
        meta: look.origin,
        desc: look.desc,
        price: look.price,
        img: look.img,
      });
    });
    $("#lookAddBag").addEventListener("click", () => {
      const look = LOOKS[state.lookIndex];
      addToBag({ id: look.id, name: look.name, meta: look.origin, price: look.price, img: look.img });
    });
    window.addEventListener("resize", renderLookStage);
  }

  /* -------------------------------------------------------------
   * 8. Pick a Silk — Tilted Saturated Card Deck (Continuous Glide)
   * ----------------------------------------------------------- */
  function initPickASilk() {
    const track = $("#silkDeckTrack");
    const viewport = $("#silkDeckViewport");

    const deckItems = [...PICK_SILKS, ...PICK_SILKS];
    deckItems.forEach((silk) => {
      const card = document.createElement("article");
      card.className = "silk-card";
      card.style.background = `linear-gradient(160deg, ${silk.color} 0%, ${silk.color}dd 100%)`;
      card.style.setProperty("--tilt", `${silk.tilt}deg`);
      card.innerHTML = `
        <div class="silk-card-head">
          <h3 class="silk-card-title">${silk.title}</h3>
          <span class="silk-card-sub">${silk.sub}</span>
        </div>
        <div class="silk-card-media">
          <img src="${silk.img}" alt="${silk.title}" loading="lazy" />
          <span class="silk-card-price">${formatINR(silk.price)}</span>
        </div>
      `;
      card.addEventListener("click", () => {
        openProductModal({
          id: silk.id,
          name: silk.title,
          meta: silk.sub,
          desc: `Handloom ${silk.sub.toLowerCase()} edition woven in pure mulberry silk and antique zari.`,
          price: silk.price,
          img: silk.img,
        });
      });
      track.appendChild(card);
    });

    $("#silkPrev").addEventListener("click", () => {
      viewport.scrollBy({ left: -320, behavior: "smooth" });
    });

    $("#silkNext").addEventListener("click", () => {
      viewport.scrollBy({ left: 320, behavior: "smooth" });
    });

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    viewport.addEventListener("mousedown", (e) => {
      isDown = true;
      viewport.classList.add("is-dragging");
      startX = e.pageX - viewport.offsetLeft;
      scrollLeft = viewport.scrollLeft;
    });

    window.addEventListener("mouseup", () => {
      isDown = false;
      viewport.classList.remove("is-dragging");
    });

    viewport.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - viewport.offsetLeft;
      viewport.scrollLeft = scrollLeft - (x - startX) * 1.4;
    });
  }

  /* -------------------------------------------------------------
   * 9. Every silk, on the rack — SVG Garments + Pendulum Physics
   * ----------------------------------------------------------- */
  function buildGarmentSVG(item, category) {
    const uid = item.id;
    if (category === "sarees") {
      return `
        <svg viewBox="0 0 220 310" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="silk-${uid}" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="${item.body}" />
              <stop offset="55%" stop-color="${item.body}" stop-opacity="0.92" />
              <stop offset="100%" stop-color="${item.border}" />
            </linearGradient>
            <linearGradient id="zari-${uid}" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="${item.accent}" />
              <stop offset="50%" stop-color="#FFF2BD" />
              <stop offset="100%" stop-color="${item.accent}" />
            </linearGradient>
          </defs>
          <path d="M110 4C116 4 120 9 120 14C120 19 114 22 110 24V34" stroke="#B68B44" stroke-width="4" stroke-linecap="round"/>
          <path d="M110 34L36 68C32 70 33 76 38 76H182C187 76 188 70 184 68L110 34Z" fill="#7D522D" stroke="#4F3118" stroke-width="2"/>
          <path d="M52 68H168L174 274C174 279 170 284 164 284H56C50 284 46 279 46 274L52 68Z" fill="url(#silk-${uid})"/>
          <path d="M84 68L78 284" stroke="rgba(255,255,255,0.18)" stroke-width="3"/>
          <path d="M110 68V284" stroke="rgba(0,0,0,0.16)" stroke-width="4"/>
          <path d="M138 68L142 284" stroke="rgba(255,255,255,0.14)" stroke-width="3"/>
          <rect x="49" y="138" width="122" height="10" fill="${item.border}" opacity="0.88"/>
          <rect x="47" y="232" width="126" height="32" fill="${item.border}"/>
          <rect x="47" y="236" width="126" height="5" fill="url(#zari-${uid})"/>
          <rect x="47" y="246" width="126" height="12" fill="url(#zari-${uid})" opacity="0.88"/>
          <g stroke="${item.accent}" stroke-width="2.2" stroke-linecap="round">
            <line x1="64" y1="284" x2="64" y2="298"/>
            <line x1="80" y1="284" x2="80" y2="298"/>
            <line x1="96" y1="284" x2="96" y2="298"/>
            <line x1="112" y1="284" x2="112" y2="298"/>
            <line x1="128" y1="284" x2="128" y2="298"/>
            <line x1="144" y1="284" x2="144" y2="298"/>
            <line x1="158" y1="284" x2="158" y2="298"/>
          </g>
        </svg>
      `;
    }

    return `
      <svg viewBox="0 0 220 270" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="blouse-${uid}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${item.body}" />
            <stop offset="100%" stop-color="${item.border}" />
          </linearGradient>
        </defs>
        <path d="M110 4C116 4 120 9 120 14C120 19 114 22 110 24V34" stroke="#B68B44" stroke-width="4" stroke-linecap="round"/>
        <path d="M110 34L44 64C40 66 42 71 47 71H173C178 71 180 66 176 64L110 34Z" fill="#7D522D" stroke="#4F3118" stroke-width="2"/>
        <path d="M62 64L22 128L48 144L68 112L66 208H154L152 112L172 144L198 128L158 64H132C128 84 120 94 110 94C100 94 92 84 88 64H62Z" fill="url(#blouse-${uid})"/>
        <path d="M88 64C92 86 100 96 110 96C120 96 128 86 132 64" stroke="${item.accent}" stroke-width="5" stroke-linecap="round"/>
        <path d="M24 124L49 140" stroke="${item.accent}" stroke-width="6"/>
        <path d="M196 124L171 140" stroke="${item.accent}" stroke-width="6"/>
        <rect x="66" y="196" width="88" height="10" fill="${item.accent}" opacity="0.9"/>
      </svg>
    `;
  }

  function renderRack(triggerSwing = false) {
    const list = RACK_ITEMS[state.rackCategory];
    const track = $("#rackTrack");
    track.innerHTML = "";

    const compact = window.innerWidth < 760;
    const stepX = compact ? 120 : state.rackSpread ? 168 : 210;

    list.forEach((item, idx) => {
      let offset = idx - state.rackIndex;
      const total = list.length;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const abs = Math.abs(offset);
      const isActive = offset === 0;

      const el = document.createElement("div");
      const swingClass = state.rackSpread
        ? " is-breezing"
        : isActive && triggerSwing
          ? " is-swinging"
          : " is-breezing";
      el.className = "hanger-item" + swingClass;
      el.style.setProperty("--sway-delay", `${idx * 260}ms`);
      el.innerHTML = `<div class="hanger-pivot">${buildGarmentSVG(item, state.rackCategory)}</div>`;

      const translateX = offset * stepX;
      const scale = state.rackSpread ? (isActive ? 0.96 : 0.88) : isActive ? 1.18 : Math.max(0.72, 0.86 - abs * 0.08);
      const opacity = state.rackSpread ? (abs > 3 ? 0 : 0.96) : abs > 2 ? 0 : isActive ? 1 : 0.65 - abs * 0.16;

      el.style.transform = `translate3d(${translateX}px, 0, 0) scale(${scale})`;
      el.style.zIndex = 20 - abs;
      el.style.opacity = opacity;
      el.style.filter = isActive || state.rackSpread ? "none" : "saturate(0.82)";

      el.addEventListener("click", () => {
        if (state.rackIndex === idx && !state.rackSpread) {
          state.rackSpread = true;
        } else {
          state.rackIndex = idx;
          state.rackSpread = false;
        }
        renderRack(true);
      });

      track.appendChild(el);
    });

    const modeBtn = $("#rackModeBtn");
    if (modeBtn) {
      modeBtn.textContent = state.rackSpread ? "Solo Focus" : "Rack Spread";
    }

    const current = list[state.rackIndex];
    $("#rackWeave").textContent = current.weave;
    $("#rackTitle").textContent = current.title;
    $("#rackPrice").textContent = formatINR(current.price);
  }

  function initRack() {
    renderRack(true);

    $$(".rack-tab[data-category]").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".rack-tab[data-category]").forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        state.rackCategory = tab.dataset.category;
        state.rackIndex = 1;
        renderRack(true);
      });
    });

    $("#rackModeBtn").addEventListener("click", () => {
      state.rackSpread = !state.rackSpread;
      renderRack(true);
    });

    $("#rackPrev").addEventListener("click", () => {
      const len = RACK_ITEMS[state.rackCategory].length;
      state.rackIndex = (state.rackIndex - 1 + len) % len;
      renderRack(true);
    });

    $("#rackNext").addEventListener("click", () => {
      const len = RACK_ITEMS[state.rackCategory].length;
      state.rackIndex = (state.rackIndex + 1) % len;
      renderRack(true);
    });

    $("#rackAddBtn").addEventListener("click", () => {
      const current = RACK_ITEMS[state.rackCategory][state.rackIndex];
      addToBag({
        id: current.id,
        name: current.title,
        meta: current.weave,
        price: current.price,
        img: state.rackCategory === "sarees" ? "assets/hero-weave.jpg" : "assets/mood-magenta.jpg",
      });
    });
  }

  /* -------------------------------------------------------------
   * 10. Devotion Grid (with Wishlist & Quick View) & Feel the Drape
   * ----------------------------------------------------------- */
  function initDevotionAndDrape() {
    const grid = $("#devotionGrid");
    DEVOTION_PRODUCTS.forEach((prod, idx) => {
      const card = document.createElement("article");
      card.className = "product-card reveal";
      card.dataset.delay = String(idx * 70);
      card.innerHTML = `
        <div class="product-card-img">
          <img src="${prod.img}" alt="${prod.name}" loading="lazy" />
          <button class="product-wishlist-btn" data-wid="${prod.id}" aria-label="Save to wishlist">&#9825;</button>
          <button class="product-quick-add">+ Quick Add</button>
        </div>
        <div class="product-card-body">
          <span class="product-weave">${prod.weave}</span>
          <h3>${prod.name}</h3>
          <span class="product-price">${formatINR(prod.price)}</span>
        </div>
      `;
      $(".product-quick-add", card).addEventListener("click", (e) => {
        e.stopPropagation();
        addToBag({ id: prod.id, name: prod.name, meta: prod.weave, price: prod.price, img: prod.img });
      });
      $(".product-wishlist-btn", card).addEventListener("click", (e) => {
        e.stopPropagation();
        toggleWishlist({ id: prod.id, name: prod.name, meta: prod.weave, price: prod.price, img: prod.img });
      });
      card.addEventListener("click", () => {
        openProductModal({ id: prod.id, name: prod.name, meta: prod.weave, desc: prod.desc, price: prod.price, img: prod.img });
      });
      grid.appendChild(card);
    });

    const thumbGrid = $("#drapeThumbGrid");
    const renderActiveDrape = () => {
      const active = DRAPE_STUDIES[state.activeDrapeIndex];
      $("#drapePreviewImg").src = active.img;
      $("#drapeBadge").textContent = active.badge;
      $("#drapeTitle").textContent = active.title;
      $("#drapeExploreBtn").textContent = `Add This Look — ${formatINR(active.price)}`;
      $$(".drape-thumb", thumbGrid).forEach((btn, i) => {
        btn.classList.toggle("is-active", i === state.activeDrapeIndex);
      });
    };

    DRAPE_STUDIES.forEach((study, idx) => {
      const btn = document.createElement("button");
      btn.className = "drape-thumb" + (idx === 0 ? " is-active" : "");
      btn.innerHTML = `<img src="${study.img}" alt="${study.label}" loading="lazy" /><span>${study.label}</span>`;
      btn.addEventListener("click", () => {
        state.activeDrapeIndex = idx;
        renderActiveDrape();
      });
      thumbGrid.appendChild(btn);
    });

    const devotionSection = $("#devotion");
    let drapeAuto = setInterval(() => {
      if (document.hidden || (devotionSection && devotionSection.classList.contains("is-offscreen"))) return;
      state.activeDrapeIndex = (state.activeDrapeIndex + 1) % DRAPE_STUDIES.length;
      renderActiveDrape();
    }, 3400);

    const drapeSplitEl = $(".drape-split");
    drapeSplitEl.addEventListener("mouseenter", () => clearInterval(drapeAuto));
    drapeSplitEl.addEventListener("mouseleave", () => {
      clearInterval(drapeAuto);
      drapeAuto = setInterval(() => {
        if (document.hidden || (devotionSection && devotionSection.classList.contains("is-offscreen"))) return;
        state.activeDrapeIndex = (state.activeDrapeIndex + 1) % DRAPE_STUDIES.length;
        renderActiveDrape();
      }, 3400);
    });

    $("#drapeExploreBtn").addEventListener("click", () => {
      const active = DRAPE_STUDIES[state.activeDrapeIndex];
      addToBag({ id: active.id, name: active.title, meta: active.badge, price: active.price, img: active.img });
    });

    renderActiveDrape();
  }

  /* -------------------------------------------------------------
   * 11. The Bridal Collection
   * ----------------------------------------------------------- */
  function initBridal() {
    const container = $("#bridalArches");
    BRIDAL_ARCHES.forEach((item) => {
      const card = document.createElement("article");
      card.className = `bridal-arch ${item.size}`.trim();
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        <div class="bridal-arch-overlay">
          <h3>${item.name}</h3>
          <span>${formatINR(item.price)}</span>
        </div>
      `;
      card.addEventListener("click", () => {
        openProductModal({
          id: item.id,
          name: item.name,
          meta: "BRIDAL ARCHIVE",
          desc: "Heirloom bridal Kanjivaram crafted with pure korvai zari for sacred ceremonies.",
          price: item.price,
          img: item.img,
        });
      });
      container.appendChild(card);
    });
  }

  /* -------------------------------------------------------------
   * 12. Silk, in motion — Inline Center Spotlight + Modal
   * ----------------------------------------------------------- */
  function initReels() {
    const rail = $("#reelsRail");
    const spotlight = $("#reelSpotlight");
    const player = $("#reelActivePlayer");
    let progressRaf = null;
    let progressVal = 0;
    let inlineProgressVal = 0;

    const layoutInlineReels = () => {
      const cards = $$(".reel-card", rail);
      const total = REELS.length;
      const active = state.activeReelIndex;
      const compact = window.innerWidth < 820;
      const stepX = compact ? 155 : 230;

      cards.forEach((card, i) => {
        let offset = i - active;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;
        const abs = Math.abs(offset);
        const isCenter = offset === 0;

        card.style.transform = `translate3d(${offset * stepX}px, ${abs * 10}px, 0) scale(${
          isCenter ? 1.08 : Math.max(0.76, 0.9 - abs * 0.08)
        })`;
        card.style.zIndex = 20 - abs;
        card.style.opacity = abs > 2 ? 0 : isCenter ? 1 : Math.max(0.45, 0.78 - abs * 0.18);
        card.classList.toggle("is-center", isCenter);
      });
    };

    const updateSpotlight = () => {
      const len = REELS.length;
      const cur = REELS[state.activeReelIndex];
      const prev = REELS[(state.activeReelIndex - 1 + len) % len];
      const next = REELS[(state.activeReelIndex + 1) % len];

      $("#reelActiveImg").src = cur.img;
      $("#reelActiveTag").textContent = cur.tag;
      $("#reelActiveTitle").textContent = cur.title;
      $("#reelActiveDesc").textContent = cur.desc;
      $("#reelActivePrice").textContent = formatINR(cur.price);

      $("#reelPrevImg").src = prev.img;
      $("#reelPrevLabel").textContent = prev.title;
      $("#reelNextImg").src = next.img;
      $("#reelNextLabel").textContent = next.title;

      progressVal = 0;
    };

    let reelsVisible = false;
    const ensureProgressTick = () => {
      const shouldRun = !document.hidden && (spotlight.classList.contains("is-open") || reelsVisible);
      if (shouldRun && !progressRaf) {
        progressRaf = requestAnimationFrame(tickProgress);
      }
    };

    const tickProgress = () => {
      progressRaf = null;
      const isModalOpen = spotlight.classList.contains("is-open");
      if (document.hidden || (!isModalOpen && !reelsVisible)) return;

      if (isModalOpen) {
        if (!state.reelPaused) {
          progressVal += 0.28;
          if (progressVal >= 100) {
            state.activeReelIndex = (state.activeReelIndex + 1) % REELS.length;
            updateSpotlight();
            layoutInlineReels();
          }
          $("#reelProgressFill").style.width = `${progressVal}%`;
        }
      } else {
        inlineProgressVal += 0.26;
        if (inlineProgressVal >= 100) {
          inlineProgressVal = 0;
          state.activeReelIndex = (state.activeReelIndex + 1) % REELS.length;
          layoutInlineReels();
        }
        const activeCard = $$(".reel-card", rail)[state.activeReelIndex];
        const bar = activeCard && $(".reel-inline-progress > span", activeCard);
        if (bar) bar.style.width = `${inlineProgressVal}%`;
      }
      progressRaf = requestAnimationFrame(tickProgress);
    };

    const reelsSection = $("#reels");
    if (reelsSection) {
      new IntersectionObserver(
        (entries) => {
          reelsVisible = entries[0].isIntersecting;
          ensureProgressTick();
        },
        { rootMargin: "100px 0px" }
      ).observe(reelsSection);
    }
    document.addEventListener("visibilitychange", ensureProgressTick);

    const openSpotlight = (index) => {
      state.activeReelIndex = index;
      state.reelPaused = false;
      player.classList.remove("is-paused");
      $("#reelPauseBtn").textContent = "❚❚";
      layoutInlineReels();
      updateSpotlight();
      spotlight.classList.add("is-open");
      spotlight.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      ensureProgressTick();
    };

    const closeSpotlight = () => {
      spotlight.classList.remove("is-open");
      spotlight.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    REELS.forEach((reel, idx) => {
      const card = document.createElement("article");
      card.className = "reel-card";
      card.innerHTML = `
        <div class="reel-inline-progress"><span></span></div>
        <img src="${reel.img}" alt="${reel.title}" loading="lazy" />
        <span class="reel-play-pill" title="Open spotlight">&#9654;</span>
        <div class="reel-card-overlay">
          <span>${reel.tag}</span>
          <h3>${reel.title}</h3>
          <div class="reel-card-cta">
            <span class="reel-card-price">${formatINR(reel.price)}</span>
            <button class="btn btn-primary btn-sm reel-inline-add">Add to Bag</button>
          </div>
        </div>
      `;
      $(".reel-inline-add", card).addEventListener("click", (e) => {
        e.stopPropagation();
        addToBag({ id: reel.id, name: reel.title, meta: reel.tag, price: reel.price, img: reel.img });
      });
      $(".reel-play-pill", card).addEventListener("click", (e) => {
        e.stopPropagation();
        openSpotlight(idx);
      });
      card.addEventListener("click", () => {
        if (state.activeReelIndex === idx) {
          openSpotlight(idx);
        } else {
          state.activeReelIndex = idx;
          inlineProgressVal = 0;
          layoutInlineReels();
        }
      });
      rail.appendChild(card);
    });

    $("#reelInlinePrev").addEventListener("click", () => {
      state.activeReelIndex = (state.activeReelIndex - 1 + REELS.length) % REELS.length;
      inlineProgressVal = 0;
      layoutInlineReels();
    });

    $("#reelInlineNext").addEventListener("click", () => {
      state.activeReelIndex = (state.activeReelIndex + 1) % REELS.length;
      inlineProgressVal = 0;
      layoutInlineReels();
    });

    window.addEventListener("resize", layoutInlineReels);
    layoutInlineReels();

    $("#reelCloseBtn").addEventListener("click", closeSpotlight);
    $("#reelBackdrop").addEventListener("click", closeSpotlight);
    $("#reelPrevCard").addEventListener("click", () => {
      state.activeReelIndex = (state.activeReelIndex - 1 + REELS.length) % REELS.length;
      updateSpotlight();
    });
    $("#reelNextCard").addEventListener("click", () => {
      state.activeReelIndex = (state.activeReelIndex + 1) % REELS.length;
      updateSpotlight();
    });
    $("#reelPauseBtn").addEventListener("click", () => {
      state.reelPaused = !state.reelPaused;
      player.classList.toggle("is-paused", state.reelPaused);
      $("#reelPauseBtn").textContent = state.reelPaused ? "▶" : "❚❚";
    });
    $("#reelAddBagBtn").addEventListener("click", () => {
      const cur = REELS[state.activeReelIndex];
      addToBag({ id: cur.id, name: cur.title, meta: cur.tag, price: cur.price, img: cur.img });
    });

    window.addEventListener("keydown", (e) => {
      if (!spotlight.classList.contains("is-open")) return;
      if (e.key === "Escape") closeSpotlight();
      if (e.key === "ArrowRight") {
        state.activeReelIndex = (state.activeReelIndex + 1) % REELS.length;
        updateSpotlight();
      }
      if (e.key === "ArrowLeft") {
        state.activeReelIndex = (state.activeReelIndex - 1 + REELS.length) % REELS.length;
        updateSpotlight();
      }
    });

    ensureProgressTick();
  }

  /* -------------------------------------------------------------
   * 13. Three silks, one weave — Volumetric Braided Ribbon Canvas
   * ----------------------------------------------------------- */
  function initWeaveBuilder() {
    const canvas = $("#weaveCanvas");
    const ctx = canvas.getContext("2d");
    const swatchesWrap = $("#weaveSwatches");
    const selectedList = $("#weaveSelectedList");
    const totalPriceEl = $("#weaveTotalPrice");

    let displayedPrice = 63810;
    const strandProgress = new Map();

    const getSelectedObjects = () =>
      state.selectedSwatches.map((id) => WEAVE_SWATCHES.find((s) => s.id === id)).filter(Boolean);

    const animatePriceTo = (target) => {
      const start = displayedPrice;
      const startTime = performance.now();
      const duration = 420;
      const step = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        displayedPrice = Math.round(start + (target - start) * eased);
        totalPriceEl.textContent = formatINR(displayedPrice);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const renderSelections = () => {
      const chosen = getSelectedObjects();
      selectedList.innerHTML = "";
      chosen.forEach((s, i) => {
        const chip = document.createElement("span");
        chip.className = "weave-chip";
        chip.innerHTML = `<i style="background:${s.color}"></i> ${i + 1}. ${s.name}`;
        selectedList.appendChild(chip);
      });

      $$(".weave-swatch", swatchesWrap).forEach((btn) => {
        btn.classList.toggle("is-selected", state.selectedSwatches.includes(btn.dataset.id));
      });

      animatePriceTo(chosen.reduce((sum, s) => sum + s.price, 0));
    };

    WEAVE_SWATCHES.forEach((swatch) => {
      const btn = document.createElement("button");
      btn.className = "weave-swatch";
      btn.dataset.id = swatch.id;
      btn.innerHTML = `
        <span class="swatch-dot" style="background:${swatch.color}"></span>
        <span class="swatch-text">
          <strong>${swatch.name}</strong>
          <span>${swatch.origin} &bull; ${formatINR(swatch.price)}</span>
        </span>
      `;
      btn.addEventListener("click", () => {
        const idx = state.selectedSwatches.indexOf(swatch.id);
        if (idx >= 0) {
          if (state.selectedSwatches.length > 1) {
            state.selectedSwatches.splice(idx, 1);
          } else {
            showToast("At least 1 silk thread is needed on the loom.");
          }
        } else {
          if (state.selectedSwatches.length >= 3) {
            state.selectedSwatches.shift();
          }
          strandProgress.delete(swatch.id);
          state.selectedSwatches.push(swatch.id);
        }
        renderSelections();
      });
      swatchesWrap.appendChild(btn);
    });

    $("#commissionWeaveBtn").addEventListener("click", () => {
      const chosen = getSelectedObjects();
      const names = chosen.map((c) => c.name.split(" ")[0]).join(" × ");
      const total = chosen.reduce((sum, c) => sum + c.price, 0);
      addToBag({
        id: `custom-${state.selectedSwatches.join("-")}`,
        name: `Bespoke Loom (${names})`,
        meta: "CUSTOM 3-SILK WEAVE",
        price: total,
        img: "assets/hero-weave.jpg",
      });
    });

    renderSelections();

    let cachedGlow = null;
    let weaveVisible = false;
    let weaveRafId = null;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      cachedGlow = ctx.createRadialGradient(w * 0.5, h * 0.5, 10, w * 0.5, h * 0.5, Math.max(40, w * 0.42));
      cachedGlow.addColorStop(0, "rgba(228, 186, 100, 0.22)");
      cachedGlow.addColorStop(1, "rgba(228, 186, 100, 0)");
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    if ("ResizeObserver" in window && canvas.parentElement) {
      new ResizeObserver(resizeCanvas).observe(canvas.parentElement);
    }

    let t = 0;
    const drawWeave = () => {
      weaveRafId = null;
      if (document.hidden || !weaveVisible) return;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const chosen = getSelectedObjects();
      const layers = chosen.length ? chosen : [WEAVE_SWATCHES[0]];

      if (cachedGlow) {
        ctx.fillStyle = cachedGlow;
        ctx.fillRect(0, 0, w, h);
      }

      layers.forEach((silk) => {
        const cur = strandProgress.get(silk.id) ?? 0.08;
        strandProgress.set(silk.id, Math.min(1, cur + (1 - cur) * 0.085 + 0.01));
      });

      const steps = 56;
      const ribbonOrder = [];
      for (let idx = 0; idx < layers.length; idx++) {
        const silk = layers[idx];
        const prog = strandProgress.get(silk.id) ?? 1;
        const phase = idx * ((Math.PI * 2) / Math.max(1, layers.length));
        const depth = Math.cos(t * 0.032 + phase);
        ribbonOrder.push({ silk, idx, prog, phase, depth });
      }
      ribbonOrder.sort((a, b) => a.depth - b.depth);

      ribbonOrder.forEach(({ silk, idx, prog, phase }) => {
        const maxX = -30 + (w + 60) * prog;
        const points = [];

        for (let i = 0; i <= steps; i++) {
          const norm = i / steps;
          const x = -24 + (w + 48) * norm;
          if (x > maxX) break;

          const distFromCenter = Math.abs(norm - 0.5) * 2;
          const braidPinch = 0.42 + 0.58 * distFromCenter;
          const freq = 7.4;
          const primaryWave = Math.sin(norm * freq + t * 0.035 + phase);
          const harmonic = Math.cos(norm * 3.1 - t * 0.02 + idx * 0.9) * 14;
          const y = h * 0.5 + primaryWave * 56 * braidPinch + harmonic;
          points.push({ x, y });
        }

        if (points.length < 2) return;

        ctx.beginPath();
        points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y + 8) : ctx.lineTo(p.x, p.y + 8)));
        ctx.strokeStyle = "rgba(26, 14, 12, 0.14)";
        ctx.lineWidth = 26;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        ctx.beginPath();
        points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
        ctx.strokeStyle = silk.color;
        ctx.lineWidth = 24;
        ctx.globalAlpha = 0.88;
        ctx.stroke();

        ctx.beginPath();
        points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y - 2) : ctx.lineTo(p.x, p.y - 2)));
        ctx.strokeStyle = "rgba(255, 255, 255, 0.42)";
        ctx.lineWidth = 7;
        ctx.globalAlpha = 0.9;
        ctx.stroke();

        ctx.beginPath();
        points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y - 10) : ctx.lineTo(p.x, p.y - 10)));
        ctx.strokeStyle = "#F4CF74";
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.85;
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      t += 1;
      weaveRafId = requestAnimationFrame(drawWeave);
    };

    const ensureWeaveLoop = () => {
      if (!document.hidden && weaveVisible && !weaveRafId) {
        weaveRafId = requestAnimationFrame(drawWeave);
      }
    };

    const weaveSection = $("#bespoke-weave");
    if (weaveSection) {
      new IntersectionObserver(
        (entries) => {
          weaveVisible = entries[0].isIntersecting;
          ensureWeaveLoop();
        },
        { rootMargin: "120px 0px" }
      ).observe(weaveSection);
    }
    document.addEventListener("visibilitychange", ensureWeaveLoop);
    ensureWeaveLoop();
  }

  /* -------------------------------------------------------------
   * Product Quick View, Wishlist, Shopping Bag, Mobile Nav & Search
   * ----------------------------------------------------------- */
  function openProductModal(product) {
    state.activeProduct = product;
    state.selectedVariant = "Antique Temple Zari";
    $("#pdImg").src = product.img;
    $("#pdWeave").textContent = product.meta || "HANDLOOM SILK";
    $("#pdName").textContent = product.name;
    $("#pdDesc").textContent = product.desc || "Handwoven mulberry silk with pure zari borders.";
    $("#pdPrice").textContent = formatINR(product.price);
    $$("#pdVariants .filter-pill").forEach((b, i) => b.classList.toggle("is-active", i === 0));
    $("#productModal").classList.add("is-open");
    $("#productModal").setAttribute("aria-hidden", "false");
  }

  function closeProductModal() {
    $("#productModal").classList.remove("is-open");
    $("#productModal").setAttribute("aria-hidden", "true");
  }

  function toggleWishlist(item) {
    const exists = state.wishlist.some((w) => w.id === item.id);
    if (exists) {
      state.wishlist = state.wishlist.filter((w) => w.id !== item.id);
      showToast(`Removed "${item.name}" from wishlist`);
    } else {
      state.wishlist.push(item);
      showToast(`Saved "${item.name}" to wishlist`);
    }
    renderWishlist();
  }

  function renderWishlist() {
    $("#wishlistCount").textContent = state.wishlist.length;
    $$(".product-wishlist-btn").forEach((btn) => {
      const saved = state.wishlist.some((w) => w.id === btn.dataset.wid);
      btn.classList.toggle("is-saved", saved);
      btn.innerHTML = saved ? "&#9829;" : "&#9825;";
    });

    const container = $("#wishlistItems");
    container.innerHTML = "";
    if (!state.wishlist.length) {
      container.innerHTML = `<div class="bag-empty"><p>No saved silks yet.</p><p>Tap the heart on any saree to bookmark it.</p></div>`;
      return;
    }

    state.wishlist.forEach((item) => {
      const row = document.createElement("div");
      row.className = "bag-item";
      row.innerHTML = `
        <div class="bag-item-thumb"><img src="${item.img}" alt="${item.name}" /></div>
        <div class="bag-item-info">
          <h4>${item.name}</h4>
          <span class="bag-item-meta">${item.meta || "HANDLOOM SILK"} &bull; ${formatINR(item.price)}</span>
          <div class="bag-item-controls">
            <button class="btn btn-primary btn-sm move-bag">Move to Bag</button>
            <button class="btn btn-outline-dark btn-sm remove-wl">Remove</button>
          </div>
        </div>
      `;
      $(".move-bag", row).addEventListener("click", () => {
        addToBag(item);
      });
      $(".remove-wl", row).addEventListener("click", () => {
        toggleWishlist(item);
      });
      container.appendChild(row);
    });
  }

  function addToBag(item) {
    const existing = state.bag.find((b) => b.id === item.id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.bag.push({ ...item, qty: 1 });
    }
    renderBag();
    const badge = $("#bagCount");
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
    showToast(`Added "${item.name}" to your silk bag`);
  }

  function renderBag() {
    const count = state.bag.reduce((sum, i) => sum + i.qty, 0);
    $("#bagCount").textContent = count;

    const list = $("#bagItems");
    list.innerHTML = "";

    if (!state.bag.length) {
      list.innerHTML = `<div class="bag-empty"><p>Your silk bag is currently empty.</p><p>Explore a look, tilted card, or rack weave to begin.</p></div>`;
      $("#bagSubtotal").textContent = "₹0";
      return;
    }

    let subtotal = 0;
    state.bag.forEach((item) => {
      subtotal += item.price * item.qty;
      const row = document.createElement("div");
      row.className = "bag-item";
      row.innerHTML = `
        <div class="bag-item-thumb"><img src="${item.img}" alt="${item.name}" /></div>
        <div class="bag-item-info">
          <h4>${item.name}</h4>
          <span class="bag-item-meta">${item.meta || item.weave || "HANDLOOM SILK"}</span>
          <div class="bag-item-controls">
            <div class="qty-pill">
              <button class="dec" aria-label="Decrease quantity">-</button>
              <span>${item.qty}</span>
              <button class="inc" aria-label="Increase quantity">+</button>
            </div>
            <strong>${formatINR(item.price * item.qty)}</strong>
          </div>
        </div>
      `;
      $(".dec", row).addEventListener("click", () => {
        item.qty -= 1;
        if (item.qty <= 0) state.bag = state.bag.filter((b) => b.id !== item.id);
        renderBag();
      });
      $(".inc", row).addEventListener("click", () => {
        item.qty += 1;
        renderBag();
      });
      list.appendChild(row);
    });

    $("#bagSubtotal").textContent = formatINR(subtotal);
  }

  function initStorefrontControls() {
    // Product Detail Modal
    $$("#pdVariants .filter-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("#pdVariants .filter-pill").forEach((b) => b.classList.toggle("is-active", b === btn));
        state.selectedVariant = btn.dataset.variant;
      });
    });
    $("#closeProductModal").addEventListener("click", closeProductModal);
    $("#productBackdrop").addEventListener("click", closeProductModal);
    $("#pdAddBag").addEventListener("click", () => {
      if (!state.activeProduct) return;
      addToBag({
        ...state.activeProduct,
        id: `${state.activeProduct.id}-${state.selectedVariant}`,
        meta: `${state.activeProduct.meta} · ${state.selectedVariant}`,
      });
      closeProductModal();
    });
    $("#pdWishlistBtn").addEventListener("click", () => {
      if (state.activeProduct) toggleWishlist(state.activeProduct);
    });

    // Wishlist Drawer
    const wlDrawer = $("#wishlistDrawer");
    $("#openWishlistBtn").addEventListener("click", () => {
      wlDrawer.classList.add("is-open");
      wlDrawer.setAttribute("aria-hidden", "false");
    });
    const closeWl = () => {
      wlDrawer.classList.remove("is-open");
      wlDrawer.setAttribute("aria-hidden", "true");
    };
    $("#closeWishlistBtn").addEventListener("click", closeWl);
    $("#wishlistBackdrop").addEventListener("click", closeWl);
    renderWishlist();

    // Bag Drawer
    const drawer = $("#bagDrawer");
    const openBag = () => {
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
    };
    const closeBag = () => {
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
    };

    $("#openBagBtn").addEventListener("click", openBag);
    $("#closeBagBtn").addEventListener("click", closeBag);
    $("#bagBackdrop").addEventListener("click", closeBag);
    $("#checkoutBtn").addEventListener("click", () => {
      if (!state.bag.length) {
        showToast("Add a silk weave to your bag before requesting a reservation.");
        return;
      }
      showToast("Reservation inquiry logged (preview mode — no live payment charged).");
      closeBag();
    });
    renderBag();

    // Mobile Nav Drawer
    const mobileDrawer = $("#mobileDrawer");
    const closeMobile = () => {
      mobileDrawer.classList.remove("is-open");
      mobileDrawer.setAttribute("aria-hidden", "true");
    };
    $("#mobileMenuBtn").addEventListener("click", () => {
      mobileDrawer.classList.add("is-open");
      mobileDrawer.setAttribute("aria-hidden", "false");
    });
    $("#closeMobileBtn").addEventListener("click", closeMobile);
    $("#mobileBackdrop").addEventListener("click", closeMobile);
    $$(".mobile-links a").forEach((a) => a.addEventListener("click", closeMobile));

    // Search Modal
    const allCatalog = [
      ...LOOKS.map((x) => ({ id: x.id, name: x.name, meta: x.origin, price: x.price, img: x.img })),
      ...PICK_SILKS.map((x) => ({ id: x.id, name: x.title, meta: x.sub, price: x.price, img: x.img })),
      ...DEVOTION_PRODUCTS.map((x) => ({ id: x.id, name: x.name, meta: x.weave, price: x.price, img: x.img })),
      ...BRIDAL_ARCHES.map((x) => ({ id: x.id, name: x.name, meta: "BRIDAL ARCHIVE", price: x.price, img: x.img })),
    ];

    const searchModal = $("#searchModal");
    const searchInput = $("#searchInput");
    const searchResults = $("#searchResults");

    const renderSearch = (q) => {
      const query = q.trim().toLowerCase();
      const hits = allCatalog.filter(
        (item) => item.name.toLowerCase().includes(query) || item.meta.toLowerCase().includes(query)
      );
      searchResults.innerHTML = "";
      hits.slice(0, 6).forEach((item) => {
        const row = document.createElement("div");
        row.className = "search-result-item";
        row.innerHTML = `
          <div>
            <strong>${item.name}</strong>
            <div class="bag-item-meta">${item.meta} &bull; ${formatINR(item.price)}</div>
          </div>
          <button class="btn btn-primary btn-sm">Add</button>
        `;
        $("button", row).addEventListener("click", () => {
          addToBag(item);
          searchModal.classList.remove("is-open");
        });
        searchResults.appendChild(row);
      });
    };

    $("#openSearchBtn").addEventListener("click", () => {
      searchModal.classList.add("is-open");
      renderSearch("");
      setTimeout(() => searchInput.focus(), 60);
    });
    const closeSearch = () => searchModal.classList.remove("is-open");
    $("#closeSearchBtn").addEventListener("click", closeSearch);
    $("#searchBackdrop").addEventListener("click", closeSearch);
    searchInput.addEventListener("input", (e) => renderSearch(e.target.value));

    $("#newsletterForm").addEventListener("submit", (e) => {
      e.preventDefault();
      $("#newsletterMsg").textContent = "Welcome to the NOOLAM Loom Journal.";
      e.target.reset();
    });
  }

  /* -------------------------------------------------------------
   * Boot
   * ----------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", async () => {
    initMoods();
    initTryTheLook();
    initPickASilk();
    initRack();
    initDevotionAndDrape();
    initBridal();
    initReels();
    initWeaveBuilder();
    initStorefrontControls();
    initScrollChoreography();

    const webglCtrl = await initWebGLSilkCurtain();
    initCinematicScrollTimeline(webglCtrl);
  });
})();
