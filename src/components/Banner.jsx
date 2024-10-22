import Button from "./Button";


function Banner() {
    return(
       <>
        <div>
        <div className="mx-auto px-2 bg-bannerImage bg-cover bg-no-repeat">
            <h1 className='text-white text-center font-bold text-5xl pt-20 md:pt-40 font-inter'>Let’s Help Those Who Are <br /> More In Need</h1>
            <p className='text-white font-popins text-center font-normal my-5'>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim</p>
            <div className='text-center pb-20  md:pb-40'><Button>Donate Now</Button></div>
        </div>
        </div>
       </>
    )
}

export default Banner;

