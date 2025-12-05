import Cards from '@/Components/Cards'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
    const desc = 'Saplings are young, developing trees that have grown past the seedling stage and are ready to be transplanted into fields or orchards. They are stronger, more stable, and have a higher survival rate, making them ideal for agricultural planting.';

    const list = [
        {
            image: "./images/saplings/Shade-Trees.webp",
            title: "Shade Trees",
            description: "Neem, Gulmohar, Banyan, Rain Tree, Pongamia, etc."
        },
        {
            image: "./images/saplings/fruit.png",
            title: "Fruit Trees",
            description: "Mango, Guava, Lemon, Jamun, Papaya, etc."
        },
        {
            image: "./images/saplings/Forestry.webp",
            title: "Forestry & Native Trees",
            description: " Teak, Bamboo, Mahogany, Subabul, etc."
        },
        {
            image: "./images/saplings/Ornamental-tree.webp",
            title: "Ornamental & Avenue Trees",
            description: " Cassia, Ashoka, Tabebuia, Bougainvillea, etc."
        },
        {
            image: "./images/saplings/road-side-trees.webp",
            title: "Roadside Trees",
            description: " Neem, Rain Tree, Gulmohar, Pongamia, and other hardy species suited for highways and public areas."
        }
    ];
    return (
        <>
            <Navbar />
            <Hero heading={'Saplings'} image={'/images/saplings.webp'} desc={desc} />
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