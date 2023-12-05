import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br />
            Storing everything for you and your business needs. All in one
            place.
          </h1>
          <p className="pb-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            voluptatum? Enim cumque sint commodi, veritatis consequuntur cum!
            Facere adipisci perspiciatis corrupti aliquid assumenda veritatis
            odit mollitia, doloribus delectus quia natus! Repudiandae atque
            sequi beatae repellendus fugiat nostrum libero perspiciatis saepe
            ullam iure est debitis vel odio, dignissimos temporibus hic illum.
          </p>
          <Link href={"/dashboard"}>
            <div className="bg-blue-500 w-fit px-8 py-4">
              Try for free! -&gt;
            </div>
          </Link>
          <video autoPlay loop muted className="rounded-lg my-8">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This video is made for informational and educational purposes only. We
        do not own or affiliate with Dropbox or/and any of its subsidiaries in
        any form. Copyright Disclaimer under section 107 of the Copyright Act.
        1976, allowance is made for "fair use" of this video for eduactional
        purposes.
      </p>
    </main>
  );
}
