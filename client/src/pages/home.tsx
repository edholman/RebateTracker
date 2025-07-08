import { useState } from "react";
import Header from "@/components/header";
import CalculatorSection from "@/components/calculator-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { CheckCircle, Star, Clock } from "lucide-react";

export default function Home() {
  const [currentRebate, setCurrentRebate] = useState(10000);

  return (
    <div className="min-h-screen bg-white">
      <Header currentRebate={currentRebate} />
      
      {/* Save Up To Banner */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-rebate-light border border-rebate-primary/20 rounded-full px-6 py-2">
              <span className="w-2 h-2 bg-rebate-primary rounded-full mr-3"></span>
              <span className="text-slate-dark font-medium">Save Up to 2% on Your Home Purchase</span>
            </div>
          </div>

          <CalculatorSection onRebateChange={setCurrentRebate} />

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-rebate-primary mr-2" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-rebate-primary mr-2" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-4">How Our Rebate Program Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and designed to save you money</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-slate-dark mb-4">Contact Us</h3>
              <p className="text-gray-600">Reach out to our team and let us know you're interested in buying a home with our rebate program.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-slate-dark mb-4">Find Your Home</h3>
              <p className="text-gray-600">Work with our experienced agents to find and purchase your perfect home through our network.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-slate-dark mb-4">Get Your Rebate</h3>
              <p className="text-gray-600">Receive up to 2% of your purchase price back as a rebate after closing on your new home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* We Hear You Section */}
      <section className="bg-slate-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">We Hear You</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-white text-lg font-medium mb-2">"Why should I pay full commission if I found the house?"</div>
              </div>
              <div className="text-center">
                <div className="text-white text-lg font-medium mb-2">"Can't I save money on this purchase?"</div>
              </div>
              <div className="text-center">
                <div className="text-white text-lg font-medium mb-2">"There has to be a better way."</div>
              </div>
            </div>

            <div className="text-xl text-white font-semibold">
              That's exactly why we created WhyRebate.
            </div>
          </div>
        </div>
      </section>

      {/* What's In It For Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-8">What's In It For Us?</h2>
            
            <div className="text-left space-y-6 text-gray-700">
              <p className="text-lg font-semibold text-slate-dark">The traditional real estate process is dead.</p>
              
              <p>Most Realtors spend a serious amount of time and money trying to work with buyers and sellers who aren't serious. Ultimately, the cost of their time is passed on via high commissions to clients who are serious.</p>
              
              <p>We think that's unfair, and believe serious clients should be rewarded.</p>
              
              <p>Our program is designed to attract serious & savvy folks on all sides of a real estate transaction, allowing agents to save time and pass the cost-savings onto you.</p>
            </div>

            <div className="bg-rebate-light border-l-4 border-rebate-primary p-6 mt-8">
              <h3 className="text-xl font-semibold text-slate-dark mb-4">Are you serious & savvy?</h3>
              <p className="text-gray-700 mb-4">Work with our associates on your next purchase and receive up to a 2% rebate.</p>
            </div>

            <button className="bg-rebate-primary text-white px-8 py-3 rounded-lg font-semibold mt-8 hover:bg-rebate-dark transition-colors">
              Get My Better Deal
            </button>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
