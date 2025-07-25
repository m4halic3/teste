// Hero.tsx
import { styled, Typography, Button, Box } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import Avatar from "../../../../../assets/images/avatar.jpg";
import { useEffect, useRef } from "react";

// Fundo preto com gradiente vinho sutil
const StyledHero = styled("section")(() => ({
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#000",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 10vw",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
    textAlign: "center",
}));

const DynamicBackground = styled("div")(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "150%",
    height: "150%",
    background: "radial-gradient(circle at center, rgba(128,0,32,0.25), transparent 40%)",
    transform: "translate(-25%, -25%)",
    transition: "background-position 0.2s ease",
    zIndex: 0,
    pointerEvents: "none",
}));

const StyledImg = styled("img")(() => ({
    width: "280px",
    height: "280px",
    borderRadius: "50%",
    border: "5px solid #800020",
    boxShadow: "0 0 60px rgba(128,0,32,0.5)",
    marginBottom: "24px",
    zIndex: 2,
    transition: "transform 0.4s ease",
    '&:hover': {
        transform: "scale(1.05)",
    }
}));

const NameText = styled(Typography)(() => ({
    fontSize: "3.2rem",
    fontWeight: 700,
    fontFamily: "'Cinzel', serif",
    color: "#fff",
    marginBottom: "10px",
    zIndex: 2,
}));

const AnimatedText = styled(Typography)(() => ({
    fontSize: "2rem",
    fontFamily: "'Playfair Display', serif",
    color: "#800020",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "3px solid #800020",
    width: "0",
    animation: "typing 3s steps(30, end) forwards, blink 0.7s step-end infinite",
    zIndex: 2,
    "@keyframes typing": {
        to: { width: "100%" }
    },
    "@keyframes blink": {
        "50%": { borderColor: "transparent" }
    }
}));

const StyledButton = styled(Button)(() => ({
    margin: "16px 16px 0 0",
    padding: "14px 28px",
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#fff",
    border: "2px solid #800020",
    borderRadius: "30px",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
    boxShadow: "0 0 12px rgba(128,0,32,0.2)",
    zIndex: 2,
    '&:hover': {
        backgroundColor: "#800020",
        color: "#fff",
        borderColor: "#fff",
        boxShadow: "0 0 20px rgba(128,0,32,0.4)",
        transform: "translateY(-2px)",
    }
}));

const Hero = () => {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            if (bgRef.current) {
                bgRef.current.style.background = `
          radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(128,0,32,0.3), transparent 40%)
        `;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <StyledHero>
            <DynamicBackground ref={bgRef} />
            <StyledImg src={Avatar} alt="Foto de Mariana Alice" />
            <NameText variant="h2">Mariana Alice</NameText>
            <AnimatedText component="p">Web Developer Jr. 💻✨</AnimatedText>
            <Box mt={4}>
                <StyledButton variant="outlined" startIcon={<DownloadIcon />}>
                    Download CV
                </StyledButton>
                <StyledButton variant="outlined" startIcon={<AlternateEmailOutlinedIcon />}>
                    Contact Me
                </StyledButton>
            </Box>
        </StyledHero>
    );
};

export default Hero;
