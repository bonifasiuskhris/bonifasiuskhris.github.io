import { a as t, f as e } from './B6QB5288.js';
import './DPjcJl7c.js';
import { s as o, f as p, t as i, n as c } from './1g9Fanb8.js';
import { a as r } from './oy_X1v1P.js';
const l = {
		title: 'My First AI Agent Workflow',
		date: '2026-04-28T00:00:00.000Z',
		description: 'A quick dive into how I set up my first AI agent using OpenClaw.'
	},
	{ title: f, date: h, description: w } = l;
var u = e(
	'<p>Welcome to my very first blog post on this site!</p> <p>Today, I want to talk about <strong>AI Agents</strong> and how they are changing the landscape of automated workflows. Specifically, I’ve been experimenting with <code>OpenClaw</code> and <code>Hermes</code>.</p> <h2>What is an AI Agent?</h2> <p>An AI agent is essentially an intelligent program that can perceive its environment, make decisions, and take actions to achieve a specific goal.</p> <p>Unlike traditional scripts that follow rigid <code>if/else</code> logic, AI agents use Large Language Models (LLMs) as their “brain” to dynamically figure out <em>how</em> to solve a problem.</p> <h3>Why OpenClaw?</h3> <p>OpenClaw makes it incredibly easy to set up these workflows. Here is a simple example of how you might initialize an agent:</p> <pre class="language-javascript"></pre> <p>Stay tuned for more deep dives into how I use these tools in production!</p>',
	1
);
function y(s) {
	var a = u(),
		n = o(p(a), 14);
	(r(
		n,
		() => `<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Agent <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'openclaw'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myAgent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Agent</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
	name<span class="token operator">:</span> <span class="token string">'TaskMaster'</span><span class="token punctuation">,</span>
	model<span class="token operator">:</span> <span class="token string">'hermes-3'</span><span class="token punctuation">,</span>
	instructions<span class="token operator">:</span> <span class="token string">'You are an expert at organizing tasks.'</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myAgent<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">'Organize my project folders'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,
		!0
	),
		i(n),
		c(2),
		t(s, a));
}
export { y as default, l as metadata };
