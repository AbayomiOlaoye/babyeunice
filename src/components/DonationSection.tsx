import { useState } from 'react';
import { Heart, CreditCard, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'react-toastify';
import Paystack from '@paystack/inline-js';

interface DonationSectionProps {
  onDonationSuccess: (amount: number) => void;
}

export function DonationSection({ onDonationSuccess }: DonationSectionProps) {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const presetAmounts = [5000, 10000, 25000, 50000, 100000, 250000];

  const handleDonate = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid donation amount');
      return;
    }
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);

    // Simulate Paystack integration
    // In production, you would initialize Paystack here
    try {
      const popup = new Paystack()

      await popup.checkout({
        key: 'pk_live_1552b5a96578e5002caceb462628857b080b730e',
        email,
        amount: parseFloat(amount) * 100,
        onSuccess: () => {
          onDonationSuccess(parseFloat(amount));

          try {
            const detail = {
              name: name?.trim() || 'Anonymous',
              email,
              amount: parseFloat(amount),
              message: message?.trim() || '',
              timestamp: Date.now(),
            };
            window.dispatchEvent(new CustomEvent('donation:success', { detail }));
          } catch (e) {
            console.warn('Could not dispatch donation event', e);
          }
         
          toast.success(`Thank you ${name || 'generous donor'}! Your donation of ₦${parseFloat(amount).toLocaleString()} brings Eunice closer to her life-saving surgery.`);
        },
        onCancel: () => {
          setIsLoading(false);
          toast.info('Donation process was cancelled.');
        },
      });
      // Reset form
      setAmount('');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="donate" className="py-16 bg-gradient-to-br from-rose-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span>Make a Difference Today</span>
            </div>
            <h2 className="text-gray-900 mb-4">Your Donation Saves Lives</h2>
            <p className="text-xl text-gray-600">
              Every contribution, no matter the size, brings Eunice closer to the surgery she needs
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="mb-8">
              <Label htmlFor="amount" className="text-gray-900 mb-3 block">
                Select or Enter Amount (NGN)
              </Label>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset.toString())}
                    className={`py-3 px-4 rounded-lg border-2 transition-all ${
                      amount === preset.toString()
                        ? 'border-rose-600 bg-rose-50 text-rose-700'
                        : 'border-gray-200 hover:border-rose-300 text-gray-700'
                    }`}
                  >
                    ₦{preset.toLocaleString()}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter custom amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8 h-14 text-lg"
                />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <Label htmlFor="name" className="text-gray-900 mb-2 block">
                  Name (Optional)
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Anonymous"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-900 mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-900 mb-2 block">
                  Send a wish (Optional)
                </Label>
                <textarea
                  id="message"
                  placeholder="Write a short wish for Eunice..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-200 resize-y h-24"
                />
              </div>
            </div>

            
            <Button
              onClick={() => handleDonate()}
              disabled={isLoading}
              className="w-full h-14 bg-rose-600 hover:bg-rose-700 text-white text-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5 mr-2" />
                  Donate Now via Paystack
                </>
              )}
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Secure payment powered by Paystack • All donations are tax-deductible
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-900 text-center">
                <strong>Note:</strong> For international donors, please see the bank transfer details below
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
