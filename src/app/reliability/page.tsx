import Hero from "@/components/hero";
import reliabiltyImg from "../../../public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        imgData={reliabiltyImg}
        imgAlt="welding"
        title="Super high reliability hosting"
      />
    </div>
  );
}
