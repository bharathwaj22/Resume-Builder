import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TermsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />

            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Page Title */}
                <h1 className="text-5xl font-bold text-gray-900 mb-10 border-b pb-3">
                    Terms of Use & Service
                </h1>

                {/* Policy Sections */}
                <div className="space-y-8 text-gray-800 leading-relaxed">
                    {/* Monthly Leave & CL Allowance */}
                    <section>
                        <div className="text-[16px] font-semibold mb-3">
                            Welcome to our Resume Builder! By using this platform, you agree to these Terms and Conditions, which follow the laws of India. These rules cover how you can use our tools, templates, and features to create, edit, and download your resumes.
                        </div>

                        <div className="text-[16px] font-semibold mb-3">
                            Please take a moment to read these Terms. If you don’t agree with any part of them, it’s best not to use the platform. By continuing to use our service, you confirm that you meet the eligibility requirements and are responsible for your account and actions. Any issues or disputes will be handled under Indian law and within Indian courts.
                        </div>

                    </section>

                    {/* General Rules */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>By using this Resume Builder website, you agree to these Terms and Conditions. This means you accept how the service works and how your information may be used. If you don’t agree, please stop using the website right away.</li>
                            <li>These Terms include other important policies, like the Subscription Policy, Privacy Policy, and Cookie Policy. They are all part of this agreement.</li>
                            <li>We may update these Terms from time to time. Updates will be posted on this page and will take effect immediately. While we might inform you of major changes, it’s your responsibility to check for updates. Using the website after changes have been posted means you accept the new Terms.</li>
                        </ul>
                    </section>

                    {/* Permission Time */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">User Account & Registration</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>To use some features of our Resume Builder, you’ll need to create an account. Make sure the information you provide is correct and up to date. Keep your username and password safe—don’t share them with anyone.</li>

                            <li>You’re responsible for everything that happens through your account. If someone else uses your account without permission, let us know right away. We may pause or close accounts that are being misused.</li>
                        </ul>
                    </section>

                    {/* Login After 10:30 AM */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Subscription & Payment Terms</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Our Resume Builder may offer subscription plans to access premium features. Some plans might include a free trial. Make sure to check the details before signing up.</li>
                            <li>Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You can cancel anytime through your account settings.</li>

                            <li>Payments are charged according to the plan you choose, and all billing is handled securely. Refunds are generally not provided after a payment is processed, except where required by law or in special cases.</li>
                        </ul>
                    </section>

                    {/* Working Hours & Break Time */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Use of the Service</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>You can use our Resume Builder to create resumes for personal or professional purposes. Please don’t use it for anything illegal or unauthorized.</li>
                            <li>All templates, designs, and content on the platform are protected. You are not allowed to copy, sell, share, or redistribute them without permission.</li>
                            <li>By using the service responsibly, you help keep the platform safe and useful for everyone.</li>
                        </ul>
                    </section>

                    {/*  */}



                    <section>
                        <h2 className="text-2xl font-semibold mb-3">User Content & Intellectual Property</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>The resumes and documents you create using our Resume Builder belong to you. You own the rights to the content you generate.</li>
                            <li>By using our platform, you give us permission to store, process, and display your content as needed to provide the service. We respect your privacy and won’t use your personal information for other purposes without your consent.</li>
                            <li>

                                You are responsible for the content you upload or create. Make sure it doesn’t violate any laws or the rights of others.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Privacy & Data Collection</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>We collect some information when you use our Resume Builder, such as your name, email, and any content you create. This information is stored securely and used only to provide and improve our services</li>
                            <li>We respect your privacy and follow applicable Indian data protection laws. For more details on how we handle your information and your rights, please read our Privacy Policy.</li>

                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Disclaimers & Limitations of Liability</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>We work hard to make sure our Resume Builder works well, but we cannot guarantee that every resume will be error-free or perfectly formatted. We are not responsible for any loss of data, or for how your resume is used by employers.</li>
                            <li>Using our service does not guarantee that you will get a job or specific results. The resumes you create are your responsibility, and any outcomes from using them are beyond our control.</li>

                        </ul>
                    </section>


                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Termination of Access</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>We may suspend or close your account if you break these Terms, misuse the platform, or engage in illegal activity.</li>
                            <li>After your account is terminated, you may lose access to your resumes, templates, and other content stored on the platform. You are responsible for saving any important information before termination. Some rights, like obligations to pay for subscriptions, may still apply even after your account is closed..</li>

                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Modifications to Terms</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>We may update or change these Terms from time to time to improve our services or comply with laws. When we do, the latest version will be posted on this page.</li>
                            <li>It’s your responsibility to check for updates. Continuing to use the Resume Builder after changes have been posted means you accept the new Terms. For major updates, we may notify you directly, but even if we don’t, the updated Terms will still apply.</li>

                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Governing Law & Dispute Resolution</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>These Terms are governed by the laws of India. Any disputes related to the use of this Resume Builder will be handled under Indian law and within the courts of India.</li>
                            <li>We encourage you to reach out to us directly if any issues arise. Where possible, disputes may be resolved through discussion or mediation before involving the courts.</li>

                        </ul>
                    </section>



                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default TermsPage;
