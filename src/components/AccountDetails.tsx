import { Building2, Copy, Globe, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'react-toastify';

export function AccountDetails() {
  const copyToClipboard = (text: string, label: string) => {
    try {
      navigator.clipboard.writeText(text);
      toast.success(`${label} copied to clipboard!`);
    } catch (error) {
      toast.info(`${label}: ${text}`);
    }
  };

  const localAccount = {
    bankName: 'First Bank of Nigeria',
    accountName: 'Bamidele Felix Sunday',
    accountNumber: '3079083639',
    sortCode: '011',
  };

  const internationalAccount = {
    bankName: 'Lead Bank',
    accountName: 'Felix Bamidele',
    accountNumber: '216811517376',
    accountType: 'Checking',
    bankAddress: '1801 Main St., Kansas City, MO 64108, USA',
    currency: 'USD',
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Alternative Payment Methods</span>
            </div>
            <h2 className="text-gray-900 mb-4">Bank Transfer Details</h2>
            <p className="text-xl text-gray-600">
              For those who prefer bank transfers or international donations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Local Transfers */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900">Local Transfers (NGN)</h3>
                  <p className="text-sm text-gray-600">For Nigerian donors</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-900">{localAccount.bankName}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(localAccount.bankName, 'Bank name')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Account Name</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-900">{localAccount.accountName}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(localAccount.accountName, 'Account name')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Account Number</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl text-gray-900">{localAccount.accountNumber}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(localAccount.accountNumber, 'Account number')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Sort Code</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-900">{localAccount.sortCode}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(localAccount.sortCode, 'Sort code')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div> */}
              </div>
            </div>

            {/* International Transfers */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900">International Transfers</h3>
                  <p className="text-sm text-gray-600">For global donors</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-900">{internationalAccount.bankName}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(internationalAccount.bankName, 'Bank name')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Account Name</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-900">{internationalAccount.accountName}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(internationalAccount.accountName, 'Account name')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Account Number</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-900">{internationalAccount.accountNumber}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(internationalAccount.accountNumber, 'Account number')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Account Type</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-900">{internationalAccount.accountType}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(internationalAccount.accountType, 'Account type')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Bank Address</p>
                  <p className="text-sm text-gray-900">{internationalAccount.bankAddress}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Building2 className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="text-gray-900 mb-2">Important Note for Bank Transfer Donors</h4>
                <p className="text-gray-700 leading-relaxed">
                  After making a bank transfer, please send us an email at{' '}
                  <a href="mailto:donate@savebabyeunice.org" className="text-blue-600 hover:underline">
                    donate@savebabyeunice.org
                  </a>{' '}
                  with your transfer receipt and details so we can acknowledge your donation and update the progress tracker. 
                  Your generosity helps save Eunice's life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}