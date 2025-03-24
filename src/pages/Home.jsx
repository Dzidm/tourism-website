import Navbar from "../components/Navbar";
import bg from "../assets/image/bg.png"

function Landing () {
    return (
        <div className="bg" > 
        
            <Navbar/>
            <div>
                <img className=" flex h-full w-full bg-no-repeat bg-center items-center justify-center:" src={bg} alt="" />
            </div>
            <div className="flex flex-col justify-center text-center items-center mt-6 lg:mt-20">
        
            <h1 className=" flex text-4xl sm:text-7xl justify-center text-center tracking-wide">
            Discover great places in New york
            </h1>

            <p className=" flex mt-10 text-2xl  justify-center text-center text-neutral-500 max-w-4xl">
            Let's uncover the best places to eat, drink, and shop nearest to you.
            </p>
         

            <div className="flex flex-row justify-center my-10">
            {/* <a href="#" className="py-3 px-4  mx-3 rounded-md border bg-gray-600">
             where are going
                </a> */}
                {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border bg-gray-600"
                > destination </a> */}
                
                <input className="flex flex-row justify-center gap-0" type="text" name="where are you going" placeholder="where are you going"/>
                <input className="flex flex-row justify-center gap-0" type="text" name="New York" placeholder="New York" />
                <a href="#" className="py-3 px-4 mx-3 rounded-md border gap-0 bg-pink-800"
                > Search input </a>
                

            </div>
            
           
        </div>
        </div>
        
    );
}

// second method of how to write function
// const Landing = () => {
//     return (
//         <div>Landing Page</div>
//     )
// }

export default Landing;