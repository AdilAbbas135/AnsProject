import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer/Footer";

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "John Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis lorem vitae enim luctus, vitae rutrum est facilisis.",
      imageUrl: `https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg`,
    },
    {
      id: 2,
      title: "Jane Smith",
      description:
        "Nulla eget aliquam mauris. Sed in diam metus. Suspendisse maximus ligula vel arcu congue, ac consequat dolor venenatis.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_960_720.jpg",
    },
    // Add more stories here
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Stories
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              These are some of the inspiring stories shared by the people who
              received donations.
            </p>
          </div>
          <div className="mt-12 grid gap-8 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={story.imageUrl}
                    alt={story.title}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {story.title}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {story.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stories;
