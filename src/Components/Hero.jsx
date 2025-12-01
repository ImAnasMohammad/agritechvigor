export default function Hero({ heading, desc, image }) {
    return (
        <section
            className="relative h-screen flex items-center justify-center text-center text-white px-6"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // PARALLAX EFFECT
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 max-w-6xl">
                <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">{heading}</h1>
                <p className="mt-4 text-sm md:text-sm drop-shadow max-w-2xl mx-auto" style={{color:'gray'}}>
                    {desc}
                </p>
            </div>
        </section>
    );
}
