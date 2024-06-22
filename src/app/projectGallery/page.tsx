import Footer from "@/components/Footer"
import MyNavbar from "@/components/MyNavbar"
import Image from "next/image"


    const getImageData = () => {
        return [
            { src: "/images/galleryImages/galleryimage1.jpg", alt: "Gallery Image 1" },
            { src: "/images/galleryImages/galleryimage2.jpg", alt: "Gallery Image 2" },
            { src: "/images/galleryImages/galleryimage3.jpg", alt: "Gallery Image 3" },
            { src: "/images/galleryImages/galleryimage4.jpg", alt: "Gallery Image 4" },
            { src: "/images/galleryImages/galleryimage5.jpg", alt: "Gallery Image 5" },
            { src: "/images/galleryImages/galleryimage6.jpg", alt: "Gallery Image 6" },
            { src: "/images/galleryImages/galleryimage7.jpg", alt: "Gallery Image 7" },
            { src: "/images/galleryImages/galleryimage8.jpg", alt: "Gallery Image 8" },
            { src: "/images/galleryImages/galleryimage9.jpg", alt: "Gallery Image 9" },
            { src: "/images/galleryImages/galleryimage10.jpg", alt: "Gallery Image 10" },
            { src: "/images/galleryImages/galleryimage11.jpg", alt: "Gallery Image 11" },
            { src: "/images/galleryImages/galleryimage12.jpg", alt: "Gallery Image 12" },
            { src: "/images/galleryImages/galleryimage13.jpg", alt: "Gallery Image 13" },
            { src: "/images/galleryImages/galleryimage14.jpg", alt: "Gallery Image 14" },
            { src: "/images/galleryImages/galleryimage15.jpg", alt: "Gallery Image 15" },
            { src: "/images/galleryImages/galleryimage16.jpg", alt: "Gallery Image 16" },
            { src: "/images/galleryImages/galleryimage17.jpg", alt: "Gallery Image 17" },
            { src: "/images/galleryImages/galleryimage18.jpg", alt: "Gallery Image 18" },
            { src: "/images/galleryImages/galleryimage19.jpg", alt: "Gallery Image 19" },
            { src: "/images/galleryImages/galleryimage20.jpg", alt: "Gallery Image 20" }
        ]
    }

    export default function Gallery() {
        const images = getImageData();

    return (
        <div className="bg-gray-300">
            <div className="background">
                <MyNavbar />
            </div>
            <div className="">
                <h1 className="frontPage-header text-gray-900 text-center text-4xl lg:text-9xl my-8 font-bold">Gallery</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-3 sm:mx-5 my-8 ">
                {images.map((image, index) => (
                    <div key={index} className="">
                        <Image 
                            src={image.src} 
                            alt={image.alt} 
                            width={500} 
                            height={500} 
                            className="rounded-xl"
                            />
                    </div>
                ))}
            </div>
            <div className="">
                <Footer />
            </div>
        </div>

    )
}

