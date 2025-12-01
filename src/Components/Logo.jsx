const { default: Image } = require("next/image");

const Logo = () => {
    return (
        <div className="flex items-center space-x-3">
            <Image src={'/images/logo.jpeg'} width={50} height={3} />
            <h1 className="text-2xl md:text-3xl font-bold text-white">Agritech Vigor</h1>
        </div>
    );
};

export default Logo