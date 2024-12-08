import React from 'react'

const RightPage = () => {
  return (
    <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sky-800 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group relative p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Destination</h3>
              <p className="text-gray-600">Select from our curated list of amazing destinations worldwide</p>
            </div>
            <div className="text-center group relative p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalize Your Trip</h3>
              <p className="text-gray-600">Tell us your preferences and let our AI create the perfect itinerary</p>
            </div>
            <div className="text-center group relative p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Your Journey</h3>
              <p className="text-gray-600">Access your detailed itinerary anytime, anywhere</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RightPage