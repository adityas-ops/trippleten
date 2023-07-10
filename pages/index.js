import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" w-full h-full flex justify-center">
        <div className="h-full  w-full pl-10">
          <div className="w-full h-[620px]   bg-white overflow-visible  relative">
            <div className="absolute  top-[36px] left-[60px] text-[#ffcb48] w-[1160px]">
              <h1 className=" font-noto font-[700] text-[86px]"> You can</h1>
            </div>
            <Link className="" href="#">
              <div className="absolute top-[509px] left-[461px] w-[270px] h-[60px] font-mono rounded-[14px] bg-[#3979e8] text-white flex items-center justify-center font-[500] z-20">
                Choose profession
              </div>
            </Link>
            <Link href="#">
              <div className=" absolute top-[509px] left-[751px] w-[270px] h-[60px] text-[#262626] text-center z-20 flex items-center justify-center font-[500] border-2 border-[#262626] rounded-[14px] ">
                How it works
              </div>
            </Link>
            <div className=" absolute top-[127px] left-[60px] w-[1106px] z-20">
              <h1 className=" font-noto font-[700] text-[86px] text-[#262626]">
                upgrade your career
              </h1>
            </div>
            <div className=" top-[211px] absolute left-[455px] w-[758px] text-[#ffcb48]">
              <h1 className=" font-noto font-[700] text-[86px] text-[#ffcb48]">
                even if
              </h1>
            </div>
            <div className=" absolute top-[318px] left-[455px] w-[683px] z-40">
              <h1 className=" font-noto font-[700] text-[86px] text-[#262626] tracking-[-2px] leading-[91px]">
                it seem pretty hard
              </h1>
            </div>
            <div className=" absolute left-[76px] z-50 top-[270px] w-[335px] ">
              <div className="img1">
                <img
                  src="/images/tild3832-6265-4864-a561-323034653662__isr-main-img-1.jpg"
                  alt="as"
                  className="w-full rounded-[24px]  "
                />
              </div>
            </div>
            <div className=" absolute top-[61px] left-[1072px] w-[222px] z-50">
              <div className="img2">
                <img
                  src="/images/tild3430-3735-4832-a432-386235336565__isr-main-img-2.jpg"
                  alt="as"
                  className="w-full rounded-[24px]"
                />
              </div>
            </div>
            <div className=" absolute left-[920px] w-[108px] top-[19px] z-50">
              <div className="img3">
                <img
                  src="/images/tild6164-3762-4566-b864-633963383064__isr-main-img-3.jpg"
                  className="w-full rounded-[24px]"
                  alt="as"
                />
              </div>
            </div>
            <div className=" absolute top-[12px] left-[500px] w-[120px]">
              <div className="img4">
                <img
                  src="/images/tild3038-6531-4238-a430-633938313637__isr-main-img-4.jpg"
                  className="w-full rounded-[24px]"
                  alt="as"
                />
              </div>
            </div>
            <div className=" absolute w-[740px] top-0 left-[620px] h-[602px] z-10">
              <div className=" bg-cover bg-no-repeat">
                <img
                  src="https://d30ql1y9posr4b.cloudfront.net/en-mys/tild3261-3765-4633-b530-663134356165__ind-main-ill-3.svg"
                  className="bg-cover bg-no-repeat"
                />
              </div>
            </div>
            <div className=" w-[200px] absolute top-[110px] z-10 h-[180px] left-[-81px] ">
              <img
                src="https://d30ql1y9posr4b.cloudfront.net/en-mys/tild3731-6238-4934-a561-346436633732__ind-main-ill-1.svg"
                alt="as"
                className="bg-cover bg-no-repeat"
              />
            </div>
            <div className=" absolute w-[400px] left-[120px] top-[-10px] h-[60px]">
              <img
                src="https://d30ql1y9posr4b.cloudfront.net/en-mys/tild6664-3933-4538-b862-356634366231__ind-main-ill-2.svg"
                alt="as"
                className="bg-cover bg-no-repeat"
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
