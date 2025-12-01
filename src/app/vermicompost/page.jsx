import Cards from '@/Components/Cards'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
    const desc = 'An organic fertilizer produced by the breakdown of biodegradable waste using earthworms. It is rich in nutrients, improves soil structure, and enhances plant growth naturally';

    const list = [
        {
            image: "./images/Vermicompost/Vermicompost.jpg",
            title: "Vermicompost",
            description: "High-quality organic fertilizer rich in nutrients. Enhances soil fertility, boosts plant growth, and improves yield naturally."
        },
        {
            image: "./images/Vermicompost/Cocopeat.jpg",
            title: "Cocopeat",
            description: "Eco-friendly growing medium made from coconut husk fiber. Retains moisture, improves aeration, and promotes healthy root growth."
        },
        {
            image: "./images/Vermicompost/Husk.jpg",
            title: "Husk",
            description: "Natural soil cover that retains moisture and prevents weed growth. Perfect for nurseries and large plantations."
        },
        {
            image: "./images/Vermicompost/Paddy-Straw.jpg",
            title: " Paddy Straw",
            description: "Used for mulching and protecting young plants from heat and evaporation. Ideal for organic farms and nurseries."
        },
        {
            image: "./images/Vermicompost/Support-Sticks.jpg",
            title: "Support Sticks",
            description: "Durable support sticks for saplings, climbers, and delicate plants. Helps maintain upright growth during early stages."
        },
        {
            image: "./images/Vermicompost/Neem-Cake.webp",
            title: "Neem Cake",
            description: "Natural pest repellent and organic manure. Improves soil structure and protects plant roots from fungal infections."
        },
        {
            image: "./images/Vermicompost/Cow-Dung.jpg",
            title: "Cow Dung",
            description: "Fully decomposed organic manure that enriches soil with essential nutrients."
        },
        {
            image: "./images/Vermicompost/Green-Grass.jpg",
            title: "Green Grass",
            description: "Used for landscaping, mulching, and livestock feed."
        },
        {
            image: "./images/Vermicompost/Leaf-Compost.jpg",
            title: "Leaf Compost",
            description: "Compost made from decomposed leaves — improves soil texture, water retention, and organic content."
        }
    ];
    return (
        <>
            <Navbar />
            <Hero heading={'Vermicompost'} image={'/images/Vermicompost-banner.jpg'} desc={desc} />
            <div style={{ maxWidth: '1200px', margin: '50px auto' }}>
                <p>
                    We offer all kinds of tree saplings — carefully grown and ready for plantation.
                    Our saplings are ideal for farm plantations, roadside plantations, greenbelt projects, and environmental drives.
                    Each plant is nurtured to ensure strong roots, high survival rates, and sustainable growth.
                </p>
                <Cards heading={'Organic & Growing Materials'} list={list}/>
            </div>
        </>
    )
}

export default page