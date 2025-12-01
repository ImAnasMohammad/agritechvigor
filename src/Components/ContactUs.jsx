"use client";

export default function ContactUs() {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8">
                    Contact Us
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Details */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Get in Touch
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Have questions or need assistance? Our team is here to help you with
                            your nursery and agricultural needs.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li>
                                📍 <span className="font-medium">Address:</span> Hyderabad, Telengana
                            </li>
                            {/* <li>
                                📞 <span className="font-medium">Phone:</span> +91 
                            </li> */}
                            <li>
                                📧 <span className="font-medium">Email:</span> support@agritechvigor.in
                            </li>
                        </ul>
                    </div>
                </div>

                </div>
        </section>
    );
}
