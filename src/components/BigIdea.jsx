import BigIdeaBulb from "../assets/images/bigidea.png";
import curlyArrow from "../assets/images/curlyarrow.png";
import PurpleStar from "../assets/images/purplestar.png";

export default function BigIdea() {
  return (
    <section className="text-white md:flex items-center justify-center gap-6 pb-4 border-b-white border-b-1">
      <div className="pt-8 flex flex-col md:flex-row items-center justify-center md:w-1/3">
        <img
          src={BigIdeaBulb}
          alt="big idea buld"
          width={264}
          className="md:w-[490px]"
        />
        <img
          src={curlyArrow}
          alt=" curly arrow"
          width={30}
          className="md:pt-60"
        />
      </div>
      <div className="md:w-1/2 pl-6">
        <p className="text-center md:text-start font-bold pt-4">
          Introduction to getlinked
        </p>
        <p className="text-[#D434FE] text-center md:text-start font-bold">
          tech Hackathon 1.0
        </p>
        <span className="flex items-center justify-center pl-60 mt-[-30px]">
          <img src={PurpleStar} alt="purple star" width={10} />
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
    </section>
  );
}
