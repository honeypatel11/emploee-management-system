const Home = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat min-h-[92.5vh] flex items-center justify-center"
            style={{ backgroundImage: "url('/img/hero01-img02.jpg')" }}
        >
       
            <div className="absolute inset-0 bg-black/50 z-0"></div>

         
            <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10 relative z-10 py-12 lg:py-20">
                
             
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left text-white">
                    <span className="inline-block bg-white/20 text-white px-4 py-1.5 text-[11px] font-semibold uppercase rounded-full tracking-wider">
                        HIREOX
                    </span>

                    <p className="text-sm text-gray-200 font-medium uppercase tracking-wider">
                        Powerful Bonds Within Teams
                    </p>

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        RIGHT PEOPLE FOR <br />
                        YOUR TEAM!
                    </h1>

                    <button className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-6 py-3 text-sm font-semibold text-gray-900 tracking-wide uppercase transition-all duration-300 hover:from-yellow-500 hover:to-yellow-400 hover:text-white">
                        <span className="transition-transform duration-300 group-hover:-translate-x-2">
                            More About
                        </span>
                        <svg
                            className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:-translate-x-4 group-hover:text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

              
              
            </div>
        </section>
    );
};

export default Home;
