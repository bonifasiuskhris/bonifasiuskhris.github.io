const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../chunks/CXFFB1r1.js',
			'../chunks/B6QB5288.js',
			'../chunks/1g9Fanb8.js',
			'../chunks/DPjcJl7c.js',
			'../chunks/oy_X1v1P.js'
		])
) => i.map((i) => d[i]);
import { _ as M, c as S } from '../chunks/Bya9zY-Y.js';
import { a as E, f as O } from '../chunks/B6QB5288.js';
import '../chunks/DPjcJl7c.js';
import {
	v as P,
	f as D,
	w as T,
	x as V,
	a as f,
	u as o,
	y as s,
	s as m,
	t as n,
	n as $,
	k as g
} from '../chunks/1g9Fanb8.js';
import { s as x } from '../chunks/vtszmXFS.js';
import { S as q, s as C } from '../chunks/5P17nAVr.js';
import { i as R } from '../chunks/oPU-xI05.js';
import { p as z } from '../chunks/DQYaZlBt.js';
const H = (r, e, d) => {
		const a = r[e];
		return a
			? typeof a == 'function'
				? a()
				: Promise.resolve(a)
			: new Promise((t, l) => {
					(typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
						l.bind(
							null,
							new Error(
								'Unknown variable dynamic import: ' +
									e +
									(e.split('/').length !== d
										? '. Note that variables only represent file names one level deep.'
										: '')
							)
						)
					);
				});
	},
	I = async ({ params: r }) => {
		try {
			const e = await H(
				Object.assign({
					'../../../posts/my-first-ai-agent.md': () =>
						M(
							() => import('../chunks/CXFFB1r1.js'),
							__vite__mapDeps([0, 1, 2, 3, 4]),
							import.meta.url
						)
				}),
				`../../../posts/${r.slug}.md`,
				5
			);
			return { content: e.default, meta: e.metadata };
		} catch {
			throw new Error(`Could not find ${r.slug}`);
		}
	},
	Q = Object.freeze(
		Object.defineProperty({ __proto__: null, load: I }, Symbol.toStringTag, { value: 'Module' })
	);
var K = O(
	'<!> <article class="prose prose-lg dark:prose-invert max-w-none mb-16 mt-8"><header class="mb-12 border-b border-base-300 pb-8 text-center"><h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight"> </h1> <div class="text-base-content/60 flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <time> </time></div></header> <div class="prose-img:rounded-xl prose-img:shadow-lg prose-a:text-primary hover:prose-a:text-primary-focus prose-headings:font-bold"><!></div> <footer class="mt-16 pt-8 border-t border-base-300 text-center"><a href="/blog" class="btn btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Back to Blog</a></footer></article>',
	1
);
function X(r, e) {
	P(e, !1);
	let d = z(e, 'data', 8);
	const { content: a, meta: t } = d();
	R();
	var l = K(),
		h = D(l);
	{
		let i = g(() => o(() => `${t.title} | Bonifasius Khrisna Wicaksono`)),
			v = g(() =>
				o(() => t.description || `Read about ${t.title} on Bonifasius Khrisna Wicaksono's blog.`)
			),
			B = g(() => o(() => ({ publishedTime: t.date, tags: t.tags || [] })));
		q(h, {
			get title() {
				return f(i);
			},
			get description() {
				return f(v);
			},
			type: 'article',
			get article() {
				return f(B);
			}
		});
	}
	var b = m(h, 2),
		c = s(b),
		p = s(c),
		k = s(p, !0);
	n(p);
	var _ = m(p, 2),
		u = m(s(_), 2),
		y = s(u, !0);
	(n(u), n(_), n(c));
	var w = m(c, 2),
		j = s(w);
	(S(
		j,
		() => a,
		(i, v) => {
			v(i, {});
		}
	),
		n(w),
		$(2),
		n(b),
		T(
			(i) => {
				(x(
					k,
					o(() => t.title)
				),
					C(
						u,
						'datetime',
						o(() => t.date)
					),
					x(y, i));
			},
			[
				() =>
					o(() =>
						new Date(t.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})
					)
			]
		),
		E(r, l),
		V());
}
export { X as component, Q as universal };
