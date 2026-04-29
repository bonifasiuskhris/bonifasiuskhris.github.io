import { B as u } from './1g9Fanb8.js';
import { w as d } from './BO9nJdxR.js';
const c = [
	...` 	
\r\f \v\uFEFF`
];
function m(e, s, l) {
	var t = e == null ? '' : '' + e;
	if ((s && (t = t ? t + ' ' + s : s), l)) {
		for (var r of Object.keys(l))
			if (l[r]) t = t ? t + ' ' + r : r;
			else if (t.length)
				for (var a = r.length, i = 0; (i = t.indexOf(r, i)) >= 0; ) {
					var n = i + a;
					(i === 0 || c.includes(t[i - 1])) && (n === t.length || c.includes(t[n]))
						? (t = (i === 0 ? '' : t.substring(0, i)) + t.substring(n + 1))
						: (i = n);
				}
	}
	return t === '' ? null : t;
}
function w(e, s, l, t, r, a) {
	var i = e.__className;
	if (u || i !== l || i === void 0) {
		var n = m(l, t, a);
		((!u || n !== e.getAttribute('class')) &&
			(n == null ? e.removeAttribute('class') : s ? (e.className = n) : e.setAttribute('class', n)),
			(e.__className = l));
	} else if (a && r !== a)
		for (var f in a) {
			var o = !!a[f];
			(r == null || o !== !!r[f]) && e.classList.toggle(f, o);
		}
	return a;
}
function b() {
	const { subscribe: e, set: s, update: l } = d('dark');
	return {
		subscribe: e,
		set: s,
		update: l,
		toggle: () => l((t) => (t === 'dark' ? 'light' : 'dark')),
		init: () => {
			{
				const t = localStorage.getItem('theme');
				if (t) {
					s(t);
					return;
				}
				const r = window.matchMedia('(prefers-color-scheme: dark)').matches;
				s(r ? 'dark' : 'light');
			}
		},
		save: (t) => {
			(localStorage.setItem('theme', t),
				document.documentElement.setAttribute('data-theme', t),
				document.documentElement.classList.toggle('dark', t === 'dark'));
		}
	};
}
const g = b();
g.subscribe((e) => {
	g.save(e);
});
export { w as s, g as t };
