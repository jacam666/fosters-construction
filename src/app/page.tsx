import MyNavbar from "@/components/MyNavbar";

export default function Home() {
  return (
    <div className="background">
      <div>
        <MyNavbar />
      </div>
      <div className="flex justify-center mx-auto">
        <h1 className="frontPage-header text-white text-5xl p-4 lg:w-3/4 lg:text-7xl text-center ">Foster & Sons Construction</h1>
      </div>
    </div>
  );
}
