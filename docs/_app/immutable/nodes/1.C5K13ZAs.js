import { a as i, f as h } from '../chunks/B6QB5288.js';
import { v as g, f as v, w as d, x as l, y as s, t as a, s as x } from '../chunks/1g9Fanb8.js';
import { s as o } from '../chunks/vtszmXFS.js';
import { s as _, p } from '../chunks/Bc_fbgxD.js';
const $ = {
	get error() {
		return p.error;
	},
	get status() {
		return p.status;
	}
};
_.updated.check;
const m = $;
var k = h('<h1> </h1> <p> </p>', 1);
function j(f, c) {
	g(c, !0);
	var t = k(),
		r = v(t),
		n = s(r, !0);
	a(r);
	var e = x(r, 2),
		u = s(e, !0);
	(a(e),
		d(() => {
			(o(n, m.status), o(u, m.error?.message));
		}),
		i(f, t),
		l());
}
export { j as component };
