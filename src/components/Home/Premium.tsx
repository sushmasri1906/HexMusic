import {
	FiStar,
	FiDownload,
	FiMusic,
	FiHeadphones,
	FiCheckCircle,
} from "react-icons/fi";
import Link from "next/link";

export default function Premium() {
	const plans = [
		{
			icon: <FiMusic className="text-5xl text-white mx-auto" />,
			title: "Monthly",
			price: "$9.99/month",
			features: ["Unlimited skips", "Ad-free experience", "Offline downloads"],
			buttonText: "Subscribe Now",
		},
		{
			icon: <FiStar className="text-5xl text-white mx-auto" />,
			title: "Yearly",
			price: "$99.99/year",
			features: [
				"Unlimited skips",
				"Ad-free experience",
				"Offline downloads",
				"Exclusive content",
			],
			buttonText: "Subscribe Now",
		},
		{
			icon: <FiHeadphones className="text-5xl text-white mx-auto" />,
			title: "Family",
			price: "$149.99/year",
			features: [
				"Up to 6 accounts",
				"Unlimited skips",
				"Ad-free experience",
				"Offline downloads",
			],
			buttonText: "Subscribe Now",
		},
	];

	const features = [
		{
			icon: <FiMusic className="text-4xl text-[#8A2BE2] mx-auto" />,
			title: "High-Quality Streaming",
			description:
				"Stream your favorite tracks in high-quality audio without interruptions.",
		},
		{
			icon: <FiDownload className="text-4xl text-[#8A2BE2] mx-auto" />,
			title: "Offline Music",
			description:
				"Download music and enjoy it without an internet connection.",
		},
		{
			icon: <FiHeadphones className="text-4xl text-[#8A2BE2] mx-auto" />,
			title: "Ad-Free Experience",
			description:
				"Enjoy uninterrupted music without ads, for an immersive listening experience.",
		},
	];

	return (
		<div className="container mx-auto p-8">
			{/* Title Section */}
			<h1 className="text-4xl font-extrabold text-[#A259FF] text-center mb-4">
				Go Premium
			</h1>
			<p className="mt-4 text-lg text-center text-gray-100 max-w-2xl mx-auto">
				Unlock exclusive features with a premium account. Choose a plan that
				suits you and enjoy unlimited music, offline listening, and much more!
			</p>

			{/* Plan Cards Section */}
			<div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
				{plans.map((plan, index) => (
					<div
						key={index}
						className="bg-gradient-to-r from-[#8A2BE2] to-[#6A0DAD] p-6 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
						{plan.icon}
						<h2 className="text-3xl font-semibold text-white mt-4">
							{plan.title}
						</h2>
						<p className="text-xl mt-2 text-white">{plan.price}</p>
						<ul className="text-left mt-4 space-y-2 text-white">
							{plan.features.map((feature, index) => (
								<li key={index} className="flex items-center">
									<FiCheckCircle className="text-white mr-2" />
									{feature}
								</li>
							))}
						</ul>
						<Link href="/subscribe">
							<button className="mt-6 bg-white text-[#6A0DAD] py-2 px-6 rounded-full  text-xl transition-all">
								{plan.buttonText}
							</button>
						</Link>
					</div>
				))}
			</div>

			{/* Why Go Premium Section */}
			<div className="mt-12">
				<h2 className="text-3xl font-semibold text-white text-center mb-6">
					Why Go Premium?
				</h2>
				<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all">
							{feature.icon}
							<h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
							<p className="mt-2 text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>

			{/* Call to Action */}
			<div className="mt-12 text-center">
				<Link href="/subscribe">
					<button className="bg-[#A259FF] text-white py-4 px-8 rounded-full hover:bg-[#8A2BE2] text-xl transition-all">
						Subscribe Now and Enjoy Unlimited Music!
					</button>
				</Link>
			</div>
		</div>
	);
}
