import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxHeader({ children, className = '' }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Move text slightly slower than scroll to create parallax effect
    const y = useTransform(scrollYProgress, [0, 1], [50, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <div ref={ref} style={{ overflow: 'hidden', padding: '20px 0' }}>
            <motion.h2
                className={className}
                style={{ y, opacity }}
            >
                {children}
            </motion.h2>
        </div>
    )
}
