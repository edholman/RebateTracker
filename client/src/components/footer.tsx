import homesmartLogo from "@assets/homesmart-logo_1751927935085.png";

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Important Rebate Disclosure</h3>
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>The rebate figures presented on this website are based on a seller paid buyer broker compensation of 3-4% of the sales price. If the seller paid buyer broker compensation is less than 3.5% of the sales price, your rebate will be less than 2%. The minimum buyer broker compensation amount for the agents participating in this program is 1.5% or $4,500 whichever is higher. If your purchase price is under $300,000 or the seller pays less than a 3.5% buyer broker commission, your rebate will be less than 2%. If the seller does not pay a buyer broker commission, the buyer will fulfill the minimum buyer broker compensation amounts of $4,500 or 1.5% of the sales price, whichever is higher. Depending upon specific loan programs or financing, rebate figures may also be affected based on interested party contribution guidelines, please consult with a lender regarding program guidelines. All rebates are credited to the buyers settlement statement upon a successful close of escrow and not before. Rebate program valid to 12/31/2025 or until expiration of signed buyer broker agreement with participating agent.</p>
          </div>
        </div>
        

        
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 text-sm text-gray-400 mb-4 md:mb-0">
              <span>© 2025</span>
              <div className="bg-slate-dark px-3 py-2 rounded">
                <img 
                  src={homesmartLogo} 
                  alt="HomeSmart" 
                  className="h-8 w-auto"
                />
              </div>
              <span>All rights reserved. Licensed real estate brokerage.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
