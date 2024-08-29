import { c as T, u as V, j as c, a as ae, b as ce, d as A, e as C, f as S, g as E, R as Be, h as R, C as B, i as z, k as le, F as De, l as N, m as X, n as Te, o as ze, H as q, P as Y, S as qe, p as ue, q as He, s as Ge, r as Ke, t as de, v as Qe, w as Ze, x as Je, y as We, N as H, z as ee, M as te, A as G, B as K, D as Xe, E as fe, G as J, I as me } from "./index-edb9d9cb.mjs";
function Ye(e, r = []) {
  let t = [];
  function n(o, a) {
    const i = T(a), l = t.length;
    t = [...t, a];
    function u(g) {
      const { scope: h, children: $, ...x } = g, w = (h == null ? void 0 : h[e][l]) || i, F = V(() => x, Object.values(x));
      return /* @__PURE__ */ c.jsx(w.Provider, { value: F, children: $ });
    }
    function b(g, h) {
      const $ = (h == null ? void 0 : h[e][l]) || i, x = ae($);
      if (x)
        return x;
      if (a !== void 0)
        return a;
      throw new Error(`\`${g}\` must be used within \`${o}\``);
    }
    return u.displayName = o + "Provider", [u, b];
  }
  const s = () => {
    const o = t.map((a) => T(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || o;
      return V(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return s.scopeName = e, [n, et(s, ...r)];
}
function et(...e) {
  const r = e[0];
  if (e.length === 1)
    return r;
  const t = () => {
    const n = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(o) {
      const a = n.reduce((i, { useScope: l, scopeName: u }) => {
        const g = l(o)[`__scope${u}`];
        return { ...i, ...g };
      }, {});
      return V(() => ({ [`__scope${r.scopeName}`]: a }), [a]);
    };
  };
  return t.scopeName = r.scopeName, t;
}
var ve = globalThis != null && globalThis.document ? ce : () => {
};
const he = ({ children: e, color: r, className: t, ...n }) => {
  if (!e)
    return null;
  let s = "text-grey-700 dark:text-grey-600";
  switch (r) {
    case "red":
      s = "text-red dark:text-red-500";
      break;
    case "green":
      s = "text-green dark:text-green-500";
      break;
  }
  return t = A(
    "mt-1 inline-block text-xs",
    s,
    t
  ), /* @__PURE__ */ c.jsx("span", { className: t, ...n, children: e });
};
function _() {
  return _ = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, _.apply(this, arguments);
}
function D(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), t === !1 || !s.defaultPrevented)
      return r == null ? void 0 : r(s);
  };
}
function tt(e, r) {
  typeof e == "function" ? e(r) : e != null && (e.current = r);
}
function pe(...e) {
  return (r) => e.forEach(
    (t) => tt(t, r)
  );
}
function ge(...e) {
  return C(pe(...e), e);
}
function rt(e, r = []) {
  let t = [];
  function n(o, a) {
    const i = /* @__PURE__ */ T(a), l = t.length;
    t = [
      ...t,
      a
    ];
    function u(g) {
      const { scope: h, children: $, ...x } = g, w = (h == null ? void 0 : h[e][l]) || i, F = V(
        () => x,
        Object.values(x)
      );
      return /* @__PURE__ */ S(w.Provider, {
        value: F
      }, $);
    }
    function b(g, h) {
      const $ = (h == null ? void 0 : h[e][l]) || i, x = ae($);
      if (x)
        return x;
      if (a !== void 0)
        return a;
      throw new Error(`\`${g}\` must be used within \`${o}\``);
    }
    return u.displayName = o + "Provider", [
      u,
      b
    ];
  }
  const s = () => {
    const o = t.map((a) => /* @__PURE__ */ T(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || o;
      return V(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: l
          }
        }),
        [
          i,
          l
        ]
      );
    };
  };
  return s.scopeName = e, [
    n,
    nt(s, ...r)
  ];
}
function nt(...e) {
  const r = e[0];
  if (e.length === 1)
    return r;
  const t = () => {
    const n = e.map(
      (s) => ({
        useScope: s(),
        scopeName: s.scopeName
      })
    );
    return function(o) {
      const a = n.reduce((i, { useScope: l, scopeName: u }) => {
        const g = l(o)[`__scope${u}`];
        return {
          ...i,
          ...g
        };
      }, {});
      return V(
        () => ({
          [`__scope${r.scopeName}`]: a
        }),
        [
          a
        ]
      );
    };
  };
  return t.scopeName = r.scopeName, t;
}
const st = globalThis != null && globalThis.document ? ce : () => {
}, ot = Be["useId".toString()] || (() => {
});
let it = 0;
function at(e) {
  const [r, t] = E(ot());
  return st(() => {
    e || t(
      (n) => n ?? String(it++)
    );
  }, [
    e
  ]), e || (r ? `radix-${r}` : "");
}
const xe = /* @__PURE__ */ R((e, r) => {
  const { children: t, ...n } = e, s = B.toArray(t), o = s.find(lt);
  if (o) {
    const a = o.props.children, i = s.map((l) => l === o ? B.count(a) > 1 ? B.only(null) : /* @__PURE__ */ z(a) ? a.props.children : null : l);
    return /* @__PURE__ */ S(W, _({}, n, {
      ref: r
    }), /* @__PURE__ */ z(a) ? /* @__PURE__ */ le(a, void 0, i) : null);
  }
  return /* @__PURE__ */ S(W, _({}, n, {
    ref: r
  }), t);
});
xe.displayName = "Slot";
const W = /* @__PURE__ */ R((e, r) => {
  const { children: t, ...n } = e;
  return /* @__PURE__ */ z(t) ? /* @__PURE__ */ le(t, {
    ...ut(n, t.props),
    ref: r ? pe(r, t.ref) : t.ref
  }) : B.count(t) > 1 ? B.only(null) : null;
});
W.displayName = "SlotClone";
const ct = ({ children: e }) => /* @__PURE__ */ S(De, null, e);
function lt(e) {
  return /* @__PURE__ */ z(e) && e.type === ct;
}
function ut(e, r) {
  const t = {
    ...r
  };
  for (const n in r) {
    const s = e[n], o = r[n];
    /^on[A-Z]/.test(n) ? s && o ? t[n] = (...i) => {
      o(...i), s(...i);
    } : s && (t[n] = s) : n === "style" ? t[n] = {
      ...s,
      ...o
    } : n === "className" && (t[n] = [
      s,
      o
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...t
  };
}
const dt = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], re = dt.reduce((e, r) => {
  const t = /* @__PURE__ */ R((n, s) => {
    const { asChild: o, ...a } = n, i = o ? xe : r;
    return N(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ S(i, _({}, a, {
      ref: s
    }));
  });
  return t.displayName = `Primitive.${r}`, {
    ...e,
    [r]: t
  };
}, {}), [ne, Wt] = rt("Form"), $e = "Form", [ft, be] = ne($e), [mt, vt] = ne($e), ht = /* @__PURE__ */ R((e, r) => {
  const { __scopeForm: t, onClearServerErrors: n = () => {
  }, ...s } = e, o = X(null), a = ge(r, o), [i, l] = E({}), u = C(
    (f) => i[f],
    [
      i
    ]
  ), b = C(
    (f, m) => l((v) => {
      var p;
      return {
        ...v,
        [f]: {
          ...(p = v[f]) !== null && p !== void 0 ? p : {},
          ...m
        }
      };
    }),
    []
  ), g = C((f) => {
    l(
      (m) => ({
        ...m,
        [f]: void 0
      })
    ), d(
      (m) => ({
        ...m,
        [f]: {}
      })
    );
  }, []), [h, $] = E({}), x = C((f) => {
    var m;
    return (m = h[f]) !== null && m !== void 0 ? m : [];
  }, [
    h
  ]), w = C((f, m) => {
    $((v) => {
      var p;
      return {
        ...v,
        [f]: [
          ...(p = v[f]) !== null && p !== void 0 ? p : [],
          m
        ]
      };
    });
  }, []), F = C((f, m) => {
    $((v) => {
      var p;
      return {
        ...v,
        [f]: ((p = v[f]) !== null && p !== void 0 ? p : []).filter(
          (L) => L.id !== m
        )
      };
    });
  }, []), [M, d] = E({}), y = C((f) => {
    var m;
    return (m = M[f]) !== null && m !== void 0 ? m : {};
  }, [
    M
  ]), j = C((f, m) => {
    d((v) => {
      var p;
      return {
        ...v,
        [f]: {
          ...(p = v[f]) !== null && p !== void 0 ? p : {},
          ...m
        }
      };
    });
  }, []), [k, I] = E({}), U = C((f, m) => {
    I((v) => {
      const p = new Set(v[f]).add(m);
      return {
        ...v,
        [f]: p
      };
    });
  }, []), O = C((f, m) => {
    I((v) => {
      const p = new Set(v[f]);
      return p.delete(m), {
        ...v,
        [f]: p
      };
    });
  }, []), P = C((f) => {
    var m;
    return Array.from((m = k[f]) !== null && m !== void 0 ? m : []).join(" ") || void 0;
  }, [
    k
  ]);
  return /* @__PURE__ */ S(ft, {
    scope: t,
    getFieldValidity: u,
    onFieldValidityChange: b,
    getFieldCustomMatcherEntries: x,
    onFieldCustomMatcherEntryAdd: w,
    onFieldCustomMatcherEntryRemove: F,
    getFieldCustomErrors: y,
    onFieldCustomErrorsChange: j,
    onFieldValiditionClear: g
  }, /* @__PURE__ */ S(mt, {
    scope: t,
    onFieldMessageIdAdd: U,
    onFieldMessageIdRemove: O,
    getFieldDescription: P
  }, /* @__PURE__ */ S(re.form, _({}, s, {
    ref: a,
    onInvalid: D(e.onInvalid, (f) => {
      const m = Ce(f.currentTarget);
      m === f.target && m.focus(), f.preventDefault();
    }),
    onSubmit: D(e.onSubmit, n, {
      checkForDefaultPrevented: !1
    }),
    onReset: D(e.onReset, n)
  }))));
}), ye = "FormField", [pt, gt] = ne(ye), xt = /* @__PURE__ */ R((e, r) => {
  const { __scopeForm: t, name: n, serverInvalid: s = !1, ...o } = e, i = be(ye, t).getFieldValidity(n), l = at();
  return /* @__PURE__ */ S(pt, {
    scope: t,
    id: l,
    name: n,
    serverInvalid: s
  }, /* @__PURE__ */ S(re.div, _({
    "data-valid": we(i, s),
    "data-invalid": Fe(i, s)
  }, o, {
    ref: r
  })));
}), Q = "FormControl", $t = /* @__PURE__ */ R((e, r) => {
  const { __scopeForm: t, ...n } = e, s = be(Q, t), o = gt(Q, t), a = vt(Q, t), i = X(null), l = ge(r, i), u = n.name || o.name, b = n.id || o.id, g = s.getFieldCustomMatcherEntries(u), { onFieldValidityChange: h, onFieldCustomErrorsChange: $, onFieldValiditionClear: x } = s, w = C(async (d) => {
    if (Et(d.validity)) {
      const v = Z(d.validity);
      h(u, v);
      return;
    }
    const y = d.form ? new FormData(d.form) : new FormData(), j = [
      d.value,
      y
    ], k = [], I = [];
    g.forEach((v) => {
      wt(v, j) ? I.push(v) : Ft(v) && k.push(v);
    });
    const U = k.map(({ id: v, match: p }) => [
      v,
      p(...j)
    ]), O = Object.fromEntries(U), P = Object.values(O).some(Boolean), f = P;
    d.setCustomValidity(f ? oe : "");
    const m = Z(d.validity);
    if (h(u, m), $(u, O), !P && I.length > 0) {
      const v = I.map(
        ({ id: Ve, match: Oe }) => Oe(...j).then(
          (Ue) => [
            Ve,
            Ue
          ]
        )
      ), p = await Promise.all(v), L = Object.fromEntries(p), Pe = Object.values(L).some(Boolean);
      d.setCustomValidity(Pe ? oe : "");
      const Ne = Z(d.validity);
      h(u, Ne), $(u, L);
    }
  }, [
    g,
    u,
    $,
    h
  ]);
  N(() => {
    const d = i.current;
    if (d) {
      const y = () => w(d);
      return d.addEventListener("change", y), () => d.removeEventListener("change", y);
    }
  }, [
    w
  ]);
  const F = C(() => {
    const d = i.current;
    d && (d.setCustomValidity(""), x(u));
  }, [
    u,
    x
  ]);
  N(() => {
    var d;
    const y = (d = i.current) === null || d === void 0 ? void 0 : d.form;
    if (y)
      return y.addEventListener("reset", F), () => y.removeEventListener("reset", F);
  }, [
    F
  ]), N(() => {
    const d = i.current, y = d == null ? void 0 : d.closest("form");
    if (y && o.serverInvalid) {
      const j = Ce(y);
      j === d && j.focus();
    }
  }, [
    o.serverInvalid
  ]);
  const M = s.getFieldValidity(u);
  return /* @__PURE__ */ S(re.input, _({
    "data-valid": we(M, o.serverInvalid),
    "data-invalid": Fe(M, o.serverInvalid),
    "aria-invalid": o.serverInvalid ? !0 : void 0,
    "aria-describedby": a.getFieldDescription(u),
    title: ""
  }, n, {
    ref: l,
    id: b,
    name: u,
    onInvalid: D(e.onInvalid, (d) => {
      const y = d.currentTarget;
      w(y);
    }),
    onChange: D(e.onChange, (d) => {
      F();
    })
  }));
}), oe = "This value is not valid";
function Z(e) {
  const r = {};
  for (const t in e)
    r[t] = e[t];
  return r;
}
function bt(e) {
  return e instanceof HTMLElement;
}
function yt(e) {
  return "validity" in e;
}
function Ct(e) {
  return yt(e) && (e.validity.valid === !1 || e.getAttribute("aria-invalid") === "true");
}
function Ce(e) {
  const r = e.elements, [t] = Array.from(r).filter(bt).filter(Ct);
  return t;
}
function wt(e, r) {
  return e.match.constructor.name === "AsyncFunction" || jt(e.match, r);
}
function Ft(e) {
  return e.match.constructor.name === "Function";
}
function jt(e, r) {
  return e(...r) instanceof Promise;
}
function Et(e) {
  let r = !1;
  for (const t in e) {
    const n = t;
    if (n !== "valid" && n !== "customError" && e[n]) {
      r = !0;
      break;
    }
  }
  return r;
}
function we(e, r) {
  if ((e == null ? void 0 : e.valid) === !0 && !r)
    return !0;
}
function Fe(e, r) {
  if ((e == null ? void 0 : e.valid) === !1 || r)
    return !0;
}
const ie = ht, St = xt, Mt = $t, At = ({
  type: e = "text",
  inputRef: r,
  title: t,
  hideTitle: n,
  value: s,
  error: o,
  placeholder: a,
  rightPlaceholder: i,
  hint: l,
  onChange: u,
  onFocus: b,
  onBlur: g,
  clearBg: h = !1,
  className: $ = "",
  maxLength: x,
  containerClassName: w = "",
  hintClassName: F = "",
  unstyled: M = !1,
  disabled: d,
  ...y
}) => {
  const j = Te(), { setFocusState: k } = ze(), I = (L) => {
    b == null || b(L), k(!0);
  }, U = (L) => {
    g == null || g(L), k(!1);
  }, O = A(
    "relative order-2 flex w-full items-center",
    t && !n && "mt-1.5"
  ), P = !M && A(
    "absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950",
    o ? "border-red bg-white dark:bg-grey-925" : "border-transparent bg-grey-150 dark:bg-grey-900",
    d && "bg-grey-50 peer-hover:bg-grey-50 dark:bg-grey-950 dark:peer-hover:bg-grey-950"
  ), f = !M && A(
    "peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md",
    d ? "cursor-not-allowed text-grey-600 opacity-60 dark:text-grey-800" : "dark:text-white",
    i ? "w-0 grow rounded-l-lg" : "rounded-lg",
    $
  ), m = !M && A(
    "z-[1] order-3 rounded-r-lg",
    i ? typeof i == "string" ? "flex h-8 items-center py-1 pr-3 text-right text-sm text-grey-500 md:h-9 md:text-base" : "h-9 pr-1" : "pr-2"
  );
  let v = /* @__PURE__ */ c.jsx(c.Fragment, {});
  const p = /* @__PURE__ */ c.jsx(
    "input",
    {
      ref: r,
      className: f || $,
      disabled: d,
      id: j,
      maxLength: x,
      placeholder: a,
      type: e,
      value: s,
      onBlur: U,
      onChange: u,
      onFocus: I,
      ...y
    }
  );
  return v = /* @__PURE__ */ c.jsx(St, { name: j, asChild: !0, children: /* @__PURE__ */ c.jsxs("div", { className: O, children: [
    /* @__PURE__ */ c.jsx(Mt, { asChild: !0, children: p }),
    !M && !h && /* @__PURE__ */ c.jsx("div", { className: P || "" }),
    i && /* @__PURE__ */ c.jsx("span", { className: m || "", children: i })
  ] }) }), F = A(
    "order-3",
    F
  ), w = A(
    "flex flex-col",
    w
  ), t || l ? /* @__PURE__ */ c.jsx(ie, { asChild: !0, children: /* @__PURE__ */ c.jsxs("div", { className: w, children: [
    v,
    t && /* @__PURE__ */ c.jsx(q, { className: n ? "sr-only" : "order-1", htmlFor: j, useLabelTag: !0, children: t }),
    l && /* @__PURE__ */ c.jsx(he, { className: F, color: o ? "red" : "default", children: l })
  ] }) }) : /* @__PURE__ */ c.jsx(ie, { asChild: !0, children: v });
};
function Rt(e) {
  const r = X(e);
  return N(() => {
    r.current = e;
  }), V(() => (...t) => {
    var n;
    return (n = r.current) == null ? void 0 : n.call(r, ...t);
  }, []);
}
var se = "Avatar", [kt, Xt] = Ye(se), [It, je] = kt(se), Ee = R(
  (e, r) => {
    const { __scopeAvatar: t, ...n } = e, [s, o] = E("idle");
    return /* @__PURE__ */ c.jsx(
      It,
      {
        scope: t,
        imageLoadingStatus: s,
        onImageLoadingStatusChange: o,
        children: /* @__PURE__ */ c.jsx(Y.span, { ...n, ref: r })
      }
    );
  }
);
Ee.displayName = se;
var Se = "AvatarImage", Me = R(
  (e, r) => {
    const { __scopeAvatar: t, src: n, onLoadingStatusChange: s = () => {
    }, ...o } = e, a = je(Se, t), i = Lt(n), l = Rt((u) => {
      s(u), a.onImageLoadingStatusChange(u);
    });
    return ve(() => {
      i !== "idle" && l(i);
    }, [i, l]), i === "loaded" ? /* @__PURE__ */ c.jsx(Y.img, { ...o, ref: r, src: n }) : null;
  }
);
Me.displayName = Se;
var Ae = "AvatarFallback", Re = R(
  (e, r) => {
    const { __scopeAvatar: t, delayMs: n, ...s } = e, o = je(Ae, t), [a, i] = E(n === void 0);
    return N(() => {
      if (n !== void 0) {
        const l = window.setTimeout(() => i(!0), n);
        return () => window.clearTimeout(l);
      }
    }, [n]), a && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ c.jsx(Y.span, { ...s, ref: r }) : null;
  }
);
Re.displayName = Ae;
function Lt(e) {
  const [r, t] = E("idle");
  return ve(() => {
    if (!e) {
      t("error");
      return;
    }
    let n = !0;
    const s = new window.Image(), o = (a) => () => {
      n && t(a);
    };
    return t("loading"), s.onload = o("loaded"), s.onerror = o("error"), s.src = e, () => {
      n = !1;
    };
  }, [e]), r;
}
var _t = Ee, Pt = Me, Nt = Re;
const ke = ({ image: e, label: r, labelColor: t, bgColor: n, size: s, className: o }) => {
  let a = "", i = " -mb-2 ";
  switch (s) {
    case "sm":
      a = " w-7 h-7 text-sm ";
      break;
    case "lg":
      a = " w-12 h-12 text-xl ";
      break;
    case "xl":
      a = " w-16 h-16 text-2xl ", i = " -mb-3 ";
      break;
    case "2xl":
      a = " w-20 h-20 text-2xl ", i = " -mb-3 ";
      break;
    default:
      a = " w-10 h-10 text-md ";
      break;
  }
  return /* @__PURE__ */ c.jsxs(_t, { className: `relative inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle ${a}`, children: [
    e ? /* @__PURE__ */ c.jsx(Pt, { className: `absolute z-20 h-full w-full object-cover ${o && o}`, src: e }) : /* @__PURE__ */ c.jsx("span", { className: `${t && `text-${t}`} relative z-10 inline-flex h-full w-full items-center justify-center p-2 font-semibold ${o && o}`, style: n ? { backgroundColor: n } : {}, children: r }),
    /* @__PURE__ */ c.jsx(Nt, { asChild: !0, children: /* @__PURE__ */ c.jsx(qe, { className: `${i} absolute z-0 h-full w-full text-grey-300` }) })
  ] });
}, Vt = ({
  title: e,
  titleSize: r = "sm",
  actions: t,
  titleSeparator: n
}) => {
  let s;
  if (e) {
    const o = r === "sm" ? /* @__PURE__ */ c.jsx(q, { grey: !0, level: 6, children: e }) : /* @__PURE__ */ c.jsx(q, { level: 5, children: e });
    s = t ? /* @__PURE__ */ c.jsxs("div", { className: "flex items-end justify-between gap-2", children: [
      o,
      t
    ] }) : o;
  }
  return s || n ? /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-stretch gap-1", children: [
    s,
    n && /* @__PURE__ */ c.jsx(ue, {})
  ] }) : /* @__PURE__ */ c.jsx(c.Fragment, {});
}, Ie = ({
  title: e,
  titleSeparator: r = !0,
  titleSize: t = "sm",
  children: n,
  actions: s,
  hint: o,
  hintSeparator: a = !0,
  borderTop: i,
  pageTitle: l,
  className: u
}) => {
  const b = A(
    (i || l) && "border-t border-grey-300",
    l && "mt-5",
    u
  );
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    l && /* @__PURE__ */ c.jsx(q, { children: l }),
    /* @__PURE__ */ c.jsxs("section", { className: b, children: [
      e && /* @__PURE__ */ c.jsx(Vt, { actions: s, title: e, titleSeparator: !l && r && !i, titleSize: t }),
      /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: n }),
      o && /* @__PURE__ */ c.jsxs("div", { className: "-mt-px", children: [
        a && /* @__PURE__ */ c.jsx(ue, {}),
        /* @__PURE__ */ c.jsx(he, { children: o })
      ] })
    ] })
  ] });
}, Le = ({
  id: e,
  title: r,
  detail: t,
  action: n,
  hideActions: s,
  avatar: o,
  className: a,
  testId: i,
  separator: l = !0,
  bgOnHover: u = !0,
  paddingRight: b = !0,
  onClick: g,
  children: h
}) => {
  const $ = (w) => {
    g == null || g(w);
  }, x = A(
    "group/list-item flex items-center justify-between",
    u && "hover:bg-gradient-to-r hover:from-white hover:to-grey-50 dark:hover:from-black dark:hover:to-grey-950",
    l ? "border-b border-grey-100 last-of-type:border-b-transparent hover:border-grey-200 dark:border-grey-900 dark:hover:border-grey-800" : "border-y border-transparent hover:border-grey-200 first-of-type:hover:border-t-transparent dark:hover:border-grey-800",
    a
  );
  return /* @__PURE__ */ c.jsxs("div", { className: x, "data-testid": i, children: [
    h || /* @__PURE__ */ c.jsxs("div", { className: `flex grow items-center gap-3 ${g && "cursor-pointer"}`, onClick: $, children: [
      o && o,
      /* @__PURE__ */ c.jsxs("div", { className: "flex grow flex-col py-3 pr-6", id: e, children: [
        /* @__PURE__ */ c.jsx("span", { children: r }),
        t && /* @__PURE__ */ c.jsx("span", { className: "text-xs text-grey-700", children: t })
      ] })
    ] }),
    n && /* @__PURE__ */ c.jsx("div", { className: `visible py-3 md:pl-6 ${b && "md:pr-6"} ${s ? "group-hover/list-item:visible md:invisible" : ""}`, children: n })
  ] });
};
class Ot extends He {
  constructor(r, t) {
    super(), this.client = r, this.setOptions(t), this.bindMethods(), this.updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(r) {
    var t;
    const n = this.options;
    this.options = this.client.defaultMutationOptions(r), Ge(n, this.options) || this.client.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.currentMutation,
      observer: this
    }), (t = this.currentMutation) == null || t.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var r;
      (r = this.currentMutation) == null || r.removeObserver(this);
    }
  }
  onMutationUpdate(r) {
    this.updateResult();
    const t = {
      listeners: !0
    };
    r.type === "success" ? t.onSuccess = !0 : r.type === "error" && (t.onError = !0), this.notify(t);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    this.currentMutation = void 0, this.updateResult(), this.notify({
      listeners: !0
    });
  }
  mutate(r, t) {
    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, {
      ...this.options,
      variables: typeof r < "u" ? r : this.options.variables
    }), this.currentMutation.addObserver(this), this.currentMutation.execute();
  }
  updateResult() {
    const r = this.currentMutation ? this.currentMutation.state : Ke(), t = {
      ...r,
      isLoading: r.status === "loading",
      isSuccess: r.status === "success",
      isError: r.status === "error",
      isIdle: r.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
    this.currentResult = t;
  }
  notify(r) {
    de.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (r.onSuccess) {
          var t, n, s, o;
          (t = (n = this.mutateOptions).onSuccess) == null || t.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context), (s = (o = this.mutateOptions).onSettled) == null || s.call(o, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        } else if (r.onError) {
          var a, i, l, u;
          (a = (i = this.mutateOptions).onError) == null || a.call(i, this.currentResult.error, this.currentResult.variables, this.currentResult.context), (l = (u = this.mutateOptions).onSettled) == null || l.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
      }
      r.listeners && this.listeners.forEach(({
        listener: b
      }) => {
        b(this.currentResult);
      });
    });
  }
}
function _e(e, r, t) {
  const n = Qe(e, r, t), s = Ze({
    context: n.context
  }), [o] = E(() => new Ot(s, n));
  N(() => {
    o.setOptions(n);
  }, [o, n]);
  const a = Je(C((l) => o.subscribe(de.batchCalls(l)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult()), i = C((l, u) => {
    o.mutate(l, u).catch(Ut);
  }, [o]);
  if (a.error && We(o.options.useErrorBoundary, [a.error]))
    throw a.error;
  return {
    ...a,
    mutate: i,
    mutateAsync: a.mutate
  };
}
function Ut() {
}
function Bt(e, r, t) {
  var i;
  const s = (i = G().data) == null ? void 0 : i.site, o = (s == null ? void 0 : s.url) ?? window.location.origin, a = new K(
    new URL(o),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    e
  );
  return _e({
    async mutationFn(l) {
      return a.follow(l);
    },
    onSuccess: r,
    onError: t
  });
}
const Dt = H.create(() => {
  const { updateRoute: e } = ee(), r = H.useModal(), [t, n] = E(""), [s, o] = E(null);
  async function a() {
    Xe({
      message: "Site followed",
      type: "success"
    }), r.remove(), e("");
  }
  async function i() {
    o(s);
  }
  const l = Bt("index", a, i);
  return /* @__PURE__ */ c.jsx(
    te,
    {
      afterClose: () => {
        l.reset(), e("");
      },
      cancelLabel: "Cancel",
      okLabel: "Follow",
      size: "sm",
      title: "Follow a Ghost site",
      onOk: () => l.mutate(t),
      children: /* @__PURE__ */ c.jsx("div", { className: "mt-3 flex flex-col gap-4", children: /* @__PURE__ */ c.jsx(
        At,
        {
          autoFocus: !0,
          error: !!s,
          hint: s,
          placeholder: "@username@hostname",
          title: "Profile name",
          value: t,
          "data-test-new-follower": !0,
          onChange: (u) => n(u.target.value)
        }
      ) })
    }
  );
});
function Tt(e) {
  var o;
  const t = (o = G().data) == null ? void 0 : o.site, n = (t == null ? void 0 : t.url) ?? window.location.origin, s = new K(
    new URL(n),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    e
  );
  return me({
    queryKey: [`followers:${e}`],
    async queryFn() {
      return s.getFollowers();
    }
  });
}
function zt(e) {
  var o;
  const t = (o = G().data) == null ? void 0 : o.site, n = (t == null ? void 0 : t.url) ?? window.location.origin, s = new K(
    new URL(n),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    e
  );
  return _e({
    async mutationFn(a) {
      return s.follow(a);
    }
  });
}
const qt = ({}) => {
  const { updateRoute: e } = ee(), r = zt("index"), { data: t = [] } = Tt("index"), n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ c.jsx(
    te,
    {
      afterClose: () => {
        r.reset(), e("profile");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Followers",
      topRightContent: "close",
      children: /* @__PURE__ */ c.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ c.jsx(Ie, { children: n.map((s) => /* @__PURE__ */ c.jsx(Le, { action: /* @__PURE__ */ c.jsx(fe, { color: "grey", label: "Follow back", link: !0, onClick: () => r.mutate(J(s)) }), avatar: /* @__PURE__ */ c.jsx(ke, { image: s.icon, size: "sm" }), detail: J(s), id: "list-item", title: s.name })) }) })
    }
  );
}, Ht = H.create(qt);
function Gt(e) {
  var o;
  const t = (o = G().data) == null ? void 0 : o.site, n = (t == null ? void 0 : t.url) ?? window.location.origin, s = new K(
    new URL(n),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    e
  );
  return me({
    queryKey: [`following:${e}`],
    async queryFn() {
      return s.getFollowing();
    }
  });
}
const Kt = ({}) => {
  const { updateRoute: e } = ee(), { data: r = [] } = Gt("index"), t = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ c.jsx(
    te,
    {
      afterClose: () => {
        e("profile");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Following",
      topRightContent: "close",
      children: /* @__PURE__ */ c.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ c.jsx(Ie, { children: t.map((n) => /* @__PURE__ */ c.jsx(Le, { action: /* @__PURE__ */ c.jsx(fe, { color: "grey", label: "Unfollow", link: !0 }), avatar: /* @__PURE__ */ c.jsx(ke, { image: n.icon, size: "sm" }), detail: J(n), id: "list-item", title: n.name })) }) })
    }
  );
}, Qt = H.create(Kt), Yt = { FollowSite: Dt, ViewFollowing: Qt, ViewFollowers: Ht };
export {
  Yt as default
};
//# sourceMappingURL=modals-1926c917.mjs.map
