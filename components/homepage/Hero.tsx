import Image from "next/image";
import { JSX } from "react";
import portfolio_hero from "@/Images/home_page/portfolio_hero.png";

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
                src={portfolio_hero}
                alt="portfolio_hero"
                className="w-full -mt-10"
            />
        </div>
    )
}

export default Hero;