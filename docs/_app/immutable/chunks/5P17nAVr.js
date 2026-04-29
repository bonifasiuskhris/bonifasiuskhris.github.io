import { a as z, f as re, c as Te } from './B6QB5288.js';
import './DPjcJl7c.js';
import {
	a2 as q,
	A as ke,
	B as H,
	H as G,
	U as Ae,
	C as be,
	a as k,
	F as Se,
	a5 as Ie,
	G as fe,
	I as X,
	K,
	W as Ne,
	a6 as Me,
	a7 as le,
	a8 as xe,
	a9 as M,
	aa as ee,
	ab as Ce,
	ac as De,
	k as Le,
	ad as Oe,
	ae as te,
	af as He,
	ag as Re,
	z as P,
	ah as ce,
	ai as Fe,
	D as Be,
	aj as ve,
	ak as me,
	al as V,
	am as We,
	an as ze,
	ao as Ke,
	ap as Ue,
	X as Pe,
	aq as _e,
	ar as $e,
	as as Ye,
	at as qe,
	au as Ge,
	av as Xe,
	aw as Ve,
	ax as Je,
	v as je,
	ay as J,
	az as Qe,
	x as Ze,
	T as O,
	c as j,
	f as Q,
	s as y,
	u as U,
	w as Z,
	aA as ea,
	$ as aa
} from './1g9Fanb8.js';
import { s as ra, a as ta, i as ue } from './Dv3lWn-M.js';
import { h as na, a as ia } from './oy_X1v1P.js';
import { i as sa, p as oa } from './oPU-xI05.js';
import { p as F } from './DQYaZlBt.js';
function fa(e, a) {
	return a;
}
function la(e, a, t) {
	for (var c = [], l = a.length, o, n = a.length, v = 0; v < l; v++) {
		let m = a[v];
		me(
			m,
			() => {
				if (o) {
					if ((o.pending.delete(m), o.done.add(m), o.pending.size === 0)) {
						var f = e.outrogroups;
						(ae(e, te(o.done)), f.delete(o), f.size === 0 && (e.outrogroups = null));
					}
				} else n -= 1;
			},
			!1
		);
	}
	if (n === 0) {
		var i = c.length === 0 && t !== null;
		if (i) {
			var d = t,
				s = d.parentNode;
			(ze(s), s.append(d), e.items.clear());
		}
		ae(e, a, !i);
	} else ((o = { pending: new Set(a), done: new Set() }), (e.outrogroups ??= new Set()).add(o));
}
function ae(e, a, t = !0) {
	var c;
	if (e.pending.size > 0) {
		c = new Set();
		for (const n of e.pending.values()) for (const v of n) c.add(e.items.get(v).e);
	}
	for (var l = 0; l < a.length; l++) {
		var o = a[l];
		if (c?.has(o)) {
			o.f |= M;
			const n = document.createDocumentFragment();
			Ke(o, n);
		} else Ue(a[l], t);
	}
}
var pe;
function ca(e, a, t, c, l, o = null) {
	var n = e,
		v = new Map(),
		i = (a & _e) !== 0;
	if (i) {
		var d = e;
		n = H ? G(Ae(d)) : d.appendChild(q());
	}
	H && be();
	var s = null,
		m = Le(() => {
			var p = t();
			return Oe(p) ? p : p == null ? [] : te(p);
		}),
		f,
		_ = new Map(),
		E = !0;
	function N(p) {
		(A.effect.f & Be) === 0 &&
			(A.pending.delete(p),
			(A.fallback = s),
			ua(A, f, n, a, c),
			s !== null &&
				(f.length === 0
					? (s.f & M) === 0
						? ve(s)
						: ((s.f ^= M), W(s, null, n))
					: me(s, () => {
							s = null;
						})));
	}
	function r(p) {
		A.pending.delete(p);
	}
	var u = ke(() => {
			f = k(m);
			var p = f.length;
			let h = !1;
			if (H) {
				var D = Se(n) === Ie;
				D !== (p === 0) && ((n = fe()), G(n), X(!1), (h = !0));
			}
			for (var b = new Set(), g = xe, x = De(), S = 0; S < p; S += 1) {
				H && K.nodeType === Ne && K.data === Me && ((n = K), (h = !0), X(!1));
				var w = f[S],
					L = c(w, S),
					I = E ? null : v.get(L);
				(I
					? (I.v && le(I.v, w), I.i && le(I.i, S), x && g.unskip_effect(I.e))
					: ((I = pa(v, E ? n : (pe ??= q()), w, L, S, l, a, t)), E || (I.e.f |= M), v.set(L, I)),
					b.add(L));
			}
			if (
				(p === 0 &&
					o &&
					!s &&
					(E ? (s = ee(() => o(n))) : ((s = ee(() => o((pe ??= q())))), (s.f |= M))),
				p > b.size && Ce(),
				H && p > 0 && G(fe()),
				!E)
			)
				if ((_.set(g, b), x)) {
					for (const [$, R] of v) b.has($) || g.skip_effect(R.e);
					(g.oncommit(N), g.ondiscard(r));
				} else N(g);
			(h && X(!0), k(m));
		}),
		A = { effect: u, items: v, pending: _, outrogroups: null, fallback: s };
	((E = !1), H && (n = K));
}
function B(e) {
	for (; e !== null && (e.f & We) === 0; ) e = e.next;
	return e;
}
function ua(e, a, t, c, l) {
	var o = (c & Ye) !== 0,
		n = a.length,
		v = e.items,
		i = B(e.effect.first),
		d,
		s = null,
		m,
		f = [],
		_ = [],
		E,
		N,
		r,
		u;
	if (o)
		for (u = 0; u < n; u += 1)
			((E = a[u]),
				(N = l(E, u)),
				(r = v.get(N).e),
				(r.f & M) === 0 && (r.nodes?.a?.measure(), (m ??= new Set()).add(r)));
	for (u = 0; u < n; u += 1) {
		if (((E = a[u]), (N = l(E, u)), (r = v.get(N).e), e.outrogroups !== null))
			for (const w of e.outrogroups) (w.pending.delete(r), w.done.delete(r));
		if (
			((r.f & V) !== 0 && (ve(r), o && (r.nodes?.a?.unfix(), (m ??= new Set()).delete(r))),
			(r.f & M) !== 0)
		)
			if (((r.f ^= M), r === i)) W(r, null, t);
			else {
				var A = s ? s.next : i;
				(r === e.effect.last && (e.effect.last = r.prev),
					r.prev && (r.prev.next = r.next),
					r.next && (r.next.prev = r.prev),
					C(e, s, r),
					C(e, r, A),
					W(r, A, t),
					(s = r),
					(f = []),
					(_ = []),
					(i = B(s.next)));
				continue;
			}
		if (r !== i) {
			if (d !== void 0 && d.has(r)) {
				if (f.length < _.length) {
					var p = _[0],
						h;
					s = p.prev;
					var D = f[0],
						b = f[f.length - 1];
					for (h = 0; h < f.length; h += 1) W(f[h], p, t);
					for (h = 0; h < _.length; h += 1) d.delete(_[h]);
					(C(e, D.prev, b.next),
						C(e, s, D),
						C(e, b, p),
						(i = p),
						(s = b),
						(u -= 1),
						(f = []),
						(_ = []));
				} else
					(d.delete(r),
						W(r, i, t),
						C(e, r.prev, r.next),
						C(e, r, s === null ? e.effect.first : s.next),
						C(e, s, r),
						(s = r));
				continue;
			}
			for (f = [], _ = []; i !== null && i !== r; )
				((d ??= new Set()).add(i), _.push(i), (i = B(i.next)));
			if (i === null) continue;
		}
		((r.f & M) === 0 && f.push(r), (s = r), (i = B(r.next)));
	}
	if (e.outrogroups !== null) {
		for (const w of e.outrogroups)
			w.pending.size === 0 && (ae(e, te(w.done)), e.outrogroups?.delete(w));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (i !== null || d !== void 0) {
		var g = [];
		if (d !== void 0) for (r of d) (r.f & V) === 0 && g.push(r);
		for (; i !== null; ) ((i.f & V) === 0 && i !== e.fallback && g.push(i), (i = B(i.next)));
		var x = g.length;
		if (x > 0) {
			var S = (c & _e) !== 0 && n === 0 ? t : null;
			if (o) {
				for (u = 0; u < x; u += 1) g[u].nodes?.a?.measure();
				for (u = 0; u < x; u += 1) g[u].nodes?.a?.fix();
			}
			la(e, g, S);
		}
	}
	o &&
		$e(() => {
			if (m !== void 0) for (r of m) r.nodes?.a?.apply();
		});
}
function pa(e, a, t, c, l, o, n, v) {
	var i = (n & He) !== 0 ? ((n & Re) === 0 ? P(t, !1, !1) : ce(t)) : null,
		d = (n & Fe) !== 0 ? ce(l) : null;
	return {
		v: i,
		i: d,
		e: ee(
			() => (
				o(a, i ?? t, d ?? l, v),
				() => {
					e.delete(c);
				}
			)
		)
	};
}
function W(e, a, t) {
	if (e.nodes)
		for (
			var c = e.nodes.start, l = e.nodes.end, o = a && (a.f & M) === 0 ? a.nodes.start : t;
			c !== null;
		) {
			var n = Pe(c);
			if ((o.before(c), c === l)) return;
			c = n;
		}
}
function C(e, a, t) {
	(a === null ? (e.effect.first = t) : (a.next = t),
		t === null ? (e.effect.last = a) : (t.prev = a));
}
const da = Symbol('is custom element'),
	va = Symbol('is html'),
	ma = Je ? 'link' : 'LINK';
function T(e, a, t, c) {
	var l = _a(e);
	(H &&
		((l[a] = e.getAttribute(a)),
		a === 'src' || a === 'srcset' || (a === 'href' && e.nodeName === ma))) ||
		(l[a] !== (l[a] = t) &&
			(a === 'loading' && (e[Ve] = t),
			t == null
				? e.removeAttribute(a)
				: typeof t != 'string' && ga(e).includes(a)
					? (e[a] = t)
					: e.setAttribute(a, t)));
}
function _a(e) {
	return (e.__attributes ??= { [da]: e.nodeName.includes('-'), [va]: e.namespaceURI === qe });
}
var de = new Map();
function ga(e) {
	var a = e.getAttribute('is') || e.nodeName,
		t = de.get(a);
	if (t) return t;
	de.set(a, (t = []));
	for (var c, l = e, o = Element.prototype; o !== l; ) {
		c = Xe(l);
		for (var n in c) c[n].set && t.push(n);
		l = Ge(l);
	}
	return t;
}
var ha = re('<meta property="article:tag"/>'),
	Ea = re(
		'<meta property="article:published_time"/> <meta property="article:author" content="Bonifasius Khrisna Wicaksono"/> <!>',
		1
	),
	wa = re(
		'<meta name="description"/> <link rel="canonical"/> <meta property="og:type"/> <meta property="og:url"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:image"/> <meta property="twitter:card" content="summary_large_image"/> <meta property="twitter:url"/> <meta property="twitter:title"/> <meta property="twitter:description"/> <meta property="twitter:image"/> <!>  <!>',
		1
	);
function Na(e, a) {
	je(a, !1);
	const t = () => ta(oa, '$page', c),
		[c, l] = ra(),
		o = P(),
		n = P(),
		v = P();
	let i = F(a, 'title', 8, 'Bonifasius Khrisna Wicaksono | Web Developer'),
		d = F(
			a,
			'description',
			8,
			'Full-stack Web Developer with practical experience in web development, project management, and marketing. AI Agents Enthusiast.'
		),
		s = F(a, 'image', 8, '/profile_1x1.jpg'),
		m = F(a, 'type', 8, 'website'),
		f = F(a, 'article', 8, null);
	const _ = 'https://bonifasiuskhris.github.io';
	(J(
		() => t(),
		() => {
			j(o, `${_}${t().url.pathname}`);
		}
	),
		J(
			() => O(s()),
			() => {
				j(n, s().startsWith('http') ? s() : `${_}${s()}`);
			}
		),
		J(
			() => (O(m()), O(f()), O(i()), k(n)),
			() => {
				j(
					v,
					m() === 'article' && f()
						? {
								'@context': 'https://schema.org',
								'@type': 'BlogPosting',
								headline: i(),
								image: [k(n)],
								datePublished: f().publishedTime,
								dateModified: f().publishedTime,
								author: [{ '@type': 'Person', name: 'Bonifasius Khrisna Wicaksono', url: _ }]
							}
						: {
								'@context': 'https://schema.org',
								'@type': 'Person',
								name: 'Bonifasius Khrisna Wicaksono',
								url: _,
								jobTitle: 'Full-stack Web Developer',
								sameAs: [
									'https://www.linkedin.com/in/bonifasiuskhris/',
									'https://github.com/bonifasiuskhris',
									'https://twitter.com/bonifasiuskhris'
								]
							}
				);
			}
		),
		Qe(),
		sa(),
		na('ojxrft', (E) => {
			var N = wa(),
				r = Q(N),
				u = y(r, 2),
				A = y(u, 2),
				p = y(A, 2),
				h = y(p, 2),
				D = y(h, 2),
				b = y(D, 2),
				g = y(b, 4),
				x = y(g, 2),
				S = y(x, 2),
				w = y(S, 2),
				L = y(w, 2);
			{
				var I = (R) => {
					var ne = Ea(),
						ie = Q(ne),
						ge = y(ie, 4);
					{
						var he = (Y) => {
							var se = Te(),
								Ee = Q(se);
							(ca(
								Ee,
								1,
								() => (O(f()), U(() => f().tags)),
								fa,
								(we, ye) => {
									var oe = ha();
									(Z(() => T(oe, 'content', k(ye))), z(we, oe));
								}
							),
								z(Y, se));
						};
						ue(ge, (Y) => {
							(O(f()), U(() => f().tags) && Y(he));
						});
					}
					(Z(() => T(ie, 'content', (O(f()), U(() => f().publishedTime)))), z(R, ne));
				};
				ue(L, (R) => {
					m() === 'article' && f() && R(I);
				});
			}
			var $ = y(L, 2);
			(ia(
				$,
				() => (
					k(v),
					U(() => `<script type="application/ld+json">${JSON.stringify(k(v))}<\/script>`)
				)
			),
				Z(() => {
					(T(r, 'content', d()),
						T(u, 'href', k(o)),
						T(A, 'content', m()),
						T(p, 'content', k(o)),
						T(h, 'content', i()),
						T(D, 'content', d()),
						T(b, 'content', k(n)),
						T(g, 'content', k(o)),
						T(x, 'content', i()),
						T(S, 'content', d()),
						T(w, 'content', k(n)));
				}),
				ea(() => {
					aa.title = i() ?? '';
				}),
				z(E, N));
		}),
		Ze(),
		l());
}
export { Na as S, ca as e, fa as i, T as s };
