import RulesImage from "../assets/images/rulesImage.png";
import WhiteStar from "../assets/images/starwhite.png";

export default function RulesSection() {
  return (
    <section className="text-white md:flex items-center justify-center gap-6 pb-4">
      <div className=" flex items-center justify-center pt-8 md:w-1/3 md:hidden">
        <img
          src={RulesImage}
          alt="vector of a woman sitting"
          width={294}
          height={382}
          className="md:w-[490px]"
        />
      </div>
      <div className="md:w-1/3">
        <p className="text-center md:text-start font-bold pt-4">Rules and</p>
        <p className="text-[#D434FE] text-center md:text-start font-bold">
          Guidelines
        </p>
        <span className="flex items-center justify-center pl-60">
          <img src={WhiteStar} alt="purple star" width={10} />
        </span>
        <p className="pt-6 text-center md:text-start px-10 md:px-0">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className=" hidden md:flex md:w-1/2">
        <img
          src={RulesImage}
          alt="big idea buld"
          width={294}
          className="md:w-[664px]"
        />
      </div>
    </section>
  );
}
