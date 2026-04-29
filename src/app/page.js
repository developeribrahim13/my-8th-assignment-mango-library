import Image from "next/image";
import banner from '@/assets/banner.png'
export default function Home() {
  return (
    <section>
      <Image src={banner} alt="bannerImg"></Image>
    </section>
  );
}
