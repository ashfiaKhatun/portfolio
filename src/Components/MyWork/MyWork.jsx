import { FaGithub } from "react-icons/fa";
import mywork_data from "../../assets/mywork_data";
import { MdPreview } from "react-icons/md";

const MyWork = () => {
    return (
        <div id="work" className="text-white opacity-80 mt-8 lg:mt-16 px-2">
            <h1 className="text-center text-2xl lg:text-5xl font-semibold mb-6 lg:mb-16">My Work</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {
                    mywork_data.map((work, index) => {
                        return <div key={index} className="transition hover:scale-110 hover:border-2 rounded-xl border-purple-500 p-2">
                            <img src={work.w_img}  key={index} alt="" />

                            <div className=" flex justify-between mt-8">
                                    <a href={work.github} target="_blank" className="flex items-center gap-2"><FaGithub></FaGithub> Github</a>

                                    <a href={work.liveLink} target="_blank"  className="flex items-center gap-2"><MdPreview /> Live Server</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default MyWork;