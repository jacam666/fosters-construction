
// import Image from 'next/image';
// import React from 'react';

// const Slider: React.FC = () => {
//     return (
//         <section>
//             <div className="flex flex-row space-x-4 overflow-x-auto snap-x snap-mandatory mx-2 py-4">
//                 {/* Slider Item 1 */}
//                 <div className="flex-shrink-0 snap-start">
//                     <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[200px]">
//                         <Image
//                             src="/images/review-demo-image.png"
//                             alt="review image 1"
//                             fill
//                             className="object-fill"
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//                 {/* Slider Item 2 */}
//                 <div className="flex-shrink-0 snap-start">
//                     <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[200px]">
//                         <Image
//                             src="/images/review-demo-image.png"
//                             alt="review image 2"
//                             fill
//                             className="object-fill"
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//                 {/* Slider Item 3 */}
//                 <div className="flex-shrink-0 snap-start">
//                     <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[200px]">
//                         <Image
//                             src="/images/review-demo-image.png"
//                             alt="review image 3"
//                             fill
//                             className="object-fill"
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//                 {/* Slider Item 4 */}
//                 <div className="flex-shrink-0 snap-start">
//                     <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[200px]">
//                         <Image
//                             src="/images/review-demo-image.png"
//                             alt="review image 4"
//                             fill
//                             className="object-fill"
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//                 {/* Slider Item 5 */}
//                 <div className="flex-shrink-0 snap-start">
//                     <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[200px]">
//                         <Image
//                             src="/images/review-demo-image.png"
//                             alt="review image 5"
//                             fill
//                             className="object-fill"
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//                 {/* Slider Item 6 */}
//                 <div className="flex-shrink-0 snap-start">
//                     <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[200px]">
//                         <Image
//                             src="/images/review-demo-image.png"
//                             alt="review image 6"
//                             fill
//                             className="object-fill"
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Slider;


//import Image from 'next/image';
import React from 'react';
import CardBody from './CardBody';

const Slider: React.FC = () => {
    return (
        <section>
            <div className="flex flex-row space-x-4 overflow-x-auto snap-x snap-mandatory mx-2 mb-6 py-8">
                {/* Slider Item 1 */}
                <div className="flex-shrink-0 snap-start">
                    <div className="relative w-[400px] h-[100px] md:w-[400px] md:h-[200px]">
                    <CardBody>
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h1 className="text-xl font-bold text-white">John Major:</h1>
                            <div className="text-yellow-200">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p className="text-white">
                            &quot;Absolutely amazing service and quality. My new windows look fantastic.&quot;
                        </p>
                    </CardBody>
                    </div>
                </div>
                {/* Slider Item 2 */}
                <div className="flex-shrink-0 snap-start">
                    <div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px]">
                    <CardBody>
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h1 className="text-xl font-bold text-white">Boris Johnson:</h1>
                            <div className="text-yellow-200">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p className="text-white">
                            &quot;Efficient and friendly! The installation was prompt, and the trade pricing made it a no-brainer.&quot;
                        </p>
                    </CardBody>
                    </div>
                </div>
                {/* Slider Item 3 */}
                <div className="flex-shrink-0 snap-start">
                    <div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px]">
                    <CardBody>
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h1 className="text-xl font-bold text-white">Vlad Putin:</h1>
                            <div className="text-yellow-200">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p className="text-white">
                            &quot;Top-notch craftsmanship and outstanding customer service. My home feels transformed.&quot;
                        </p>
                    </CardBody>
                    </div>
                </div>
                {/* Slider Item 4 */}
                <div className="flex-shrink-0 snap-start">
                    <div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px]">
                    <CardBody>
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h1 className="text-xl font-bold text-white">Vlad Putin:</h1>
                            <div className="text-yellow-200">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p className="text-white">
                            &quot;Top-notch craftsmanship and outstanding customer service. My home feels transformed.&quot;
                        </p>
                    </CardBody>
                    </div>
                </div>
                {/* Slider Item 5 */}
                <div className="flex-shrink-0 snap-start">
                    <div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px]">
                    <CardBody>
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h1 className="text-xl font-bold text-white">Vlad Putin:</h1>
                            <div className="text-yellow-200">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p className="text-white">
                            &quot;Top-notch craftsmanship and outstanding customer service. My home feels transformed.&quot;
                        </p>
                    </CardBody>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;

