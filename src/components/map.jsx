import { features } from "../constants";

const Map = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Find Us
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Track our{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        EV Hubs
                    </span>
                </h2>
            </div>
            <div className="relative mt-20 border-b border-neutral-800 overflow-hidden rounded-xl"
            >
                <div className="aspect-w-16 aspect-h-9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12737032.511819005!2d74.08388087013385!3d31.767929471288422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sev%20power%20station!5e0!3m2!1sen!2sin!4v1715777438357!5m2!1sen!2sin"

                        className="relative mt-20 border-b border-neutral-800 min-h-[600px] min-w-[1230px] items-center p-10 border border-neutral-500 rounded-xl absolute inset-0 w-full h-full"
                        allowFullScreen
                        loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
