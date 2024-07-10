import CardSection from "@/components/CardSection";
import Domain from "@/components/Domain";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Migration from "@/components/Migration";
import PricingPlans from "@/components/PricingPlans";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import WebHosting from "@/components/WebHosting";
import WebsiteLive from "@/components/WebsiteLive";

export default function Home() {
  return (
    <main>
      <div className="w-[1330px] mx-auto">
        <Hero />
      </div>
      <Domain />
      <div className="w-[1330px] mx-auto">
        <JoinUs />
        <PricingPlans />
        <CardSection />
        <Migration />
        <Testimonial />
        <WebHosting />
        <WebsiteLive />
   
      </div>
      <Subscribe/>
    </main>
  );
}
