import React from 'react'
import ParallaxHeader from './ParallaxHeader'
import { motion } from 'framer-motion'
import skills from '../data/skills'

function Icon({ name }) {
	switch ((name || '').toLowerCase()) {
		case 'react':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
					<g stroke="currentColor" strokeWidth="1" fill="none">
						<circle cx="12" cy="12" r="2" fill="currentColor" />
						<ellipse cx="12" cy="12" rx="6" ry="10" transform="rotate(0 12 12)" />
						<ellipse cx="12" cy="12" rx="6" ry="10" transform="rotate(60 12 12)" />
						<ellipse cx="12" cy="12" rx="6" ry="10" transform="rotate(120 12 12)" />
					</g>
				</svg>
			)
		case 'html':
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
					<path d="M3 3h18v18H3z" fill="#E34F26" />
					<path d="M7.5 8.5L4 12l3.5 3.5M16.5 8.5L20 12l-3.5 3.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			)
		case 'css':
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
					<path d="M3 3h18v18H3z" fill="#1572B6" />
					<path d="M8 7h8v2H8zM8 11h8v2H8zM8 15h5v2H8z" fill="#fff" />
				</svg>
			)
		case 'js':
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
					<rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
					<path d="M9.5 16.5v-6l4 3-4 3z" fill="#000" />
				</svg>
			)
		case 'ts':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<rect width="24" height="24" rx="2" fill="#3178C6" />
					<text x="6" y="16" fontSize="10" fill="#fff">TS</text>
				</svg>
			)
		case 'node':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<path d="M12 2l8 4v8l-8 6-8-6V6l8-4z" fill="#83CD29" />
				</svg>
			)
		case 'mongodb':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					{/* simplified MongoDB leaf */}
					<path d="M12 2s4 3 4.5 6.5S12 18 12 18s-4.5-8-4.5-9.5S12 2 12 2z" fill="#47A248" />
					<path d="M12 5c1 1.5 1.5 3 1.2 5-.4 2.7-1.9 6.5-1.9 6.5s-1.6-3.6-1.9-6.5c-.3-2 .2-3.5 1.2-5 .6-.9 1.1-.9 1.4 0z" fill="#3A8A35" opacity="0.95" />
				</svg>
			)
		case 'express':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<path d="M3 4h18v3H3zM3 10h12v3H3zM3 16h18v3H3z" fill="#000" />
				</svg>
			)
		case 'api':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<path d="M12 2l7 4v8l-7 6-7-6V6l7-4z" stroke="currentColor" fill="none" />
				</svg>
			)
		case 'git':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<path d="M3 12l6-6 6 6-6 6-6-6z" fill="#F05032" />
				</svg>
			)
		case 'vite':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<path d="M12 2l8 20H4L12 2z" fill="#646CFF" />
				</svg>
			)
		case 'vscode':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<path d="M3 3l18 9-18 9V3z" fill="#007ACC" />
				</svg>
			)
		case 'netlify':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<path d="M12 2l10 7-4 13H6L2 9l10-7z" fill="#00C7B7" />
				</svg>
			)
		case 'java':
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
					<path d="M7 16c0 1.7 1.8 3 4 3s4-1.3 4-3H7z" fill="#b07219" />
					<path d="M11 6c-1 0-2 .6-2 1.5S11 9 11 9s0-1 1-2 1-1.5 1-1.5-1 0-1 0z" stroke="#b07219" strokeWidth="0.6" fill="none" />
					<path d="M9.5 4.5s1-1 3-1 3 1 3 1" stroke="#b07219" strokeWidth="0.8" strokeLinecap="round" fill="none" />
				</svg>
			)
		case 'python':
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
					<path d="M12 2c2 0 4 1.2 4 3s-2 2.8-4 2.8-4-1-4-2.8S10 2 12 2z" fill="#306998" />
					<path d="M12 22c-2 0-4-1.2-4-3s2-2.8 4-2.8 4 1 4 2.8-2 3-4 3z" fill="#FFD43B" />
					<circle cx="15" cy="6.5" r="0.6" fill="#fff" />
					<circle cx="9" cy="17.5" r="0.6" fill="#fff" />
				</svg>
			)
		case 'sql':
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
					<ellipse cx="12" cy="6" rx="6" ry="2" fill="#2E7D32" />
					<rect x="6" y="6" width="12" height="12" rx="2" fill="#2E7D32" opacity="0.95" />
					<path d="M6 10c2 1 10 1 12 0v6c-2 1-10 1-12 0v-6z" fill="#A5D6A7" opacity="0.9" />
				</svg>
			)
		case 'numpy':
			return <span aria-hidden>🧮</span>
		case 'pandas':
			return <span aria-hidden>🐼</span>
		case 'matplotlib':
			return <span aria-hidden>📈</span>
		case 'english':
			return <span aria-hidden>🇬🇧</span>
		case 'turkish':
			return <span aria-hidden>🇹🇷</span>
		case 'spanish':
		case 'sp':
			return <span aria-hidden>🇪🇸</span>
		case 'ds':
		case 'algorithms':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.5" fill="none" />
				</svg>
			)
		case 'responsive':
			return (
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
					<rect x="3" y="4" width="18" height="12" rx="1" fill="none" stroke="currentColor" />
					<rect x="7" y="18" width="10" height="2" rx="1" fill="currentColor" />
				</svg>
			)
		default:
			return <span>{name}</span>
	}
}

export default function Skills() {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 }
		}
	}

	const itemVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	}

	return (
		<section id="skills" className="skills">
			<div className="skills-header">
				<ParallaxHeader>Skills</ParallaxHeader>
			</div>

			<div className="skills-grid">
				{skills.map((group) => (
					<div
						key={group.category}
						className="skill-group"
					>
						<h3>{group.category}</h3>
						<motion.div
							className="skill-list"
							variants={container}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
						>
							{group.items.map((s) => (
								<motion.div
									key={s.name}
									className="skill-row"
									variants={itemVariant}
									whileHover={{ scale: 1.05, x: 5 }}
								>
									<div className="skill-meta">
										<span className="skill-icon"><Icon name={s.icon} /></span>
										<span className="skill-name">{s.name}</span>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				))}
			</div>
		</section>
	)
}
