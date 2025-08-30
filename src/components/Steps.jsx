// import React from 'react';
// import ifrom from '@/assets/iform.png'
// import Image from 'next/image';

// const steps = [
//   {
//     id: 1,
//     title: 'Upload 2-3 hours of speech',
//     description:
//       "While professional equipment isn’t necessary, an hour of clear audio recordings of your voice (without music or background noise) will produce the best quality voice clone.",
//     image: '/path-to-upload-icon.png',
//   },
//   {
//     id: 2,
//     title: 'Wait for few hours',
//     description:
//       "To build trust, we thoroughly screen all voice cloning requests to make sure no one’s voice is used without their explicit consent.",
//     image: '/path-to-screening-icon.png',
//   },
//   {
//     id: 3,
//     title: 'Use it in the editor or API',
//     description:
//       "You’ll find your cloned voice in a special “Cloned” section, conveniently located with our other incredibly realistic voice choices.",
//     image: '/path-to-api-icon.png',
//   },
// ];

// export default function VoiceCloneSteps() {
//   return (
//     <div className="bg-black min-h-screen flex flex-col items-center py-16 px-6 text-white ">
//       <div className="text-center mb-12">
//         <div className="text-sm bg-white text-purple-700 px-4 py-1 rounded-full inline-block mb-3 font-semibold">
//           How it works
//         </div>
//         <h1 className="text-3xl md:text-5xl capitalize font-semibold mb-4">
//              It Works In  3 Easy steps 
//         </h1>
//         <p className="text-md md:text-lg max-w-2xl mx-auto text-purple-100">
//           Refine, Adjust, Perfect: Craft your ideal voice output with intuitive settings. Achieve clarity, stability, or expressiveness—tailored precisely to your needs.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
//         {steps.map((step) => (
//           <div
//             key={step.id}
//             className=" bg-opacity-10 backdrop-blur-lg rounded-xl p-6 flex flex-col gap-4 border border-white border-opacity-20"
//           >
//             <div className="text-2xl font-bold text-white">{step.id}</div>
//             <h3 className="text-xl font-semibold">{step.title}</h3>
//             <p className="text-sm text-purple-100">{step.description}</p>
//             {/* Placeholder for image */}
             
//             <Image src={ifrom} className='rotate-20 mt-8' />
//            </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Fill a short form and book a free strategy call',
    description: '',
    image: '/step1.png', // Replace with real image
    style: 'rotate-[-6deg]',
  },
  {
    id: '02',
    title: 'On Google Meet, we finalize design and collect content',
    description: '',
    image: '/step2.png', // Replace with real image
    style: '',
  },
  {
    id: '03',
    title: 'We go live in 24 hours, and start growing your business',
    description: '',
    image: '/step3.png', // Replace with real image
    style: 'rotate-[6deg]',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black py-16 px-8 ">
     <div className='max-w-7xl mx-auto px-8'>
       <h2 className="bg-gradient-to-r special-font from-white via-sky-100 to-sky-300 bg-clip-text text-transparent text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
         It Works In  3 Easy Steps 
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8  transition-all ease-in-out">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`bg-gradient-to-tr from-[#95ddff] via-black hover:via-[#95ddff] border-[1px] border-[#823dfa4c] transition-all ease-in-out durat0 to-black text-white rounded-2xl p-6 w-72 transform  shadow-xl ${step.style}`}
          >
            <div className="text-lime-400  transition-all ease-in-out font-bold text-xl mb-1">
              <span className="text-white mr-1">{step.id}</span>⭐
            </div>
            <h3 className="text-lg font-medium mb-4 leading-snug">{step.title}</h3>

            {/* <div className="bg-gray-800 rounded-lg overflow-hidden h-40 flex items-center justify-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>
        ))}
      </div>
     </div>
    </section>
  );
}
