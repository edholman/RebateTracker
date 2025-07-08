import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { DollarSign, AlertTriangle } from "lucide-react";

interface CalculatorSectionProps {
  onRebateChange: (rebate: number) => void;
}

export default function CalculatorSection({ onRebateChange }: CalculatorSectionProps) {
  const [price, setPrice] = useState([500000]);
  
  const rebatePercent = 0.02; // 2% rebate
  const rebate = Math.floor(price[0] * rebatePercent);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  useEffect(() => {
    onRebateChange(rebate);
  }, [rebate, onRebateChange]);

  return (
    <div className="bg-slate-dark rounded-xl shadow-2xl overflow-hidden">
      {/* Calculator Header */}
      <div className="bg-slate-dark text-white text-center py-8">
        <h1 className="text-3xl font-bold mb-2">Calculate Your Savings</h1>
        <p className="text-gray-300">See your rebate estimate in real-time</p>
      </div>

      {/* Calculator Body */}
      <div className="bg-white p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Price Slider */}
          <div className="space-y-6">
            <div>
              <label className="text-lg font-semibold text-slate-dark mb-4 block">
                Home Purchase Price: <span className="text-rebate-primary">{formatCurrency(price[0])}</span>
              </label>
              
              {/* Slider */}
              <div className="space-y-4">
                <Slider
                  value={price}
                  onValueChange={setPrice}
                  max={2000000}
                  min={100000}
                  step={10000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$100,000</span>
                  <span>$2,000,000</span>
                </div>
              </div>
            </div>

            {/* Limited Time Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3" />
                <div>
                  <span className="font-semibold text-yellow-800">Limited Time:</span>
                  <span className="text-yellow-700 ml-1">Lock in your rebate rate today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Rebate Display */}
          <div className="lg:ml-8">
            <div className="bg-rebate-light rounded-2xl p-8 text-center relative overflow-hidden">
              {/* Dollar Sign Icon */}
              <DollarSign className="w-16 h-16 text-rebate-primary mx-auto mb-4" />
              
              <div className="space-y-2">
                <div className="text-slate-dark font-medium">Your Rebate</div>
                <div className="text-4xl font-bold text-rebate-primary">Up to {formatCurrency(rebate)}</div>
                <div className="text-slate-dark text-sm">Back at closing</div>
              </div>

              <div className="mt-6 pt-4 border-t border-rebate-primary/20">
                <div className="text-xs text-gray-600 mb-2">vs. Traditional Agent:</div>
                <div className="font-semibold text-slate-dark">
                  You could save: <span className="text-rebate-primary">Up to {formatCurrency(rebate)}</span>
                </div>
              </div>

              <button 
                className="w-full bg-rebate-primary text-white py-3 px-6 rounded-lg font-semibold mt-6 hover:bg-rebate-dark transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Saving Today ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
