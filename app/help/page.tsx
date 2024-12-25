export default function Help() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Help Center</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <p>After enrollment and payment, your account will be activated within 10 hours...</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">How do I access my tests?</h3>
                <p>Once your account is activated, you can log in and access all tests...</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
            <p>Email: support@jeetestseries.com</p>
          </section>
        </div>
      </div>
    </div>
  );
} 