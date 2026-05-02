/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	// Blog post data
	const blogPosts = {
		'building-scalable-web-applications': {
			title: 'Building Scalable Web Applications with Modern JavaScript',
			slug: 'building-scalable-web-applications',
			excerpt: 'Explore best practices and architectural patterns for creating maintainable and scalable web applications using modern JavaScript frameworks and tools.',
			content: `
# Building Scalable Web Applications with Modern JavaScript

In today's fast-paced digital landscape, building scalable web applications is more crucial than ever. As applications grow in complexity and user base, developers need to adopt architectural patterns and best practices that ensure maintainability and performance.

## Understanding Scalability

Scalability isn't just about handling more users; it's about building systems that can grow and adapt without becoming unmaintainable. This involves both technical scalability (performance, architecture) and team scalability (code organization, documentation).

### Key Principles

**1. Modular Architecture**
Breaking your application into smaller, reusable components is fundamental. This approach allows teams to work independently on different parts of the application while maintaining overall coherence.

**2. State Management**
Proper state management becomes critical as applications grow. Whether you're using Redux, MobX, or Context API, having a clear strategy for managing application state prevents bugs and improves performance.

**3. Code Splitting and Lazy Loading**
Modern bundlers like Webpack and Vite support code splitting out of the box. By splitting your code into smaller chunks and loading them on demand, you can significantly improve initial load times.

## Modern JavaScript Patterns

### Async/Await and Promise Handling

\`\`\`javascript
// Better error handling with async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}
\`\`\`

### Functional Programming Concepts

Functional programming concepts like immutability, pure functions, and higher-order functions can make your code more predictable and easier to test.

## Performance Optimization

### Virtual DOM and Reconciliation

Understanding how your framework handles DOM updates is crucial for performance. React's reconciliation algorithm, for example, can be optimized with proper key usage and shouldComponentUpdate logic.

### Memory Management

JavaScript's garbage collection is automatic, but memory leaks can still occur. Be mindful of:
- Event listeners that aren't properly removed
- Closures that retain unnecessary references
- Global variables that accumulate data

## Best Practices for Team Collaboration

### Code Consistency

Establish coding standards and use tools like ESLint and Prettier to enforce them. Consistent code is easier to read, review, and maintain.

### Documentation

Good documentation is essential for scalable projects. This includes:
- API documentation
- Component documentation
- Architecture decision records (ADRs)
- Setup and deployment guides

### Testing Strategy

A comprehensive testing strategy should include:
- Unit tests for individual functions and components
- Integration tests for API endpoints and user flows
- End-to-end tests for critical user journeys

## Conclusion

Building scalable web applications requires careful planning, consistent implementation, and continuous optimization. By following these principles and staying updated with modern JavaScript practices, you can create applications that grow smoothly with your user base and development team.

Remember that scalability is not a one-time achievement but an ongoing process of refinement and improvement.
			`,
			date: '2024-01-15',
			readTime: '8 min read',
			category: 'Development',
			tags: ['JavaScript', 'Architecture', 'Best Practices', 'Scalability'],
			author: 'Bonifasius Khrisna Wicaksono',
			featured: true,
			popular: true,
			wordCount: 1200,
			toc: [
				{ id: 'understanding-scalability', title: 'Understanding Scalability', level: 2 },
				{ id: 'key-principles', title: 'Key Principles', level: 2 },
				{ id: 'modern-javascript-patterns', title: 'Modern JavaScript Patterns', level: 2 },
				{ id: 'performance-optimization', title: 'Performance Optimization', level: 2 },
				{ id: 'best-practices-team-collaboration', title: 'Best Practices for Team Collaboration', level: 2 },
				{ id: 'conclusion', title: 'Conclusion', level: 2 }
			]
		},
		'frontend-development-trends-2024': {
			title: 'The Future of Frontend Development: Trends to Watch in 2024',
			slug: 'frontend-development-trends-2024',
			excerpt: 'Discover the latest trends shaping frontend development, from AI-powered tools to advanced CSS techniques and emerging frameworks.',
			content: `
# The Future of Frontend Development: Trends to Watch in 2024

As we move through 2024, the frontend development landscape continues to evolve at a rapid pace. New tools, frameworks, and approaches are emerging that promise to reshape how we build web applications.

## AI-Powered Development Tools

Artificial Intelligence is no longer just a buzzword in web development. Tools like GitHub Copilot, ChatGPT, and specialized AI coding assistants are becoming integral parts of the development workflow.

### Impact on Development
- **Code Generation**: AI can generate boilerplate code, reducing repetitive tasks
- **Bug Detection**: Advanced pattern recognition helps identify potential issues
- **Documentation**: Automated documentation generation from code

## Advanced CSS Techniques

CSS continues to evolve with powerful new features:

### Container Queries
Container queries allow components to respond to their container's size rather than the viewport, enabling truly modular design systems.

### CSS Cascade Layers
Better control over the cascade with explicit layer ordering, making CSS architecture more maintainable.

### Color Functions
New color spaces and functions provide more vibrant and accessible color options.

## The Rise of Edge Computing

Frontend developers are increasingly leveraging edge computing for:
- **Faster Load Times**: Content delivered from locations closer to users
- **Better Performance**: Reduced latency for dynamic content
- **Improved SEO**: Better Core Web Vitals scores

## Conclusion

Staying current with these trends is essential for frontend developers who want to build modern, efficient, and user-friendly applications. The key is to evaluate each trend critically and adopt those that truly improve your development process and user experience.
			`,
			date: '2024-01-10',
			readTime: '6 min read',
			category: 'Frontend',
			tags: ['Frontend', 'Trends', '2024', 'Web Development'],
			author: 'Bonifasius Khrisna Wicaksono',
			featured: true,
			popular: false,
			wordCount: 800,
			toc: [
				{ id: 'ai-powered-development-tools', title: 'AI-Powered Development Tools', level: 2 },
				{ id: 'advanced-css-techniques', title: 'Advanced CSS Techniques', level: 2 },
				{ id: 'rise-edge-computing', title: 'The Rise of Edge Computing', level: 2 },
				{ id: 'conclusion', title: 'Conclusion', level: 2 }
			]
		},
		'mastering-react-hooks': {
			title: 'Mastering React Hooks: A Comprehensive Guide',
			slug: 'mastering-react-hooks',
			excerpt: 'Deep dive into React Hooks with practical examples and best practices for state management, side effects, and custom hooks.',
			content: `
# Mastering React Hooks: A Comprehensive Guide

React Hooks have revolutionized how we write React components, making functional components more powerful and easier to test. This guide will take you through everything you need to know about React Hooks.

## Understanding the Basics

React Hooks allow you to use state and other React features in functional components. They were introduced in React 16.8 and have since become the standard way to write React components.

### useState Hook

The \`useState\` hook is the most basic hook that allows you to add state to functional components.

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useEffect Hook

The \`useEffect\` hook lets you perform side effects in functional components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Advanced Hook Patterns

### Custom Hooks

Custom hooks are JavaScript functions whose names start with "use" and that may call other hooks. They allow you to extract component logic into reusable functions.

\`\`\`javascript
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
\`\`\`

### Rules of Hooks

React has two main rules for hooks:

1. **Only call hooks at the top level**: Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions**: Call them from React functional components or custom hooks

## Performance Optimization with Hooks

### useMemo Hook

Use useMemo to memoize expensive calculations:

\`\`\`javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

### useCallback Hook

Use useCallback to memoize functions:

\`\`\`javascript
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Best Practices Summary

1. **Start with functional components** and use hooks for state and side effects
2. **Keep hooks simple** - one hook per concern
3. **Use the dependency array correctly** - include all values used in the effect
4. **Extract custom hooks** when you have reusable logic
5. **Test your hooks** thoroughly, especially custom ones
6. **Use ESLint plugin** for React hooks to catch common mistakes

## Conclusion

React Hooks have fundamentally changed how we build React applications. They provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. By following the patterns and best practices outlined in this guide, you'll be able to write more readable, maintainable, and testable React components.

Remember that mastering hooks takes practice. Start with the basic hooks (useState, useEffect) and gradually incorporate more advanced patterns as you become comfortable with the fundamentals.
			`,
			date: '2024-01-05',
			readTime: '12 min read',
			category: 'React',
			tags: ['React', 'JavaScript', 'Frontend', 'Hooks'],
			author: 'Bonifasius Khrisna Wicaksono',
			featured: false,
			popular: true,
			wordCount: 1500,
			toc: [
				{ id: 'understanding-basics', title: 'Understanding the Basics', level: 2 },
				{ id: 'advanced-hook-patterns', title: 'Advanced Hook Patterns', level: 2 },
				{ id: 'performance-optimization', title: 'Performance Optimization with Hooks', level: 2 },
				{ id: 'best-practices', title: 'Best Practices Summary', level: 2 },
				{ id: 'conclusion', title: 'Conclusion', level: 2 }
			]
		}
	};

	// Find the blog post by slug
	const post = blogPosts[params.slug];

	if (!post) {
		return {
			status: 404,
			error: new Error('Blog post not found')
		};
	}

	return {
		post
	};
}