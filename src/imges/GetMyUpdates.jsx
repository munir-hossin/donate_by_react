

function GetMyUpdates() {
    return (
        <>
            <div className="lg:w-[75rem] mx-auto py-10 px-2"
            >
                <h2 className="text-center font-bold text-4xl">Get My Updates</h2>
                <p className="text-center pt-5 pb-8 text-lg text-gray-500">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim</p>
                
                <div className="sm:w-[600px] lg:w-[800px] h-[200px] bg-yellow-50 mx-auto flex items-center justify-center">
                <div className="text-center bg-white">
                  <input className=" rounded-md border-0" type="text" placeholder="Email" />
                  <button className="py-2 px-5 rounded-md border-0 bg-red-400 font-medium text-white">Subscribe</button>
                </div>
            </div>
            </div>
        </>
    );
}

export default GetMyUpdates;