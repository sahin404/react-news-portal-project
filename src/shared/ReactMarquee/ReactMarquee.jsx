import Marquee from "react-fast-marquee";
const ReactMarquee = () => {
    return (
        <div className="flex bg-gray-100 p-4 mt-5">
            <button className=" bg-red-600 text-white text-md px-4 rounded-lg py-1">Breaking News</button>
            <Marquee className="text-xl text-red-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reiciendis maiores, animi voluptatibus atque accusantium eius, quis voluptates, nemo eos error facere ducimus magnam vero necessitatibus. Nam totam itaque vero!</Marquee>
        </div>
    );
};

export default ReactMarquee;