import {
	aL as K,
	a as U,
	aM as Q,
	u as ee,
	aN as H,
	ar as T,
	ah as j,
	K as v,
	B as y,
	d as E,
	aO as W,
	A as te,
	C as re,
	a5 as se,
	aP as P,
	aa as p,
	a2 as z,
	ak as F,
	a8 as g,
	ao as ie,
	aQ as ne,
	aR as A,
	aS as D,
	aT as V,
	aU as ae,
	aV as fe,
	aW as J,
	M as X,
	a7 as he,
	ap as M,
	H as O,
	n as oe,
	G as le,
	aX as S,
	E as ce,
	a4 as de,
	aY as ue,
	aZ as _e,
	aD as pe,
	aB as ge,
	a_ as ve,
	a$ as L,
	U as ye,
	W as Z,
	J as be,
	X as me,
	Z as I,
	I as R,
	b0 as Ee,
	an as we,
	b1 as Te,
	ae as Se,
	v as Re,
	a6 as Ne,
	Y as ke,
	x as Ae
} from './1g9Fanb8.js';
import { b as De } from './B6QB5288.js';
function Oe(t) {
	let e = 0,
		r = j(0),
		i;
	return () => {
		K() &&
			(U(r),
			Q(
				() => (
					e === 0 && (i = ee(() => t(() => H(r)))),
					(e += 1),
					() => {
						T(() => {
							((e -= 1), e === 0 && (i?.(), (i = void 0), H(r)));
						});
					}
				)
			));
	};
}
var xe = ce | de;
function Fe(t, e, r, i) {
	new Me(t, e, r, i);
}
class Me {
	parent;
	is_pending = !1;
	transform_error;
	#r;
	#_ = y ? v : null;
	#i;
	#o;
	#t;
	#n = null;
	#e = null;
	#s = null;
	#a = null;
	#l = 0;
	#h = 0;
	#c = !1;
	#p = new Set();
	#g = new Set();
	#f = null;
	#m = Oe(
		() => (
			(this.#f = j(this.#l)),
			() => {
				this.#f = null;
			}
		)
	);
	constructor(e, r, i, n) {
		((this.#r = e),
			(this.#i = r),
			(this.#o = (s) => {
				var a = E;
				((a.b = this), (a.f |= W), i(s));
			}),
			(this.parent = E.b),
			(this.transform_error = n ?? this.parent?.transform_error ?? ((s) => s)),
			(this.#t = te(() => {
				if (y) {
					const s = this.#_;
					re();
					const a = s.data === se;
					if (s.data.startsWith(P)) {
						const f = JSON.parse(s.data.slice(P.length));
						this.#w(f);
					} else a ? this.#T() : this.#E();
				} else this.#v();
			}, xe)),
			y && (this.#r = v));
	}
	#E() {
		try {
			this.#n = p(() => this.#o(this.#r));
		} catch (e) {
			this.error(e);
		}
	}
	#w(e) {
		const r = this.#i.failed;
		r &&
			(this.#s = p(() => {
				r(
					this.#r,
					() => e,
					() => () => {}
				);
			}));
	}
	#T() {
		const e = this.#i.pending;
		e &&
			((this.is_pending = !0),
			(this.#e = p(() => e(this.#r))),
			T(() => {
				var r = (this.#a = document.createDocumentFragment()),
					i = z();
				(r.append(i),
					(this.#n = this.#u(() => p(() => this.#o(i)))),
					this.#h === 0 &&
						(this.#r.before(r),
						(this.#a = null),
						F(this.#e, () => {
							this.#e = null;
						}),
						this.#d(g)));
			}));
	}
	#v() {
		try {
			if (
				((this.is_pending = this.has_pending_snippet()),
				(this.#h = 0),
				(this.#l = 0),
				(this.#n = p(() => {
					this.#o(this.#r);
				})),
				this.#h > 0)
			) {
				var e = (this.#a = document.createDocumentFragment());
				ie(this.#n, e);
				const r = this.#i.pending;
				this.#e = p(() => r(this.#r));
			} else this.#d(g);
		} catch (r) {
			this.error(r);
		}
	}
	#d(e) {
		((this.is_pending = !1), e.transfer_effects(this.#p, this.#g));
	}
	defer_effect(e) {
		ne(e, this.#p, this.#g);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#i.pending;
	}
	#u(e) {
		var r = E,
			i = J,
			n = X;
		(A(this.#t), D(this.#t), V(this.#t.ctx));
		try {
			return (ae.ensure(), e());
		} catch (s) {
			return (fe(s), null);
		} finally {
			(A(r), D(i), V(n));
		}
	}
	#y(e, r) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#y(e, r);
			return;
		}
		((this.#h += e),
			this.#h === 0 &&
				(this.#d(r),
				this.#e &&
					F(this.#e, () => {
						this.#e = null;
					}),
				this.#a && (this.#r.before(this.#a), (this.#a = null))));
	}
	update_pending_count(e, r) {
		(this.#y(e, r),
			(this.#l += e),
			!(!this.#f || this.#c) &&
				((this.#c = !0),
				T(() => {
					((this.#c = !1), this.#f && he(this.#f, this.#l));
				})));
	}
	get_effect_pending() {
		return (this.#m(), U(this.#f));
	}
	error(e) {
		if (!this.#i.onerror && !this.#i.failed) throw e;
		g?.is_fork
			? (this.#n && g.skip_effect(this.#n),
				this.#e && g.skip_effect(this.#e),
				this.#s && g.skip_effect(this.#s),
				g.on_fork_commit(() => {
					this.#b(e);
				}))
			: this.#b(e);
	}
	#b(e) {
		(this.#n && (M(this.#n), (this.#n = null)),
			this.#e && (M(this.#e), (this.#e = null)),
			this.#s && (M(this.#s), (this.#s = null)),
			y && (O(this.#_), oe(), O(le())));
		var r = this.#i.onerror;
		let i = this.#i.failed;
		var n = !1,
			s = !1;
		const a = () => {
				if (n) {
					_e();
					return;
				}
				((n = !0),
					s && ue(),
					this.#s !== null &&
						F(this.#s, () => {
							this.#s = null;
						}),
					this.#u(() => {
						this.#v();
					}));
			},
			d = (f) => {
				try {
					((s = !0), r?.(f, a), (s = !1));
				} catch (h) {
					S(h, this.#t && this.#t.parent);
				}
				i &&
					(this.#s = this.#u(() => {
						try {
							return p(() => {
								var h = E;
								((h.b = this),
									(h.f |= W),
									i(
										this.#r,
										() => f,
										() => a
									));
							});
						} catch (h) {
							return (S(h, this.#t.parent), null);
						}
					}));
			};
		T(() => {
			var f;
			try {
				f = this.transform_error(e);
			} catch (h) {
				S(h, this.#t && this.#t.parent);
				return;
			}
			f !== null && typeof f == 'object' && typeof f.then == 'function'
				? f.then(d, (h) => S(h, this.#t && this.#t.parent))
				: d(f);
		});
	}
}
const Le = ['touchstart', 'touchmove'];
function Ie(t) {
	return Le.includes(t);
}
const N = Symbol('events'),
	Ye = new Set(),
	$ = new Set();
function Be(t, e, r, i = {}) {
	function n(s) {
		if ((i.capture || Y.call(e, s), !s.cancelBubble)) return ve(() => r?.call(this, s));
	}
	return (
		t.startsWith('pointer') || t.startsWith('touch') || t === 'wheel'
			? T(() => {
					e.addEventListener(t, n, i);
				})
			: e.addEventListener(t, n, i),
		n
	);
}
function Pe(t, e, r, i, n) {
	var s = { capture: i, passive: n },
		a = Be(t, e, r, s);
	(e === document.body || e === window || e === document || e instanceof HTMLMediaElement) &&
		ge(() => {
			e.removeEventListener(t, a, s);
		});
}
let q = null;
function Y(t) {
	var e = this,
		r = e.ownerDocument,
		i = t.type,
		n = t.composedPath?.() || [],
		s = n[0] || t.target;
	q = t;
	var a = 0,
		d = q === t && t[N];
	if (d) {
		var f = n.indexOf(d);
		if (f !== -1 && (e === document || e === window)) {
			t[N] = e;
			return;
		}
		var h = n.indexOf(e);
		if (h === -1) return;
		f <= h && (a = f);
	}
	if (((s = n[a] || t.target), s !== e)) {
		pe(t, 'currentTarget', {
			configurable: !0,
			get() {
				return s || r;
			}
		});
		var b = J,
			w = E;
		(D(null), A(null));
		try {
			for (var _, l = []; s !== null; ) {
				var o = s.assignedSlot || s.parentNode || s.host || null;
				try {
					var c = s[N]?.[i];
					c != null && (!s.disabled || t.target === s) && c.call(s, t);
				} catch (u) {
					_ ? l.push(u) : (_ = u);
				}
				if (t.cancelBubble || o === e || o === null) break;
				s = o;
			}
			if (_) {
				for (let u of l)
					queueMicrotask(() => {
						throw u;
					});
				throw _;
			}
		} finally {
			((t[N] = e), delete t.currentTarget, D(b), A(w));
		}
	}
}
function Ve(t, e) {
	var r = e == null ? '' : typeof e == 'object' ? `${e}` : e;
	r !== (t.__t ??= t.nodeValue) && ((t.__t = r), (t.nodeValue = `${r}`));
}
function Ce(t, e) {
	return G(t, e);
}
function $e(t, e) {
	(L(), (e.intro = e.intro ?? !1));
	const r = e.target,
		i = y,
		n = v;
	try {
		for (var s = ye(r); s && (s.nodeType !== Z || s.data !== be); ) s = me(s);
		if (!s) throw I;
		(R(!0), O(s));
		const a = G(t, { ...e, anchor: s });
		return (R(!1), a);
	} catch (a) {
		if (
			a instanceof Error &&
			a.message
				.split(
					`
`
				)
				.some((d) => d.startsWith('https://svelte.dev/e/'))
		)
			throw a;
		return (
			a !== I && console.warn('Failed to hydrate: ', a),
			e.recover === !1 && Ee(),
			L(),
			we(r),
			R(!1),
			Ce(t, e)
		);
	} finally {
		(R(i), O(n));
	}
}
const k = new Map();
function G(
	t,
	{ target: e, anchor: r, props: i = {}, events: n, context: s, intro: a = !0, transformError: d }
) {
	L();
	var f = void 0,
		h = Te(() => {
			var b = r ?? e.appendChild(z());
			Fe(
				b,
				{ pending: () => {} },
				(l) => {
					Re({});
					var o = X;
					if (
						(s && (o.c = s),
						n && (i.$$events = n),
						y && De(l, null),
						(f = t(l, i) || {}),
						y && ((E.nodes.end = v), v === null || v.nodeType !== Z || v.data !== Ne))
					)
						throw (ke(), I);
					Ae();
				},
				d
			);
			var w = new Set(),
				_ = (l) => {
					for (var o = 0; o < l.length; o++) {
						var c = l[o];
						if (!w.has(c)) {
							w.add(c);
							var u = Ie(c);
							for (const x of [e, document]) {
								var m = k.get(x);
								m === void 0 && ((m = new Map()), k.set(x, m));
								var C = m.get(c);
								C === void 0
									? (x.addEventListener(c, Y, { passive: u }), m.set(c, 1))
									: m.set(c, C + 1);
							}
						}
					}
				};
			return (
				_(Se(Ye)),
				$.add(_),
				() => {
					for (var l of w)
						for (const u of [e, document]) {
							var o = k.get(u),
								c = o.get(l);
							--c == 0
								? (u.removeEventListener(l, Y), o.delete(l), o.size === 0 && k.delete(u))
								: o.set(l, c);
						}
					($.delete(_), b !== r && b.parentNode?.removeChild(b));
				}
			);
		});
	return (B.set(f, h), f);
}
let B = new WeakMap();
function qe(t, e) {
	const r = B.get(t);
	return r ? (B.delete(t), r(e)) : Promise.resolve();
}
export { Pe as e, $e as h, Ce as m, Ve as s, qe as u };
