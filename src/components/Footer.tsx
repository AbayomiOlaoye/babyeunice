import { Heart, Mail, Phone, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'react-toastify';

export function Footer() {
  const shareCampaign = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Help Save Baby Eunice',
        text: 'Please help baby Eunice get the life-saving heart surgery she needs. Every donation counts!',
        url: window.location.href,
      }).then(() => {
        toast.success('Thank you for sharing!');
      }).catch(() => {
        // Fallback to clipboard
        copyLink();
      });
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard! Share it to spread the word.');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 mx-auto mb-4 text-rose-400 fill-current" />
            <h3 className="text-white mb-4">Help Us Spread the Word</h3>
            <p className="text-gray-300 mb-6">
              Can't donate? You can still help by sharing Eunice's story with your network. 
              Every share brings us closer to our goal.
            </p>
            <Button
              onClick={shareCampaign}
              className="bg-rose-600 hover:bg-rose-700"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share This Campaign
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-700">
            <div>
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:donate@savebabyeunice.org" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  donate@savebabyeunice.org
                </a>
                <a 
                  href="tel:+2348161321148" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +234 816 132 1148
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#story" className="block text-gray-300 hover:text-white transition-colors">
                  Eunice's Story
                </a>
                <a href="#donate" className="block text-gray-300 hover:text-white transition-colors">
                  Donate Now
                </a>
                <a href="#donate" className="block text-gray-300 hover:text-white transition-colors">
                  Bank Transfer Details
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400">
            <p className="mb-2">
              Campaign for Baby Eunice - Every Heartbeat Matters
            </p>
            <p className="text-sm">
              All donations go directly toward Eunice's medical treatment. 
              Thank you for your generosity and compassion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}