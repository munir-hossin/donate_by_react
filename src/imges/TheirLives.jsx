import Button from "../components/Button";
// import therImg from "../imges/images/theirlives.png"
import noerImg from "../imges/images/nomore.png"


function TheirLives() {
    return (
        <div className="lg:w-[75rem] px-2 mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-cente text-center lg:text-start">
            <div className="">
                <h2 className="font-bold text-5xl mt-5">Their lives depend on your donation</h2>
                <p className="text-gray-500 text-lg py-5">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
                <p className="text-gray-500 text-lg pb-7">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset.</p>
              <Button>How to Contribute?</Button>
            </div>
               <div className="my-5 sm:py-10 mx-auto">
                <img src={noerImg} alt="" />
                {/* <img src={therImg} alt="" /> */}
               </div>
           </div>
        </div>
    );
}

export default TheirLives;