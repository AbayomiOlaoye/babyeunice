import { Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImg from '../assets/babyEunice.jpeg';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-blue-100">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-rose-300 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span>Urgent Medical Appeal</span>
            </div>
            
            <h1 className="mb-6">
              <span className="block text-gray-900">Help Save</span>
              <span className="block text-rose-600">Baby Eunice's Life</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Every heartbeat matters. At just 7 months old, little Eunice is fighting for her life 
              with a hole in her heart. With your help, she can get the life-saving surgery she desperately needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#donate" 
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-current" />
                Donate Now
              </a>
              <a 
                href="#story" 
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 transition-colors"
              >
                Read Her Story
              </a>
            </div>
          </div>
          
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-blue-400 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
                <ImageWithFallback 
                  src={heroImg}
                  alt="Baby Eunice"
                  className="max-w-full rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <p className="text-gray-900 mb-1">Baby Eunice Bamidele</p>
                  <p className="text-sm text-gray-600">7 months old • Fighting for life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
