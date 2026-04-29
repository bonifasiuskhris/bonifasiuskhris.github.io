const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.ADNPuNd6.js',
			'../chunks/B6QB5288.js',
			'../chunks/1g9Fanb8.js',
			'../chunks/DPjcJl7c.js',
			'../chunks/BO9nJdxR.js',
			'../chunks/vtszmXFS.js',
			'../chunks/Dv3lWn-M.js',
			'../chunks/CrRG2AjM.js',
			'../chunks/oPU-xI05.js',
			'../chunks/Bc_fbgxD.js',
			'../assets/0.Ta8haJb1.css',
			'../nodes/1.C5K13ZAs.js',
			'../nodes/2.CUWBxb0V.js',
			'../chunks/5P17nAVr.js',
			'../chunks/oy_X1v1P.js',
			'../chunks/DQYaZlBt.js',
			'../chunks/Bf5-JeAY.js',
			'../nodes/3.DQFz2RRe.js',
			'../nodes/4.CO2bA9jX.js',
			'../nodes/5.DudGmw8X.js',
			'../chunks/Bya9zY-Y.js',
			'../nodes/6.h6PqBmr2.js',
			'../nodes/7.B18Rz5qj.js'
		])
) => i.map((i) => d[i]);
import { c as P, _ as f } from '../chunks/Bya9zY-Y.js';
import {
	M as B,
	e as q,
	aM as F,
	u as H,
	d as J,
	b2 as K,
	S as Q,
	c as p,
	L as U,
	a as m,
	b3 as W,
	aD as X,
	z as Z,
	v as $,
	N as tt,
	O as et,
	b4 as rt,
	f as O,
	s as at,
	x as st,
	b5 as R,
	y as ot,
	t as nt,
	b6 as w,
	w as it
} from '../chunks/1g9Fanb8.js';
import { h as ct, m as ut, u as mt, s as ft } from '../chunks/vtszmXFS.js';
import { a as v, c as x, f as V, t as dt } from '../chunks/B6QB5288.js';
import { o as _t } from '../chunks/BO9nJdxR.js';
import { i as L } from '../chunks/Dv3lWn-M.js';
import { p as T } from '../chunks/DQYaZlBt.js';
function I(a, t) {
	return a === t || a?.[Q] === t;
}
function A(a = {}, t, s, c) {
	var n = B.r,
		r = J;
	return (
		q(() => {
			var e, o;
			return (
				F(() => {
					((e = o),
						(o = []),
						H(() => {
							a !== s(...o) && (t(a, ...o), e && I(s(...e), a) && t(null, ...e));
						}));
				}),
				() => {
					let u = r;
					for (; u !== n && u.parent !== null && u.parent.f & K; ) u = u.parent;
					const E = () => {
							o && I(s(...o), a) && t(null, ...o);
						},
						y = u.teardown;
					u.teardown = () => {
						(E(), y?.());
					};
				}
			);
		}),
		a
	);
}
function lt(a) {
	return class extends ht {
		constructor(t) {
			super({ component: a, ...t });
		}
	};
}
class ht {
	#e;
	#t;
	constructor(t) {
		var s = new Map(),
			c = (r, e) => {
				var o = Z(e, !1, !1);
				return (s.set(r, o), o);
			};
		const n = new Proxy(
			{ ...(t.props || {}), $$events: {} },
			{
				get(r, e) {
					return m(s.get(e) ?? c(e, Reflect.get(r, e)));
				},
				has(r, e) {
					return e === U ? !0 : (m(s.get(e) ?? c(e, Reflect.get(r, e))), Reflect.has(r, e));
				},
				set(r, e, o) {
					return (p(s.get(e) ?? c(e, o), o), Reflect.set(r, e, o));
				}
			}
		);
		((this.#t = (t.hydrate ? ct : ut)(t.component, {
			target: t.target,
			anchor: t.anchor,
			props: n,
			context: t.context,
			intro: t.intro ?? !1,
			recover: t.recover,
			transformError: t.transformError
		})),
			(!t?.props?.$$host || t.sync === !1) && W(),
			(this.#e = n.$$events));
		for (const r of Object.keys(this.#t))
			r === '$set' ||
				r === '$destroy' ||
				r === '$on' ||
				X(this, r, {
					get() {
						return this.#t[r];
					},
					set(e) {
						this.#t[r] = e;
					},
					enumerable: !0
				});
		((this.#t.$set = (r) => {
			Object.assign(n, r);
		}),
			(this.#t.$destroy = () => {
				mt(this.#t);
			}));
	}
	$set(t) {
		this.#t.$set(t);
	}
	$on(t, s) {
		this.#e[t] = this.#e[t] || [];
		const c = (...n) => s.call(this, ...n);
		return (
			this.#e[t].push(c),
			() => {
				this.#e[t] = this.#e[t].filter((n) => n !== c);
			}
		);
	}
	$destroy() {
		this.#t.$destroy();
	}
}
const Tt = {};
var vt = V(
		'<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
	),
	gt = V('<!> <!>', 1);
function bt(a, t) {
	$(t, !0);
	let s = T(t, 'components', 23, () => []),
		c = T(t, 'data_0', 3, null),
		n = T(t, 'data_1', 3, null);
	(tt(() => t.stores.page.set(t.page)),
		et(() => {
			(t.stores, t.page, t.constructors, s(), t.form, c(), n(), t.stores.page.notify());
		}));
	let r = R(!1),
		e = R(!1),
		o = R(null);
	_t(() => {
		const i = t.stores.page.subscribe(() => {
			m(r) &&
				(p(e, !0),
				rt().then(() => {
					p(o, document.title || 'untitled page', !0);
				}));
		});
		return (p(r, !0), i);
	});
	const u = w(() => t.constructors[1]);
	var E = gt(),
		y = O(E);
	{
		var S = (i) => {
				const d = w(() => t.constructors[0]);
				var _ = x(),
					g = O(_);
				(P(
					g,
					() => m(d),
					(l, h) => {
						A(
							h(l, {
								get data() {
									return c();
								},
								get form() {
									return t.form;
								},
								get params() {
									return t.page.params;
								},
								children: (b, yt) => {
									var D = x(),
										Y = O(D);
									(P(
										Y,
										() => m(u),
										(G, N) => {
											A(
												N(G, {
													get data() {
														return n();
													},
													get form() {
														return t.form;
													},
													get params() {
														return t.page.params;
													}
												}),
												(z) => (s()[1] = z),
												() => s()?.[1]
											);
										}
									),
										v(b, D));
								},
								$$slots: { default: !0 }
							}),
							(b) => (s()[0] = b),
							() => s()?.[0]
						);
					}
				),
					v(i, _));
			},
			k = (i) => {
				const d = w(() => t.constructors[0]);
				var _ = x(),
					g = O(_);
				(P(
					g,
					() => m(d),
					(l, h) => {
						A(
							h(l, {
								get data() {
									return c();
								},
								get form() {
									return t.form;
								},
								get params() {
									return t.page.params;
								}
							}),
							(b) => (s()[0] = b),
							() => s()?.[0]
						);
					}
				),
					v(i, _));
			};
		L(y, (i) => {
			t.constructors[1] ? i(S) : i(k, -1);
		});
	}
	var M = at(y, 2);
	{
		var C = (i) => {
			var d = vt(),
				_ = ot(d);
			{
				var g = (l) => {
					var h = dt();
					(it(() => ft(h, m(o))), v(l, h));
				};
				L(_, (l) => {
					m(e) && l(g);
				});
			}
			(nt(d), v(i, d));
		};
		L(M, (i) => {
			m(r) && i(C);
		});
	}
	(v(a, E), st());
}
const At = lt(bt),
	Dt = [
		() =>
			f(
				() => import('../nodes/0.ADNPuNd6.js'),
				__vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
				import.meta.url
			),
		() =>
			f(
				() => import('../nodes/1.C5K13ZAs.js'),
				__vite__mapDeps([11, 1, 2, 5, 9, 4]),
				import.meta.url
			),
		() =>
			f(
				() => import('../nodes/2.CUWBxb0V.js'),
				__vite__mapDeps([12, 1, 2, 3, 4, 6, 13, 14, 8, 9, 15, 7, 16]),
				import.meta.url
			),
		() =>
			f(
				() => import('../nodes/3.DQFz2RRe.js'),
				__vite__mapDeps([17, 1, 2, 3, 14]),
				import.meta.url
			),
		() =>
			f(
				() => import('../nodes/4.CO2bA9jX.js'),
				__vite__mapDeps([18, 1, 2, 3, 5, 6, 4, 13, 14, 8, 9, 15]),
				import.meta.url
			),
		() =>
			f(
				() => import('../nodes/5.DudGmw8X.js'),
				__vite__mapDeps([19, 20, 2, 6, 4, 1, 3, 5, 13, 14, 8, 9, 15]),
				import.meta.url
			),
		() =>
			f(
				() => import('../nodes/6.h6PqBmr2.js'),
				__vite__mapDeps([21, 1, 2, 3, 13, 6, 4, 14, 8, 9, 15]),
				import.meta.url
			),
		() =>
			f(
				() => import('../nodes/7.B18Rz5qj.js'),
				__vite__mapDeps([22, 1, 2, 3, 13, 6, 4, 14, 8, 9, 15, 16]),
				import.meta.url
			)
	],
	It = [],
	Vt = {
		'/': [2],
		'/admin': [3],
		'/blog': [4],
		'/blog/[slug]': [5],
		'/projects': [6],
		'/resume': [7]
	},
	j = {
		handleError: ({ error: a }) => {
			console.error(a);
		},
		reroute: () => {},
		transport: {}
	},
	Et = Object.fromEntries(Object.entries(j.transport).map(([a, t]) => [a, t.decode])),
	jt = Object.fromEntries(Object.entries(j.transport).map(([a, t]) => [a, t.encode])),
	St = !1,
	kt = (a, t) => Et[a](t);
export {
	kt as decode,
	Et as decoders,
	Vt as dictionary,
	jt as encoders,
	St as hash,
	j as hooks,
	Tt as matchers,
	Dt as nodes,
	At as root,
	It as server_loads
};
