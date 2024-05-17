import HomeBanners from "@/components/HomeBanners";
import HomeDisplay from "@/components/HomeDisplay";
import HomeReviews from "@/components/HomeReviews";
import HomeServices from "@/components/HomeServices";


export default function Home() {
  return (
    <main>
      <HomeBanners />
      <HomeServices />
      <HomeDisplay />
      <HomeReviews />
    </main>
  );
}
