// components/Install.js

import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Install() {
	return (
		<div className="flex justify-center items-center h-[75vh]  w-full ">
			<div className="text-center max-w-md w-full p-6 md:p-10">
				<h1 className="text-3xl md:text-4xl font-extrabold text-[#A259FF] mb-4">
					Install HexMusic App
				</h1>
				<p className="text-lg text-gray-100 mb-6">
					Get the HexMusic app and enjoy music on the go, with offline listening
					and more!
				</p>

				<div className="flex justify-center">
					<Link href="/install">
						<button className="bg-[#8A2BE2] text-white py-3 px-8 rounded-full flex items-center gap-2 text-lg transition-all hover:bg-[#4B0082]">
							<FiDownload className="text-xl" />
							Install Now
						</button>
					</Link>
				</div>
			</div>
            
		</div>
	);
}
