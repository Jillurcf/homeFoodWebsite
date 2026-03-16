"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const foods = [
    {
        id: 1,
        name: "Chicken Biryani",
        description: "Delicious homemade chicken biryani.",
        price: 250,
        phone: "01712345678",
        address: "Dhaka, Bangladesh",
        image: "/orangeLogo1.png",
    },
    {
        id: 2,
        name: "Beef Curry",
        description: "Spicy traditional beef curry.",
        price: 300,
        phone: "01898765432",
        address: "Gazipur, Bangladesh",
        image: "/orangeLogo1.png",
    },
    {
        id: 3,
        name: "Fried Rice",
        description: "Chinese style vegetable fried rice.",
        price: 180,
        phone: "01911223344",
        address: "Narayanganj, Bangladesh",
        image: "/orangeLogo1.png",
    },
    {
        id: 4,
        name: "Chicken Roast",
        description: "Juicy roasted chicken with spices.",
        price: 220,
        phone: "01622334455",
        address: "Uttara, Dhaka",
        image: "/orangeLogo1.png",
    },
    {
        id: 5,
        name: "Fish Curry",
        description: "Fresh fish cooked in Bengali style.",
        price: 200,
        phone: "01566778899",
        address: "Mirpur, Dhaka",
        image: "/orangeLogo1.png",
    },
    {
        id: 6,
        name: "Vegetable Curry",
        description: "Healthy mixed vegetable curry.",
        price: 120,
        phone: "01788990011",
        address: "Mohammadpur, Dhaka",
        image: "/orangeLogo1.png",
    },
];

function BuyerHome() {

    const router = useRouter();
    const [search, setSearch] = React.useState("");

    const handleCardClick = (food) => {
        router.push(
            `/buyerHome/foodDetails/${food.id}?name=${food.name}&price=${food.price}&phone=${food.phone}&address=${food.address}&description=${food.description}&image=${food.image}`
        );
    };

    const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>

            {/* Search Bar */}
            <div className="mb-6 lg:my-12 flex justify-center">
                <input
                    type="text"
                    placeholder="Search foods..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-md border border-secondary rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">

                {filteredFoods.map((food) => (

                    <div
                        key={food.id}
                        onClick={() => handleCardClick(food)}
                        className="bg-background rounded-xl shadow-md md:p-3 cursor-pointer hover:scale-105 transition"
                    >

                        <div className="w-full rounded-xl h-32 md:h-32 relative mb-2">
                            <Image
                                src={food.image}
                                alt={food.name}
                                fill
                                className="rounded-xl"
                            />
                        </div>

                        <div className="px-1.5">
                            <h2 className="font-semibold text-sm">{food.name}</h2>

                            <p className="text-xs text-gray-600">{food.description}</p>

                            <p className="text-sm font-bold text-green-600 mt-1">
                                ৳ {food.price}
                            </p>

                            <p className="text-xs mt-2">📞 {food.phone}</p>

                            <p className="text-xs">📍 {food.address}</p>
                        </div>

                    </div>

                ))}

            </div>
        </div>
    );
}

export default BuyerHome;