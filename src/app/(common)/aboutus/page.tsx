"use client"

import React from "react"

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        About Us
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed text-center mb-10">
        Our platform was created with a clear mission: to empower women by
        providing them with opportunities to showcase their cooking skills and
        generate income from home. Many talented women prepare delicious
        homemade food but lack a digital platform to reach customers. Our
        system connects these women directly with buyers, creating a supportive
        community that values homemade quality and entrepreneurship.
      </p>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to support women's economic independence by helping
            them turn their cooking talent into a sustainable source of income.
            We believe that technology can break barriers and open doors for
            women who want to build their own small businesses from home.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Women Empowerment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Through this platform, women can easily list their homemade food,
            reach customers in their local communities, and manage their orders
            efficiently. By promoting homemade food businesses, we aim to
            strengthen women’s confidence, financial stability, and social
            recognition.
          </p>
        </div>

      </div>

      {/* Founder Section */}
      <div className="bg-primaryFocus rounded-xl p-8">

        <h2 className="text-3xl font-bold mb-4 text-center">
          Our Founder
        </h2>

        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
          The platform was founded by a passionate software developer who
          combines strong technical expertise with solid administrative
          knowledge. With experience in modern web technologies and system
          management, the founder designed this platform to be simple, reliable,
          and accessible for women entrepreneurs. The vision is to use
          technology as a bridge that connects talented home chefs with people
          who appreciate authentic homemade food.
        </p>

      </div>

      {/* Vision Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Our Vision
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We envision a future where every skilled woman has the opportunity to
          become financially independent through her talent. By building a
          trusted digital marketplace for homemade food, we aim to support local
          communities, encourage entrepreneurship, and celebrate the value of
          homemade meals.
        </p>
      </div>e4tr

    </div>
  )
}

export default page