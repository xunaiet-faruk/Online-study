

const Faq = () => {
    return (
        <div className="container mx-auto p-10">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How do I join a study group on this platform
                        </div>
                        <div className="collapse-content">
                            <p>To join a study group, simply create an account on our platform, browse through the available groups based on your interests, and click 'Join Group' on the group you want to participate in.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Is my personal information safe and secure when using this platform?
                        </div>
                        <div className="collapse-content">
                            <p> Yes, your privacy and security are our top priorities. We use advanced encryption methods to safeguard your personal information, and we do not share your data with third parties</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Can I use the platform on my smartphone or tablet, or is it limited to desktop computers?
                        </div>
                        <div className="collapse-content">
                            <p> Our platform is fully responsive and can be accessed on desktop computers, smartphones, and tablets. You can study on the go using our mobile app or through a web browser.</p>
                        </div>
                    </div>
                </div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            : Is there a minimum or maximum commitment required for participating in study groups
                        </div>
                        <div className="collapse-content">
                            <p>There is no strict commitment requirement. However, we encourage active participation and respectful engagement within the study groups. Each group may have its own guidelines, so be sure to review the group rules upon joining.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Are there specific study materials provided, or do users need to bring their own
                        </div>
                        <div className="collapse-content">
                            <p>Study materials vary by group and may include textbooks, articles, videos, and collaborative documents. Some groups may provide materials, while others encourage participants to contribute their own resources.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Can I participate in multiple study groups simultaneously
                        </div>
                        <div className="collapse-content">
                            <p>Yes, you can join and participate in multiple study groups at the same time. Just ensure you manage your time effectively to contribute meaningfully to each group.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    );
};

export default Faq;