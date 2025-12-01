
// Product Card Component
const Card = ({ image, title, description }) => {
    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-56 md:h-64 overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
            </div>
            <div className="py-6 px-4 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};


export default Card