import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5,
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    }
}

const Loader = () => {
    return (
        <>
            <motion.div style={Styles.loader}
                variants={loaderVariants}
                animate="animationOne"
            >

            </motion.div>
        </>
    )
}

const Styles = {
    loader: {
        position: "fixed",
        width: "10px",
        height: "10px",
        margin: "400px 170px",

        borderRadius: "50%",
        background: "red"
      }
}

export default Loader;