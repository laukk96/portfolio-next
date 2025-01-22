import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-6xl font-extrabold">Hello, I'm Kiaran</h1>
                <p className="text-[#BFBFBF] text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
            <div className="col-span-5 place-self-center">
                <div className="rounded-full my-5 bg-[#202020] my-10px w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 center rounded-3xl"
                        src="/images/me_tidepools.jpg"
                        alt="Myself at the JSA tidepools event in Fall 2024, photo taken by Kyle."
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
