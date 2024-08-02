import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material';

const HeroLeft = () => {
    return (
        <div className="hero-left">
            <div className="hero-left-content">
                <h2 className="text-5xl font-bold">Welcome  <br /> to My Portfolio</h2>
                <div className="content mt-5 ">
                    <p className="text-2xl">
                        Hi!, My name is Onur Ardıç
                    </p>

                    <p className="text-2xl edu-qld ">
                        I'm a passionate Frontend Developer
                    </p>
                </div>

                <div className="social-media mt-3 flex gap-3">
                    <Link
                        href="https://github.com/onurardic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xl font-bold "
                    >
                        <GitHubIcon fontSize='large' />
                    </Link>

                    <Link
                        href="https://github.com/onurardic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xl font-bold "
                    >
                        <LinkedInIcon fontSize='large' />
                    </Link>

                    <Link
                        href="https://github.com/onurardic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xl font-bold "
                    >
                        <InstagramIcon fontSize='large' />
                    </Link>
                </div>

                <div className="resume-button mt-5">
                    <Button variant="contained" href="#contained-buttons">
                        Dowloand CV
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroLeft