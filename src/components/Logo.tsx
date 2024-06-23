import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex md:justify-center">
                <Image
                    src="/images/foster-and-sons-logo-removebg.png"
                    alt="Foster & Sons Construction"
                    width={120}
                    height={100}
                    className="logo"
                />
        </div>
    );
}