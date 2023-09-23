import { Link } from "react-router-dom";
import BackIcon from "../assets/images/backIcon.png";
import PurpleStar from "../assets/images/purplestar.png";
import WhiteStar from "../assets/images/graystar.png";
import SocialMedia from "../assets/images/socialMedia.png";
import { useState } from "react";
import { useRegisterMutation } from "../redux/services/getlinkedAPI";

export default function contactPage() {
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    team_name: "",
    message: "",
    topic: "",
  });

  const [register, { isLoading, isError, error }] = useRegisterMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, first_name, phone_number, message } = formData;
    const postData = { email, first_name, phone_number, message };
    // console.log(postData);

    try {
      await register(postData).unwrap();
      console.log("successful");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="pt-[65px] md:pt-[120px] bg-[#150E28] text-white pb-10 h-screen">
      <div className="mx-6 pt-4 py-2">
        <Link to="/">
          <img
            src={BackIcon}
            alt="back icon"
            width={23}
            height={23}
            className="md:hidden"
          />
        </Link>
        <div className="md:flex items-center gap-x-20 justify-center">
          <div>
            <span className="flex items-center justify-center">
              <img
                src={PurpleStar}
                alt="purple star"
                width={11}
                className="justify-center"
              />
            </span>
            <div className="hidden md:block">
              <p className="text-[#D434FE] font-bold text-[20px] py-4">
                Get in touch
              </p>
              <p className="pb-4">
                Contact <br />
                Information
              </p>
              <p className="pb-4">
                27, Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </p>
              <p className="pb-6">Call Us: 07067981819</p>
              <p>
                we are open from Monday-Friday <br />
                08:00am-05:00pm
              </p>
            </div>

            <div className="hidden md:flex flex-col">
              <p className="pt-10 pb-2 text-start text-[20px] text-[#D434FE]">
                Share on
              </p>
              <img src={SocialMedia} alt="social media icons" width={120} />
            </div>
          </div>
          <div className="md:w-1/2 md:bg-[#271a4a] md:p-10 md:my-6">
            <div className="flex items-center justify-between">
              <p className="text-[#D434FE] text-[20px] font-bold pt-2 md:hidden">
                Questions or need <br />
                assistance? <br />
                Let us know about it
              </p>
              <p className="text-[#D434FE] text-[20px] font-bold py-2 hidden md:flex">
                Questions or need assistance? <br />
                Let us know about it
              </p>
              <img src={WhiteStar} alt="white star" width={16} />
            </div>
            <p className="py-4 md:hidden">
              Email us below to any question related <br />
              to our event
            </p>
            <form>
              <div className="flex flex-col gap-y-4">
                <input
                  type="text"
                  name="team_name"
                  value={formData.team_name}
                  onChange={handleChange}
                  placeholder="Team's Name"
                  className="md:hidden px-4 py-2 rounded focus:outline-none bg-[#20153d] border-white border"
                />
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="hidden md:flex px-4 py-2 rounded focus:outline-none bg-[#20153d] border-white border"
                />
                <input
                  type="text"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  placeholder="Topic"
                  className="md:hidden px-4 py-2 rounded focus:outline-none bg-[#20153d] border-white border"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="md:hidden px-4 py-2 rounded focus:outline-none bg-[#20153d] border-white border"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Mail"
                  className="hidden md:flex px-4 py-2 rounded focus:outline-none bg-[#20153d] border-white border"
                />
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="px-4 pt-4 pb-24 rounded focus:outline-none bg-[#20153d] border-white border"
                />
                <div className="flex justify-center pt-6 items-center">
                  <button
                    onClick={handleSubmit}
                    className="rounded px-10 md:ml-0 ml-4 py-2 bg-gradient-to-r from-[#D434FE] via-[#D434FE] to-[#903AFF]"
                  >
                    Submit
                  </button>
                </div>
                <span className="mt-[-45px]">
                  <img src={PurpleStar} alt="white star" width={8} />
                </span>
                <div className="md:hidden flex flex-col items-center justify-center">
                  <p className="pt-10 pb-2 text-center text-[#D434FE]">
                    Share on
                  </p>
                  <img src={SocialMedia} alt="social media icons" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
