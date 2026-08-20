export default function AboutUs() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-20">
        <div className="mx-auto w-20 h-20 mb-6 bg-[#014AAD] rounded-2xl flex items-center justify-center text-white font-black text-2xl">
          DS
        </div>
        <h1 className="text-6xl font-black text-gray-900 mb-6">About DriveSeekho</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
          "Driving isn't just a skill—it's your gateway to independence. We're here to make sure you get there safely."
        </p>
      </div>

      {/* The Story */}
      <section className="mb-20">
        <h2 className="text-3xl font-black text-[#014AAD] mb-6">Our Journey</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Welcome to <strong>DriveSeekho</strong>, where we are revolutionizing the way India learns to drive. 
            We noticed a massive gap in the market: students were struggling with unreliable schools, 
            hidden costs, and a total lack of safety standards. Choosing a driving school felt like a 
            gamble, and we decided that had to change.
          </p>
          <p>
            DriveSeekho was born out of a simple need for transparency. We act as a trusted middleman 
            between learners and high-quality, vetted driving schools. Whether you are a first-time 
            learner or looking to sharpen your road skills, we provide the platform that ensures your 
            money, time, and safety are always respected.
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="bg-gray-900 text-white p-10 md:p-16 rounded-[3rem] mb-20">
        <h2 className="text-3xl font-black mb-8 text-blue-400">A Word from our Founder</h2>
        <p className="text-xl leading-relaxed mb-8">
          "When I started DriveSeekho, I had one clear goal: to eliminate the uncertainty that comes with 
          learning to drive. Driving is a lifelong skill, and it deserves professional, standardized 
          guidance. At DriveSeekho, we aren't just booking classes; we are building a community of 
          responsible, confident drivers. We take care of the logistics—the safety, the payments, 
          and the scheduling—so you can focus entirely on what matters: the road ahead."
        </p>
        <div className="border-t border-gray-700 pt-6">
          <h4 className="font-black text-2xl">Kuldeep Thakur</h4>
          <p className="text-blue-400 font-bold">Founder & CEO, DriveSeekho</p>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black text-center mb-12">The DriveSeekho Promise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-gray-100 rounded-[2rem] hover:shadow-xl transition-all">
            <h3 className="font-black text-xl mb-3 text-[#014AAD]">Mission</h3>
            <p className="text-gray-600">To professionalize driving education in India by creating a seamless, transparent, and technology-driven ecosystem that empowers every learner.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-[2rem] hover:shadow-xl transition-all">
            <h3 className="font-black text-xl mb-3 text-[#014AAD]">Vision</h3>
            <p className="text-gray-600">To be the most trusted name in driving education, where safety and quality are never compromised for convenience.</p>
          </div>
        </div>
      </section>
    </main>
  );
}