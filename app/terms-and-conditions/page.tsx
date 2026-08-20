export default function TermsAndConditions() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-black text-[#014AAD] mb-8">Terms & Conditions</h1>
      
      <div className="space-y-8 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. The DriveSeekho Platform</h2>
          <p>
            DriveSeekho acts as a facilitator connecting learners with government-approved and private driving schools. 
            By using our platform, you agree that we function as an intermediary to ensure a standardized learning experience.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-2xl border-l-4 border-[#014AAD]">
          <h2 className="text-xl font-bold text-[#014AAD] mb-4">2. Our Responsibility Guarantee</h2>
          <p className="mb-2">When you book your driving classes <strong>strictly through the DriveSeekho platform</strong>, we take full responsibility for:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Class Scheduling:</strong> Ensuring your sessions are booked as per the agreed plan.</li>
            <li><strong>Payment Security:</strong> Handling your transactions securely through our authorized channels.</li>
            <li><strong>Safety Protocols:</strong> Ensuring instructors follow professional safety standards.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Direct Dealings Disclaimer</h2>
          <p className="font-semibold text-red-600">
            Important: DriveSeekho is not responsible for any transactions, class quality, or safety issues if you bypass our platform and deal directly with a driving school.
          </p>
          <p className="mt-2">
            If you contact or pay a driving school directly without using DriveSeekho, we cannot guarantee the services, 
            nor can we assist in any disputes regarding money or class completion. Always book through us for your protection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Student Responsibility & Safety</h2>
          <p>
            Once you commence your classes, you are required to follow your instructor's guidance at all times. 
            Safety is a shared responsibility; therefore, students must:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Always wear seatbelts and helmets (as applicable) during sessions.</li>
            <li>Follow all traffic rules and instructor commands.</li>
            <li>Note that DriveSeekho is not liable for any incidents occurring after the completion of the booked training curriculum.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Information</h2>
          <p>
            If you have any questions regarding these terms or your booking, please reach out to us through our official channels.
          </p>
        </section>
      </div>
    </main>
  );
}