import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Subscription = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />

            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Page Title */}
                <h1 className="text-5xl font-roboto font-bold text-gray-900 mb-10 border-b pb-3">
                    Subscription Policy
                </h1>

                {/* Policy Sections */}
                <div className="space-y-8 text-gray-800 leading-relaxed">
                    {/* Monthly Leave & CL Allowance */}


                    {/* General Rules */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Subscription Plans</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <div>Our Resume Builder offers several subscription plans that give you access to premium features, templates, and tools. Make sure to review the details of each plan carefully before subscribing.</div>
                        </ul>
                    </section>

                    {/* Permission Time */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Free Trial (if available)</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <div>Some subscription plans may come with a free trial. Your trial will automatically end when the period is over, and your subscription will continue unless you cancel before the trial ends.</div>
                        </ul>
                    </section>

<section>
                        <h2 className="text-2xl font-semibold mb-3">Billing & Payment</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <div>All payments are handled securely through the available payment methods. Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date.</div>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Cancellation</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <div>You can cancel your subscription anytime from your account settings. Even after cancellation, you’ll still have access to premium features until the current billing period ends.</div>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Refunds</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <div>Payments are usually non-refundable. Refunds will only be provided if required by law or in special cases.</div>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Changes to Subscription</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <div>We may update subscription plans, pricing, or features from time to time. Existing subscribers will be informed, and any changes will apply only to future billing cycles.</div>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Your Responsibility</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <div> You are responsible for making sure your payments are on time and that your billing information is correct and up to date.</div>
                        </ul>
                    </section>
              


                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Subscription;