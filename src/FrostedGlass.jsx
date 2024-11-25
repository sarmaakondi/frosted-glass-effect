const FrostedGlass = () => {
    return (
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-pink-600 font-serif font-bold mt-12">
                Frosted Glass Effect
            </h1>
            <div className="flex items-center justify-center bg-gray-600 w-[24rem] md:w-[40rem] lg:w-[60rem] h-[32rem]">
                <p className="w-2/3 h-auto p-8 font-light bg-white">
                    Frosted glass is produced by the sandblasting or acid
                    etching of clear sheet glass. This creates a pitted surface
                    on one side of the glass pane and has the effect of
                    rendering the glass translucent by scattering the light
                    which passes through, thus blurring images while still
                    transmitting light
                </p>
            </div>
        </div>
    );
};

export default FrostedGlass;
