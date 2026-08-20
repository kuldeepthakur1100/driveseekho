// app/privacy-policy/page.tsx

// Yeh ek valid React component hai
export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-black text-[#014AAD] mb-8">Privacy Policy</h1>
      
      
        {/* Aapka content yahan rahega */}



        <section className="space-y-6">
 
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
    <h3 className="font-bold text-[#014AAD] mb-3">Your Data Privacy</h3>
    <p>
      At DriveSeekho, we prioritize your privacy. We use your data exclusively to track your class progress and ensure you receive the best training experience. 
      <strong> We do not store or share your personal data with any third parties or unauthorized individuals.</strong>
    </p>
  </div>

  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
    <h3 className="font-bold text-[#014AAD] mb-3">Safety & Training Conduct</h3>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li><strong>Instructor Interaction:</strong> During classes, students are advised to maintain professional distance and boundaries with instructors.</li>
      <li><strong>Personal Information:</strong> Please do not share sensitive personal details such as bank account information, [Government ID Redacted], or any other private documents with your instructor.</li>
      <li><strong>Accompanying Person:</strong> For your comfort and safety, you are allowed to bring <strong>one family member</strong> to accompany you during your training sessions.</li>
      <li><strong>Safety First:</strong> We are committed to a safe learning environment. Always follow your instructor's guidance to ensure a secure training experience.</li>
    </ul>
  </div>
</section>
       
        {/* Baki sections... */}
      
    </main>
  );
}