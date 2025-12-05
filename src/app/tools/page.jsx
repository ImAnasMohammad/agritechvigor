import Cards from '@/Components/Cards'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
    const desc = 'Tools are instruments or devices used to make agricultural work easier, faster, and more efficient. They help farmers in tasks like digging, planting, weeding, watering, harvesting, and transporting materials. Good tools reduce physical effort and improve the accuracy and quality of farm operations.';

    const list = [
        {
            image: "./images/tools/Fork.png",
            title: "Hand Trowel & Fork",
            description: "Used for small planting tasks, loosening soil in pots or beds, and removing weeds with precision."
        },
        {
            image: "./images/tools/Transplanter.webp",
            title: "Transplanter",
            description: "Helps shift seedlings and saplings safely from nursery trays to the field without damaging roots."
        },
        {
            image: "./images/tools/knife.webp",
            title: "Weeder",
            description: "Removes unwanted weeds efficiently while protecting nearby crops from damage."
        },
        {
            image: "./images/tools/Spade.webp",
            title: "Pruning Shears / Secateurs",
            description: "Used for cutting stems, trimming branches, and maintaining plant shape and health."
        },
        {
            image: "./images/tools/knife.webp",
            title: "Garden Knife",
            description: "A multipurpose tool used for pruning, harvesting fruits or vegetables, and cutting plant material."
        },
        {
            image: "./images/tools/Spade.webp",
            title: "Spade & Shovel Sets",
            description: "Essential for digging soil, mixing compost, making planting pits, and shifting materials."
        },
        {
            image: "./images/tools/rake.webp",
            title: "Rake",
            description: "Used to level soil, break clods, and collect dry leaves or plant debris."
        },
        {
            image: "./images/tools.webp",
            title: "Hoe / Khurpi",
            description: "Ideal for breaking hard soil, shaping beds, and removing weeds around plants."
        },
        {
            image: "./images/tools/soil-beaker.webp",
            title: "Pickaxe",
            description: "Used to break and loosen tough or rocky soil for deeper cultivation."
        },
        {
            image: "./images/tools/sickle.webp",
            title: "Sickle (Khurpa)",
            description: "A curved-blade tool used for cutting grasses, weeds, and harvesting crops like paddy and wheat."
        }
    ];
    return (
        <>
            <Navbar />
            <Hero heading={'Tools'} image={'/images/tools-banner.webp'} desc={desc} />
            <div style={{ maxWidth: '1200px', margin: '50px auto' }}>
                <p>
                    We offer all kinds of tree saplings — carefully grown and ready for plantation.
                    Our saplings are ideal for farm plantations, roadside plantations, greenbelt projects, and environmental drives.
                    Each plant is nurtured to ensure strong roots, high survival rates, and sustainable growth.
                </p>
                <Cards heading={'Available Varieties'} list={list}/>
            </div>
        </>
    )
}

export default page