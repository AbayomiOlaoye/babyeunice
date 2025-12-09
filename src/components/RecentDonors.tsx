import { Heart, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function RecentDonors() {
  const initialDonors = [
    { name: 'Eseoghene', amount: 20000, message: '' },
    { name: 'Faith O.', amount: 2000, message: '' },
    { name: 'Ruth Kevwe02', amount: 1000, message: '' },
    { name: 'Oluwatoyin O.', amount: 100000, message: 'Praying for our little Eunice, big uncle needs you to be strong!' },
    { name: 'Moses Ola', amount: 120000, message: 'May God heal her completely' },
    { name: 'Dr. Olusesi M.', amount: 150000, message: 'Every child deserves a fighting chance. Keep fighting, princess!' },
    { name: 'Sarah J.', amount: 25000, message: 'Sending love from the UK' },
    { name: 'Blessing Bamidele', amount: 75000, message: 'Stay strong, baby Eunice!' },
    { name: 'Amusan Ibikunle', amount: 1000, message: 'God bless this precious baby' },
    { name: 'Anonymous A.', amount: 50000, message: '' },
    { name: 'Michael Abimbola.', amount: 40000, message: 'Hope this helps!' },
    { name: 'Bisola A.', amount: 30000, message: 'Wishing you a speedy recovery' },
    { name: 'Anonymous', amount: 20000, message: '' },
    { name: 'Funke O.', amount: 12000, message: 'Stay strong, little one!' },
  ];

  const initialTop = [
    { name: 'Dr. Olusesi M.', amount: 150000 },
    { name: 'Moses Ola', amount: 120000 },
    { name: 'Oluwatoyin O.', amount: 100000 },
    { name: 'Blessing Bamidele', amount: 75000 },
    { name: 'Anonymous A.', amount: 50000 },
  ];

  const [donors, setDonors] = useState(initialDonors);
  const [topDonors, setTopDonors] = useState(initialTop);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      try {
        const detail = (e as CustomEvent).detail;
        if (!detail || typeof detail.amount !== 'number') return;

        const newDonor = {
          name: detail.name || 'Anonymous',
          amount: detail.amount,
          message: detail.message || '',
        };

        // Prepend to recent donors
        setDonors((prev) => [newDonor, ...prev]);

        if (detail.amount > 50000) {
          setTopDonors((prev) => {
            const merged = [{ name: newDonor.name, amount: newDonor.amount }, ...prev];
            const sorted = merged
              .sort((a, b) => b.amount - a.amount)
              .slice(0, 5);
            return sorted;
          });
        }
      } catch (err) {
        console.warn('Failed to handle donation event', err);
      }
    };

    window.addEventListener('donation:success', handler as EventListener);
    return () => window.removeEventListener('donation:success', handler as EventListener);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span>Thank You!</span>
            </div>
            <h2 className="text-gray-900 mb-4">Our Amazing Supporters</h2>
            <p className="text-xl text-gray-600">
              Every donation is a gift of hope. Thank you for your incredible generosity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-gray-900 mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-600 fill-current" />
                Recent Donations
              </h3>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {donors.map((donor, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-white flex-shrink-0">
                      {donor.name === 'Anonymous' ? '?' : donor.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-gray-900">{donor.name}</p>
                        <p className="text-rose-600 flex-shrink-0">{formatCurrency(donor.amount)}</p>
                      </div>
                      {donor.message && (
                        <p className="text-sm text-gray-600 italic mb-1">"{donor.message}"</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-6 border-2 border-amber-200">
              <h3 className="text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                Top Donors
              </h3>
              
              <div className="space-y-3">
                {topDonors.map((donor, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-amber-100"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 ${
                      index === 0 ? 'bg-yellow-500' :
                      index === 1 ? 'bg-gray-400' :
                      index === 2 ? 'bg-amber-600' :
                      'bg-blue-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 truncate">{donor.name}</p>
                      <p className="text-xs text-amber-700">{formatCurrency(donor.amount)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-amber-100">
                <p className="text-sm text-center text-gray-700">
                  <strong>11 generous donors</strong> have contributed to save Eunice's life
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center text-white shadow-2xl">
            <Heart className="w-12 h-12 mx-auto mb-4 fill-current" />
            <h3 className="mb-4">Join These Heroes Today</h3>
            <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
              Your name could be here. Your donation, no matter the size, brings hope to baby Eunice 
              and her family. Be the miracle they're praying for.
            </p>
            <a 
              href="#donate"
              className="inline-block bg-white text-rose-600 px-8 py-4 rounded-lg hover:bg-rose-50 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
