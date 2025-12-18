import { Heart, Users, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProgressSectionProps {
  totalRaised: number;
  goal: number;
}

export function ProgressSection({ totalRaised, goal }: ProgressSectionProps) {
  const percentage = Math.min((totalRaised / goal) * 100, 100);
  const remaining = goal - totalRaised;
  const donorCount = 43;

  const deadlineDate = new Date('2026-02-15T23:59:59');
  const [daysLeft, setDaysLeft] = useState(() => {
    const now = new Date().getTime();
    const deadline = deadlineDate.getTime();
    const diff = deadline - now;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const deadline = deadlineDate.getTime();
      const diff = deadline - now;
      const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
      setDaysLeft(days);
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 -mt-12 relative z-20 mb-16">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-3">
              <Heart className="w-6 h-6 text-rose-600" />
            </div>
            <div className="text-3xl text-gray-900 mb-1">{formatCurrency(totalRaised)}</div>
            <div className="text-gray-600">Raised of {formatCurrency(goal)}</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl text-gray-900 mb-1">{donorCount}</div>
            <div className="text-gray-600">Generous Donors</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <div className="text-3xl text-gray-900 mb-1">{daysLeft}</div>
            <div className="text-gray-600">Days Remaining</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between text-xs lg:text-lg items-center">
            <span className="text-gray-700">{percentage.toFixed(1)}% of goal reached</span>
            <span className="text-rose-600">{formatCurrency(remaining)} to go</span>
          </div>
          
          <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
          
          <p className="text-center text-gray-600 italic">
            "Every donation brings Eunice one step closer to a healthy, happy life"
          </p>
        </div>
      </div>
    </div>
  );
}
