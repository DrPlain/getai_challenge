import RegisterImage from "../assets/images/registerImage.png";
import PurpleStar from "../assets/images/purplestar.png";
import Walking from "../assets/images/walking.png";
import walkingMale from "../assets/images/walkingMale.png";

export default function RegisterPage() {
  return (
    <div className="pt-[65px] md:pt-[80px] bg-[#150E28] text-white pb-10">
      <div className="flex items-center justify-center pb-8">
        <img
          src={RegisterImage}
          alt="image for registration section"
          width={195}
          height={155}
        />
        <span className="flex items-center justify-end mt-[-40px]">
          <img src={PurpleStar} alt="purple star" width={12} />
        </span>
      </div>
      <div>
        <div>
          <p className="text-center">
            Be part of this movement{" "}
            <span className="text-[#D434FE] pl-4">................</span>
          </p>
          <span className="flex items-center justify-center mt-[-34px] ml-[200px]">
            <img src={Walking} alt="walking emoji" />
            <img src={walkingMale} alt="walking male emoji" />
          </span>
          <p className="pb-4 pt-2 text-center">CREATE YOUR ACCOUNT</p>
          <form>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <div>
                <p>Team's Name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter the name of your group"
                  className="rounded border border-white px-4 py-2 focus:outline-none bg-[#20153d]"
                />
              </div>
              <div>
                <p>Phone</p>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="rounded border border-white px-4 py-2 focus:outline-none bg-[#20153d]"
                />
              </div>
              <div>
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="rounded border border-white px-4 py-2 focus:outline-none bg-[#20153d]"
                />
              </div>
              <div>
                <p>Project Topic</p>
                <input
                  type="text"
                  name="projectTopic"
                  placeholder="Enter your group project topic"
                  className="rounded border border-white px-4 py-2 focus:outline-none bg-[#20153d]"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="w-2/3">
                  <p>Category</p>
                  <select name="category"></select>
                  <option value="Selected your category" selected>
                    Select your category
                  </option>
                </div>
                <div className="w-1/3">
                  <p>Group Size</p>
                  <select name="size"></select>
                  <option value="size" selected>
                    Select
                  </option>
                </div>
              </div>
              <p className="text-[#D434FE]">
                Please review your registration before submitting
              </p>
              <div className="flex justify-center pt-6 items-center">
                <button className="rounded px-10 md:ml-0 ml-4 py-2 bg-gradient-to-r from-[#D434FE] via-[#D434FE] to-[#903AFF]">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
