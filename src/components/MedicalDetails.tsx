import { Activity, Heart, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export function MedicalDetails() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Understanding Eunice's Condition</h2>
            <p className="text-xl text-gray-600">
              Learn about Ventricular Septal Defect (VSD) and why urgent surgery is critical
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-gray-900">The Problem</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Hole between the heart's lower chambers</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Blood flows abnormally between chambers</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Heart works harder, causing fatigue</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Lungs receive too much blood</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Can lead to heart failure if untreated</p>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-gray-900">The Solution</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Open-heart surgery to close the hole</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Surgical patch placed over the defect</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Heart tissue grows over the patch</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Normal blood flow restored</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">High success rate - excellent prognosis</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-8 h-8" />
              <h3>Current Symptoms Eunice Is Experiencing</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="mb-2">💙 Difficulty breathing</p>
                <p className="text-sm text-blue-100">Especially during feeding</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="mb-2">💙 Poor weight gain</p>
                <p className="text-sm text-blue-100">Not growing as expected</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="mb-2">💙 Rapid heartbeat</p>
                <p className="text-sm text-blue-100">Heart working overtime</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="mb-2">💙 Excessive sweating</p>
                <p className="text-sm text-blue-100">Even while resting</p>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-gray-900 mb-4">Why We Need to Act NOW</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Doctors have emphasized that delaying this surgery puts Eunice at severe risk. 
                  The hole in her heart is causing her lungs to be overworked, and her small body 
                  cannot sustain this condition much longer.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-rose-700">
                    The surgery is scheduled for as soon as we can raise the funds.
                  </strong>{' '}
                  Every day matters. Every donation counts. Please help us give Eunice the 
                  chance to grow up healthy and strong.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-6 border border-rose-200">
              <Heart className="w-10 h-10 text-rose-600 mx-auto mb-3 fill-current" />
              <p className="text-gray-700 mb-2">
                <strong>Success Rate: 95%+</strong>
              </p>
              <p className="text-gray-600">
                With your help, Eunice can join thousands of children who've successfully 
                overcome this condition and gone on to live normal, healthy lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
