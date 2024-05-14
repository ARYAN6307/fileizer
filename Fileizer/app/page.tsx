// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Free Unlimited File Converter</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
              Boost your productivity with Fileizer – the premier online tool for seamless multimedia conversion. Effortlessly transform images, audio, and videos according to your needs, with no limitations. Tailored to your compatibility, Fileizer ensures ease of use, empowering you to elevate your content and productivity to new heights. Experience the difference today!
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
