;(() => {
  var e,
    n,
    t,
    r,
    a,
    i,
    o,
    s = {
      132: (e, n, t) => {
        'use strict'
        function r(e, n) {
          const t = Object.create(null),
            r = e.split(',')
          for (let e = 0; e < r.length; e++) t[r[e]] = !0
          return n ? e => !!t[e.toLowerCase()] : e => !!t[e]
        }
        const a = r('itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly')
        function i(e) {
          return !!e || '' === e
        }
        function o(e) {
          if (x(e)) {
            const n = {}
            for (let t = 0; t < e.length; t++) {
              const r = e[t],
                a = C(r) ? c(r) : o(r)
              if (a) for (const e in a) n[e] = a[e]
            }
            return n
          }
          return C(e) || M(e) ? e : void 0
        }
        const s = /;(?![^(]*\))/g,
          l = /:(.+)/
        function c(e) {
          const n = {}
          return (
            e.split(s).forEach(e => {
              if (e) {
                const t = e.split(l)
                t.length > 1 && (n[t[0].trim()] = t[1].trim())
              }
            }),
            n
          )
        }
        function d(e) {
          let n = ''
          if (C(e)) n = e
          else if (x(e))
            for (let t = 0; t < e.length; t++) {
              const r = d(e[t])
              r && (n += r + ' ')
            }
          else if (M(e)) for (const t in e) e[t] && (n += t + ' ')
          return n.trim()
        }
        const u = e =>
            null == e
              ? ''
              : x(e) || (M(e) && (e.toString === I || !S(e.toString)))
              ? JSON.stringify(e, p, 2)
              : String(e),
          p = (e, n) =>
            n && n.__v_isRef
              ? p(e, n.value)
              : k(n)
              ? { [`Map(${n.size})`]: [...n.entries()].reduce((e, [n, t]) => ((e[`${n} =>`] = t), e), {}) }
              : O(n)
              ? { [`Set(${n.size})`]: [...n.values()] }
              : !M(n) || x(n) || D(n)
              ? n
              : String(n),
          g = {},
          f = [],
          m = () => {},
          b = () => !1,
          h = /^on[^a-z]/,
          _ = e => h.test(e),
          v = e => e.startsWith('onUpdate:'),
          y = Object.assign,
          E = (e, n) => {
            const t = e.indexOf(n)
            t > -1 && e.splice(t, 1)
          },
          w = Object.prototype.hasOwnProperty,
          N = (e, n) => w.call(e, n),
          x = Array.isArray,
          k = e => '[object Map]' === R(e),
          O = e => '[object Set]' === R(e),
          S = e => 'function' == typeof e,
          C = e => 'string' == typeof e,
          A = e => 'symbol' == typeof e,
          M = e => null !== e && 'object' == typeof e,
          T = e => M(e) && S(e.then) && S(e.catch),
          I = Object.prototype.toString,
          R = e => I.call(e),
          D = e => '[object Object]' === R(e),
          L = e => C(e) && 'NaN' !== e && '-' !== e[0] && '' + parseInt(e, 10) === e,
          B = r(
            ',key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
          ),
          $ = e => {
            const n = Object.create(null)
            return t => n[t] || (n[t] = e(t))
          },
          P = /-(\w)/g,
          F = $(e => e.replace(P, (e, n) => (n ? n.toUpperCase() : ''))),
          U = /\B([A-Z])/g,
          j = $(e => e.replace(U, '-$1').toLowerCase()),
          z = $(e => e.charAt(0).toUpperCase() + e.slice(1)),
          H = $(e => (e ? `on${z(e)}` : '')),
          K = (e, n) => !Object.is(e, n),
          q = (e, n) => {
            for (let t = 0; t < e.length; t++) e[t](n)
          },
          Z = (e, n, t) => {
            Object.defineProperty(e, n, { configurable: !0, enumerable: !1, value: t })
          },
          G = e => {
            const n = parseFloat(e)
            return isNaN(n) ? e : n
          }
        let V
        const W = () =>
          V ||
          (V =
            'undefined' != typeof globalThis
              ? globalThis
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : void 0 !== t.g
              ? t.g
              : {})
        let Q
        const X = []
        class J {
          constructor(e = !1) {
            ;(this.active = !0),
              (this.effects = []),
              (this.cleanups = []),
              !e && Q && ((this.parent = Q), (this.index = (Q.scopes || (Q.scopes = [])).push(this) - 1))
          }
          run(e) {
            if (this.active)
              try {
                return this.on(), e()
              } finally {
                this.off()
              }
          }
          on() {
            this.active && (X.push(this), (Q = this))
          }
          off() {
            this.active && (X.pop(), (Q = X[X.length - 1]))
          }
          stop(e) {
            if (this.active) {
              if (
                (this.effects.forEach(e => e.stop()),
                this.cleanups.forEach(e => e()),
                this.scopes && this.scopes.forEach(e => e.stop(!0)),
                this.parent && !e)
              ) {
                const e = this.parent.scopes.pop()
                e && e !== this && ((this.parent.scopes[this.index] = e), (e.index = this.index))
              }
              this.active = !1
            }
          }
        }
        const Y = e => {
            const n = new Set(e)
            return (n.w = 0), (n.n = 0), n
          },
          ee = e => (e.w & ae) > 0,
          ne = e => (e.n & ae) > 0,
          te = new WeakMap()
        let re = 0,
          ae = 1
        const ie = []
        let oe
        const se = Symbol(''),
          le = Symbol('')
        class ce {
          constructor(e, n = null, t) {
            ;(this.fn = e),
              (this.scheduler = n),
              (this.active = !0),
              (this.deps = []),
              (function (e, n) {
                ;(n = n || Q) && n.active && n.effects.push(e)
              })(this, t)
          }
          run() {
            if (!this.active) return this.fn()
            if (!ie.includes(this))
              try {
                return (
                  ie.push((oe = this)),
                  pe.push(ue),
                  (ue = !0),
                  (ae = 1 << ++re),
                  re <= 30
                    ? (({ deps: e }) => {
                        if (e.length) for (let n = 0; n < e.length; n++) e[n].w |= ae
                      })(this)
                    : de(this),
                  this.fn()
                )
              } finally {
                re <= 30 &&
                  (e => {
                    const { deps: n } = e
                    if (n.length) {
                      let t = 0
                      for (let r = 0; r < n.length; r++) {
                        const a = n[r]
                        ee(a) && !ne(a) ? a.delete(e) : (n[t++] = a), (a.w &= ~ae), (a.n &= ~ae)
                      }
                      n.length = t
                    }
                  })(this),
                  (ae = 1 << --re),
                  fe(),
                  ie.pop()
                const e = ie.length
                oe = e > 0 ? ie[e - 1] : void 0
              }
          }
          stop() {
            this.active && (de(this), this.onStop && this.onStop(), (this.active = !1))
          }
        }
        function de(e) {
          const { deps: n } = e
          if (n.length) {
            for (let t = 0; t < n.length; t++) n[t].delete(e)
            n.length = 0
          }
        }
        let ue = !0
        const pe = []
        function ge() {
          pe.push(ue), (ue = !1)
        }
        function fe() {
          const e = pe.pop()
          ue = void 0 === e || e
        }
        function me(e, n, t) {
          if (!be()) return
          let r = te.get(e)
          r || te.set(e, (r = new Map()))
          let a = r.get(t)
          a || r.set(t, (a = Y())), he(a)
        }
        function be() {
          return ue && void 0 !== oe
        }
        function he(e, n) {
          let t = !1
          re <= 30 ? ne(e) || ((e.n |= ae), (t = !ee(e))) : (t = !e.has(oe)), t && (e.add(oe), oe.deps.push(e))
        }
        function _e(e, n, t, r, a, i) {
          const o = te.get(e)
          if (!o) return
          let s = []
          if ('clear' === n) s = [...o.values()]
          else if ('length' === t && x(e))
            o.forEach((e, n) => {
              ;('length' === n || n >= r) && s.push(e)
            })
          else
            switch ((void 0 !== t && s.push(o.get(t)), n)) {
              case 'add':
                x(e) ? L(t) && s.push(o.get('length')) : (s.push(o.get(se)), k(e) && s.push(o.get(le)))
                break
              case 'delete':
                x(e) || (s.push(o.get(se)), k(e) && s.push(o.get(le)))
                break
              case 'set':
                k(e) && s.push(o.get(se))
            }
          if (1 === s.length) s[0] && ve(s[0])
          else {
            const e = []
            for (const n of s) n && e.push(...n)
            ve(Y(e))
          }
        }
        function ve(e, n) {
          for (const n of x(e) ? e : [...e]) (n !== oe || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run())
        }
        const ye = r('__proto__,__v_isRef,__isVue'),
          Ee = new Set(
            Object.getOwnPropertyNames(Symbol)
              .map(e => Symbol[e])
              .filter(A)
          ),
          we = Se(),
          Ne = Se(!1, !0),
          xe = Se(!0),
          ke = Oe()
        function Oe() {
          const e = {}
          return (
            ['includes', 'indexOf', 'lastIndexOf'].forEach(n => {
              e[n] = function (...e) {
                const t = dn(this)
                for (let e = 0, n = this.length; e < n; e++) me(t, 0, e + '')
                const r = t[n](...e)
                return -1 === r || !1 === r ? t[n](...e.map(dn)) : r
              }
            }),
            ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(n => {
              e[n] = function (...e) {
                ge()
                const t = dn(this)[n].apply(this, e)
                return fe(), t
              }
            }),
            e
          )
        }
        function Se(e = !1, n = !1) {
          return function (t, r, a) {
            if ('__v_isReactive' === r) return !e
            if ('__v_isReadonly' === r) return e
            if ('__v_raw' === r && a === (e ? (n ? tn : nn) : n ? en : Ye).get(t)) return t
            const i = x(t)
            if (!e && i && N(ke, r)) return Reflect.get(ke, r, a)
            const o = Reflect.get(t, r, a)
            return (A(r) ? Ee.has(r) : ye(r))
              ? o
              : (e || me(t, 0, r), n ? o : bn(o) ? (i && L(r) ? o : o.value) : M(o) ? (e ? an(o) : rn(o)) : o)
          }
        }
        function Ce(e = !1) {
          return function (n, t, r, a) {
            let i = n[t]
            if (!e && ((r = dn(r)), (i = dn(i)), !x(n) && bn(i) && !bn(r))) return (i.value = r), !0
            const o = x(n) && L(t) ? Number(t) < n.length : N(n, t),
              s = Reflect.set(n, t, r, a)
            return n === dn(a) && (o ? K(r, i) && _e(n, 'set', t, r) : _e(n, 'add', t, r)), s
          }
        }
        const Ae = {
            get: we,
            set: Ce(),
            deleteProperty: function (e, n) {
              const t = N(e, n),
                r = (e[n], Reflect.deleteProperty(e, n))
              return r && t && _e(e, 'delete', n, void 0), r
            },
            has: function (e, n) {
              const t = Reflect.has(e, n)
              return (A(n) && Ee.has(n)) || me(e, 0, n), t
            },
            ownKeys: function (e) {
              return me(e, 0, x(e) ? 'length' : se), Reflect.ownKeys(e)
            }
          },
          Me = { get: xe, set: (e, n) => !0, deleteProperty: (e, n) => !0 },
          Te = y({}, Ae, { get: Ne, set: Ce(!0) }),
          Ie = e => e,
          Re = e => Reflect.getPrototypeOf(e)
        function De(e, n, t = !1, r = !1) {
          const a = dn((e = e.__v_raw)),
            i = dn(n)
          n !== i && !t && me(a, 0, n), !t && me(a, 0, i)
          const { has: o } = Re(a),
            s = r ? Ie : t ? gn : pn
          return o.call(a, n) ? s(e.get(n)) : o.call(a, i) ? s(e.get(i)) : void (e !== a && e.get(n))
        }
        function Le(e, n = !1) {
          const t = this.__v_raw,
            r = dn(t),
            a = dn(e)
          return e !== a && !n && me(r, 0, e), !n && me(r, 0, a), e === a ? t.has(e) : t.has(e) || t.has(a)
        }
        function Be(e, n = !1) {
          return (e = e.__v_raw), !n && me(dn(e), 0, se), Reflect.get(e, 'size', e)
        }
        function $e(e) {
          e = dn(e)
          const n = dn(this)
          return Re(n).has.call(n, e) || (n.add(e), _e(n, 'add', e, e)), this
        }
        function Pe(e, n) {
          n = dn(n)
          const t = dn(this),
            { has: r, get: a } = Re(t)
          let i = r.call(t, e)
          i || ((e = dn(e)), (i = r.call(t, e)))
          const o = a.call(t, e)
          return t.set(e, n), i ? K(n, o) && _e(t, 'set', e, n) : _e(t, 'add', e, n), this
        }
        function Fe(e) {
          const n = dn(this),
            { has: t, get: r } = Re(n)
          let a = t.call(n, e)
          a || ((e = dn(e)), (a = t.call(n, e))), r && r.call(n, e)
          const i = n.delete(e)
          return a && _e(n, 'delete', e, void 0), i
        }
        function Ue() {
          const e = dn(this),
            n = 0 !== e.size,
            t = e.clear()
          return n && _e(e, 'clear', void 0, void 0), t
        }
        function je(e, n) {
          return function (t, r) {
            const a = this,
              i = a.__v_raw,
              o = dn(i),
              s = n ? Ie : e ? gn : pn
            return !e && me(o, 0, se), i.forEach((e, n) => t.call(r, s(e), s(n), a))
          }
        }
        function ze(e, n, t) {
          return function (...r) {
            const a = this.__v_raw,
              i = dn(a),
              o = k(i),
              s = 'entries' === e || (e === Symbol.iterator && o),
              l = 'keys' === e && o,
              c = a[e](...r),
              d = t ? Ie : n ? gn : pn
            return (
              !n && me(i, 0, l ? le : se),
              {
                next() {
                  const { value: e, done: n } = c.next()
                  return n ? { value: e, done: n } : { value: s ? [d(e[0]), d(e[1])] : d(e), done: n }
                },
                [Symbol.iterator]() {
                  return this
                }
              }
            )
          }
        }
        function He(e) {
          return function (...n) {
            return 'delete' !== e && this
          }
        }
        function Ke() {
          const e = {
              get(e) {
                return De(this, e)
              },
              get size() {
                return Be(this)
              },
              has: Le,
              add: $e,
              set: Pe,
              delete: Fe,
              clear: Ue,
              forEach: je(!1, !1)
            },
            n = {
              get(e) {
                return De(this, e, !1, !0)
              },
              get size() {
                return Be(this)
              },
              has: Le,
              add: $e,
              set: Pe,
              delete: Fe,
              clear: Ue,
              forEach: je(!1, !0)
            },
            t = {
              get(e) {
                return De(this, e, !0)
              },
              get size() {
                return Be(this, !0)
              },
              has(e) {
                return Le.call(this, e, !0)
              },
              add: He('add'),
              set: He('set'),
              delete: He('delete'),
              clear: He('clear'),
              forEach: je(!0, !1)
            },
            r = {
              get(e) {
                return De(this, e, !0, !0)
              },
              get size() {
                return Be(this, !0)
              },
              has(e) {
                return Le.call(this, e, !0)
              },
              add: He('add'),
              set: He('set'),
              delete: He('delete'),
              clear: He('clear'),
              forEach: je(!0, !0)
            }
          return (
            ['keys', 'values', 'entries', Symbol.iterator].forEach(a => {
              ;(e[a] = ze(a, !1, !1)), (t[a] = ze(a, !0, !1)), (n[a] = ze(a, !1, !0)), (r[a] = ze(a, !0, !0))
            }),
            [e, t, n, r]
          )
        }
        const [qe, Ze, Ge, Ve] = Ke()
        function We(e, n) {
          const t = n ? (e ? Ve : Ge) : e ? Ze : qe
          return (n, r, a) =>
            '__v_isReactive' === r
              ? !e
              : '__v_isReadonly' === r
              ? e
              : '__v_raw' === r
              ? n
              : Reflect.get(N(t, r) && r in n ? t : n, r, a)
        }
        const Qe = { get: We(!1, !1) },
          Xe = { get: We(!1, !0) },
          Je = { get: We(!0, !1) },
          Ye = new WeakMap(),
          en = new WeakMap(),
          nn = new WeakMap(),
          tn = new WeakMap()
        function rn(e) {
          return e && e.__v_isReadonly ? e : on(e, !1, Ae, Qe, Ye)
        }
        function an(e) {
          return on(e, !0, Me, Je, nn)
        }
        function on(e, n, t, r, a) {
          if (!M(e)) return e
          if (e.__v_raw && (!n || !e.__v_isReactive)) return e
          const i = a.get(e)
          if (i) return i
          const o = (function (e) {
            return e.__v_skip || !Object.isExtensible(e)
              ? 0
              : (function (e) {
                  switch (e) {
                    case 'Object':
                    case 'Array':
                      return 1
                    case 'Map':
                    case 'Set':
                    case 'WeakMap':
                    case 'WeakSet':
                      return 2
                    default:
                      return 0
                  }
                })((e => R(e).slice(8, -1))(e))
          })(e)
          if (0 === o) return e
          const s = new Proxy(e, 2 === o ? r : t)
          return a.set(e, s), s
        }
        function sn(e) {
          return ln(e) ? sn(e.__v_raw) : !(!e || !e.__v_isReactive)
        }
        function ln(e) {
          return !(!e || !e.__v_isReadonly)
        }
        function cn(e) {
          return sn(e) || ln(e)
        }
        function dn(e) {
          const n = e && e.__v_raw
          return n ? dn(n) : e
        }
        function un(e) {
          return Z(e, '__v_skip', !0), e
        }
        const pn = e => (M(e) ? rn(e) : e),
          gn = e => (M(e) ? an(e) : e)
        function fn(e) {
          be() && ((e = dn(e)).dep || (e.dep = Y()), he(e.dep))
        }
        function mn(e, n) {
          ;(e = dn(e)).dep && ve(e.dep)
        }
        function bn(e) {
          return Boolean(e && !0 === e.__v_isRef)
        }
        class hn {
          constructor(e, n) {
            ;(this._shallow = n),
              (this.dep = void 0),
              (this.__v_isRef = !0),
              (this._rawValue = n ? e : dn(e)),
              (this._value = n ? e : pn(e))
          }
          get value() {
            return fn(this), this._value
          }
          set value(e) {
            ;(e = this._shallow ? e : dn(e)),
              K(e, this._rawValue) && ((this._rawValue = e), (this._value = this._shallow ? e : pn(e)), mn(this))
          }
        }
        const _n = {
          get: (e, n, t) => {
            return bn((r = Reflect.get(e, n, t))) ? r.value : r
            var r
          },
          set: (e, n, t, r) => {
            const a = e[n]
            return bn(a) && !bn(t) ? ((a.value = t), !0) : Reflect.set(e, n, t, r)
          }
        }
        function vn(e) {
          return sn(e) ? e : new Proxy(e, _n)
        }
        class yn {
          constructor(e, n, t) {
            ;(this._setter = n),
              (this.dep = void 0),
              (this._dirty = !0),
              (this.__v_isRef = !0),
              (this.effect = new ce(e, () => {
                this._dirty || ((this._dirty = !0), mn(this))
              })),
              (this.__v_isReadonly = t)
          }
          get value() {
            const e = dn(this)
            return fn(e), e._dirty && ((e._dirty = !1), (e._value = e.effect.run())), e._value
          }
          set value(e) {
            this._setter(e)
          }
        }
        function En(e, n) {
          let t, r
          const a = S(e)
          return a ? ((t = e), (r = m)) : ((t = e.get), (r = e.set)), new yn(t, r, a || !r)
        }
        Promise.resolve(), new Set(), new Map()
        let wn,
          Nn = []
        function xn(e, ...n) {
          wn ? wn.emit(e, ...n) : Nn.push({ event: e, args: n })
        }
        function kn(e, n) {
          ;(wn = e),
            wn
              ? ((wn.enabled = !0), Nn.forEach(({ event: e, args: n }) => wn.emit(e, ...n)), (Nn = []))
              : ((n.__VUE_DEVTOOLS_HOOK_REPLAY__ = n.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(e => {
                  kn(e, n)
                }),
                setTimeout(() => {
                  Nn = []
                }, 3e3))
        }
        const On = An('component:added'),
          Sn = An('component:updated'),
          Cn = An('component:removed')
        function An(e) {
          return n => {
            xn(e, n.appContext.app, n.uid, n.parent ? n.parent.uid : void 0, n)
          }
        }
        function Mn(e, n, ...t) {
          const r = e.vnode.props || g
          let a = t
          const i = n.startsWith('update:'),
            o = i && n.slice(7)
          if (o && o in r) {
            const e = `${'modelValue' === o ? 'model' : o}Modifiers`,
              { number: n, trim: i } = r[e] || g
            i ? (a = t.map(e => e.trim())) : n && (a = t.map(G))
          }
          let s
          __VUE_PROD_DEVTOOLS__ &&
            (function (e, n, t) {
              xn('component:emit', e.appContext.app, e, n, t)
            })(e, n, a)
          let l = r[(s = H(n))] || r[(s = H(F(n)))]
          !l && i && (l = r[(s = H(j(n)))]), l && Pr(l, e, 6, a)
          const c = r[s + 'Once']
          if (c) {
            if (e.emitted) {
              if (e.emitted[s]) return
            } else e.emitted = {}
            ;(e.emitted[s] = !0), Pr(c, e, 6, a)
          }
        }
        function Tn(e, n, t = !1) {
          const r = n.emitsCache,
            a = r.get(e)
          if (void 0 !== a) return a
          const i = e.emits
          let o = {},
            s = !1
          if (__VUE_OPTIONS_API__ && !S(e)) {
            const r = e => {
              const t = Tn(e, n, !0)
              t && ((s = !0), y(o, t))
            }
            !t && n.mixins.length && n.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r)
          }
          return i || s ? (x(i) ? i.forEach(e => (o[e] = null)) : y(o, i), r.set(e, o), o) : (r.set(e, null), null)
        }
        function In(e, n) {
          return (
            !(!e || !_(n)) &&
            ((n = n.slice(2).replace(/Once$/, '')), N(e, n[0].toLowerCase() + n.slice(1)) || N(e, j(n)) || N(e, n))
          )
        }
        let Rn = null,
          Dn = null
        function Ln(e) {
          const n = Rn
          return (Rn = e), (Dn = (e && e.type.__scopeId) || null), n
        }
        function Bn(e, n = Rn, t) {
          if (!n) return e
          if (e._n) return e
          const r = (...t) => {
            r._d && ar(-1)
            const a = Ln(n),
              i = e(...t)
            return Ln(a), r._d && ar(1), __VUE_PROD_DEVTOOLS__ && Sn(n), i
          }
          return (r._n = !0), (r._c = !0), (r._d = !0), r
        }
        function $n(e) {
          const {
            type: n,
            vnode: t,
            proxy: r,
            withProxy: a,
            props: i,
            propsOptions: [o],
            slots: s,
            attrs: l,
            emit: c,
            render: d,
            renderCache: u,
            data: p,
            setupState: g,
            ctx: f,
            inheritAttrs: m
          } = e
          let b, h
          const _ = Ln(e)
          try {
            if (4 & t.shapeFlag) {
              const e = a || r
              ;(b = _r(d.call(e, e, u, i, g, p, f))), (h = l)
            } else {
              const e = n
              ;(b = _r(e.length > 1 ? e(i, { attrs: l, slots: s, emit: c }) : e(i, null))), (h = n.props ? l : Pn(l))
            }
          } catch (n) {
            ;(er.length = 0), Fr(n, e, 1), (b = fr(Jt))
          }
          let y = b
          if (h && !1 !== m) {
            const e = Object.keys(h),
              { shapeFlag: n } = y
            e.length && 7 & n && (o && e.some(v) && (h = Fn(h, o)), (y = mr(y, h)))
          }
          return (
            t.dirs && (y.dirs = y.dirs ? y.dirs.concat(t.dirs) : t.dirs),
            t.transition && (y.transition = t.transition),
            (b = y),
            Ln(_),
            b
          )
        }
        const Pn = e => {
            let n
            for (const t in e) ('class' === t || 'style' === t || _(t)) && ((n || (n = {}))[t] = e[t])
            return n
          },
          Fn = (e, n) => {
            const t = {}
            for (const r in e) (v(r) && r.slice(9) in n) || (t[r] = e[r])
            return t
          }
        function Un(e, n, t) {
          const r = Object.keys(n)
          if (r.length !== Object.keys(e).length) return !0
          for (let a = 0; a < r.length; a++) {
            const i = r[a]
            if (n[i] !== e[i] && !In(t, i)) return !0
          }
          return !1
        }
        function jn(e, n, t = !1) {
          const r = Cr || Rn
          if (r) {
            const a = null == r.parent ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides
            if (a && e in a) return a[e]
            if (arguments.length > 1) return t && S(n) ? n.call(r.proxy) : n
          }
        }
        const zn = [Function, Array],
          Hn = {
            name: 'BaseTransition',
            props: {
              mode: String,
              appear: Boolean,
              persisted: Boolean,
              onBeforeEnter: zn,
              onEnter: zn,
              onAfterEnter: zn,
              onEnterCancelled: zn,
              onBeforeLeave: zn,
              onLeave: zn,
              onAfterLeave: zn,
              onLeaveCancelled: zn,
              onBeforeAppear: zn,
              onAppear: zn,
              onAfterAppear: zn,
              onAppearCancelled: zn
            },
            setup(e, { slots: n }) {
              const t = Ar(),
                r = (function () {
                  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
                  return (
                    ot(() => {
                      e.isMounted = !0
                    }),
                    ct(() => {
                      e.isUnmounting = !0
                    }),
                    e
                  )
                })()
              let a
              return () => {
                const i = n.default && Qn(n.default(), !0)
                if (!i || !i.length) return
                const o = dn(e),
                  { mode: s } = o,
                  l = i[0]
                if (r.isLeaving) return Gn(l)
                const c = Vn(l)
                if (!c) return Gn(l)
                const d = Zn(c, o, r, t)
                Wn(c, d)
                const u = t.subTree,
                  p = u && Vn(u)
                let g = !1
                const { getTransitionKey: f } = c.type
                if (f) {
                  const e = f()
                  void 0 === a ? (a = e) : e !== a && ((a = e), (g = !0))
                }
                if (p && p.type !== Jt && (!cr(c, p) || g)) {
                  const e = Zn(p, o, r, t)
                  if ((Wn(p, e), 'out-in' === s))
                    return (
                      (r.isLeaving = !0),
                      (e.afterLeave = () => {
                        ;(r.isLeaving = !1), t.update()
                      }),
                      Gn(l)
                    )
                  'in-out' === s &&
                    c.type !== Jt &&
                    (e.delayLeave = (e, n, t) => {
                      ;(qn(r, p)[String(p.key)] = p),
                        (e._leaveCb = () => {
                          n(), (e._leaveCb = void 0), delete d.delayedLeave
                        }),
                        (d.delayedLeave = t)
                    })
                }
                return l
              }
            }
          },
          Kn = Hn
        function qn(e, n) {
          const { leavingVNodes: t } = e
          let r = t.get(n.type)
          return r || ((r = Object.create(null)), t.set(n.type, r)), r
        }
        function Zn(e, n, t, r) {
          const {
              appear: a,
              mode: i,
              persisted: o = !1,
              onBeforeEnter: s,
              onEnter: l,
              onAfterEnter: c,
              onEnterCancelled: d,
              onBeforeLeave: u,
              onLeave: p,
              onAfterLeave: g,
              onLeaveCancelled: f,
              onBeforeAppear: m,
              onAppear: b,
              onAfterAppear: h,
              onAppearCancelled: _
            } = n,
            v = String(e.key),
            y = qn(t, e),
            E = (e, n) => {
              e && Pr(e, r, 9, n)
            },
            w = {
              mode: i,
              persisted: o,
              beforeEnter(n) {
                let r = s
                if (!t.isMounted) {
                  if (!a) return
                  r = m || s
                }
                n._leaveCb && n._leaveCb(!0)
                const i = y[v]
                i && cr(e, i) && i.el._leaveCb && i.el._leaveCb(), E(r, [n])
              },
              enter(e) {
                let n = l,
                  r = c,
                  i = d
                if (!t.isMounted) {
                  if (!a) return
                  ;(n = b || l), (r = h || c), (i = _ || d)
                }
                let o = !1
                const s = (e._enterCb = n => {
                  o || ((o = !0), E(n ? i : r, [e]), w.delayedLeave && w.delayedLeave(), (e._enterCb = void 0))
                })
                n ? (n(e, s), n.length <= 1 && s()) : s()
              },
              leave(n, r) {
                const a = String(e.key)
                if ((n._enterCb && n._enterCb(!0), t.isUnmounting)) return r()
                E(u, [n])
                let i = !1
                const o = (n._leaveCb = t => {
                  i || ((i = !0), r(), E(t ? f : g, [n]), (n._leaveCb = void 0), y[a] === e && delete y[a])
                })
                ;(y[a] = e), p ? (p(n, o), p.length <= 1 && o()) : o()
              },
              clone: e => Zn(e, n, t, r)
            }
          return w
        }
        function Gn(e) {
          if (Jn(e)) return ((e = mr(e)).children = null), e
        }
        function Vn(e) {
          return Jn(e) ? (e.children ? e.children[0] : void 0) : e
        }
        function Wn(e, n) {
          6 & e.shapeFlag && e.component
            ? Wn(e.component.subTree, n)
            : 128 & e.shapeFlag
            ? ((e.ssContent.transition = n.clone(e.ssContent)), (e.ssFallback.transition = n.clone(e.ssFallback)))
            : (e.transition = n)
        }
        function Qn(e, n = !1) {
          let t = [],
            r = 0
          for (let a = 0; a < e.length; a++) {
            const i = e[a]
            i.type === Qt
              ? (128 & i.patchFlag && r++, (t = t.concat(Qn(i.children, n))))
              : (n || i.type !== Jt) && t.push(i)
          }
          if (r > 1) for (let e = 0; e < t.length; e++) t[e].patchFlag = -2
          return t
        }
        const Xn = e => !!e.type.__asyncLoader,
          Jn = e => e.type.__isKeepAlive
        function Yn(e, n) {
          nt(e, 'a', n)
        }
        function et(e, n) {
          nt(e, 'da', n)
        }
        function nt(e, n, t = Cr) {
          const r =
            e.__wdc ||
            (e.__wdc = () => {
              let n = t
              for (; n; ) {
                if (n.isDeactivated) return
                n = n.parent
              }
              e()
            })
          if ((rt(n, r, t), t)) {
            let e = t.parent
            for (; e && e.parent; ) Jn(e.parent.vnode) && tt(r, n, t, e), (e = e.parent)
          }
        }
        function tt(e, n, t, r) {
          const a = rt(n, e, r, !0)
          dt(() => {
            E(r[n], a)
          }, t)
        }
        function rt(e, n, t = Cr, r = !1) {
          if (t) {
            const a = t[e] || (t[e] = []),
              i =
                n.__weh ||
                (n.__weh = (...r) => {
                  if (t.isUnmounted) return
                  ge(), Mr(t)
                  const a = Pr(n, t, e, r)
                  return Tr(), fe(), a
                })
            return r ? a.unshift(i) : a.push(i), i
          }
        }
        RegExp, RegExp
        const at =
            e =>
            (n, t = Cr) =>
              (!Rr || 'sp' === e) && rt(e, n, t),
          it = at('bm'),
          ot = at('m'),
          st = at('bu'),
          lt = at('u'),
          ct = at('bum'),
          dt = at('um'),
          ut = at('sp'),
          pt = at('rtg'),
          gt = at('rtc')
        function ft(e, n = Cr) {
          rt('ec', e, n)
        }
        let mt = !0
        function bt(e, n, t) {
          Pr(x(e) ? e.map(e => e.bind(n.proxy)) : e.bind(n.proxy), n, t)
        }
        function ht(e, n, t, r) {
          const a = r.includes('.') ? ua(t, r) : () => t[r]
          if (C(e)) {
            const t = n[e]
            S(t) && la(a, t)
          } else if (S(e)) la(a, e.bind(t))
          else if (M(e))
            if (x(e)) e.forEach(e => ht(e, n, t, r))
            else {
              const r = S(e.handler) ? e.handler.bind(t) : n[e.handler]
              S(r) && la(a, r, e)
            }
        }
        function _t(e) {
          const n = e.type,
            { mixins: t, extends: r } = n,
            {
              mixins: a,
              optionsCache: i,
              config: { optionMergeStrategies: o }
            } = e.appContext,
            s = i.get(n)
          let l
          return (
            s
              ? (l = s)
              : a.length || t || r
              ? ((l = {}), a.length && a.forEach(e => vt(l, e, o, !0)), vt(l, n, o))
              : (l = n),
            i.set(n, l),
            l
          )
        }
        function vt(e, n, t, r = !1) {
          const { mixins: a, extends: i } = n
          i && vt(e, i, t, !0), a && a.forEach(n => vt(e, n, t, !0))
          for (const a in n)
            if (r && 'expose' === a);
            else {
              const r = yt[a] || (t && t[a])
              e[a] = r ? r(e[a], n[a]) : n[a]
            }
          return e
        }
        const yt = {
          data: Et,
          props: xt,
          emits: xt,
          methods: xt,
          computed: xt,
          beforeCreate: Nt,
          created: Nt,
          beforeMount: Nt,
          mounted: Nt,
          beforeUpdate: Nt,
          updated: Nt,
          beforeDestroy: Nt,
          beforeUnmount: Nt,
          destroyed: Nt,
          unmounted: Nt,
          activated: Nt,
          deactivated: Nt,
          errorCaptured: Nt,
          serverPrefetch: Nt,
          components: xt,
          directives: xt,
          watch: function (e, n) {
            if (!e) return n
            if (!n) return e
            const t = y(Object.create(null), e)
            for (const r in n) t[r] = Nt(e[r], n[r])
            return t
          },
          provide: Et,
          inject: function (e, n) {
            return xt(wt(e), wt(n))
          }
        }
        function Et(e, n) {
          return n
            ? e
              ? function () {
                  return y(S(e) ? e.call(this, this) : e, S(n) ? n.call(this, this) : n)
                }
              : n
            : e
        }
        function wt(e) {
          if (x(e)) {
            const n = {}
            for (let t = 0; t < e.length; t++) n[e[t]] = e[t]
            return n
          }
          return e
        }
        function Nt(e, n) {
          return e ? [...new Set([].concat(e, n))] : n
        }
        function xt(e, n) {
          return e ? y(y(Object.create(null), e), n) : n
        }
        function kt(e, n, t, r) {
          const [a, i] = e.propsOptions
          let o,
            s = !1
          if (n)
            for (let l in n) {
              if (B(l)) continue
              const c = n[l]
              let d
              a && N(a, (d = F(l)))
                ? i && i.includes(d)
                  ? ((o || (o = {}))[d] = c)
                  : (t[d] = c)
                : In(e.emitsOptions, l) || (c !== r[l] && ((r[l] = c), (s = !0)))
            }
          if (i) {
            const n = dn(t),
              r = o || g
            for (let o = 0; o < i.length; o++) {
              const s = i[o]
              t[s] = Ot(a, n, s, r[s], e, !N(r, s))
            }
          }
          return s
        }
        function Ot(e, n, t, r, a, i) {
          const o = e[t]
          if (null != o) {
            const e = N(o, 'default')
            if (e && void 0 === r) {
              const e = o.default
              if (o.type !== Function && S(e)) {
                const { propsDefaults: i } = a
                t in i ? (r = i[t]) : (Mr(a), (r = i[t] = e.call(null, n)), Tr())
              } else r = e
            }
            o[0] && (i && !e ? (r = !1) : !o[1] || ('' !== r && r !== j(t)) || (r = !0))
          }
          return r
        }
        function St(e, n, t = !1) {
          const r = n.propsCache,
            a = r.get(e)
          if (a) return a
          const i = e.props,
            o = {},
            s = []
          let l = !1
          if (__VUE_OPTIONS_API__ && !S(e)) {
            const r = e => {
              l = !0
              const [t, r] = St(e, n, !0)
              y(o, t), r && s.push(...r)
            }
            !t && n.mixins.length && n.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r)
          }
          if (!i && !l) return r.set(e, f), f
          if (x(i))
            for (let e = 0; e < i.length; e++) {
              const n = F(i[e])
              Ct(n) && (o[n] = g)
            }
          else if (i)
            for (const e in i) {
              const n = F(e)
              if (Ct(n)) {
                const t = i[e],
                  r = (o[n] = x(t) || S(t) ? { type: t } : t)
                if (r) {
                  const e = Tt(Boolean, r.type),
                    t = Tt(String, r.type)
                  ;(r[0] = e > -1), (r[1] = t < 0 || e < t), (e > -1 || N(r, 'default')) && s.push(n)
                }
              }
            }
          const c = [o, s]
          return r.set(e, c), c
        }
        function Ct(e) {
          return '$' !== e[0]
        }
        function At(e) {
          const n = e && e.toString().match(/^\s*function (\w+)/)
          return n ? n[1] : null === e ? 'null' : ''
        }
        function Mt(e, n) {
          return At(e) === At(n)
        }
        function Tt(e, n) {
          return x(n) ? n.findIndex(n => Mt(n, e)) : S(n) && Mt(n, e) ? 0 : -1
        }
        const It = e => '_' === e[0] || '$stable' === e,
          Rt = e => (x(e) ? e.map(_r) : [_r(e)]),
          Dt = (e, n, t) => {
            const r = Bn((...e) => Rt(n(...e)), t)
            return (r._c = !1), r
          },
          Lt = (e, n, t) => {
            const r = e._ctx
            for (const t in e) {
              if (It(t)) continue
              const a = e[t]
              if (S(a)) n[t] = Dt(0, a, r)
              else if (null != a) {
                const e = Rt(a)
                n[t] = () => e
              }
            }
          },
          Bt = (e, n) => {
            const t = Rt(n)
            e.slots.default = () => t
          }
        function $t(e, n, t, r) {
          const a = e.dirs,
            i = n && n.dirs
          for (let o = 0; o < a.length; o++) {
            const s = a[o]
            i && (s.oldValue = i[o].value)
            let l = s.dir[r]
            l && (ge(), Pr(l, t, 8, [e.el, s, e, n]), fe())
          }
        }
        function Pt() {
          return {
            app: null,
            config: {
              isNativeTag: b,
              performance: !1,
              globalProperties: {},
              optionMergeStrategies: {},
              errorHandler: void 0,
              warnHandler: void 0,
              compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap(),
            propsCache: new WeakMap(),
            emitsCache: new WeakMap()
          }
        }
        let Ft = 0
        function Ut(e, n) {
          return function (t, r = null) {
            null == r || M(r) || (r = null)
            const a = Pt(),
              i = new Set()
            let o = !1
            const s = (a.app = {
              _uid: Ft++,
              _component: t,
              _props: r,
              _container: null,
              _context: a,
              _instance: null,
              version: fa,
              get config() {
                return a.config
              },
              set config(e) {},
              use: (e, ...n) => (
                i.has(e) || (e && S(e.install) ? (i.add(e), e.install(s, ...n)) : S(e) && (i.add(e), e(s, ...n))), s
              ),
              mixin: e => (__VUE_OPTIONS_API__ && (a.mixins.includes(e) || a.mixins.push(e)), s),
              component: (e, n) => (n ? ((a.components[e] = n), s) : a.components[e]),
              directive: (e, n) => (n ? ((a.directives[e] = n), s) : a.directives[e]),
              mount(i, l, c) {
                if (!o) {
                  const d = fr(t, r)
                  return (
                    (d.appContext = a),
                    l && n ? n(d, i) : e(d, i, c),
                    (o = !0),
                    (s._container = i),
                    (i.__vue_app__ = s),
                    __VUE_PROD_DEVTOOLS__ &&
                      ((s._instance = d.component),
                      (function (e, n) {
                        xn('app:init', e, n, { Fragment: Qt, Text: Xt, Comment: Jt, Static: Yt })
                      })(s, fa)),
                    Br(d.component) || d.component.proxy
                  )
                }
              },
              unmount() {
                o &&
                  (e(null, s._container),
                  __VUE_PROD_DEVTOOLS__ &&
                    ((s._instance = null),
                    (function (e) {
                      xn('app:unmount', e)
                    })(s)),
                  delete s._container.__vue_app__)
              },
              provide: (e, n) => ((a.provides[e] = n), s)
            })
            return s
          }
        }
        const jt = function (e, n) {
          n && n.pendingBranch ? (x(e) ? n.effects.push(...e) : n.effects.push(e)) : ta(e, Vr, Gr, Wr)
        }
        function zt(e, n) {
          'boolean' != typeof __VUE_OPTIONS_API__ && (W().__VUE_OPTIONS_API__ = !0),
            'boolean' != typeof __VUE_PROD_DEVTOOLS__ && (W().__VUE_PROD_DEVTOOLS__ = !1)
          const t = W()
          ;(t.__VUE__ = !0), __VUE_PROD_DEVTOOLS__ && kn(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t)
          const {
              insert: r,
              remove: a,
              patchProp: i,
              createElement: o,
              createText: s,
              createComment: l,
              setText: c,
              setElementText: d,
              parentNode: u,
              nextSibling: p,
              setScopeId: b = m,
              cloneNode: h,
              insertStaticContent: _
            } = e,
            v = (e, n, t, r = null, a = null, i = null, o = !1, s = null, l = !!n.dynamicChildren) => {
              if (e === n) return
              e && !cr(e, n) && ((r = ne(e)), V(e, a, i, !0), (e = null)),
                -2 === n.patchFlag && ((l = !1), (n.dynamicChildren = null))
              const { type: c, ref: d, shapeFlag: u } = n
              switch (c) {
                case Xt:
                  E(e, n, t, r)
                  break
                case Jt:
                  w(e, n, t, r)
                  break
                case Yt:
                  null == e && x(n, t, r, o)
                  break
                case Qt:
                  R(e, n, t, r, a, i, o, s, l)
                  break
                default:
                  1 & u
                    ? k(e, n, t, r, a, i, o, s, l)
                    : 6 & u
                    ? D(e, n, t, r, a, i, o, s, l)
                    : (64 & u || 128 & u) && c.process(e, n, t, r, a, i, o, s, l, re)
              }
              null != d && a && Ht(d, e && e.ref, i, n || e, !n)
            },
            E = (e, n, t, a) => {
              if (null == e) r((n.el = s(n.children)), t, a)
              else {
                const t = (n.el = e.el)
                n.children !== e.children && c(t, n.children)
              }
            },
            w = (e, n, t, a) => {
              null == e ? r((n.el = l(n.children || '')), t, a) : (n.el = e.el)
            },
            x = (e, n, t, r) => {
              ;[e.el, e.anchor] = _(e.children, n, t, r)
            },
            k = (e, n, t, r, a, i, o, s, l) => {
              ;(o = o || 'svg' === n.type), null == e ? O(n, t, r, a, i, o, s, l) : A(e, n, a, i, o, s, l)
            },
            O = (e, n, t, a, s, l, c, u) => {
              let p, g
              const { type: f, props: m, shapeFlag: b, transition: _, patchFlag: v, dirs: y } = e
              if (e.el && void 0 !== h && -1 === v) p = e.el = h(e.el)
              else {
                if (
                  ((p = e.el = o(e.type, l, m && m.is, m)),
                  8 & b ? d(p, e.children) : 16 & b && C(e.children, p, null, a, s, l && 'foreignObject' !== f, c, u),
                  y && $t(e, null, a, 'created'),
                  m)
                ) {
                  for (const n in m) 'value' === n || B(n) || i(p, n, null, m[n], l, e.children, a, s, ee)
                  'value' in m && i(p, 'value', null, m.value), (g = m.onVnodeBeforeMount) && Kt(g, a, e)
                }
                S(p, e, e.scopeId, c, a)
              }
              __VUE_PROD_DEVTOOLS__ &&
                (Object.defineProperty(p, '__vnode', { value: e, enumerable: !1 }),
                Object.defineProperty(p, '__vueParentComponent', { value: a, enumerable: !1 })),
                y && $t(e, null, a, 'beforeMount')
              const E = (!s || (s && !s.pendingBranch)) && _ && !_.persisted
              E && _.beforeEnter(p),
                r(p, n, t),
                ((g = m && m.onVnodeMounted) || E || y) &&
                  jt(() => {
                    g && Kt(g, a, e), E && _.enter(p), y && $t(e, null, a, 'mounted')
                  }, s)
            },
            S = (e, n, t, r, a) => {
              if ((t && b(e, t), r)) for (let n = 0; n < r.length; n++) b(e, r[n])
              if (a && n === a.subTree) {
                const n = a.vnode
                S(e, n, n.scopeId, n.slotScopeIds, a.parent)
              }
            },
            C = (e, n, t, r, a, i, o, s, l = 0) => {
              for (let c = l; c < e.length; c++) {
                const l = (e[c] = s ? vr(e[c]) : _r(e[c]))
                v(null, l, n, t, r, a, i, o, s)
              }
            },
            A = (e, n, t, r, a, o, s) => {
              const l = (n.el = e.el)
              let { patchFlag: c, dynamicChildren: u, dirs: p } = n
              c |= 16 & e.patchFlag
              const f = e.props || g,
                m = n.props || g
              let b
              ;(b = m.onVnodeBeforeUpdate) && Kt(b, t, n, e), p && $t(n, e, t, 'beforeUpdate')
              const h = a && 'foreignObject' !== n.type
              if ((u ? M(e.dynamicChildren, u, l, t, r, h, o) : s || z(e, n, l, null, t, r, h, o, !1), c > 0)) {
                if (16 & c) I(l, n, f, m, t, r, a)
                else if (
                  (2 & c && f.class !== m.class && i(l, 'class', null, m.class, a),
                  4 & c && i(l, 'style', f.style, m.style, a),
                  8 & c)
                ) {
                  const o = n.dynamicProps
                  for (let n = 0; n < o.length; n++) {
                    const s = o[n],
                      c = f[s],
                      d = m[s]
                    ;(d === c && 'value' !== s) || i(l, s, c, d, a, e.children, t, r, ee)
                  }
                }
                1 & c && e.children !== n.children && d(l, n.children)
              } else s || null != u || I(l, n, f, m, t, r, a)
              ;((b = m.onVnodeUpdated) || p) &&
                jt(() => {
                  b && Kt(b, t, n, e), p && $t(n, e, t, 'updated')
                }, r)
            },
            M = (e, n, t, r, a, i, o) => {
              for (let s = 0; s < n.length; s++) {
                const l = e[s],
                  c = n[s],
                  d = l.el && (l.type === Qt || !cr(l, c) || 70 & l.shapeFlag) ? u(l.el) : t
                v(l, c, d, null, r, a, i, o, !0)
              }
            },
            I = (e, n, t, r, a, o, s) => {
              if (t !== r) {
                for (const l in r) {
                  if (B(l)) continue
                  const c = r[l],
                    d = t[l]
                  c !== d && 'value' !== l && i(e, l, d, c, s, n.children, a, o, ee)
                }
                if (t !== g) for (const l in t) B(l) || l in r || i(e, l, t[l], null, s, n.children, a, o, ee)
                'value' in r && i(e, 'value', t.value, r.value)
              }
            },
            R = (e, n, t, a, i, o, l, c, d) => {
              const u = (n.el = e ? e.el : s('')),
                p = (n.anchor = e ? e.anchor : s(''))
              let { patchFlag: g, dynamicChildren: f, slotScopeIds: m } = n
              m && (c = c ? c.concat(m) : m),
                null == e
                  ? (r(u, t, a), r(p, t, a), C(n.children, t, p, i, o, l, c, d))
                  : g > 0 && 64 & g && f && e.dynamicChildren
                  ? (M(e.dynamicChildren, f, t, i, o, l, c), (null != n.key || (i && n === i.subTree)) && qt(e, n, !0))
                  : z(e, n, t, p, i, o, l, c, d)
            },
            D = (e, n, t, r, a, i, o, s, l) => {
              ;(n.slotScopeIds = s),
                null == e ? (512 & n.shapeFlag ? a.ctx.activate(n, t, r, o, l) : L(n, t, r, a, i, o, l)) : $(e, n, l)
            },
            L = (e, n, t, r, a, i, o) => {
              const s = (e.component = (function (e, n, t) {
                const r = e.type,
                  a = (n ? n.appContext : e.appContext) || Or,
                  i = {
                    uid: Sr++,
                    vnode: e,
                    type: r,
                    parent: n,
                    appContext: a,
                    root: null,
                    next: null,
                    subTree: null,
                    update: null,
                    scope: new J(!0),
                    render: null,
                    proxy: null,
                    exposed: null,
                    exposeProxy: null,
                    withProxy: null,
                    provides: n ? n.provides : Object.create(a.provides),
                    accessCache: null,
                    renderCache: [],
                    components: null,
                    directives: null,
                    propsOptions: St(r, a),
                    emitsOptions: Tn(r, a),
                    emit: null,
                    emitted: null,
                    propsDefaults: g,
                    inheritAttrs: r.inheritAttrs,
                    ctx: g,
                    data: g,
                    props: g,
                    attrs: g,
                    slots: g,
                    refs: g,
                    setupState: g,
                    setupContext: null,
                    suspense: t,
                    suspenseId: t ? t.pendingId : 0,
                    asyncDep: null,
                    asyncResolved: !1,
                    isMounted: !1,
                    isUnmounted: !1,
                    isDeactivated: !1,
                    bc: null,
                    c: null,
                    bm: null,
                    m: null,
                    bu: null,
                    u: null,
                    um: null,
                    bum: null,
                    da: null,
                    a: null,
                    rtg: null,
                    rtc: null,
                    ec: null,
                    sp: null
                  }
                return (i.ctx = { _: i }), (i.root = n ? n.root : i), (i.emit = Mn.bind(null, i)), e.ce && e.ce(i), i
              })(e, r, a))
              if (
                (Jn(e) && (s.ctx.renderer = re),
                (function (e, n = !1) {
                  Rr = n
                  const { props: t, children: r } = e.vnode,
                    a = Ir(e)
                  ;(function (e, n, t, r = !1) {
                    const a = {},
                      i = {}
                    Z(i, dr, 1), (e.propsDefaults = Object.create(null)), kt(e, n, a, i)
                    for (const n in e.propsOptions[0]) n in a || (a[n] = void 0)
                    t ? (e.props = r ? a : on(a, !1, Te, Xe, en)) : e.type.props ? (e.props = a) : (e.props = i),
                      (e.attrs = i)
                  })(e, t, a, n),
                    ((e, n) => {
                      if (32 & e.vnode.shapeFlag) {
                        const t = n._
                        t ? ((e.slots = dn(n)), Z(n, '_', t)) : Lt(n, (e.slots = {}))
                      } else (e.slots = {}), n && Bt(e, n)
                      Z(e.slots, dr, 1)
                    })(e, r)
                  const i = a
                    ? (function (e, n) {
                        const t = e.type
                        ;(e.accessCache = Object.create(null)), (e.proxy = un(new Proxy(e.ctx, kr)))
                        const { setup: r } = t
                        if (r) {
                          const t = (e.setupContext =
                            r.length > 1
                              ? (function (e) {
                                  const n = n => {
                                    e.exposed = n || {}
                                  }
                                  let t
                                  return {
                                    get attrs() {
                                      return (
                                        t ||
                                        (t = (function (e) {
                                          return new Proxy(e.attrs, { get: (n, t) => (me(e, 0, '$attrs'), n[t]) })
                                        })(e))
                                      )
                                    },
                                    slots: e.slots,
                                    emit: e.emit,
                                    expose: n
                                  }
                                })(e)
                              : null)
                          Mr(e), ge()
                          const a = $r(r, e, 0, [e.props, t])
                          if ((fe(), Tr(), T(a))) {
                            if ((a.then(Tr, Tr), n))
                              return a
                                .then(t => {
                                  Dr(e, t, n)
                                })
                                .catch(n => {
                                  Fr(n, e, 0)
                                })
                            e.asyncDep = a
                          } else Dr(e, a, n)
                        } else Lr(e, n)
                      })(e, n)
                    : void 0
                  Rr = !1
                })(s),
                s.asyncDep)
              ) {
                if ((a && a.registerDep(s, P), !e.el)) {
                  const e = (s.subTree = fr(Jt))
                  w(null, e, n, t)
                }
              } else P(s, e, n, t, a, i, o)
            },
            $ = (e, n, t) => {
              const r = (n.component = e.component)
              if (
                (function (e, n, t) {
                  const { props: r, children: a, component: i } = e,
                    { props: o, children: s, patchFlag: l } = n,
                    c = i.emitsOptions
                  if (n.dirs || n.transition) return !0
                  if (!(t && l >= 0))
                    return !((!a && !s) || (s && s.$stable)) || (r !== o && (r ? !o || Un(r, o, c) : !!o))
                  if (1024 & l) return !0
                  if (16 & l) return r ? Un(r, o, c) : !!o
                  if (8 & l) {
                    const e = n.dynamicProps
                    for (let n = 0; n < e.length; n++) {
                      const t = e[n]
                      if (o[t] !== r[t] && !In(c, t)) return !0
                    }
                  }
                  return !1
                })(e, n, t)
              ) {
                if (r.asyncDep && !r.asyncResolved) return void U(r, n, t)
                ;(r.next = n),
                  (function (e) {
                    const n = zr.indexOf(e)
                    n > Hr && zr.splice(n, 1)
                  })(r.update),
                  r.update()
              } else (n.component = e.component), (n.el = e.el), (r.vnode = n)
            },
            P = (e, n, t, r, a, i, o) => {
              const s = new ce(
                  () => {
                    if (e.isMounted) {
                      let n,
                        { next: t, bu: r, u: l, parent: c, vnode: d } = e,
                        p = t
                      ;(s.allowRecurse = !1),
                        t ? ((t.el = d.el), U(e, t, o)) : (t = d),
                        r && q(r),
                        (n = t.props && t.props.onVnodeBeforeUpdate) && Kt(n, c, t, d),
                        (s.allowRecurse = !0)
                      const g = $n(e),
                        f = e.subTree
                      ;(e.subTree = g),
                        v(f, g, u(f.el), ne(f), e, a, i),
                        (t.el = g.el),
                        null === p &&
                          (function ({ vnode: e, parent: n }, t) {
                            for (; n && n.subTree === e; ) ((e = n.vnode).el = t), (n = n.parent)
                          })(e, g.el),
                        l && jt(l, a),
                        (n = t.props && t.props.onVnodeUpdated) && jt(() => Kt(n, c, t, d), a),
                        __VUE_PROD_DEVTOOLS__ && Sn(e)
                    } else {
                      let o
                      const { el: l, props: c } = n,
                        { bm: d, m: u, parent: p } = e,
                        g = Xn(n)
                      if (
                        ((s.allowRecurse = !1),
                        d && q(d),
                        !g && (o = c && c.onVnodeBeforeMount) && Kt(o, p, n),
                        (s.allowRecurse = !0),
                        l && ie)
                      ) {
                        const t = () => {
                          ;(e.subTree = $n(e)), ie(l, e.subTree, e, a, null)
                        }
                        g ? n.type.__asyncLoader().then(() => !e.isUnmounted && t()) : t()
                      } else {
                        const o = (e.subTree = $n(e))
                        v(null, o, t, r, e, a, i), (n.el = o.el)
                      }
                      if ((u && jt(u, a), !g && (o = c && c.onVnodeMounted))) {
                        const e = n
                        jt(() => Kt(o, p, e), a)
                      }
                      256 & n.shapeFlag && e.a && jt(e.a, a),
                        (e.isMounted = !0),
                        __VUE_PROD_DEVTOOLS__ && On(e),
                        (n = t = r = null)
                    }
                  },
                  () => ea(e.update),
                  e.scope
                ),
                l = (e.update = s.run.bind(s))
              ;(l.id = e.uid), (s.allowRecurse = l.allowRecurse = !0), l()
            },
            U = (e, n, t) => {
              n.component = e
              const r = e.vnode.props
              ;(e.vnode = n),
                (e.next = null),
                (function (e, n, t, r) {
                  const {
                      props: a,
                      attrs: i,
                      vnode: { patchFlag: o }
                    } = e,
                    s = dn(a),
                    [l] = e.propsOptions
                  let c = !1
                  if (!(r || o > 0) || 16 & o) {
                    let r
                    kt(e, n, a, i) && (c = !0)
                    for (const i in s)
                      (n && (N(n, i) || ((r = j(i)) !== i && N(n, r)))) ||
                        (l
                          ? !t || (void 0 === t[i] && void 0 === t[r]) || (a[i] = Ot(l, s, i, void 0, e, !0))
                          : delete a[i])
                    if (i !== s) for (const e in i) (n && N(n, e)) || (delete i[e], (c = !0))
                  } else if (8 & o) {
                    const t = e.vnode.dynamicProps
                    for (let r = 0; r < t.length; r++) {
                      let o = t[r]
                      const d = n[o]
                      if (l)
                        if (N(i, o)) d !== i[o] && ((i[o] = d), (c = !0))
                        else {
                          const n = F(o)
                          a[n] = Ot(l, s, n, d, e, !1)
                        }
                      else d !== i[o] && ((i[o] = d), (c = !0))
                    }
                  }
                  c && _e(e, 'set', '$attrs')
                })(e, n.props, r, t),
                ((e, n, t) => {
                  const { vnode: r, slots: a } = e
                  let i = !0,
                    o = g
                  if (32 & r.shapeFlag) {
                    const e = n._
                    e
                      ? t && 1 === e
                        ? (i = !1)
                        : (y(a, n), t || 1 !== e || delete a._)
                      : ((i = !n.$stable), Lt(n, a)),
                      (o = n)
                  } else n && (Bt(e, n), (o = { default: 1 }))
                  if (i) for (const e in a) It(e) || e in o || delete a[e]
                })(e, n.children, t),
                ge(),
                ra(void 0, e.update),
                fe()
            },
            z = (e, n, t, r, a, i, o, s, l = !1) => {
              const c = e && e.children,
                u = e ? e.shapeFlag : 0,
                p = n.children,
                { patchFlag: g, shapeFlag: f } = n
              if (g > 0) {
                if (128 & g) return void K(c, p, t, r, a, i, o, s, l)
                if (256 & g) return void H(c, p, t, r, a, i, o, s, l)
              }
              8 & f
                ? (16 & u && ee(c, a, i), p !== c && d(t, p))
                : 16 & u
                ? 16 & f
                  ? K(c, p, t, r, a, i, o, s, l)
                  : ee(c, a, i, !0)
                : (8 & u && d(t, ''), 16 & f && C(p, t, r, a, i, o, s, l))
            },
            H = (e, n, t, r, a, i, o, s, l) => {
              n = n || f
              const c = (e = e || f).length,
                d = n.length,
                u = Math.min(c, d)
              let p
              for (p = 0; p < u; p++) {
                const r = (n[p] = l ? vr(n[p]) : _r(n[p]))
                v(e[p], r, t, null, a, i, o, s, l)
              }
              c > d ? ee(e, a, i, !0, !1, u) : C(n, t, r, a, i, o, s, l, u)
            },
            K = (e, n, t, r, a, i, o, s, l) => {
              let c = 0
              const d = n.length
              let u = e.length - 1,
                p = d - 1
              for (; c <= u && c <= p; ) {
                const r = e[c],
                  d = (n[c] = l ? vr(n[c]) : _r(n[c]))
                if (!cr(r, d)) break
                v(r, d, t, null, a, i, o, s, l), c++
              }
              for (; c <= u && c <= p; ) {
                const r = e[u],
                  c = (n[p] = l ? vr(n[p]) : _r(n[p]))
                if (!cr(r, c)) break
                v(r, c, t, null, a, i, o, s, l), u--, p--
              }
              if (c > u) {
                if (c <= p) {
                  const e = p + 1,
                    u = e < d ? n[e].el : r
                  for (; c <= p; ) v(null, (n[c] = l ? vr(n[c]) : _r(n[c])), t, u, a, i, o, s, l), c++
                }
              } else if (c > p) for (; c <= u; ) V(e[c], a, i, !0), c++
              else {
                const g = c,
                  m = c,
                  b = new Map()
                for (c = m; c <= p; c++) {
                  const e = (n[c] = l ? vr(n[c]) : _r(n[c]))
                  null != e.key && b.set(e.key, c)
                }
                let h,
                  _ = 0
                const y = p - m + 1
                let E = !1,
                  w = 0
                const N = new Array(y)
                for (c = 0; c < y; c++) N[c] = 0
                for (c = g; c <= u; c++) {
                  const r = e[c]
                  if (_ >= y) {
                    V(r, a, i, !0)
                    continue
                  }
                  let d
                  if (null != r.key) d = b.get(r.key)
                  else
                    for (h = m; h <= p; h++)
                      if (0 === N[h - m] && cr(r, n[h])) {
                        d = h
                        break
                      }
                  void 0 === d
                    ? V(r, a, i, !0)
                    : ((N[d - m] = c + 1), d >= w ? (w = d) : (E = !0), v(r, n[d], t, null, a, i, o, s, l), _++)
                }
                const x = E
                  ? (function (e) {
                      const n = e.slice(),
                        t = [0]
                      let r, a, i, o, s
                      const l = e.length
                      for (r = 0; r < l; r++) {
                        const l = e[r]
                        if (0 !== l) {
                          if (((a = t[t.length - 1]), e[a] < l)) {
                            ;(n[r] = a), t.push(r)
                            continue
                          }
                          for (i = 0, o = t.length - 1; i < o; ) (s = (i + o) >> 1), e[t[s]] < l ? (i = s + 1) : (o = s)
                          l < e[t[i]] && (i > 0 && (n[r] = t[i - 1]), (t[i] = r))
                        }
                      }
                      for (i = t.length, o = t[i - 1]; i-- > 0; ) (t[i] = o), (o = n[o])
                      return t
                    })(N)
                  : f
                for (h = x.length - 1, c = y - 1; c >= 0; c--) {
                  const e = m + c,
                    u = n[e],
                    p = e + 1 < d ? n[e + 1].el : r
                  0 === N[c] ? v(null, u, t, p, a, i, o, s, l) : E && (h < 0 || c !== x[h] ? G(u, t, p, 2) : h--)
                }
              }
            },
            G = (e, n, t, a, i = null) => {
              const { el: o, type: s, transition: l, children: c, shapeFlag: d } = e
              if (6 & d) G(e.component.subTree, n, t, a)
              else if (128 & d) e.suspense.move(n, t, a)
              else if (64 & d) s.move(e, n, t, re)
              else if (s !== Qt)
                if (s !== Yt)
                  if (2 !== a && 1 & d && l)
                    if (0 === a) l.beforeEnter(o), r(o, n, t), jt(() => l.enter(o), i)
                    else {
                      const { leave: e, delayLeave: a, afterLeave: i } = l,
                        s = () => r(o, n, t),
                        c = () => {
                          e(o, () => {
                            s(), i && i()
                          })
                        }
                      a ? a(o, s, c) : c()
                    }
                  else r(o, n, t)
                else
                  (({ el: e, anchor: n }, t, a) => {
                    let i
                    for (; e && e !== n; ) (i = p(e)), r(e, t, a), (e = i)
                    r(n, t, a)
                  })(e, n, t)
              else {
                r(o, n, t)
                for (let e = 0; e < c.length; e++) G(c[e], n, t, a)
                r(e.anchor, n, t)
              }
            },
            V = (e, n, t, r = !1, a = !1) => {
              const {
                type: i,
                props: o,
                ref: s,
                children: l,
                dynamicChildren: c,
                shapeFlag: d,
                patchFlag: u,
                dirs: p
              } = e
              if ((null != s && Ht(s, null, t, e, !0), 256 & d)) return void n.ctx.deactivate(e)
              const g = 1 & d && p,
                f = !Xn(e)
              let m
              if ((f && (m = o && o.onVnodeBeforeUnmount) && Kt(m, n, e), 6 & d)) Y(e.component, t, r)
              else {
                if (128 & d) return void e.suspense.unmount(t, r)
                g && $t(e, null, n, 'beforeUnmount'),
                  64 & d
                    ? e.type.remove(e, n, t, a, re, r)
                    : c && (i !== Qt || (u > 0 && 64 & u))
                    ? ee(c, n, t, !1, !0)
                    : ((i === Qt && 384 & u) || (!a && 16 & d)) && ee(l, n, t),
                  r && Q(e)
              }
              ;((f && (m = o && o.onVnodeUnmounted)) || g) &&
                jt(() => {
                  m && Kt(m, n, e), g && $t(e, null, n, 'unmounted')
                }, t)
            },
            Q = e => {
              const { type: n, el: t, anchor: r, transition: i } = e
              if (n === Qt) return void X(t, r)
              if (n === Yt)
                return void (({ el: e, anchor: n }) => {
                  let t
                  for (; e && e !== n; ) (t = p(e)), a(e), (e = t)
                  a(n)
                })(e)
              const o = () => {
                a(t), i && !i.persisted && i.afterLeave && i.afterLeave()
              }
              if (1 & e.shapeFlag && i && !i.persisted) {
                const { leave: n, delayLeave: r } = i,
                  a = () => n(t, o)
                r ? r(e.el, o, a) : a()
              } else o()
            },
            X = (e, n) => {
              let t
              for (; e !== n; ) (t = p(e)), a(e), (e = t)
              a(n)
            },
            Y = (e, n, t) => {
              const { bum: r, scope: a, update: i, subTree: o, um: s } = e
              r && q(r),
                a.stop(),
                i && ((i.active = !1), V(o, e, n, t)),
                s && jt(s, n),
                jt(() => {
                  e.isUnmounted = !0
                }, n),
                n &&
                  n.pendingBranch &&
                  !n.isUnmounted &&
                  e.asyncDep &&
                  !e.asyncResolved &&
                  e.suspenseId === n.pendingId &&
                  (n.deps--, 0 === n.deps && n.resolve()),
                __VUE_PROD_DEVTOOLS__ && Cn(e)
            },
            ee = (e, n, t, r = !1, a = !1, i = 0) => {
              for (let o = i; o < e.length; o++) V(e[o], n, t, r, a)
            },
            ne = e =>
              6 & e.shapeFlag ? ne(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : p(e.anchor || e.el),
            te = (e, n, t) => {
              null == e ? n._vnode && V(n._vnode, null, null, !0) : v(n._vnode || null, e, n, null, null, null, t),
                aa(),
                (n._vnode = e)
            },
            re = { p: v, um: V, m: G, r: Q, mt: L, mc: C, pc: z, pbc: M, n: ne, o: e }
          let ae, ie
          return n && ([ae, ie] = n(re)), { render: te, hydrate: ae, createApp: Ut(te, ae) }
        }
        function Ht(e, n, t, r, a = !1) {
          if (x(e)) return void e.forEach((e, i) => Ht(e, n && (x(n) ? n[i] : n), t, r, a))
          if (Xn(r) && !a) return
          const i = 4 & r.shapeFlag ? Br(r.component) || r.component.proxy : r.el,
            o = a ? null : i,
            { i: s, r: l } = e,
            c = n && n.r,
            d = s.refs === g ? (s.refs = {}) : s.refs,
            u = s.setupState
          if (
            (null != c && c !== l && (C(c) ? ((d[c] = null), N(u, c) && (u[c] = null)) : bn(c) && (c.value = null)),
            C(l))
          ) {
            const e = () => {
              ;(d[l] = o), N(u, l) && (u[l] = o)
            }
            o ? ((e.id = -1), jt(e, t)) : e()
          } else if (bn(l)) {
            const e = () => {
              l.value = o
            }
            o ? ((e.id = -1), jt(e, t)) : e()
          } else S(l) && $r(l, s, 12, [o, d])
        }
        function Kt(e, n, t, r = null) {
          Pr(e, n, 7, [t, r])
        }
        function qt(e, n, t = !1) {
          const r = e.children,
            a = n.children
          if (x(r) && x(a))
            for (let e = 0; e < r.length; e++) {
              const n = r[e]
              let i = a[e]
              1 & i.shapeFlag &&
                !i.dynamicChildren &&
                ((i.patchFlag <= 0 || 32 === i.patchFlag) && ((i = a[e] = vr(a[e])), (i.el = n.el)), t || qt(n, i))
            }
        }
        const Zt = 'components'
        function Gt(e, n) {
          return (
            (function (e, n, t = !0, r = !1) {
              const a = Rn || Cr
              if (a) {
                const t = a.type
                if (e === Zt) {
                  const e = (function (e) {
                    return (S(e) && e.displayName) || e.name
                  })(t)
                  if (e && (e === n || e === F(n) || e === z(F(n)))) return t
                }
                const i = Wt(a[e] || t[e], n) || Wt(a.appContext[e], n)
                return !i && r ? t : i
              }
            })(Zt, e, !0, n) || e
          )
        }
        const Vt = Symbol()
        function Wt(e, n) {
          return e && (e[n] || e[F(n)] || e[z(F(n))])
        }
        const Qt = Symbol(void 0),
          Xt = Symbol(void 0),
          Jt = Symbol(void 0),
          Yt = Symbol(void 0),
          er = []
        let nr = null
        function tr(e = !1) {
          er.push((nr = e ? null : []))
        }
        let rr = 1
        function ar(e) {
          rr += e
        }
        function ir(e) {
          return (
            (e.dynamicChildren = rr > 0 ? nr || f : null),
            er.pop(),
            (nr = er[er.length - 1] || null),
            rr > 0 && nr && nr.push(e),
            e
          )
        }
        function or(e, n, t, r, a, i) {
          return ir(gr(e, n, t, r, a, i, !0))
        }
        function sr(e, n, t, r, a) {
          return ir(fr(e, n, t, r, a, !0))
        }
        function lr(e) {
          return !!e && !0 === e.__v_isVNode
        }
        function cr(e, n) {
          return e.type === n.type && e.key === n.key
        }
        const dr = '__vInternal',
          ur = ({ key: e }) => (null != e ? e : null),
          pr = ({ ref: e }) => (null != e ? (C(e) || bn(e) || S(e) ? { i: Rn, r: e } : e) : null)
        function gr(e, n = null, t = null, r = 0, a = null, i = e === Qt ? 0 : 1, o = !1, s = !1) {
          const l = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: n,
            key: n && ur(n),
            ref: n && pr(n),
            scopeId: Dn,
            slotScopeIds: null,
            children: t,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: i,
            patchFlag: r,
            dynamicProps: a,
            dynamicChildren: null,
            appContext: null
          }
          return (
            s ? (yr(l, t), 128 & i && e.normalize(l)) : t && (l.shapeFlag |= C(t) ? 8 : 16),
            rr > 0 && !o && nr && (l.patchFlag > 0 || 6 & i) && 32 !== l.patchFlag && nr.push(l),
            l
          )
        }
        const fr = function (e, n = null, t = null, r = 0, a = null, i = !1) {
          if (((e && e !== Vt) || (e = Jt), lr(e))) {
            const r = mr(e, n, !0)
            return t && yr(r, t), r
          }
          if (
            ((function (e) {
              return S(e) && '__vccOpts' in e
            })(e) && (e = e.__vccOpts),
            n)
          ) {
            n = (function (e) {
              return e ? (cn(e) || dr in e ? y({}, e) : e) : null
            })(n)
            let { class: e, style: t } = n
            e && !C(e) && (n.class = d(e)), M(t) && (cn(t) && !x(t) && (t = y({}, t)), (n.style = o(t)))
          }
          return gr(
            e,
            n,
            t,
            r,
            a,
            C(e) ? 1 : (e => e.__isSuspense)(e) ? 128 : (e => e.__isTeleport)(e) ? 64 : M(e) ? 4 : S(e) ? 2 : 0,
            i,
            !0
          )
        }
        function mr(e, n, t = !1) {
          const { props: r, ref: a, patchFlag: i, children: s } = e,
            l = n
              ? (function (...e) {
                  const n = {}
                  for (let t = 0; t < e.length; t++) {
                    const r = e[t]
                    for (const e in r)
                      if ('class' === e) n.class !== r.class && (n.class = d([n.class, r.class]))
                      else if ('style' === e) n.style = o([n.style, r.style])
                      else if (_(e)) {
                        const t = n[e],
                          a = r[e]
                        t !== a && (n[e] = t ? [].concat(t, a) : a)
                      } else '' !== e && (n[e] = r[e])
                  }
                  return n
                })(r || {}, n)
              : r
          return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: l,
            key: l && ur(l),
            ref: n && n.ref ? (t && a ? (x(a) ? a.concat(pr(n)) : [a, pr(n)]) : pr(n)) : a,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: s,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: n && e.type !== Qt ? (-1 === i ? 16 : 16 | i) : i,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && mr(e.ssContent),
            ssFallback: e.ssFallback && mr(e.ssFallback),
            el: e.el,
            anchor: e.anchor
          }
        }
        function br(e = ' ', n = 0) {
          return fr(Xt, null, e, n)
        }
        function hr(e = '', n = !1) {
          return n ? (tr(), sr(Jt, null, e)) : fr(Jt, null, e)
        }
        function _r(e) {
          return null == e || 'boolean' == typeof e
            ? fr(Jt)
            : x(e)
            ? fr(Qt, null, e.slice())
            : 'object' == typeof e
            ? vr(e)
            : fr(Xt, null, String(e))
        }
        function vr(e) {
          return null === e.el || e.memo ? e : mr(e)
        }
        function yr(e, n) {
          let t = 0
          const { shapeFlag: r } = e
          if (null == n) n = null
          else if (x(n)) t = 16
          else if ('object' == typeof n) {
            if (65 & r) {
              const t = n.default
              return void (t && (t._c && (t._d = !1), yr(e, t()), t._c && (t._d = !0)))
            }
            {
              t = 32
              const r = n._
              r || dr in n
                ? 3 === r && Rn && (1 === Rn.slots._ ? (n._ = 1) : ((n._ = 2), (e.patchFlag |= 1024)))
                : (n._ctx = Rn)
            }
          } else
            S(n)
              ? ((n = { default: n, _ctx: Rn }), (t = 32))
              : ((n = String(n)), 64 & r ? ((t = 16), (n = [br(n)])) : (t = 8))
          ;(e.children = n), (e.shapeFlag |= t)
        }
        function Er(e, n, t = {}, r, a) {
          if (Rn.isCE) return fr('slot', 'default' === n ? null : { name: n }, r && r())
          let i = e[n]
          i && i._c && (i._d = !1), tr()
          const o = i && wr(i(t)),
            s = sr(Qt, { key: t.key || `_${n}` }, o || (r ? r() : []), o && 1 === e._ ? 64 : -2)
          return !a && s.scopeId && (s.slotScopeIds = [s.scopeId + '-s']), i && i._c && (i._d = !0), s
        }
        function wr(e) {
          return e.some(e => !lr(e) || (e.type !== Jt && !(e.type === Qt && !wr(e.children)))) ? e : null
        }
        const Nr = e => (e ? (Ir(e) ? Br(e) || e.proxy : Nr(e.parent)) : null),
          xr = y(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => Nr(e.parent),
            $root: e => Nr(e.root),
            $emit: e => e.emit,
            $options: e => (__VUE_OPTIONS_API__ ? _t(e) : e.type),
            $forceUpdate: e => () => ea(e.update),
            $nextTick: e => Yr.bind(e.proxy),
            $watch: e => (__VUE_OPTIONS_API__ ? da.bind(e) : m)
          }),
          kr = {
            get({ _: e }, n) {
              const { ctx: t, setupState: r, data: a, props: i, accessCache: o, type: s, appContext: l } = e
              let c
              if ('$' !== n[0]) {
                const s = o[n]
                if (void 0 !== s)
                  switch (s) {
                    case 0:
                      return r[n]
                    case 1:
                      return a[n]
                    case 3:
                      return t[n]
                    case 2:
                      return i[n]
                  }
                else {
                  if (r !== g && N(r, n)) return (o[n] = 0), r[n]
                  if (a !== g && N(a, n)) return (o[n] = 1), a[n]
                  if ((c = e.propsOptions[0]) && N(c, n)) return (o[n] = 2), i[n]
                  if (t !== g && N(t, n)) return (o[n] = 3), t[n]
                  ;(__VUE_OPTIONS_API__ && !mt) || (o[n] = 4)
                }
              }
              const d = xr[n]
              let u, p
              return d
                ? ('$attrs' === n && me(e, 0, n), d(e))
                : (u = s.__cssModules) && (u = u[n])
                ? u
                : t !== g && N(t, n)
                ? ((o[n] = 3), t[n])
                : ((p = l.config.globalProperties), N(p, n) ? p[n] : void 0)
            },
            set({ _: e }, n, t) {
              const { data: r, setupState: a, ctx: i } = e
              if (a !== g && N(a, n)) a[n] = t
              else if (r !== g && N(r, n)) r[n] = t
              else if (N(e.props, n)) return !1
              return !(('$' === n[0] && n.slice(1) in e) || ((i[n] = t), 0))
            },
            has({ _: { data: e, setupState: n, accessCache: t, ctx: r, appContext: a, propsOptions: i } }, o) {
              let s
              return (
                void 0 !== t[o] ||
                (e !== g && N(e, o)) ||
                (n !== g && N(n, o)) ||
                ((s = i[0]) && N(s, o)) ||
                N(r, o) ||
                N(xr, o) ||
                N(a.config.globalProperties, o)
              )
            }
          },
          Or = Pt()
        let Sr = 0
        let Cr = null
        const Ar = () => Cr || Rn,
          Mr = e => {
            ;(Cr = e), e.scope.on()
          },
          Tr = () => {
            Cr && Cr.scope.off(), (Cr = null)
          }
        function Ir(e) {
          return 4 & e.vnode.shapeFlag
        }
        let Rr = !1
        function Dr(e, n, t) {
          S(n)
            ? e.type.__ssrInlineRender
              ? (e.ssrRender = n)
              : (e.render = n)
            : M(n) && (__VUE_PROD_DEVTOOLS__ && (e.devtoolsRawSetupState = n), (e.setupState = vn(n))),
            Lr(e, t)
        }
        function Lr(e, n, t) {
          const r = e.type
          e.render || (e.render = r.render || m),
            __VUE_OPTIONS_API__ &&
              (Mr(e),
              ge(),
              (function (e) {
                const n = _t(e),
                  t = e.proxy,
                  r = e.ctx
                ;(mt = !1), n.beforeCreate && bt(n.beforeCreate, e, 'bc')
                const {
                  data: a,
                  computed: i,
                  methods: o,
                  watch: s,
                  provide: l,
                  inject: c,
                  created: d,
                  beforeMount: u,
                  mounted: p,
                  beforeUpdate: g,
                  updated: f,
                  activated: b,
                  deactivated: h,
                  beforeDestroy: _,
                  beforeUnmount: v,
                  destroyed: y,
                  unmounted: E,
                  render: w,
                  renderTracked: N,
                  renderTriggered: k,
                  errorCaptured: O,
                  serverPrefetch: C,
                  expose: A,
                  inheritAttrs: T,
                  components: I,
                  directives: R,
                  filters: D
                } = n
                if (
                  (c &&
                    (function (e, n, t = m, r = !1) {
                      x(e) && (e = wt(e))
                      for (const t in e) {
                        const a = e[t]
                        let i
                        ;(i = M(a) ? ('default' in a ? jn(a.from || t, a.default, !0) : jn(a.from || t)) : jn(a)),
                          bn(i) && r
                            ? Object.defineProperty(n, t, {
                                enumerable: !0,
                                configurable: !0,
                                get: () => i.value,
                                set: e => (i.value = e)
                              })
                            : (n[t] = i)
                      }
                    })(c, r, null, e.appContext.config.unwrapInjectedRef),
                  o)
                )
                  for (const e in o) {
                    const n = o[e]
                    S(n) && (r[e] = n.bind(t))
                  }
                if (a) {
                  const n = a.call(t, t)
                  M(n) && (e.data = rn(n))
                }
                if (((mt = !0), i))
                  for (const e in i) {
                    const n = i[e],
                      a = En({
                        get: S(n) ? n.bind(t, t) : S(n.get) ? n.get.bind(t, t) : m,
                        set: !S(n) && S(n.set) ? n.set.bind(t) : m
                      })
                    Object.defineProperty(r, e, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => a.value,
                      set: e => (a.value = e)
                    })
                  }
                if (s) for (const e in s) ht(s[e], r, t, e)
                if (l) {
                  const e = S(l) ? l.call(t) : l
                  Reflect.ownKeys(e).forEach(n => {
                    !(function (e, n) {
                      if (Cr) {
                        let t = Cr.provides
                        const r = Cr.parent && Cr.parent.provides
                        r === t && (t = Cr.provides = Object.create(r)), (t[e] = n)
                      }
                    })(n, e[n])
                  })
                }
                function L(e, n) {
                  x(n) ? n.forEach(n => e(n.bind(t))) : n && e(n.bind(t))
                }
                if (
                  (d && bt(d, e, 'c'),
                  L(it, u),
                  L(ot, p),
                  L(st, g),
                  L(lt, f),
                  L(Yn, b),
                  L(et, h),
                  L(ft, O),
                  L(gt, N),
                  L(pt, k),
                  L(ct, v),
                  L(dt, E),
                  L(ut, C),
                  x(A))
                )
                  if (A.length) {
                    const n = e.exposed || (e.exposed = {})
                    A.forEach(e => {
                      Object.defineProperty(n, e, { get: () => t[e], set: n => (t[e] = n) })
                    })
                  } else e.exposed || (e.exposed = {})
                w && e.render === m && (e.render = w),
                  null != T && (e.inheritAttrs = T),
                  I && (e.components = I),
                  R && (e.directives = R)
              })(e),
              fe(),
              Tr())
        }
        function Br(e) {
          if (e.exposed)
            return (
              e.exposeProxy ||
              (e.exposeProxy = new Proxy(vn(un(e.exposed)), {
                get: (n, t) => (t in n ? n[t] : t in xr ? xr[t](e) : void 0)
              }))
            )
        }
        function $r(e, n, t, r) {
          let a
          try {
            a = r ? e(...r) : e()
          } catch (e) {
            Fr(e, n, t)
          }
          return a
        }
        function Pr(e, n, t, r) {
          if (S(e)) {
            const a = $r(e, n, t, r)
            return (
              a &&
                T(a) &&
                a.catch(e => {
                  Fr(e, n, t)
                }),
              a
            )
          }
          const a = []
          for (let i = 0; i < e.length; i++) a.push(Pr(e[i], n, t, r))
          return a
        }
        function Fr(e, n, t, r = !0) {
          if ((n && n.vnode, n)) {
            let r = n.parent
            const a = n.proxy,
              i = t
            for (; r; ) {
              const n = r.ec
              if (n) for (let t = 0; t < n.length; t++) if (!1 === n[t](e, a, i)) return
              r = r.parent
            }
            const o = n.appContext.config.errorHandler
            if (o) return void $r(o, null, 10, [e, a, i])
          }
          !(function (e, n, t, r = !0) {
            console.error(e)
          })(e, 0, 0, r)
        }
        let Ur = !1,
          jr = !1
        const zr = []
        let Hr = 0
        const Kr = []
        let qr = null,
          Zr = 0
        const Gr = []
        let Vr = null,
          Wr = 0
        const Qr = Promise.resolve()
        let Xr = null,
          Jr = null
        function Yr(e) {
          const n = Xr || Qr
          return e ? n.then(this ? e.bind(this) : e) : n
        }
        function ea(e) {
          ;(zr.length && zr.includes(e, Ur && e.allowRecurse ? Hr + 1 : Hr)) ||
            e === Jr ||
            (null == e.id
              ? zr.push(e)
              : zr.splice(
                  (function (e) {
                    let n = Hr + 1,
                      t = zr.length
                    for (; n < t; ) {
                      const r = (n + t) >>> 1
                      ia(zr[r]) < e ? (n = r + 1) : (t = r)
                    }
                    return n
                  })(e.id),
                  0,
                  e
                ),
            na())
        }
        function na() {
          Ur || jr || ((jr = !0), (Xr = Qr.then(oa)))
        }
        function ta(e, n, t, r) {
          x(e) ? t.push(...e) : (n && n.includes(e, e.allowRecurse ? r + 1 : r)) || t.push(e), na()
        }
        function ra(e, n = null) {
          if (Kr.length) {
            for (Jr = n, qr = [...new Set(Kr)], Kr.length = 0, Zr = 0; Zr < qr.length; Zr++) qr[Zr]()
            ;(qr = null), (Zr = 0), (Jr = null), ra(e, n)
          }
        }
        function aa(e) {
          if (Gr.length) {
            const e = [...new Set(Gr)]
            if (((Gr.length = 0), Vr)) return void Vr.push(...e)
            for (Vr = e, Vr.sort((e, n) => ia(e) - ia(n)), Wr = 0; Wr < Vr.length; Wr++) Vr[Wr]()
            ;(Vr = null), (Wr = 0)
          }
        }
        const ia = e => (null == e.id ? 1 / 0 : e.id)
        function oa(e) {
          ;(jr = !1), (Ur = !0), ra(e), zr.sort((e, n) => ia(e) - ia(n))
          try {
            for (Hr = 0; Hr < zr.length; Hr++) {
              const e = zr[Hr]
              e && !1 !== e.active && $r(e, null, 14)
            }
          } finally {
            ;(Hr = 0), (zr.length = 0), aa(), (Ur = !1), (Xr = null), (zr.length || Kr.length || Gr.length) && oa(e)
          }
        }
        const sa = {}
        function la(e, n, t) {
          return ca(e, n, t)
        }
        function ca(e, n, { immediate: t, deep: r, flush: a, onTrack: i, onTrigger: o } = g) {
          const s = Cr
          let l,
            c,
            d = !1,
            u = !1
          if (
            (bn(e)
              ? ((l = () => e.value), (d = !!e._shallow))
              : sn(e)
              ? ((l = () => e), (r = !0))
              : x(e)
              ? ((u = !0),
                (d = e.some(sn)),
                (l = () => e.map(e => (bn(e) ? e.value : sn(e) ? pa(e) : S(e) ? $r(e, s, 2) : void 0))))
              : (l = S(e)
                  ? n
                    ? () => $r(e, s, 2)
                    : () => {
                        if (!s || !s.isUnmounted) return c && c(), Pr(e, s, 3, [p])
                      }
                  : m),
            n && r)
          ) {
            const e = l
            l = () => pa(e())
          }
          let p = e => {
            c = _.onStop = () => {
              $r(e, s, 4)
            }
          }
          if (Rr) return (p = m), n ? t && Pr(n, s, 3, [l(), u ? [] : void 0, p]) : l(), m
          let f = u ? [] : sa
          const b = () => {
            if (_.active)
              if (n) {
                const e = _.run()
                ;(r || d || (u ? e.some((e, n) => K(e, f[n])) : K(e, f))) &&
                  (c && c(), Pr(n, s, 3, [e, f === sa ? void 0 : f, p]), (f = e))
              } else _.run()
          }
          let h
          ;(b.allowRecurse = !!n),
            (h =
              'sync' === a
                ? b
                : 'post' === a
                ? () => jt(b, s && s.suspense)
                : () => {
                    !s || s.isMounted
                      ? (function (e) {
                          ta(e, qr, Kr, Zr)
                        })(b)
                      : b()
                  })
          const _ = new ce(l, h)
          return (
            n ? (t ? b() : (f = _.run())) : 'post' === a ? jt(_.run.bind(_), s && s.suspense) : _.run(),
            () => {
              _.stop(), s && s.scope && E(s.scope.effects, _)
            }
          )
        }
        function da(e, n, t) {
          const r = this.proxy,
            a = C(e) ? (e.includes('.') ? ua(r, e) : () => r[e]) : e.bind(r, r)
          let i
          S(n) ? (i = n) : ((i = n.handler), (t = n))
          const o = Cr
          Mr(this)
          const s = ca(a, i.bind(r), t)
          return o ? Mr(o) : Tr(), s
        }
        function ua(e, n) {
          const t = n.split('.')
          return () => {
            let n = e
            for (let e = 0; e < t.length && n; e++) n = n[t[e]]
            return n
          }
        }
        function pa(e, n) {
          if (!M(e) || e.__v_skip) return e
          if ((n = n || new Set()).has(e)) return e
          if ((n.add(e), bn(e))) pa(e.value, n)
          else if (x(e)) for (let t = 0; t < e.length; t++) pa(e[t], n)
          else if (O(e) || k(e))
            e.forEach(e => {
              pa(e, n)
            })
          else if (D(e)) for (const t in e) pa(e[t], n)
          return e
        }
        function ga(e, n, t) {
          const r = arguments.length
          return 2 === r
            ? M(n) && !x(n)
              ? lr(n)
                ? fr(e, null, [n])
                : fr(e, n)
              : fr(e, null, n)
            : (r > 3 ? (t = Array.prototype.slice.call(arguments, 2)) : 3 === r && lr(t) && (t = [t]), fr(e, n, t))
        }
        Symbol('')
        const fa = '3.2.20',
          ma = 'undefined' != typeof document ? document : null,
          ba = new Map(),
          ha = {
            insert: (e, n, t) => {
              n.insertBefore(e, t || null)
            },
            remove: e => {
              const n = e.parentNode
              n && n.removeChild(e)
            },
            createElement: (e, n, t, r) => {
              const a = n
                ? ma.createElementNS('http://www.w3.org/2000/svg', e)
                : ma.createElement(e, t ? { is: t } : void 0)
              return 'select' === e && r && null != r.multiple && a.setAttribute('multiple', r.multiple), a
            },
            createText: e => ma.createTextNode(e),
            createComment: e => ma.createComment(e),
            setText: (e, n) => {
              e.nodeValue = n
            },
            setElementText: (e, n) => {
              e.textContent = n
            },
            parentNode: e => e.parentNode,
            nextSibling: e => e.nextSibling,
            querySelector: e => ma.querySelector(e),
            setScopeId(e, n) {
              e.setAttribute(n, '')
            },
            cloneNode(e) {
              const n = e.cloneNode(!0)
              return '_value' in e && (n._value = e._value), n
            },
            insertStaticContent(e, n, t, r) {
              const a = t ? t.previousSibling : n.lastChild
              let i = ba.get(e)
              if (!i) {
                const n = ma.createElement('template')
                if (((n.innerHTML = r ? `<svg>${e}</svg>` : e), (i = n.content), r)) {
                  const e = i.firstChild
                  for (; e.firstChild; ) i.appendChild(e.firstChild)
                  i.removeChild(e)
                }
                ba.set(e, i)
              }
              return (
                n.insertBefore(i.cloneNode(!0), t),
                [a ? a.nextSibling : n.firstChild, t ? t.previousSibling : n.lastChild]
              )
            }
          },
          _a = /\s*!important$/
        function va(e, n, t) {
          if (x(t)) t.forEach(t => va(e, n, t))
          else if (n.startsWith('--')) e.setProperty(n, t)
          else {
            const r = (function (e, n) {
              const t = Ea[n]
              if (t) return t
              let r = F(n)
              if ('filter' !== r && r in e) return (Ea[n] = r)
              r = z(r)
              for (let t = 0; t < ya.length; t++) {
                const a = ya[t] + r
                if (a in e) return (Ea[n] = a)
              }
              return n
            })(e, n)
            _a.test(t) ? e.setProperty(j(r), t.replace(_a, ''), 'important') : (e[r] = t)
          }
        }
        const ya = ['Webkit', 'Moz', 'ms'],
          Ea = {},
          wa = 'http://www.w3.org/1999/xlink'
        let Na = Date.now,
          xa = !1
        if ('undefined' != typeof window) {
          Na() > document.createEvent('Event').timeStamp && (Na = () => performance.now())
          const e = navigator.userAgent.match(/firefox\/(\d+)/i)
          xa = !!(e && Number(e[1]) <= 53)
        }
        let ka = 0
        const Oa = Promise.resolve(),
          Sa = () => {
            ka = 0
          }
        const Ca = /(?:Once|Passive|Capture)$/,
          Aa = /^on[a-z]/
        function Ma(e) {
          const n = Ar()
          if (!n) return
          const t = () => Ta(n.subTree, e(n.proxy))
          ca(t, null, { flush: 'post' }),
            ot(() => {
              const e = new MutationObserver(t)
              e.observe(n.subTree.el.parentNode, { childList: !0 }), dt(() => e.disconnect())
            })
        }
        function Ta(e, n) {
          if (128 & e.shapeFlag) {
            const t = e.suspense
            ;(e = t.activeBranch),
              t.pendingBranch &&
                !t.isHydrating &&
                t.effects.push(() => {
                  Ta(t.activeBranch, n)
                })
          }
          for (; e.component; ) e = e.component.subTree
          if (1 & e.shapeFlag && e.el) Ia(e.el, n)
          else if (e.type === Qt) e.children.forEach(e => Ta(e, n))
          else if (e.type === Yt) {
            let { el: t, anchor: r } = e
            for (; t && (Ia(t, n), t !== r); ) t = t.nextSibling
          }
        }
        function Ia(e, n) {
          if (1 === e.nodeType) {
            const t = e.style
            for (const e in n) t.setProperty(`--${e}`, n[e])
          }
        }
        'undefined' != typeof HTMLElement && HTMLElement
        const Ra = 'transition',
          Da = 'animation',
          La = (e, { slots: n }) =>
            ga(
              Kn,
              (function (e) {
                const n = {}
                for (const t in e) t in Ba || (n[t] = e[t])
                if (!1 === e.css) return n
                const {
                    name: t = 'v',
                    type: r,
                    duration: a,
                    enterFromClass: i = `${t}-enter-from`,
                    enterActiveClass: o = `${t}-enter-active`,
                    enterToClass: s = `${t}-enter-to`,
                    appearFromClass: l = i,
                    appearActiveClass: c = o,
                    appearToClass: d = s,
                    leaveFromClass: u = `${t}-leave-from`,
                    leaveActiveClass: p = `${t}-leave-active`,
                    leaveToClass: g = `${t}-leave-to`
                  } = e,
                  f = (function (e) {
                    if (null == e) return null
                    if (M(e)) return [Fa(e.enter), Fa(e.leave)]
                    {
                      const n = Fa(e)
                      return [n, n]
                    }
                  })(a),
                  m = f && f[0],
                  b = f && f[1],
                  {
                    onBeforeEnter: h,
                    onEnter: _,
                    onEnterCancelled: v,
                    onLeave: E,
                    onLeaveCancelled: w,
                    onBeforeAppear: N = h,
                    onAppear: x = _,
                    onAppearCancelled: k = v
                  } = n,
                  O = (e, n, t) => {
                    ja(e, n ? d : s), ja(e, n ? c : o), t && t()
                  },
                  S = (e, n) => {
                    ja(e, g), ja(e, p), n && n()
                  },
                  C = e => (n, t) => {
                    const a = e ? x : _,
                      o = () => O(n, e, t)
                    $a(a, [n, o]),
                      za(() => {
                        ja(n, e ? l : i), Ua(n, e ? d : s), Pa(a) || Ka(n, r, m, o)
                      })
                  }
                return y(n, {
                  onBeforeEnter(e) {
                    $a(h, [e]), Ua(e, i), Ua(e, o)
                  },
                  onBeforeAppear(e) {
                    $a(N, [e]), Ua(e, l), Ua(e, c)
                  },
                  onEnter: C(!1),
                  onAppear: C(!0),
                  onLeave(e, n) {
                    const t = () => S(e, n)
                    Ua(e, u),
                      document.body.offsetHeight,
                      Ua(e, p),
                      za(() => {
                        ja(e, u), Ua(e, g), Pa(E) || Ka(e, r, b, t)
                      }),
                      $a(E, [e, t])
                  },
                  onEnterCancelled(e) {
                    O(e, !1), $a(v, [e])
                  },
                  onAppearCancelled(e) {
                    O(e, !0), $a(k, [e])
                  },
                  onLeaveCancelled(e) {
                    S(e), $a(w, [e])
                  }
                })
              })(e),
              n
            )
        La.displayName = 'Transition'
        const Ba = {
            name: String,
            type: String,
            css: { type: Boolean, default: !0 },
            duration: [String, Number, Object],
            enterFromClass: String,
            enterActiveClass: String,
            enterToClass: String,
            appearFromClass: String,
            appearActiveClass: String,
            appearToClass: String,
            leaveFromClass: String,
            leaveActiveClass: String,
            leaveToClass: String
          },
          $a =
            ((La.props = y({}, Kn.props, Ba)),
            (e, n = []) => {
              x(e) ? e.forEach(e => e(...n)) : e && e(...n)
            }),
          Pa = e => !!e && (x(e) ? e.some(e => e.length > 1) : e.length > 1)
        function Fa(e) {
          return G(e)
        }
        function Ua(e, n) {
          n.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set())).add(n)
        }
        function ja(e, n) {
          n.split(/\s+/).forEach(n => n && e.classList.remove(n))
          const { _vtc: t } = e
          t && (t.delete(n), t.size || (e._vtc = void 0))
        }
        function za(e) {
          requestAnimationFrame(() => {
            requestAnimationFrame(e)
          })
        }
        let Ha = 0
        function Ka(e, n, t, r) {
          const a = (e._endId = ++Ha),
            i = () => {
              a === e._endId && r()
            }
          if (t) return setTimeout(i, t)
          const {
            type: o,
            timeout: s,
            propCount: l
          } = (function (e, n) {
            const t = window.getComputedStyle(e),
              r = e => (t[e] || '').split(', '),
              a = r('transitionDelay'),
              i = r('transitionDuration'),
              o = qa(a, i),
              s = r('animationDelay'),
              l = r('animationDuration'),
              c = qa(s, l)
            let d = null,
              u = 0,
              p = 0
            return (
              n === Ra
                ? o > 0 && ((d = Ra), (u = o), (p = i.length))
                : n === Da
                ? c > 0 && ((d = Da), (u = c), (p = l.length))
                : ((u = Math.max(o, c)),
                  (d = u > 0 ? (o > c ? Ra : Da) : null),
                  (p = d ? (d === Ra ? i.length : l.length) : 0)),
              {
                type: d,
                timeout: u,
                propCount: p,
                hasTransform: d === Ra && /\b(transform|all)(,|$)/.test(t.transitionProperty)
              }
            )
          })(e, n)
          if (!o) return r()
          const c = o + 'end'
          let d = 0
          const u = () => {
              e.removeEventListener(c, p), i()
            },
            p = n => {
              n.target === e && ++d >= l && u()
            }
          setTimeout(() => {
            d < l && u()
          }, s + 1),
            e.addEventListener(c, p)
        }
        function qa(e, n) {
          for (; e.length < n.length; ) e = e.concat(e)
          return Math.max(...n.map((n, t) => Za(n) + Za(e[t])))
        }
        function Za(e) {
          return 1e3 * Number(e.slice(0, -1).replace(',', '.'))
        }
        new WeakMap(), new WeakMap()
        const Ga = y(
          {
            patchProp: (e, n, t, r, o = !1, s, l, c, d) => {
              'class' === n
                ? (function (e, n, t) {
                    const r = e._vtc
                    r && (n = (n ? [n, ...r] : [...r]).join(' ')),
                      null == n ? e.removeAttribute('class') : t ? e.setAttribute('class', n) : (e.className = n)
                  })(e, r, o)
                : 'style' === n
                ? (function (e, n, t) {
                    const r = e.style,
                      a = r.display
                    if (t)
                      if (C(t)) n !== t && (r.cssText = t)
                      else {
                        for (const e in t) va(r, e, t[e])
                        if (n && !C(n)) for (const e in n) null == t[e] && va(r, e, '')
                      }
                    else e.removeAttribute('style')
                    '_vod' in e && (r.display = a)
                  })(e, t, r)
                : _(n)
                ? v(n) ||
                  (function (e, n, t, r, a = null) {
                    const i = e._vei || (e._vei = {}),
                      o = i[n]
                    if (r && o) o.value = r
                    else {
                      const [t, s] = (function (e) {
                        let n
                        if (Ca.test(e)) {
                          let t
                          for (n = {}; (t = e.match(Ca)); )
                            (e = e.slice(0, e.length - t[0].length)), (n[t[0].toLowerCase()] = !0)
                        }
                        return [j(e.slice(2)), n]
                      })(n)
                      if (r) {
                        const o = (i[n] = (function (e, n) {
                          const t = e => {
                            const r = e.timeStamp || Na()
                            ;(xa || r >= t.attached - 1) &&
                              Pr(
                                (function (e, n) {
                                  if (x(n)) {
                                    const t = e.stopImmediatePropagation
                                    return (
                                      (e.stopImmediatePropagation = () => {
                                        t.call(e), (e._stopped = !0)
                                      }),
                                      n.map(e => n => !n._stopped && e(n))
                                    )
                                  }
                                  return n
                                })(e, t.value),
                                n,
                                5,
                                [e]
                              )
                          }
                          return (t.value = e), (t.attached = ka || (Oa.then(Sa), (ka = Na()))), t
                        })(r, a))
                        !(function (e, n, t, r) {
                          e.addEventListener(n, t, r)
                        })(e, t, o, s)
                      } else
                        o &&
                          ((function (e, n, t, r) {
                            e.removeEventListener(n, t, r)
                          })(e, t, o, s),
                          (i[n] = void 0))
                    }
                  })(e, n, 0, r, l)
                : (
                    '.' === n[0]
                      ? ((n = n.slice(1)), 1)
                      : '^' === n[0]
                      ? ((n = n.slice(1)), 0)
                      : (function (e, n, t, r) {
                          return r
                            ? 'innerHTML' === n || 'textContent' === n || !!(n in e && Aa.test(n) && S(t))
                            : 'spellcheck' !== n &&
                                'draggable' !== n &&
                                'form' !== n &&
                                ('list' !== n || 'INPUT' !== e.tagName) &&
                                ('type' !== n || 'TEXTAREA' !== e.tagName) &&
                                (!Aa.test(n) || !C(t)) &&
                                n in e
                        })(e, n, r, o)
                  )
                ? (function (e, n, t, r, a, o, s) {
                    if ('innerHTML' === n || 'textContent' === n)
                      return r && s(r, a, o), void (e[n] = null == t ? '' : t)
                    if ('value' === n && 'PROGRESS' !== e.tagName) {
                      e._value = t
                      const r = null == t ? '' : t
                      return e.value !== r && (e.value = r), void (null == t && e.removeAttribute(n))
                    }
                    if ('' === t || null == t) {
                      const r = typeof e[n]
                      if ('boolean' === r) return void (e[n] = i(t))
                      if (null == t && 'string' === r) return (e[n] = ''), void e.removeAttribute(n)
                      if ('number' === r) {
                        try {
                          e[n] = 0
                        } catch (e) {}
                        return void e.removeAttribute(n)
                      }
                    }
                    try {
                      e[n] = t
                    } catch (e) {}
                  })(e, n, r, s, l, c, d)
                : ('true-value' === n ? (e._trueValue = r) : 'false-value' === n && (e._falseValue = r),
                  (function (e, n, t, r, o) {
                    if (r && n.startsWith('xlink:'))
                      null == t ? e.removeAttributeNS(wa, n.slice(6, n.length)) : e.setAttributeNS(wa, n, t)
                    else {
                      const r = a(n)
                      null == t || (r && !i(t)) ? e.removeAttribute(n) : e.setAttribute(n, r ? '' : t)
                    }
                  })(e, n, r, o))
            }
          },
          ha
        )
        let Va
        var Wa = br('test button'),
          Qa = br('click here now'),
          Xa = br('Delete'),
          Ja = br('Cancel'),
          Ya = br('DF'),
          ei = br('test paragraph'),
          ni = br('Title'),
          ti = br('Test subtitle'),
          ri = br('ASDASD'),
          ai = br('DuckDuckGo'),
          ii = br('This is a quote. Oh yes it is'),
          oi = br('This is important.'),
          si = br('Dániel Földi')
        const li = { name: 'CenterContents' }
        var ci = t(21)
        const di = {
            name: 'Icon',
            components: {
              CenterContents: (0, ci.Z)(li, [
                [
                  'render',
                  function (e, n, t, r, a, i) {
                    return tr(), or('div', null, [Er(e.$slots, 'default', {}, void 0, !0)])
                  }
                ],
                ['__scopeId', 'data-v-531ce82d']
              ])
            },
            props: {
              name: { type: String, required: !0 },
              size: { type: String, default: 'small' },
              center: { type: Boolean, default: !1 }
            },
            data: function () {
              return { svg: '' }
            }
          },
          ui = (0, ci.Z)(di, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('CenterContents')
                return t.center
                  ? (tr(),
                    sr(
                      o,
                      { key: 0 },
                      {
                        default: Bn(function () {
                          return [gr('i', { class: d([t.name ? 'ph-' + t.name : '', 'font-' + t.size]) }, null, 2)]
                        }),
                        _: 1
                      }
                    ))
                  : (tr(), or('i', { key: 1, class: d([t.name ? 'ph-' + t.name : '', 'font-' + t.size]) }, null, 2))
              }
            ],
            ['__scopeId', 'data-v-57098278']
          ])
        var pi = ['href']
        const gi = { name: 'Link', props: { href: { type: String, required: !0 } } },
          fi = (0, ci.Z)(gi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return tr(), or('a', { href: t.href }, [Er(e.$slots, 'default', {}, void 0, !0)], 8, pi)
              }
            ],
            ['__scopeId', 'data-v-85ad31d0']
          ]),
          mi = { name: 'Subtitle' },
          bi = (0, ci.Z)(mi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return tr(), or('h2', null, [Er(e.$slots, 'default', {}, void 0, !0)])
              }
            ],
            ['__scopeId', 'data-v-2eea751c']
          ])
        var hi = { key: 0 }
        const _i = { name: 'Tag', components: { Icon: ui }, props: { closeable: Boolean } },
          vi = (0, ci.Z)(_i, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('Icon')
                return (
                  tr(),
                  or('span', null, [
                    gr('p', null, [Er(e.$slots, 'default', {}, void 0, !0)]),
                    t.closeable ? (tr(), or('button', hi, [fr(o, { size: 'small', name: 'x' })])) : hr('v-if', !0)
                  ])
                )
              }
            ],
            ['__scopeId', 'data-v-d15ada98']
          ]),
          yi = { name: 'Text' },
          Ei = (0, ci.Z)(yi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return tr(), or('p', null, [Er(e.$slots, 'default', {}, void 0, !0)])
              }
            ],
            ['__scopeId', 'data-v-237f9827']
          ]),
          wi = { name: 'Title' },
          Ni = (0, ci.Z)(wi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return tr(), or('h1', null, [Er(e.$slots, 'default', {}, void 0, !0)])
              }
            ],
            ['__scopeId', 'data-v-df16c992']
          ]),
          xi = { name: 'UserIcon' },
          ki = (0, ci.Z)(xi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return tr(), or('span', null, [gr('p', null, [Er(e.$slots, 'default', {}, void 0, !0)])])
              }
            ],
            ['__scopeId', 'data-v-3e12f8d1']
          ]),
          Oi = { name: 'Button' },
          Si = (0, ci.Z)(Oi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return tr(), or('button', null, [Er(e.$slots, 'default', {}, void 0, !0)])
              }
            ],
            ['__scopeId', 'data-v-94c94d8a']
          ]),
          Ci = { name: 'DestructiveButton', components: { Button: Si } },
          Ai = (0, ci.Z)(Ci, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('Button')
                return (
                  tr(),
                  sr(o, null, {
                    default: Bn(function () {
                      return [Er(e.$slots, 'default', {}, void 0, !0)]
                    }),
                    _: 3
                  })
                )
              }
            ],
            ['__scopeId', 'data-v-0aeeb671']
          ]),
          Mi = { name: 'GhostButton', components: { Button: Si } },
          Ti = (0, ci.Z)(Mi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('Button')
                return (
                  tr(),
                  sr(o, null, {
                    default: Bn(function () {
                      return [Er(e.$slots, 'default', {}, void 0, !0)]
                    }),
                    _: 3
                  })
                )
              }
            ],
            ['__scopeId', 'data-v-615ea37c']
          ]),
          Ii = { name: 'CallToAction', components: { Button: Si } },
          Ri = (0, ci.Z)(Ii, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('Button')
                return (
                  tr(),
                  sr(o, null, {
                    default: Bn(function () {
                      return [Er(e.$slots, 'default', {}, void 0, !0)]
                    }),
                    _: 3
                  })
                )
              }
            ],
            ['__scopeId', 'data-v-435d7232']
          ])
        var Di = ['src', 'alt'],
          Li = { key: 0 }
        const Bi = {
            name: 'Image',
            props: { src: { type: String, required: !0 }, alt: String, caption: { type: Boolean, default: !1 } }
          },
          $i = (0, ci.Z)(Bi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return (
                  tr(),
                  or('figure', null, [
                    gr('img', { src: t.src, alt: t.alt }, null, 8, Di),
                    t.caption ? (tr(), or('figcaption', Li, u(t.alt), 1)) : hr('v-if', !0)
                  ])
                )
              }
            ],
            ['__scopeId', 'data-v-4c011b00']
          ]),
          Pi = t(384)
        var Fi,
          Ui =
            ((Fi = {
              props: {
                code: { type: String, required: !0 },
                language: { type: String, default: '' },
                autodetect: { type: Boolean, default: !0 },
                ignoreIllegals: { type: Boolean, default: !0 }
              },
              setup: function (e) {
                var n,
                  t,
                  r = ((n = e.language), (t = !1), bn(n) ? n : new hn(n, t))
                la(
                  function () {
                    return e.language
                  },
                  function (e) {
                    r.value = e
                  }
                )
                var a = En(function () {
                    return e.autodetect || !r.value
                  }),
                  i = En(function () {
                    return !a.value && !Pi.getLanguage(r.value)
                  })
                return {
                  className: En(function () {
                    return i.value ? '' : 'hljs ' + r.value
                  }),
                  highlightedCode: En(function () {
                    var n
                    if (i.value)
                      return (
                        console.warn('The language "' + r.value + '" you specified could not be found.'),
                        e.code
                          .replace(/&/g, '&amp;')
                          .replace(/</g, '&lt;')
                          .replace(/>/g, '&gt;')
                          .replace(/"/g, '&quot;')
                          .replace(/'/g, '&#x27;')
                      )
                    if (a.value) {
                      var t = Pi.highlightAuto(e.code)
                      return (r.value = null !== (n = t.language) && void 0 !== n ? n : ''), t.value
                    }
                    return (t = Pi.highlight(e.code, { language: r.value, ignoreIllegals: e.ignoreIllegals })).value
                  })
                }
              },
              render: function () {
                return ga('pre', {}, [ga('code', { class: this.className, innerHTML: this.highlightedCode })])
              }
            }),
            S(Fi) ? { setup: Fi, name: Fi.name } : Fi)
        const ji = {
          install: function (e) {
            e.component('highlightjs', Ui)
          },
          component: Ui
        }
        t(259)
        const zi = { name: 'CodeView', props: ['language', 'code'], components: { HightlightJs: ji.component } },
          Hi = (0, ci.Z)(zi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('HightlightJs')
                return tr(), sr(o, { language: t.language, code: t.code }, null, 8, ['language', 'code'])
              }
            ],
            ['__scopeId', 'data-v-7ec252b2']
          ])
        var Ki = br('. All rights reserved.')
        const qi = {
            name: 'Copyright',
            components: { Icon: ui },
            props: {
              start: { type: Number, default: new Date().getFullYear() },
              end: { type: Number, default: new Date().getFullYear() }
            },
            computed: {
              year: function () {
                return this.start + (this.start !== this.end ? ' - ' + this.end : '')
              }
            }
          },
          Zi = (0, ci.Z)(qi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('Icon')
                return (
                  tr(),
                  or('div', null, [
                    fr(o, { name: 'copyright' }),
                    gr('p', null, [br('Copyright ' + u(i.year) + ' ', 1), Er(e.$slots, 'default', {}, void 0, !0), Ki])
                  ])
                )
              }
            ],
            ['__scopeId', 'data-v-0d256cd4']
          ]),
          Gi = { name: 'HighlightedText', components: { Text: Ei } },
          Vi = (0, ci.Z)(Gi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('Text')
                return (
                  tr(),
                  sr(o, null, {
                    default: Bn(function () {
                      return [gr('span', null, [Er(e.$slots, 'default', {}, void 0, !0)])]
                    }),
                    _: 3
                  })
                )
              }
            ],
            ['__scopeId', 'data-v-6ae14dfd']
          ])
        var Wi = { key: 0 }
        const Qi = { name: 'Quote', props: ['from'] },
          Xi = (0, ci.Z)(Qi, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return (
                  tr(),
                  or('div', null, [
                    gr('blockquote', null, [Er(e.$slots, 'default', {}, void 0, !0)]),
                    t.from ? (tr(), or('p', Wi, u(t.from), 1)) : hr('v-if', !0)
                  ])
                )
              }
            ],
            ['__scopeId', 'data-v-5b84b254']
          ])
        var Ji = { key: 0 },
          Yi = { key: 1 },
          eo = { key: 2 },
          no = { key: 3 },
          to = { key: 4 },
          ro = { key: 5 },
          ao = { key: 6 },
          io = function () {
            var e = navigator.platform
            return ['iPhone', 'iPod', 'iPad', 'Mac'].some(function (n) {
              return e.includes(n)
            })
          }
        const oo =
          ((co = { Icon: ui }),
          (lo = 'components') in
          (so = {
            name: 'KeyboardShortcut',
            components: { Icon: ui },
            props: {
              ctrl: { type: Boolean, default: !1 },
              shift: { type: Boolean, default: !1 },
              alt: { type: Boolean, default: !1 },
              meta: { type: Boolean, default: !1 },
              keyboardKey: { type: String, required: !0 }
            },
            computed: {
              altgr: function () {
                return !io() && this.ctrl && this.alt
              },
              ctrlkey: function () {
                return io() ? '^' : 'Ctrl'
              },
              altkey: function () {
                return io() ? '⌥' : 'Alt'
              },
              metakey: function () {
                return io() ? '!icon' : 'Win'
              },
              shiftkey: function () {
                return io() ? '!icon' : 'Shift'
              }
            }
          })
            ? Object.defineProperty(so, lo, { value: co, enumerable: !0, configurable: !0, writable: !0 })
            : (so[lo] = co),
          so)
        var so, lo, co
        const uo = (0, ci.Z)(oo, [
          [
            'render',
            function (e, n, t, r, a, i) {
              var o = Gt('Icon')
              return (
                tr(),
                or('span', null, [
                  i.altgr ? (tr(), or('kbd', Ji, 'AltGr')) : hr('v-if', !0),
                  t.ctrl && !i.altgr ? (tr(), or('kbd', Yi, u(i.ctrlkey), 1)) : hr('v-if', !0),
                  t.alt && !i.altgr ? (tr(), or('kbd', eo, u(i.altkey), 1)) : hr('v-if', !0),
                  t.meta && '!icon' === i.metakey
                    ? (tr(), or('kbd', no, [fr(o, { name: 'command', size: 'small' })]))
                    : t.meta
                    ? (tr(), or('kbd', to, u(i.metakey), 1))
                    : hr('v-if', !0),
                  t.shift && '!icon' === i.shiftkey
                    ? (tr(), or('kbd', ro, [fr(o, { name: 'arrow-fat-up', size: 'small' })]))
                    : t.shift
                    ? (tr(), or('kbd', ao, u(i.shiftkey), 1))
                    : hr('v-if', !0),
                  gr('kbd', null, u(t.keyboardKey), 1)
                ])
              )
            }
          ],
          ['__scopeId', 'data-v-2d0d4386']
        ])
        var po = { class: 'paintbrush-container' }
        const go = {
            name: 'Base',
            props: { primary: { type: String, default: 'blue' }, secondary: { type: String, default: 'purple' } },
            provide: function () {
              var e = this
              return {
                primary: En(function () {
                  return e.primary
                }),
                secondary: En(function () {
                  return e.secondary
                })
              }
            }
          },
          fo = (0, ci.Z)(go, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return tr(), or('div', po, [Er(e.$slots, 'default', {}, void 0, !0)])
              }
            ],
            ['__scopeId', 'data-v-613aac34']
          ])
        var mo = br('Paintbrush'),
          bo = (function (e) {
            return (Dn = 'data-v-720f5eaa'), (e = e()), (Dn = null), e
          })(function () {
            return gr('img', { src: 'assets/paintbrush.png' }, null, -1)
          }),
          ho = {
            name: 'PaintbrushLogo',
            props: { size: { type: Number, default: 48 } },
            computed: {
              sizePx: function () {
                return ''.concat(this.size, 'px')
              }
            }
          },
          _o = function () {
            Ma(function (e) {
              return { '015bcf60': e.sizePx }
            })
          },
          vo = ho.setup
        ho.setup = vo
          ? function (e, n) {
              return _o(), vo(e, n)
            }
          : _o
        const yo = ho,
          Eo = {
            name: 'PaintbrushTitle',
            components: {
              PaintbrushLogo: (0, ci.Z)(yo, [
                [
                  'render',
                  function (e, n, t, r, a, i) {
                    return tr(), or(Qt, null, [hr(' TODO change to full url, make transparent'), bo], 2112)
                  }
                ],
                ['__scopeId', 'data-v-720f5eaa']
              ]),
              Title: Ni
            }
          },
          wo = (0, ci.Z)(Eo, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('PaintbrushLogo'),
                  s = Gt('Title')
                return (
                  tr(),
                  or('div', null, [
                    fr(o),
                    hr(' TODO find more rounded font '),
                    fr(s, null, {
                      default: Bn(function () {
                        return [mo]
                      }),
                      _: 1
                    })
                  ])
                )
              }
            ],
            ['__scopeId', 'data-v-978f44bc']
          ])
        var No = { href: 'https://paintbrush.design' }
        const xo = { name: 'PoweredBy' },
          ko = (0, ci.Z)(xo, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return tr(), or('a', No, 'Powered by Paintbrush')
              }
            ],
            ['__scopeId', 'data-v-f191a644']
          ])
        var Oo = { class: 'menubar-container' },
          So = { class: 'menubar-left' },
          Co = { class: 'menubar-center' },
          Ao = { class: 'menubar-right' }
        const Mo = {},
          To = (0, ci.Z)(Mo, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return (
                  tr(),
                  or('div', Oo, [
                    gr('nav', null, [
                      gr('div', So, [Er(e.$slots, 'menubar-left', {}, void 0, !0)]),
                      gr('div', Co, [Er(e.$slots, 'menubar-center', {}, void 0, !0)]),
                      gr('div', Ao, [Er(e.$slots, 'menubar-right', {}, void 0, !0)])
                    ]),
                    gr('main', null, [gr('div', null, [Er(e.$slots, 'content', {}, void 0, !0)])])
                  ])
                )
              }
            ],
            ['__scopeId', 'data-v-07df0ef1']
          ])
        var Io = { class: 'sidebar-container' },
          Ro = { class: 'sidebar-top' },
          Do = { class: 'sidebar-middle' },
          Lo = { class: 'sidebar-bottom' }
        const Bo = { name: 'Sidebar' },
          $o = (0, ci.Z)(Bo, [
            [
              'render',
              function (e, n, t, r, a, i) {
                return (
                  tr(),
                  or('div', Io, [
                    gr('aside', null, [
                      gr('div', Ro, [Er(e.$slots, 'sidebar-top', {}, void 0, !0)]),
                      gr('div', Do, [Er(e.$slots, 'sidebar-middle', {}, void 0, !0)]),
                      gr('div', Lo, [Er(e.$slots, 'sidebar-bottom', {}, void 0, !0)])
                    ]),
                    gr('main', null, [gr('div', null, [Er(e.$slots, 'content', {}, void 0, !0)])])
                  ])
                )
              }
            ],
            ['__scopeId', 'data-v-439c1487']
          ])
        var Po = t(931),
          Fo = {
            name: 'SidebarEntry',
            components: { Icon: ui, Link: fi, Text: Ei },
            inject: ['primary', 'secondary'],
            props: {
              color: { type: String, default: 'primary' },
              icon: { type: String, required: !0 },
              label: { type: String, required: !0 }
            },
            computed: {
              iconColor: function () {
                return (
                  console.log(
                    (0, Po.resolve)(this.color, this.primary.value, this.secondary.value),
                    this.color,
                    this.primary,
                    this.secondary
                  ),
                  (0, Po.resolve)(this.color, this.primary.value, this.secondary.value)
                )
              }
            }
          },
          Uo = function () {
            Ma(function (e) {
              return { '61746de4': e.iconColor }
            })
          },
          jo = Fo.setup
        Fo.setup = jo
          ? function (e, n) {
              return Uo(), jo(e, n)
            }
          : Uo
        const zo = Fo,
          Ho = (0, ci.Z)(zo, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('Icon'),
                  s = Gt('Text'),
                  l = Gt('Link')
                return (
                  tr(),
                  sr(
                    l,
                    { href: e.href },
                    {
                      default: Bn(function () {
                        return [
                          fr(o, { name: t.icon, center: 'true', size: 'large' }, null, 8, ['name']),
                          fr(s, null, {
                            default: Bn(function () {
                              return [br(u(t.label), 1)]
                            }),
                            _: 1
                          })
                        ]
                      }),
                      _: 1
                    },
                    8,
                    ['href']
                  )
                )
              }
            ],
            ['__scopeId', 'data-v-1e5300ca']
          ])
        var Ko
        function qo(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
              : (e[n] = t),
            e
          )
        }
        const Zo = {
          el: '#app',
          components:
            ((Ko = {
              Paintbrush: fo,
              Button: Si,
              SecondaryButton: Ri,
              DestructiveButton: Ai,
              GhostButton: Ti,
              Copyright: Zi,
              PoweredBy: ko,
              Link: fi,
              Icon: ui,
              Subtitle: bi,
              Tag: vi,
              CodeView: Hi,
              Image: $i,
              Title: Ni,
              Text: Ei,
              UserIcon: ki,
              Quote: Xi,
              HighlightedText: Vi,
              Shortcut: uo,
              Menubar: To,
              Sidebar: $o
            }),
            qo(Ko, 'PoweredBy', ko),
            qo(Ko, 'PaintbrushTitle', wo),
            qo(Ko, 'SidebarEntry', Ho),
            Ko)
        }
        ;((...e) => {
          const n = (Va || (Va = zt(Ga))).createApp(...e),
            { mount: t } = n
          return (
            (n.mount = e => {
              const r = (function (e) {
                return C(e) ? document.querySelector(e) : e
              })(e)
              if (!r) return
              const a = n._component
              S(a) || a.render || a.template || (a.template = r.innerHTML), (r.innerHTML = '')
              const i = t(r, !1, r instanceof SVGElement)
              return r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), i
            }),
            n
          )
        })(
          (0, ci.Z)(Zo, [
            [
              'render',
              function (e, n, t, r, a, i) {
                var o = Gt('PaintbrushTitle'),
                  s = Gt('SidebarEntry'),
                  l = Gt('PoweredBy'),
                  c = Gt('Button'),
                  d = Gt('SecondaryButton'),
                  u = Gt('DestructiveButton'),
                  p = Gt('GhostButton'),
                  g = Gt('UserIcon'),
                  f = Gt('Text'),
                  m = Gt('Title'),
                  b = Gt('Subtitle'),
                  h = Gt('Icon'),
                  _ = Gt('Tag'),
                  v = Gt('Link'),
                  y = Gt('Quote'),
                  E = Gt('Shortcut'),
                  w = Gt('CodeView'),
                  N = Gt('HighlightedText'),
                  x = Gt('Image'),
                  k = Gt('Copyright'),
                  O = Gt('Sidebar'),
                  S = Gt('Paintbrush')
                return (
                  tr(),
                  sr(S, null, {
                    default: Bn(function () {
                      return [
                        fr(O, null, {
                          'sidebar-top': Bn(function () {
                            return [fr(o)]
                          }),
                          'sidebar-middle': Bn(function () {
                            return [
                              fr(s, { color: 'blue', href: '/setup', icon: 'gear-six', label: 'Setup' }),
                              fr(s, { color: 'purple', href: '/components', icon: 'cube', label: 'Components' }),
                              fr(s, { color: 'teal', href: '/examples', icon: 'brackets-curly', label: 'Examples' }),
                              fr(s, { color: 'orange', href: '/links', icon: 'link', label: 'Links' })
                            ]
                          }),
                          'sidebar-bottom': Bn(function () {
                            return [fr(l)]
                          }),
                          content: Bn(function () {
                            return [
                              fr(c, null, {
                                default: Bn(function () {
                                  return [Wa]
                                }),
                                _: 1
                              }),
                              fr(d, null, {
                                default: Bn(function () {
                                  return [Qa]
                                }),
                                _: 1
                              }),
                              fr(u, null, {
                                default: Bn(function () {
                                  return [Xa]
                                }),
                                _: 1
                              }),
                              fr(p, null, {
                                default: Bn(function () {
                                  return [Ja]
                                }),
                                _: 1
                              }),
                              fr(g, null, {
                                default: Bn(function () {
                                  return [Ya]
                                }),
                                _: 1
                              }),
                              fr(f, null, {
                                default: Bn(function () {
                                  return [ei]
                                }),
                                _: 1
                              }),
                              fr(m, null, {
                                default: Bn(function () {
                                  return [ni]
                                }),
                                _: 1
                              }),
                              fr(b, null, {
                                default: Bn(function () {
                                  return [ti]
                                }),
                                _: 1
                              }),
                              fr(h, { name: 'x' }),
                              fr(
                                _,
                                { closeable: 'true' },
                                {
                                  default: Bn(function () {
                                    return [ri]
                                  }),
                                  _: 1
                                }
                              ),
                              fr(
                                v,
                                { href: 'https://duckduckgo.com' },
                                {
                                  default: Bn(function () {
                                    return [ai]
                                  }),
                                  _: 1
                                }
                              ),
                              fr(
                                y,
                                { from: 'Author' },
                                {
                                  default: Bn(function () {
                                    return [ii]
                                  }),
                                  _: 1
                                }
                              ),
                              fr(E, { 'keyboard-key': 'F5', alt: 'true', shift: 'true' }),
                              fr(w, { language: 'js', code: 'const x = 3;' }),
                              fr(N, null, {
                                default: Bn(function () {
                                  return [oi]
                                }),
                                _: 1
                              }),
                              fr(x, { src: 'assets/test.jpg', caption: '', alt: 'Test caption' }),
                              fr(k, null, {
                                default: Bn(function () {
                                  return [si]
                                }),
                                _: 1
                              })
                            ]
                          }),
                          _: 1
                        })
                      ]
                    }),
                    _: 1
                  })
                )
              }
            ]
          ])
        ).mount('#app')
      },
      21: (e, n) => {
        'use strict'
        n.Z = (e, n) => {
          for (const [t, r] of n) e[t] = r
          return e
        }
      },
      931: e => {
        var n = {
          red: '#ff3333',
          orange: '#ff6d1f',
          green: '#11e454',
          teal: '#22e0ff',
          blue: '#3e56f4',
          purple: '#7e09ec',
          pink: '#ec368d',
          black: '#111111',
          gray: '#aaaaaa',
          silver: '#dddddd',
          white: '#ffffff'
        }
        e.exports = {
          resolve: function (e, t, r) {
            return 'primary' === e ? (e = t) : 'secondary' === e && (e = r), -1 !== Object.keys(n).indexOf(e) ? n[e] : e
          },
          scheme: n,
          hues: ['red', 'orange', 'green', 'teal', 'blue', 'purple', 'pink'],
          grayscale: ['black', 'gray', 'silver', 'white']
        }
      },
      259: (e, n, t) => {
        var r = t(384)
        r.registerLanguage('xml', t(285)),
          r.registerLanguage('bash', t(564)),
          r.registerLanguage('c', t(128)),
          r.registerLanguage('cpp', t(129)),
          r.registerLanguage('csharp', t(271)),
          r.registerLanguage('css', t(855)),
          r.registerLanguage('markdown', t(6)),
          r.registerLanguage('diff', t(654)),
          r.registerLanguage('ruby', t(161)),
          r.registerLanguage('go', t(417)),
          r.registerLanguage('ini', t(178)),
          r.registerLanguage('java', t(793)),
          r.registerLanguage('javascript', t(721)),
          r.registerLanguage('json', t(42)),
          r.registerLanguage('kotlin', t(326)),
          r.registerLanguage('less', t(539)),
          r.registerLanguage('lua', t(702)),
          r.registerLanguage('makefile', t(13)),
          r.registerLanguage('perl', t(768)),
          r.registerLanguage('objectivec', t(652)),
          r.registerLanguage('php', t(938)),
          r.registerLanguage('php-template', t(218)),
          r.registerLanguage('plaintext', t(594)),
          r.registerLanguage('python', t(566)),
          r.registerLanguage('python-repl', t(216)),
          r.registerLanguage('r', t(764)),
          r.registerLanguage('rust', t(358)),
          r.registerLanguage('scss', t(630)),
          r.registerLanguage('shell', t(499)),
          r.registerLanguage('sql', t(662)),
          r.registerLanguage('swift', t(990)),
          r.registerLanguage('yaml', t(692)),
          r.registerLanguage('typescript', t(36)),
          r.registerLanguage('vbnet', t(617)),
          (r.HighlightJS = r),
          (r.default = r),
          (e.exports = r)
      },
      384: e => {
        var n = { exports: {} }
        function t(e) {
          return (
            e instanceof Map
              ? (e.clear =
                  e.delete =
                  e.set =
                    function () {
                      throw new Error('map is read-only')
                    })
              : e instanceof Set &&
                (e.add =
                  e.clear =
                  e.delete =
                    function () {
                      throw new Error('set is read-only')
                    }),
            Object.freeze(e),
            Object.getOwnPropertyNames(e).forEach(function (n) {
              var r = e[n]
              'object' != typeof r || Object.isFrozen(r) || t(r)
            }),
            e
          )
        }
        ;(n.exports = t), (n.exports.default = t)
        var r = n.exports
        class a {
          constructor(e) {
            void 0 === e.data && (e.data = {}), (this.data = e.data), (this.isMatchIgnored = !1)
          }
          ignoreMatch() {
            this.isMatchIgnored = !0
          }
        }
        function i(e) {
          return e
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
        }
        function o(e, ...n) {
          const t = Object.create(null)
          for (const n in e) t[n] = e[n]
          return (
            n.forEach(function (e) {
              for (const n in e) t[n] = e[n]
            }),
            t
          )
        }
        const s = e => !!e.kind
        class l {
          constructor(e, n) {
            ;(this.buffer = ''), (this.classPrefix = n.classPrefix), e.walk(this)
          }
          addText(e) {
            this.buffer += i(e)
          }
          openNode(e) {
            if (!s(e)) return
            let n = e.kind
            ;(n = e.sublanguage
              ? `language-${n}`
              : ((e, { prefix: n }) => {
                  if (e.includes('.')) {
                    const t = e.split('.')
                    return [`${n}${t.shift()}`, ...t.map((e, n) => `${e}${'_'.repeat(n + 1)}`)].join(' ')
                  }
                  return `${n}${e}`
                })(n, { prefix: this.classPrefix })),
              this.span(n)
          }
          closeNode(e) {
            s(e) && (this.buffer += '</span>')
          }
          value() {
            return this.buffer
          }
          span(e) {
            this.buffer += `<span class="${e}">`
          }
        }
        class c {
          constructor() {
            ;(this.rootNode = { children: [] }), (this.stack = [this.rootNode])
          }
          get top() {
            return this.stack[this.stack.length - 1]
          }
          get root() {
            return this.rootNode
          }
          add(e) {
            this.top.children.push(e)
          }
          openNode(e) {
            const n = { kind: e, children: [] }
            this.add(n), this.stack.push(n)
          }
          closeNode() {
            if (this.stack.length > 1) return this.stack.pop()
          }
          closeAllNodes() {
            for (; this.closeNode(); );
          }
          toJSON() {
            return JSON.stringify(this.rootNode, null, 4)
          }
          walk(e) {
            return this.constructor._walk(e, this.rootNode)
          }
          static _walk(e, n) {
            return (
              'string' == typeof n
                ? e.addText(n)
                : n.children && (e.openNode(n), n.children.forEach(n => this._walk(e, n)), e.closeNode(n)),
              e
            )
          }
          static _collapse(e) {
            'string' != typeof e &&
              e.children &&
              (e.children.every(e => 'string' == typeof e)
                ? (e.children = [e.children.join('')])
                : e.children.forEach(e => {
                    c._collapse(e)
                  }))
          }
        }
        class d extends c {
          constructor(e) {
            super(), (this.options = e)
          }
          addKeyword(e, n) {
            '' !== e && (this.openNode(n), this.addText(e), this.closeNode())
          }
          addText(e) {
            '' !== e && this.add(e)
          }
          addSublanguage(e, n) {
            const t = e.root
            ;(t.kind = n), (t.sublanguage = !0), this.add(t)
          }
          toHTML() {
            return new l(this, this.options).value()
          }
          finalize() {
            return !0
          }
        }
        function u(e) {
          return e ? ('string' == typeof e ? e : e.source) : null
        }
        function p(e) {
          return m('(?=', e, ')')
        }
        function g(e) {
          return m('(?:', e, ')*')
        }
        function f(e) {
          return m('(?:', e, ')?')
        }
        function m(...e) {
          return e.map(e => u(e)).join('')
        }
        function b(...e) {
          const n = (function (e) {
            const n = e[e.length - 1]
            return 'object' == typeof n && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {}
          })(e)
          return '(' + (n.capture ? '' : '?:') + e.map(e => u(e)).join('|') + ')'
        }
        function h(e) {
          return new RegExp(e.toString() + '|').exec('').length - 1
        }
        const _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
        function v(e, { joinWith: n }) {
          let t = 0
          return e
            .map(e => {
              t += 1
              const n = t
              let r = u(e),
                a = ''
              for (; r.length > 0; ) {
                const e = _.exec(r)
                if (!e) {
                  a += r
                  break
                }
                ;(a += r.substring(0, e.index)),
                  (r = r.substring(e.index + e[0].length)),
                  '\\' === e[0][0] && e[1] ? (a += '\\' + String(Number(e[1]) + n)) : ((a += e[0]), '(' === e[0] && t++)
              }
              return a
            })
            .map(e => `(${e})`)
            .join(n)
        }
        const y = '[a-zA-Z]\\w*',
          E = '[a-zA-Z_]\\w*',
          w = '\\b\\d+(\\.\\d+)?',
          N = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
          x = '\\b(0b[01]+)',
          k = { begin: '\\\\[\\s\\S]', relevance: 0 },
          O = { scope: 'string', begin: "'", end: "'", illegal: '\\n', contains: [k] },
          S = { scope: 'string', begin: '"', end: '"', illegal: '\\n', contains: [k] },
          C = function (e, n, t = {}) {
            const r = o({ scope: 'comment', begin: e, end: n, contains: [] }, t)
            r.contains.push({
              scope: 'doctag',
              begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
              end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
              excludeBegin: !0,
              relevance: 0
            })
            const a = b(
              'I',
              'a',
              'is',
              'so',
              'us',
              'to',
              'at',
              'if',
              'in',
              'it',
              'on',
              /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
              /[A-Za-z]+[-][a-z]+/,
              /[A-Za-z][a-z]{2,}/
            )
            return r.contains.push({ begin: m(/[ ]+/, '(', a, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), r
          },
          A = C('//', '$'),
          M = C('/\\*', '\\*/'),
          T = C('#', '$'),
          I = { scope: 'number', begin: w, relevance: 0 },
          R = { scope: 'number', begin: N, relevance: 0 },
          D = { scope: 'number', begin: x, relevance: 0 },
          L = {
            begin: /(?=\/[^/\n]*\/)/,
            contains: [
              {
                scope: 'regexp',
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [k, { begin: /\[/, end: /\]/, relevance: 0, contains: [k] }]
              }
            ]
          },
          B = { scope: 'title', begin: y, relevance: 0 },
          $ = { scope: 'title', begin: E, relevance: 0 }
        var P = Object.freeze({
          __proto__: null,
          MATCH_NOTHING_RE: /\b\B/,
          IDENT_RE: y,
          UNDERSCORE_IDENT_RE: E,
          NUMBER_RE: w,
          C_NUMBER_RE: N,
          BINARY_NUMBER_RE: x,
          RE_STARTERS_RE:
            '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
          SHEBANG: (e = {}) => {
            const n = /^#![ ]*\//
            return (
              e.binary && (e.begin = m(n, /.*\b/, e.binary, /\b.*/)),
              o(
                {
                  scope: 'meta',
                  begin: n,
                  end: /$/,
                  relevance: 0,
                  'on:begin': (e, n) => {
                    0 !== e.index && n.ignoreMatch()
                  }
                },
                e
              )
            )
          },
          BACKSLASH_ESCAPE: k,
          APOS_STRING_MODE: O,
          QUOTE_STRING_MODE: S,
          PHRASAL_WORDS_MODE: {
            begin:
              /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
          },
          COMMENT: C,
          C_LINE_COMMENT_MODE: A,
          C_BLOCK_COMMENT_MODE: M,
          HASH_COMMENT_MODE: T,
          NUMBER_MODE: I,
          C_NUMBER_MODE: R,
          BINARY_NUMBER_MODE: D,
          REGEXP_MODE: L,
          TITLE_MODE: B,
          UNDERSCORE_TITLE_MODE: $,
          METHOD_GUARD: { begin: '\\.\\s*[a-zA-Z_]\\w*', relevance: 0 },
          END_SAME_AS_BEGIN: function (e) {
            return Object.assign(e, {
              'on:begin': (e, n) => {
                n.data._beginMatch = e[1]
              },
              'on:end': (e, n) => {
                n.data._beginMatch !== e[1] && n.ignoreMatch()
              }
            })
          }
        })
        function F(e, n) {
          '.' === e.input[e.index - 1] && n.ignoreMatch()
        }
        function U(e, n) {
          void 0 !== e.className && ((e.scope = e.className), delete e.className)
        }
        function j(e, n) {
          n &&
            e.beginKeywords &&
            ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
            (e.__beforeBegin = F),
            (e.keywords = e.keywords || e.beginKeywords),
            delete e.beginKeywords,
            void 0 === e.relevance && (e.relevance = 0))
        }
        function z(e, n) {
          Array.isArray(e.illegal) && (e.illegal = b(...e.illegal))
        }
        function H(e, n) {
          if (e.match) {
            if (e.begin || e.end) throw new Error('begin & end are not supported with match')
            ;(e.begin = e.match), delete e.match
          }
        }
        function K(e, n) {
          void 0 === e.relevance && (e.relevance = 1)
        }
        const q = (e, n) => {
            if (!e.beforeMatch) return
            if (e.starts) throw new Error('beforeMatch cannot be used with starts')
            const t = Object.assign({}, e)
            Object.keys(e).forEach(n => {
              delete e[n]
            }),
              (e.keywords = t.keywords),
              (e.begin = m(t.beforeMatch, p(t.begin))),
              (e.starts = { relevance: 0, contains: [Object.assign(t, { endsParent: !0 })] }),
              (e.relevance = 0),
              delete t.beforeMatch
          },
          Z = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value']
        function G(e, n, t = 'keyword') {
          const r = Object.create(null)
          return (
            'string' == typeof e
              ? a(t, e.split(' '))
              : Array.isArray(e)
              ? a(t, e)
              : Object.keys(e).forEach(function (t) {
                  Object.assign(r, G(e[t], n, t))
                }),
            r
          )
          function a(e, t) {
            n && (t = t.map(e => e.toLowerCase())),
              t.forEach(function (n) {
                const t = n.split('|')
                r[t[0]] = [e, V(t[0], t[1])]
              })
          }
        }
        function V(e, n) {
          return n
            ? Number(n)
            : (function (e) {
                return Z.includes(e.toLowerCase())
              })(e)
            ? 0
            : 1
        }
        const W = {},
          Q = e => {
            console.error(e)
          },
          X = (e, ...n) => {
            console.log(`WARN: ${e}`, ...n)
          },
          J = (e, n) => {
            W[`${e}/${n}`] || (console.log(`Deprecated as of ${e}. ${n}`), (W[`${e}/${n}`] = !0))
          },
          Y = new Error()
        function ee(e, n, { key: t }) {
          let r = 0
          const a = e[t],
            i = {},
            o = {}
          for (let e = 1; e <= n.length; e++) (o[e + r] = a[e]), (i[e + r] = !0), (r += h(n[e - 1]))
          ;(e[t] = o), (e[t]._emit = i), (e[t]._multi = !0)
        }
        function ne(e) {
          !(function (e) {
            e.scope && 'object' == typeof e.scope && null !== e.scope && ((e.beginScope = e.scope), delete e.scope)
          })(e),
            'string' == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }),
            'string' == typeof e.endScope && (e.endScope = { _wrap: e.endScope }),
            (function (e) {
              if (Array.isArray(e.begin)) {
                if (e.skip || e.excludeBegin || e.returnBegin)
                  throw (Q('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), Y)
                if ('object' != typeof e.beginScope || null === e.beginScope) throw (Q('beginScope must be object'), Y)
                ee(e, e.begin, { key: 'beginScope' }), (e.begin = v(e.begin, { joinWith: '' }))
              }
            })(e),
            (function (e) {
              if (Array.isArray(e.end)) {
                if (e.skip || e.excludeEnd || e.returnEnd)
                  throw (Q('skip, excludeEnd, returnEnd not compatible with endScope: {}'), Y)
                if ('object' != typeof e.endScope || null === e.endScope) throw (Q('endScope must be object'), Y)
                ee(e, e.end, { key: 'endScope' }), (e.end = v(e.end, { joinWith: '' }))
              }
            })(e)
        }
        function te(e) {
          function n(n, t) {
            return new RegExp(
              u(n),
              'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (t ? 'g' : '')
            )
          }
          class t {
            constructor() {
              ;(this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0)
            }
            addRule(e, n) {
              ;(n.position = this.position++),
                (this.matchIndexes[this.matchAt] = n),
                this.regexes.push([n, e]),
                (this.matchAt += h(e) + 1)
            }
            compile() {
              0 === this.regexes.length && (this.exec = () => null)
              const e = this.regexes.map(e => e[1])
              ;(this.matcherRe = n(v(e, { joinWith: '|' }), !0)), (this.lastIndex = 0)
            }
            exec(e) {
              this.matcherRe.lastIndex = this.lastIndex
              const n = this.matcherRe.exec(e)
              if (!n) return null
              const t = n.findIndex((e, n) => n > 0 && void 0 !== e),
                r = this.matchIndexes[t]
              return n.splice(0, t), Object.assign(n, r)
            }
          }
          class r {
            constructor() {
              ;(this.rules = []),
                (this.multiRegexes = []),
                (this.count = 0),
                (this.lastIndex = 0),
                (this.regexIndex = 0)
            }
            getMatcher(e) {
              if (this.multiRegexes[e]) return this.multiRegexes[e]
              const n = new t()
              return (
                this.rules.slice(e).forEach(([e, t]) => n.addRule(e, t)), n.compile(), (this.multiRegexes[e] = n), n
              )
            }
            resumingScanAtSamePosition() {
              return 0 !== this.regexIndex
            }
            considerAll() {
              this.regexIndex = 0
            }
            addRule(e, n) {
              this.rules.push([e, n]), 'begin' === n.type && this.count++
            }
            exec(e) {
              const n = this.getMatcher(this.regexIndex)
              n.lastIndex = this.lastIndex
              let t = n.exec(e)
              if (this.resumingScanAtSamePosition())
                if (t && t.index === this.lastIndex);
                else {
                  const n = this.getMatcher(0)
                  ;(n.lastIndex = this.lastIndex + 1), (t = n.exec(e))
                }
              return t && ((this.regexIndex += t.position + 1), this.regexIndex === this.count && this.considerAll()), t
            }
          }
          if ((e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes('self')))
            throw new Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.')
          return (
            (e.classNameAliases = o(e.classNameAliases || {})),
            (function t(a, i) {
              const s = a
              if (a.isCompiled) return s
              ;[U, H, ne, q].forEach(e => e(a, i)),
                e.compilerExtensions.forEach(e => e(a, i)),
                (a.__beforeBegin = null),
                [j, z, K].forEach(e => e(a, i)),
                (a.isCompiled = !0)
              let l = null
              return (
                'object' == typeof a.keywords &&
                  a.keywords.$pattern &&
                  ((a.keywords = Object.assign({}, a.keywords)), (l = a.keywords.$pattern), delete a.keywords.$pattern),
                (l = l || /\w+/),
                a.keywords && (a.keywords = G(a.keywords, e.case_insensitive)),
                (s.keywordPatternRe = n(l, !0)),
                i &&
                  (a.begin || (a.begin = /\B|\b/),
                  (s.beginRe = n(s.begin)),
                  a.end || a.endsWithParent || (a.end = /\B|\b/),
                  a.end && (s.endRe = n(s.end)),
                  (s.terminatorEnd = u(s.end) || ''),
                  a.endsWithParent && i.terminatorEnd && (s.terminatorEnd += (a.end ? '|' : '') + i.terminatorEnd)),
                a.illegal && (s.illegalRe = n(a.illegal)),
                a.contains || (a.contains = []),
                (a.contains = [].concat(
                  ...a.contains.map(function (e) {
                    return (function (e) {
                      return (
                        e.variants &&
                          !e.cachedVariants &&
                          (e.cachedVariants = e.variants.map(function (n) {
                            return o(e, { variants: null }, n)
                          })),
                        e.cachedVariants
                          ? e.cachedVariants
                          : re(e)
                          ? o(e, { starts: e.starts ? o(e.starts) : null })
                          : Object.isFrozen(e)
                          ? o(e)
                          : e
                      )
                    })('self' === e ? a : e)
                  })
                )),
                a.contains.forEach(function (e) {
                  t(e, s)
                }),
                a.starts && t(a.starts, i),
                (s.matcher = (function (e) {
                  const n = new r()
                  return (
                    e.contains.forEach(e => n.addRule(e.begin, { rule: e, type: 'begin' })),
                    e.terminatorEnd && n.addRule(e.terminatorEnd, { type: 'end' }),
                    e.illegal && n.addRule(e.illegal, { type: 'illegal' }),
                    n
                  )
                })(s)),
                s
              )
            })(e)
          )
        }
        function re(e) {
          return !!e && (e.endsWithParent || re(e.starts))
        }
        class ae extends Error {
          constructor(e, n) {
            super(e), (this.name = 'HTMLInjectionError'), (this.html = n)
          }
        }
        const ie = i,
          oe = o,
          se = Symbol('nomatch')
        var le = (function (e) {
          const n = Object.create(null),
            t = Object.create(null),
            i = []
          let o = !0
          const s = "Could not find the language '{}', did you forget to load/include a language module?",
            l = { disableAutodetect: !0, name: 'Plain text', contains: [] }
          let c = {
            ignoreUnescapedHTML: !1,
            throwUnescapedHTML: !1,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: 'hljs-',
            cssSelector: 'pre code',
            languages: null,
            __emitter: d
          }
          function u(e) {
            return c.noHighlightRe.test(e)
          }
          function h(e, n, t) {
            let r = '',
              a = ''
            'object' == typeof n
              ? ((r = e), (t = n.ignoreIllegals), (a = n.language))
              : (J('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
                J(
                  '10.7.0',
                  'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'
                ),
                (a = e),
                (r = n)),
              void 0 === t && (t = !0)
            const i = { code: r, language: a }
            O('before:highlight', i)
            const o = i.result ? i.result : _(i.language, i.code, t)
            return (o.code = i.code), O('after:highlight', o), o
          }
          function _(e, t, r, i) {
            const l = Object.create(null)
            function d() {
              if (!k.keywords) return void S.addText(C)
              let e = 0
              k.keywordPatternRe.lastIndex = 0
              let n = k.keywordPatternRe.exec(C),
                t = ''
              for (; n; ) {
                t += C.substring(e, n.index)
                const a = E.case_insensitive ? n[0].toLowerCase() : n[0],
                  i = ((r = a), k.keywords[r])
                if (i) {
                  const [e, r] = i
                  if ((S.addText(t), (t = ''), (l[a] = (l[a] || 0) + 1), l[a] <= 7 && (A += r), e.startsWith('_')))
                    t += n[0]
                  else {
                    const t = E.classNameAliases[e] || e
                    S.addKeyword(n[0], t)
                  }
                } else t += n[0]
                ;(e = k.keywordPatternRe.lastIndex), (n = k.keywordPatternRe.exec(C))
              }
              var r
              ;(t += C.substr(e)), S.addText(t)
            }
            function u() {
              null != k.subLanguage
                ? (function () {
                    if ('' === C) return
                    let e = null
                    if ('string' == typeof k.subLanguage) {
                      if (!n[k.subLanguage]) return void S.addText(C)
                      ;(e = _(k.subLanguage, C, !0, O[k.subLanguage])), (O[k.subLanguage] = e._top)
                    } else e = v(C, k.subLanguage.length ? k.subLanguage : null)
                    k.relevance > 0 && (A += e.relevance), S.addSublanguage(e._emitter, e.language)
                  })()
                : d(),
                (C = '')
            }
            function p(e, n) {
              let t = 1
              for (; void 0 !== n[t]; ) {
                if (!e._emit[t]) {
                  t++
                  continue
                }
                const r = E.classNameAliases[e[t]] || e[t],
                  a = n[t]
                r ? S.addKeyword(a, r) : ((C = a), d(), (C = '')), t++
              }
            }
            function g(e, n) {
              return (
                e.scope && 'string' == typeof e.scope && S.openNode(E.classNameAliases[e.scope] || e.scope),
                e.beginScope &&
                  (e.beginScope._wrap
                    ? (S.addKeyword(C, E.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (C = ''))
                    : e.beginScope._multi && (p(e.beginScope, n), (C = ''))),
                (k = Object.create(e, { parent: { value: k } })),
                k
              )
            }
            function f(e, n, t) {
              let r = (function (e, n) {
                const t = e && e.exec(n)
                return t && 0 === t.index
              })(e.endRe, t)
              if (r) {
                if (e['on:end']) {
                  const t = new a(e)
                  e['on:end'](n, t), t.isMatchIgnored && (r = !1)
                }
                if (r) {
                  for (; e.endsParent && e.parent; ) e = e.parent
                  return e
                }
              }
              if (e.endsWithParent) return f(e.parent, n, t)
            }
            function m(e) {
              return 0 === k.matcher.regexIndex ? ((C += e[0]), 1) : ((I = !0), 0)
            }
            function b(e) {
              const n = e[0],
                r = t.substr(e.index),
                a = f(k, e, r)
              if (!a) return se
              const i = k
              k.endScope && k.endScope._wrap
                ? (u(), S.addKeyword(n, k.endScope._wrap))
                : k.endScope && k.endScope._multi
                ? (u(), p(k.endScope, e))
                : i.skip
                ? (C += n)
                : (i.returnEnd || i.excludeEnd || (C += n), u(), i.excludeEnd && (C = n))
              do {
                k.scope && S.closeNode(), k.skip || k.subLanguage || (A += k.relevance), (k = k.parent)
              } while (k !== a.parent)
              return a.starts && g(a.starts, e), i.returnEnd ? 0 : n.length
            }
            let h = {}
            function y(n, i) {
              const s = i && i[0]
              if (((C += n), null == s)) return u(), 0
              if ('begin' === h.type && 'end' === i.type && h.index === i.index && '' === s) {
                if (((C += t.slice(i.index, i.index + 1)), !o)) {
                  const n = new Error(`0 width match regex (${e})`)
                  throw ((n.languageName = e), (n.badRule = h.rule), n)
                }
                return 1
              }
              if (((h = i), 'begin' === i.type))
                return (function (e) {
                  const n = e[0],
                    t = e.rule,
                    r = new a(t),
                    i = [t.__beforeBegin, t['on:begin']]
                  for (const t of i) if (t && (t(e, r), r.isMatchIgnored)) return m(n)
                  return (
                    t.skip ? (C += n) : (t.excludeBegin && (C += n), u(), t.returnBegin || t.excludeBegin || (C = n)),
                    g(t, e),
                    t.returnBegin ? 0 : n.length
                  )
                })(i)
              if ('illegal' === i.type && !r) {
                const e = new Error('Illegal lexeme "' + s + '" for mode "' + (k.scope || '<unnamed>') + '"')
                throw ((e.mode = k), e)
              }
              if ('end' === i.type) {
                const e = b(i)
                if (e !== se) return e
              }
              if ('illegal' === i.type && '' === s) return 1
              if (T > 1e5 && T > 3 * i.index)
                throw new Error('potential infinite loop, way more iterations than matches')
              return (C += s), s.length
            }
            const E = N(e)
            if (!E) throw (Q(s.replace('{}', e)), new Error('Unknown language: "' + e + '"'))
            const w = te(E)
            let x = '',
              k = i || w
            const O = {},
              S = new c.__emitter(c)
            !(function () {
              const e = []
              for (let n = k; n !== E; n = n.parent) n.scope && e.unshift(n.scope)
              e.forEach(e => S.openNode(e))
            })()
            let C = '',
              A = 0,
              M = 0,
              T = 0,
              I = !1
            try {
              for (k.matcher.considerAll(); ; ) {
                T++, I ? (I = !1) : k.matcher.considerAll(), (k.matcher.lastIndex = M)
                const e = k.matcher.exec(t)
                if (!e) break
                const n = y(t.substring(M, e.index), e)
                M = e.index + n
              }
              return (
                y(t.substr(M)),
                S.closeAllNodes(),
                S.finalize(),
                (x = S.toHTML()),
                { language: e, value: x, relevance: A, illegal: !1, _emitter: S, _top: k }
              )
            } catch (n) {
              if (n.message && n.message.includes('Illegal'))
                return {
                  language: e,
                  value: ie(t),
                  illegal: !0,
                  relevance: 0,
                  _illegalBy: {
                    message: n.message,
                    index: M,
                    context: t.slice(M - 100, M + 100),
                    mode: n.mode,
                    resultSoFar: x
                  },
                  _emitter: S
                }
              if (o)
                return { language: e, value: ie(t), illegal: !1, relevance: 0, errorRaised: n, _emitter: S, _top: k }
              throw n
            }
          }
          function v(e, t) {
            t = t || c.languages || Object.keys(n)
            const r = (function (e) {
                const n = { value: ie(e), illegal: !1, relevance: 0, _top: l, _emitter: new c.__emitter(c) }
                return n._emitter.addText(e), n
              })(e),
              a = t
                .filter(N)
                .filter(k)
                .map(n => _(n, e, !1))
            a.unshift(r)
            const i = a.sort((e, n) => {
                if (e.relevance !== n.relevance) return n.relevance - e.relevance
                if (e.language && n.language) {
                  if (N(e.language).supersetOf === n.language) return 1
                  if (N(n.language).supersetOf === e.language) return -1
                }
                return 0
              }),
              [o, s] = i,
              d = o
            return (d.secondBest = s), d
          }
          function y(e) {
            let n = null
            const r = (function (e) {
              let n = e.className + ' '
              n += e.parentNode ? e.parentNode.className : ''
              const t = c.languageDetectRe.exec(n)
              if (t) {
                const n = N(t[1])
                return (
                  n || (X(s.replace('{}', t[1])), X('Falling back to no-highlight mode for this block.', e)),
                  n ? t[1] : 'no-highlight'
                )
              }
              return n.split(/\s+/).find(e => u(e) || N(e))
            })(e)
            if (u(r)) return
            if (
              (O('before:highlightElement', { el: e, language: r }),
              e.children.length > 0 &&
                (c.ignoreUnescapedHTML ||
                  (console.warn(
                    'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'
                  ),
                  console.warn('https://github.com/highlightjs/highlight.js/issues/2886'),
                  console.warn(e)),
                c.throwUnescapedHTML))
            )
              throw new ae('One of your code blocks includes unescaped HTML.', e.innerHTML)
            n = e
            const a = n.textContent,
              i = r ? h(a, { language: r, ignoreIllegals: !0 }) : v(a)
            ;(e.innerHTML = i.value),
              (function (e, n, r) {
                const a = (n && t[n]) || r
                e.classList.add('hljs'), e.classList.add(`language-${a}`)
              })(e, r, i.language),
              (e.result = { language: i.language, re: i.relevance, relevance: i.relevance }),
              i.secondBest && (e.secondBest = { language: i.secondBest.language, relevance: i.secondBest.relevance }),
              O('after:highlightElement', { el: e, result: i, text: a })
          }
          let E = !1
          function w() {
            'loading' !== document.readyState ? document.querySelectorAll(c.cssSelector).forEach(y) : (E = !0)
          }
          function N(e) {
            return (e = (e || '').toLowerCase()), n[e] || n[t[e]]
          }
          function x(e, { languageName: n }) {
            'string' == typeof e && (e = [e]),
              e.forEach(e => {
                t[e.toLowerCase()] = n
              })
          }
          function k(e) {
            const n = N(e)
            return n && !n.disableAutodetect
          }
          function O(e, n) {
            const t = e
            i.forEach(function (e) {
              e[t] && e[t](n)
            })
          }
          'undefined' != typeof window &&
            window.addEventListener &&
            window.addEventListener(
              'DOMContentLoaded',
              function () {
                E && w()
              },
              !1
            ),
            Object.assign(e, {
              highlight: h,
              highlightAuto: v,
              highlightAll: w,
              highlightElement: y,
              highlightBlock: function (e) {
                return (
                  J('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
                  J('10.7.0', 'Please use highlightElement now.'),
                  y(e)
                )
              },
              configure: function (e) {
                c = oe(c, e)
              },
              initHighlighting: () => {
                w(), J('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.')
              },
              initHighlightingOnLoad: function () {
                w(), J('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.')
              },
              registerLanguage: function (t, r) {
                let a = null
                try {
                  a = r(e)
                } catch (e) {
                  if ((Q("Language definition for '{}' could not be registered.".replace('{}', t)), !o)) throw e
                  Q(e), (a = l)
                }
                a.name || (a.name = t),
                  (n[t] = a),
                  (a.rawDefinition = r.bind(null, e)),
                  a.aliases && x(a.aliases, { languageName: t })
              },
              unregisterLanguage: function (e) {
                delete n[e]
                for (const n of Object.keys(t)) t[n] === e && delete t[n]
              },
              listLanguages: function () {
                return Object.keys(n)
              },
              getLanguage: N,
              registerAliases: x,
              autoDetection: k,
              inherit: oe,
              addPlugin: function (e) {
                !(function (e) {
                  e['before:highlightBlock'] &&
                    !e['before:highlightElement'] &&
                    (e['before:highlightElement'] = n => {
                      e['before:highlightBlock'](Object.assign({ block: n.el }, n))
                    }),
                    e['after:highlightBlock'] &&
                      !e['after:highlightElement'] &&
                      (e['after:highlightElement'] = n => {
                        e['after:highlightBlock'](Object.assign({ block: n.el }, n))
                      })
                })(e),
                  i.push(e)
              }
            }),
            (e.debugMode = function () {
              o = !1
            }),
            (e.safeMode = function () {
              o = !0
            }),
            (e.versionString = '11.3.1'),
            (e.regex = { concat: m, lookahead: p, either: b, optional: f, anyNumberOfTimes: g })
          for (const e in P) 'object' == typeof P[e] && r(P[e])
          return Object.assign(e, P), e
        })({})
        ;(e.exports = le), (le.HighlightJS = le), (le.default = le)
      },
      564: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = {},
            r = { begin: /\$\{/, end: /\}/, contains: ['self', { begin: /:-/, contains: [t] }] }
          Object.assign(t, {
            className: 'variable',
            variants: [{ begin: n.concat(/\$[\w\d#@][\w\d_]*/, '(?![\\w\\d])(?![$])') }, r]
          })
          const a = { className: 'subst', begin: /\$\(/, end: /\)/, contains: [e.BACKSLASH_ESCAPE] },
            i = {
              begin: /<<-?\s*(?=\w+)/,
              starts: { contains: [e.END_SAME_AS_BEGIN({ begin: /(\w+)/, end: /(\w+)/, className: 'string' })] }
            },
            o = { className: 'string', begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, t, a] }
          a.contains.push(o)
          const s = {
              begin: /\$\(\(/,
              end: /\)\)/,
              contains: [{ begin: /\d+#[0-9a-f]+/, className: 'number' }, e.NUMBER_MODE, t]
            },
            l = e.SHEBANG({
              binary: `(${['fish', 'bash', 'zsh', 'sh', 'csh', 'ksh', 'tcsh', 'dash', 'scsh'].join('|')})`,
              relevance: 10
            }),
            c = {
              className: 'function',
              begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
              returnBegin: !0,
              contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
              relevance: 0
            }
          return {
            name: 'Bash',
            aliases: ['sh'],
            keywords: {
              $pattern: /\b[a-z._-]+\b/,
              keyword: [
                'if',
                'then',
                'else',
                'elif',
                'fi',
                'for',
                'while',
                'in',
                'do',
                'done',
                'case',
                'esac',
                'function'
              ],
              literal: ['true', 'false'],
              built_in: [
                'break',
                'cd',
                'continue',
                'eval',
                'exec',
                'exit',
                'export',
                'getopts',
                'hash',
                'pwd',
                'readonly',
                'return',
                'shift',
                'test',
                'times',
                'trap',
                'umask',
                'unset',
                'alias',
                'bind',
                'builtin',
                'caller',
                'command',
                'declare',
                'echo',
                'enable',
                'help',
                'let',
                'local',
                'logout',
                'mapfile',
                'printf',
                'read',
                'readarray',
                'source',
                'type',
                'typeset',
                'ulimit',
                'unalias',
                'set',
                'shopt',
                'autoload',
                'bg',
                'bindkey',
                'bye',
                'cap',
                'chdir',
                'clone',
                'comparguments',
                'compcall',
                'compctl',
                'compdescribe',
                'compfiles',
                'compgroups',
                'compquote',
                'comptags',
                'comptry',
                'compvalues',
                'dirs',
                'disable',
                'disown',
                'echotc',
                'echoti',
                'emulate',
                'fc',
                'fg',
                'float',
                'functions',
                'getcap',
                'getln',
                'history',
                'integer',
                'jobs',
                'kill',
                'limit',
                'log',
                'noglob',
                'popd',
                'print',
                'pushd',
                'pushln',
                'rehash',
                'sched',
                'setcap',
                'setopt',
                'stat',
                'suspend',
                'ttyctl',
                'unfunction',
                'unhash',
                'unlimit',
                'unsetopt',
                'vared',
                'wait',
                'whence',
                'where',
                'which',
                'zcompile',
                'zformat',
                'zftp',
                'zle',
                'zmodload',
                'zparseopts',
                'zprof',
                'zpty',
                'zregexparse',
                'zsocket',
                'zstyle',
                'ztcp',
                'chcon',
                'chgrp',
                'chown',
                'chmod',
                'cp',
                'dd',
                'df',
                'dir',
                'dircolors',
                'ln',
                'ls',
                'mkdir',
                'mkfifo',
                'mknod',
                'mktemp',
                'mv',
                'realpath',
                'rm',
                'rmdir',
                'shred',
                'sync',
                'touch',
                'truncate',
                'vdir',
                'b2sum',
                'base32',
                'base64',
                'cat',
                'cksum',
                'comm',
                'csplit',
                'cut',
                'expand',
                'fmt',
                'fold',
                'head',
                'join',
                'md5sum',
                'nl',
                'numfmt',
                'od',
                'paste',
                'ptx',
                'pr',
                'sha1sum',
                'sha224sum',
                'sha256sum',
                'sha384sum',
                'sha512sum',
                'shuf',
                'sort',
                'split',
                'sum',
                'tac',
                'tail',
                'tr',
                'tsort',
                'unexpand',
                'uniq',
                'wc',
                'arch',
                'basename',
                'chroot',
                'date',
                'dirname',
                'du',
                'echo',
                'env',
                'expr',
                'factor',
                'groups',
                'hostid',
                'id',
                'link',
                'logname',
                'nice',
                'nohup',
                'nproc',
                'pathchk',
                'pinky',
                'printenv',
                'printf',
                'pwd',
                'readlink',
                'runcon',
                'seq',
                'sleep',
                'stat',
                'stdbuf',
                'stty',
                'tee',
                'test',
                'timeout',
                'tty',
                'uname',
                'unlink',
                'uptime',
                'users',
                'who',
                'whoami',
                'yes'
              ]
            },
            contains: [
              l,
              e.SHEBANG(),
              c,
              s,
              e.HASH_COMMENT_MODE,
              i,
              { match: /(\/[a-z._-]+)+/ },
              o,
              { className: '', begin: /\\"/ },
              { className: 'string', begin: /'/, end: /'/ },
              t
            ]
          }
        }
      },
      128: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = e.COMMENT('//', '$', { contains: [{ begin: /\\\n/ }] }),
            r = '[a-zA-Z_]\\w*::',
            a = '(decltype\\(auto\\)|' + n.optional(r) + '[a-zA-Z_]\\w*' + n.optional('<[^<>]+>') + ')',
            i = { className: 'type', variants: [{ begin: '\\b[a-z\\d_]*_t\\b' }, { match: /\batomic_[a-z]{3,6}\b/ }] },
            o = {
              className: 'string',
              variants: [
                { begin: '(u8?|U|L)?"', end: '"', illegal: '\\n', contains: [e.BACKSLASH_ESCAPE] },
                {
                  begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                  end: "'",
                  illegal: '.'
                },
                e.END_SAME_AS_BEGIN({ begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/ })
              ]
            },
            s = {
              className: 'number',
              variants: [
                { begin: "\\b(0b[01']+)" },
                { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
                { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
              ],
              relevance: 0
            },
            l = {
              className: 'meta',
              begin: /#\s*[a-z]+\b/,
              end: /$/,
              keywords: {
                keyword: 'if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include'
              },
              contains: [
                { begin: /\\\n/, relevance: 0 },
                e.inherit(o, { className: 'string' }),
                { className: 'string', begin: /<.*?>/ },
                t,
                e.C_BLOCK_COMMENT_MODE
              ]
            },
            c = { className: 'title', begin: n.optional(r) + e.IDENT_RE, relevance: 0 },
            d = n.optional(r) + e.IDENT_RE + '\\s*\\(',
            u = {
              keyword: [
                'asm',
                'auto',
                'break',
                'case',
                'continue',
                'default',
                'do',
                'else',
                'enum',
                'extern',
                'for',
                'fortran',
                'goto',
                'if',
                'inline',
                'register',
                'restrict',
                'return',
                'sizeof',
                'struct',
                'switch',
                'typedef',
                'union',
                'volatile',
                'while',
                '_Alignas',
                '_Alignof',
                '_Atomic',
                '_Generic',
                '_Noreturn',
                '_Static_assert',
                '_Thread_local',
                'alignas',
                'alignof',
                'noreturn',
                'static_assert',
                'thread_local',
                '_Pragma'
              ],
              type: [
                'float',
                'double',
                'signed',
                'unsigned',
                'int',
                'short',
                'long',
                'char',
                'void',
                '_Bool',
                '_Complex',
                '_Imaginary',
                '_Decimal32',
                '_Decimal64',
                '_Decimal128',
                'const',
                'static',
                'complex',
                'bool',
                'imaginary'
              ],
              literal: 'true false NULL',
              built_in:
                'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr'
            },
            p = [l, i, t, e.C_BLOCK_COMMENT_MODE, s, o],
            g = {
              variants: [
                { begin: /=/, end: /;/ },
                { begin: /\(/, end: /\)/ },
                { beginKeywords: 'new throw return else', end: /;/ }
              ],
              keywords: u,
              contains: p.concat([{ begin: /\(/, end: /\)/, keywords: u, contains: p.concat(['self']), relevance: 0 }]),
              relevance: 0
            },
            f = {
              begin: '(' + a + '[\\*&\\s]+)+' + d,
              returnBegin: !0,
              end: /[{;=]/,
              excludeEnd: !0,
              keywords: u,
              illegal: /[^\w\s\*&:<>.]/,
              contains: [
                { begin: 'decltype\\(auto\\)', keywords: u, relevance: 0 },
                { begin: d, returnBegin: !0, contains: [e.inherit(c, { className: 'title.function' })], relevance: 0 },
                { relevance: 0, match: /,/ },
                {
                  className: 'params',
                  begin: /\(/,
                  end: /\)/,
                  keywords: u,
                  relevance: 0,
                  contains: [
                    t,
                    e.C_BLOCK_COMMENT_MODE,
                    o,
                    s,
                    i,
                    {
                      begin: /\(/,
                      end: /\)/,
                      keywords: u,
                      relevance: 0,
                      contains: ['self', t, e.C_BLOCK_COMMENT_MODE, o, s, i]
                    }
                  ]
                },
                i,
                t,
                e.C_BLOCK_COMMENT_MODE,
                l
              ]
            }
          return {
            name: 'C',
            aliases: ['h'],
            keywords: u,
            disableAutodetect: !0,
            illegal: '</',
            contains: [].concat(g, f, p, [
              l,
              { begin: e.IDENT_RE + '::', keywords: u },
              {
                className: 'class',
                beginKeywords: 'enum class struct union',
                end: /[{;:<>=]/,
                contains: [{ beginKeywords: 'final class struct' }, e.TITLE_MODE]
              }
            ]),
            exports: { preprocessor: l, strings: o, keywords: u }
          }
        }
      },
      129: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = e.COMMENT('//', '$', { contains: [{ begin: /\\\n/ }] }),
            r = '[a-zA-Z_]\\w*::',
            a = '(?!struct)(decltype\\(auto\\)|' + n.optional(r) + '[a-zA-Z_]\\w*' + n.optional('<[^<>]+>') + ')',
            i = { className: 'type', begin: '\\b[a-z\\d_]*_t\\b' },
            o = {
              className: 'string',
              variants: [
                { begin: '(u8?|U|L)?"', end: '"', illegal: '\\n', contains: [e.BACKSLASH_ESCAPE] },
                {
                  begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                  end: "'",
                  illegal: '.'
                },
                e.END_SAME_AS_BEGIN({ begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/ })
              ]
            },
            s = {
              className: 'number',
              variants: [
                { begin: "\\b(0b[01']+)" },
                { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
                { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
              ],
              relevance: 0
            },
            l = {
              className: 'meta',
              begin: /#\s*[a-z]+\b/,
              end: /$/,
              keywords: {
                keyword: 'if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include'
              },
              contains: [
                { begin: /\\\n/, relevance: 0 },
                e.inherit(o, { className: 'string' }),
                { className: 'string', begin: /<.*?>/ },
                t,
                e.C_BLOCK_COMMENT_MODE
              ]
            },
            c = { className: 'title', begin: n.optional(r) + e.IDENT_RE, relevance: 0 },
            d = n.optional(r) + e.IDENT_RE + '\\s*\\(',
            u = {
              type: [
                'bool',
                'char',
                'char16_t',
                'char32_t',
                'char8_t',
                'double',
                'float',
                'int',
                'long',
                'short',
                'void',
                'wchar_t',
                'unsigned',
                'signed',
                'const',
                'static'
              ],
              keyword: [
                'alignas',
                'alignof',
                'and',
                'and_eq',
                'asm',
                'atomic_cancel',
                'atomic_commit',
                'atomic_noexcept',
                'auto',
                'bitand',
                'bitor',
                'break',
                'case',
                'catch',
                'class',
                'co_await',
                'co_return',
                'co_yield',
                'compl',
                'concept',
                'const_cast|10',
                'consteval',
                'constexpr',
                'constinit',
                'continue',
                'decltype',
                'default',
                'delete',
                'do',
                'dynamic_cast|10',
                'else',
                'enum',
                'explicit',
                'export',
                'extern',
                'false',
                'final',
                'for',
                'friend',
                'goto',
                'if',
                'import',
                'inline',
                'module',
                'mutable',
                'namespace',
                'new',
                'noexcept',
                'not',
                'not_eq',
                'nullptr',
                'operator',
                'or',
                'or_eq',
                'override',
                'private',
                'protected',
                'public',
                'reflexpr',
                'register',
                'reinterpret_cast|10',
                'requires',
                'return',
                'sizeof',
                'static_assert',
                'static_cast|10',
                'struct',
                'switch',
                'synchronized',
                'template',
                'this',
                'thread_local',
                'throw',
                'transaction_safe',
                'transaction_safe_dynamic',
                'true',
                'try',
                'typedef',
                'typeid',
                'typename',
                'union',
                'using',
                'virtual',
                'volatile',
                'while',
                'xor',
                'xor_eq'
              ],
              literal: ['NULL', 'false', 'nullopt', 'nullptr', 'true'],
              built_in: ['_Pragma'],
              _type_hints: [
                'any',
                'auto_ptr',
                'barrier',
                'binary_semaphore',
                'bitset',
                'complex',
                'condition_variable',
                'condition_variable_any',
                'counting_semaphore',
                'deque',
                'false_type',
                'future',
                'imaginary',
                'initializer_list',
                'istringstream',
                'jthread',
                'latch',
                'lock_guard',
                'multimap',
                'multiset',
                'mutex',
                'optional',
                'ostringstream',
                'packaged_task',
                'pair',
                'promise',
                'priority_queue',
                'queue',
                'recursive_mutex',
                'recursive_timed_mutex',
                'scoped_lock',
                'set',
                'shared_future',
                'shared_lock',
                'shared_mutex',
                'shared_timed_mutex',
                'shared_ptr',
                'stack',
                'string_view',
                'stringstream',
                'timed_mutex',
                'thread',
                'true_type',
                'tuple',
                'unique_lock',
                'unique_ptr',
                'unordered_map',
                'unordered_multimap',
                'unordered_multiset',
                'unordered_set',
                'variant',
                'vector',
                'weak_ptr',
                'wstring',
                'wstring_view'
              ]
            },
            p = {
              className: 'function.dispatch',
              relevance: 0,
              keywords: {
                _hint: [
                  'abort',
                  'abs',
                  'acos',
                  'apply',
                  'as_const',
                  'asin',
                  'atan',
                  'atan2',
                  'calloc',
                  'ceil',
                  'cerr',
                  'cin',
                  'clog',
                  'cos',
                  'cosh',
                  'cout',
                  'declval',
                  'endl',
                  'exchange',
                  'exit',
                  'exp',
                  'fabs',
                  'floor',
                  'fmod',
                  'forward',
                  'fprintf',
                  'fputs',
                  'free',
                  'frexp',
                  'fscanf',
                  'future',
                  'invoke',
                  'isalnum',
                  'isalpha',
                  'iscntrl',
                  'isdigit',
                  'isgraph',
                  'islower',
                  'isprint',
                  'ispunct',
                  'isspace',
                  'isupper',
                  'isxdigit',
                  'labs',
                  'launder',
                  'ldexp',
                  'log',
                  'log10',
                  'make_pair',
                  'make_shared',
                  'make_shared_for_overwrite',
                  'make_tuple',
                  'make_unique',
                  'malloc',
                  'memchr',
                  'memcmp',
                  'memcpy',
                  'memset',
                  'modf',
                  'move',
                  'pow',
                  'printf',
                  'putchar',
                  'puts',
                  'realloc',
                  'scanf',
                  'sin',
                  'sinh',
                  'snprintf',
                  'sprintf',
                  'sqrt',
                  'sscanf',
                  'std',
                  'stderr',
                  'stdin',
                  'stdout',
                  'strcat',
                  'strchr',
                  'strcmp',
                  'strcpy',
                  'strcspn',
                  'strlen',
                  'strncat',
                  'strncmp',
                  'strncpy',
                  'strpbrk',
                  'strrchr',
                  'strspn',
                  'strstr',
                  'swap',
                  'tan',
                  'tanh',
                  'terminate',
                  'to_underlying',
                  'tolower',
                  'toupper',
                  'vfprintf',
                  'visit',
                  'vprintf',
                  'vsprintf'
                ]
              },
              begin: n.concat(
                /\b/,
                /(?!decltype)/,
                /(?!if)/,
                /(?!for)/,
                /(?!switch)/,
                /(?!while)/,
                e.IDENT_RE,
                n.lookahead(/(<[^<>]+>|)\s*\(/)
              )
            },
            g = [p, l, i, t, e.C_BLOCK_COMMENT_MODE, s, o],
            f = {
              variants: [
                { begin: /=/, end: /;/ },
                { begin: /\(/, end: /\)/ },
                { beginKeywords: 'new throw return else', end: /;/ }
              ],
              keywords: u,
              contains: g.concat([{ begin: /\(/, end: /\)/, keywords: u, contains: g.concat(['self']), relevance: 0 }]),
              relevance: 0
            },
            m = {
              className: 'function',
              begin: '(' + a + '[\\*&\\s]+)+' + d,
              returnBegin: !0,
              end: /[{;=]/,
              excludeEnd: !0,
              keywords: u,
              illegal: /[^\w\s\*&:<>.]/,
              contains: [
                { begin: 'decltype\\(auto\\)', keywords: u, relevance: 0 },
                { begin: d, returnBegin: !0, contains: [c], relevance: 0 },
                { begin: /::/, relevance: 0 },
                { begin: /:/, endsWithParent: !0, contains: [o, s] },
                { relevance: 0, match: /,/ },
                {
                  className: 'params',
                  begin: /\(/,
                  end: /\)/,
                  keywords: u,
                  relevance: 0,
                  contains: [
                    t,
                    e.C_BLOCK_COMMENT_MODE,
                    o,
                    s,
                    i,
                    {
                      begin: /\(/,
                      end: /\)/,
                      keywords: u,
                      relevance: 0,
                      contains: ['self', t, e.C_BLOCK_COMMENT_MODE, o, s, i]
                    }
                  ]
                },
                i,
                t,
                e.C_BLOCK_COMMENT_MODE,
                l
              ]
            }
          return {
            name: 'C++',
            aliases: ['cc', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],
            keywords: u,
            illegal: '</',
            classNameAliases: { 'function.dispatch': 'built_in' },
            contains: [].concat(f, m, p, g, [
              l,
              {
                begin:
                  '\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<',
                end: '>',
                keywords: u,
                contains: ['self', i]
              },
              { begin: e.IDENT_RE + '::', keywords: u },
              {
                match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
                className: { 1: 'keyword', 3: 'title.class' }
              }
            ])
          }
        }
      },
      271: e => {
        e.exports = function (e) {
          const n = {
              keyword: [
                'abstract',
                'as',
                'base',
                'break',
                'case',
                'catch',
                'class',
                'const',
                'continue',
                'do',
                'else',
                'event',
                'explicit',
                'extern',
                'finally',
                'fixed',
                'for',
                'foreach',
                'goto',
                'if',
                'implicit',
                'in',
                'interface',
                'internal',
                'is',
                'lock',
                'namespace',
                'new',
                'operator',
                'out',
                'override',
                'params',
                'private',
                'protected',
                'public',
                'readonly',
                'record',
                'ref',
                'return',
                'sealed',
                'sizeof',
                'stackalloc',
                'static',
                'struct',
                'switch',
                'this',
                'throw',
                'try',
                'typeof',
                'unchecked',
                'unsafe',
                'using',
                'virtual',
                'void',
                'volatile',
                'while'
              ].concat([
                'add',
                'alias',
                'and',
                'ascending',
                'async',
                'await',
                'by',
                'descending',
                'equals',
                'from',
                'get',
                'global',
                'group',
                'init',
                'into',
                'join',
                'let',
                'nameof',
                'not',
                'notnull',
                'on',
                'or',
                'orderby',
                'partial',
                'remove',
                'select',
                'set',
                'unmanaged',
                'value|0',
                'var',
                'when',
                'where',
                'with',
                'yield'
              ]),
              built_in: [
                'bool',
                'byte',
                'char',
                'decimal',
                'delegate',
                'double',
                'dynamic',
                'enum',
                'float',
                'int',
                'long',
                'nint',
                'nuint',
                'object',
                'sbyte',
                'short',
                'string',
                'ulong',
                'uint',
                'ushort'
              ],
              literal: ['default', 'false', 'null', 'true']
            },
            t = e.inherit(e.TITLE_MODE, { begin: '[a-zA-Z](\\.?\\w)*' }),
            r = {
              className: 'number',
              variants: [
                { begin: "\\b(0b[01']+)" },
                { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
                { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
              ],
              relevance: 0
            },
            a = { className: 'string', begin: '@"', end: '"', contains: [{ begin: '""' }] },
            i = e.inherit(a, { illegal: /\n/ }),
            o = { className: 'subst', begin: /\{/, end: /\}/, keywords: n },
            s = e.inherit(o, { illegal: /\n/ }),
            l = {
              className: 'string',
              begin: /\$"/,
              end: '"',
              illegal: /\n/,
              contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, e.BACKSLASH_ESCAPE, s]
            },
            c = {
              className: 'string',
              begin: /\$@"/,
              end: '"',
              contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, o]
            },
            d = e.inherit(c, { illegal: /\n/, contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, s] })
          ;(o.contains = [c, l, a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, e.C_BLOCK_COMMENT_MODE]),
            (s.contains = [
              d,
              l,
              i,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              r,
              e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
            ])
          const u = { variants: [c, l, a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE] },
            p = { begin: '<', end: '>', contains: [{ beginKeywords: 'in out' }, t] },
            g = e.IDENT_RE + '(<' + e.IDENT_RE + '(\\s*,\\s*' + e.IDENT_RE + ')*>)?(\\[\\])?',
            f = { begin: '@' + e.IDENT_RE, relevance: 0 }
          return {
            name: 'C#',
            aliases: ['cs', 'c#'],
            keywords: n,
            illegal: /::/,
            contains: [
              e.COMMENT('///', '$', {
                returnBegin: !0,
                contains: [
                  {
                    className: 'doctag',
                    variants: [{ begin: '///', relevance: 0 }, { begin: '\x3c!--|--\x3e' }, { begin: '</?', end: '>' }]
                  }
                ]
              }),
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              {
                className: 'meta',
                begin: '#',
                end: '$',
                keywords: {
                  keyword: 'if else elif endif define undef warning error line region endregion pragma checksum'
                }
              },
              u,
              r,
              {
                beginKeywords: 'class interface',
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:,]/,
                contains: [{ beginKeywords: 'where class' }, t, p, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
              },
              {
                beginKeywords: 'namespace',
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
              },
              {
                beginKeywords: 'record',
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [t, p, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
              },
              {
                className: 'meta',
                begin: '^\\s*\\[(?=[\\w])',
                excludeBegin: !0,
                end: '\\]',
                excludeEnd: !0,
                contains: [{ className: 'string', begin: /"/, end: /"/ }]
              },
              { beginKeywords: 'new return throw await else', relevance: 0 },
              {
                className: 'function',
                begin: '(' + g + '\\s+)+' + e.IDENT_RE + '\\s*(<[^=]+>\\s*)?\\(',
                returnBegin: !0,
                end: /\s*[{;=]/,
                excludeEnd: !0,
                keywords: n,
                contains: [
                  {
                    beginKeywords: [
                      'public',
                      'private',
                      'protected',
                      'static',
                      'internal',
                      'protected',
                      'abstract',
                      'async',
                      'extern',
                      'override',
                      'unsafe',
                      'virtual',
                      'new',
                      'sealed',
                      'partial'
                    ].join(' '),
                    relevance: 0
                  },
                  {
                    begin: e.IDENT_RE + '\\s*(<[^=]+>\\s*)?\\(',
                    returnBegin: !0,
                    contains: [e.TITLE_MODE, p],
                    relevance: 0
                  },
                  { match: /\(\)/ },
                  {
                    className: 'params',
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: n,
                    relevance: 0,
                    contains: [u, r, e.C_BLOCK_COMMENT_MODE]
                  },
                  e.C_LINE_COMMENT_MODE,
                  e.C_BLOCK_COMMENT_MODE
                ]
              },
              f
            ]
          }
        }
      },
      855: e => {
        const n = [
            'a',
            'abbr',
            'address',
            'article',
            'aside',
            'audio',
            'b',
            'blockquote',
            'body',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'dd',
            'del',
            'details',
            'dfn',
            'div',
            'dl',
            'dt',
            'em',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'header',
            'hgroup',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'legend',
            'li',
            'main',
            'mark',
            'menu',
            'nav',
            'object',
            'ol',
            'p',
            'q',
            'quote',
            'samp',
            'section',
            'span',
            'strong',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'tr',
            'ul',
            'var',
            'video'
          ],
          t = [
            'any-hover',
            'any-pointer',
            'aspect-ratio',
            'color',
            'color-gamut',
            'color-index',
            'device-aspect-ratio',
            'device-height',
            'device-width',
            'display-mode',
            'forced-colors',
            'grid',
            'height',
            'hover',
            'inverted-colors',
            'monochrome',
            'orientation',
            'overflow-block',
            'overflow-inline',
            'pointer',
            'prefers-color-scheme',
            'prefers-contrast',
            'prefers-reduced-motion',
            'prefers-reduced-transparency',
            'resolution',
            'scan',
            'scripting',
            'update',
            'width',
            'min-width',
            'max-width',
            'min-height',
            'max-height'
          ],
          r = [
            'active',
            'any-link',
            'blank',
            'checked',
            'current',
            'default',
            'defined',
            'dir',
            'disabled',
            'drop',
            'empty',
            'enabled',
            'first',
            'first-child',
            'first-of-type',
            'fullscreen',
            'future',
            'focus',
            'focus-visible',
            'focus-within',
            'has',
            'host',
            'host-context',
            'hover',
            'indeterminate',
            'in-range',
            'invalid',
            'is',
            'lang',
            'last-child',
            'last-of-type',
            'left',
            'link',
            'local-link',
            'not',
            'nth-child',
            'nth-col',
            'nth-last-child',
            'nth-last-col',
            'nth-last-of-type',
            'nth-of-type',
            'only-child',
            'only-of-type',
            'optional',
            'out-of-range',
            'past',
            'placeholder-shown',
            'read-only',
            'read-write',
            'required',
            'right',
            'root',
            'scope',
            'target',
            'target-within',
            'user-invalid',
            'valid',
            'visited',
            'where'
          ],
          a = [
            'after',
            'backdrop',
            'before',
            'cue',
            'cue-region',
            'first-letter',
            'first-line',
            'grammar-error',
            'marker',
            'part',
            'placeholder',
            'selection',
            'slotted',
            'spelling-error'
          ],
          i = [
            'align-content',
            'align-items',
            'align-self',
            'all',
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'backface-visibility',
            'background',
            'background-attachment',
            'background-clip',
            'background-color',
            'background-image',
            'background-origin',
            'background-position',
            'background-repeat',
            'background-size',
            'border',
            'border-bottom',
            'border-bottom-color',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-bottom-style',
            'border-bottom-width',
            'border-collapse',
            'border-color',
            'border-image',
            'border-image-outset',
            'border-image-repeat',
            'border-image-slice',
            'border-image-source',
            'border-image-width',
            'border-left',
            'border-left-color',
            'border-left-style',
            'border-left-width',
            'border-radius',
            'border-right',
            'border-right-color',
            'border-right-style',
            'border-right-width',
            'border-spacing',
            'border-style',
            'border-top',
            'border-top-color',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-top-style',
            'border-top-width',
            'border-width',
            'bottom',
            'box-decoration-break',
            'box-shadow',
            'box-sizing',
            'break-after',
            'break-before',
            'break-inside',
            'caption-side',
            'caret-color',
            'clear',
            'clip',
            'clip-path',
            'clip-rule',
            'color',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',
            'columns',
            'contain',
            'content',
            'content-visibility',
            'counter-increment',
            'counter-reset',
            'cue',
            'cue-after',
            'cue-before',
            'cursor',
            'direction',
            'display',
            'empty-cells',
            'filter',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'float',
            'flow',
            'font',
            'font-display',
            'font-family',
            'font-feature-settings',
            'font-kerning',
            'font-language-override',
            'font-size',
            'font-size-adjust',
            'font-smoothing',
            'font-stretch',
            'font-style',
            'font-synthesis',
            'font-variant',
            'font-variant-caps',
            'font-variant-east-asian',
            'font-variant-ligatures',
            'font-variant-numeric',
            'font-variant-position',
            'font-variation-settings',
            'font-weight',
            'gap',
            'glyph-orientation-vertical',
            'grid',
            'grid-area',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-column',
            'grid-column-end',
            'grid-column-start',
            'grid-gap',
            'grid-row',
            'grid-row-end',
            'grid-row-start',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows',
            'hanging-punctuation',
            'height',
            'hyphens',
            'icon',
            'image-orientation',
            'image-rendering',
            'image-resolution',
            'ime-mode',
            'isolation',
            'justify-content',
            'left',
            'letter-spacing',
            'line-break',
            'line-height',
            'list-style',
            'list-style-image',
            'list-style-position',
            'list-style-type',
            'margin',
            'margin-bottom',
            'margin-left',
            'margin-right',
            'margin-top',
            'marks',
            'mask',
            'mask-border',
            'mask-border-mode',
            'mask-border-outset',
            'mask-border-repeat',
            'mask-border-slice',
            'mask-border-source',
            'mask-border-width',
            'mask-clip',
            'mask-composite',
            'mask-image',
            'mask-mode',
            'mask-origin',
            'mask-position',
            'mask-repeat',
            'mask-size',
            'mask-type',
            'max-height',
            'max-width',
            'min-height',
            'min-width',
            'mix-blend-mode',
            'nav-down',
            'nav-index',
            'nav-left',
            'nav-right',
            'nav-up',
            'none',
            'normal',
            'object-fit',
            'object-position',
            'opacity',
            'order',
            'orphans',
            'outline',
            'outline-color',
            'outline-offset',
            'outline-style',
            'outline-width',
            'overflow',
            'overflow-wrap',
            'overflow-x',
            'overflow-y',
            'padding',
            'padding-bottom',
            'padding-left',
            'padding-right',
            'padding-top',
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'pause',
            'pause-after',
            'pause-before',
            'perspective',
            'perspective-origin',
            'pointer-events',
            'position',
            'quotes',
            'resize',
            'rest',
            'rest-after',
            'rest-before',
            'right',
            'row-gap',
            'scroll-margin',
            'scroll-margin-block',
            'scroll-margin-block-end',
            'scroll-margin-block-start',
            'scroll-margin-bottom',
            'scroll-margin-inline',
            'scroll-margin-inline-end',
            'scroll-margin-inline-start',
            'scroll-margin-left',
            'scroll-margin-right',
            'scroll-margin-top',
            'scroll-padding',
            'scroll-padding-block',
            'scroll-padding-block-end',
            'scroll-padding-block-start',
            'scroll-padding-bottom',
            'scroll-padding-inline',
            'scroll-padding-inline-end',
            'scroll-padding-inline-start',
            'scroll-padding-left',
            'scroll-padding-right',
            'scroll-padding-top',
            'scroll-snap-align',
            'scroll-snap-stop',
            'scroll-snap-type',
            'shape-image-threshold',
            'shape-margin',
            'shape-outside',
            'speak',
            'speak-as',
            'src',
            'tab-size',
            'table-layout',
            'text-align',
            'text-align-all',
            'text-align-last',
            'text-combine-upright',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-position',
            'text-emphasis-style',
            'text-indent',
            'text-justify',
            'text-orientation',
            'text-overflow',
            'text-rendering',
            'text-shadow',
            'text-transform',
            'text-underline-position',
            'top',
            'transform',
            'transform-box',
            'transform-origin',
            'transform-style',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'unicode-bidi',
            'vertical-align',
            'visibility',
            'voice-balance',
            'voice-duration',
            'voice-family',
            'voice-pitch',
            'voice-range',
            'voice-rate',
            'voice-stress',
            'voice-volume',
            'white-space',
            'widows',
            'width',
            'will-change',
            'word-break',
            'word-spacing',
            'word-wrap',
            'writing-mode',
            'z-index'
          ].reverse()
        e.exports = function (e) {
          const o = e.regex,
            s = (e => ({
              IMPORTANT: { scope: 'meta', begin: '!important' },
              BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
              HEXCOLOR: { scope: 'number', begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ },
              FUNCTION_DISPATCH: { className: 'built_in', begin: /[\w-]+(?=\()/ },
              ATTRIBUTE_SELECTOR_MODE: {
                scope: 'selector-attr',
                begin: /\[/,
                end: /\]/,
                illegal: '$',
                contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
              },
              CSS_NUMBER_MODE: {
                scope: 'number',
                begin:
                  e.NUMBER_RE +
                  '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
                relevance: 0
              },
              CSS_VARIABLE: { className: 'attr', begin: /--[A-Za-z][A-Za-z0-9_-]*/ }
            }))(e),
            l = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
          return {
            name: 'CSS',
            case_insensitive: !0,
            illegal: /[=|'\$]/,
            keywords: { keyframePosition: 'from to' },
            classNameAliases: { keyframePosition: 'selector-tag' },
            contains: [
              s.BLOCK_COMMENT,
              { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
              s.CSS_NUMBER_MODE,
              { className: 'selector-id', begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
              { className: 'selector-class', begin: '\\.[a-zA-Z-][a-zA-Z0-9_-]*', relevance: 0 },
              s.ATTRIBUTE_SELECTOR_MODE,
              {
                className: 'selector-pseudo',
                variants: [{ begin: ':(' + r.join('|') + ')' }, { begin: ':(:)?(' + a.join('|') + ')' }]
              },
              s.CSS_VARIABLE,
              { className: 'attribute', begin: '\\b(' + i.join('|') + ')\\b' },
              {
                begin: /:/,
                end: /[;}{]/,
                contains: [
                  s.BLOCK_COMMENT,
                  s.HEXCOLOR,
                  s.IMPORTANT,
                  s.CSS_NUMBER_MODE,
                  ...l,
                  {
                    begin: /(url|data-uri)\(/,
                    end: /\)/,
                    relevance: 0,
                    keywords: { built_in: 'url data-uri' },
                    contains: [{ className: 'string', begin: /[^)]/, endsWithParent: !0, excludeEnd: !0 }]
                  },
                  s.FUNCTION_DISPATCH
                ]
              },
              {
                begin: o.lookahead(/@/),
                end: '[{;]',
                relevance: 0,
                illegal: /:/,
                contains: [
                  { className: 'keyword', begin: /@-?\w[\w]*(-\w+)*/ },
                  {
                    begin: /\s/,
                    endsWithParent: !0,
                    excludeEnd: !0,
                    relevance: 0,
                    keywords: { $pattern: /[a-z-]+/, keyword: 'and or not only', attribute: t.join(' ') },
                    contains: [{ begin: /[a-z-]+(?=:)/, className: 'attribute' }, ...l, s.CSS_NUMBER_MODE]
                  }
                ]
              },
              { className: 'selector-tag', begin: '\\b(' + n.join('|') + ')\\b' }
            ]
          }
        }
      },
      654: e => {
        e.exports = function (e) {
          const n = e.regex
          return {
            name: 'Diff',
            aliases: ['patch'],
            contains: [
              {
                className: 'meta',
                relevance: 10,
                match: n.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
              },
              {
                className: 'comment',
                variants: [
                  {
                    begin: n.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
                    end: /$/
                  },
                  { match: /^\*{15}$/ }
                ]
              },
              { className: 'addition', begin: /^\+/, end: /$/ },
              { className: 'deletion', begin: /^-/, end: /$/ },
              { className: 'addition', begin: /^!/, end: /$/ }
            ]
          }
        }
      },
      417: e => {
        e.exports = function (e) {
          const n = {
            keyword: [
              'break',
              'case',
              'chan',
              'const',
              'continue',
              'default',
              'defer',
              'else',
              'fallthrough',
              'for',
              'func',
              'go',
              'goto',
              'if',
              'import',
              'interface',
              'map',
              'package',
              'range',
              'return',
              'select',
              'struct',
              'switch',
              'type',
              'var'
            ],
            type: [
              'bool',
              'byte',
              'complex64',
              'complex128',
              'error',
              'float32',
              'float64',
              'int8',
              'int16',
              'int32',
              'int64',
              'string',
              'uint8',
              'uint16',
              'uint32',
              'uint64',
              'int',
              'uint',
              'uintptr',
              'rune'
            ],
            literal: ['true', 'false', 'iota', 'nil'],
            built_in: [
              'append',
              'cap',
              'close',
              'complex',
              'copy',
              'imag',
              'len',
              'make',
              'new',
              'panic',
              'print',
              'println',
              'real',
              'recover',
              'delete'
            ]
          }
          return {
            name: 'Go',
            aliases: ['golang'],
            keywords: n,
            illegal: '</',
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              { className: 'string', variants: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, { begin: '`', end: '`' }] },
              { className: 'number', variants: [{ begin: e.C_NUMBER_RE + '[i]', relevance: 1 }, e.C_NUMBER_MODE] },
              { begin: /:=/ },
              {
                className: 'function',
                beginKeywords: 'func',
                end: '\\s*(\\{|$)',
                excludeEnd: !0,
                contains: [
                  e.TITLE_MODE,
                  { className: 'params', begin: /\(/, end: /\)/, endsParent: !0, keywords: n, illegal: /["']/ }
                ]
              }
            ]
          }
        }
      },
      178: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = {
              className: 'number',
              relevance: 0,
              variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e.NUMBER_RE }]
            },
            r = e.COMMENT()
          r.variants = [
            { begin: /;/, end: /$/ },
            { begin: /#/, end: /$/ }
          ]
          const a = { className: 'variable', variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }] },
            i = { className: 'literal', begin: /\bon|off|true|false|yes|no\b/ },
            o = {
              className: 'string',
              contains: [e.BACKSLASH_ESCAPE],
              variants: [
                { begin: "'''", end: "'''", relevance: 10 },
                { begin: '"""', end: '"""', relevance: 10 },
                { begin: '"', end: '"' },
                { begin: "'", end: "'" }
              ]
            },
            s = { begin: /\[/, end: /\]/, contains: [r, i, a, o, t, 'self'], relevance: 0 },
            l = n.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/)
          return {
            name: 'TOML, also INI',
            aliases: ['toml'],
            case_insensitive: !0,
            illegal: /\S/,
            contains: [
              r,
              { className: 'section', begin: /\[+/, end: /\]+/ },
              {
                begin: n.concat(l, '(\\s*\\.\\s*', l, ')*', n.lookahead(/\s*=\s*[^#\s]/)),
                className: 'attr',
                starts: { end: /$/, contains: [r, s, i, a, o, t] }
              }
            ]
          }
        }
      },
      793: e => {
        var n = '\\.([0-9](_*[0-9])*)',
          t = '[0-9a-fA-F](_*[0-9a-fA-F])*',
          r = {
            className: 'number',
            variants: [
              { begin: `(\\b([0-9](_*[0-9])*)((${n})|\\.)?|(${n}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b` },
              { begin: `\\b([0-9](_*[0-9])*)((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
              { begin: `(${n})[fFdD]?\\b` },
              { begin: '\\b([0-9](_*[0-9])*)[fFdD]\\b' },
              { begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b` },
              { begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b' },
              { begin: `\\b0[xX](${t})[lL]?\\b` },
              { begin: '\\b0(_*[0-7])*[lL]?\\b' },
              { begin: '\\b0[bB][01](_*[01])*[lL]?\\b' }
            ],
            relevance: 0
          }
        function a(e, n, t) {
          return -1 === t ? '' : e.replace(n, r => a(e, n, t - 1))
        }
        e.exports = function (e) {
          e.regex
          const n = '[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*',
            t = n + a('(?:<' + n + '~~~(?:\\s*,\\s*' + n + '~~~)*>)?', /~~~/g, 2),
            i = {
              keyword: [
                'synchronized',
                'abstract',
                'private',
                'var',
                'static',
                'if',
                'const ',
                'for',
                'while',
                'strictfp',
                'finally',
                'protected',
                'import',
                'native',
                'final',
                'void',
                'enum',
                'else',
                'break',
                'transient',
                'catch',
                'instanceof',
                'volatile',
                'case',
                'assert',
                'package',
                'default',
                'public',
                'try',
                'switch',
                'continue',
                'throws',
                'protected',
                'public',
                'private',
                'module',
                'requires',
                'exports',
                'do'
              ],
              literal: ['false', 'true', 'null'],
              type: ['char', 'boolean', 'long', 'float', 'int', 'byte', 'short', 'double'],
              built_in: ['super', 'this']
            },
            o = { className: 'meta', begin: '@' + n, contains: [{ begin: /\(/, end: /\)/, contains: ['self'] }] },
            s = {
              className: 'params',
              begin: /\(/,
              end: /\)/,
              keywords: i,
              relevance: 0,
              contains: [e.C_BLOCK_COMMENT_MODE],
              endsParent: !0
            }
          return {
            name: 'Java',
            aliases: ['jsp'],
            keywords: i,
            illegal: /<\/|#/,
            contains: [
              e.COMMENT('/\\*\\*', '\\*/', {
                relevance: 0,
                contains: [
                  { begin: /\w+@/, relevance: 0 },
                  { className: 'doctag', begin: '@[A-Za-z]+' }
                ]
              }),
              { begin: /import java\.[a-z]+\./, keywords: 'import', relevance: 2 },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              { begin: /"""/, end: /"""/, className: 'string', contains: [e.BACKSLASH_ESCAPE] },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              {
                match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, n],
                className: { 1: 'keyword', 3: 'title.class' }
              },
              { begin: [n, /\s+/, n, /\s+/, /=/], className: { 1: 'type', 3: 'variable', 5: 'operator' } },
              {
                begin: [/record/, /\s+/, n],
                className: { 1: 'keyword', 3: 'title.class' },
                contains: [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
              },
              { beginKeywords: 'new throw return else', relevance: 0 },
              {
                begin: ['(?:' + t + '\\s+)', e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
                className: { 2: 'title.function' },
                keywords: i,
                contains: [
                  {
                    className: 'params',
                    begin: /\(/,
                    end: /\)/,
                    keywords: i,
                    relevance: 0,
                    contains: [o, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, e.C_BLOCK_COMMENT_MODE]
                  },
                  e.C_LINE_COMMENT_MODE,
                  e.C_BLOCK_COMMENT_MODE
                ]
              },
              r,
              o
            ]
          }
        }
      },
      721: e => {
        const n = '[A-Za-z$_][0-9A-Za-z$_]*',
          t = [
            'as',
            'in',
            'of',
            'if',
            'for',
            'while',
            'finally',
            'var',
            'new',
            'function',
            'do',
            'return',
            'void',
            'else',
            'break',
            'catch',
            'instanceof',
            'with',
            'throw',
            'case',
            'default',
            'try',
            'switch',
            'continue',
            'typeof',
            'delete',
            'let',
            'yield',
            'const',
            'class',
            'debugger',
            'async',
            'await',
            'static',
            'import',
            'from',
            'export',
            'extends'
          ],
          r = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
          a = [
            'Object',
            'Function',
            'Boolean',
            'Symbol',
            'Math',
            'Date',
            'Number',
            'BigInt',
            'String',
            'RegExp',
            'Array',
            'Float32Array',
            'Float64Array',
            'Int8Array',
            'Uint8Array',
            'Uint8ClampedArray',
            'Int16Array',
            'Int32Array',
            'Uint16Array',
            'Uint32Array',
            'BigInt64Array',
            'BigUint64Array',
            'Set',
            'Map',
            'WeakSet',
            'WeakMap',
            'ArrayBuffer',
            'SharedArrayBuffer',
            'Atomics',
            'DataView',
            'JSON',
            'Promise',
            'Generator',
            'GeneratorFunction',
            'AsyncFunction',
            'Reflect',
            'Proxy',
            'Intl',
            'WebAssembly'
          ],
          i = [
            'Error',
            'EvalError',
            'InternalError',
            'RangeError',
            'ReferenceError',
            'SyntaxError',
            'TypeError',
            'URIError'
          ],
          o = [
            'setInterval',
            'setTimeout',
            'clearInterval',
            'clearTimeout',
            'require',
            'exports',
            'eval',
            'isFinite',
            'isNaN',
            'parseFloat',
            'parseInt',
            'decodeURI',
            'decodeURIComponent',
            'encodeURI',
            'encodeURIComponent',
            'escape',
            'unescape'
          ],
          s = ['arguments', 'this', 'super', 'console', 'window', 'document', 'localStorage', 'module', 'global'],
          l = [].concat(o, a, i)
        e.exports = function (e) {
          const c = e.regex,
            d = n,
            u = {
              begin: /<[A-Za-z0-9\\._:-]+/,
              end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
              isTrulyOpeningTag: (e, n) => {
                const t = e[0].length + e.index,
                  r = e.input[t]
                if ('<' === r || ',' === r) return void n.ignoreMatch()
                let a
                '>' === r &&
                  (((e, { after: n }) => {
                    const t = '</' + e[0].slice(1)
                    return -1 !== e.input.indexOf(t, n)
                  })(e, { after: t }) ||
                    n.ignoreMatch()),
                  (a = e.input.substr(t).match(/^\s+extends\s+/)) && 0 === a.index && n.ignoreMatch()
              }
            },
            p = { $pattern: n, keyword: t, literal: r, built_in: l, 'variable.language': s },
            g = '\\.([0-9](_?[0-9])*)',
            f = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
            m = {
              className: 'number',
              variants: [
                { begin: `(\\b(${f})((${g})|\\.)?|(${g}))[eE][+-]?([0-9](_?[0-9])*)\\b` },
                { begin: `\\b(${f})\\b((${g})\\b|\\.)?|(${g})\\b` },
                { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
                { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
                { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
                { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
                { begin: '\\b0[0-7]+n?\\b' }
              ],
              relevance: 0
            },
            b = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: p, contains: [] },
            h = {
              begin: 'html`',
              end: '',
              starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, b], subLanguage: 'xml' }
            },
            _ = {
              begin: 'css`',
              end: '',
              starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, b], subLanguage: 'css' }
            },
            v = { className: 'string', begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE, b] },
            y = {
              className: 'comment',
              variants: [
                e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
                  relevance: 0,
                  contains: [
                    {
                      begin: '(?=@[A-Za-z]+)',
                      relevance: 0,
                      contains: [
                        { className: 'doctag', begin: '@[A-Za-z]+' },
                        { className: 'type', begin: '\\{', end: '\\}', excludeEnd: !0, excludeBegin: !0, relevance: 0 },
                        { className: 'variable', begin: d + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
                        { begin: /(?=[^\n])\s/, relevance: 0 }
                      ]
                    }
                  ]
                }),
                e.C_BLOCK_COMMENT_MODE,
                e.C_LINE_COMMENT_MODE
              ]
            },
            E = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, h, _, v, m]
          b.contains = E.concat({ begin: /\{/, end: /\}/, keywords: p, contains: ['self'].concat(E) })
          const w = [].concat(y, b.contains),
            N = w.concat([{ begin: /\(/, end: /\)/, keywords: p, contains: ['self'].concat(w) }]),
            x = {
              className: 'params',
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: p,
              contains: N
            },
            k = {
              variants: [
                {
                  match: [/class/, /\s+/, d, /\s+/, /extends/, /\s+/, c.concat(d, '(', c.concat(/\./, d), ')*')],
                  scope: { 1: 'keyword', 3: 'title.class', 5: 'keyword', 7: 'title.class.inherited' }
                },
                { match: [/class/, /\s+/, d], scope: { 1: 'keyword', 3: 'title.class' } }
              ]
            },
            O = {
              relevance: 0,
              match: c.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]+|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+/),
              className: 'title.class',
              keywords: { _: [...a, ...i] }
            },
            S = {
              variants: [{ match: [/function/, /\s+/, d, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }],
              className: { 1: 'keyword', 3: 'title.function' },
              label: 'func.def',
              contains: [x],
              illegal: /%/
            },
            C = {
              match: c.concat(/\b/, ((A = [...o, 'super']), c.concat('(?!', A.join('|'), ')')), d, c.lookahead(/\(/)),
              className: 'title.function',
              relevance: 0
            }
          var A
          const M = {
              begin: c.concat(/\./, c.lookahead(c.concat(d, /(?![0-9A-Za-z$_(])/))),
              end: d,
              excludeBegin: !0,
              keywords: 'prototype',
              className: 'property',
              relevance: 0
            },
            T = {
              match: [/get|set/, /\s+/, d, /(?=\()/],
              className: { 1: 'keyword', 3: 'title.function' },
              contains: [{ begin: /\(\)/ }, x]
            },
            I = '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + e.UNDERSCORE_IDENT_RE + ')\\s*=>',
            R = {
              match: [/const|var|let/, /\s+/, d, /\s*/, /=\s*/, c.lookahead(I)],
              className: { 1: 'keyword', 3: 'title.function' },
              contains: [x]
            }
          return {
            name: 'Javascript',
            aliases: ['js', 'jsx', 'mjs', 'cjs'],
            keywords: p,
            exports: { PARAMS_CONTAINS: N, CLASS_REFERENCE: O },
            illegal: /#(?![$_A-z])/,
            contains: [
              e.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
              { label: 'use_strict', className: 'meta', relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              h,
              _,
              v,
              y,
              m,
              O,
              { className: 'attr', begin: d + c.lookahead(':'), relevance: 0 },
              R,
              {
                begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                keywords: 'return throw case',
                relevance: 0,
                contains: [
                  y,
                  e.REGEXP_MODE,
                  {
                    className: 'function',
                    begin: I,
                    returnBegin: !0,
                    end: '\\s*=>',
                    contains: [
                      {
                        className: 'params',
                        variants: [
                          { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                          { className: null, begin: /\(\s*\)/, skip: !0 },
                          { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: p, contains: N }
                        ]
                      }
                    ]
                  },
                  { begin: /,/, relevance: 0 },
                  { match: /\s+/, relevance: 0 },
                  {
                    variants: [
                      { begin: '<>', end: '</>' },
                      { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ },
                      { begin: u.begin, 'on:begin': u.isTrulyOpeningTag, end: u.end }
                    ],
                    subLanguage: 'xml',
                    contains: [{ begin: u.begin, end: u.end, skip: !0, contains: ['self'] }]
                  }
                ]
              },
              S,
              { beginKeywords: 'while if switch catch for' },
              {
                begin:
                  '\\b(?!function)' +
                  e.UNDERSCORE_IDENT_RE +
                  '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
                returnBegin: !0,
                label: 'func.def',
                contains: [x, e.inherit(e.TITLE_MODE, { begin: d, className: 'title.function' })]
              },
              { match: /\.\.\./, relevance: 0 },
              M,
              { match: '\\$' + d, relevance: 0 },
              { match: [/\bconstructor(?=\s*\()/], className: { 1: 'title.function' }, contains: [x] },
              C,
              { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' },
              k,
              T,
              { match: /\$[(.]/ }
            ]
          }
        }
      },
      42: e => {
        e.exports = function (e) {
          const n = { beginKeywords: ['true', 'false', 'null'].join(' ') }
          return {
            name: 'JSON',
            contains: [
              { className: 'attr', begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01 },
              { match: /[{}[\],:]/, className: 'punctuation', relevance: 0 },
              e.QUOTE_STRING_MODE,
              n,
              e.C_NUMBER_MODE,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ],
            illegal: '\\S'
          }
        }
      },
      326: e => {
        var n = '\\.([0-9](_*[0-9])*)',
          t = '[0-9a-fA-F](_*[0-9a-fA-F])*',
          r = {
            className: 'number',
            variants: [
              { begin: `(\\b([0-9](_*[0-9])*)((${n})|\\.)?|(${n}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b` },
              { begin: `\\b([0-9](_*[0-9])*)((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
              { begin: `(${n})[fFdD]?\\b` },
              { begin: '\\b([0-9](_*[0-9])*)[fFdD]\\b' },
              { begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b` },
              { begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b' },
              { begin: `\\b0[xX](${t})[lL]?\\b` },
              { begin: '\\b0(_*[0-7])*[lL]?\\b' },
              { begin: '\\b0[bB][01](_*[01])*[lL]?\\b' }
            ],
            relevance: 0
          }
        e.exports = function (e) {
          const n = {
              keyword:
                'abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual',
              built_in: 'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
              literal: 'true false null'
            },
            t = { className: 'symbol', begin: e.UNDERSCORE_IDENT_RE + '@' },
            a = { className: 'subst', begin: /\$\{/, end: /\}/, contains: [e.C_NUMBER_MODE] },
            i = { className: 'variable', begin: '\\$' + e.UNDERSCORE_IDENT_RE },
            o = {
              className: 'string',
              variants: [
                { begin: '"""', end: '"""(?=[^"])', contains: [i, a] },
                { begin: "'", end: "'", illegal: /\n/, contains: [e.BACKSLASH_ESCAPE] },
                { begin: '"', end: '"', illegal: /\n/, contains: [e.BACKSLASH_ESCAPE, i, a] }
              ]
            }
          a.contains.push(o)
          const s = {
              className: 'meta',
              begin:
                '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' +
                e.UNDERSCORE_IDENT_RE +
                ')?'
            },
            l = {
              className: 'meta',
              begin: '@' + e.UNDERSCORE_IDENT_RE,
              contains: [{ begin: /\(/, end: /\)/, contains: [e.inherit(o, { className: 'string' })] }]
            },
            c = r,
            d = e.COMMENT('/\\*', '\\*/', { contains: [e.C_BLOCK_COMMENT_MODE] }),
            u = {
              variants: [
                { className: 'type', begin: e.UNDERSCORE_IDENT_RE },
                { begin: /\(/, end: /\)/, contains: [] }
              ]
            },
            p = u
          return (
            (p.variants[1].contains = [u]),
            (u.variants[1].contains = [p]),
            {
              name: 'Kotlin',
              aliases: ['kt', 'kts'],
              keywords: n,
              contains: [
                e.COMMENT('/\\*\\*', '\\*/', {
                  relevance: 0,
                  contains: [{ className: 'doctag', begin: '@[A-Za-z]+' }]
                }),
                e.C_LINE_COMMENT_MODE,
                d,
                {
                  className: 'keyword',
                  begin: /\b(break|continue|return|this)\b/,
                  starts: { contains: [{ className: 'symbol', begin: /@\w+/ }] }
                },
                t,
                s,
                l,
                {
                  className: 'function',
                  beginKeywords: 'fun',
                  end: '[(]|$',
                  returnBegin: !0,
                  excludeEnd: !0,
                  keywords: n,
                  relevance: 5,
                  contains: [
                    {
                      begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
                      returnBegin: !0,
                      relevance: 0,
                      contains: [e.UNDERSCORE_TITLE_MODE]
                    },
                    { className: 'type', begin: /</, end: />/, keywords: 'reified', relevance: 0 },
                    {
                      className: 'params',
                      begin: /\(/,
                      end: /\)/,
                      endsParent: !0,
                      keywords: n,
                      relevance: 0,
                      contains: [
                        {
                          begin: /:/,
                          end: /[=,\/]/,
                          endsWithParent: !0,
                          contains: [u, e.C_LINE_COMMENT_MODE, d],
                          relevance: 0
                        },
                        e.C_LINE_COMMENT_MODE,
                        d,
                        s,
                        l,
                        o,
                        e.C_NUMBER_MODE
                      ]
                    },
                    d
                  ]
                },
                {
                  className: 'class',
                  beginKeywords: 'class interface trait',
                  end: /[:\{(]|$/,
                  excludeEnd: !0,
                  illegal: 'extends implements',
                  contains: [
                    { beginKeywords: 'public protected internal private constructor' },
                    e.UNDERSCORE_TITLE_MODE,
                    { className: 'type', begin: /</, end: />/, excludeBegin: !0, excludeEnd: !0, relevance: 0 },
                    { className: 'type', begin: /[,:]\s*/, end: /[<\(,]|$/, excludeBegin: !0, returnEnd: !0 },
                    s,
                    l
                  ]
                },
                o,
                { className: 'meta', begin: '^#!/usr/bin/env', end: '$', illegal: '\n' },
                c
              ]
            }
          )
        }
      },
      539: e => {
        const n = [
            'a',
            'abbr',
            'address',
            'article',
            'aside',
            'audio',
            'b',
            'blockquote',
            'body',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'dd',
            'del',
            'details',
            'dfn',
            'div',
            'dl',
            'dt',
            'em',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'header',
            'hgroup',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'legend',
            'li',
            'main',
            'mark',
            'menu',
            'nav',
            'object',
            'ol',
            'p',
            'q',
            'quote',
            'samp',
            'section',
            'span',
            'strong',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'tr',
            'ul',
            'var',
            'video'
          ],
          t = [
            'any-hover',
            'any-pointer',
            'aspect-ratio',
            'color',
            'color-gamut',
            'color-index',
            'device-aspect-ratio',
            'device-height',
            'device-width',
            'display-mode',
            'forced-colors',
            'grid',
            'height',
            'hover',
            'inverted-colors',
            'monochrome',
            'orientation',
            'overflow-block',
            'overflow-inline',
            'pointer',
            'prefers-color-scheme',
            'prefers-contrast',
            'prefers-reduced-motion',
            'prefers-reduced-transparency',
            'resolution',
            'scan',
            'scripting',
            'update',
            'width',
            'min-width',
            'max-width',
            'min-height',
            'max-height'
          ],
          r = [
            'active',
            'any-link',
            'blank',
            'checked',
            'current',
            'default',
            'defined',
            'dir',
            'disabled',
            'drop',
            'empty',
            'enabled',
            'first',
            'first-child',
            'first-of-type',
            'fullscreen',
            'future',
            'focus',
            'focus-visible',
            'focus-within',
            'has',
            'host',
            'host-context',
            'hover',
            'indeterminate',
            'in-range',
            'invalid',
            'is',
            'lang',
            'last-child',
            'last-of-type',
            'left',
            'link',
            'local-link',
            'not',
            'nth-child',
            'nth-col',
            'nth-last-child',
            'nth-last-col',
            'nth-last-of-type',
            'nth-of-type',
            'only-child',
            'only-of-type',
            'optional',
            'out-of-range',
            'past',
            'placeholder-shown',
            'read-only',
            'read-write',
            'required',
            'right',
            'root',
            'scope',
            'target',
            'target-within',
            'user-invalid',
            'valid',
            'visited',
            'where'
          ],
          a = [
            'after',
            'backdrop',
            'before',
            'cue',
            'cue-region',
            'first-letter',
            'first-line',
            'grammar-error',
            'marker',
            'part',
            'placeholder',
            'selection',
            'slotted',
            'spelling-error'
          ],
          i = [
            'align-content',
            'align-items',
            'align-self',
            'all',
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'backface-visibility',
            'background',
            'background-attachment',
            'background-clip',
            'background-color',
            'background-image',
            'background-origin',
            'background-position',
            'background-repeat',
            'background-size',
            'border',
            'border-bottom',
            'border-bottom-color',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-bottom-style',
            'border-bottom-width',
            'border-collapse',
            'border-color',
            'border-image',
            'border-image-outset',
            'border-image-repeat',
            'border-image-slice',
            'border-image-source',
            'border-image-width',
            'border-left',
            'border-left-color',
            'border-left-style',
            'border-left-width',
            'border-radius',
            'border-right',
            'border-right-color',
            'border-right-style',
            'border-right-width',
            'border-spacing',
            'border-style',
            'border-top',
            'border-top-color',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-top-style',
            'border-top-width',
            'border-width',
            'bottom',
            'box-decoration-break',
            'box-shadow',
            'box-sizing',
            'break-after',
            'break-before',
            'break-inside',
            'caption-side',
            'caret-color',
            'clear',
            'clip',
            'clip-path',
            'clip-rule',
            'color',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',
            'columns',
            'contain',
            'content',
            'content-visibility',
            'counter-increment',
            'counter-reset',
            'cue',
            'cue-after',
            'cue-before',
            'cursor',
            'direction',
            'display',
            'empty-cells',
            'filter',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'float',
            'flow',
            'font',
            'font-display',
            'font-family',
            'font-feature-settings',
            'font-kerning',
            'font-language-override',
            'font-size',
            'font-size-adjust',
            'font-smoothing',
            'font-stretch',
            'font-style',
            'font-synthesis',
            'font-variant',
            'font-variant-caps',
            'font-variant-east-asian',
            'font-variant-ligatures',
            'font-variant-numeric',
            'font-variant-position',
            'font-variation-settings',
            'font-weight',
            'gap',
            'glyph-orientation-vertical',
            'grid',
            'grid-area',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-column',
            'grid-column-end',
            'grid-column-start',
            'grid-gap',
            'grid-row',
            'grid-row-end',
            'grid-row-start',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows',
            'hanging-punctuation',
            'height',
            'hyphens',
            'icon',
            'image-orientation',
            'image-rendering',
            'image-resolution',
            'ime-mode',
            'isolation',
            'justify-content',
            'left',
            'letter-spacing',
            'line-break',
            'line-height',
            'list-style',
            'list-style-image',
            'list-style-position',
            'list-style-type',
            'margin',
            'margin-bottom',
            'margin-left',
            'margin-right',
            'margin-top',
            'marks',
            'mask',
            'mask-border',
            'mask-border-mode',
            'mask-border-outset',
            'mask-border-repeat',
            'mask-border-slice',
            'mask-border-source',
            'mask-border-width',
            'mask-clip',
            'mask-composite',
            'mask-image',
            'mask-mode',
            'mask-origin',
            'mask-position',
            'mask-repeat',
            'mask-size',
            'mask-type',
            'max-height',
            'max-width',
            'min-height',
            'min-width',
            'mix-blend-mode',
            'nav-down',
            'nav-index',
            'nav-left',
            'nav-right',
            'nav-up',
            'none',
            'normal',
            'object-fit',
            'object-position',
            'opacity',
            'order',
            'orphans',
            'outline',
            'outline-color',
            'outline-offset',
            'outline-style',
            'outline-width',
            'overflow',
            'overflow-wrap',
            'overflow-x',
            'overflow-y',
            'padding',
            'padding-bottom',
            'padding-left',
            'padding-right',
            'padding-top',
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'pause',
            'pause-after',
            'pause-before',
            'perspective',
            'perspective-origin',
            'pointer-events',
            'position',
            'quotes',
            'resize',
            'rest',
            'rest-after',
            'rest-before',
            'right',
            'row-gap',
            'scroll-margin',
            'scroll-margin-block',
            'scroll-margin-block-end',
            'scroll-margin-block-start',
            'scroll-margin-bottom',
            'scroll-margin-inline',
            'scroll-margin-inline-end',
            'scroll-margin-inline-start',
            'scroll-margin-left',
            'scroll-margin-right',
            'scroll-margin-top',
            'scroll-padding',
            'scroll-padding-block',
            'scroll-padding-block-end',
            'scroll-padding-block-start',
            'scroll-padding-bottom',
            'scroll-padding-inline',
            'scroll-padding-inline-end',
            'scroll-padding-inline-start',
            'scroll-padding-left',
            'scroll-padding-right',
            'scroll-padding-top',
            'scroll-snap-align',
            'scroll-snap-stop',
            'scroll-snap-type',
            'shape-image-threshold',
            'shape-margin',
            'shape-outside',
            'speak',
            'speak-as',
            'src',
            'tab-size',
            'table-layout',
            'text-align',
            'text-align-all',
            'text-align-last',
            'text-combine-upright',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-position',
            'text-emphasis-style',
            'text-indent',
            'text-justify',
            'text-orientation',
            'text-overflow',
            'text-rendering',
            'text-shadow',
            'text-transform',
            'text-underline-position',
            'top',
            'transform',
            'transform-box',
            'transform-origin',
            'transform-style',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'unicode-bidi',
            'vertical-align',
            'visibility',
            'voice-balance',
            'voice-duration',
            'voice-family',
            'voice-pitch',
            'voice-range',
            'voice-rate',
            'voice-stress',
            'voice-volume',
            'white-space',
            'widows',
            'width',
            'will-change',
            'word-break',
            'word-spacing',
            'word-wrap',
            'writing-mode',
            'z-index'
          ].reverse(),
          o = r.concat(a)
        e.exports = function (e) {
          const s = (e => ({
              IMPORTANT: { scope: 'meta', begin: '!important' },
              BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
              HEXCOLOR: { scope: 'number', begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ },
              FUNCTION_DISPATCH: { className: 'built_in', begin: /[\w-]+(?=\()/ },
              ATTRIBUTE_SELECTOR_MODE: {
                scope: 'selector-attr',
                begin: /\[/,
                end: /\]/,
                illegal: '$',
                contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
              },
              CSS_NUMBER_MODE: {
                scope: 'number',
                begin:
                  e.NUMBER_RE +
                  '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
                relevance: 0
              },
              CSS_VARIABLE: { className: 'attr', begin: /--[A-Za-z][A-Za-z0-9_-]*/ }
            }))(e),
            l = o,
            c = '([\\w-]+|@\\{[\\w-]+\\})',
            d = [],
            u = [],
            p = function (e) {
              return { className: 'string', begin: '~?' + e + '.*?' + e }
            },
            g = function (e, n, t) {
              return { className: e, begin: n, relevance: t }
            },
            f = { $pattern: /[a-z-]+/, keyword: 'and or not only', attribute: t.join(' ') },
            m = { begin: '\\(', end: '\\)', contains: u, keywords: f, relevance: 0 }
          u.push(
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            p("'"),
            p('"'),
            s.CSS_NUMBER_MODE,
            { begin: '(url|data-uri)\\(', starts: { className: 'string', end: '[\\)\\n]', excludeEnd: !0 } },
            s.HEXCOLOR,
            m,
            g('variable', '@@?[\\w-]+', 10),
            g('variable', '@\\{[\\w-]+\\}'),
            g('built_in', '~?`[^`]*?`'),
            { className: 'attribute', begin: '[\\w-]+\\s*:', end: ':', returnBegin: !0, excludeEnd: !0 },
            s.IMPORTANT
          )
          const b = u.concat({ begin: /\{/, end: /\}/, contains: d }),
            h = { beginKeywords: 'when', endsWithParent: !0, contains: [{ beginKeywords: 'and not' }].concat(u) },
            _ = {
              begin: c + '\\s*:',
              returnBegin: !0,
              end: /[;}]/,
              relevance: 0,
              contains: [
                { begin: /-(webkit|moz|ms|o)-/ },
                s.CSS_VARIABLE,
                {
                  className: 'attribute',
                  begin: '\\b(' + i.join('|') + ')\\b',
                  end: /(?=:)/,
                  starts: { endsWithParent: !0, illegal: '[<=$]', relevance: 0, contains: u }
                }
              ]
            },
            v = {
              className: 'keyword',
              begin:
                '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
              starts: { end: '[;{}]', keywords: f, returnEnd: !0, contains: u, relevance: 0 }
            },
            y = {
              className: 'variable',
              variants: [{ begin: '@[\\w-]+\\s*:', relevance: 15 }, { begin: '@[\\w-]+' }],
              starts: { end: '[;}]', returnEnd: !0, contains: b }
            },
            E = {
              variants: [
                { begin: '[\\.#:&\\[>]', end: '[;{}]' },
                { begin: c, end: /\{/ }
              ],
              returnBegin: !0,
              returnEnd: !0,
              illegal: '[<=\'$"]',
              relevance: 0,
              contains: [
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                h,
                g('keyword', 'all\\b'),
                g('variable', '@\\{[\\w-]+\\}'),
                { begin: '\\b(' + n.join('|') + ')\\b', className: 'selector-tag' },
                s.CSS_NUMBER_MODE,
                g('selector-tag', c, 0),
                g('selector-id', '#' + c),
                g('selector-class', '\\.' + c, 0),
                g('selector-tag', '&', 0),
                s.ATTRIBUTE_SELECTOR_MODE,
                { className: 'selector-pseudo', begin: ':(' + r.join('|') + ')' },
                { className: 'selector-pseudo', begin: ':(:)?(' + a.join('|') + ')' },
                { begin: /\(/, end: /\)/, relevance: 0, contains: b },
                { begin: '!important' },
                s.FUNCTION_DISPATCH
              ]
            },
            w = { begin: `[\\w-]+:(:)?(${l.join('|')})`, returnBegin: !0, contains: [E] }
          return (
            d.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, v, y, w, _, E),
            { name: 'Less', case_insensitive: !0, illegal: '[=>\'/<($"]', contains: d }
          )
        }
      },
      702: e => {
        e.exports = function (e) {
          const n = '\\[=*\\[',
            t = '\\]=*\\]',
            r = { begin: n, end: t, contains: ['self'] },
            a = [e.COMMENT('--(?!\\[=*\\[)', '$'), e.COMMENT('--\\[=*\\[', t, { contains: [r], relevance: 10 })]
          return {
            name: 'Lua',
            keywords: {
              $pattern: e.UNDERSCORE_IDENT_RE,
              literal: 'true false nil',
              keyword: 'and break do else elseif end for goto if in local not or repeat return then until while',
              built_in:
                '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove'
            },
            contains: a.concat([
              {
                className: 'function',
                beginKeywords: 'function',
                end: '\\)',
                contains: [
                  e.inherit(e.TITLE_MODE, { begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*' }),
                  { className: 'params', begin: '\\(', endsWithParent: !0, contains: a }
                ].concat(a)
              },
              e.C_NUMBER_MODE,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              { className: 'string', begin: n, end: t, contains: [r], relevance: 5 }
            ])
          }
        }
      },
      13: e => {
        e.exports = function (e) {
          const n = {
              className: 'variable',
              variants: [
                { begin: '\\$\\(' + e.UNDERSCORE_IDENT_RE + '\\)', contains: [e.BACKSLASH_ESCAPE] },
                { begin: /\$[@%<?\^\+\*]/ }
              ]
            },
            t = { className: 'string', begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, n] },
            r = {
              className: 'variable',
              begin: /\$\([\w-]+\s/,
              end: /\)/,
              keywords: {
                built_in:
                  'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value'
              },
              contains: [n]
            },
            a = { begin: '^' + e.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)' },
            i = { className: 'section', begin: /^[^\s]+:/, end: /$/, contains: [n] }
          return {
            name: 'Makefile',
            aliases: ['mk', 'mak', 'make'],
            keywords: {
              $pattern: /[\w-]+/,
              keyword:
                'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath'
            },
            contains: [
              e.HASH_COMMENT_MODE,
              n,
              t,
              r,
              a,
              { className: 'meta', begin: /^\.PHONY:/, end: /$/, keywords: { $pattern: /[\.\w]+/, keyword: '.PHONY' } },
              i
            ]
          }
        }
      },
      6: e => {
        e.exports = function (e) {
          const n = { begin: /<\/?[A-Za-z_]/, end: '>', subLanguage: 'xml', relevance: 0 },
            t = {
              variants: [
                { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
                { begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, relevance: 2 },
                { begin: e.regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/), relevance: 2 },
                { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
                { begin: /\[.*?\]\(.*?\)/, relevance: 0 }
              ],
              returnBegin: !0,
              contains: [
                { match: /\[(?=\])/ },
                { className: 'string', relevance: 0, begin: '\\[', end: '\\]', excludeBegin: !0, returnEnd: !0 },
                { className: 'link', relevance: 0, begin: '\\]\\(', end: '\\)', excludeBegin: !0, excludeEnd: !0 },
                { className: 'symbol', relevance: 0, begin: '\\]\\[', end: '\\]', excludeBegin: !0, excludeEnd: !0 }
              ]
            },
            r = {
              className: 'strong',
              contains: [],
              variants: [
                { begin: /_{2}/, end: /_{2}/ },
                { begin: /\*{2}/, end: /\*{2}/ }
              ]
            },
            a = {
              className: 'emphasis',
              contains: [],
              variants: [
                { begin: /\*(?!\*)/, end: /\*/ },
                { begin: /_(?!_)/, end: /_/, relevance: 0 }
              ]
            }
          r.contains.push(a), a.contains.push(r)
          let i = [n, t]
          return (
            (r.contains = r.contains.concat(i)),
            (a.contains = a.contains.concat(i)),
            (i = i.concat(r, a)),
            {
              name: 'Markdown',
              aliases: ['md', 'mkdown', 'mkd'],
              contains: [
                {
                  className: 'section',
                  variants: [
                    { begin: '^#{1,6}', end: '$', contains: i },
                    {
                      begin: '(?=^.+?\\n[=-]{2,}$)',
                      contains: [{ begin: '^[=-]*$' }, { begin: '^', end: '\\n', contains: i }]
                    }
                  ]
                },
                n,
                { className: 'bullet', begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)', end: '\\s+', excludeEnd: !0 },
                r,
                a,
                { className: 'quote', begin: '^>\\s+', contains: i, end: '$' },
                {
                  className: 'code',
                  variants: [
                    { begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*' },
                    { begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*' },
                    { begin: '```', end: '```+[ ]*$' },
                    { begin: '~~~', end: '~~~+[ ]*$' },
                    { begin: '`.+?`' },
                    { begin: '(?=^( {4}|\\t))', contains: [{ begin: '^( {4}|\\t)', end: '(\\n)$' }], relevance: 0 }
                  ]
                },
                { begin: '^[-\\*]{3,}', end: '$' },
                t,
                {
                  begin: /^\[[^\n]+\]:/,
                  returnBegin: !0,
                  contains: [
                    { className: 'symbol', begin: /\[/, end: /\]/, excludeBegin: !0, excludeEnd: !0 },
                    { className: 'link', begin: /:\s*/, end: /$/, excludeBegin: !0 }
                  ]
                }
              ]
            }
          )
        }
      },
      652: e => {
        e.exports = function (e) {
          const n = /[a-zA-Z@][a-zA-Z0-9_]*/,
            t = { $pattern: n, keyword: ['@interface', '@class', '@protocol', '@implementation'] }
          return {
            name: 'Objective-C',
            aliases: ['mm', 'objc', 'obj-c', 'obj-c++', 'objective-c++'],
            keywords: {
              $pattern: n,
              keyword: [
                'int',
                'float',
                'while',
                'char',
                'export',
                'sizeof',
                'typedef',
                'const',
                'struct',
                'for',
                'union',
                'unsigned',
                'long',
                'volatile',
                'static',
                'bool',
                'mutable',
                'if',
                'do',
                'return',
                'goto',
                'void',
                'enum',
                'else',
                'break',
                'extern',
                'asm',
                'case',
                'short',
                'default',
                'double',
                'register',
                'explicit',
                'signed',
                'typename',
                'this',
                'switch',
                'continue',
                'wchar_t',
                'inline',
                'readonly',
                'assign',
                'readwrite',
                'self',
                '@synchronized',
                'id',
                'typeof',
                'nonatomic',
                'super',
                'unichar',
                'IBOutlet',
                'IBAction',
                'strong',
                'weak',
                'copy',
                'in',
                'out',
                'inout',
                'bycopy',
                'byref',
                'oneway',
                '__strong',
                '__weak',
                '__block',
                '__autoreleasing',
                '@private',
                '@protected',
                '@public',
                '@try',
                '@property',
                '@end',
                '@throw',
                '@catch',
                '@finally',
                '@autoreleasepool',
                '@synthesize',
                '@dynamic',
                '@selector',
                '@optional',
                '@required',
                '@encode',
                '@package',
                '@import',
                '@defs',
                '@compatibility_alias',
                '__bridge',
                '__bridge_transfer',
                '__bridge_retained',
                '__bridge_retain',
                '__covariant',
                '__contravariant',
                '__kindof',
                '_Nonnull',
                '_Nullable',
                '_Null_unspecified',
                '__FUNCTION__',
                '__PRETTY_FUNCTION__',
                '__attribute__',
                'getter',
                'setter',
                'retain',
                'unsafe_unretained',
                'nonnull',
                'nullable',
                'null_unspecified',
                'null_resettable',
                'class',
                'instancetype',
                'NS_DESIGNATED_INITIALIZER',
                'NS_UNAVAILABLE',
                'NS_REQUIRES_SUPER',
                'NS_RETURNS_INNER_POINTER',
                'NS_INLINE',
                'NS_AVAILABLE',
                'NS_DEPRECATED',
                'NS_ENUM',
                'NS_OPTIONS',
                'NS_SWIFT_UNAVAILABLE',
                'NS_ASSUME_NONNULL_BEGIN',
                'NS_ASSUME_NONNULL_END',
                'NS_REFINED_FOR_SWIFT',
                'NS_SWIFT_NAME',
                'NS_SWIFT_NOTHROW',
                'NS_DURING',
                'NS_HANDLER',
                'NS_ENDHANDLER',
                'NS_VALUERETURN',
                'NS_VOIDRETURN'
              ],
              literal: ['false', 'true', 'FALSE', 'TRUE', 'nil', 'YES', 'NO', 'NULL'],
              built_in: [
                'BOOL',
                'dispatch_once_t',
                'dispatch_queue_t',
                'dispatch_sync',
                'dispatch_async',
                'dispatch_once'
              ]
            },
            illegal: '</',
            contains: [
              { className: 'built_in', begin: '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+' },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              e.C_NUMBER_MODE,
              e.QUOTE_STRING_MODE,
              e.APOS_STRING_MODE,
              {
                className: 'string',
                variants: [{ begin: '@"', end: '"', illegal: '\\n', contains: [e.BACKSLASH_ESCAPE] }]
              },
              {
                className: 'meta',
                begin: /#\s*[a-z]+\b/,
                end: /$/,
                keywords: { keyword: 'if else elif endif define undef warning error line pragma ifdef ifndef include' },
                contains: [
                  { begin: /\\\n/, relevance: 0 },
                  e.inherit(e.QUOTE_STRING_MODE, { className: 'string' }),
                  { className: 'string', begin: /<.*?>/, end: /$/, illegal: '\\n' },
                  e.C_LINE_COMMENT_MODE,
                  e.C_BLOCK_COMMENT_MODE
                ]
              },
              {
                className: 'class',
                begin: '(' + t.keyword.join('|') + ')\\b',
                end: /(\{|$)/,
                excludeEnd: !0,
                keywords: t,
                contains: [e.UNDERSCORE_TITLE_MODE]
              },
              { begin: '\\.' + e.UNDERSCORE_IDENT_RE, relevance: 0 }
            ]
          }
        }
      },
      768: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = /[dualxmsipngr]{0,12}/,
            r = {
              $pattern: /[\w.]+/,
              keyword: [
                'abs',
                'accept',
                'alarm',
                'and',
                'atan2',
                'bind',
                'binmode',
                'bless',
                'break',
                'caller',
                'chdir',
                'chmod',
                'chomp',
                'chop',
                'chown',
                'chr',
                'chroot',
                'close',
                'closedir',
                'connect',
                'continue',
                'cos',
                'crypt',
                'dbmclose',
                'dbmopen',
                'defined',
                'delete',
                'die',
                'do',
                'dump',
                'each',
                'else',
                'elsif',
                'endgrent',
                'endhostent',
                'endnetent',
                'endprotoent',
                'endpwent',
                'endservent',
                'eof',
                'eval',
                'exec',
                'exists',
                'exit',
                'exp',
                'fcntl',
                'fileno',
                'flock',
                'for',
                'foreach',
                'fork',
                'format',
                'formline',
                'getc',
                'getgrent',
                'getgrgid',
                'getgrnam',
                'gethostbyaddr',
                'gethostbyname',
                'gethostent',
                'getlogin',
                'getnetbyaddr',
                'getnetbyname',
                'getnetent',
                'getpeername',
                'getpgrp',
                'getpriority',
                'getprotobyname',
                'getprotobynumber',
                'getprotoent',
                'getpwent',
                'getpwnam',
                'getpwuid',
                'getservbyname',
                'getservbyport',
                'getservent',
                'getsockname',
                'getsockopt',
                'given',
                'glob',
                'gmtime',
                'goto',
                'grep',
                'gt',
                'hex',
                'if',
                'index',
                'int',
                'ioctl',
                'join',
                'keys',
                'kill',
                'last',
                'lc',
                'lcfirst',
                'length',
                'link',
                'listen',
                'local',
                'localtime',
                'log',
                'lstat',
                'lt',
                'ma',
                'map',
                'mkdir',
                'msgctl',
                'msgget',
                'msgrcv',
                'msgsnd',
                'my',
                'ne',
                'next',
                'no',
                'not',
                'oct',
                'open',
                'opendir',
                'or',
                'ord',
                'our',
                'pack',
                'package',
                'pipe',
                'pop',
                'pos',
                'print',
                'printf',
                'prototype',
                'push',
                'q|0',
                'qq',
                'quotemeta',
                'qw',
                'qx',
                'rand',
                'read',
                'readdir',
                'readline',
                'readlink',
                'readpipe',
                'recv',
                'redo',
                'ref',
                'rename',
                'require',
                'reset',
                'return',
                'reverse',
                'rewinddir',
                'rindex',
                'rmdir',
                'say',
                'scalar',
                'seek',
                'seekdir',
                'select',
                'semctl',
                'semget',
                'semop',
                'send',
                'setgrent',
                'sethostent',
                'setnetent',
                'setpgrp',
                'setpriority',
                'setprotoent',
                'setpwent',
                'setservent',
                'setsockopt',
                'shift',
                'shmctl',
                'shmget',
                'shmread',
                'shmwrite',
                'shutdown',
                'sin',
                'sleep',
                'socket',
                'socketpair',
                'sort',
                'splice',
                'split',
                'sprintf',
                'sqrt',
                'srand',
                'stat',
                'state',
                'study',
                'sub',
                'substr',
                'symlink',
                'syscall',
                'sysopen',
                'sysread',
                'sysseek',
                'system',
                'syswrite',
                'tell',
                'telldir',
                'tie',
                'tied',
                'time',
                'times',
                'tr',
                'truncate',
                'uc',
                'ucfirst',
                'umask',
                'undef',
                'unless',
                'unlink',
                'unpack',
                'unshift',
                'untie',
                'until',
                'use',
                'utime',
                'values',
                'vec',
                'wait',
                'waitpid',
                'wantarray',
                'warn',
                'when',
                'while',
                'write',
                'x|0',
                'xor',
                'y|0'
              ].join(' ')
            },
            a = { className: 'subst', begin: '[$@]\\{', end: '\\}', keywords: r },
            i = { begin: /->\{/, end: /\}/ },
            o = {
              variants: [
                { begin: /\$\d/ },
                { begin: n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, '(?![A-Za-z])(?![@$%])') },
                { begin: /[$%@][^\s\w{]/, relevance: 0 }
              ]
            },
            s = [e.BACKSLASH_ESCAPE, a, o],
            l = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
            c = (e, r, a = '\\1') => {
              const i = '\\1' === a ? a : n.concat(a, r)
              return n.concat(n.concat('(?:', e, ')'), r, /(?:\\.|[^\\\/])*?/, i, /(?:\\.|[^\\\/])*?/, a, t)
            },
            d = (e, r, a) => n.concat(n.concat('(?:', e, ')'), r, /(?:\\.|[^\\\/])*?/, a, t),
            u = [
              o,
              e.HASH_COMMENT_MODE,
              e.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
              i,
              {
                className: 'string',
                contains: s,
                variants: [
                  { begin: 'q[qwxr]?\\s*\\(', end: '\\)', relevance: 5 },
                  { begin: 'q[qwxr]?\\s*\\[', end: '\\]', relevance: 5 },
                  { begin: 'q[qwxr]?\\s*\\{', end: '\\}', relevance: 5 },
                  { begin: 'q[qwxr]?\\s*\\|', end: '\\|', relevance: 5 },
                  { begin: 'q[qwxr]?\\s*<', end: '>', relevance: 5 },
                  { begin: 'qw\\s+q', end: 'q', relevance: 5 },
                  { begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE] },
                  { begin: '"', end: '"' },
                  { begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE] },
                  { begin: /\{\w+\}/, relevance: 0 },
                  { begin: '-?\\w+\\s*=>', relevance: 0 }
                ]
              },
              {
                className: 'number',
                begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
                relevance: 0
              },
              {
                begin: '(\\/\\/|' + e.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
                keywords: 'split return print reverse grep',
                relevance: 0,
                contains: [
                  e.HASH_COMMENT_MODE,
                  {
                    className: 'regexp',
                    variants: [
                      { begin: c('s|tr|y', n.either(...l, { capture: !0 })) },
                      { begin: c('s|tr|y', '\\(', '\\)') },
                      { begin: c('s|tr|y', '\\[', '\\]') },
                      { begin: c('s|tr|y', '\\{', '\\}') }
                    ],
                    relevance: 2
                  },
                  {
                    className: 'regexp',
                    variants: [
                      { begin: /(m|qr)\/\//, relevance: 0 },
                      { begin: d('(?:m|qr)?', /\//, /\//) },
                      { begin: d('m|qr', n.either(...l, { capture: !0 }), /\1/) },
                      { begin: d('m|qr', /\(/, /\)/) },
                      { begin: d('m|qr', /\[/, /\]/) },
                      { begin: d('m|qr', /\{/, /\}/) }
                    ]
                  }
                ]
              },
              {
                className: 'function',
                beginKeywords: 'sub',
                end: '(\\s*\\(.*?\\))?[;{]',
                excludeEnd: !0,
                relevance: 5,
                contains: [e.TITLE_MODE]
              },
              { begin: '-\\w\\b', relevance: 0 },
              {
                begin: '^__DATA__$',
                end: '^__END__$',
                subLanguage: 'mojolicious',
                contains: [{ begin: '^@@.*', end: '$', className: 'comment' }]
              }
            ]
          return (a.contains = u), (i.contains = u), { name: 'Perl', aliases: ['pl', 'pm'], keywords: r, contains: u }
        }
      },
      218: e => {
        e.exports = function (e) {
          return {
            name: 'PHP template',
            subLanguage: 'xml',
            contains: [
              {
                begin: /<\?(php|=)?/,
                end: /\?>/,
                subLanguage: 'php',
                contains: [
                  { begin: '/\\*', end: '\\*/', skip: !0 },
                  { begin: 'b"', end: '"', skip: !0 },
                  { begin: "b'", end: "'", skip: !0 },
                  e.inherit(e.APOS_STRING_MODE, { illegal: null, className: null, contains: null, skip: !0 }),
                  e.inherit(e.QUOTE_STRING_MODE, { illegal: null, className: null, contains: null, skip: !0 })
                ]
              }
            ]
          }
        }
      },
      938: e => {
        e.exports = function (e) {
          const n = { className: 'variable', begin: '\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*(?![A-Za-z0-9])(?![$])' },
            t = {
              className: 'meta',
              variants: [{ begin: /<\?php/, relevance: 10 }, { begin: /<\?[=]?/ }, { begin: /\?>/ }]
            },
            r = { className: 'subst', variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }] },
            a = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
            i = e.inherit(e.QUOTE_STRING_MODE, { illegal: null, contains: e.QUOTE_STRING_MODE.contains.concat(r) }),
            o = e.END_SAME_AS_BEGIN({
              begin: /<<<[ \t]*(\w+)\n/,
              end: /[ \t]*(\w+)\b/,
              contains: e.QUOTE_STRING_MODE.contains.concat(r)
            }),
            s = {
              className: 'string',
              contains: [e.BACKSLASH_ESCAPE, t],
              variants: [e.inherit(a, { begin: "b'", end: "'" }), e.inherit(i, { begin: 'b"', end: '"' }), i, a, o]
            },
            l = {
              className: 'number',
              variants: [
                { begin: '\\b0b[01]+(?:_[01]+)*\\b' },
                { begin: '\\b0o[0-7]+(?:_[0-7]+)*\\b' },
                { begin: '\\b0x[\\da-f]+(?:_[\\da-f]+)*\\b' },
                { begin: '(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:e[+-]?\\d+)?' }
              ],
              relevance: 0
            },
            c = {
              keyword:
                '__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 mixed new object or private protected public real return string switch throw trait try unset use var void while xor yield',
              literal: 'false null true',
              built_in:
                'Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException UnhandledMatchError ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Stringable Throwable Traversable WeakReference WeakMap Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass'
            }
          return {
            case_insensitive: !0,
            keywords: c,
            contains: [
              e.HASH_COMMENT_MODE,
              e.COMMENT('//', '$', { contains: [t] }),
              e.COMMENT('/\\*', '\\*/', { contains: [{ className: 'doctag', begin: '@[A-Za-z]+' }] }),
              e.COMMENT('__halt_compiler.+?;', !1, { endsWithParent: !0, keywords: '__halt_compiler' }),
              t,
              { className: 'keyword', begin: /\$this\b/ },
              n,
              { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
              {
                className: 'function',
                relevance: 0,
                beginKeywords: 'fn function',
                end: /[;{]/,
                excludeEnd: !0,
                illegal: '[$%\\[]',
                contains: [
                  { beginKeywords: 'use' },
                  e.UNDERSCORE_TITLE_MODE,
                  { begin: '=>', endsParent: !0 },
                  {
                    className: 'params',
                    begin: '\\(',
                    end: '\\)',
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: c,
                    contains: ['self', n, e.C_BLOCK_COMMENT_MODE, s, l]
                  }
                ]
              },
              {
                className: 'class',
                variants: [
                  { beginKeywords: 'enum', illegal: /[($"]/ },
                  { beginKeywords: 'class interface trait', illegal: /[:($"]/ }
                ],
                relevance: 0,
                end: /\{/,
                excludeEnd: !0,
                contains: [{ beginKeywords: 'extends implements' }, e.UNDERSCORE_TITLE_MODE]
              },
              {
                beginKeywords: 'namespace',
                relevance: 0,
                end: ';',
                illegal: /[.']/,
                contains: [e.UNDERSCORE_TITLE_MODE]
              },
              { beginKeywords: 'use', relevance: 0, end: ';', contains: [e.UNDERSCORE_TITLE_MODE] },
              s,
              l
            ]
          }
        }
      },
      594: e => {
        e.exports = function (e) {
          return { name: 'Plain text', aliases: ['text', 'txt'], disableAutodetect: !0 }
        }
      },
      216: e => {
        e.exports = function (e) {
          return {
            aliases: ['pycon'],
            contains: [
              {
                className: 'meta',
                starts: { end: / |$/, starts: { end: '$', subLanguage: 'python' } },
                variants: [{ begin: /^>>>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }]
              }
            ]
          }
        }
      },
      566: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = /[\p{XID_Start}_]\p{XID_Continue}*/u,
            r = {
              $pattern: /[A-Za-z]\w+|__\w+__/,
              keyword: [
                'and',
                'as',
                'assert',
                'async',
                'await',
                'break',
                'class',
                'continue',
                'def',
                'del',
                'elif',
                'else',
                'except',
                'finally',
                'for',
                'from',
                'global',
                'if',
                'import',
                'in',
                'is',
                'lambda',
                'nonlocal|10',
                'not',
                'or',
                'pass',
                'raise',
                'return',
                'try',
                'while',
                'with',
                'yield'
              ],
              built_in: [
                '__import__',
                'abs',
                'all',
                'any',
                'ascii',
                'bin',
                'bool',
                'breakpoint',
                'bytearray',
                'bytes',
                'callable',
                'chr',
                'classmethod',
                'compile',
                'complex',
                'delattr',
                'dict',
                'dir',
                'divmod',
                'enumerate',
                'eval',
                'exec',
                'filter',
                'float',
                'format',
                'frozenset',
                'getattr',
                'globals',
                'hasattr',
                'hash',
                'help',
                'hex',
                'id',
                'input',
                'int',
                'isinstance',
                'issubclass',
                'iter',
                'len',
                'list',
                'locals',
                'map',
                'max',
                'memoryview',
                'min',
                'next',
                'object',
                'oct',
                'open',
                'ord',
                'pow',
                'print',
                'property',
                'range',
                'repr',
                'reversed',
                'round',
                'set',
                'setattr',
                'slice',
                'sorted',
                'staticmethod',
                'str',
                'sum',
                'super',
                'tuple',
                'type',
                'vars',
                'zip'
              ],
              literal: ['__debug__', 'Ellipsis', 'False', 'None', 'NotImplemented', 'True'],
              type: [
                'Any',
                'Callable',
                'Coroutine',
                'Dict',
                'List',
                'Literal',
                'Generic',
                'Optional',
                'Sequence',
                'Set',
                'Tuple',
                'Type',
                'Union'
              ]
            },
            a = { className: 'meta', begin: /^(>>>|\.\.\.) / },
            i = { className: 'subst', begin: /\{/, end: /\}/, keywords: r, illegal: /#/ },
            o = { begin: /\{\{/, relevance: 0 },
            s = {
              className: 'string',
              contains: [e.BACKSLASH_ESCAPE],
              variants: [
                {
                  begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                  end: /'''/,
                  contains: [e.BACKSLASH_ESCAPE, a],
                  relevance: 10
                },
                {
                  begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                  end: /"""/,
                  contains: [e.BACKSLASH_ESCAPE, a],
                  relevance: 10
                },
                { begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/, contains: [e.BACKSLASH_ESCAPE, a, o, i] },
                { begin: /([fF][rR]|[rR][fF]|[fF])"""/, end: /"""/, contains: [e.BACKSLASH_ESCAPE, a, o, i] },
                { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
                { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
                { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
                { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
                { begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [e.BACKSLASH_ESCAPE, o, i] },
                { begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, o, i] },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE
              ]
            },
            l = '[0-9](_?[0-9])*',
            c = `(\\b(${l}))?\\.(${l})|\\b(${l})\\.`,
            d = {
              className: 'number',
              relevance: 0,
              variants: [
                { begin: `(\\b(${l})|(${c}))[eE][+-]?(${l})[jJ]?\\b` },
                { begin: `(${c})[jJ]?` },
                { begin: '\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b' },
                { begin: '\\b0[bB](_?[01])+[lL]?\\b' },
                { begin: '\\b0[oO](_?[0-7])+[lL]?\\b' },
                { begin: '\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b' },
                { begin: `\\b(${l})[jJ]\\b` }
              ]
            },
            u = {
              className: 'comment',
              begin: n.lookahead(/# type:/),
              end: /$/,
              keywords: r,
              contains: [{ begin: /# type:/ }, { begin: /#/, end: /\b\B/, endsWithParent: !0 }]
            },
            p = {
              className: 'params',
              variants: [
                { className: '', begin: /\(\s*\)/, skip: !0 },
                {
                  begin: /\(/,
                  end: /\)/,
                  excludeBegin: !0,
                  excludeEnd: !0,
                  keywords: r,
                  contains: ['self', a, d, s, e.HASH_COMMENT_MODE]
                }
              ]
            }
          return (
            (i.contains = [s, d, a]),
            {
              name: 'Python',
              aliases: ['py', 'gyp', 'ipython'],
              unicodeRegex: !0,
              keywords: r,
              illegal: /(<\/|->|\?)|=>/,
              contains: [
                a,
                d,
                { begin: /\bself\b/ },
                { beginKeywords: 'if', relevance: 0 },
                s,
                u,
                e.HASH_COMMENT_MODE,
                { match: [/def/, /\s+/, t], scope: { 1: 'keyword', 3: 'title.function' }, contains: [p] },
                {
                  variants: [
                    { match: [/class/, /\s+/, t, /\s*/, /\(\s*/, t, /\s*\)/] },
                    { match: [/class/, /\s+/, t] }
                  ],
                  scope: { 1: 'keyword', 3: 'title.class', 6: 'title.class.inherited' }
                },
                { className: 'meta', begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [d, p, s] }
              ]
            }
          )
        }
      },
      764: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
            r = n.either(
              /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
              /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
              /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
            ),
            a = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
            i = n.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/)
          return {
            name: 'R',
            keywords: {
              $pattern: t,
              keyword: 'function if in break next repeat else for while',
              literal: 'NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10',
              built_in:
                'LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm'
            },
            contains: [
              e.COMMENT(/#'/, /$/, {
                contains: [
                  {
                    scope: 'doctag',
                    match: /@examples/,
                    starts: { end: n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)), endsParent: !0 }
                  },
                  {
                    scope: 'doctag',
                    begin: '@param',
                    end: /$/,
                    contains: [
                      { scope: 'variable', variants: [{ match: t }, { match: /`(?:\\.|[^`\\])+`/ }], endsParent: !0 }
                    ]
                  },
                  { scope: 'doctag', match: /@[a-zA-Z]+/ },
                  { scope: 'keyword', match: /\\[a-zA-Z]+/ }
                ]
              }),
              e.HASH_COMMENT_MODE,
              {
                scope: 'string',
                contains: [e.BACKSLASH_ESCAPE],
                variants: [
                  e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
                  e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
                  e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
                  e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
                  e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
                  e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
                  { begin: '"', end: '"', relevance: 0 },
                  { begin: "'", end: "'", relevance: 0 }
                ]
              },
              {
                relevance: 0,
                variants: [
                  { scope: { 1: 'operator', 2: 'number' }, match: [a, r] },
                  { scope: { 1: 'operator', 2: 'number' }, match: [/%[^%]*%/, r] },
                  { scope: { 1: 'punctuation', 2: 'number' }, match: [i, r] },
                  { scope: { 2: 'number' }, match: [/[^a-zA-Z0-9._]|^/, r] }
                ]
              },
              { scope: { 3: 'operator' }, match: [t, /\s+/, /<-/, /\s+/] },
              { scope: 'operator', relevance: 0, variants: [{ match: a }, { match: /%[^%]*%/ }] },
              { scope: 'punctuation', relevance: 0, match: i },
              { begin: '`', end: '`', contains: [{ begin: /\\./ }] }
            ]
          }
        }
      },
      161: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = '([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)',
            r = {
              keyword:
                'and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__',
              built_in: 'proc lambda',
              literal: 'true false nil'
            },
            a = { className: 'doctag', begin: '@[A-Za-z]+' },
            i = { begin: '#<', end: '>' },
            o = [
              e.COMMENT('#', '$', { contains: [a] }),
              e.COMMENT('^=begin', '^=end', { contains: [a], relevance: 10 }),
              e.COMMENT('^__END__', '\\n$')
            ],
            s = { className: 'subst', begin: /#\{/, end: /\}/, keywords: r },
            l = {
              className: 'string',
              contains: [e.BACKSLASH_ESCAPE, s],
              variants: [
                { begin: /'/, end: /'/ },
                { begin: /"/, end: /"/ },
                { begin: /`/, end: /`/ },
                { begin: /%[qQwWx]?\(/, end: /\)/ },
                { begin: /%[qQwWx]?\[/, end: /\]/ },
                { begin: /%[qQwWx]?\{/, end: /\}/ },
                { begin: /%[qQwWx]?</, end: />/ },
                { begin: /%[qQwWx]?\//, end: /\// },
                { begin: /%[qQwWx]?%/, end: /%/ },
                { begin: /%[qQwWx]?-/, end: /-/ },
                { begin: /%[qQwWx]?\|/, end: /\|/ },
                { begin: /\B\?(\\\d{1,3})/ },
                { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
                { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
                { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
                { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
                { begin: /\B\?\\?\S/ },
                {
                  begin: n.concat(/<<[-~]?'?/, n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                  contains: [e.END_SAME_AS_BEGIN({ begin: /(\w+)/, end: /(\w+)/, contains: [e.BACKSLASH_ESCAPE, s] })]
                }
              ]
            },
            c = '[0-9](_?[0-9])*',
            d = {
              className: 'number',
              relevance: 0,
              variants: [
                { begin: `\\b([1-9](_?[0-9])*|0)(\\.(${c}))?([eE][+-]?(${c})|r)?i?\\b` },
                { begin: '\\b0[dD][0-9](_?[0-9])*r?i?\\b' },
                { begin: '\\b0[bB][0-1](_?[0-1])*r?i?\\b' },
                { begin: '\\b0[oO][0-7](_?[0-7])*r?i?\\b' },
                { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b' },
                { begin: '\\b0(_?[0-7])+r?i?\\b' }
              ]
            },
            u = { className: 'params', begin: '\\(', end: '\\)', endsParent: !0, keywords: r },
            p = [
              l,
              {
                className: 'class',
                beginKeywords: 'class module',
                end: '$|;',
                illegal: /=/,
                contains: [
                  e.inherit(e.TITLE_MODE, { begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|!)?' }),
                  { begin: '<\\s*', contains: [{ begin: '(' + e.IDENT_RE + '::)?' + e.IDENT_RE, relevance: 0 }] }
                ].concat(o)
              },
              {
                className: 'function',
                begin: n.concat(/def\s+/, n.lookahead(t + '\\s*(\\(|;|$)')),
                relevance: 0,
                keywords: 'def',
                end: '$|;',
                contains: [e.inherit(e.TITLE_MODE, { begin: t }), u].concat(o)
              },
              { begin: e.IDENT_RE + '::' },
              { className: 'symbol', begin: e.UNDERSCORE_IDENT_RE + '(!|\\?)?:', relevance: 0 },
              { className: 'symbol', begin: ':(?!\\s)', contains: [l, { begin: t }], relevance: 0 },
              d,
              { className: 'variable', begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])" },
              { className: 'params', begin: /\|/, end: /\|/, relevance: 0, keywords: r },
              {
                begin: '(' + e.RE_STARTERS_RE + '|unless)\\s*',
                keywords: 'unless',
                contains: [
                  {
                    className: 'regexp',
                    contains: [e.BACKSLASH_ESCAPE, s],
                    illegal: /\n/,
                    variants: [
                      { begin: '/', end: '/[a-z]*' },
                      { begin: /%r\{/, end: /\}[a-z]*/ },
                      { begin: '%r\\(', end: '\\)[a-z]*' },
                      { begin: '%r!', end: '![a-z]*' },
                      { begin: '%r\\[', end: '\\][a-z]*' }
                    ]
                  }
                ].concat(i, o),
                relevance: 0
              }
            ].concat(i, o)
          ;(s.contains = p), (u.contains = p)
          const g = [
            { begin: /^\s*=>/, starts: { end: '$', contains: p } },
            {
              className: 'meta',
              begin: '^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])',
              starts: { end: '$', contains: p }
            }
          ]
          return (
            o.unshift(i),
            {
              name: 'Ruby',
              aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
              keywords: r,
              illegal: /\/\*/,
              contains: [e.SHEBANG({ binary: 'ruby' })].concat(g).concat(o).concat(p)
            }
          )
        }
      },
      358: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = {
              className: 'title.function.invoke',
              relevance: 0,
              begin: n.concat(/\b/, /(?!let\b)/, e.IDENT_RE, n.lookahead(/\s*\(/))
            },
            r = '([ui](8|16|32|64|128|size)|f(32|64))?',
            a = [
              'drop ',
              'Copy',
              'Send',
              'Sized',
              'Sync',
              'Drop',
              'Fn',
              'FnMut',
              'FnOnce',
              'ToOwned',
              'Clone',
              'Debug',
              'PartialEq',
              'PartialOrd',
              'Eq',
              'Ord',
              'AsRef',
              'AsMut',
              'Into',
              'From',
              'Default',
              'Iterator',
              'Extend',
              'IntoIterator',
              'DoubleEndedIterator',
              'ExactSizeIterator',
              'SliceConcatExt',
              'ToString',
              'assert!',
              'assert_eq!',
              'bitflags!',
              'bytes!',
              'cfg!',
              'col!',
              'concat!',
              'concat_idents!',
              'debug_assert!',
              'debug_assert_eq!',
              'env!',
              'panic!',
              'file!',
              'format!',
              'format_args!',
              'include_bin!',
              'include_str!',
              'line!',
              'local_data_key!',
              'module_path!',
              'option_env!',
              'print!',
              'println!',
              'select!',
              'stringify!',
              'try!',
              'unimplemented!',
              'unreachable!',
              'vec!',
              'write!',
              'writeln!',
              'macro_rules!',
              'assert_ne!',
              'debug_assert_ne!'
            ]
          return {
            name: 'Rust',
            aliases: ['rs'],
            keywords: {
              $pattern: e.IDENT_RE + '!?',
              type: [
                'i8',
                'i16',
                'i32',
                'i64',
                'i128',
                'isize',
                'u8',
                'u16',
                'u32',
                'u64',
                'u128',
                'usize',
                'f32',
                'f64',
                'str',
                'char',
                'bool',
                'Box',
                'Option',
                'Result',
                'String',
                'Vec'
              ],
              keyword: [
                'abstract',
                'as',
                'async',
                'await',
                'become',
                'box',
                'break',
                'const',
                'continue',
                'crate',
                'do',
                'dyn',
                'else',
                'enum',
                'extern',
                'false',
                'final',
                'fn',
                'for',
                'if',
                'impl',
                'in',
                'let',
                'loop',
                'macro',
                'match',
                'mod',
                'move',
                'mut',
                'override',
                'priv',
                'pub',
                'ref',
                'return',
                'self',
                'Self',
                'static',
                'struct',
                'super',
                'trait',
                'true',
                'try',
                'type',
                'typeof',
                'unsafe',
                'unsized',
                'use',
                'virtual',
                'where',
                'while',
                'yield'
              ],
              literal: ['true', 'false', 'Some', 'None', 'Ok', 'Err'],
              built_in: a
            },
            illegal: '</',
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
              e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
              {
                className: 'string',
                variants: [{ begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ }, { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }]
              },
              { className: 'symbol', begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
              {
                className: 'number',
                variants: [
                  { begin: '\\b0b([01_]+)' + r },
                  { begin: '\\b0o([0-7_]+)' + r },
                  { begin: '\\b0x([A-Fa-f0-9_]+)' + r },
                  { begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' + r }
                ],
                relevance: 0
              },
              { begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE], className: { 1: 'keyword', 3: 'title.function' } },
              {
                className: 'meta',
                begin: '#!?\\[',
                end: '\\]',
                contains: [{ className: 'string', begin: /"/, end: /"/ }]
              },
              {
                begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE],
                className: { 1: 'keyword', 3: 'keyword', 4: 'variable' }
              },
              {
                begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/],
                className: { 1: 'keyword', 3: 'variable', 5: 'keyword' }
              },
              { begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE], className: { 1: 'keyword', 3: 'title.class' } },
              {
                begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, e.UNDERSCORE_IDENT_RE],
                className: { 1: 'keyword', 3: 'title.class' }
              },
              { begin: e.IDENT_RE + '::', keywords: { keyword: 'Self', built_in: a } },
              { className: 'punctuation', begin: '->' },
              t
            ]
          }
        }
      },
      630: e => {
        const n = [
            'a',
            'abbr',
            'address',
            'article',
            'aside',
            'audio',
            'b',
            'blockquote',
            'body',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'dd',
            'del',
            'details',
            'dfn',
            'div',
            'dl',
            'dt',
            'em',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'header',
            'hgroup',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'legend',
            'li',
            'main',
            'mark',
            'menu',
            'nav',
            'object',
            'ol',
            'p',
            'q',
            'quote',
            'samp',
            'section',
            'span',
            'strong',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'tr',
            'ul',
            'var',
            'video'
          ],
          t = [
            'any-hover',
            'any-pointer',
            'aspect-ratio',
            'color',
            'color-gamut',
            'color-index',
            'device-aspect-ratio',
            'device-height',
            'device-width',
            'display-mode',
            'forced-colors',
            'grid',
            'height',
            'hover',
            'inverted-colors',
            'monochrome',
            'orientation',
            'overflow-block',
            'overflow-inline',
            'pointer',
            'prefers-color-scheme',
            'prefers-contrast',
            'prefers-reduced-motion',
            'prefers-reduced-transparency',
            'resolution',
            'scan',
            'scripting',
            'update',
            'width',
            'min-width',
            'max-width',
            'min-height',
            'max-height'
          ],
          r = [
            'active',
            'any-link',
            'blank',
            'checked',
            'current',
            'default',
            'defined',
            'dir',
            'disabled',
            'drop',
            'empty',
            'enabled',
            'first',
            'first-child',
            'first-of-type',
            'fullscreen',
            'future',
            'focus',
            'focus-visible',
            'focus-within',
            'has',
            'host',
            'host-context',
            'hover',
            'indeterminate',
            'in-range',
            'invalid',
            'is',
            'lang',
            'last-child',
            'last-of-type',
            'left',
            'link',
            'local-link',
            'not',
            'nth-child',
            'nth-col',
            'nth-last-child',
            'nth-last-col',
            'nth-last-of-type',
            'nth-of-type',
            'only-child',
            'only-of-type',
            'optional',
            'out-of-range',
            'past',
            'placeholder-shown',
            'read-only',
            'read-write',
            'required',
            'right',
            'root',
            'scope',
            'target',
            'target-within',
            'user-invalid',
            'valid',
            'visited',
            'where'
          ],
          a = [
            'after',
            'backdrop',
            'before',
            'cue',
            'cue-region',
            'first-letter',
            'first-line',
            'grammar-error',
            'marker',
            'part',
            'placeholder',
            'selection',
            'slotted',
            'spelling-error'
          ],
          i = [
            'align-content',
            'align-items',
            'align-self',
            'all',
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'backface-visibility',
            'background',
            'background-attachment',
            'background-clip',
            'background-color',
            'background-image',
            'background-origin',
            'background-position',
            'background-repeat',
            'background-size',
            'border',
            'border-bottom',
            'border-bottom-color',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-bottom-style',
            'border-bottom-width',
            'border-collapse',
            'border-color',
            'border-image',
            'border-image-outset',
            'border-image-repeat',
            'border-image-slice',
            'border-image-source',
            'border-image-width',
            'border-left',
            'border-left-color',
            'border-left-style',
            'border-left-width',
            'border-radius',
            'border-right',
            'border-right-color',
            'border-right-style',
            'border-right-width',
            'border-spacing',
            'border-style',
            'border-top',
            'border-top-color',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-top-style',
            'border-top-width',
            'border-width',
            'bottom',
            'box-decoration-break',
            'box-shadow',
            'box-sizing',
            'break-after',
            'break-before',
            'break-inside',
            'caption-side',
            'caret-color',
            'clear',
            'clip',
            'clip-path',
            'clip-rule',
            'color',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',
            'columns',
            'contain',
            'content',
            'content-visibility',
            'counter-increment',
            'counter-reset',
            'cue',
            'cue-after',
            'cue-before',
            'cursor',
            'direction',
            'display',
            'empty-cells',
            'filter',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'float',
            'flow',
            'font',
            'font-display',
            'font-family',
            'font-feature-settings',
            'font-kerning',
            'font-language-override',
            'font-size',
            'font-size-adjust',
            'font-smoothing',
            'font-stretch',
            'font-style',
            'font-synthesis',
            'font-variant',
            'font-variant-caps',
            'font-variant-east-asian',
            'font-variant-ligatures',
            'font-variant-numeric',
            'font-variant-position',
            'font-variation-settings',
            'font-weight',
            'gap',
            'glyph-orientation-vertical',
            'grid',
            'grid-area',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-column',
            'grid-column-end',
            'grid-column-start',
            'grid-gap',
            'grid-row',
            'grid-row-end',
            'grid-row-start',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows',
            'hanging-punctuation',
            'height',
            'hyphens',
            'icon',
            'image-orientation',
            'image-rendering',
            'image-resolution',
            'ime-mode',
            'isolation',
            'justify-content',
            'left',
            'letter-spacing',
            'line-break',
            'line-height',
            'list-style',
            'list-style-image',
            'list-style-position',
            'list-style-type',
            'margin',
            'margin-bottom',
            'margin-left',
            'margin-right',
            'margin-top',
            'marks',
            'mask',
            'mask-border',
            'mask-border-mode',
            'mask-border-outset',
            'mask-border-repeat',
            'mask-border-slice',
            'mask-border-source',
            'mask-border-width',
            'mask-clip',
            'mask-composite',
            'mask-image',
            'mask-mode',
            'mask-origin',
            'mask-position',
            'mask-repeat',
            'mask-size',
            'mask-type',
            'max-height',
            'max-width',
            'min-height',
            'min-width',
            'mix-blend-mode',
            'nav-down',
            'nav-index',
            'nav-left',
            'nav-right',
            'nav-up',
            'none',
            'normal',
            'object-fit',
            'object-position',
            'opacity',
            'order',
            'orphans',
            'outline',
            'outline-color',
            'outline-offset',
            'outline-style',
            'outline-width',
            'overflow',
            'overflow-wrap',
            'overflow-x',
            'overflow-y',
            'padding',
            'padding-bottom',
            'padding-left',
            'padding-right',
            'padding-top',
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'pause',
            'pause-after',
            'pause-before',
            'perspective',
            'perspective-origin',
            'pointer-events',
            'position',
            'quotes',
            'resize',
            'rest',
            'rest-after',
            'rest-before',
            'right',
            'row-gap',
            'scroll-margin',
            'scroll-margin-block',
            'scroll-margin-block-end',
            'scroll-margin-block-start',
            'scroll-margin-bottom',
            'scroll-margin-inline',
            'scroll-margin-inline-end',
            'scroll-margin-inline-start',
            'scroll-margin-left',
            'scroll-margin-right',
            'scroll-margin-top',
            'scroll-padding',
            'scroll-padding-block',
            'scroll-padding-block-end',
            'scroll-padding-block-start',
            'scroll-padding-bottom',
            'scroll-padding-inline',
            'scroll-padding-inline-end',
            'scroll-padding-inline-start',
            'scroll-padding-left',
            'scroll-padding-right',
            'scroll-padding-top',
            'scroll-snap-align',
            'scroll-snap-stop',
            'scroll-snap-type',
            'shape-image-threshold',
            'shape-margin',
            'shape-outside',
            'speak',
            'speak-as',
            'src',
            'tab-size',
            'table-layout',
            'text-align',
            'text-align-all',
            'text-align-last',
            'text-combine-upright',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-position',
            'text-emphasis-style',
            'text-indent',
            'text-justify',
            'text-orientation',
            'text-overflow',
            'text-rendering',
            'text-shadow',
            'text-transform',
            'text-underline-position',
            'top',
            'transform',
            'transform-box',
            'transform-origin',
            'transform-style',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'unicode-bidi',
            'vertical-align',
            'visibility',
            'voice-balance',
            'voice-duration',
            'voice-family',
            'voice-pitch',
            'voice-range',
            'voice-rate',
            'voice-stress',
            'voice-volume',
            'white-space',
            'widows',
            'width',
            'will-change',
            'word-break',
            'word-spacing',
            'word-wrap',
            'writing-mode',
            'z-index'
          ].reverse()
        e.exports = function (e) {
          const o = (e => ({
              IMPORTANT: { scope: 'meta', begin: '!important' },
              BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
              HEXCOLOR: { scope: 'number', begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ },
              FUNCTION_DISPATCH: { className: 'built_in', begin: /[\w-]+(?=\()/ },
              ATTRIBUTE_SELECTOR_MODE: {
                scope: 'selector-attr',
                begin: /\[/,
                end: /\]/,
                illegal: '$',
                contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
              },
              CSS_NUMBER_MODE: {
                scope: 'number',
                begin:
                  e.NUMBER_RE +
                  '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
                relevance: 0
              },
              CSS_VARIABLE: { className: 'attr', begin: /--[A-Za-z][A-Za-z0-9_-]*/ }
            }))(e),
            s = a,
            l = r,
            c = '@[a-z-]+',
            d = { className: 'variable', begin: '(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b' }
          return {
            name: 'SCSS',
            case_insensitive: !0,
            illegal: "[=/|']",
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              o.CSS_NUMBER_MODE,
              { className: 'selector-id', begin: '#[A-Za-z0-9_-]+', relevance: 0 },
              { className: 'selector-class', begin: '\\.[A-Za-z0-9_-]+', relevance: 0 },
              o.ATTRIBUTE_SELECTOR_MODE,
              { className: 'selector-tag', begin: '\\b(' + n.join('|') + ')\\b', relevance: 0 },
              { className: 'selector-pseudo', begin: ':(' + l.join('|') + ')' },
              { className: 'selector-pseudo', begin: ':(:)?(' + s.join('|') + ')' },
              d,
              { begin: /\(/, end: /\)/, contains: [o.CSS_NUMBER_MODE] },
              o.CSS_VARIABLE,
              { className: 'attribute', begin: '\\b(' + i.join('|') + ')\\b' },
              {
                begin:
                  '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
              },
              {
                begin: /:/,
                end: /[;}{]/,
                contains: [
                  o.BLOCK_COMMENT,
                  d,
                  o.HEXCOLOR,
                  o.CSS_NUMBER_MODE,
                  e.QUOTE_STRING_MODE,
                  e.APOS_STRING_MODE,
                  o.IMPORTANT
                ]
              },
              { begin: '@(page|font-face)', keywords: { $pattern: c, keyword: '@page @font-face' } },
              {
                begin: '@',
                end: '[{;]',
                returnBegin: !0,
                keywords: { $pattern: /[a-z-]+/, keyword: 'and or not only', attribute: t.join(' ') },
                contains: [
                  { begin: c, className: 'keyword' },
                  { begin: /[a-z-]+(?=:)/, className: 'attribute' },
                  d,
                  e.QUOTE_STRING_MODE,
                  e.APOS_STRING_MODE,
                  o.HEXCOLOR,
                  o.CSS_NUMBER_MODE
                ]
              },
              o.FUNCTION_DISPATCH
            ]
          }
        }
      },
      499: e => {
        e.exports = function (e) {
          return {
            name: 'Shell Session',
            aliases: ['console', 'shellsession'],
            contains: [
              {
                className: 'meta',
                begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
                starts: { end: /[^\\](?=\s*$)/, subLanguage: 'bash' }
              }
            ]
          }
        }
      },
      662: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = e.COMMENT('--', '$'),
            r = ['true', 'false', 'unknown'],
            a = [
              'bigint',
              'binary',
              'blob',
              'boolean',
              'char',
              'character',
              'clob',
              'date',
              'dec',
              'decfloat',
              'decimal',
              'float',
              'int',
              'integer',
              'interval',
              'nchar',
              'nclob',
              'national',
              'numeric',
              'real',
              'row',
              'smallint',
              'time',
              'timestamp',
              'varchar',
              'varying',
              'varbinary'
            ],
            i = [
              'abs',
              'acos',
              'array_agg',
              'asin',
              'atan',
              'avg',
              'cast',
              'ceil',
              'ceiling',
              'coalesce',
              'corr',
              'cos',
              'cosh',
              'count',
              'covar_pop',
              'covar_samp',
              'cume_dist',
              'dense_rank',
              'deref',
              'element',
              'exp',
              'extract',
              'first_value',
              'floor',
              'json_array',
              'json_arrayagg',
              'json_exists',
              'json_object',
              'json_objectagg',
              'json_query',
              'json_table',
              'json_table_primitive',
              'json_value',
              'lag',
              'last_value',
              'lead',
              'listagg',
              'ln',
              'log',
              'log10',
              'lower',
              'max',
              'min',
              'mod',
              'nth_value',
              'ntile',
              'nullif',
              'percent_rank',
              'percentile_cont',
              'percentile_disc',
              'position',
              'position_regex',
              'power',
              'rank',
              'regr_avgx',
              'regr_avgy',
              'regr_count',
              'regr_intercept',
              'regr_r2',
              'regr_slope',
              'regr_sxx',
              'regr_sxy',
              'regr_syy',
              'row_number',
              'sin',
              'sinh',
              'sqrt',
              'stddev_pop',
              'stddev_samp',
              'substring',
              'substring_regex',
              'sum',
              'tan',
              'tanh',
              'translate',
              'translate_regex',
              'treat',
              'trim',
              'trim_array',
              'unnest',
              'upper',
              'value_of',
              'var_pop',
              'var_samp',
              'width_bucket'
            ],
            o = [
              'create table',
              'insert into',
              'primary key',
              'foreign key',
              'not null',
              'alter table',
              'add constraint',
              'grouping sets',
              'on overflow',
              'character set',
              'respect nulls',
              'ignore nulls',
              'nulls first',
              'nulls last',
              'depth first',
              'breadth first'
            ],
            s = i,
            l = [
              'abs',
              'acos',
              'all',
              'allocate',
              'alter',
              'and',
              'any',
              'are',
              'array',
              'array_agg',
              'array_max_cardinality',
              'as',
              'asensitive',
              'asin',
              'asymmetric',
              'at',
              'atan',
              'atomic',
              'authorization',
              'avg',
              'begin',
              'begin_frame',
              'begin_partition',
              'between',
              'bigint',
              'binary',
              'blob',
              'boolean',
              'both',
              'by',
              'call',
              'called',
              'cardinality',
              'cascaded',
              'case',
              'cast',
              'ceil',
              'ceiling',
              'char',
              'char_length',
              'character',
              'character_length',
              'check',
              'classifier',
              'clob',
              'close',
              'coalesce',
              'collate',
              'collect',
              'column',
              'commit',
              'condition',
              'connect',
              'constraint',
              'contains',
              'convert',
              'copy',
              'corr',
              'corresponding',
              'cos',
              'cosh',
              'count',
              'covar_pop',
              'covar_samp',
              'create',
              'cross',
              'cube',
              'cume_dist',
              'current',
              'current_catalog',
              'current_date',
              'current_default_transform_group',
              'current_path',
              'current_role',
              'current_row',
              'current_schema',
              'current_time',
              'current_timestamp',
              'current_path',
              'current_role',
              'current_transform_group_for_type',
              'current_user',
              'cursor',
              'cycle',
              'date',
              'day',
              'deallocate',
              'dec',
              'decimal',
              'decfloat',
              'declare',
              'default',
              'define',
              'delete',
              'dense_rank',
              'deref',
              'describe',
              'deterministic',
              'disconnect',
              'distinct',
              'double',
              'drop',
              'dynamic',
              'each',
              'element',
              'else',
              'empty',
              'end',
              'end_frame',
              'end_partition',
              'end-exec',
              'equals',
              'escape',
              'every',
              'except',
              'exec',
              'execute',
              'exists',
              'exp',
              'external',
              'extract',
              'false',
              'fetch',
              'filter',
              'first_value',
              'float',
              'floor',
              'for',
              'foreign',
              'frame_row',
              'free',
              'from',
              'full',
              'function',
              'fusion',
              'get',
              'global',
              'grant',
              'group',
              'grouping',
              'groups',
              'having',
              'hold',
              'hour',
              'identity',
              'in',
              'indicator',
              'initial',
              'inner',
              'inout',
              'insensitive',
              'insert',
              'int',
              'integer',
              'intersect',
              'intersection',
              'interval',
              'into',
              'is',
              'join',
              'json_array',
              'json_arrayagg',
              'json_exists',
              'json_object',
              'json_objectagg',
              'json_query',
              'json_table',
              'json_table_primitive',
              'json_value',
              'lag',
              'language',
              'large',
              'last_value',
              'lateral',
              'lead',
              'leading',
              'left',
              'like',
              'like_regex',
              'listagg',
              'ln',
              'local',
              'localtime',
              'localtimestamp',
              'log',
              'log10',
              'lower',
              'match',
              'match_number',
              'match_recognize',
              'matches',
              'max',
              'member',
              'merge',
              'method',
              'min',
              'minute',
              'mod',
              'modifies',
              'module',
              'month',
              'multiset',
              'national',
              'natural',
              'nchar',
              'nclob',
              'new',
              'no',
              'none',
              'normalize',
              'not',
              'nth_value',
              'ntile',
              'null',
              'nullif',
              'numeric',
              'octet_length',
              'occurrences_regex',
              'of',
              'offset',
              'old',
              'omit',
              'on',
              'one',
              'only',
              'open',
              'or',
              'order',
              'out',
              'outer',
              'over',
              'overlaps',
              'overlay',
              'parameter',
              'partition',
              'pattern',
              'per',
              'percent',
              'percent_rank',
              'percentile_cont',
              'percentile_disc',
              'period',
              'portion',
              'position',
              'position_regex',
              'power',
              'precedes',
              'precision',
              'prepare',
              'primary',
              'procedure',
              'ptf',
              'range',
              'rank',
              'reads',
              'real',
              'recursive',
              'ref',
              'references',
              'referencing',
              'regr_avgx',
              'regr_avgy',
              'regr_count',
              'regr_intercept',
              'regr_r2',
              'regr_slope',
              'regr_sxx',
              'regr_sxy',
              'regr_syy',
              'release',
              'result',
              'return',
              'returns',
              'revoke',
              'right',
              'rollback',
              'rollup',
              'row',
              'row_number',
              'rows',
              'running',
              'savepoint',
              'scope',
              'scroll',
              'search',
              'second',
              'seek',
              'select',
              'sensitive',
              'session_user',
              'set',
              'show',
              'similar',
              'sin',
              'sinh',
              'skip',
              'smallint',
              'some',
              'specific',
              'specifictype',
              'sql',
              'sqlexception',
              'sqlstate',
              'sqlwarning',
              'sqrt',
              'start',
              'static',
              'stddev_pop',
              'stddev_samp',
              'submultiset',
              'subset',
              'substring',
              'substring_regex',
              'succeeds',
              'sum',
              'symmetric',
              'system',
              'system_time',
              'system_user',
              'table',
              'tablesample',
              'tan',
              'tanh',
              'then',
              'time',
              'timestamp',
              'timezone_hour',
              'timezone_minute',
              'to',
              'trailing',
              'translate',
              'translate_regex',
              'translation',
              'treat',
              'trigger',
              'trim',
              'trim_array',
              'true',
              'truncate',
              'uescape',
              'union',
              'unique',
              'unknown',
              'unnest',
              'update',
              'upper',
              'user',
              'using',
              'value',
              'values',
              'value_of',
              'var_pop',
              'var_samp',
              'varbinary',
              'varchar',
              'varying',
              'versioning',
              'when',
              'whenever',
              'where',
              'width_bucket',
              'window',
              'with',
              'within',
              'without',
              'year',
              'add',
              'asc',
              'collation',
              'desc',
              'final',
              'first',
              'last',
              'view'
            ].filter(e => !i.includes(e)),
            c = { begin: n.concat(/\b/, n.either(...s), /\s*\(/), relevance: 0, keywords: { built_in: s } }
          return {
            name: 'SQL',
            case_insensitive: !0,
            illegal: /[{}]|<\//,
            keywords: {
              $pattern: /\b[\w\.]+/,
              keyword: (function (e, { exceptions: n, when: t } = {}) {
                const r = t
                return (n = n || []), e.map(e => (e.match(/\|\d+$/) || n.includes(e) ? e : r(e) ? `${e}|0` : e))
              })(l, { when: e => e.length < 3 }),
              literal: r,
              type: a,
              built_in: [
                'current_catalog',
                'current_date',
                'current_default_transform_group',
                'current_path',
                'current_role',
                'current_schema',
                'current_transform_group_for_type',
                'current_user',
                'session_user',
                'system_time',
                'system_user',
                'current_time',
                'localtime',
                'current_timestamp',
                'localtimestamp'
              ]
            },
            contains: [
              {
                begin: n.either(...o),
                relevance: 0,
                keywords: { $pattern: /[\w\.]+/, keyword: l.concat(o), literal: r, type: a }
              },
              {
                className: 'type',
                begin: n.either('double precision', 'large object', 'with timezone', 'without timezone')
              },
              c,
              { className: 'variable', begin: /@[a-z0-9]+/ },
              { className: 'string', variants: [{ begin: /'/, end: /'/, contains: [{ begin: /''/ }] }] },
              { begin: /"/, end: /"/, contains: [{ begin: /""/ }] },
              e.C_NUMBER_MODE,
              e.C_BLOCK_COMMENT_MODE,
              t,
              { className: 'operator', begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/, relevance: 0 }
            ]
          }
        }
      },
      990: e => {
        function n(e) {
          return e ? ('string' == typeof e ? e : e.source) : null
        }
        function t(e) {
          return r('(?=', e, ')')
        }
        function r(...e) {
          return e.map(e => n(e)).join('')
        }
        function a(...e) {
          const t = (function (e) {
            const n = e[e.length - 1]
            return 'object' == typeof n && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {}
          })(e)
          return '(' + (t.capture ? '' : '?:') + e.map(e => n(e)).join('|') + ')'
        }
        const i = e => r(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
          o = ['Protocol', 'Type'].map(i),
          s = ['init', 'self'].map(i),
          l = ['Any', 'Self'],
          c = [
            'actor',
            'associatedtype',
            'async',
            'await',
            /as\?/,
            /as!/,
            'as',
            'break',
            'case',
            'catch',
            'class',
            'continue',
            'convenience',
            'default',
            'defer',
            'deinit',
            'didSet',
            'do',
            'dynamic',
            'else',
            'enum',
            'extension',
            'fallthrough',
            /fileprivate\(set\)/,
            'fileprivate',
            'final',
            'for',
            'func',
            'get',
            'guard',
            'if',
            'import',
            'indirect',
            'infix',
            /init\?/,
            /init!/,
            'inout',
            /internal\(set\)/,
            'internal',
            'in',
            'is',
            'isolated',
            'nonisolated',
            'lazy',
            'let',
            'mutating',
            'nonmutating',
            /open\(set\)/,
            'open',
            'operator',
            'optional',
            'override',
            'postfix',
            'precedencegroup',
            'prefix',
            /private\(set\)/,
            'private',
            'protocol',
            /public\(set\)/,
            'public',
            'repeat',
            'required',
            'rethrows',
            'return',
            'set',
            'some',
            'static',
            'struct',
            'subscript',
            'super',
            'switch',
            'throws',
            'throw',
            /try\?/,
            /try!/,
            'try',
            'typealias',
            /unowned\(safe\)/,
            /unowned\(unsafe\)/,
            'unowned',
            'var',
            'weak',
            'where',
            'while',
            'willSet'
          ],
          d = ['false', 'nil', 'true'],
          u = ['assignment', 'associativity', 'higherThan', 'left', 'lowerThan', 'none', 'right'],
          p = [
            '#colorLiteral',
            '#column',
            '#dsohandle',
            '#else',
            '#elseif',
            '#endif',
            '#error',
            '#file',
            '#fileID',
            '#fileLiteral',
            '#filePath',
            '#function',
            '#if',
            '#imageLiteral',
            '#keyPath',
            '#line',
            '#selector',
            '#sourceLocation',
            '#warn_unqualified_access',
            '#warning'
          ],
          g = [
            'abs',
            'all',
            'any',
            'assert',
            'assertionFailure',
            'debugPrint',
            'dump',
            'fatalError',
            'getVaList',
            'isKnownUniquelyReferenced',
            'max',
            'min',
            'numericCast',
            'pointwiseMax',
            'pointwiseMin',
            'precondition',
            'preconditionFailure',
            'print',
            'readLine',
            'repeatElement',
            'sequence',
            'stride',
            'swap',
            'swift_unboxFromSwiftValueWithType',
            'transcode',
            'type',
            'unsafeBitCast',
            'unsafeDowncast',
            'withExtendedLifetime',
            'withUnsafeMutablePointer',
            'withUnsafePointer',
            'withVaList',
            'withoutActuallyEscaping',
            'zip'
          ],
          f = a(
            /[/=\-+!*%<>&|^~?]/,
            /[\u00A1-\u00A7]/,
            /[\u00A9\u00AB]/,
            /[\u00AC\u00AE]/,
            /[\u00B0\u00B1]/,
            /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
            /[\u2016-\u2017]/,
            /[\u2020-\u2027]/,
            /[\u2030-\u203E]/,
            /[\u2041-\u2053]/,
            /[\u2055-\u205E]/,
            /[\u2190-\u23FF]/,
            /[\u2500-\u2775]/,
            /[\u2794-\u2BFF]/,
            /[\u2E00-\u2E7F]/,
            /[\u3001-\u3003]/,
            /[\u3008-\u3020]/,
            /[\u3030]/
          ),
          m = a(f, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
          b = r(f, m, '*'),
          h = a(
            /[a-zA-Z_]/,
            /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
            /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
            /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
            /[\u1E00-\u1FFF]/,
            /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
            /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
            /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
            /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
            /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
            /[\uFE47-\uFEFE\uFF00-\uFFFD]/
          ),
          _ = a(h, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
          v = r(h, _, '*'),
          y = r(/[A-Z]/, _, '*'),
          E = [
            'autoclosure',
            r(/convention\(/, a('swift', 'block', 'c'), /\)/),
            'discardableResult',
            'dynamicCallable',
            'dynamicMemberLookup',
            'escaping',
            'frozen',
            'GKInspectable',
            'IBAction',
            'IBDesignable',
            'IBInspectable',
            'IBOutlet',
            'IBSegueAction',
            'inlinable',
            'main',
            'nonobjc',
            'NSApplicationMain',
            'NSCopying',
            'NSManaged',
            r(/objc\(/, v, /\)/),
            'objc',
            'objcMembers',
            'propertyWrapper',
            'requires_stored_property_inits',
            'resultBuilder',
            'testable',
            'UIApplicationMain',
            'unknown',
            'usableFromInline'
          ],
          w = [
            'iOS',
            'iOSApplicationExtension',
            'macOS',
            'macOSApplicationExtension',
            'macCatalyst',
            'macCatalystApplicationExtension',
            'watchOS',
            'watchOSApplicationExtension',
            'tvOS',
            'tvOSApplicationExtension',
            'swift'
          ]
        e.exports = function (e) {
          const n = { match: /\s+/, relevance: 0 },
            f = e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
            h = [e.C_LINE_COMMENT_MODE, f],
            N = { match: [/\./, a(...o, ...s)], className: { 2: 'keyword' } },
            x = { match: r(/\./, a(...c)), relevance: 0 },
            k = c.filter(e => 'string' == typeof e).concat(['_|0']),
            O = {
              variants: [
                {
                  className: 'keyword',
                  match: a(
                    ...c
                      .filter(e => 'string' != typeof e)
                      .concat(l)
                      .map(i),
                    ...s
                  )
                }
              ]
            },
            S = { $pattern: a(/\b\w+/, /#\w+/), keyword: k.concat(p), literal: d },
            C = [N, x, O],
            A = [
              { match: r(/\./, a(...g)), relevance: 0 },
              { className: 'built_in', match: r(/\b/, a(...g), /(?=\()/) }
            ],
            M = { match: /->/, relevance: 0 },
            T = [M, { className: 'operator', relevance: 0, variants: [{ match: b }, { match: `\\.(\\.|${m})+` }] }],
            I = '([0-9a-fA-F]_*)+',
            R = {
              className: 'number',
              relevance: 0,
              variants: [
                { match: '\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b' },
                { match: `\\b0x(${I})(\\.(${I}))?([pP][+-]?(([0-9]_*)+))?\\b` },
                { match: /\b0o([0-7]_*)+\b/ },
                { match: /\b0b([01]_*)+\b/ }
              ]
            },
            D = (e = '') => ({
              className: 'subst',
              variants: [{ match: r(/\\/, e, /[0\\tnr"']/) }, { match: r(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) }]
            }),
            L = (e = '') => ({ className: 'subst', match: r(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/) }),
            B = (e = '') => ({ className: 'subst', label: 'interpol', begin: r(/\\/, e, /\(/), end: /\)/ }),
            $ = (e = '') => ({ begin: r(e, /"""/), end: r(/"""/, e), contains: [D(e), L(e), B(e)] }),
            P = (e = '') => ({ begin: r(e, /"/), end: r(/"/, e), contains: [D(e), B(e)] }),
            F = { className: 'string', variants: [$(), $('#'), $('##'), $('###'), P(), P('#'), P('##'), P('###')] },
            U = { match: r(/`/, v, /`/) },
            j = [U, { className: 'variable', match: /\$\d+/ }, { className: 'variable', match: `\\$${_}+` }],
            z = [
              {
                match: /(@|#)available/,
                className: 'keyword',
                starts: { contains: [{ begin: /\(/, end: /\)/, keywords: w, contains: [...T, R, F] }] }
              },
              { className: 'keyword', match: r(/@/, a(...E)) },
              { className: 'meta', match: r(/@/, v) }
            ],
            H = {
              match: t(/\b[A-Z]/),
              relevance: 0,
              contains: [
                {
                  className: 'type',
                  match: r(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, _, '+')
                },
                { className: 'type', match: y, relevance: 0 },
                { match: /[?!]+/, relevance: 0 },
                { match: /\.\.\./, relevance: 0 },
                { match: r(/\s+&\s+/, t(y)), relevance: 0 }
              ]
            },
            K = { begin: /</, end: />/, keywords: S, contains: [...h, ...C, ...z, M, H] }
          H.contains.push(K)
          const q = {
              begin: /\(/,
              end: /\)/,
              relevance: 0,
              keywords: S,
              contains: [
                'self',
                { match: r(v, /\s*:/), keywords: '_|0', relevance: 0 },
                ...h,
                ...C,
                ...A,
                ...T,
                R,
                F,
                ...j,
                ...z,
                H
              ]
            },
            Z = { begin: /</, end: />/, contains: [...h, H] },
            G = {
              begin: /\(/,
              end: /\)/,
              keywords: S,
              contains: [
                {
                  begin: a(t(r(v, /\s*:/)), t(r(v, /\s+/, v, /\s*:/))),
                  end: /:/,
                  relevance: 0,
                  contains: [
                    { className: 'keyword', match: /\b_\b/ },
                    { className: 'params', match: v }
                  ]
                },
                ...h,
                ...C,
                ...T,
                R,
                F,
                ...z,
                H,
                q
              ],
              endsParent: !0,
              illegal: /["']/
            },
            V = {
              match: [/func/, /\s+/, a(U.match, v, b)],
              className: { 1: 'keyword', 3: 'title.function' },
              contains: [Z, G, n],
              illegal: [/\[/, /%/]
            },
            W = {
              match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
              className: { 1: 'keyword' },
              contains: [Z, G, n],
              illegal: /\[|%/
            },
            Q = { match: [/operator/, /\s+/, b], className: { 1: 'keyword', 3: 'title' } },
            X = {
              begin: [/precedencegroup/, /\s+/, y],
              className: { 1: 'keyword', 3: 'title' },
              contains: [H],
              keywords: [...u, ...d],
              end: /}/
            }
          for (const e of F.variants) {
            const n = e.contains.find(e => 'interpol' === e.label)
            n.keywords = S
            const t = [...C, ...A, ...T, R, F, ...j]
            n.contains = [...t, { begin: /\(/, end: /\)/, contains: ['self', ...t] }]
          }
          return {
            name: 'Swift',
            keywords: S,
            contains: [
              ...h,
              V,
              W,
              {
                beginKeywords: 'struct protocol class extension enum actor',
                end: '\\{',
                excludeEnd: !0,
                keywords: S,
                contains: [
                  e.inherit(e.TITLE_MODE, { className: 'title.class', begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/ }),
                  ...C
                ]
              },
              Q,
              X,
              { beginKeywords: 'import', end: /$/, contains: [...h], relevance: 0 },
              ...C,
              ...A,
              ...T,
              R,
              F,
              ...j,
              ...z,
              H,
              q
            ]
          }
        }
      },
      36: e => {
        const n = '[A-Za-z$_][0-9A-Za-z$_]*',
          t = [
            'as',
            'in',
            'of',
            'if',
            'for',
            'while',
            'finally',
            'var',
            'new',
            'function',
            'do',
            'return',
            'void',
            'else',
            'break',
            'catch',
            'instanceof',
            'with',
            'throw',
            'case',
            'default',
            'try',
            'switch',
            'continue',
            'typeof',
            'delete',
            'let',
            'yield',
            'const',
            'class',
            'debugger',
            'async',
            'await',
            'static',
            'import',
            'from',
            'export',
            'extends'
          ],
          r = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
          a = [
            'Object',
            'Function',
            'Boolean',
            'Symbol',
            'Math',
            'Date',
            'Number',
            'BigInt',
            'String',
            'RegExp',
            'Array',
            'Float32Array',
            'Float64Array',
            'Int8Array',
            'Uint8Array',
            'Uint8ClampedArray',
            'Int16Array',
            'Int32Array',
            'Uint16Array',
            'Uint32Array',
            'BigInt64Array',
            'BigUint64Array',
            'Set',
            'Map',
            'WeakSet',
            'WeakMap',
            'ArrayBuffer',
            'SharedArrayBuffer',
            'Atomics',
            'DataView',
            'JSON',
            'Promise',
            'Generator',
            'GeneratorFunction',
            'AsyncFunction',
            'Reflect',
            'Proxy',
            'Intl',
            'WebAssembly'
          ],
          i = [
            'Error',
            'EvalError',
            'InternalError',
            'RangeError',
            'ReferenceError',
            'SyntaxError',
            'TypeError',
            'URIError'
          ],
          o = [
            'setInterval',
            'setTimeout',
            'clearInterval',
            'clearTimeout',
            'require',
            'exports',
            'eval',
            'isFinite',
            'isNaN',
            'parseFloat',
            'parseInt',
            'decodeURI',
            'decodeURIComponent',
            'encodeURI',
            'encodeURIComponent',
            'escape',
            'unescape'
          ],
          s = ['arguments', 'this', 'super', 'console', 'window', 'document', 'localStorage', 'module', 'global'],
          l = [].concat(o, a, i)
        function c(e) {
          const c = e.regex,
            d = n,
            u = {
              begin: /<[A-Za-z0-9\\._:-]+/,
              end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
              isTrulyOpeningTag: (e, n) => {
                const t = e[0].length + e.index,
                  r = e.input[t]
                if ('<' === r || ',' === r) return void n.ignoreMatch()
                let a
                '>' === r &&
                  (((e, { after: n }) => {
                    const t = '</' + e[0].slice(1)
                    return -1 !== e.input.indexOf(t, n)
                  })(e, { after: t }) ||
                    n.ignoreMatch()),
                  (a = e.input.substr(t).match(/^\s+extends\s+/)) && 0 === a.index && n.ignoreMatch()
              }
            },
            p = { $pattern: n, keyword: t, literal: r, built_in: l, 'variable.language': s },
            g = '\\.([0-9](_?[0-9])*)',
            f = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
            m = {
              className: 'number',
              variants: [
                { begin: `(\\b(${f})((${g})|\\.)?|(${g}))[eE][+-]?([0-9](_?[0-9])*)\\b` },
                { begin: `\\b(${f})\\b((${g})\\b|\\.)?|(${g})\\b` },
                { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
                { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
                { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
                { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
                { begin: '\\b0[0-7]+n?\\b' }
              ],
              relevance: 0
            },
            b = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: p, contains: [] },
            h = {
              begin: 'html`',
              end: '',
              starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, b], subLanguage: 'xml' }
            },
            _ = {
              begin: 'css`',
              end: '',
              starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, b], subLanguage: 'css' }
            },
            v = { className: 'string', begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE, b] },
            y = {
              className: 'comment',
              variants: [
                e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
                  relevance: 0,
                  contains: [
                    {
                      begin: '(?=@[A-Za-z]+)',
                      relevance: 0,
                      contains: [
                        { className: 'doctag', begin: '@[A-Za-z]+' },
                        { className: 'type', begin: '\\{', end: '\\}', excludeEnd: !0, excludeBegin: !0, relevance: 0 },
                        { className: 'variable', begin: d + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
                        { begin: /(?=[^\n])\s/, relevance: 0 }
                      ]
                    }
                  ]
                }),
                e.C_BLOCK_COMMENT_MODE,
                e.C_LINE_COMMENT_MODE
              ]
            },
            E = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, h, _, v, m]
          b.contains = E.concat({ begin: /\{/, end: /\}/, keywords: p, contains: ['self'].concat(E) })
          const w = [].concat(y, b.contains),
            N = w.concat([{ begin: /\(/, end: /\)/, keywords: p, contains: ['self'].concat(w) }]),
            x = {
              className: 'params',
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: p,
              contains: N
            },
            k = {
              variants: [
                {
                  match: [/class/, /\s+/, d, /\s+/, /extends/, /\s+/, c.concat(d, '(', c.concat(/\./, d), ')*')],
                  scope: { 1: 'keyword', 3: 'title.class', 5: 'keyword', 7: 'title.class.inherited' }
                },
                { match: [/class/, /\s+/, d], scope: { 1: 'keyword', 3: 'title.class' } }
              ]
            },
            O = {
              relevance: 0,
              match: c.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]+|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+/),
              className: 'title.class',
              keywords: { _: [...a, ...i] }
            },
            S = {
              variants: [{ match: [/function/, /\s+/, d, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }],
              className: { 1: 'keyword', 3: 'title.function' },
              label: 'func.def',
              contains: [x],
              illegal: /%/
            },
            C = {
              match: c.concat(/\b/, ((A = [...o, 'super']), c.concat('(?!', A.join('|'), ')')), d, c.lookahead(/\(/)),
              className: 'title.function',
              relevance: 0
            }
          var A
          const M = {
              begin: c.concat(/\./, c.lookahead(c.concat(d, /(?![0-9A-Za-z$_(])/))),
              end: d,
              excludeBegin: !0,
              keywords: 'prototype',
              className: 'property',
              relevance: 0
            },
            T = {
              match: [/get|set/, /\s+/, d, /(?=\()/],
              className: { 1: 'keyword', 3: 'title.function' },
              contains: [{ begin: /\(\)/ }, x]
            },
            I = '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + e.UNDERSCORE_IDENT_RE + ')\\s*=>',
            R = {
              match: [/const|var|let/, /\s+/, d, /\s*/, /=\s*/, c.lookahead(I)],
              className: { 1: 'keyword', 3: 'title.function' },
              contains: [x]
            }
          return {
            name: 'Javascript',
            aliases: ['js', 'jsx', 'mjs', 'cjs'],
            keywords: p,
            exports: { PARAMS_CONTAINS: N, CLASS_REFERENCE: O },
            illegal: /#(?![$_A-z])/,
            contains: [
              e.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
              { label: 'use_strict', className: 'meta', relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              h,
              _,
              v,
              y,
              m,
              O,
              { className: 'attr', begin: d + c.lookahead(':'), relevance: 0 },
              R,
              {
                begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                keywords: 'return throw case',
                relevance: 0,
                contains: [
                  y,
                  e.REGEXP_MODE,
                  {
                    className: 'function',
                    begin: I,
                    returnBegin: !0,
                    end: '\\s*=>',
                    contains: [
                      {
                        className: 'params',
                        variants: [
                          { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                          { className: null, begin: /\(\s*\)/, skip: !0 },
                          { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: p, contains: N }
                        ]
                      }
                    ]
                  },
                  { begin: /,/, relevance: 0 },
                  { match: /\s+/, relevance: 0 },
                  {
                    variants: [
                      { begin: '<>', end: '</>' },
                      { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ },
                      { begin: u.begin, 'on:begin': u.isTrulyOpeningTag, end: u.end }
                    ],
                    subLanguage: 'xml',
                    contains: [{ begin: u.begin, end: u.end, skip: !0, contains: ['self'] }]
                  }
                ]
              },
              S,
              { beginKeywords: 'while if switch catch for' },
              {
                begin:
                  '\\b(?!function)' +
                  e.UNDERSCORE_IDENT_RE +
                  '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
                returnBegin: !0,
                label: 'func.def',
                contains: [x, e.inherit(e.TITLE_MODE, { begin: d, className: 'title.function' })]
              },
              { match: /\.\.\./, relevance: 0 },
              M,
              { match: '\\$' + d, relevance: 0 },
              { match: [/\bconstructor(?=\s*\()/], className: { 1: 'title.function' }, contains: [x] },
              C,
              { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' },
              k,
              T,
              { match: /\$[(.]/ }
            ]
          }
        }
        e.exports = function (e) {
          const a = c(e),
            i = ['any', 'void', 'number', 'boolean', 'string', 'object', 'never', 'enum'],
            o = { beginKeywords: 'namespace', end: /\{/, excludeEnd: !0, contains: [a.exports.CLASS_REFERENCE] },
            d = {
              beginKeywords: 'interface',
              end: /\{/,
              excludeEnd: !0,
              keywords: { keyword: 'interface extends', built_in: i },
              contains: [a.exports.CLASS_REFERENCE]
            },
            u = {
              $pattern: n,
              keyword: t.concat([
                'type',
                'namespace',
                'typedef',
                'interface',
                'public',
                'private',
                'protected',
                'implements',
                'declare',
                'abstract',
                'readonly'
              ]),
              literal: r,
              built_in: l.concat(i),
              'variable.language': s
            },
            p = { className: 'meta', begin: '@[A-Za-z$_][0-9A-Za-z$_]*' },
            g = (e, n, t) => {
              const r = e.contains.findIndex(e => e.label === n)
              if (-1 === r) throw new Error('can not find mode to replace')
              e.contains.splice(r, 1, t)
            }
          return (
            Object.assign(a.keywords, u),
            a.exports.PARAMS_CONTAINS.push(p),
            (a.contains = a.contains.concat([p, o, d])),
            g(a, 'shebang', e.SHEBANG()),
            g(a, 'use_strict', { className: 'meta', relevance: 10, begin: /^\s*['"]use strict['"]/ }),
            (a.contains.find(e => 'func.def' === e.label).relevance = 0),
            Object.assign(a, { name: 'TypeScript', aliases: ['ts', 'tsx'] }),
            a
          )
        }
      },
      617: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = /\d{1,2}\/\d{1,2}\/\d{4}/,
            r = /\d{4}-\d{1,2}-\d{1,2}/,
            a = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
            i = /\d{1,2}(:\d{1,2}){1,2}/,
            o = {
              className: 'literal',
              variants: [
                { begin: n.concat(/# */, n.either(r, t), / *#/) },
                { begin: n.concat(/# */, i, / *#/) },
                { begin: n.concat(/# */, a, / *#/) },
                { begin: n.concat(/# */, n.either(r, t), / +/, n.either(a, i), / *#/) }
              ]
            },
            s = e.COMMENT(/'''/, /$/, { contains: [{ className: 'doctag', begin: /<\/?/, end: />/ }] }),
            l = e.COMMENT(null, /$/, { variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }] })
          return {
            name: 'Visual Basic .NET',
            aliases: ['vb'],
            case_insensitive: !0,
            classNameAliases: { label: 'symbol' },
            keywords: {
              keyword:
                'addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield',
              built_in:
                'addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort',
              type: 'boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort',
              literal: 'true false nothing'
            },
            illegal: '//|\\{|\\}|endif|gosub|variant|wend|^\\$ ',
            contains: [
              { className: 'string', begin: /"(""|[^/n])"C\b/ },
              { className: 'string', begin: /"/, end: /"/, illegal: /\n/, contains: [{ begin: /""/ }] },
              o,
              {
                className: 'number',
                relevance: 0,
                variants: [
                  { begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/ },
                  { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
                  { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
                  { begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
                  { begin: /&B[01_]+((U?[SIL])|[%&])?/ }
                ]
              },
              { className: 'label', begin: /^\w+:/ },
              s,
              l,
              {
                className: 'meta',
                begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                end: /$/,
                keywords: { keyword: 'const disable else elseif enable end externalsource if region then' },
                contains: [l]
              }
            ]
          }
        }
      },
      285: e => {
        e.exports = function (e) {
          const n = e.regex,
            t = n.concat(/[A-Z_]/, n.optional(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/),
            r = { className: 'symbol', begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
            a = { begin: /\s/, contains: [{ className: 'keyword', begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }] },
            i = e.inherit(a, { begin: /\(/, end: /\)/ }),
            o = e.inherit(e.APOS_STRING_MODE, { className: 'string' }),
            s = e.inherit(e.QUOTE_STRING_MODE, { className: 'string' }),
            l = {
              endsWithParent: !0,
              illegal: /</,
              relevance: 0,
              contains: [
                { className: 'attr', begin: /[A-Za-z0-9._:-]+/, relevance: 0 },
                {
                  begin: /=\s*/,
                  relevance: 0,
                  contains: [
                    {
                      className: 'string',
                      endsParent: !0,
                      variants: [
                        { begin: /"/, end: /"/, contains: [r] },
                        { begin: /'/, end: /'/, contains: [r] },
                        { begin: /[^\s"'=<>`]+/ }
                      ]
                    }
                  ]
                }
              ]
            }
          return {
            name: 'HTML, XML',
            aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
            case_insensitive: !0,
            contains: [
              {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                relevance: 10,
                contains: [
                  a,
                  s,
                  o,
                  i,
                  {
                    begin: /\[/,
                    end: /\]/,
                    contains: [{ className: 'meta', begin: /<![a-z]/, end: />/, contains: [a, i, s, o] }]
                  }
                ]
              },
              e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
              { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
              r,
              { className: 'meta', begin: /<\?xml/, end: /\?>/, relevance: 10 },
              {
                className: 'tag',
                begin: /<style(?=\s|>)/,
                end: />/,
                keywords: { name: 'style' },
                contains: [l],
                starts: { end: /<\/style>/, returnEnd: !0, subLanguage: ['css', 'xml'] }
              },
              {
                className: 'tag',
                begin: /<script(?=\s|>)/,
                end: />/,
                keywords: { name: 'script' },
                contains: [l],
                starts: { end: /<\/script>/, returnEnd: !0, subLanguage: ['javascript', 'handlebars', 'xml'] }
              },
              { className: 'tag', begin: /<>|<\/>/ },
              {
                className: 'tag',
                begin: n.concat(/</, n.lookahead(n.concat(t, n.either(/\/>/, />/, /\s/)))),
                end: /\/?>/,
                contains: [{ className: 'name', begin: t, relevance: 0, starts: l }]
              },
              {
                className: 'tag',
                begin: n.concat(/<\//, n.lookahead(n.concat(t, />/))),
                contains: [
                  { className: 'name', begin: t, relevance: 0 },
                  { begin: />/, relevance: 0, endsParent: !0 }
                ]
              }
            ]
          }
        }
      },
      692: e => {
        e.exports = function (e) {
          const n = 'true false yes no null',
            t = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
            r = {
              className: 'string',
              relevance: 0,
              variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /\S+/ }],
              contains: [
                e.BACKSLASH_ESCAPE,
                {
                  className: 'template-variable',
                  variants: [
                    { begin: /\{\{/, end: /\}\}/ },
                    { begin: /%\{/, end: /\}/ }
                  ]
                }
              ]
            },
            a = e.inherit(r, {
              variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /[^\s,{}[\]]+/ }]
            }),
            i = { end: ',', endsWithParent: !0, excludeEnd: !0, keywords: n, relevance: 0 },
            o = { begin: /\{/, end: /\}/, contains: [i], illegal: '\\n', relevance: 0 },
            s = { begin: '\\[', end: '\\]', contains: [i], illegal: '\\n', relevance: 0 },
            l = [
              {
                className: 'attr',
                variants: [
                  { begin: '\\w[\\w :\\/.-]*:(?=[ \t]|$)' },
                  { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
                  { begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)" }
                ]
              },
              { className: 'meta', begin: '^---\\s*$', relevance: 10 },
              { className: 'string', begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*' },
              {
                begin: '<%[%=-]?',
                end: '[%-]?%>',
                subLanguage: 'ruby',
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
              },
              { className: 'type', begin: '!\\w+!' + t },
              { className: 'type', begin: '!<' + t + '>' },
              { className: 'type', begin: '!' + t },
              { className: 'type', begin: '!!' + t },
              { className: 'meta', begin: '&' + e.UNDERSCORE_IDENT_RE + '$' },
              { className: 'meta', begin: '\\*' + e.UNDERSCORE_IDENT_RE + '$' },
              { className: 'bullet', begin: '-(?=[ ]|$)', relevance: 0 },
              e.HASH_COMMENT_MODE,
              { beginKeywords: n, keywords: { literal: n } },
              {
                className: 'number',
                begin:
                  '\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b'
              },
              { className: 'number', begin: e.C_NUMBER_RE + '\\b', relevance: 0 },
              o,
              s,
              r
            ],
            c = [...l]
          return (
            c.pop(), c.push(a), (i.contains = c), { name: 'YAML', case_insensitive: !0, aliases: ['yml'], contains: l }
          )
        }
      }
    },
    l = {}
  function c(e) {
    var n = l[e]
    if (void 0 !== n) {
      if (void 0 !== n.error) throw n.error
      return n.exports
    }
    var t = (l[e] = { exports: {} })
    try {
      var r = { id: e, module: t, factory: s[e], require: c }
      c.i.forEach(function (e) {
        e(r)
      }),
        (t = r.module),
        r.factory.call(t.exports, t, t.exports, r.require)
    } catch (e) {
      throw ((t.error = e), e)
    }
    return t.exports
  }
  ;(c.m = s),
    (c.c = l),
    (c.i = []),
    (c.hu = e => e + '.' + c.h() + '.hot-update.js'),
    (c.miniCssF = e => {}),
    (c.hmrF = () => 'main.' + c.h() + '.hot-update.json'),
    (c.h = () => '7b3c1619615defe04f39'),
    (c.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (c.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (e = {}),
    (n = 'paintbrush:'),
    (c.l = (t, r, a, i) => {
      if (e[t]) e[t].push(r)
      else {
        var o, s
        if (void 0 !== a)
          for (var l = document.getElementsByTagName('script'), d = 0; d < l.length; d++) {
            var u = l[d]
            if (u.getAttribute('src') == t || u.getAttribute('data-webpack') == n + a) {
              o = u
              break
            }
          }
        o ||
          ((s = !0),
          ((o = document.createElement('script')).charset = 'utf-8'),
          (o.timeout = 120),
          c.nc && o.setAttribute('nonce', c.nc),
          o.setAttribute('data-webpack', n + a),
          (o.src = t)),
          (e[t] = [r])
        var p = (n, r) => {
            ;(o.onerror = o.onload = null), clearTimeout(g)
            var a = e[t]
            if ((delete e[t], o.parentNode && o.parentNode.removeChild(o), a && a.forEach(e => e(r)), n)) return n(r)
          },
          g = setTimeout(p.bind(null, void 0, { type: 'timeout', target: o }), 12e4)
        ;(o.onerror = p.bind(null, o.onerror)), (o.onload = p.bind(null, o.onload)), s && document.head.appendChild(o)
      }
    }),
    (() => {
      var e,
        n,
        t,
        r,
        a = {},
        i = c.c,
        o = [],
        s = [],
        l = 'idle'
      function d(e) {
        l = e
        for (var n = [], t = 0; t < s.length; t++) n[t] = s[t].call(null, e)
        return Promise.all(n)
      }
      function u(e) {
        if (0 === n.length) return e()
        var t = n
        return (
          (n = []),
          Promise.all(t).then(function () {
            return u(e)
          })
        )
      }
      function p(e) {
        if ('idle' !== l) throw new Error('check() is only allowed in idle status')
        return d('check')
          .then(c.hmrM)
          .then(function (r) {
            return r
              ? d('prepare').then(function () {
                  var a = []
                  return (
                    (n = []),
                    (t = []),
                    Promise.all(
                      Object.keys(c.hmrC).reduce(function (e, n) {
                        return c.hmrC[n](r.c, r.r, r.m, e, t, a), e
                      }, [])
                    ).then(function () {
                      return u(function () {
                        return e
                          ? f(e)
                          : d('ready').then(function () {
                              return a
                            })
                      })
                    })
                  )
                })
              : d(m() ? 'ready' : 'idle').then(function () {
                  return null
                })
          })
      }
      function g(e) {
        return 'ready' !== l
          ? Promise.resolve().then(function () {
              throw new Error('apply() is only allowed in ready status')
            })
          : f(e)
      }
      function f(e) {
        ;(e = e || {}), m()
        var n = t.map(function (n) {
          return n(e)
        })
        t = void 0
        var a = n
          .map(function (e) {
            return e.error
          })
          .filter(Boolean)
        if (a.length > 0)
          return d('abort').then(function () {
            throw a[0]
          })
        var i = d('dispose')
        n.forEach(function (e) {
          e.dispose && e.dispose()
        })
        var o,
          s = d('apply'),
          l = function (e) {
            o || (o = e)
          },
          c = []
        return (
          n.forEach(function (e) {
            if (e.apply) {
              var n = e.apply(l)
              if (n) for (var t = 0; t < n.length; t++) c.push(n[t])
            }
          }),
          Promise.all([i, s]).then(function () {
            return o
              ? d('fail').then(function () {
                  throw o
                })
              : r
              ? f(e).then(function (e) {
                  return (
                    c.forEach(function (n) {
                      e.indexOf(n) < 0 && e.push(n)
                    }),
                    e
                  )
                })
              : d('idle').then(function () {
                  return c
                })
          })
        )
      }
      function m() {
        if (r)
          return (
            t || (t = []),
            Object.keys(c.hmrI).forEach(function (e) {
              r.forEach(function (n) {
                c.hmrI[e](n, t)
              })
            }),
            (r = void 0),
            !0
          )
      }
      ;(c.hmrD = a),
        c.i.push(function (f) {
          var m,
            b,
            h,
            _,
            v = f.module,
            y = (function (t, r) {
              var a = i[r]
              if (!a) return t
              var s = function (n) {
                  if (a.hot.active) {
                    if (i[n]) {
                      var s = i[n].parents
                      ;-1 === s.indexOf(r) && s.push(r)
                    } else (o = [r]), (e = n)
                    ;-1 === a.children.indexOf(n) && a.children.push(n)
                  } else console.warn('[HMR] unexpected require(' + n + ') from disposed module ' + r), (o = [])
                  return t(n)
                },
                c = function (e) {
                  return {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return t[e]
                    },
                    set: function (n) {
                      t[e] = n
                    }
                  }
                }
              for (var p in t)
                Object.prototype.hasOwnProperty.call(t, p) && 'e' !== p && Object.defineProperty(s, p, c(p))
              return (
                (s.e = function (e) {
                  return (function (e) {
                    switch (l) {
                      case 'ready':
                        return (
                          d('prepare'),
                          n.push(e),
                          u(function () {
                            return d('ready')
                          }),
                          e
                        )
                      case 'prepare':
                        return n.push(e), e
                      default:
                        return e
                    }
                  })(t.e(e))
                }),
                s
              )
            })(f.require, f.id)
          ;(v.hot =
            ((m = f.id),
            (b = v),
            (_ = {
              _acceptedDependencies: {},
              _acceptedErrorHandlers: {},
              _declinedDependencies: {},
              _selfAccepted: !1,
              _selfDeclined: !1,
              _selfInvalidated: !1,
              _disposeHandlers: [],
              _main: (h = e !== m),
              _requireSelf: function () {
                ;(o = b.parents.slice()), (e = h ? void 0 : m), c(m)
              },
              active: !0,
              accept: function (e, n, t) {
                if (void 0 === e) _._selfAccepted = !0
                else if ('function' == typeof e) _._selfAccepted = e
                else if ('object' == typeof e && null !== e)
                  for (var r = 0; r < e.length; r++)
                    (_._acceptedDependencies[e[r]] = n || function () {}), (_._acceptedErrorHandlers[e[r]] = t)
                else (_._acceptedDependencies[e] = n || function () {}), (_._acceptedErrorHandlers[e] = t)
              },
              decline: function (e) {
                if (void 0 === e) _._selfDeclined = !0
                else if ('object' == typeof e && null !== e)
                  for (var n = 0; n < e.length; n++) _._declinedDependencies[e[n]] = !0
                else _._declinedDependencies[e] = !0
              },
              dispose: function (e) {
                _._disposeHandlers.push(e)
              },
              addDisposeHandler: function (e) {
                _._disposeHandlers.push(e)
              },
              removeDisposeHandler: function (e) {
                var n = _._disposeHandlers.indexOf(e)
                n >= 0 && _._disposeHandlers.splice(n, 1)
              },
              invalidate: function () {
                switch (((this._selfInvalidated = !0), l)) {
                  case 'idle':
                    ;(t = []),
                      Object.keys(c.hmrI).forEach(function (e) {
                        c.hmrI[e](m, t)
                      }),
                      d('ready')
                    break
                  case 'ready':
                    Object.keys(c.hmrI).forEach(function (e) {
                      c.hmrI[e](m, t)
                    })
                    break
                  case 'prepare':
                  case 'check':
                  case 'dispose':
                  case 'apply':
                    ;(r = r || []).push(m)
                }
              },
              check: p,
              apply: g,
              status: function (e) {
                if (!e) return l
                s.push(e)
              },
              addStatusHandler: function (e) {
                s.push(e)
              },
              removeStatusHandler: function (e) {
                var n = s.indexOf(e)
                n >= 0 && s.splice(n, 1)
              },
              data: a[m]
            }),
            (e = void 0),
            _)),
            (v.parents = o),
            (v.children = []),
            (o = []),
            (f.require = y)
        }),
        (c.hmrC = {}),
        (c.hmrI = {})
    })(),
    (() => {
      var e
      c.g.importScripts && (e = c.g.location + '')
      var n = c.g.document
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var t = n.getElementsByTagName('script')
        t.length && (e = t[t.length - 1].src)
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser')
      ;(e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (c.p = e)
    })(),
    (t = (e, n, t, r) => {
      var a = document.createElement('link')
      return (
        (a.rel = 'stylesheet'),
        (a.type = 'text/css'),
        (a.onerror = a.onload =
          i => {
            if (((a.onerror = a.onload = null), 'load' === i.type)) t()
            else {
              var o = i && ('load' === i.type ? 'missing' : i.type),
                s = (i && i.target && i.target.href) || n,
                l = new Error('Loading CSS chunk ' + e + ' failed.\n(' + s + ')')
              ;(l.code = 'CSS_CHUNK_LOAD_FAILED'), (l.type = o), (l.request = s), a.parentNode.removeChild(a), r(l)
            }
          }),
        (a.href = n),
        document.head.appendChild(a),
        a
      )
    }),
    (r = (e, n) => {
      for (var t = document.getElementsByTagName('link'), r = 0; r < t.length; r++) {
        var a = (o = t[r]).getAttribute('data-href') || o.getAttribute('href')
        if ('stylesheet' === o.rel && (a === e || a === n)) return o
      }
      var i = document.getElementsByTagName('style')
      for (r = 0; r < i.length; r++) {
        var o
        if ((a = (o = i[r]).getAttribute('data-href')) === e || a === n) return o
      }
    }),
    (a = []),
    (i = []),
    (o = e => ({
      dispose: () => {
        for (var e = 0; e < a.length; e++) {
          var n = a[e]
          n.parentNode && n.parentNode.removeChild(n)
        }
        a.length = 0
      },
      apply: () => {
        for (var e = 0; e < i.length; e++) i[e].rel = 'stylesheet'
        i.length = 0
      }
    })),
    (c.hmrC.miniCss = (e, n, s, l, d, u) => {
      d.push(o),
        e.forEach(e => {
          var n = c.miniCssF(e),
            o = c.p + n,
            s = r(n, o)
          s &&
            l.push(
              new Promise((n, r) => {
                var l = t(
                  e,
                  o,
                  () => {
                    ;(l.as = 'style'), (l.rel = 'preload'), n()
                  },
                  r
                )
                a.push(s), i.push(l)
              })
            )
        })
    }),
    (() => {
      var e,
        n,
        t,
        r,
        a = (c.hmrS_jsonp = c.hmrS_jsonp || { 179: 0 }),
        i = {}
      function o(e) {
        return new Promise((n, t) => {
          i[e] = n
          var r = c.p + c.hu(e),
            a = new Error()
          c.l(r, n => {
            if (i[e]) {
              i[e] = void 0
              var r = n && ('load' === n.type ? 'missing' : n.type),
                o = n && n.target && n.target.src
              ;(a.message = 'Loading hot update chunk ' + e + ' failed.\n(' + r + ': ' + o + ')'),
                (a.name = 'ChunkLoadError'),
                (a.type = r),
                (a.request = o),
                t(a)
            }
          })
        })
      }
      function s(i) {
        function o(e) {
          for (
            var n = [e],
              t = {},
              r = n.map(function (e) {
                return { chain: [e], id: e }
              });
            r.length > 0;

          ) {
            var a = r.pop(),
              i = a.id,
              o = a.chain,
              l = c.c[i]
            if (l && (!l.hot._selfAccepted || l.hot._selfInvalidated)) {
              if (l.hot._selfDeclined) return { type: 'self-declined', chain: o, moduleId: i }
              if (l.hot._main) return { type: 'unaccepted', chain: o, moduleId: i }
              for (var d = 0; d < l.parents.length; d++) {
                var u = l.parents[d],
                  p = c.c[u]
                if (p) {
                  if (p.hot._declinedDependencies[i])
                    return { type: 'declined', chain: o.concat([u]), moduleId: i, parentId: u }
                  ;-1 === n.indexOf(u) &&
                    (p.hot._acceptedDependencies[i]
                      ? (t[u] || (t[u] = []), s(t[u], [i]))
                      : (delete t[u], n.push(u), r.push({ chain: o.concat([u]), id: u })))
                }
              }
            }
          }
          return { type: 'accepted', moduleId: e, outdatedModules: n, outdatedDependencies: t }
        }
        function s(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t]
            ;-1 === e.indexOf(r) && e.push(r)
          }
        }
        c.f && delete c.f.jsonpHmr, (e = void 0)
        var l = {},
          d = [],
          u = {},
          p = function (e) {
            console.warn('[HMR] unexpected require(' + e.id + ') to disposed module')
          }
        for (var g in n)
          if (c.o(n, g)) {
            var f,
              m = n[g],
              b = !1,
              h = !1,
              _ = !1,
              v = ''
            switch (
              ((f = m ? o(g) : { type: 'disposed', moduleId: g }).chain &&
                (v = '\nUpdate propagation: ' + f.chain.join(' -> ')),
              f.type)
            ) {
              case 'self-declined':
                i.onDeclined && i.onDeclined(f),
                  i.ignoreDeclined || (b = new Error('Aborted because of self decline: ' + f.moduleId + v))
                break
              case 'declined':
                i.onDeclined && i.onDeclined(f),
                  i.ignoreDeclined ||
                    (b = new Error('Aborted because of declined dependency: ' + f.moduleId + ' in ' + f.parentId + v))
                break
              case 'unaccepted':
                i.onUnaccepted && i.onUnaccepted(f),
                  i.ignoreUnaccepted || (b = new Error('Aborted because ' + g + ' is not accepted' + v))
                break
              case 'accepted':
                i.onAccepted && i.onAccepted(f), (h = !0)
                break
              case 'disposed':
                i.onDisposed && i.onDisposed(f), (_ = !0)
                break
              default:
                throw new Error('Unexception type ' + f.type)
            }
            if (b) return { error: b }
            if (h)
              for (g in ((u[g] = m), s(d, f.outdatedModules), f.outdatedDependencies))
                c.o(f.outdatedDependencies, g) && (l[g] || (l[g] = []), s(l[g], f.outdatedDependencies[g]))
            _ && (s(d, [f.moduleId]), (u[g] = p))
          }
        n = void 0
        for (var y, E = [], w = 0; w < d.length; w++) {
          var N = d[w],
            x = c.c[N]
          x &&
            (x.hot._selfAccepted || x.hot._main) &&
            u[N] !== p &&
            !x.hot._selfInvalidated &&
            E.push({ module: N, require: x.hot._requireSelf, errorHandler: x.hot._selfAccepted })
        }
        return {
          dispose: function () {
            var e
            t.forEach(function (e) {
              delete a[e]
            }),
              (t = void 0)
            for (var n, r = d.slice(); r.length > 0; ) {
              var i = r.pop(),
                o = c.c[i]
              if (o) {
                var s = {},
                  u = o.hot._disposeHandlers
                for (w = 0; w < u.length; w++) u[w].call(null, s)
                for (c.hmrD[i] = s, o.hot.active = !1, delete c.c[i], delete l[i], w = 0; w < o.children.length; w++) {
                  var p = c.c[o.children[w]]
                  p && (e = p.parents.indexOf(i)) >= 0 && p.parents.splice(e, 1)
                }
              }
            }
            for (var g in l)
              if (c.o(l, g) && (o = c.c[g]))
                for (y = l[g], w = 0; w < y.length; w++)
                  (n = y[w]), (e = o.children.indexOf(n)) >= 0 && o.children.splice(e, 1)
          },
          apply: function (e) {
            for (var n in u) c.o(u, n) && (c.m[n] = u[n])
            for (var t = 0; t < r.length; t++) r[t](c)
            for (var a in l)
              if (c.o(l, a)) {
                var o = c.c[a]
                if (o) {
                  y = l[a]
                  for (var s = [], p = [], g = [], f = 0; f < y.length; f++) {
                    var m = y[f],
                      b = o.hot._acceptedDependencies[m],
                      h = o.hot._acceptedErrorHandlers[m]
                    if (b) {
                      if (-1 !== s.indexOf(b)) continue
                      s.push(b), p.push(h), g.push(m)
                    }
                  }
                  for (var _ = 0; _ < s.length; _++)
                    try {
                      s[_].call(null, y)
                    } catch (n) {
                      if ('function' == typeof p[_])
                        try {
                          p[_](n, { moduleId: a, dependencyId: g[_] })
                        } catch (t) {
                          i.onErrored &&
                            i.onErrored({
                              type: 'accept-error-handler-errored',
                              moduleId: a,
                              dependencyId: g[_],
                              error: t,
                              originalError: n
                            }),
                            i.ignoreErrored || (e(t), e(n))
                        }
                      else
                        i.onErrored &&
                          i.onErrored({ type: 'accept-errored', moduleId: a, dependencyId: g[_], error: n }),
                          i.ignoreErrored || e(n)
                    }
                }
              }
            for (var v = 0; v < E.length; v++) {
              var w = E[v],
                N = w.module
              try {
                w.require(N)
              } catch (n) {
                if ('function' == typeof w.errorHandler)
                  try {
                    w.errorHandler(n, { moduleId: N, module: c.c[N] })
                  } catch (t) {
                    i.onErrored &&
                      i.onErrored({
                        type: 'self-accept-error-handler-errored',
                        moduleId: N,
                        error: t,
                        originalError: n
                      }),
                      i.ignoreErrored || (e(t), e(n))
                  }
                else
                  i.onErrored && i.onErrored({ type: 'self-accept-errored', moduleId: N, error: n }),
                    i.ignoreErrored || e(n)
              }
            }
            return d
          }
        }
      }
      ;(self.webpackHotUpdatepaintbrush = (e, t, a) => {
        for (var o in t) c.o(t, o) && (n[o] = t[o])
        a && r.push(a), i[e] && (i[e](), (i[e] = void 0))
      }),
        (c.hmrI.jsonp = function (e, a) {
          n || ((n = {}), (r = []), (t = []), a.push(s)), c.o(n, e) || (n[e] = c.m[e])
        }),
        (c.hmrC.jsonp = function (i, l, d, u, p, g) {
          p.push(s),
            (e = {}),
            (t = l),
            (n = d.reduce(function (e, n) {
              return (e[n] = !1), e
            }, {})),
            (r = []),
            i.forEach(function (n) {
              c.o(a, n) && void 0 !== a[n] && (u.push(o(n)), (e[n] = !0))
            }),
            c.f &&
              (c.f.jsonpHmr = function (n, t) {
                e && !c.o(e, n) && c.o(a, n) && void 0 !== a[n] && (t.push(o(n)), (e[n] = !0))
              })
        }),
        (c.hmrM = () => {
          if ('undefined' == typeof fetch) throw new Error('No browser support: need fetch API')
          return fetch(c.p + c.hmrF()).then(e => {
            if (404 !== e.status) {
              if (!e.ok) throw new Error('Failed to fetch update manifest ' + e.statusText)
              return e.json()
            }
          })
        })
    })(),
    c(132)
})()
