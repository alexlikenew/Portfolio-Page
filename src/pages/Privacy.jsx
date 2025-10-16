import React from 'react';

function Privacy(props) {
    return (
        <div className="w-full mt-20 sm:mt-28 md:mt-32 lg:mt-40 mb-20 sm:mb-28 md:mb-32 lg:mb-40">
            <div className="container">


                <div
                    className="w-full mt-20 sm:mt-28 md:mt-32 lg:mt-40 mb-20 sm:mb-28 md:mb-32 lg:mb-40 flex flex-col gap-10 px-4 sm:px-6 md:px-10 lg:px-20 text-gray-800 leading-relaxed">

                    <h1 className="text-4xl sm:text-5xl font-bold mb-2">Privacy Policy</h1>
                    <span className="text-gray-500 text-sm">Last updated: 10.10.2025</span>

                    <section>
                        <p>
                            This Privacy Policy explains how personal data is collected, used, stored and protected on
                            <a href="https://alexlikenew.pl" className="text-blue-600 hover:underline ml-1"
                               target="_blank"
                               rel="noopener noreferrer">alexlikenew.pl</a>,
                            which is the personal portfolio and professional website of a frontend developer.
                            By using this Site, you accept the practices described in this policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Data Controller</h2>
                        <p>
                            The data controller for this Site is:
                        </p>
                        <address className="not-italic mt-2">
                            <strong>Oleksandr Petryshyn — Website Owner</strong><br/>
                            Website: <a href="https://alexlikenew.pl" className="text-blue-600 hover:underline"
                                        target="_blank" rel="noopener noreferrer">alexlikenew.pl</a><br/>
                            Email: <a href="mailto:alexlikenew.dev@gmail.com"
                                      className="text-blue-600 hover:underline">alexlikenew.dev@gmail.com</a>
                        </address>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">2. What Data We Collect</h2>
                        <p className="mb-2">We collect and process the following categories of information:</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">A. Data you provide voluntarily</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Contact form data (name, email, message content).</li>
                            <li>Optional attachments (e.g., CV or portfolio, only if explicitly sent).</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">B. Automatically collected technical data</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>IP address, browser type, OS version</li>
                            <li>Visited pages, timestamps, referral source</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">C. Cookies and tracking</h3>
                        <p>
                            We use cookies to improve performance, remember preferences, and analyze site usage.
                            Learn more in the Cookies section below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Cookies & Similar Technologies</h2>
                        <p className="mb-2">
                            Cookies are small text files stored on your device. We use:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Essential cookies</strong> – required for website functionality.</li>
                            <li><strong>Analytics cookies</strong> – help understand user behavior and improve UX.</li>
                            <li><strong>Preference cookies</strong> – remember language or theme settings.</li>
                        </ul>
                        <p className="mt-4">
                            You can manage or delete cookies anytime in your browser settings.
                            For more details, visit
                            <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline ml-1"
                               target="_blank" rel="noopener noreferrer">
                                Google’s Privacy Policy
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Retention</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Contact form messages: stored up to 2 years.</li>
                            <li>Analytics data: anonymized and stored up to 26 months.</li>
                            <li>Logs: retained up to 24 months for security reasons.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Security</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>HTTPS/TLS encryption</li>
                            <li>Regular updates of software and dependencies</li>
                            <li>Secure cloud hosting and access control</li>
                        </ul>
                        <p className="mt-2">
                            While all reasonable measures are taken, no system is 100% secure. In case of a data breach,
                            users will be notified in accordance with applicable laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Your GDPR Rights</h2>
                        <p className="mb-2">If you are an EU/EEA resident, you have the right to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Access and obtain a copy of your data</li>
                            <li>Request correction or deletion</li>
                            <li>Restrict processing or object to it</li>
                            <li>Withdraw consent anytime</li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, contact:
                            <a href="mailto:alexlikenew.dev@gmail.com"
                               className="text-blue-600 hover:underline ml-1">alexlikenew.dev@gmail.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Contact Information</h2>
                        <p>
                            For any questions about this Privacy Policy or how your data is handled, please contact:
                        </p>
                        <address className="not-italic mt-2">
                            <a href="mailto:alexlikenew.dev@gmail.com"
                               className="text-blue-600 hover:underline">alexlikenew.dev@gmail.com</a><br/>
                            Website: <a href="https://alexlikenew.pl" className="text-blue-600 hover:underline"
                                        target="_blank" rel="noopener noreferrer">alexlikenew.pl</a>
                        </address>
                    </section>
                    
                </div>
            </div>
        </div>
    );
}

export default Privacy;