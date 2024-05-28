import Hero from "@/components/hero";
import homeImg from "../../public/home.jpg";

export default function Home() {
  return (
    <div className="absolute -z-10 inset-0">
      <Hero
        imgData={homeImg}
        imgAlt="car factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
