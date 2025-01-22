import NavigationHeader from "@/components/NavigationHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Star Code"
};

const AboutPage = () => {
    return (
        <div>
            <NavigationHeader />
            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
                <p className="text-gray-400 mb-6">
                    Welcome to Star Code Editor, where coding meets creativity and collaboration. Our mission is simple: to provide a fast, efficient, and innovative code editor designed with both beginners and experts in mind. We aim to create a platform that allows developers to express their ideas freely, learn from others, and build together. Whether you&apos;re just starting your coding journey or you&apos;re a seasoned developer, Star Code Editor is here to make your coding experience smooth, enjoyable, and empowering.
                </p>
                <p className="text-gray-400 mb-6">
                    What makes Star Code stand out is our unwavering commitment to improving the developer experience. Our platform doesn&apos;t just focus on being a code editor; it transforms into a space for creative collaboration. With real-time sharing, code interaction, and live problem-solving, we&apos;re creating a new way to code — one that brings developers together to build, learn, and grow as a community.
                </p>
                <p className="text-gray-400 mb-6">
                    At Star Code, we believe in the power of coding to bring people together and foster meaningful connections. It&apos;s not just about writing code; it&apos;s about empowering you to turn your ideas into reality, collaborate with others, and continuously evolve in your craft. This is why every decision we make is driven by the desire to support you — the developer.
                </p>

                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-400 mb-6">
                    Our vision for Star Code is a future where coding is not only accessible but also enjoyable and collaborative. We want to break down the barriers that often make coding feel isolating and complex. By providing a platform with real-time collaboration, seamless interactions, and a vibrant community, we aim to make coding a more social and engaging experience for everyone.
                </p>
                <p className="text-gray-400 mb-6">
                    We envision a platform where your growth as a coder is supported at every stage. Whether you&apos;re experimenting with your first lines of code or refining advanced algorithms, Star Code Editor is designed to grow alongside you. We&apos;re constantly innovating and listening to our users to ensure that our editor evolves to meet the needs of tomorrow&apos;s coding world.
                </p>

                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-400 mb-6">
                    Star Code was born out of the frustrations that many developers face with existing code editors: the clunky interfaces, the lack of collaboration, and the steep learning curve. We, too, were once on the search for a platform that made coding simpler, faster, and more connected. When we couldn&apos;t find one, we decided to build it ourselves.
                </p>
                <p className="text-gray-400 mb-6">
                    From a small team of passionate coders, Star Code evolved into a dynamic platform driven by the desire to create something better for the coding community. Our journey began by identifying the most common pain points developers face: limitations in collaboration, slow performance, and lack of intuitive design. We set out to build a solution that was simple to use, lightning fast, and powerful enough to accommodate all types of developers.
                </p>
                <p className="text-gray-400 mb-6">
                    As we developed, we realized that Star Code wasn&apos;t just a tool; it was a platform that could connect people, foster new learning opportunities, and fuel creativity. Today, we continue to innovate and expand our features, creating a hub where developers can grow together, share knowledge, and build the future of coding.
                </p>

                <h2 className="text-2xl font-bold mb-4">Collaboration and Community</h2>
                <p className="text-gray-400 mb-6">
                    One of the most exciting features of Star Code is our real-time collaboration. Imagine being able to write code with someone across the world, share your thoughts as you build, and tackle challenges together. Our platform makes this possible, enabling a unique environment where collaboration isn&apos;t just encouraged — it&apos;s built into the very fabric of our editor.
                </p>
                <p className="text-gray-400 mb-6">
                    Beyond the technical features, Star Code is a community of developers who are passionate about coding and eager to learn from one another. Whether you&apos;re looking for feedback on your latest project, need help with debugging, or want to share insights, Star Code is the perfect place to connect. Join our growing community, where collaboration and creativity thrive.
                </p>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Support</h2>
                    <p className="text-gray-400 mb-6">
                        We&apos;re here for you! Whether you&apos;re facing technical issues or just have a question about how to use a feature, our support team is ready to assist you. Here&apos;s how you can get in touch with us:
                    </p>
                    <ul className="list-disc pl-6 text-gray-400 mb-6">
                        <li className="mb-4">
                            <strong>Email Support:</strong> For any technical queries or assistance, feel free to email us at:
                            <div className="text-blue-400/70">
                                <a href="mailto:mardavjadaun113@gmail.com" className="text-blue-500">mardavjadaun113@gmail.com</a>
                            </div>
                        </li>
                        <li className="mb-4">
                            <strong>FAQs:</strong> You can visit our <a href="/faq" className="text-blue-500 hover:underline">Frequently Asked Questions</a> page for helpful information and quick solutions.
                        </li>
                        <li className="mb-4">
                            <strong>Community Support:</strong> We also have a growing Discord community where you can connect with other developers in real-time. Get quick help, share knowledge, and collaborate on projects. <a href="https://discord.gg/mWfFfTgS" className="text-blue-500" target="_blank" rel="noopener noreferrer">Join our Discord</a>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Support Us</h2>
                    <p className="text-gray-400 mb-4">
                        We are passionate about continuously improving Star Code, and if you love using our editor, consider supporting its development. One way to show your support is by buying us a coffee — every little bit helps us keep improving and adding new features!
                    </p>
                    <div className="text-center">
                        <a href="https://buymeacoffee.com/mardav.sj" target="_blank" rel="noopener noreferrer">
                            <button className="m-5 px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500">
                                Buy Us a Coffee
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
