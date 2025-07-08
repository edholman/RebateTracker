import homesmartLogo from "@assets/homesmart-logo_1751927935085.png";

interface HeaderProps {
  currentRebate: number;
}

export default function Header({ currentRebate }: HeaderProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="bg-slate-dark px-3 py-2 rounded">
              <img 
                src={homesmartLogo} 
                alt="HomeSmart" 
                className="h-6 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold text-slate-dark">WhyRebate</div>
              <div className="text-xs text-gray-600 hidden sm:block">We Hear You</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600 hidden sm:block">
              Your Savings: <span className="font-semibold text-rebate-primary">Up to {formatCurrency(currentRebate)}</span>
            </div>
            <button className="bg-rebate-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-rebate-dark transition-colors">
              Get My Rebate
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
