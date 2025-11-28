import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function ParallaxBackground() {
    const { scrollYProgress } = useScroll()

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Create different movement speeds for different elements
    const y1 = useTransform(smoothProgress, [0, 1], [0, -300])
    const y2 = useTransform(smoothProgress, [0, 1], [0, -500])
    const y3 = useTransform(smoothProgress, [0, 1], [0, -150])
    const rotate1 = useTransform(smoothProgress, [0, 1], [0, 180])
    const rotate2 = useTransform(smoothProgress, [0, 1], [0, -90])

    return (
        <div className="parallax-bg-container">
            {/* Large gradient blob top-left */}
            <motion.div
                className="parallax-shape shape-1"
                style={{ y: y1, rotate: rotate1 }}
            />

            {/* Medium blob mid-right */}
            <motion.div
                className="parallax-shape shape-2"
                style={{ y: y2, rotate: rotate2 }}
            />

            {/* Small accent blob bottom-left */}
            <motion.div
                className="parallax-shape shape-3"
                style={{ y: y3 }}
            />
        </div>
    )
}
