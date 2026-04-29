import {
	w as M,
	B as i,
	H as v,
	U as l,
	C as T,
	d as g,
	V as H,
	K as p,
	W as w,
	X as c,
	Y as R,
	Z as b,
	_ as N,
	a0 as D,
	a1 as F,
	a2 as O,
	A as S,
	a3 as L,
	a4 as P,
	I as h
} from './1g9Fanb8.js';
import { b as m } from './B6QB5288.js';
function I(u, E, n = !1, r = !1, s = !1, e = !1) {
	var t = u,
		f = '';
	if (n) {
		var _ = u;
		i && (t = v(l(_)));
	}
	M(() => {
		var d = g;
		if (f === (f = E() ?? '')) {
			i && T();
			return;
		}
		if (n && !i) {
			((d.nodes = null), (_.innerHTML = f), f !== '' && m(l(_), _.lastChild));
			return;
		}
		if ((d.nodes !== null && (H(d.nodes.start, d.nodes.end), (d.nodes = null)), f !== '')) {
			if (i) {
				p.data;
				for (var a = T(), C = a; a !== null && (a.nodeType !== w || a.data !== ''); )
					((C = a), (a = c(a)));
				if (a === null) throw (R(), b);
				(m(p, C), (t = v(a)));
				return;
			}
			var A = r ? D : s ? F : void 0,
				y = N(r ? 'svg' : s ? 'math' : 'template', A);
			y.innerHTML = f;
			var o = r || s ? y : y.content;
			if ((m(l(o), o.lastChild), r || s)) for (; l(o); ) t.before(l(o));
			else t.before(o);
		}
	});
}
function Y(u, E) {
	let n = null,
		r = i;
	var s;
	if (i) {
		n = p;
		for (var e = l(document.head); e !== null && (e.nodeType !== w || e.data !== u); ) e = c(e);
		if (e === null) h(!1);
		else {
			var t = c(e);
			(e.remove(), v(t));
		}
	}
	i || (s = document.head.appendChild(O()));
	try {
		S(() => E(s), L | P);
	} finally {
		r && (h(!0), v(n));
	}
}
export { I as a, Y as h };
