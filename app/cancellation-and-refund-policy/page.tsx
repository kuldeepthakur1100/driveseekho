export default function CancellationPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-black text-[#014AAD] mb-8">Cancellation & Refund Policy</h1>
      
      <div className="space-y-8 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Safety</h2>
          <p>
            At DriveSeekho, your payments are 100% safe. We ensure secure processing for all bookings made strictly through our official platform.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
          <h2 className="text-xl font-bold text-green-800 mb-4">Policy 1: Student-Initiated Cancellation</h2>
          <p className="mb-4">
            If you choose to cancel your driving classes, we facilitate the process for you. 
            Refunds are calculated based on the following:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-green-900">
            <li>Refunds are calculated based on your <strong>remaining classes</strong>.</li>
            <li>A <strong>10% processing & service deduction</strong> will be applied to the calculated refund amount.</li>
            <li>The balance will be processed to your original payment method.</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-6 rounded-2xl border-l-4 border-[#014AAD]">
          <h2 className="text-xl font-bold text-[#014AAD] mb-4">Policy 2: Platform-Initiated Closure</h2>
          <p className="mb-4">
            In the event that DriveSeekho discontinues or ends your training program:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-blue-900">
            <li>Refunds will be calculated strictly based on the number of incomplete classes.</li>
            <li><strong>Zero Deduction:</strong> You will receive a refund for all remaining classes without any deduction.</li>
          </ul>
        </section>

        <section className="mt-8 p-4 border border-gray-200 rounded-xl bg-gray-50">
          <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
          <p className="text-sm text-gray-600">
            These policies are only applicable to bookings made through the DriveSeekho platform. 
            We cannot provide refunds or support for any direct financial transactions made 
            between students and driving schools outside of our system.
          </p>
        </section>

      </div>
    </main>
  );
}