import { Link } from "react-router-dom";
import criteriaImage from "../assets/images/criteriaImage.png";

export default function CriteriaSection() {
  return (
    <section className="text-white md:flex items-center justify-center gap-6 pb-4 border-b-white border-b-1">
      <div className="pt-8 flex flex-col md:flex-row items-center justify-center md:w-1/2">
        <img
          src={criteriaImage}
          alt="Criteria section image"
          width={332}
          height={275}
          className="md:w-[710px] md:h-[587px]"
        />
      </div>
      <div className="md:w-2/3 p-12">
        <p className="text-center md:text-start font-bold pt-4">
          Judging Criteria
        </p>
        <p className="text-[#D434FE] text-center md:text-start font-bold">
          Key attributes
        </p>
        <p className="pt-6 text-center md:text-start px-10 md:px-0">
          <span className="text-[#D434FE]">Innovation and Creativity:</span>{" "}
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="pt-6 text-center md:text-start px-10 md:px-0">
          <span className="text-[#D434FE]">Functionality:</span> Assess how well
          the solution works. Does it perform its intended functions effectively
          and without major issues? Judges would consider the completeness and
          robustness of the solution.
        </p>
        <p className="pt-6 text-center md:text-start px-10 md:px-0">
          <span className="text-[#D434FE]">Impact and Relevance:</span>{" "}
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits. robustness of the solution.
        </p>
        <p className="pt-6 text-center md:text-start px-10 md:px-0">
          <span className="text-[#D434FE]">Technical Complexity:</span> Evaluate
          the technical sophistication of the solution. Judges would consider
          the complexity of the code, the use of advanced technologies or
          algorithms, and the scalability of the solution.
        </p>
        <p className="pt-6 text-center md:text-start px-10 md:px-0">
          <span className="text-[#D434FE]">Adherence to Hackathon Rules:</span>{" "}
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <Link to="#">
          <div className="flex justify-center md:justify-start pt-6 items-center">
            <button className="rounded px-10 md:ml-0 ml-4 py-2 bg-gradient-to-r from-[#D434FE] via-[#D434FE] to-[#903AFF]">
              Read more
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}
