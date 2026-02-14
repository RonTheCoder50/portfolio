export default function AboutSection({ theme }) {
    let color = (theme.trim() === 'light' ? 'text-sky-900 bg-gray-200' : 'text-white/60 bg-gray-700');

    return (
        <div className="flex flex-col gap-4 items-center p-2 my-6">
            <p id="about" className="text-start text-xl md:text-3xl font-medium tracking-wide underline underline-offset-2 decoration-gray-400 p-2">
                About
            </p>

            <p className={`${color} text-start w-full mx-auto max-w-[90%] lg:max-w-[70%] text-sm md:text-base lg:text-lg tracking-wide font-medium leading-8 font-mono p-4 rounded-md`}>
                Hello Dear👋, <br /> I'm Really enjoying this Journey it started back from when i bought my life first laptop 17 jan 2024, and then 
                my journey begins, I learn lot of things in programming such as Java with DSA, it gives me problem solving mindest!, later i start web development  with my own interest that building awesome UI's that i like most, now I'm currently exploring backend technologies to connect my frontend with backend to make an real world problem solving application!!
            </p>

            <p className="font-medium text-lg md:text-xl p-1 mt-14">
                Thanks ❤️ For Visiting My Portfolio!!
            </p>
        </div>
    );
}