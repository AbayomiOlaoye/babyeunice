'use client';

import { Heart, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import eunice from '../assets/bamidele_eunice.webp';
import withDad from '../assets/with-dad.jpeg';
import echoReportA from '../assets/echo-report-a.png';
import echoReportB from '../assets/echo-report-b.png';
import gift from '../assets/gift.jpeg';
import hospital from '../assets/atthehospital.jpeg';
import withMumAndDad from '../assets/mum-and-dad-with-eunice.jpeg';
import mumsPride from '../assets/mums-pride.jpeg';
import princessEunice from '../assets/princess-eunice.jpeg';
import cuteEunice from '../assets/cute-eunice.jpeg';

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export function StorySection() {
  const [slide, setSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  
  // main image animation variants
  const mainVariants = {
    enter: (direction: number) => ({ opacity: 0, x: 30 * direction }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    exit: (direction: number) => ({ opacity: 0, x: -30 * direction, transition: { duration: 0.35 } }),
  };
  // track direction for subtle slide motion
  const [direction, setDirection] = useState(1);
  const prev = () => {
    setDirection(-1);
    setSlide((s) => (s - 1 + carouselItems.length) % carouselItems.length);
  };
  const next = () => {
    setDirection(1);
    setSlide((s) => (s + 1) % carouselItems.length);
  };
  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalIndex(0);
    setModalOpen(false);
  };
  // ensure modal navigation safe
  const modalPrev = () => setModalIndex((i) => (i - 1 + carouselItems.length) % carouselItems.length);
  const modalNext = () => setModalIndex((i) => (i + 1) % carouselItems.length);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') modalPrev();
      if (e.key === 'ArrowRight') modalNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  const sendWhatsApp = () => {
    const phoneNumber = '2348161321148';
    const message = encodeURIComponent('Hello, I would like to verify the details regarding baby Eunice Bamidele\'s medical condition and fundraising efforts.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }

  const carouselItems = [
    {
      src: hospital,
      caption: 'Eunice receiving care at Obafemi Awolowo University Teaching Hospitals — Dept. of Pediatrics',
      alt: 'Eunice at the hospital receiving care'
    },
    {
      src: withMumAndDad,
      caption: 'Eunice being dedicated in the church — a family moment of hope and prayer',
      alt: 'Eunice at dedication'
    },
    {
      src: echoReportA,
      caption: 'Snapshot of Eunice’s echocardiogram (echo) report — confirming the diagnosis',
      alt: 'Echocardiogram report'
    },
    {
      src: echoReportB,
      caption: 'Page 2 of Eunice’s echocardiogram (echo) report — detailing the heart defect',
      alt: 'Echocardiogram report'
    },
    {
      src: withDad,
      caption: 'Eunice with her father, Felix Bamidele — a moment of bonding and strength filled with hope',
      alt: 'Eunice with dad'
    },
    {
      src: mumsPride,
      caption: 'Eunice being held by her gracefully caring mother — a testament to maternal love and resilience',
      alt: 'Eunice with mum'
    },
    {
      src: princessEunice,
      caption: 'Our little princess Eunice — full of innocence and the will to fight',
      alt: 'Princess Eunice'
    },
    {
      src: cuteEunice,
      caption: 'A candid moment of Eunice smiling — reminding us of the joy she brings',
      alt: 'Cute Eunice'
    },
    {
      src: gift,
      caption: 'A heartwarming moment with the father, Felix Bamidele, at her christening.',
      alt: 'Eunice with gift'
    },
  ];

  // Preload images to avoid load/pop-in during transitions
  useEffect(() => {
    carouselItems.forEach((it) => {
      try {
        const img = new Image();
        img.src = it.src as string;
      } catch (e) {
        // ignore
      }
    });
  }, [carouselItems]);
  
  // smoother transition config
  const transitionConfig = { duration: 0.48, ease: [0.22, 0.9, 0.3, 1] };

  return (
    <div id="story" className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Eunice's Story</h2>
          <p className="text-xl text-gray-600">A fight for life that started before she could even smile</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-[480px] md:h-full">
              <div
                className="relative w-full h-full bg-gray-50 p-4 rounded-lg overflow-hidden cursor-pointer"
                aria-hidden
              >
                <div className="absolute inset-0 flex items-center justify-between px-2 z-10 pointer-events-auto">
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    aria-label="Previous image"
                    className="bg-rose-100 w-10 h-10 hover:bg-white text-4xl rounded-full shadow-md"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    aria-label="Next image"
                    className="bg-rose-100 w-10 h-10 hover:bg-white text-4xl rounded-full shadow-md"
                  >
                    ›
                  </button>
                </div>

                <div className="relative w-full h-full flex items-center justify-center">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      animate={{ x: 0, opacity: 1, transition: transitionConfig }}
                      exit={{ x: -100 * direction, opacity: 0, transition: transitionConfig }}
                      key={carouselItems[slide]?.src ?? slide}
                      src={carouselItems[slide]?.src}
                      alt={carouselItems[slide]?.alt ?? `slide-${slide}`}
                      custom={direction}
                      initial={{ x: 100 * direction, opacity: 0 }}
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        minHeight: '500px',
                        maxHeight: '100%',
                        willChange: 'transform, opacity',
                      }}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-14">
              <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-2 rounded-full mb-6">
                <AlertCircle className="w-4 h-4" />
                <span>Critical Condition</span>
              </div>
              
              <h3 className="text-gray-900 mb-6">A Mother's Desperate Plea</h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  When baby Eunice was born six months ago, her parents' joy quickly turned to fear.
                  During a routine checkup at the Obafemi Awolowo University Teaching Hospitals — Department of Pediatrics,
                  doctors discovered she has a <strong>Ventricular Septal Defect (VSD)</strong> — a hole in her heart that prevents proper blood flow.
                </p>
                
                <p>
                  Every day is a struggle. Eunice tires easily, struggles to feed, and her tiny body isn't getting the oxygen it needs to grow.
                  Her mother holds her through sleepless nights, praying for a miracle while the family tries to navigate medical and financial hurdles.
                </p>
                
                <p>
                  The good news is that this condition is treatable with surgery. The heartbreaking news is that Eunice's family cannot afford the ₦19 million
                  needed for the cardiac catheterization and operation. Her father, Felix Bamidele, is the account holder receiving donations for Eunice — this is
                  verifiable through hospital documentation and the family’s stated details or via <span onClick={sendWhatsApp} title="Click to send a WhatsApp message" className="text-rose-600 font-black cursor-pointer underline">WhatsApp</span>.
                </p>
                
                <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg mt-6">
                  <p className="text-rose-900 italic">
                    "Without this surgery, doctors have given Eunice only months to live. 
                    But with your help, she can grow up to celebrate birthdays, go to school, 
                    and live the life every child deserves."
                  </p>
                </div>
               </div>
             </div>
           </div>
         </div>
        
        {/* Carousel: hospital / dedication / echo snapshots */}
        <div className="mt-8">
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="flex gap-2 p-3 bg-gray-50 overflow-x-auto">
              {carouselItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    // set sliding direction based on index to keep motion consistent
                    setDirection(i > slide ? 1 : -1);
                    setSlide(i);
                  }}
                  className={`rounded-md overflow-hidden border ${i === slide ? 'ring-2 ring-rose-500' : 'border-transparent'}`}
                >
                  <ImageWithFallback src={item.src} alt={item.alt} className="w-12 h-12 object-cover bg-white p-1" />
                </button>
              ))}
            </div>
            <div className="p-4 md:p-6 flex items-center justify-between">
              <motion.p
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-gray-700 max-w-3xl"
              >
                {carouselItems[slide].caption}
              </motion.p>
              <div className="flex items-center gap-2">
                <button onClick={prev} aria-label="Previous" className="rounded-full w-8 h-8 bg-gray-100 hover:bg-rose-300">
                  ‹
                </button>
                <button onClick={next} aria-label="Next" className="rounded-full w-8 h-8 bg-gray-100 hover:bg-rose-300">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal / Lightbox */}
        {/* <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2"
                aria-label="Close media modal"
              >
                <CloseIcon aria-hidden="true" />
              </button>

              <div className="relative w-full max-h-screen">
                <img
                  src={carouselItems[modalIndex]?.src ?? ''}
                  alt={carouselItems[modalIndex]?.alt ?? "Eunice's photo"}
                  width={500}
                  height={800}
                  className="w-full h-auto max-h-screen object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <h4 className="text-gray-900 mb-2">Life-Saving Surgery</h4>
            <p className="text-gray-600">
              Advanced cardiac surgery to repair the hole in Eunice's heart
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <h4 className="text-gray-900 mb-2">Post-Op Care</h4>
            <p className="text-gray-600">
              Essential medical care and monitoring during recovery
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <h4 className="text-gray-900 mb-2">A Healthy Future</h4>
            <p className="text-gray-600">
              Give Eunice the chance to live a normal, healthy childhood
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
