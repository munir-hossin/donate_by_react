import dImage1 from "../imges/images/our-donate1.png";
import dImage2 from "../imges/images/our-donate2.png";
import dImage3 from "../imges/images/our-donate3.png";

function OurDonatePlan() {
    return (
        <>
            <div className="lg:w-[75rem] mx-auto md:mb-24 md:mt-14">
                <div>
                    <h1 className="text-center font-bold text-4xl font-inter">Our Donate Plan</h1>
                    <p className="pt-5 pb-5 sm:pb-10  text-center font-popins text-base text-slate-400">
                        Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md mx-auto gap-3 px-2">
                    <div className=" bg-cyan-50 px-4">
                        <img className="pt-16 pb-4" src={dImage1} alt="img" />
                        <h2 className="font-bold text-2xl">Food for a family</h2>
                        <p className="font-normal pb-12 text-base text-slate-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div className=" bg-rose-50 px-4">
                        <img className="pt-16 pb-4" src={dImage2} alt="img" />
                        <h2 className="font-bold text-2xl">Food for a family</h2>
                        <p className="font-normal pb-12 text-base text-slate-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div className=" bg-amber-50 px-4">
                        <img className="pt-16 pb-4" src={dImage3} />
                        <h2 className="font-bold text-2xl">Food for a family</h2>
                        <p className="font-normal pb-12 text-base text-slate-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurDonatePlan;
