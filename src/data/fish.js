import bettaImage from "../assets/images/fish/betta4.jpg";
import guppyImage from "../assets/images/fish/guppy6.jpg";
import mollyImage from "../assets/images/fish/molly1.jpg";
import goldfishImage from "../assets/images/fish/goldfish.jpg";

const fishData = [
    {
        id: 1,
        name: "Betta Fish",
        slug: "betta",
        category: "Freshwater",
        description: "Beautiful ornamental fish with vibrant colors.",
        size: "2 - 3 Inches",
        water: "Freshwater",
        status: "Available",
        image: bettaImage
    },

    {
        id: 2,
        name: "Guppy Fish",
        slug: "guppy",
        category: "Freshwater",
        description: "Healthy guppies available in multiple varieties.",
        size: "1 - 2 Inches",
        water: "Freshwater",
        status: "Available",
        image: guppyImage
    },

    {
        id: 3,
        name: "Molly Fish",
        slug: "molly",
        category: "Freshwater",
        description: "Colorful and hardy freshwater fish.",
        size: "2 - 4 Inches",
        water: "Freshwater",
        status: "Available",
        image: mollyImage
    },

    {
        id: 4,
        name: "Goldfish",
        slug: "goldfish",
        category: "Aquarium",
        description: "Healthy goldfish for home aquariums.",
        size: "3 - 5 Inches",
        water: "Freshwater",
        status: "Available",
        image: goldfishImage
    }
];

export default fishData;