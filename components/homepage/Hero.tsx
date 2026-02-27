import Image from "next/image";
import { JSX } from "react";
import portfolioHero from "@/public/images/home_page/portfolio_hero.png"

const Hero = (): JSX.Element => {

    const year = Number(new Date().getFullYear());

    return (
        <div className="relative">
            <div className="absolute top-4 w-full">
                <div className="w-[90%] mx-auto mt-10 flex justify-between">
                    <span className="flex flex-col h-fit w-fit gap-0">
                        <span>
                            PORTFOLIO
                        </span>
                        <span className="font-bold -mt-1">
                            Sanju Santhosh
                        </span>
                    </span>

                    <span className="flex gap-1">
                        <span>
                            Year
                        </span>
                        <span className="font-bold">
                            {year}
                        </span>
                    </span>

                    <span />


                    <span className="flex flex-col h-fit w-fit gap-0">
                        <span>
                            SOFTWARE
                        </span>
                        <span className="-mt-1">
                            DEVOPLOER
                        </span>
                    </span>
                </div>
            </div>

            <Image
                src={portfolioHero}
                // src="/images/home_page/portfolio_hero.png"
                alt="portfolio_hero"
                className="w-full -mt-10"
                width={1920}
                height={1080}
                placeholder="blur"
            />


            <div className="h-16 flex flex-col justify-between absolute w-full bottom-52">
                <div className="w-[90%] h-0.75 bg-not-black rounded-full mx-auto" />
                <div className="flex justify-between w-[93%] mx-auto uppercase">
                    <span>Projects</span>
                    <span className="font-bold">Experience</span>
                    <span>Skill</span>
                    <span>
                        <span className="font-bold">Tech</span>
                        <span className="ms-1">Stack</span>
                    </span>
                    <span>About</span>
                    <span className="font-bold">Contact</span>
                </div>
                <div className="w-[90%] h-0.75 bg-not-black rounded-full mx-auto" />
            </div>
        </div>
    )
}

export default Hero;