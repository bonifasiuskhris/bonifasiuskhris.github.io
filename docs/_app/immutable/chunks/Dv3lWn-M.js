import { s as k, g as y } from './BO9nJdxR.js';
import {
	aB as w,
	aC as b,
	z as A,
	a as E,
	c as F,
	aD as M,
	aj as B,
	ap as h,
	ak as C,
	a2 as p,
	aa as v,
	a8 as D,
	B as l,
	K as g,
	ao as N,
	ac as S,
	A as T,
	C as x,
	E as I,
	F as R,
	G as U,
	H as j,
	I as m
} from './1g9Fanb8.js';
let u = !1,
	d = Symbol();
function K(i, s, t) {
	const e = (t[s] ??= { store: null, source: A(void 0), unsubscribe: b });
	if (e.store !== i && !(d in t))
		if ((e.unsubscribe(), (e.store = i ?? null), i == null))
			((e.source.v = void 0), (e.unsubscribe = b));
		else {
			var r = !0;
			((e.unsubscribe = k(i, (a) => {
				r ? (e.source.v = a) : F(e.source, a);
			})),
				(r = !1));
		}
	return i && d in t ? y(i) : E(e.source);
}
function O() {
	const i = {};
	function s() {
		w(() => {
			for (var t in i) i[t].unsubscribe();
			M(i, d, { enumerable: !1, value: !0 });
		});
	}
	return [i, s];
}
function P(i) {
	var s = u;
	try {
		return ((u = !1), [i(), u]);
	} finally {
		u = s;
	}
}
class z {
	anchor;
	#s = new Map();
	#t = new Map();
	#e = new Map();
	#a = new Set();
	#r = !0;
	constructor(s, t = !0) {
		((this.anchor = s), (this.#r = t));
	}
	#i = (s) => {
		if (this.#s.has(s)) {
			var t = this.#s.get(s),
				e = this.#t.get(t);
			if (e) (B(e), this.#a.delete(t));
			else {
				var r = this.#e.get(t);
				r &&
					(this.#t.set(t, r.effect),
					this.#e.delete(t),
					r.fragment.lastChild.remove(),
					this.anchor.before(r.fragment),
					(e = r.effect));
			}
			for (const [a, f] of this.#s) {
				if ((this.#s.delete(a), a === s)) break;
				const n = this.#e.get(f);
				n && (h(n.effect), this.#e.delete(f));
			}
			for (const [a, f] of this.#t) {
				if (a === t || this.#a.has(a)) continue;
				const n = () => {
					if (Array.from(this.#s.values()).includes(a)) {
						var c = document.createDocumentFragment();
						(N(f, c), c.append(p()), this.#e.set(a, { effect: f, fragment: c }));
					} else h(f);
					(this.#a.delete(a), this.#t.delete(a));
				};
				this.#r || !e ? (this.#a.add(a), C(f, n, !1)) : n();
			}
		}
	};
	#n = (s) => {
		this.#s.delete(s);
		const t = Array.from(this.#s.values());
		for (const [e, r] of this.#e) t.includes(e) || (h(r.effect), this.#e.delete(e));
	};
	ensure(s, t) {
		var e = D,
			r = S();
		if (t && !this.#t.has(s) && !this.#e.has(s))
			if (r) {
				var a = document.createDocumentFragment(),
					f = p();
				(a.append(f), this.#e.set(s, { effect: v(() => t(f)), fragment: a }));
			} else
				this.#t.set(
					s,
					v(() => t(this.anchor))
				);
		if ((this.#s.set(e, s), r)) {
			for (const [n, o] of this.#t) n === s ? e.unskip_effect(o) : e.skip_effect(o);
			for (const [n, o] of this.#e) n === s ? e.unskip_effect(o.effect) : e.skip_effect(o.effect);
			(e.oncommit(this.#i), e.ondiscard(this.#n));
		} else (l && (this.anchor = g), this.#i(e));
	}
}
function $(i, s, t = !1) {
	var e;
	l && ((e = g), x());
	var r = new z(i),
		a = t ? I : 0;
	function f(n, o) {
		if (l) {
			var c = R(e);
			if (n !== parseInt(c.substring(1))) {
				var _ = U();
				(j(_), (r.anchor = _), m(!1), r.ensure(n, o), m(!0));
				return;
			}
		}
		r.ensure(n, o);
	}
	T(() => {
		var n = !1;
		(s((o, c = 0) => {
			((n = !0), f(c, o));
		}),
			n || f(-1, null));
	}, a);
}
export { z as B, K as a, P as c, $ as i, O as s };
