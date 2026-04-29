import {
	M as g,
	N as d,
	O as f,
	u as m,
	Q as u,
	R as _,
	a as l,
	T as v,
	m as h
} from './1g9Fanb8.js';
import { s as k } from './Bc_fbgxD.js';
function N(s = !1) {
	const e = g,
		t = e.l.u;
	if (!t) return;
	let a = () => v(e.s);
	if (s) {
		let n = 0,
			r = {};
		const b = h(() => {
			let c = !1;
			const i = e.s;
			for (const o in i) i[o] !== r[o] && ((r[o] = i[o]), (c = !0));
			return (c && n++, n);
		});
		a = () => l(b);
	}
	(t.b.length &&
		d(() => {
			(p(e, a), u(t.b));
		}),
		f(() => {
			const n = m(() => t.m.map(_));
			return () => {
				for (const r of n) typeof r == 'function' && r();
			};
		}),
		t.a.length &&
			f(() => {
				(p(e, a), u(t.a));
			}));
}
function p(s, e) {
	if (s.l.s) for (const t of s.l.s) l(t);
	e();
}
const x = () => {
		const s = k;
		return {
			page: { subscribe: s.page.subscribe },
			navigating: { subscribe: s.navigating.subscribe },
			updated: s.updated
		};
	},
	O = {
		subscribe(s) {
			return x().page.subscribe(s);
		}
	};
export { N as i, O as p };
