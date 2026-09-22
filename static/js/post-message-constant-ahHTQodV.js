import { r as e, t } from "./rolldown-runtime-hePW80VL.js";
import { f as n, m as r } from "./utils-BoNrJYys.js";
import {
  _ as i,
  b as a,
  f as o,
  g as s,
  m as c,
  p as l,
  x as u,
  y as d,
} from "./state-vendor-eewL_M6J.js";
import {
  Ct as f,
  J as p,
  N as m,
  X as h,
  w as g,
} from "./three-engine-CgjhIm51.js";
var _ = (function (e) {
    return (
      (e.Development = `development`),
      (e.Staging = `staging`),
      (e.Production = `production`),
      e
    );
  })(_ || {}),
  v = (function (e) {
    return ((e.Desktop = `Desktop`), (e.Mobile = `Mobile`), (e.Web = `Web`), e);
  })(v || {}),
  y = `#1C88F4`,
  ee = `#EEEEEE`,
  te = `#CCCCCC`,
  ne = `#000000`,
  re = `#FFFFFF`,
  ie = y,
  ae = y,
  oe = y,
  se = y,
  ce = `#000000`,
  le = `#0A0A0A`,
  ue = `#0A0A0A`,
  de = `#0A0A0A`,
  fe = `#0A0A0A`,
  pe = 16514043,
  me = `#0A0A0A`,
  he = `#0A0A0A`,
  ge = `#fafafa`,
  _e = `#ffffff`,
  ve = `#ffffff`,
  ye = `#0A0A0A`,
  be = `#ffffff`,
  xe = `Nxtspace`,
  Se = 3e3,
  Ce = 2e3,
  b = `${xe}-layer`,
  we = 0.001,
  Te = `"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22%23111%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2220%22%20paint-order%3D%22stroke%22%20d%3D%22M429.548%2030.836c-.307-.003-.6.005-.875.024-2.212.147-3.34.653-4.576%201.89l-27.58%2027.58%2055.156%2055.154%2027.578-27.58c1.238-1.236%201.744-2.363%201.89-4.575.15-2.21-.37-5.433-1.805-9.163-2.87-7.46-9.277-16.667-17.055-24.445-7.778-7.778-16.985-14.185-24.445-17.055-3.264-1.255-6.138-1.81-8.287-1.83zm-45.758%2042.22l-9.9%209.9%209.9%209.9%2012.727%2012.727%209.9%209.9%2012.727%2012.728%209.9%209.9%209.9-9.9-55.155-55.155zm-22.627%2022.626L72.665%20384.186l9.898%209.897%20288.5-288.5-9.9-9.9zm22.627%2022.63L95.29%20406.808l9.9%209.902%20288.5-288.5-9.9-9.9zm22.63%2022.626l-288.502%20288.5%209.897%209.9%20288.503-288.5-9.9-9.9zM63.223%20400.198l-12.12%2030.306%2030.393%2030.394%2030.305-12.12-6.61-6.612L92.46%20429.44l-9.9-9.9-12.73-12.728-6.61-6.612zm-19.395%2048.488l-12.993%2032.478%2032.478-12.992-19.486-19.485z%22%2F%3E%3C%2Fsvg%3E"`,
  Ee = { url: Te, x: 2, y: 30 },
  De = `url(${Te}) 2 30, crosshair`,
  Oe = `"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cg%20fill%3D%22%23111%22%20stroke%3D%22%23fff%22%20stroke-width%3D%221.5%22%20paint-order%3D%22stroke%22%20transform%3D%22rotate(-135%2012%2012)%22%3E%3Cpath%20d%3D%22M8%202.5H4V5.5H8V2.5Z%22%20fill-opacity%3D%220.5%22%2F%3E%3Cpath%20d%3D%22M20%202.5H16V5.5H20V2.5Z%22%20fill-opacity%3D%220.5%22%2F%3E%3Cpath%20d%3D%22M8%207.5H4V13.5C4%2017.9183%207.58172%2021.5%2012%2021.5C16.4183%2021.5%2020%2017.9183%2020%2013.5V7.5H16V13.5C16%2015.7091%2014.2091%2017.5%2012%2017.5C9.79086%2017.5%208%2015.7091%208%2013.5V7.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"`,
  ke = { url: Oe, x: 12, y: 12 };
`${Oe}`;
var x = (function (e) {
    return (
      (e.Walls = `walls`),
      (e.Holes = `holes`),
      (e.Zones = `zones`),
      (e.Things = `things`),
      (e.Vertices = `vertices`),
      (e.Groups = `groups`),
      (e.Exterior = `exterior`),
      e
    );
  })(x || {}),
  Ae = (function (e) {
    return ((e.Window = `window`), (e.Door = `door`), e);
  })(Ae || {}),
  S = (function (e) {
    return (
      (e.MODE_IDLE = `MODE_IDLE`),
      (e.MODE_3D_VIEW = `MODE_3D_VIEW`),
      (e.MODE_3D_THIRD_PERSON = `MODE_3D_THIRD_PERSON`),
      (e.MODE_DRAGGING_VERTEX = `MODE_DRAGGING_VERTEX`),
      (e.MODE_DRAWING_HOLE = `MODE_DRAWING_HOLE`),
      (e.MODE_DRAGGING_HOLE = `MODE_DRAGGING_HOLE`),
      (e.MODE_DRAWING_THING = `MODE_DRAWING_THING`),
      (e.MODE_DRAGGING_ITEM = `MODE_DRAGGING_ITEM`),
      (e.MODE_DRAGGING_GROUP = `MODE_DRAGGING_GROUP`),
      (e.MODE_WAITING_DRAWING_WALL = `MODE_WAITING_DRAWING_WALL`),
      (e.MODE_DRAWING_WALl = `MODE_DRAWING_WALl`),
      (e.MODE_DRAGGING_WALL = `MODE_DRAGGING_WALL`),
      (e.MODE_PASTING_CLIPBOARD = `MODE_PASTING_CLIPBOARD`),
      e
    );
  })(S || {}),
  je = (function (e) {
    return (
      (e.None = `none`),
      (e.Opening = `opening`),
      (e.Double = `double`),
      (e.Single = `single`),
      (e.Sliding = `sliding`),
      (e.Revolving = `revolving`),
      e
    );
  })(je || {}),
  C = (function (e) {
    return (
      (e.High = `high`),
      (e.Balanced = `balanced`),
      (e.Performance = `performance`),
      e
    );
  })(C || {});
function Me(e) {
  return Object.values(C).includes(e);
}
var w = (function (e) {
    return (
      (e.Point = `point`),
      (e.Line = `line`),
      (e.LineSegment = `lineSegment`),
      (e.Grid = `grid`),
      (e.Guide = `guide`),
      e
    );
  })(w || {}),
  Ne = (function (e) {
    return (
      (e.Material = `stylize-material`),
      (e.WireFrame = `stylize-wire-frame`),
      (e.MaterialWithWireFrame = `stylize-material-with-wire-frame`),
      e
    );
  })(Ne || {}),
  T = (function (e) {
    return ((e.LIGHT = `light`), (e.DARK = `dark`), e);
  })(T || {}),
  E = (function (e) {
    return (
      (e.MILLIMETER = `mm`),
      (e.CENTIMETER = `cm`),
      (e.METER = `m`),
      (e.INCH = `in`),
      (e.FOOT = `ft`),
      (e.MILE = `mi`),
      (e.SQUARE_CENTIMETER = `cm²`),
      (e.SQUARE_METER = `m²`),
      e
    );
  })(E || {}),
  Pe = (function (e) {
    return ((e.ORTHOGONAL = `orthogonal`), (e.ANGLE = `angle`), e);
  })(Pe || {}),
  Fe = (function (e) {
    return ((e.OUTER = `outer`), (e.CENTER = `center`), (e.INNER = `inner`), e);
  })(Fe || {});
function Ie(e) {
  return e === _.Development
    ? _.Development
    : e === _.Staging
      ? _.Staging
      : (_.Production, _.Production);
}
function Le(e) {
  return e === _.Development || e === _.Staging || (_.Production, !1);
}
var Re = Ie(`production`),
  ze = Le(Re),
  Be = new Map([
    [E.MILLIMETER, `mm`],
    [E.CENTIMETER, `cm`],
    [E.METER, `m`],
    [E.INCH, `in`],
    [E.FOOT, `ft`],
    [E.MILE, `mi`],
  ]);
function Ve(e, t, n) {
  if (t === n) return e;
  let i = Be.get(t),
    a = Be.get(n);
  if (i == null || a == null)
    throw Error(`不支持的长度单位换算：${String(t)} -> ${String(n)}`);
  return Number(r(e, i).to(a));
}
function D(e, t, n = l()) {
  return e ? l(Object.entries(e).map(([e, n]) => [e, new t(n)])) : n;
}
var He = e(
    t((e, t) => {
      var n = Object.prototype.hasOwnProperty,
        r = `~`;
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function a(e, t, n) {
        ((this.fn = e), (this.context = t), (this.once = n || !1));
      }
      function o(e, t, n, i, o) {
        if (typeof n != `function`)
          throw TypeError(`The listener must be a function`);
        var s = new a(n, i || e, o),
          c = r ? r + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
      }
      function c() {
        ((this._events = new i()), (this._eventsCount = 0));
      }
      ((c.prototype.eventNames = function () {
        var e = [],
          t,
          i;
        if (this._eventsCount === 0) return e;
        for (i in (t = this._events))
          n.call(t, i) && e.push(r ? i.slice(1) : i);
        return Object.getOwnPropertySymbols
          ? e.concat(Object.getOwnPropertySymbols(t))
          : e;
      }),
        (c.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, a = n.length, o = Array(a); i < a; i++)
            o[i] = n[i].fn;
          return o;
        }),
        (c.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (e, t, n, i, a, o) {
          var s = r ? r + e : e;
          if (!this._events[s]) return !1;
          var c = this._events[s],
            l = arguments.length,
            u,
            d;
          if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
              case 1:
                return (c.fn.call(c.context), !0);
              case 2:
                return (c.fn.call(c.context, t), !0);
              case 3:
                return (c.fn.call(c.context, t, n), !0);
              case 4:
                return (c.fn.call(c.context, t, n, i), !0);
              case 5:
                return (c.fn.call(c.context, t, n, i, a), !0);
              case 6:
                return (c.fn.call(c.context, t, n, i, a, o), !0);
            }
            for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
            c.fn.apply(c.context, u);
          } else {
            var f = c.length,
              p;
            for (d = 0; d < f; d++)
              switch (
                (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)
              ) {
                case 1:
                  c[d].fn.call(c[d].context);
                  break;
                case 2:
                  c[d].fn.call(c[d].context, t);
                  break;
                case 3:
                  c[d].fn.call(c[d].context, t, n);
                  break;
                case 4:
                  c[d].fn.call(c[d].context, t, n, i);
                  break;
                default:
                  if (!u)
                    for (p = 1, u = Array(l - 1); p < l; p++)
                      u[p - 1] = arguments[p];
                  c[d].fn.apply(c[d].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (c.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (c.prototype.removeListener = function (e, t, n, i) {
          var a = r ? r + e : e;
          if (!this._events[a]) return this;
          if (!t) return (s(this, a), this);
          var o = this._events[a];
          if (o.fn)
            o.fn === t &&
              (!i || o.once) &&
              (!n || o.context === n) &&
              s(this, a);
          else {
            for (var c = 0, l = [], u = o.length; c < u; c++)
              (o[c].fn !== t ||
                (i && !o[c].once) ||
                (n && o[c].context !== n)) &&
                l.push(o[c]);
            l.length
              ? (this._events[a] = l.length === 1 ? l[0] : l)
              : s(this, a);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && s(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = r),
        (c.EventEmitter = c),
        t !== void 0 && (t.exports = c));
    })(),
    1,
  ),
  Ue = class e extends Error {
    name = `TimeoutError`;
    constructor(t, n) {
      (super(t, n), Error.captureStackTrace?.(this, e));
    }
  },
  We = (e) =>
    e.reason ?? new DOMException(`This operation was aborted.`, `AbortError`);
function Ge(e, t) {
  let {
      milliseconds: n,
      fallback: r,
      message: i,
      customTimers: a = { setTimeout, clearTimeout },
      signal: o,
    } = t,
    s,
    c,
    l = new Promise((t, l) => {
      if (typeof n != `number` || Math.sign(n) !== 1)
        throw TypeError(
          `Expected \`milliseconds\` to be a positive number, got \`${n}\``,
        );
      if (o?.aborted) {
        l(We(o));
        return;
      }
      if (
        (o &&
          ((c = () => {
            l(We(o));
          }),
          o.addEventListener(`abort`, c, { once: !0 })),
        e.then(t, l),
        n === 1 / 0)
      )
        return;
      let u = new Ue();
      s = a.setTimeout.call(
        void 0,
        () => {
          if (r) {
            try {
              t(r());
            } catch (e) {
              l(e);
            }
            return;
          }
          (typeof e.cancel == `function` && e.cancel(),
            i === !1
              ? t()
              : i instanceof Error
                ? l(i)
                : ((u.message =
                    i ?? `Promise timed out after ${n} milliseconds`),
                  l(u)));
        },
        n,
      );
    }).finally(() => {
      (l.clear(), c && o && o.removeEventListener(`abort`, c));
    });
  return (
    (l.clear = () => {
      (a.clearTimeout.call(void 0, s), (s = void 0));
    }),
    l
  );
}
function Ke(e, t, n) {
  let r = 0,
    i = e.length;
  for (; i > 0; ) {
    let a = Math.trunc(i / 2),
      o = r + a;
    n(e[o], t) <= 0 ? ((r = ++o), (i -= a + 1)) : (i = a);
  }
  return r;
}
var qe = 100,
  Je = class {
    #e = [];
    #t = 0;
    enqueue(e, t) {
      let { priority: n = 0, id: r } = t ?? {},
        { size: i } = this,
        a = { priority: n, id: r, run: e };
      if (i === 0) {
        ((this.#e.length = 0), (this.#t = 0), this.#e.push(a));
        return;
      }
      if (this.#e.at(-1).priority >= n) {
        this.#e.push(a);
        return;
      }
      this.#n();
      let o = Ke(this.#e, a, (e, t) => t.priority - e.priority);
      this.#e.splice(o, 0, a);
    }
    setPriority(e, t) {
      let n = this.#e.findIndex((t, n) => n >= this.#t && t.id === e);
      if (n === -1)
        throw ReferenceError(
          `No promise function with the id "${e}" exists in the queue.`,
        );
      let [r] = this.#e.splice(n, 1);
      this.enqueue(r.run, { priority: t, id: e });
    }
    remove(e) {
      let t = this.#e.findIndex((t, n) =>
        n < this.#t ? !1 : typeof e == `string` ? t.id === e : t.run === e,
      );
      t !== -1 && this.#e.splice(t, 1);
    }
    dequeue() {
      if (this.#t === this.#e.length) return;
      let e = this.#e[this.#t];
      return (
        this.#t++,
        this.#t === this.#e.length
          ? ((this.#e.length = 0), (this.#t = 0))
          : this.#t > qe && this.#t > this.#e.length / 2 && this.#n(),
        e?.run
      );
    }
    filter(e) {
      let t = [];
      for (let n = this.#t; n < this.#e.length; n++) {
        let r = this.#e[n];
        r.priority === e.priority && t.push(r.run);
      }
      return t;
    }
    get size() {
      return this.#e.length - this.#t;
    }
    #n() {
      this.#t !== 0 && (this.#e.splice(0, this.#t), (this.#t = 0));
    }
  },
  Ye = class extends He.default {
    #e;
    #t;
    #n = 0;
    #r;
    #i = !1;
    #a = !1;
    #o;
    #s = 0;
    #c;
    #l;
    #u;
    #d = [];
    #f = 0;
    #p;
    #m;
    #h = 0;
    #g;
    #_;
    #v = 1n;
    #y = new Map();
    #b = new Set();
    timeout;
    constructor(e) {
      if (
        (super(),
        (e = {
          carryoverIntervalCount: !1,
          intervalCap: 1 / 0,
          interval: 0,
          concurrency: 1 / 0,
          autoStart: !0,
          queueClass: Je,
          strict: !1,
          ...e,
        }),
        !(typeof e.intervalCap == `number` && e.intervalCap >= 1))
      )
        throw TypeError(
          `Expected \`intervalCap\` to be a number from 1 and up, got \`${e.intervalCap?.toString() ?? ``}\` (${typeof e.intervalCap})`,
        );
      if (
        e.interval === void 0 ||
        !(Number.isFinite(e.interval) && e.interval >= 0)
      )
        throw TypeError(
          `Expected \`interval\` to be a finite number >= 0, got \`${e.interval?.toString() ?? ``}\` (${typeof e.interval})`,
        );
      if (e.strict && e.interval === 0)
        throw TypeError("The `strict` option requires a non-zero `interval`");
      if (e.strict && e.intervalCap === 1 / 0)
        throw TypeError("The `strict` option requires a finite `intervalCap`");
      if (
        ((this.#e =
          e.carryoverIntervalCount ?? e.carryoverConcurrencyCount ?? !1),
        (this.#t = e.intervalCap === 1 / 0 || e.interval === 0),
        (this.#r = e.intervalCap),
        (this.#o = e.interval),
        (this.#u = e.strict),
        (this.#p = new e.queueClass()),
        (this.#m = e.queueClass),
        (this.concurrency = e.concurrency),
        e.timeout !== void 0 && !(Number.isFinite(e.timeout) && e.timeout > 0))
      )
        throw TypeError(
          `Expected \`timeout\` to be a positive finite number, got \`${e.timeout}\` (${typeof e.timeout})`,
        );
      ((this.timeout = e.timeout), (this.#_ = e.autoStart === !1), this.#R());
    }
    #x(e) {
      for (; this.#f < this.#d.length; ) {
        let t = this.#d[this.#f];
        if (t !== void 0 && e - t >= this.#o) this.#f++;
        else break;
      }
      ((this.#f > 100 && this.#f > this.#d.length / 2) ||
        this.#f === this.#d.length) &&
        ((this.#d = this.#d.slice(this.#f)), (this.#f = 0));
    }
    #S(e) {
      this.#u ? this.#d.push(e) : this.#n++;
    }
    #C() {
      this.#u
        ? this.#d.length > this.#f && this.#d.pop()
        : this.#n > 0 && this.#n--;
    }
    #w() {
      return this.#d.length - this.#f;
    }
    get #T() {
      return this.#t ? !0 : this.#u ? this.#w() < this.#r : this.#n < this.#r;
    }
    get #E() {
      return this.#h < this.#g;
    }
    #D() {
      (this.#h--,
        this.#h === 0 && this.emit(`pendingZero`),
        this.#N(),
        this.emit(`next`));
    }
    #O() {
      ((this.#l = void 0), this.#F(), this.#P());
    }
    #k(e) {
      if (this.#u) {
        if ((this.#x(e), this.#w() >= this.#r)) {
          let t = this.#d[this.#f],
            n = this.#o - (e - t);
          return (this.#A(n), !0);
        }
        return !1;
      }
      if (this.#c === void 0) {
        let t = this.#s - e;
        if (t < 0) this.#n = this.#e ? this.#h : 0;
        else return (this.#A(t), !0);
      }
      return !1;
    }
    #A(e) {
      this.#l === void 0 &&
        (this.#l = setTimeout(() => {
          this.#O();
        }, e));
    }
    #j() {
      this.#c &&= (clearInterval(this.#c), void 0);
    }
    #M() {
      this.#l &&= (clearTimeout(this.#l), void 0);
    }
    #N() {
      if (this.#p.size === 0) {
        if ((this.#j(), this.emit(`empty`), this.#h === 0)) {
          if ((this.#M(), this.#u && this.#f > 0)) {
            let e = Date.now();
            this.#x(e);
          }
          this.emit(`idle`);
        }
        return !1;
      }
      let e = !1;
      if (!this.#_) {
        let t = Date.now(),
          n = !this.#k(t);
        if (this.#T && this.#E) {
          let r = this.#p.dequeue();
          (this.#t || (this.#S(t), this.#z()),
            n && this.#P(),
            this.emit(`active`),
            r(),
            (e = !0));
        }
      }
      return e;
    }
    #P() {
      this.#t ||
        this.#c !== void 0 ||
        this.#u ||
        ((this.#c = setInterval(() => {
          this.#F();
        }, this.#o)),
        (this.#s = Date.now() + this.#o));
    }
    #F() {
      (this.#u ||
        (this.#c !== void 0 &&
          (this.#n === 0 && this.#h === 0
            ? this.#j()
            : (this.#s = Date.now() + this.#o)),
        (this.#n = this.#e ? this.#h : 0)),
        this.#I(),
        this.#z());
    }
    #I() {
      for (; this.#N(); );
    }
    get concurrency() {
      return this.#g;
    }
    set concurrency(e) {
      if (!(typeof e == `number` && e >= 1))
        throw TypeError(
          `Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`,
        );
      ((this.#g = e), this.#I());
    }
    setPriority(e, t) {
      if (typeof t != `number` || !Number.isFinite(t))
        throw TypeError(
          `Expected \`priority\` to be a finite number, got \`${t}\` (${typeof t})`,
        );
      this.#p.setPriority(e, t);
    }
    async add(e, t = {}) {
      if (
        ((t = {
          timeout: this.timeout,
          ...t,
          id: t.id ?? (this.#v++).toString(),
        }),
        t.timeout !== void 0 && !(Number.isFinite(t.timeout) && t.timeout > 0))
      )
        throw TypeError(
          `Expected \`timeout\` to be a positive finite number, got \`${t.timeout}\` (${typeof t.timeout})`,
        );
      return new Promise((n, r) => {
        let i = Symbol(`task-${t.id}`),
          a = () => void 0,
          o = async () => {
            (a(),
              this.#h++,
              this.#y.set(i, {
                id: t.id,
                priority: t.priority ?? 0,
                startTime: Date.now(),
                timeout: t.timeout,
              }));
            let o;
            try {
              try {
                t.signal?.throwIfAborted();
              } catch (e) {
                throw (this.#B(), this.#y.delete(i), e);
              }
              let r = e({ signal: t.signal });
              if (
                (t.timeout !== void 0 &&
                  (r = Ge(Promise.resolve(r), {
                    milliseconds: t.timeout,
                    message: `Task timed out after ${t.timeout}ms (queue has ${this.#h} running, ${this.#p.size} waiting)`,
                  })),
                t.signal)
              ) {
                let { signal: e } = t;
                r = Promise.race([
                  r,
                  new Promise((t, n) => {
                    ((o = () => {
                      n(e.reason);
                    }),
                      e.addEventListener(`abort`, o, { once: !0 }));
                  }),
                ]);
              }
              let a = await r;
              (n(a), this.emit(`completed`, a));
            } catch (e) {
              (r(e), this.emit(`error`, e));
            } finally {
              (o && t.signal?.removeEventListener(`abort`, o),
                this.#y.delete(i),
                queueMicrotask(() => {
                  this.#D();
                }));
            }
          };
        this.#p.enqueue(o, t);
        let s = () => {
          if (this.#p instanceof Je) {
            this.#p.remove(o);
            return;
          }
          this.#p.remove?.(t.id);
        };
        if (t.signal) {
          let { signal: e } = t,
            n = () => {
              (a(), s(), r(e.reason), this.#N(), this.emit(`next`));
            };
          if (
            ((a = () => {
              (e.removeEventListener(`abort`, n), this.#b.delete(a));
            }),
            e.aborted)
          ) {
            n();
            return;
          }
          (e.addEventListener(`abort`, n, { once: !0 }), this.#b.add(a));
        }
        (this.emit(`add`), this.#N());
      });
    }
    async addAll(e, t) {
      return Promise.all(e.map(async (e) => this.add(e, t)));
    }
    start() {
      return this.#_ ? ((this.#_ = !1), this.#I(), this) : this;
    }
    pause() {
      this.#_ = !0;
    }
    clear() {
      for (let e of this.#b) e();
      ((this.#p = new this.#m()),
        this.#j(),
        this.#V(),
        this.emit(`empty`),
        this.#h === 0 && (this.#M(), this.emit(`idle`)),
        this.emit(`next`));
    }
    async onEmpty() {
      this.#p.size !== 0 && (await this.#L(`empty`));
    }
    async onSizeLessThan(e) {
      this.#p.size < e ||
        (await this.#L([`next`, `active`], () => this.#p.size < e));
    }
    async onIdle() {
      (this.#h !== 0 || this.#p.size !== 0) && (await this.#L(`idle`));
    }
    async onPendingZero() {
      this.#h !== 0 && (await this.#L(`pendingZero`));
    }
    async onRateLimit() {
      this.isRateLimited || (await this.#L(`rateLimit`));
    }
    async onRateLimitCleared() {
      this.isRateLimited && (await this.#L(`rateLimitCleared`));
    }
    onError() {
      return new Promise((e, t) => {
        let n = (e) => {
          (this.off(`error`, n), t(e));
        };
        this.on(`error`, n);
      });
    }
    async #L(e, t) {
      let n = Array.isArray(e) ? e : [e];
      return new Promise((e) => {
        let r = () => {
          if (!t || t()) {
            for (let e of n) this.off(e, r);
            e();
          }
        };
        for (let e of n) this.on(e, r);
      });
    }
    get size() {
      return this.#p.size;
    }
    sizeBy(e) {
      return this.#p.filter(e).length;
    }
    get pending() {
      return this.#h;
    }
    get isPaused() {
      return this.#_;
    }
    #R() {
      this.#t ||
        (this.on(`add`, () => {
          this.#p.size > 0 && this.#z();
        }),
        this.on(`next`, () => {
          this.#z();
        }));
    }
    #z() {
      this.#t ||
        this.#a ||
        ((this.#a = !0),
        queueMicrotask(() => {
          ((this.#a = !1), this.#V());
        }));
    }
    #B() {
      this.#t || (this.#C(), this.#z());
    }
    #V() {
      let e = this.#i;
      if (this.#t || this.#p.size === 0) {
        e && ((this.#i = !1), this.emit(`rateLimitCleared`));
        return;
      }
      let t;
      if (this.#u) {
        let e = Date.now();
        (this.#x(e), (t = this.#w()));
      } else t = this.#n;
      let n = t >= this.#r;
      n !== e &&
        ((this.#i = n), this.emit(n ? `rateLimit` : `rateLimitCleared`));
    }
    get isRateLimited() {
      return this.#i;
    }
    get isSaturated() {
      return (
        (this.#h === this.#g && this.#p.size > 0) ||
        (this.isRateLimited && this.#p.size > 0)
      );
    }
    get runningTasks() {
      return [...this.#y.values()].map((e) => ({
        ...e,
        timeoutRemaining: e.timeout
          ? Math.max(0, e.startTime + e.timeout - Date.now())
          : void 0,
      }));
    }
  },
  Xe = 5;
function Ze() {
  let e = globalThis.scheduler;
  return typeof e?.yield == `function`
    ? e.yield()
    : typeof requestIdleCallback == `function`
      ? new Promise((e) => {
          requestIdleCallback(() => e(), { timeout: 50 });
        })
      : new Promise((e) => {
          setTimeout(e, 0);
        });
}
var Qe = class {
    queues = new Map();
    updateVersions = new Map();
    frameBudget;
    sliceStart = null;
    constructor(e = Xe) {
      this.frameBudget = e;
    }
    now() {
      return typeof performance < `u` ? performance.now() : Date.now();
    }
    getQueue(e) {
      let t = this.queues.get(e);
      return (
        t || ((t = new Ye({ concurrency: 1 })), this.queues.set(e, t)),
        t
      );
    }
    async runWithTimeSlicing(e) {
      return (
        this.sliceStart === null && (this.sliceStart = this.now()),
        this.now() - this.sliceStart >= this.frameBudget &&
          (await Ze(), (this.sliceStart = this.now())),
        await e()
      );
    }
    add(e, t) {
      return this.getQueue(e).add(() => this.runWithTimeSlicing(t));
    }
    addUpdate(e, t) {
      let n = this.getQueue(e),
        r = (this.updateVersions.get(e) ?? 0) + 1;
      return (
        this.updateVersions.set(e, r),
        n.add(() =>
          this.runWithTimeSlicing(async () => {
            if (this.updateVersions.get(e) === r) return await t();
          }),
        )
      );
    }
    remove(e, t) {
      let n = this.queues.get(e);
      if (!n) return Promise.resolve(t()).then(() => void 0);
      let r = n
        .add(() => this.runWithTimeSlicing(async () => t()))
        .then(() => void 0);
      return (
        n.onIdle().then(() => {
          n.size === 0 && n.pending === 0 && this.destroy(e);
        }),
        r
      );
    }
    async drain(e) {
      let t = this.queues.get(e);
      t && (t.clear(), await t.onIdle());
    }
    async waitIdle(e) {
      let t = this.queues.get(e);
      t && (await t.onIdle());
    }
    destroy(e) {
      let t = this.queues.get(e);
      (t && (t.clear(), this.queues.delete(e)), this.updateVersions.delete(e));
    }
    pendingCount(e) {
      return this.queues.get(e)?.size ?? 0;
    }
    runningCount(e) {
      return this.queues.get(e)?.pending ?? 0;
    }
  },
  $e = new Qe(),
  et = new Qe();
function tt() {
  let e = Promise.resolve();
  return function (t) {
    let n = e.then(() => t());
    return (
      (e = n.then(
        () => void 0,
        () => void 0,
      )),
      n
    );
  };
}
var nt = tt(),
  rt = tt();
function O(e, t, n, r = e) {
  if (!Number.isFinite(e)) return r;
  if (t == null || n == null || t === n) return e;
  try {
    let i = Ve(e, t, n);
    return Number.isFinite(i) ? i : r;
  } catch {
    return r;
  }
}
function it(e, t = `both`) {
  let n = e.heightUnit || e.wallHeightUnit || E.CENTIMETER,
    r = Math.max(1, O(e.wallHeight, e.wallHeightUnit, n, e.wallHeight)),
    i = O(e.wallAltitude, e.wallAltitudeUnit, n, e.wallAltitude),
    a = i + r,
    o = Math.max(1, O(e.height, e.heightUnit, n, e.height)),
    s = O(e.altitude, e.altitudeUnit, n, e.altitude);
  return (
    (s = Math.max(i, s)),
    (o = Math.max(1, o)),
    t === `height`
      ? (o = Math.min(o, Math.max(1, a - s)))
      : t === `altitude`
        ? (s = Math.min(s, Math.max(i, a - o)))
        : ((o = Math.min(o, Math.max(1, a - s))),
          (s = Math.min(s, Math.max(i, a - o))),
          (o = Math.min(o, Math.max(1, a - s)))),
    {
      height: O(o, n, e.heightUnit, o),
      altitude: O(s, n, e.altitudeUnit, s),
      heightUnit: e.heightUnit,
      altitudeUnit: e.altitudeUnit,
    }
  );
}
function at(e) {
  let t = it(
    { ...e, height: (2 ** 53 - 1) / 4, heightUnit: e.heightUnit },
    `height`,
  );
  return Math.max(1, t.height);
}
function ot(e, t) {
  if (typeof e.forEach == `function`) {
    e.forEach(t);
    return;
  }
  if (typeof e.entries == `function`) for (let [n, r] of e.entries()) t(r, n);
}
function k(e) {
  if (d(e)) return !1;
  if (a(e)) return !0;
  let t = e;
  return (
    t != null &&
    typeof t.entries == `function` &&
    typeof t.has == `function` &&
    typeof t.get == `function`
  );
}
var st = /~/g,
  ct = /\//g;
function lt(e) {
  return typeof e == `number`
    ? e.toString()
    : e.replace(st, `~0`).replace(ct, `~1`);
}
function A(e, t) {
  return e + `/` + lt(t);
}
function j(e, t, n) {
  return e === `remove` ? { op: e, path: t } : { op: e, path: t, value: n };
}
function ut(e, t) {
  let n = e.size || 0,
    r = t.size || 0,
    a = Array(n + 1);
  for (let e = 0; e <= n; e++) a[e] = Array(r + 1).fill(0);
  for (let o = 0; o < n; o++)
    for (let n = 0; n < r; n++)
      i(e.get(o), t.get(n))
        ? (a[o + 1][n + 1] = a[o][n] + 1)
        : (a[o + 1][n + 1] = Math.max(a[o + 1][n], a[o][n + 1]));
  return a;
}
function dt(e, t) {
  let n = ut(e, t),
    r = e.size || 0,
    a = t.size || 0,
    o = [],
    s = r - 1,
    c = a - 1;
  for (; s >= 0 || c >= 0; )
    s >= 0 && c >= 0 && i(e.get(s), t.get(c))
      ? (o.push({ op: `=`, val: e.get(s) }), --s, --c)
      : s >= 0 && c >= 0 && s === c && !i(e.get(s), t.get(c))
        ? (o.push({ op: `!=`, val: e.get(s), newVal: t.get(s) }), --s, --c)
        : c >= 0 && (s === -1 || n[s + 1][c] >= n[s][c + 1])
          ? (o.push({ op: `+`, val: t.get(c) }), --c)
          : s >= 0 &&
            (c === -1 || n[s + 1][c] < n[s][c + 1]) &&
            (o.push({ op: `-`, val: e.get(s) }), --s);
  return o.reverse();
}
function M(e, t, n) {
  let r = [],
    i = n || ``;
  if (e === t || (e == t && e == null)) return r;
  let a = d(e) && d(t),
    o = null,
    s = null;
  return (
    ot(e, (e, n) => {
      if (t.has(n)) {
        let a = t.get(n);
        if (e === a) return;
        k(e) && k(a)
          ? (r = r.concat(M(e, a, A(i, n))))
          : d(a) && d(e)
            ? (r = r.concat(ft(e, a, A(i, n))))
            : e !== a && r.push(j(`replace`, A(i, n), a));
      } else
        a
          ? ((s = o != null && o + 1 === n ? s : n),
            r.push(j(`remove`, A(i, s))),
            (o = n))
          : r.push(j(`remove`, A(i, n)));
    }),
    ot(t, (t, n) => {
      e.has(n) || r.push(j(`add`, A(i, n), t));
    }),
    r
  );
}
function ft(e, t, n) {
  let r = [],
    i = n || ``;
  if (e === t) return r;
  let a = e.count?.() ?? 0,
    o = t.count?.() ?? 0;
  if ((a + 1) * (o + 1) >= 1e4) return M(e, t, n);
  let s = dt(e, t),
    c = 0;
  return (
    s.forEach((e) => {
      if (e.op === `=`) c++;
      else if (e.op === `!=`) {
        let { val: t, newVal: n } = e;
        (k(t) && k(n)
          ? (r = r.concat(M(t, n, A(i, c))))
          : r.push(j(`replace`, A(i, c), n)),
          c++);
      } else
        e.op === `+`
          ? (r.push(j(`add`, A(i, c), e.val)), c++)
          : e.op === `-` && r.push(j(`remove`, A(i, c)));
    }),
    r
  );
}
function pt(e, t) {
  return e === t
    ? []
    : e != t && (e == null || t == null)
      ? [j(`replace`, `/`, t)]
      : d(e) && d(t)
        ? ft(e, t)
        : k(e) && k(t)
          ? M(e, t)
          : e === t
            ? []
            : [j(`replace`, `/`, t)];
}
var mt = n(
    `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_`,
    10,
  ),
  ht = 1e-6;
function gt(e, t = 6) {
  return e && t ? parseFloat(parseFloat(e).toFixed(t)) : 0;
}
function N(e) {
  return e < 0 ? -e : e;
}
function _t(e, t) {
  let n = [];
  return (
    e.forEach((e) => {
      n.push([]);
      let r = vt(e);
      r.forEach((e) => {
        t.adj[e].forEach((t) => {
          e <= t && r.has(t) && n[n.length - 1].push([e, t]);
        });
      });
    }),
    n
  );
}
function vt(e) {
  let t = new Set();
  return (
    e.forEach((e) => {
      (t.add(e.u), t.add(e.v));
    }),
    t
  );
}
function yt(e) {
  let t = [];
  for (let n = 0; n < e; ++n) t.push([]);
  return t;
}
var bt = class {
    u;
    v;
    constructor(e, t) {
      ((this.u = e), (this.v = t));
    }
  },
  xt = class {
    count;
    subgraphs;
    time;
    V;
    E;
    adj;
    constructor(e) {
      ((this.count = 0),
        (this.subgraphs = []),
        (this.time = 0),
        (this.V = e),
        (this.E = 0),
        (this.adj = yt(e)));
    }
    addEdge(e, t) {
      (this.adj[e].push(t), this.E++);
    }
    _BCCUtil(e, t, n, r, i) {
      t[e] = n[e] = ++this.time;
      let a = 0;
      this.adj[e].forEach((o) => {
        if (t[o] === -1) {
          if (
            (a++,
            (i[o] = e),
            r.push(new bt(e, o)),
            this._BCCUtil(o, t, n, r, i),
            n[e] > n[o] && (n[e] = n[o]),
            (t[e] === 1 && a > 1) || (t[e] > 1 && n[o] >= t[e]))
          ) {
            let t = [];
            for (; r[r.length - 1].u !== e || r[r.length - 1].v !== o; )
              (t.push(r[r.length - 1]), r.splice(r.length - 1, 1));
            (t.push(r[r.length - 1]),
              this.subgraphs.push(t),
              (t = []),
              r.splice(r.length - 1, 1),
              this.count++);
          }
        } else
          o !== i[e] &&
            t[o] < n[e] &&
            (n[e] > t[o] && (n[e] = t[o]), r.push(new bt(e, o)));
      });
    }
    BCC() {
      let e = this.V,
        t = Array(e).fill(-1),
        n = Array(e).fill(-1),
        r = Array(e).fill(-1),
        i = [];
      for (let a = 0; a < e; a++) {
        t[a] === -1 && this._BCCUtil(a, t, n, i, r);
        let e = 0,
          o = [];
        for (; i.length > 0; )
          ((e = 1), o.push(i[i.length - 1]), i.splice(i.length - 1, 1));
        e === 1 && (this.subgraphs.push(o), (o = []), this.count++);
      }
    }
  };
function St(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function Ct(e, t) {
  return ((e % t) + t) % t;
}
function wt(e) {
  return e.map((e) => ({ ev: e, color: 0, direction: -1 }));
}
function Tt(e, t) {
  let n = St(t, e);
  return Math.atan2(n[1], n[0]);
}
function Et(e, t) {
  return e.map((n, r) => {
    let i = [];
    return (
      t.forEach((t, a) => {
        let o, s;
        (t[0] === r && ((o = t[1]), (s = 1)),
          t[1] === r && ((o = t[0]), (s = 0)),
          o !== void 0 &&
            s !== void 0 &&
            i.push({
              index: a,
              endpoint: o,
              angle: Tt(n, e[o]),
              edge: t,
              position: s,
            }));
      }),
      i.sort((e, t) => t.angle - e.angle),
      i
    );
  });
}
function Dt(e, t) {
  for (let e = 0; e < t.length; e += 1)
    if (t[e].color < 2) {
      let n = -1 * t[e].direction;
      return (
        kt(t, e, n),
        { edge: e, direction: n, position: n === -1 ? 0 : 1 }
      );
    }
}
function Ot(e, t, n, r) {
  let i = e[r[t][n]],
    a = i.length;
  for (let e = 0; e < a; e += 1)
    if (i[e].index === t) {
      let t = i[Ct(e + 1, i.length)];
      return {
        edge: t.index,
        vertex: t.endpoint,
        position: t.position,
        direction: t.position ? 1 : -1,
      };
    }
  throw Error(`未找到边 ${t} 在位置 ${n} 的下一条边`);
}
function kt(e, t, n) {
  ((e[t].color += 1), (e[t].direction = n));
}
function At(e, t) {
  let n = wt(t),
    r = Et(e, t),
    i = [],
    a = [],
    o = [],
    s = Dt(r, n);
  for (; s !== void 0; ) {
    let e = [t[s.edge][Ct(s.position + 1, 2)], t[s.edge][s.position]],
      c = [s.edge],
      l = [s.direction],
      u = Ot(r, s.edge, s.position, t);
    for (; u.edge !== s.edge; )
      (e.push(u.vertex),
        c.push(u.edge),
        l.push(u.direction),
        kt(n, u.edge, u.direction),
        (u = Ot(r, u.edge, u.position, t)));
    (a.push(c), i.push(e), o.push(l), (s = Dt(r, n)));
  }
  return { v_cycles: i, e_cycles: a, dir_e_cycles: o, ev_mapping: n };
}
function jt(e, t) {
  let n = [];
  for (let r = 0; r < t.length; r += 1) {
    let i = t[r],
      a = e[r];
    (i.length < 3 || a[0] !== a[a.length - 1]) && n.push(r);
  }
  return n;
}
function Mt(e, t) {
  let n = At(e, t),
    r = n.v_cycles,
    i = n.e_cycles;
  jt(r, i).forEach((e) => {
    (r.splice(e, 1), i.splice(e, 1));
  });
  let a = n.dir_e_cycles,
    o = n.e_cycles
      .map((n, r) =>
        n.map((n, i) => {
          let o = a[r][i] > 0,
            s = o ? t[n][0] : t[n][1],
            c = o ? t[n][1] : t[n][0];
          return (e[c][0] - e[s][0]) * (e[c][1] + e[s][1]);
        }),
      )
      .map((e) => e.reduce((e, t) => e + t)),
    s = o.filter((e) => e > 0).length,
    c = s >= o.length - s ? 1 : -1;
  return {
    v_cycles: n.v_cycles.filter((e, t) => c * o[t] > 0),
    e_cycles: n.e_cycles.filter((e, t) => c * o[t] > 0),
    ev_mapping: n.ev_mapping,
  };
}
function Nt(e) {
  return [e.get(`0`)?.[0] ?? 0, e.get(`1`)?.[0] ?? 0];
}
function Pt(e, t) {
  let n = o(),
    r = new xt(e.length);
  (t.forEach((e) => {
    let [t, n] = Nt(e);
    (r.addEdge(t, n), r.addEdge(n, t));
  }),
    r.BCC());
  let i = _t(
      r.subgraphs.filter((e) => e.length >= 3),
      r,
    ),
    a = [];
  return (
    i.forEach((e) => {
      e.forEach((e) => a.push(e));
    }),
    Mt(e, a).v_cycles.forEach((e) => {
      (e.shift(), (n = n.push(e)));
    }),
    n
  );
}
function Ft(e) {
  let t = 0,
    n = e.size;
  for (let r = 0; r < n; r++) {
    let { x: i, y: a } = e.get(r),
      { x: o, y: s } = e.get((r + 1) % n);
    t += (o - i) * (s + a);
  }
  return t > 0;
}
function P(e, t) {
  return e.x === t.x ? e.y - t.y : e.x - t.x;
}
function It(e, t) {
  return P(e, t) > 0 ? t : e;
}
function Lt(e, t) {
  return P(e, t) > 0 ? e : t;
}
function Rt(e) {
  return e.sort(P);
}
function F(e, t, n, r) {
  let i = e - n,
    a = t - r;
  return Math.sqrt(i * i + a * a);
}
function zt(e, t) {
  let { x: n, y: r } = e,
    { x: i, y: a } = t;
  return F(n, r, i, a);
}
function Bt(e) {
  return { a: 0, b: 1, c: -e };
}
function Vt(e) {
  return { a: 1, b: 0, c: -e };
}
function Ht(e, t, n, r, i) {
  return N(e * r + t * i + n) / Math.sqrt(e * e + t * t);
}
function Ut(e, t, n, r, i) {
  let a = e * e + t * t;
  return {
    x: (t * (t * r - e * i) - e * n) / a,
    y: (e * -t * r + e * i - t * n) / a,
  };
}
function Wt(e, t, n, r) {
  let { x: i, y: a } = e,
    { x: o, y: s } = t,
    { x: c, y: l } = n,
    { x: u, y: d } = r,
    f = (d - l) * (o - i) - (u - c) * (s - a),
    p = (u - c) * (a - l) - (d - l) * (i - c),
    m = (o - i) * (a - l) - (s - a) * (i - c);
  if (N(f) <= 1e-6) {
    if (N(p) <= 1e-6 && N(m) <= 1e-6) {
      let i = (e, t) => (e.x === t.x ? e.y - t.y : e.x - t.x),
        [a, o] = [[e, t].sort(i), [n, r].sort(i)].sort((e, t) => i(e[0], t[0]));
      return a[1].x === o[0].x
        ? { type: o[0].y <= a[1].y ? `colinear` : `None` }
        : { type: o[0].x <= a[1].x ? `colinear` : `None` };
    }
    return { type: `parallel` };
  }
  let h = p / f,
    g = m / f;
  return h >= -1e-6 && h <= 1 + 1e-6 && g >= -1e-6 && g <= 1 + 1e-6
    ? {
        type: `intersecting`,
        point: { x: i + h * (o - i), y: a + h * (s - a) },
      }
    : { type: `None` };
}
function Gt(e, t, n, r, i, a) {
  let o = i - e,
    s = a - t,
    c = n - e,
    l = r - t,
    u = o * c + s * l,
    d = c * c + l * l,
    f = -1;
  d != 0 && (f = u / d);
  let p, m;
  f < 0
    ? ((p = e), (m = t))
    : f > 1
      ? ((p = n), (m = r))
      : ((p = e + f * c), (m = t + f * l));
  let h = i - p,
    g = a - m;
  return Math.sqrt(h * h + g * g);
}
function Kt(e, t, n, r, i, a, o = ht) {
  return Gt(e, t, n, r, i, a) <= o;
}
function qt(e, t, n, r, i, a) {
  let o = n - e,
    s = r - t,
    c = o * o + s * s;
  if (c === 0) return { x: e, y: t };
  let l = ((i - e) * o + (a - t) * s) / c;
  return (l < 0 ? (l = 0) : l > 1 && (l = 1), { x: e + l * o, y: t + l * s });
}
function Jt(e, t, n, r, i, a) {
  let o = n - e,
    s = r - t,
    c = o * o + s * s;
  return c === 0 ? 0 : ((i - e) * o + (a - t) * s) / c;
}
function Yt(e, t, n, r) {
  return e > n
    ? { x0: n, z0: r, x1: e, z1: t, reversed: !0 }
    : { x0: e, z0: t, x1: n, z1: r, reversed: !1 };
}
function Xt(e, t, n, r) {
  return (-Math.atan2(t - r, n - e) * 180) / Math.PI;
}
function Zt(e, t, n, r) {
  return Math.atan2(r - t, n - e);
}
function Qt({ x: e, y: t }, { x: n, y: r }) {
  return N(e - n) <= 1e-6 && N(t - r) <= 1e-6;
}
function $t(e, t, n, r, i, a = 6) {
  let o = Zt(e, t, n, r);
  return {
    x: gt((e + Math.cos(o) * i).toString(), a),
    y: gt((t + Math.sin(o) * i).toString(), a),
  };
}
function en(e, t, n) {
  let r = e.length >> 1,
    i,
    a,
    o = e[2 * r - 3] - n,
    s = e[2 * r - 2] - t,
    c = e[2 * r - 1] - n;
  if (s === 0 && c === 0) return !1;
  for (let l = 0; l < r; l++) {
    if (
      ((i = s),
      (o = c),
      (s = e[2 * l] - t),
      (c = e[2 * l + 1] - n),
      s === 0 && c === 0)
    )
      return !1;
    o !== c && (a = c > o);
  }
  let l = 0;
  for (let u = 0; u < r; u++) {
    if (
      ((i = s),
      (o = c),
      (s = e[2 * u] - t),
      (c = e[2 * u + 1] - n),
      (o < 0 && c < 0) || (o > 0 && c > 0) || (i < 0 && s < 0))
    )
      continue;
    if (o === c && Math.min(i, s) < 0) return !0;
    if (o === c) continue;
    let r = i + ((s - i) * -o) / (c - o);
    if (r === 0) return !1;
    (r > 0 && l++,
      o === 0 && a && c > o && l--,
      o === 0 && !a && c < o && l--,
      (a = c > o));
  }
  return (l & 1) == 1;
}
function tn(e, t, n, r) {
  return { x: (e + n) / 2, y: (t + r) / 2 };
}
function nn(e, t, n, r, i) {
  let a = (i * Math.PI) / 180,
    o = Math.cos(a),
    s = Math.sin(a),
    c = e - n,
    l = t - r;
  return { x: o * c - s * l + n, y: s * c + o * l + r };
}
var I = !1,
  rn = !1,
  an = new Set(),
  on = new Set();
function sn() {
  return I;
}
function cn(e) {
  I = e;
}
function ln(e) {
  let t = I;
  I = !1;
  try {
    return e();
  } finally {
    I = t;
  }
}
function un(e) {
  return (
    on.add(e),
    () => {
      on.delete(e);
    }
  );
}
function dn(e) {
  let t = !!e?.ctrlKey;
  ((I = t), an.forEach((e) => e(t)), on.forEach((e) => e(t)));
}
function fn() {
  if (rn || typeof window > `u`) return;
  rn = !0;
  let e = (e) => {
    dn(e);
  };
  (window.addEventListener(`keydown`, e, !0),
    window.addEventListener(`keyup`, e, !0),
    window.addEventListener(`blur`, () => {
      dn(null);
    }),
    window.addEventListener(
      `contextmenu`,
      (e) => {
        e.ctrlKey && e.preventDefault();
      },
      !0,
    ));
}
var L = {
    id: ``,
    type: ``,
    prototype: x.Walls,
    name: ``,
    disabled: !1,
    selected: !1,
    visible: !0,
    locked: !1,
    misc: {},
  },
  R = class extends c({ value: 0, unit: E.CENTIMETER }, `MeasureValue`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  },
  z = class extends c({}) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  },
  B = class extends c(
    {
      length: new R(),
      height: new R(),
      width: new R(),
      altitude: new R(),
      flipX: !1,
      flipY: !1,
      flipZ: !1,
      offsetX: 0,
      offsetY: new R(),
      offsetZ: 0,
      opacity: 100,
    },
    `HoleProperties`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        length: new R(t.length),
        width: new R(t.width),
        height: new R(t.height),
        altitude: new R(t.altitude),
        offsetY: new R(t.offsetY),
      });
    }
  },
  pn = {
    ...L,
    prototype: x.Holes,
    properties: new B({}),
    wallId: ``,
    zIndex: 0,
    holeType: Ae.Door,
    openingType: je.None,
  },
  mn = (e) => ({
    ...e,
    properties: new B(e.properties),
    misc: new z(e.misc || {}),
  }),
  hn = class extends c(pn, `Hole`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(mn(t));
    }
  },
  gn = class extends c(
    { ...pn, offsetA: new R(), offsetB: new R(), offset: 0 },
    `HoleAttributes`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...mn(t), offsetA: new R(t.offsetA), offsetB: new R(t.offsetB) });
    }
  },
  V = class extends c(
    {
      length: new R(),
      width: new R(),
      height: new R(),
      x: new R(),
      y: new R(),
      z: new R(),
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      flipX: !1,
      flipY: !1,
      flipZ: !1,
      opacity: 100,
    },
    `ThingProperties`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        length: new R(t.length),
        width: new R(t.width),
        height: new R(t.height),
        x: new R(t.x),
        y: new R(t.y),
        z: new R(t.z),
      });
    }
  },
  _n = class extends c(
    { ...L, prototype: x.Things, properties: new V({}), zIndex: 0 },
    `Thing`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        properties: new V(t.properties),
        misc: new z(t.misc || {}),
      });
    }
  },
  vn = class extends c({ x: 0, y: 0, z: 0 }, `VertexProperties`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  },
  H = class extends c(
    {
      ...L,
      prototype: x.Vertices,
      properties: new vn({}),
      walls: o(),
      zones: o(),
    },
    `Vertex`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        properties: new vn(t.properties),
        walls: o(t.walls || []),
        zones: o(t.zones || []),
        misc: new z(t.misc || {}),
      });
    }
  },
  U = class extends c(
    {
      height: new R(),
      width: new R(),
      altitude: new R(),
      textureA: `none`,
      textureB: `none`,
      virtual: !1,
      opacity: 100,
    },
    `WallProperties`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        height: new R(t.height || {}),
        width: new R(t.width || {}),
        altitude: new R(t.altitude || {}),
      });
    }
  },
  yn = {
    ...L,
    prototype: x.Walls,
    properties: new U(),
    vertexIds: o(),
    holeIds: o(),
    zIndex: 0,
  },
  bn = (e) => ({
    ...e,
    properties: new U(e.properties),
    vertexIds: o(e.vertexIds || []),
    holeIds: o(e.holeIds || []),
    misc: new z(e.misc || {}),
  }),
  xn = class extends c(yn, `Wall`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(bn(t));
    }
  },
  Sn = class extends c(
    { ...yn, vertexOne: new H(), vertexTwo: new H(), wallLength: new R() },
    `WallAttributes`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...bn(t),
        vertexOne: new H(t.vertexOne),
        vertexTwo: new H(t.vertexTwo),
        wallLength: new R(t.wallLength),
      });
    }
  },
  Cn = { value: 10, unit: E.CENTIMETER },
  W = class extends c(
    {
      title: `区域`,
      height: new R(Cn),
      mode: `color`,
      texture: `None`,
      fill: _e,
      opacity: 100,
    },
    `ZoneProperties`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t, height: new R(t.height ?? Cn) });
    }
  },
  wn = class extends c(
    {
      ...L,
      prototype: x.Zones,
      properties: new W({}),
      vertexIds: o(),
      holeIds: o(),
      zIndex: 0,
    },
    `Zone`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        properties: new W(t.properties || {}),
        vertexIds: o(t.vertexIds || []),
        holeIds: o(t.holeIds || []),
        misc: new z(t.misc || {}),
      });
    }
  },
  Tn = class extends c(
    {
      name: ``,
      prototype: x.Walls,
      info: s({
        name: ``,
        title: ``,
        coverUrl: null,
        classify: null,
        unit: null,
        zipUrl: null,
        visibility: { catalog: !0, layerElementsVisible: !0 },
      }),
      properties: s({}),
    },
    `CatalogElement`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t, info: s(t.info), properties: s(t.properties) });
    }
  },
  G = class extends c({ ready: !1, elements: l({}) }, `Catalog`) {
    constructor(e = {}) {
      let t = D((u(e) ? e.toJS() : e).elements, Tn);
      super({ elements: t, ready: !t.isEmpty() });
    }
    factoryElement(e, t, n) {
      if (!this.elements.has(e)) {
        let t = this.elements.map((e) => e.get(`name`)).toArray();
        throw Error(`Element ${e} does not exist in catalog ${t}`);
      }
      let r = this.elements.get(e),
        i = r?.get(`properties`).map((e, t) => {
          let r = String(t);
          return n && n.has(r) ? n.get(r, void 0) : e.get(`defaultValue`);
        });
      switch (r?.get(`prototype`)) {
        case `walls`:
          return new xn(t).mergeIn([`properties`], new U(i?.toJS()));
        case `holes`: {
          let e = r?.get(`info`)?.toJS();
          return new hn({
            ...t,
            holeType: e?.misc?.holeType ?? t?.holeType,
            openingType: e?.misc?.openingType ?? t?.openingType,
          }).mergeIn([`properties`], new B(i?.toJS()));
        }
        case `zones`:
          return new wn(t).mergeIn([`properties`], new W(i?.toJS()));
        case `things`:
          return new _n(t).mergeIn([`properties`], new V(i?.toJS()));
        default:
          throw Error(`prototype not valid`);
      }
    }
  },
  En = 0.12,
  Dn = class extends c(
    {
      elements: o(),
      pasteCount: 0,
      placement: `offset`,
      anchorX: null,
      anchorZ: null,
      zoneMetas: o(),
      type: null,
      currentID: null,
      prototype: null,
      properties: null,
    },
    `Clipboard`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        elements: s(t.elements ?? []),
        pasteCount: t.pasteCount ?? 0,
        placement: t.placement ?? `offset`,
        anchorX: t.anchorX ?? null,
        anchorZ: t.anchorZ ?? null,
        zoneMetas: s(t.zoneMetas ?? []),
        properties: t.properties ? s(t.properties) : null,
      });
    }
  },
  On = class extends c({ zIndex: 0 }, `ElementDefaults`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  },
  kn = class extends c(
    { mode: v.Web, appEnv: _.Production, baseUrl: `/`, version: `0.0.1-rc.24` },
    `Env`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e,
        { VITE_APP_PLATFORM: n, VITE_APP_VERSION: r } = {
          VITE_APP_PLATFORM: `Web`,
          VITE_APP_VERSION: `0.0.1-rc.24`,
        };
      super({ ...t, mode: n || v.Web, appEnv: Re, version: r });
    }
  },
  An = class extends c({
    texture: `none`,
    visible: !0,
    opacity: 100,
    color: `#ffffff`,
    mode: `color`,
  }) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  },
  jn = class extends c({
    texture: `none`,
    visible: !0,
    opacity: 100,
    color: `#eeeeee`,
    mode: `color`,
  }) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  },
  Mn = class extends c({ sky: new An(), ground: new jn() }) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t, sky: new An(t.sky), ground: new jn(t.ground) });
    }
  };
function Nn(e) {
  return e * 100;
}
function Pn(e) {
  return e / 100;
}
var Fn = `#fafafa`,
  In = `#171717`,
  Ln = {
    highway: `#1c1917`,
    primary: `#292524`,
    secondary: `#44403c`,
    ordinary: `#78716c`,
  },
  Rn = { highway: !0, primary: !0, secondary: !0, ordinary: !0 },
  zn = { highway: 18, primary: 14, secondary: 10, ordinary: 6 },
  Bn = class extends c({ x: 0, z: 0 }, `ExteriorPoint`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  },
  Vn = class extends c(
    { id: ``, footprint: o(), height: 1800 },
    `ExteriorBuilding`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t, footprint: o((t.footprint || []).map((e) => new Bn(e))) });
    }
  },
  Hn = class extends c(
    {
      id: ``,
      category: `ordinary`,
      path: o(),
      width: 600,
      lanes: void 0,
      oneway: !1,
    },
    `ExteriorRoad`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t, path: o((t.path || []).map((e) => new Bn(e))) });
    }
  },
  Un = class extends c({ ...Rn }, `ExteriorRoadsEnabled`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...Rn, ...t });
    }
  },
  Wn = class extends c({ ...Ln }, `ExteriorRoadColors`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...Ln, ...t });
    }
  },
  Gn = class extends c(
    {
      enabled: !1,
      buildings: o(),
      buildingColor: Fn,
      buildingOpacity: 85,
      roads: o(),
      roadsEnabled: new Un(),
      roadColors: new Wn(),
      basemapEnabled: !0,
      basemapUrl: ``,
      basemapScale: 1,
      basemapWidth: 0,
      basemapHeight: 0,
      originX: 0,
      originZ: 0,
      rotation: 0,
      centerLng: 0,
      centerLat: 0,
      address: ``,
    },
    `Exterior`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        buildings: o((t.buildings || []).map((e) => new Vn(e))),
        roads: o((t.roads || []).map((e) => new Hn(e))),
        roadsEnabled: new Un(t.roadsEnabled),
        roadColors: new Wn(t.roadColors),
      });
    }
  },
  Kn = class extends c(
    { time: new Date().getTime(), title: ``, message: `` },
    `Errors`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t });
    }
  },
  K = [`#bbbbbb`, `#dddddd`, `#dddddd`, `#dddddd`, `#dddddd`],
  q = class extends c({ step: 20, colors: o(K) }, `GridStreakProperty`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ step: t.step, colors: o(t?.colors || K) });
    }
  },
  J = class extends c({ id: ``, type: ``, property: new q() }, `GridStreak`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t, property: new q(t.property) });
    }
  },
  qn = l({
    h1: new J({
      id: `h1`,
      type: `horizontal-streak`,
      property: new q({ step: 20, colors: K }),
    }),
    v1: new J({
      id: `v1`,
      type: `vertical-streak`,
      property: new q({ step: 20, colors: K }),
    }),
  }),
  Jn = class extends c(
    {
      h1: new J({
        id: `h1`,
        type: `horizontal-streak`,
        property: new q({ step: 20, colors: K }),
      }),
      v1: new J({
        id: `v1`,
        type: `vertical-streak`,
        property: new q({ step: 20, colors: K }),
      }),
    },
    `GridItems`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        h1: new J(t.h1 || qn.get(`h1`)),
        v1: new J(t.v1 || qn.get(`v1`)),
      });
    }
  };
function Yn(e) {
  let {
      x: t,
      y: n,
      z: r,
      width: i,
      length: a,
      height: o,
      rotationX: s,
      rotationY: c,
      rotationZ: l,
    } = e.properties,
    u = i.value,
    d = a.value,
    p = o.value,
    _ = new g(new f(-u / 2, -p / 2, -d / 2), new f(u / 2, p / 2, d / 2)),
    v = new m(
      (s * Math.PI) / 180,
      (c * Math.PI) / 180,
      (l * Math.PI) / 180,
      `XYZ`,
    );
  return (
    _.applyMatrix4(new h().makeRotationFromEuler(v)),
    _.translate(new f(t.value + u / 2, n.value + p / 2, r.value + d / 2)),
    _
  );
}
function Xn(e, t) {
  let [n, r] = e.vertexIds.toArray(),
    i = t.get(n),
    a = t.get(r);
  if (!i || !a) return null;
  let o = i.properties.x,
    s = i.properties.z,
    c = a.properties.x,
    l = a.properties.z,
    u = Math.hypot(c - o, l - s);
  if (u === 0) return null;
  let d = e.properties.altitude.value,
    p = d + e.properties.height.value,
    m = e.properties.width.value,
    _ = new g(new f(-u / 2, d, -m / 2), new f(u / 2, p, m / 2)),
    v = Math.atan2(l - s, c - o);
  return (
    _.applyMatrix4(new h().makeRotationY(-v)),
    _.translate(new f((o + c) / 2, 0, (s + l) / 2)),
    _
  );
}
var Zn = class extends c(
    { walls: o([]), things: o([]), holes: o([]), zones: o([]) },
    `GroupsElement`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        walls: o(t.walls || []),
        things: o(t.things || []),
        holes: o(t.holes || []),
        zones: o(t.zones || []),
      });
    }
  },
  Qn = class extends c(
    {
      x: 0,
      y: 0,
      z: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
    },
    `GroupProperties`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t });
    }
  },
  $n = class extends c(
    { ...L, prototype: x.Groups, properties: new Qn({}), elements: l({}) },
    `Group`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        properties: new Qn(t.properties),
        elements: D(t.elements, Zn),
        misc: new z(t.misc || {}),
      });
    }
    getDimensions(e) {
      let t = new g();
      if (
        (this.elements.forEach((n, r) => {
          let i = e.layers.get(r);
          i &&
            (n.get(`things`)?.forEach((e) => {
              let n = i.things.get(e);
              n && t.union(Yn(n));
            }),
            n.get(`walls`)?.forEach((e) => {
              let n = i.walls.get(e);
              if (n) {
                let e = Xn(n, i.vertices);
                e && t.union(e);
              }
            }));
        }),
        t.isEmpty())
      )
        return null;
      let n = new f();
      return (
        t.getSize(n),
        {
          x: t.min.x,
          y: t.min.y,
          z: t.min.z,
          width: n.x,
          height: n.y,
          length: n.z,
        }
      );
    }
  },
  er = class extends c({ center: l({ x: 0, y: 0 }), radius: 0 }, `Circular`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t, center: l(t.center) });
    }
  },
  tr = class extends c(
    { horizontal: l({}), vertical: l({}), circular: l({}) },
    `GuidesEnum`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        horizontal: l(t.horizontal || {}),
        vertical: l(t.vertical || {}),
        circular: D(t.circular, er),
      });
    }
  },
  nr = class extends c({ visible: !0, opacity: 100, items: new Jn() }, `Grid`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t, items: new Jn(t.items) });
    }
  },
  rr = class extends c(
    { vertices: o(), walls: o(), holes: o(), zones: o(), things: o() },
    `Selected`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        vertices: o(t.vertices || []),
        walls: o(t.walls || []),
        holes: o(t.holes || []),
        zones: o(t.zones || []),
        things: o(t.things || []),
      });
    }
  },
  ir = class extends c(
    {
      id: ``,
      altitude: 0,
      unit: E.CENTIMETER,
      opacity: 100,
      name: ``,
      visible: !0,
      disabled: !1,
      locked: !1,
      vertices: l(),
      walls: l(),
      holes: l(),
      zones: l(),
      things: l(),
      selected: new rr(),
    },
    `Layer`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        ...t,
        vertices: D(t.vertices, H),
        walls: D(t.walls, xn),
        holes: D(t.holes, hn),
        zones: D(t.zones, wn),
        things: D(t.things, _n),
        selected: new rr(t.selected),
      });
    }
  },
  ar = l({ [b]: new ir({ id: b, name: b }) }),
  or = class extends c(
    {
      url: ``,
      visible: !0,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      originalWidth: 100,
      originalHeight: 100,
      opacity: 50,
      rotation: 0,
      realLength: 100,
      scaleLineLength: 100,
      ratio: 1,
      unit: E.CENTIMETER,
      editing: !1,
    },
    `ReferencePicture`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t, editing: !1 });
    }
  },
  sr = class extends c({ walls: !0, things: !0, holes: !0 }) {
    constructor(e = {}) {
      let t = (u(e) ? e.toJS() : e) || {};
      super({
        walls: !!(t.walls ?? !0),
        things: !!(t.things ?? !0),
        holes: !!(t.holes ?? !0),
      });
    }
  },
  cr = class extends c({ visible: !1 }, `Size`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t });
    }
  },
  lr = 0.35,
  ur = class extends c(
    {
      unit: E.CENTIMETER,
      autoClose: !1,
      cameraWallCulling: !1,
      ghost: !1,
      height: 300,
      opacity: 100,
      textureA: `none`,
      textureB: `none`,
      drawMode: Pe.ORTHOGONAL,
      guideLine: Fe.CENTER,
    },
    `WallDefaults`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  };
function dr(e) {
  return s({
    height: { value: e.get(`height`), unit: e.get(`unit`) },
    opacity: e.get(`opacity`),
    textureA: e.get(`textureA`),
    textureB: e.get(`textureB`),
  });
}
function fr(e, t) {
  return t ? e * lr : e;
}
var pr = class extends c(
  {
    title: `区域`,
    unit: E.CENTIMETER,
    height: 10,
    mode: `color`,
    texture: `none`,
    fill: _e,
    opacity: 100,
  },
  `ZoneDefaults`,
) {
  constructor(e = {}) {
    let t = u(e) ? e.toJS() : e;
    super(t);
  }
};
function mr(e) {
  return new W({
    title: e.get(`title`),
    height: new R({ value: e.get(`height`), unit: e.get(`unit`) }),
    mode: e.get(`mode`),
    texture: e.get(`texture`),
    fill: e.get(`fill`),
    opacity: e.get(`opacity`),
  });
}
var Y = class extends c(
  {
    stylize: Ne.Material,
    unit: E.CENTIMETER,
    selectedLayer: b,
    width: Se,
    height: Ce,
    renderQuality: C.High,
    roamCollision: new sr(),
    elementDefaults: new On(),
    wallDefaults: new ur(),
    zoneDefaults: new pr(),
    grid: new nr(),
    size: new cr(),
    guides: new tr(),
    layers: l({}),
    groups: l({}),
    environment: new Mn(),
    exterior: new Gn(),
    meta: l({}),
    referencePicture: new or(),
  },
  `Scene`,
) {
  constructor(e = {}) {
    let t = u(e) ? e.toJS() : e,
      n = D(t.layers, ir, ar);
    super({
      ...t,
      selectedLayer: l(n).first()?.get(`id`),
      layers: n,
      renderQuality: Me(t.renderQuality) ? t.renderQuality : C.High,
      roamCollision: new sr(t.roamCollision),
      elementDefaults: new On(t.elementDefaults),
      wallDefaults: new ur(t.wallDefaults),
      zoneDefaults: new pr(t.zoneDefaults),
      grid: new nr(t.grid),
      size: new cr(t.size),
      guides: new tr(t.guides),
      groups: D(t.groups, $n),
      environment: new Mn(t.environment),
      exterior: new Gn(t.exterior),
      referencePicture: new or(t.referencePicture),
      meta: l(t.meta),
    });
  }
};
function hr(e) {
  return l({
    time: e.time,
    label: e.label,
    operator: e.operator,
    operatorColor: e.operatorColor,
  });
}
function gr(e) {
  let t = o(e.diff.map((e) => l(e)));
  return l({
    time: e.time,
    diff: t,
    label: e.label,
    operator: e.operator,
    operatorColor: e.operatorColor,
  });
}
var _r = class extends c(
    { list: o([]), first: new Y(), last: new Y() },
    `UndoStack`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        list: o(t.list?.map(gr) ?? []),
        first: new Y(t.first),
        last: new Y(t.last),
      });
    }
  },
  vr = class extends c(
    { list: o([]), first: new Y(), last: new Y() },
    `RedoStack`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        list: o(t.list?.map(gr) ?? []),
        first: new Y(t.first),
        last: new Y(t.last),
      });
    }
  },
  yr = class e extends c(
    { undoStack: new _r(), redoStack: new vr(), timeline: o([]) },
    `History`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        undoStack: new _r(t.undoStack),
        redoStack: new vr(t.redoStack),
        timeline: o(t.timeline?.map(hr) ?? []),
      });
    }
    static fromScene(t) {
      let n = t.toJS();
      return new e({
        undoStack: { list: [], first: n, last: n },
        redoStack: { list: [], first: n, last: n },
      });
    }
  },
  br = class extends c({ name: ``, code: `` }, `Local`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...t });
    }
  },
  xr = class extends c({ left: p.ROTATE, middle: p.DOLLY, right: p.PAN }) {
    constructor(e = {}) {
      let t = (u(e) ? e.toJS() : e) || {};
      super(t);
    }
  },
  X = class extends c({ dragAnimate: !0, zoomSpeed: 1, moveSpeed: 1 }) {
    constructor(e = {}) {
      let t = (u(e) ? e.toJS() : e) || {};
      super(t);
    }
  },
  Sr = class extends c({
    mouse: new xr(),
    panSpeed: 1,
    zoomSpeed: 1,
    rotateSpeed: 1,
    dampingFactor: 0.05,
    enableDamping: !0,
    zoomToCursor: !0,
    enablePan: !0,
    enableZoom: !0,
    enableRotate: !0,
    screenSpacePanning: !0,
  }) {
    constructor(e = {}) {
      let t = (u(e) ? e.toJS() : e) || {};
      super({ ...t, mouse: new xr(t.mouse) });
    }
  },
  Cr = class extends c(
    {
      name: `未命名`,
      description: ``,
      language: `zh-CN`,
      theme: T.DARK,
      autosave: !0,
      createTime: new Date(),
      lastSaveTime: new Date(),
      view3D: new Sr(),
      view2D: new X(),
      locales: l({}),
      amapKey: ``,
      amapSecurityCode: ``,
      amapWebServiceKey: ``,
    },
    `Settings`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e,
        n = D(t.locales, br);
      super({
        ...t,
        locales: n,
        createTime: t.createTime,
        lastSaveTime: t.lastSaveTime,
        view3D: new Sr(t.view3D),
        view2D: new X(t.view2D),
      });
    }
  },
  wr = class extends c(
    { type: `point`, x: -1, y: -1, radius: 1, priority: 1, related: o() },
    `PointSnap`,
  ) {
    nearestPoint(e, t) {
      return { x: this.x, y: this.y, distance: F(this.x, this.y, e, t) };
    }
    isNear(e, t, n) {
      return Math.abs(this.x - e) < n && Math.abs(this.y - t) < n;
    }
  },
  Tr = class extends c(
    {
      type: `line`,
      a: -1,
      b: -1,
      c: -1,
      radius: 1,
      priority: 1,
      related: o([]),
    },
    `LineSnap`,
  ) {
    nearestPoint(e, t) {
      if (this.a === 0) {
        let n = -this.c;
        return { x: e, y: n, distance: Math.abs(t - n) };
      }
      if (this.b === 0) {
        let n = -this.c;
        return { x: n, y: t, distance: Math.abs(e - n) };
      }
      return {
        ...Ut(this.a, this.b, this.c, e, t),
        distance: Ht(this.a, this.b, this.c, e, t),
      };
    }
    isNear(e, t, n) {
      return this.a === 0
        ? Math.abs(t + this.c) < n
        : this.b === 0
          ? Math.abs(e + this.c) < n
          : Ht(this.a, this.b, this.c, e, t) < n;
    }
  },
  Er = class extends c(
    {
      type: `line-segment`,
      x1: -1,
      y1: -1,
      x2: -1,
      y2: -1,
      radius: 1,
      priority: 1,
      related: o([]),
    },
    `LineSegmentSnap`,
  ) {
    nearestPoint(e, t) {
      return {
        ...qt(this.x1, this.y1, this.x2, this.y2, e, t),
        distance: Gt(this.x1, this.y1, this.x2, this.y2, e, t),
      };
    }
    isNear(e, t, n) {
      let r = Math.min(this.x1, this.x2) - n,
        i = Math.max(this.x1, this.x2) + n,
        a = Math.min(this.y1, this.y2) - n,
        o = Math.max(this.y1, this.y2) + n;
      return e >= r && e <= i && t >= a && t <= o;
    }
  },
  Dr = class extends c(
    {
      type: `grid`,
      x: -1,
      y: -1,
      stepX: 0,
      stepY: 0,
      radius: 1,
      priority: 1,
      related: o([]),
    },
    `GridSnap`,
  ) {
    nearestPoint(e, t) {
      let n = this.x,
        r = this.y;
      return (
        this.stepX > 0 &&
          this.stepY > 0 &&
          ((n = Math.round(e / this.stepX) * this.stepX),
          (r = Math.round(t / this.stepY) * this.stepY)),
        { x: n, y: r, distance: F(n, r, e, t) }
      );
    }
    isNear(e, t, n) {
      return this.nearestPoint(e, t).distance < n;
    }
  },
  Or = class extends c(
    {
      type: `circle`,
      cx: -1,
      cy: -1,
      r: 0,
      radius: 1,
      priority: 1,
      related: o([]),
    },
    `CircleSnap`,
  ) {
    nearestPoint(e, t) {
      let n = e - this.cx,
        r = t - this.cy,
        i = Math.sqrt(n * n + r * r) || 1,
        a = this.r / i;
      return {
        x: this.cx + n * a,
        y: this.cy + r * a,
        distance: Math.abs(i - this.r),
      };
    }
    isNear(e, t, n) {
      return this.nearestPoint(e, t).distance < n;
    }
  },
  kr = class extends c(
    { point: !0, line: !0, lineSegment: !0, grid: !0, guide: !0 },
    `Mask`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  },
  Ar = class extends c(
    { mask: new kr(), elements: o([]), activeElement: null, activePoint: null },
    `SnapEnum`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        mask: new kr(t.mask),
        activeElement: t.activeElement ?? null,
        activePoint: t.activePoint ?? null,
      });
    }
  },
  Z = class e {
    static isEnabled(e) {
      return !e || sn()
        ? !1
        : e.get(`point`) ||
            e.get(`line`) ||
            e.get(`lineSegment`) ||
            e.get(`grid`) ||
            e.get(`guide`);
    }
    static nearestSnap(t, n, r, i) {
      if (!e.isEnabled(i)) return;
      let a = i.get(`point`),
        o = i.get(`line`),
        s = i.get(`lineSegment`),
        c = i.get(`grid`),
        l = i.get(`guide`),
        u = null,
        d = null;
      for (let e = 0, i = t.size; e < i; e++) {
        let i = t.get(e);
        if (!i) continue;
        let f = i.related,
          p = f != null && f.get(0) === `guide`,
          m = !1;
        if (p) m = l;
        else
          switch (i.type) {
            case `point`:
              m = a;
              break;
            case `line`:
              m = o;
              break;
            case `line-segment`:
              m = s;
              break;
            case `grid`:
              m = c;
              break;
            case `circle`:
              m = !1;
              break;
            default:
              m = !1;
          }
        if (!m) continue;
        let h = i.radius;
        if (!i.isNear(n, r, h)) continue;
        let g = i.nearestPoint(n, r);
        if (g.distance >= h) continue;
        if (!u || !d) {
          ((u = i), (d = g));
          continue;
        }
        let _ = i.priority,
          v = u.priority;
        _ === v
          ? g.distance < d.distance && ((u = i), (d = g))
          : _ > v && ((u = i), (d = g));
      }
      return u && d ? { snap: u, point: d } : void 0;
    }
    static addPointSnap(e, t, n, r, i, a) {
      let s = o([a]);
      return e.push(new wr({ x: t, y: n, radius: r, priority: i, related: s }));
    }
    static addLineSnap(e, t, n, r, i, a, s) {
      let c = o([s]);
      return e.withMutations((e) => {
        if (
          e.some((e) => {
            let i = e;
            return (
              i.get(`type`) === `line` &&
              t === i.get(`a`) &&
              n === i.get(`b`) &&
              r === i.get(`c`)
            );
          })
        )
          return e;
        e.push(
          new Tr({ a: t, b: n, c: r, radius: i, priority: a, related: c }),
        );
      });
    }
    static addLineSegmentSnap(e, t, n, r, i, a, s, c) {
      let l = o([c]);
      return e.push(
        new Er({
          x1: t,
          y1: n,
          x2: r,
          y2: i,
          radius: a,
          priority: s,
          related: l,
        }),
      );
    }
    static addGridSnap(e, t, n, r, i, a, s = 0, c = 0) {
      let l = o([a]);
      return e.push(
        new Dr({
          x: t,
          y: n,
          stepX: s,
          stepY: c,
          radius: r,
          priority: i,
          related: l,
        }),
      );
    }
    static addCircleSnap(e, t, n, r, i, a, s) {
      if (r <= 0) return e;
      let c = o([s]);
      return e.push(
        new Or({ cx: t, cy: n, r, radius: i, priority: a, related: c }),
      );
    }
  },
  jr = new (class {
    elements;
    propertyTypes;
    unit;
    constructor(e = E.CENTIMETER) {
      ((this.elements = {}), (this.propertyTypes = {}), (this.unit = e));
    }
    getElement(e) {
      return this.hasElement(e) ? this.elements[e] : null;
    }
    getPropertyType(e) {
      return Object.prototype.hasOwnProperty.call(this.propertyTypes, e)
        ? this.propertyTypes[e]
        : null;
    }
    registerElement(e, t = !1) {
      ((e.properties ??= {}),
        (t || !this.hasElement(e.name)) && (this.elements[e.name] = e));
    }
    registerMultipleElements(e) {
      e.forEach((e) => this.registerElement(e));
    }
    unregisterElement(e) {
      return this.hasElement(e) ? (delete this.elements[e], !0) : !1;
    }
    registerPropertyType(e, t, n) {
      this.propertyTypes[e] = { type: e, Viewer: t, Editor: n };
    }
    registerMultiplePropertyType(e) {
      e.forEach((e) => this.registerPropertyType(e.type, e.Viewer, e.Editor));
    }
    hasElement(e) {
      return Object.prototype.hasOwnProperty.call(this.elements, e);
    }
  })(),
  Q = class extends c(
    {
      type: null,
      currentID: null,
      vertexID: null,
      groupID: null,
      wallID: null,
      holeID: null,
      zoneID: null,
      thingID: null,
      layerID: null,
      startPointX: null,
      startPointY: null,
      startPointZ: null,
      startVertex0X: null,
      startVertex0Y: null,
      startVertex0Z: null,
      startVertex1X: null,
      startVertex1Y: null,
      startVertex1Z: null,
      startWidth: null,
      startLength: null,
      startHeight: null,
      originalX: null,
      originalY: null,
      originalZ: null,
      barX: null,
      barY: null,
      barZ: null,
      element: null,
      previousMode: null,
      chainWallCount: null,
      lastPointX: null,
      lastPointZ: null,
      lastGuideX: null,
      lastGuideZ: null,
      guideStartX: null,
      guideStartZ: null,
      texture: null,
    },
    `SupportElement`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({ ...e, element: e.element ? s(t.element) : null });
    }
  },
  Mr = class extends c({ drawing: new Q({}), dragging: new Q({}) }, `Support`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super({
        drawing: new Q(t.drawing || {}),
        dragging: new Q(t.dragging || {}),
      });
    }
  },
  Nr = {
    mode: S.MODE_IDLE,
    settings: new Cr(),
    scene: new Y(),
    support: new Mr(),
    snap: new Ar(),
    history: new yr(),
    catalog: new G(),
    clipboard: new Dn(),
    errors: o([]),
    warns: o([]),
    env: new kn(),
  },
  Pr = class extends c(Nr, `State`) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e,
        n = new Y(t.scene),
        r = yr.fromScene(n);
      super({
        mode: S.MODE_IDLE,
        settings: new Cr(t.settings),
        scene: n,
        support: new Mr(),
        snap: new Ar(t.snap),
        clipboard: new Dn(),
        errors: o([]),
        warns: o([]),
        catalog: t.catalog
          ? new G(t.catalog)
          : new G({ elements: jr.elements }),
        history: r,
      });
    }
    getIn(e) {
      return super.getIn(e);
    }
    updateIn(e, t) {
      return super.updateIn(e, t);
    }
  },
  Fr = class extends c(
    { time: new Date().getTime(), title: ``, message: `` },
    `Warns`,
  ) {
    constructor(e = {}) {
      let t = u(e) ? e.toJS() : e;
      super(t);
    }
  };
function Ir(e) {
  let { x: t, z: n, length: r, width: i, rotationY: a } = e,
    o = t + r / 2,
    s = n + i / 2,
    c = [
      { x: t, y: n },
      { x: t + r, y: n },
      { x: t + r, y: n + i },
      { x: t, y: n + i },
    ];
  return a ? c.map((e) => nn(e.x, e.y, o, s, a)) : c;
}
function Lr(e) {
  let [t, n, r, i] = Ir(e);
  return [
    t,
    n,
    r,
    i,
    { x: (t.x + n.x) / 2, y: (t.y + n.y) / 2 },
    { x: (n.x + r.x) / 2, y: (n.y + r.y) / 2 },
    { x: (r.x + i.x) / 2, y: (r.y + i.y) / 2 },
    { x: (i.x + t.x) / 2, y: (i.y + t.y) / 2 },
  ];
}
function Rr(e, t, n) {
  if (!Z.isEnabled(n)) return { x: t.x, z: t.z, snap: void 0 };
  let r = Lr(t),
    i,
    a = 0,
    o = 0,
    s = 1 / 0;
  for (let t of r) {
    let r = Z.nearestSnap(e, t.x, t.y, n);
    r &&
      r.point.distance < s &&
      ((s = r.point.distance),
      (i = r),
      (a = r.point.x - t.x),
      (o = r.point.y - t.y));
  }
  return i
    ? { x: t.x + a, z: t.z + o, snap: i }
    : { x: t.x, z: t.z, snap: void 0 };
}
var $ = `guide`;
function zr(e, t, n, r) {
  let i = e.get(`width`),
    a = e.get(`height`),
    o = r?.excludeThingIds ? new Set(r.excludeThingIds) : null,
    s = r?.excludeWallIds ? new Set(r.excludeWallIds) : null,
    c = r?.excludeVertexIds ? new Set(r.excludeVertexIds) : null,
    l,
    u,
    d;
  return t.withMutations((t) => {
    if (
      (e.get(`layers`).forEach((e) => {
        let r = e.get(`walls`),
          i = e.get(`vertices`);
        (i.forEach(({ id: e, properties: { x: r, z: i } }) => {
          c?.has(e) ||
            (n.get(w.Point) && Z.addPointSnap(t, r, i, 10, 10, e),
            n.get(w.Line) &&
              (({ a: l, b: u, c: d } = Bt(i)),
              Z.addLineSnap(t, l, u, d, 10, 1, e),
              ({ a: l, b: u, c: d } = Vt(r)),
              Z.addLineSnap(t, l, u, d, 10, 1, e)));
        }),
          n.get(w.LineSegment) &&
            r.forEach(({ id: e, vertexIds: [n, r] }) => {
              if (s?.has(e)) return;
              let a = i.get(n)?.get(`properties`).get(`x`) ?? 0,
                o = i.get(n)?.get(`properties`).get(`z`) ?? 0,
                c = i.get(r)?.get(`properties`).get(`x`) ?? 0,
                l = i.get(r)?.get(`properties`).get(`z`) ?? 0;
              Z.addLineSegmentSnap(t, a, o, c, l, 20, 1, e);
            }));
        let a = n.get(w.Point),
          f = n.get(w.Line),
          p = n.get(w.LineSegment);
        (a || f || p) &&
          e.get(`things`).forEach((e) => {
            let n = e.get(`id`);
            if (o?.has(n)) return;
            let r = e.get(`properties`),
              i = Ir({
                x: r.get(`x`).get(`value`),
                z: r.get(`z`).get(`value`),
                length: r.get(`length`).get(`value`),
                width: r.get(`width`).get(`value`),
                rotationY: r.get(`rotationY`) || 0,
              });
            if (
              (a &&
                i.forEach(({ x: e, y: r }) => {
                  Z.addPointSnap(t, e, r, 10, 10, n);
                }),
              f &&
                i.forEach(({ x: e, y: r }) => {
                  (({ a: l, b: u, c: d } = Bt(r)),
                    Z.addLineSnap(t, l, u, d, 10, 1, n),
                    ({ a: l, b: u, c: d } = Vt(e)),
                    Z.addLineSnap(t, l, u, d, 10, 1, n));
                }),
              p)
            )
              for (let e = 0; e < 4; e++) {
                let r = i[e],
                  a = i[(e + 1) % 4];
                Z.addLineSegmentSnap(t, r.x, r.y, a.x, a.y, 20, 1, n);
              }
          });
      }),
      n.get(w.Grid))
    ) {
      let n = e.get(`grid`).get(`items`),
        r = n.get(`v1`)?.get(`property`).get(`step`) || 20,
        i = n.get(`h1`)?.get(`property`).get(`step`) || 20;
      Z.addGridSnap(t, 0, 0, 10, 10, null, r, i);
    }
    if (n.get(w.Guide)) {
      let n = e.get(`guides`).get(`horizontal`),
        r = e.get(`guides`).get(`vertical`),
        o = e.get(`guides`).get(`circular`),
        s = n.valueSeq(),
        c = r.valueSeq();
      (s.forEach((e) => {
        c.forEach((n) => {
          Z.addPointSnap(t, n, e, 10, 10, $);
        });
      }),
        s.forEach((e) => Z.addLineSegmentSnap(t, 0, e, i, e, 20, 1, $)),
        c.forEach((e) => Z.addLineSegmentSnap(t, e, 0, e, a, 20, 1, $)),
        o.forEach((e) => {
          Z.addCircleSnap(
            t,
            e.get(`center`).get(`x`),
            e.get(`center`).get(`y`),
            e.get(`radius`),
            15,
            5,
            $,
          );
        }));
    }
  });
}
function Br(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0,
    a = e.children || [];
  for (let e of a) {
    if (e.tag === `Thing2D`) {
      let a = e,
        o = Number(e.x) || 0,
        s = Number(e.y) || 0,
        c = Number(a.data?.length) || 0,
        l = Number(a.data?.width) || 0;
      ((t = Math.min(t, o)),
        (n = Math.min(n, s)),
        (r = Math.max(r, o + c)),
        (i = Math.max(i, s + l)));
      continue;
    }
    if (e.tag === `Wall2D`) {
      let a = Number(e.data?.length) || 0,
        o = Number(e.x) || 0,
        s = Number(e.y) || 0,
        c = ((Number(e.rotation) || 0) * Math.PI) / 180,
        l = o + a * Math.cos(c),
        u = s + a * Math.sin(c);
      ((t = Math.min(t, o, l)),
        (n = Math.min(n, s, u)),
        (r = Math.max(r, o, l)),
        (i = Math.max(i, s, u)));
    }
  }
  return Number.isFinite(t) ? { minX: t, minY: n, maxX: r, maxY: i } : null;
}
function Vr(e) {
  let t = Br(e);
  if (!t) return [];
  let { minX: n, minY: r, maxX: i, maxY: a } = t,
    o = [
      { x: n, y: r },
      { x: i, y: r },
      { x: i, y: a },
      { x: n, y: a },
      { x: (n + i) / 2, y: r },
      { x: i, y: (r + a) / 2 },
      { x: (n + i) / 2, y: a },
      { x: n, y: (r + a) / 2 },
    ],
    s = e.localTransform;
  return o.map((e) => ({
    x: s.a * e.x + s.c * e.y + s.e,
    y: s.b * e.x + s.d * e.y + s.f,
  }));
}
function Hr(e, t, n) {
  if (!Z.isEnabled(n)) return { dx: 0, dz: 0, snap: void 0 };
  let r = Vr(t);
  if (r.length === 0) return { dx: 0, dz: 0, snap: void 0 };
  let i,
    a = 0,
    o = 0,
    s = 1 / 0;
  for (let t of r) {
    let r = Z.nearestSnap(e, t.x, t.y, n);
    r &&
      r.point.distance < s &&
      ((s = r.point.distance),
      (i = r),
      (a = r.point.x - t.x),
      (o = r.point.y - t.y));
  }
  return i ? { dx: a, dz: o, snap: i } : { dx: 0, dz: 0, snap: void 0 };
}
function Ur(e, t) {
  let n = [],
    r = [],
    i = [],
    a = e.get(`groups`).get(t);
  return (
    a &&
      a.get(`elements`).forEach((t, a) => {
        let o = e.get(`layers`).get(a);
        (t.get(`things`)?.forEach((e) => {
          n.push(e);
        }),
          t.get(`walls`)?.forEach((e) => {
            (r.push(e),
              o
                ?.get(`walls`)
                .get(e)
                ?.get(`vertexIds`)
                ?.forEach((e) => {
                  i.push(e);
                }));
          }));
      }),
    { excludeThingIds: n, excludeWallIds: r, excludeVertexIds: i }
  );
}
var Wr = `UI:HOTKEY_LIST_HEIGHT`,
  Gr = `NXTS:EXPORT_REQUEST`,
  Kr = `NXTS:EXPORT_RESPONSE`,
  qr = `NXTS:IMPORT_REQUEST`,
  Jr = `NXTS:IMPORT_RESPONSE`,
  Yr = `NXTS:FILE_OPENED`,
  Xr = `THEME:CHANGED`,
  Zr = `THEME:SET`,
  Qr = `THEME:GET_REQUEST`,
  $r = `THEME:GET_RESPONSE`,
  ei = `LANGUAGE:CHANGED`,
  ti = `LANGUAGE:SET`,
  ni = `LANGUAGE:GET_REQUEST`,
  ri = `LANGUAGE:GET_RESPONSE`,
  ii = `FONT_SIZE:CHANGED`,
  ai = `FONT_SIZE:SET`,
  oi = `FONT_SIZE:GET_REQUEST`,
  si = `FONT_SIZE:GET_RESPONSE`,
  ci = `VERSION:CHANGED`,
  li = `VERSION:GET_REQUEST`,
  ui = `VERSION:GET_RESPONSE`,
  di = `COLLAB:SCAN_REQUEST`,
  fi = `COLLAB:SCAN_RESPONSE`,
  pi = `COLLAB:PROBE_REQUEST`,
  mi = `COLLAB:PROBE_RESPONSE`,
  hi = `COLLAB:OPEN_EDITOR`,
  gi = `WINDOW:CONTROL_REQUEST`,
  _i = `WINDOW:CONTROL_RESPONSE`,
  vi = `WINDOW:DRAG_REGION`,
  yi = `EDITOR_MENU:SYNC`,
  bi = `EDITOR_MENU:ACTION`,
  xi = `WINDOW:SET_TITLE`,
  Si = `WINDOW:FULLSCREEN_CHANGED`,
  Ci = `PROJECT:GET_REQUEST`,
  wi = `PROJECT:GET_RESPONSE`,
  Ti = `PROJECT:UPDATE_REQUEST`,
  Ei = `PROJECT:UPDATE_RESPONSE`,
  Di = `ITEM:LIST_REQUEST`,
  Oi = `ITEM:LIST_RESPONSE`,
  ki = `ITEM:GET_REQUEST`,
  Ai = `ITEM:GET_RESPONSE`,
  ji = `ITEM:CREATE_REQUEST`,
  Mi = `ITEM:CREATE_RESPONSE`,
  Ni = `ITEM:DELETE_REQUEST`,
  Pi = `ITEM:DELETE_RESPONSE`,
  Fi = `PROJECT:META_CHANGED`,
  Ii = `AGENT:GET_REQUEST`,
  Li = `AGENT:GET_RESPONSE`,
  Ri = `AGENT:SET`,
  zi = `AGENT:CHANGED`,
  Bi = `AGENT:CHAT_REQUEST`,
  Vi = `AGENT:CHAT_PORT`,
  Hi = `AGENT:CHAT_DELTA`,
  Ui = `AGENT:CHAT_DONE`,
  Wi = `AGENT:CHAT_ERROR`,
  Gi = `AGENT:CHAT_ABORT`,
  Ki = `AGENT:SESSIONS_GET_REQUEST`,
  qi = `AGENT:SESSIONS_GET_RESPONSE`,
  Ji = `AGENT:SESSIONS_SET`,
  Yi = `AGENT:STREAM_GET_REQUEST`,
  Xi = `AGENT:STREAM_INFO`,
  Zi = `AGENT:NOTIFY`;
export {
  Zr as $,
  ke as $n,
  V as $t,
  Ni as A,
  mt as An,
  or as At,
  Gr as B,
  Re as Bn,
  In as Bt,
  yi as C,
  Qt as Cn,
  le as Cr,
  yr as Ct,
  ai as D,
  Pt as Dn,
  mr as Dt,
  si as E,
  zt as En,
  v as Er,
  Y as Et,
  Oi as F,
  et as Fn,
  Gn as Ft,
  Ci as G,
  T as Gn,
  wn as Gt,
  Yr as H,
  Fe as Hn,
  Nn as Ht,
  ei as I,
  nt as In,
  Fn as It,
  Ti as J,
  C as Jn,
  Sn as Jt,
  wi as K,
  Ne as Kn,
  W as Kt,
  ni as L,
  rt as Ln,
  Rn as Lt,
  ki as M,
  it as Mn,
  er as Mt,
  Ai as N,
  at as Nn,
  $n as Nt,
  ji as O,
  Ft as On,
  dr as Ot,
  Di as P,
  $e as Pn,
  Kn as Pt,
  $r as Q,
  x as Qn,
  _n as Qt,
  ri as R,
  D as Rn,
  Ln as Rt,
  bi as S,
  nn as Sn,
  de as Sr,
  br as St,
  oi as T,
  Vt as Tn,
  _e as Tr,
  hr as Tt,
  qr as U,
  Pe as Un,
  En as Ut,
  Kr as V,
  ze as Vn,
  Pn as Vt,
  Jr as W,
  E as Wn,
  G as Wt,
  Xr as X,
  S as Xn,
  H as Xt,
  Ei as Y,
  je as Yn,
  U as Yt,
  Qr as Z,
  Ae as Zn,
  vn as Zt,
  hi as _,
  It as _n,
  ge as _r,
  Z as _t,
  Wi as a,
  fn as an,
  y as ar,
  _i as at,
  di as b,
  Jt as bn,
  ce as br,
  X as bt,
  Ii as c,
  cn,
  ve as cr,
  xi as ct,
  Ki as d,
  en as dn,
  ee as dr,
  zr as dt,
  hn as en,
  Ee as er,
  Wr as et,
  qi as f,
  $t as fn,
  te as fr,
  Rr as ft,
  Xi as g,
  tn as gn,
  he as gr,
  jr as gt,
  Yi as h,
  Lt as hn,
  ae as hr,
  Q as ht,
  Ui as i,
  R as in,
  ne as ir,
  gi as it,
  Pi as j,
  pt as jn,
  ir as jt,
  Mi as k,
  ht as kn,
  fr as kt,
  Li as l,
  ln,
  ye as lr,
  Ur as lt,
  Ri as m,
  Kt as mn,
  oe as mr,
  Pr as mt,
  Gi as n,
  B as nn,
  we as nr,
  li as nt,
  Vi as o,
  sn as on,
  se as or,
  vi as ot,
  Ji as p,
  Bt as pn,
  ie as pr,
  Fr as pt,
  Fi as q,
  w as qn,
  xn as qt,
  Hi as r,
  z as rn,
  xe as rr,
  ui as rt,
  Bi as s,
  un as sn,
  be as sr,
  Si as st,
  zi as t,
  gn as tn,
  De as tr,
  ci as tt,
  Zi as u,
  Xt as un,
  me as ur,
  Hr as ut,
  pi as v,
  Rt as vn,
  ue as vr,
  kr as vt,
  ii as w,
  Wt as wn,
  re as wr,
  vr as wt,
  fi as x,
  F as xn,
  fe as xr,
  Sr as xt,
  mi as y,
  Yt as yn,
  pe as yr,
  Cr as yt,
  ti as z,
  Ve as zn,
  zn as zt,
};
