import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="h-6 w-6" />
            <span className="font-semibold text-xl">FixXYZ</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Your Next Big Adventure Starts Here
            </h1>
            <p className="mt-4 text-gray-600">
              Build something amazing today
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Let's Get Started
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300"
              alt="Hero illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div className="py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold">WELCOME TO WONDERLAND</h2>
            <p className="mt-2 text-gray-600">
              magic bubbles are pink and sparkly sky is purple
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <img
                src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-300,h-200"
                alt="Learning"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold">Learning Modules</h3>
              <div className="mt-2 flex items-center text-blue-600">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <img
                src="https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-300,h-200"
                alt="E-books"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold">E-books & Videos</h3>
              <div className="mt-2 flex items-center text-blue-600">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <img
                src="https://ik.imagekit.io/demo/img/image3.jpeg?tr=w-300,h-200"
                alt="Quizzes"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold">Quizzes & Challenges</h3>
              <div className="mt-2 flex items-center text-blue-600">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-400,h-300"
              alt="Feature illustration"
              className="w-full max-w-md rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">perspiciatis unde</h3>
            <p className="mt-4 text-gray-600">
              omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">perspiciatis unde</h3>
            <p className="mt-4 text-gray-600">
              omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/demo/img/image6.jpeg?tr=w-400,h-300"
              alt="Analytics illustration"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}