import NavigationHeader from "@/components/NavigationHeader";

const AboutPage = () => {
    return (
        <div>
            <NavigationHeader />
            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
                <p className="text-gray-400 mb-6">
                    Welcome to Genesis Code Editor, your ultimate companion for seamless and efficient coding! We&apos;re dedicated to creating a lightweight, fast, and user-friendly code editor that empowers developers of all levels. Whether you&apos;re a beginner exploring the world of programming or a seasoned professional, our mission is to make your coding journey smoother, more collaborative, and truly enjoyable.
                </p>
                <p className="text-gray-400 mb-6">
                    What sets us apart is our commitment to innovation and collaboration. With Genesis Code Editor, you can not only write and edit code effortlessly but also share your code snippets in real-time with your peers. Our platform allows developers to interact with each other&apos;s work, exchange ideas, and build solutions together. It&apos;s more than just a code editor, it is a hub for creativity and teamwork.
                </p>
                <p className="text-gray-400 mb-6">
                    We believe coding is a powerful tool that can bring people together. By fostering a community of developers who learn from and inspire one another, we aim to create an ecosystem that drives innovation and growth. At Genesis, every feature we build and every decision we make is guided by the idea of empowering our users to achieve more.
                </p>

                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-400 mb-6">
                    At Genesis Code Editor, we envision a future where coding is accessible, collaborative, and enjoyable for everyone. Our goal is to eliminate barriers and create tools that let you focus on what truly matters: bringing your ideas to life. We believe that by providing real-time collaboration features, intuitive design, and a supportive community, we can make coding a shared experience that transcends boundaries.
                </p>
                <p className="text-gray-400 mb-6">
                    We see Genesis Code Editor as more than just a tool, it&apos;s a platform that evolves with its users. By listening to your feedback and staying ahead of emerging technologies, we strive to provide an editor that grows alongside you. Together, we can redefine what it means to code in a modern, connected world.
                </p>

                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-400 mb-6">
                    Genesis Code Editor was born out of a simple yet powerful idea: coding should be intuitive, collaborative, and fun. As developers ourselves, we often found existing tools to be either overly complex or lacking in essential features. Frustrated by these limitations, we decided to create a solution that truly caters to the needs of the coding community.
                </p>
                <p className="text-gray-400 mb-6">
                    Our journey began with a small team of passionate developers who shared a common vision. We started by identifying the core pain points faced by coders—lack of collaboration tools, slow performance, and a steep learning curve—and set out to address them one by one. The result was Genesis Code Editor: a platform that combines simplicity, speed, and powerful features in a way that feels natural and effortless.
                </p>
                <p className="text-gray-400 mb-6">
                    Over time, we added innovative features like real-time code sharing, snippet collaboration, and interactive code reviews. These additions transformed Genesis into a thriving community where developers can not only work efficiently but also learn from and inspire each other. Today, we are proud to be a part of your coding journey and are committed to helping you achieve your goals.
                </p>

                <h2 className="text-2xl font-bold mb-4">Collaboration and Community</h2>
                <p className="text-gray-400 mb-6">
                    One of the most exciting features of Genesis Code Editor is the ability to share and collaborate on code snippets in real-time. Imagine working on a project and being able to instantly share your code with your team or friends, no matter where they are. Our real-time sharing feature makes this possible, enabling you to work together, solve problems faster, and learn from each other in a dynamic and interactive way.
                </p>
                <p className="text-gray-400 mb-6">
                    Beyond the technical features, Genesis Code Editor is also a growing community of like-minded individuals who share a passion for coding. Whether you&apos;re looking for feedback on your code, seeking advice, or simply want to connect with other developers, our platform provides the tools and space to do so. Join us on this journey, and let&apos;s build something amazing together.
                </p>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Support</h2>
                    <p className="text-gray-400 mb-6">
                        If you&apos;re experiencing any issues or have any questions, we are here to help! You can reach out to our support team through the following methods:
                    </p>
                    <ul className="list-disc pl-6 text-gray-400 mb-6">
                        <li className="mb-4">
                            <strong>Email Support:</strong> For assistance with any technical issues or inquiries, please email us at:
                            <div className="text-blue-400/70">
                                <a href="mailto:mardavjadaun113@gmail.com" className="text-blue-500">mardavjadaun113@gmail.com</a>
                            </div>
                        </li>
                        <li className="mb-4">
                            <strong>FAQs:</strong> Visit our <a href="/faq" className="text-blue-500 hover:underline">Frequently Asked Questions</a> page for answers to common questions.
                        </li>
                        <li className="mb-4">
                            <strong>Community:</strong> Our community is still small, growing gradually, but we would love for you to join us on Discord! It&apos;s a great place to get real-time support and connect with other users. <a href="https://discord.gg/yourdiscordlink" className="text-blue-500" target="_blank" rel="noopener noreferrer">Join our Discord</a>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Support Us</h2>
                    <p className="text-gray-400 mb-4">
                        If you find Genesis Code Editor helpful and want to support its development, consider buying us a coffee:
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
