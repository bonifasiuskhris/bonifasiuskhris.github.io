import { c as $, a as v, f as F, d as K } from '../chunks/B6QB5288.js';
import '../chunks/DPjcJl7c.js';
import { o as V } from '../chunks/BO9nJdxR.js';
import {
	B as ee,
	C as ae,
	v as Y,
	c as q,
	f as x,
	a as E,
	x as G,
	z as I,
	y as e,
	t as a,
	w as J,
	ay as te,
	az as oe,
	s as u,
	n as R,
	u as re
} from '../chunks/1g9Fanb8.js';
import { e as se, s as ne } from '../chunks/vtszmXFS.js';
import { i as M, s as L, a as j } from '../chunks/Dv3lWn-M.js';
import { t as f, s as B } from '../chunks/CrRG2AjM.js';
import { i as N, p as le } from '../chunks/oPU-xI05.js';
function W(g, n, l, c, h) {
	ee && ae();
	var r = n.$$slots?.[l],
		d = !1;
	(r === !0 && ((r = n.children), (d = !0)), r === void 0 || r(g, d ? () => c : c));
}
const ie = !0,
	de = !0,
	ve = 'ignore',
	ke = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, prerender: ie, ssr: de, trailingSlash: ve },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	);
var fe = K(
		'<svg class="h-3 w-3 text-yellow-500 absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>'
	),
	ce = K(
		'<svg class="h-3 w-3 text-orange_pantone-400 absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>'
	),
	me = F(
		'<button aria-label="Toggle theme" title="Toggle between light and dark theme"><span><!></span></button>'
	);
function D(g, n) {
	Y(n, !1);
	const l = () => j(f, '$theme', c),
		[c, h] = L();
	let r = I(!1);
	V(() => {
		(f.init(), q(r, !0));
	});
	function d() {
		f.toggle();
	}
	N();
	var p = $(),
		w = x(p);
	{
		var y = (_) => {
			var t = me(),
				s = e(t),
				i = e(s);
			{
				var b = (o) => {
						var m = fe();
						v(o, m);
					},
					k = (o) => {
						var m = ce();
						v(o, m);
					};
				M(i, (o) => {
					l() === 'light' ? o(b) : o(k, -1);
				});
			}
			(a(s),
				a(t),
				J(() => {
					(B(
						t,
						1,
						`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${l() === 'dark' ? 'bg-orange_pantone-600 focus:ring-orange_pantone-500' : 'bg-gray-200 focus:ring-orange_pantone-500'}`,
						'svelte-1cmi4dh'
					),
						B(
							s,
							1,
							`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${l() === 'dark' ? 'translate-x-6' : 'translate-x-1'}`
						));
				}),
				se('click', t, d),
				v(_, t));
		};
		M(w, (_) => {
			E(r) && _(y);
		});
	}
	(v(g, p), G(), h());
}
var ue = F(
	'<div><div class="fixed top-4 right-4 z-50 hidden sm:block"><!></div> <div class="navbar bg-base-100 shadow-md sticky top-0 z-40"><div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label> <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><a href="/">Home</a></li> <li><a href="/resume">Resume</a></li> <li><a href="/projects">Projects</a></li> <li><a href="/blog">Blog</a></li> <li class="mt-2"><!></li></ul></div> <a href="/" class="btn btn-ghost normal-case text-xl font-bold">bonifasiuskhris</a></div> <div class="navbar-end hidden sm:flex"><ul class="menu menu-horizontal px-1"><li><a href="/">Home</a></li> <li><a href="/resume">Resume</a></li> <li><a href="/projects">Projects</a></li> <li><a href="/blog">Blog</a></li></ul></div></div> <main class="flex-grow max-w-screen-md mx-auto w-full py-4 md:py-8 px-4"><div class="space-y-8"><!></div></main> <footer class="footer footer-center p-4 bg-base-200 text-base-content mt-auto"><div><p> </p></div></footer></div> <!>',
	1
);
function ze(g, n) {
	Y(n, !1);
	const l = () => j(le, '$page', h),
		c = () => j(f, '$theme', h),
		[h, r] = L(),
		d = I();
	(V(() => {
		f && typeof f.init == 'function' && f.init();
	}),
		te(
			() => l(),
			() => {
				q(d, l().url.pathname.startsWith('/admin'));
			}
		),
		oe(),
		N());
	var p = $(),
		w = x(p);
	{
		var y = (t) => {
				var s = $(),
					i = x(s);
				(W(i, n, 'default', {}), v(t, s));
			},
			_ = (t) => {
				var s = ue(),
					i = x(s),
					b = e(i),
					k = e(b);
				(D(k, {}), a(b));
				var o = u(b, 2),
					m = e(o),
					T = e(m),
					C = u(e(T), 2),
					A = u(e(C), 8),
					Q = e(A);
				(D(Q, {}), a(A), a(C), a(T), R(2), a(m), R(2), a(o));
				var z = u(o, 2),
					P = e(z),
					U = e(P);
				(W(U, n, 'default', {}), a(P), a(z));
				var H = u(z, 2),
					S = e(H),
					O = e(S),
					X = e(O);
				(a(O),
					a(S),
					a(H),
					a(i),
					u(i, 2),
					J(
						(Z) => {
							(B(
								i,
								1,
								`flex flex-col min-h-screen transition-colors duration-300 ${c() === 'light' ? 'bg-white' : 'bg-indigo_dye-100'}`
							),
								ne(
									X,
									`Copyright © ${Z ?? ''} - All right reserved by Bonifasius Khrisna Wicaksono`
								));
						},
						[() => re(() => new Date().getFullYear())]
					),
					v(t, s));
			};
		M(w, (t) => {
			E(d) ? t(y) : t(_, -1);
		});
	}
	(v(g, p), G(), r());
}
export { ze as component, ke as universal };
