import Image from "next/image";

export default function Logo() {
    return (
        <div>
            <Image
                src="/images/foster-and-sons-logo-removebg.png"
                alt="Foster & Sons Construction"
                width={150}
                height={100}
                className="logo"
            />
        </div>
    );
}