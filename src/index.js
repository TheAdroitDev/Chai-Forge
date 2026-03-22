document.addEventListener("DOMContentLoaded", () => {
  processChai();
  initObserver();
});

const config = {
  removeClasses: false,
};

const specials = {
  sandwich: (el) => {
    el.style.borderRadius = "2px";
    el.style.color = palette.red;
    el.style.padding = "6px 10px";
    el.style.background = "#fff7ed";
    el.style.border = "1px solid rgba(0,0,0,0.1)";
  },

  chai: (el) => {
    el.style.background = "#d97706";
    el.style.color = "#fff";
    el.style.padding = "8px 14px";
    el.style.borderRadius = "999px";
  },

  card: (el) => {
    el.style.padding = "16px";
    el.style.borderRadius = "12px";
    el.style.background = "#fff";
    el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
  },

  agent: (el) => {
    applyAgent(el);
  },

  loid: (el) => {
    el.style.background = "linear-gradient(135deg,#0f172a,#1e293b)";
    el.style.color = "#e2e8f0";
    el.style.padding = "18px";
    el.style.borderRadius = "14px";
    el.style.fontFamily = "system-ui, sans-serif";
    el.style.boxShadow = "0 8px 30px rgba(0,0,0,0.35)";
    el.style.border = "1px solid rgba(255,255,255,0.08)";
  },

  mission: (el) => {
    el.style.background = "#020617";
    el.style.color = "#38bdf8";
    el.style.padding = "12px 16px";
    el.style.borderRadius = "10px";
    el.style.border = "1px solid rgba(56,189,248,0.3)";
    el.style.fontFamily = "monospace";
    el.style.letterSpacing = "0.5px";
  },

  stealth: (el) => {
    el.style.background = "#020617";
    el.style.color = "#94a3b8";
    el.style.padding = "10px";
    el.style.borderRadius = "8px";
    el.style.opacity = "0.85";
  },

  intel: (el) => {
    el.style.background = "#111827";
    el.style.color = "#22c55e";
    el.style.padding = "14px";
    el.style.borderRadius = "10px";
    el.style.border = "1px dashed rgba(34,197,94,0.4)";
    el.style.fontFamily = "monospace";
  },

  shadow: (el) => {
    el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)";
    el.style.borderRadius = "16px";
  },

  elite: (el) => {
    el.style.background = "linear-gradient(135deg,#020617,#0f172a)";
    el.style.color = "#f8fafc";
    el.style.padding = "20px";
    el.style.borderRadius = "16px";
    el.style.boxShadow = "0 10px 40px rgba(0,0,0,0.4)";
    el.style.border = "1px solid rgba(255,255,255,0.06)";
    el.style.letterSpacing = "0.4px";
  }
};
  // pattern: chai-{type}-{value}
function processChai() {
  const elements = document.querySelectorAll('[class*="chai-"]');
  elements.forEach(processElement);
}

function processElement(el) {
  const classes = Array.from(el.classList);
  classes.forEach((cls) => {
    if (!cls.startsWith("chai-")) return;
    applyStyle(el, cls);
    if (config.removeClasses) el.classList.remove(cls);
  });
}

function applyStyle(el, cls) {
  const parts = cls.split("-");
  const type = parts[1];
  const value = parts[2];

  if (specials[type]) {
    specials[type](el);
    return;
  }

  switch (type) {
    case "p":
      el.style.padding = px(value);
      break;
    case "m":
      el.style.margin = px(value);
      break;
    case "bg":
      el.style.backgroundColor = resolveColor(value);
      break;
    case "text":
      handleText(el, value);
      break;
    case "rounded":
      el.style.borderRadius = px(value);
      break;
    case "border":
      el.style.border = `${value}px solid rgba(0,0,0,0.2)`;
      break;
    case "flex":
      el.style.display = "flex";
      break;
    case "justify":
      el.style.justifyContent = value;
      break;
    case "items":
      el.style.alignItems = value;
      break;
    case "w":
      el.style.width = px(value);
      break;
    case "h":
      el.style.height = px(value);
      break;
    case "glass":
      applyGlass(el);
      break;
  }
}

function px(value) {
  return isNaN(value) ? value : value + "px";
}

function resolveColor(value) {
  return palette[value] || value;
}

function handleText(el, value) {
  if (["center", "left", "right"].includes(value)) {
    el.style.textAlign = value;
    return;
  }
  if (palette[value]) {
    el.style.color = palette[value];
    return;
  }
  if (!isNaN(value)) {
    el.style.fontSize = value + "px";
  }
}

function applyAgent(el) {
  el.style.backgroundColor = "#0f172a";
  el.style.color = "#f8fafc";
  el.style.borderRadius = "12px";
  el.style.padding = "16px";
  el.style.fontFamily = "system-ui, sans-serif";
  el.style.letterSpacing = "0.3px";
  el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
}

function applyGlass(el) {
  el.style.background = "rgba(255,255,255,0.05)";
  el.style.backdropFilter = "blur(10px)";
  el.style.border = "1px solid rgba(255,255,255,0.1)";
  el.style.borderRadius = "12px";
}

const palette = {
  red: "#ef4444",
  blue: "#3b82f6",
  green: "#22c55e",
  black: "#0f172a",
  white: "#f8fafc",
};

function initObserver() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        if (node.classList?.length) processElement(node);
        node.querySelectorAll?.('[class*="chai-"]').forEach(processElement);
      });
    });
  });


  // manager ji
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

window.ChaiForge = {
  define(name, fn) {
    specials[name] = fn;
  }
};