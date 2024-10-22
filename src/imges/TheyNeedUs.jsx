import Button from "../components/Button";
// import theyNeedImg from "../imges/images/theyneedus.png"
import giveImg from "../imges/images/give.png"


function TheyNeedUs() {
    return (
        <>
             <div className="lg:w-[75rem] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-2">         
               <div className="py-5 sm:py-10 lg:ml-0 m-auto">
                <img src={giveImg} alt="img" />
               </div>

               <div className="lg:pr-6 text-center lg:text-start">
                <h2 className="font-bold text-4xl">Their lives depend on your donation</h2>
                <p className="text-gray-500 text-lg sm:py-5">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
                <p className="text-gray-500 text-lg sm:pb-7">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset.</p>
                <Button className="mt-3">How to Contract us</Button>
            </div>
           </div>
        </div>
        </>
    );
}

export default TheyNeedUs;