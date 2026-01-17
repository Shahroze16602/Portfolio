export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
                    <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase">
                        Let's
                        <br />
                        Talk
                    </h2>
                    <div className="mt-12 md:mt-0 flex flex-col gap-4 text-right">
                        <a href="mailto:smshahroze16602@gmail.com" className="text-2xl md:text-3xl hover:text-accent transition-colors">
                            smshahroze16602@gmail.com
                        </a>
                        <p className="text-gray-500">
                            Multan, Pakistan
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm font-mono text-gray-600 uppercase tracking-wider border-t border-white/10 pt-8">
                    <p>© 2025 Muhammad Shahroze</p>
                    <div className="flex gap-8">
                        <a href="https://linkedin.com/in/muhammad-shahroze" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
