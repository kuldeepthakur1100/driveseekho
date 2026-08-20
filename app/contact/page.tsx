export default function ContactUs() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">We are here to help you get on the road safely.</p>
      </div>

      <div className="grid gap-6">
        {/* Support Section */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-black text-[#014AAD] mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Support</p>
              <p className="text-lg font-medium text-gray-900">support@driveseekho.com</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">WhatsApp Support</p>
              <p className="text-lg font-medium text-gray-900">+91 8368510626</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Office Location</p>
              <p className="text-lg font-medium text-gray-900">Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Socials Section */}
        <div className="bg-gray-50 p-8 rounded-3xl">
          <h3 className="text-xl font-black text-gray-900 mb-6">Follow Our Journey</h3>
          <div className="flex flex-col gap-3">
            <a href="https://instagram.com/driveseekho" className="block p-4 bg-white rounded-2xl font-bold hover:bg-gray-100 transition-colors">
              Instagram
            </a>
            <a href="https://linkedin.com/driveseekho" className="block p-4 bg-white rounded-2xl font-bold hover:bg-gray-100 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}