import React from 'react'
import { motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <section id="about" className="about-me-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="about-card"
            >
                <h2>About Me</h2>
                <div className="about-text">
                    <p>
                        Hello! I'm Veli, a passionate developer who loves building things for the web.
                        I enjoy solving complex problems and creating intuitive, dynamic user experiences.
                    </p>
                    <p>
                        My journey in tech has led me to work with a variety of technologies,
                        from front-end frameworks like React to back-end systems.
                        I'm always eager to learn new tools and improve my craft.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
