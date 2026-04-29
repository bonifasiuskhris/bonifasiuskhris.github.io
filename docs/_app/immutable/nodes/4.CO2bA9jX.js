import { a as c, f as d } from '../chunks/B6QB5288.js';
import '../chunks/DPjcJl7c.js';
import {
	v as L,
	f as N,
	x as P,
	s as o,
	y as r,
	t as e,
	a as t,
	u as s,
	w as O
} from '../chunks/1g9Fanb8.js';
import { s as g } from '../chunks/vtszmXFS.js';
import { i as A } from '../chunks/Dv3lWn-M.js';
import { S as T, e as U, s as D, i as W } from '../chunks/5P17nAVr.js';
import { i as $ } from '../chunks/oPU-xI05.js';
import { p as q } from '../chunks/DQYaZlBt.js';
const F = async ({ fetch: l }) => ({ posts: await (await l('/api/posts')).json() }),
	sa = Object.freeze(
		Object.defineProperty({ __proto__: null, load: F }, Symbol.toStringTag, { value: 'Module' })
	);
var G = d('<p class="text-base-content/80 mb-4"> </p>'),
	H = d(
		'<div class="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300"><div class="card-body"><h2 class="card-title text-2xl mb-2"><a class="hover:text-primary transition-colors"> </a></h2> <p class="text-sm text-base-content/60 mb-4"> </p> <!> <div class="card-actions justify-end mt-auto"><a class="btn btn-primary btn-sm">Read More</a></div></div></div>'
	),
	J = d(
		'<div class="text-center py-12 text-base-content/60"><p class="text-xl">No posts found.</p> <p>Check back later for new articles!</p></div>'
	),
	Q = d(
		'<!> <div class="mb-12"><h1 class="text-4xl font-bold mb-8 text-center">Blog</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"></div> <!></div>',
		1
	);
function oa(l, v) {
	L(v, !1);
	let u = q(v, 'data', 8);
	const { posts: x } = u();
	$();
	var y = Q(),
		w = N(y);
	T(w, {
		title: 'Blog | Bonifasius Khrisna Wicaksono',
		description:
			'Read the latest articles about web development, AI Agents, project management, and technology.'
	});
	var S = o(w, 2),
		m = o(r(S), 2);
	(U(
		m,
		5,
		() => x,
		W,
		(i, a) => {
			var p = H(),
				j = r(p),
				f = r(j),
				b = r(f),
				z = r(b, !0);
			(e(b), e(f));
			var _ = o(f, 2),
				C = r(_, !0);
			e(_);
			var k = o(_, 2);
			{
				var E = (n) => {
					var h = G(),
						K = r(h, !0);
					(e(h), O(() => g(K, (t(a), s(() => t(a).meta.description)))), c(n, h));
				};
				A(k, (n) => {
					(t(a), s(() => t(a).meta.description) && n(E));
				});
			}
			var B = o(k, 2),
				I = r(B);
			(e(B),
				e(j),
				e(p),
				O(
					(n) => {
						(D(b, 'href', (t(a), s(() => `/blog/${t(a).path}`))),
							g(z, (t(a), s(() => t(a).meta.title))),
							g(C, n),
							D(I, 'href', (t(a), s(() => `/blog/${t(a).path}`))));
					},
					[
						() => (
							t(a),
							s(() =>
								new Date(t(a).meta.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})
							)
						)
					]
				),
				c(i, p));
		}
	),
		e(m));
	var M = o(m, 2);
	{
		var R = (i) => {
			var a = J();
			c(i, a);
		};
		A(M, (i) => {
			s(() => x.length === 0) && i(R);
		});
	}
	(e(S), c(l, y), P());
}
export { oa as component, sa as universal };
