import Button from "../components/Button";


function DonateToday() {
    return (
        <>
            <div className=" mx-auto">
                <h1 className="text-center font-bold text-4xl pt-10 sm:pt-20 font-inter">Donate Today</h1>
                <p className="pt-2 sm:py-5 text-center font-normal text-base text-slate-500 font-popins">
                    Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim
                </p>
                <div className="flex gap-2 flex-wrap py-5 sm:py-10 justify-center mx-auto">
                    <div className="w-32 hover:bg-red-100 hover:text-red-500 shadow-xl font-bold h-28 text-center bg-slate-50">
                        <p className="pt-12">1000 $</p>
                    </div>
                    <div className="w-32 hover:bg-red-100 hover:text-red-500 shadow-xl font-bold h-28 text-center bg-slate-50">
                        <p className="pt-12">1000 $</p>
                    </div>
                    <div className="w-32 hover:bg-red-100 hover:text-red-500 shadow-xl font-bold h-28 text-center bg-slate-50">
                        <p className="pt-12">1000 $</p>
                    </div>
                    <div className="w-32 hover:bg-red-100 hover:text-red-500 shadow-xl font-bold h-28 text-center bg-slate-50">
                        <p className="pt-12">1000 $</p>
                    </div>
                    <div className="w-32 hover:bg-red-100 hover:text-red-500 shadow-xl font-bold h-28  text-center bg-slate-50">
                        <p className="pt-12">1000 $</p>
                    </div>
                </div>

                <p className="text-center py-3 border-b-2 text-slate-500">Other Amount (Taka)</p>
                <div className="text-center ">
                    <Button className="mt-4 mb-20">Download now</Button>
                    {/* <button className="py-2 px-6 mt-5 mb-20 text-white font-medium rounded-lg  bg-red-400">Download now</button> */}
                </div>
            </div>
        </>
    );
}

export default DonateToday;






