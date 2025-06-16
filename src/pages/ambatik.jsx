import { FaDownload } from "react-icons/fa";
import GalleryImage from "../component/GaleryImage";
import UISlider from "../component/UISlider";

const imageArray = [
  ["assets/source-batik/gajah oling/30.jpeg", "Gajah Oling"],
  ["assets/source-batik/gastro rinonce/19.jpg", "Gastro Rinonce"],
  ["assets/source-batik/jagung miji emas/15.jpg", "Jagung Miji Emas"],
  ["assets/source-batik/koi/10.jpg", "Koi"],
  ["assets/source-batik/lengko/9.png", "Lengko"],
  ["assets/source-batik/lokcan/24.jpeg", "Lokcan"],
  ["assets/source-batik/pace/18.jpeg", "Pace"],
  ["assets/source-batik/pring sedapur/32.jpeg", "Pring Sedapur"],
  ["assets/source-batik/sekar jati/14.jpeg", "Sekar Jati"],
  ["assets/source-batik/serat kayu/30.jpeg", "Serat Kayu"],
  ["assets/source-batik/tumpal/46.jpg", "Tumpal"],
];

const uiScreenshots = [
  '/assets/image-ui/1.jpg',
  '/assets/image-ui/2.jpg',
  '/assets/image-ui/3.jpg',
  '/assets/image-ui/4.jpg',
  '/assets/image-ui/5.jpg',
  '/assets/image-ui/6.jpg',
];


const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Ambathik = () => {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div className="text-white lg:flex lg:flex-col lg:justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-slate-300 sm:text-6xl">
            AMBATHIK
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-3xl">
            Application Batik Recognition
          </h2>
          <p className="mt-4 max-w-sm leading-normal text-slate-400 sm:text-lg">
            Capture a batik pattern and instantly discover its name, heritage,
            and meaning.
          </p>
          <nav
            className="nav hidden lg:block mb-5"
            aria-label="In-page jump links"
          >
            <ul className="mt-10 mb-10 w-max">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="group flex items-center py-3 active"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("list-of-batik")}
                  className="group flex items-center py-3"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    List Of Batik
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="group flex items-center py-3 "
                  onClick={() => scrollToSection("UI")}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    App UI
                  </span>
                </button>
              </li>
            </ul>
          </nav>
          <a
            href=""
            className="flex bg-teal-500 h-15 w-60 text-2xl font-semibold rounded-4xl justify-center items-center"
          >
            <p className="pr-5">Download</p>
            <FaDownload />
          </a>
        </div>
      </header>
      <main className="pt-24 lg:w-[52%] lg:py-24">
        <section
          id="about"
          className="mb-10 scroll-mt-16 md:mb-24 lg:mb-20 lg:scroll-mt-24"
          aria-label="About me"
        >
          <h1 className="text-3xl text-white mb-5 font-bold">About</h1>
          <div>
            <p className="mb-4 text-slate-400">
              <strong className="text-white">Ambathik </strong>is an innovative
              mobile application built with Flutter, designed to recognize and
              classify Indonesian batik patterns through image input. By
              utilizing advanced machine learning algorithms, the app accurately
              identifies various types of batik and delivers insightful
              explanations about the{" "}
              <strong className="text-white">
                meaning, philosophy, and cultural heritage
              </strong>{" "}
              behind each motif.
            </p>
            <p className="mb-4 text-slate-400">
              To ensure high accuracy and flexibility across different devices,
              Ambathik is powered by{" "}
              <strong className="text-white">three AI models</strong>:{" "}
              <strong className="text-white">Inception V3</strong>,{" "}
              <strong className="text-white">MobileNet V2</strong>, and{" "}
              <strong className="text-white">MobileViT</strong>. Each model
              offers unique strengths—ranging from deep feature extraction to
              lightweight performance— enabling the app to run efficiently while
              maintaining reliable classification across a wide range of batik
              motifs.
            </p>

            <p className="mb-4 text-slate-400">
              Whether you're a student, researcher, designer, or simply a batik
              enthusiast, Ambathik provides a{" "}
              <strong className="text-white">smart and accessible way</strong>{" "}
              to explore Indonesia’s{" "}
              <strong className="text-white">rich textile traditions</strong>.
              The app is capable of scanning batik images from your gallery or
              camera, then instantly providing{" "}
              <strong className="text-white">detailed information</strong> about
              the pattern, its region of origin, and symbolic meaning —
              <strong className="text-white">
                bridging tradition and technology
              </strong>{" "}
              in the palm of your hand.
            </p>
            <p className="mb-4 text-slate-400">
              With a{" "}
              <strong className="text-white">user-friendly interface</strong>{" "}
              and
              <strong className="text-white"> offline capability</strong>,
              Ambathik aims to make
              <strong className="text-white">
                cultural learning engaging and relevant
              </strong>{" "}
              in the digital age. It also serves as a gateway for{" "}
              <strong className="text-white">younger generations</strong> to
              connect with local wisdom, while offering global users a glimpse
              into the
              <strong className="text-white">
                depth and beauty of Indonesian batik
              </strong>
              .
            </p>
            <p className="mb-4 text-slate-400">
              Ambathik is not just a tool for identification—it is a platform
              for
              <strong className="text-white">appreciation</strong>,{" "}
              <strong className="text-white">education</strong>, and{" "}
              <strong className="text-white">cultural preservation</strong>.
            </p>
          </div>
        </section>
        <section id="list-of-batik">
          <h1 className="text-white text-3xl pb-5 font-bold pt-20">
            Motif yang Telah Dilatih dalam Model
          </h1>
          <GalleryImage imageLinks={imageArray} />
        </section>
        <section id="UI" className="mt-20">
          <h1 className="text-3xl text-white font-bold mb-5">UI Aplikasi</h1>
          <UISlider imageLinks={uiScreenshots} />
        </section>
      </main>
    </div>
  );
};

export default Ambathik;
