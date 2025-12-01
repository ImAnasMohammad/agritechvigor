import Link from "next/link";

const { default: Card } = require("./Card");

// Products Section Component
const Cards = ({heading,list}) => {
    

    return (
        <section className="my-20 py-10 px-5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                        {heading}
                    </h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {list.map((product, index) => (
                        product?.href?<Link href={product.href} key={index}>
                                <Card key={index} {...product} />
                            </Link> :<Card key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Cards