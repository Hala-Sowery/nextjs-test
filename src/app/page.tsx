import MainComp from "../components/MainComp";
import Card from "../components/Card";
import tringle from "../images/triangle.png";
export default function Home() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur";
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed vulputate mi, commodo varius dolor. Sed ligula purus, blandit quiselit in, facilisis aliquet ligula. Mauris posuere pharetra semper. Aliquam ut enim eget nunc lacinia sodales. Nullam ultricies lorem quis est sagittis gravida.";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-24 p-24">
      <div className="flex flex-col justify-between items-center xl:h-32">
        <h2 className="text-2xl font-bold text-primary-800 pb-8">
          Next JS Test
        </h2>
        <span>{longText}</span>
      </div>
      <MainComp
        flexType="col"
        title="Title Goes Here"
        paragraph={longText}
        childrenClassName="flex flex-wrap justify-center gap-x-8 gap-y-8 my-8"
      >
        <Card
          corner={<img src={tringle.src} />}
          cornerClassName="contrast-50 w-12 h-12 -rotate-90 absolute right-0 top-0 pt-2"
        >
          <span>{text}</span>
        </Card>
        <Card
          corner={<img src={tringle.src} />}
          cornerClassName="contrast-50 w-12 h-12 -rotate-90 absolute right-0 top-0 pt-2"
        >
          <span>{text}</span>
        </Card>
        <Card
          corner={<img src={tringle.src} />}
          cornerClassName="contrast-50 w-12 h-12 -rotate-90 absolute right-0 top-0 pt-2"
        >
          <span>{text}</span>
        </Card>
        <Card
          corner={<img src={tringle.src} />}
          cornerClassName="contrast-50 w-12 h-12 -rotate-90 absolute right-0 top-0 pt-2"
        >
          <span>{text}</span>
        </Card>
      </MainComp>
      <MainComp
        flexType="row"
        title="Title Goes Here"
        paragraph={longText}
        childrenClassName="justify-center items-center md:justify-end grid grid-rows-2 grid-cols-2 max-md:flex max-md:flex-col gap-x-8 gap-y-8 my-8"
      >
        <Card
          cardClassName="md:-mb-16"
          corner={
            <h1 className="md:text-[60px] text-[40px] font-extrabold text-greydark-50">
              1
            </h1>
          }
          cornerClassName="absolute right-0 top-0 pr-4"
        >
          <span>{text}</span>
        </Card>
        <Card
          corner={
            <h1 className="md:text-[60px] text-[40px] font-extrabold text-greydark-50">
              2
            </h1>
          }
          cornerClassName="absolute right-0 top-0 pr-4"
        >
          <span>{text}</span>
        </Card>
        <Card
          cardClassName="md:-mb-16"
          corner={
            <h1 className="md:text-[60px] text-[40px] font-extrabold text-greydark-50">
              3
            </h1>
          }
          cornerClassName="absolute right-0 top-0 pr-4"
        >
          <span>{text}</span>
        </Card>
        <Card
          corner={
            <h1 className="md:text-[60px] text-[40px] font-extrabold text-greydark-50">
              4
            </h1>
          }
          cornerClassName="absolute right-0 top-0 pr-4"
        >
          <span>{text}</span>
        </Card>
      </MainComp>
      <MainComp mainCompClassName="bg-transparent m-0">
        <div></div>
      </MainComp>
    </main>
  );
}
