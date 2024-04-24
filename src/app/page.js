import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-main flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-secondary rounded-lg w-full mx-8 py-8 max-w-sm">

        {/* Profile Image */}
        <div id="img" className="overflow-hidden rounded-full h-24 w-24">
          <Image src="/avatar-jessica.jpeg" alt="image" width={1000} height={1000}></Image>
        </div>


        {/* Description */}
        <div id="description" className="mt-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl text-white font-medium font-inter tracking-wide">Jessica Randall</h2>
          <p className="mt-1 text-active font-inter font-semibold text-sm">London, United Kingdom</p>
        </div>

        {/* Bio */}
        <div id="bio" className="mt-5">
          <p className="text-white text-sm font-inter font-light">"Front-end developer and avid reader.</p>
        </div>

        {/* Buttons */}
        <ul id="buttons" className="mt-5 w-full px-5">
          <li className="w-full bg-buttons my-3 py-3 rounded-lg text-center text-white font-inter font-medium text-sm hover:bg-active hover:text-secondary transition-all ease-in-out delay-50 cursor-pointer">Github</li>
          <li className="w-full bg-buttons my-3 py-3 rounded-lg text-center text-white font-inter font-medium text-sm hover:bg-active hover:text-secondary transition-all ease-in-out delay-50 cursor-pointer">Frontend Mentor</li>
          <li className="w-full bg-buttons my-3 py-3 rounded-lg text-center text-white font-inter font-medium text-sm hover:bg-active hover:text-secondary transition-all ease-in-out delay-50 cursor-pointer">LinkedIn</li>
          <li className="w-full bg-buttons my-3 py-3 rounded-lg text-center text-white font-inter font-medium text-sm hover:bg-active hover:text-secondary transition-all ease-in-out delay-50 cursor-pointer">Twitter</li>
          <li className="w-full bg-buttons my-3 py-3 rounded-lg text-center text-white font-inter font-medium text-sm hover:bg-active hover:text-secondary transition-all ease-in-out delay-50 cursor-pointer">Instagram</li>
        </ul>
      </div>
    </main>
  );
}
